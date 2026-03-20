-- ============================================================
-- MIGRATION: Wall posts + Block system
-- Paste into: Supabase Dashboard → SQL Editor → Run
-- Run this AFTER schema.sql
-- ============================================================

-- ── WALL POSTS ────────────────────────────────────────────
-- Each user has a "wall" — friends can post on it
create table public.wall_posts (
  id            uuid primary key default uuid_generate_v4(),
  wall_owner_id uuid references public.profiles(id) on delete cascade not null,
  author_id     uuid references public.profiles(id) on delete cascade not null,
  content       text not null check (char_length(content) between 1 and 500),
  is_deleted    boolean not null default false,
  created_at    timestamptz default now()
);

create index wall_posts_owner_idx on public.wall_posts(wall_owner_id, created_at desc);

-- ── BLOCKED USERS ─────────────────────────────────────────
create table public.blocked_users (
  blocker_id  uuid references public.profiles(id) on delete cascade not null,
  blocked_id  uuid references public.profiles(id) on delete cascade not null,
  created_at  timestamptz default now(),
  primary key (blocker_id, blocked_id)
);

-- ── ROW LEVEL SECURITY ─────────────────────────────────────

alter table public.wall_posts   enable row level security;
alter table public.blocked_users enable row level security;

-- Wall posts: visible to wall owner + author + mutual friends
-- (simplified: visible to anyone who is friends with the wall owner)
create policy "wall_posts_read" on public.wall_posts
  for select using (
    auth.uid() = wall_owner_id
    or auth.uid() = author_id
    or exists (
      select 1 from public.friendships
      where status = 'accepted'
      and (
        (user_id   = auth.uid() and friend_id = wall_owner_id)
        or (friend_id = auth.uid() and user_id = wall_owner_id)
      )
    )
  );

-- Wall posts: any friend of the wall owner can post
create policy "wall_posts_insert" on public.wall_posts
  for insert with check (
    auth.uid() = author_id
    and (
      auth.uid() = wall_owner_id
      or exists (
        select 1 from public.friendships
        where status = 'accepted'
        and (
          (user_id   = auth.uid() and friend_id = wall_owner_id)
          or (friend_id = auth.uid() and user_id = wall_owner_id)
        )
      )
    )
    -- Cannot post if blocked by wall owner
    and not exists (
      select 1 from public.blocked_users
      where blocker_id = wall_owner_id and blocked_id = auth.uid()
    )
  );

-- Wall posts: author can soft-delete their own; wall owner can soft-delete any
create policy "wall_posts_delete" on public.wall_posts
  for update using (
    auth.uid() = author_id or auth.uid() = wall_owner_id
  );

-- Blocked users: own rows only
create policy "blocked_users_own" on public.blocked_users
  for all using (auth.uid() = blocker_id);

-- ── REAL-TIME ─────────────────────────────────────────────
alter publication supabase_realtime add table public.wall_posts;
