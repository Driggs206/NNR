-- ============================================================
-- QUESTLOG SUPABASE SCHEMA
-- Paste this entire file into: Supabase Dashboard → SQL Editor → Run
-- ============================================================

-- ── Enable UUID extension ─────────────────────────────────
create extension if not exists "uuid-ossp";

-- ── PROFILES ──────────────────────────────────────────────
-- Extends Supabase auth.users with game state
create table public.profiles (
  id            uuid references auth.users(id) on delete cascade primary key,
  display_name  text not null default 'Adventurer',
  title         text not null default 'Aspiring Chronicler',
  level         integer not null default 1,
  xp            integer not null default 0,
  xp_to_next    integer not null default 500,
  gold          integer not null default 0,
  streak        integer not null default 0,
  talent_points integer not null default 0,
  unlocked_talents text[] not null default '{}',
  last_active_at timestamptz default now(),
  created_at    timestamptz default now()
);

-- ── TASKS ─────────────────────────────────────────────────
create table public.tasks (
  id            uuid primary key default uuid_generate_v4(),
  user_id       uuid references public.profiles(id) on delete cascade not null,
  title         text not null,
  notes         text default '',
  due_at        timestamptz,
  priority      text not null default 'MEDIUM',
  effort        text not null default 'S',
  status        text not null default 'pending',
  tags          text[] default '{}',
  is_overdue    boolean default false,
  recurrence    text,
  created_at    timestamptz default now(),
  completed_at  timestamptz
);

-- ── SUBTASKS ──────────────────────────────────────────────
create table public.subtasks (
  id          uuid primary key default uuid_generate_v4(),
  task_id     uuid references public.tasks(id) on delete cascade not null,
  user_id     uuid references public.profiles(id) on delete cascade not null,
  title       text not null,
  done        boolean default false,
  order_index integer default 0
);

-- ── TASK HISTORY (completed tasks log) ────────────────────
create table public.task_history (
  id           uuid primary key default uuid_generate_v4(),
  user_id      uuid references public.profiles(id) on delete cascade not null,
  title        text not null,
  xp_earned    integer default 0,
  gold_earned  integer default 0,
  completed_at timestamptz default now()
);

-- ── COMBAT STATE ──────────────────────────────────────────
create table public.combat_state (
  user_id            uuid references public.profiles(id) on delete cascade primary key,
  current_monster_id text not null default 'slime_distract',
  monster_hp         integer,
  monsters_killed    integer default 0,
  equipped           jsonb default '{
    "head": null, "body": null, "gloves": null,
    "legs": null, "boots": null, "ring": null,
    "ring2": null, "necklace": null
  }'::jsonb,
  inventory          text[] default '{}',
  low_energy_mode    boolean default false,
  last_active_at     timestamptz default now()
);

-- ── REWARD EVENTS (append-only log) ───────────────────────
create table public.reward_events (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid references public.profiles(id) on delete cascade not null,
  source_type text not null, -- 'task' | 'subtask' | 'focus' | 'combat' | 'shop'
  xp_delta    integer default 0,
  gold_delta  integer default 0,
  created_at  timestamptz default now()
);

-- ── FOCUS SESSIONS ────────────────────────────────────────
-- Used for presence (who is focusing right now) + future boosts
create table public.focus_sessions (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid references public.profiles(id) on delete cascade not null,
  task_title  text,
  started_at  timestamptz default now(),
  ended_at    timestamptz,
  duration_m  integer,
  completed   boolean default false,
  xp_earned   integer default 0
);

-- ── FRIENDSHIPS ───────────────────────────────────────────
create table public.friendships (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid references public.profiles(id) on delete cascade not null,
  friend_id   uuid references public.profiles(id) on delete cascade not null,
  status      text not null default 'pending', -- 'pending' | 'accepted'
  created_at  timestamptz default now(),
  unique(user_id, friend_id)
);

-- ── FOCUS BOOSTS ──────────────────────────────────────────
create table public.focus_boosts (
  id               uuid primary key default uuid_generate_v4(),
  session_id       uuid references public.focus_sessions(id) on delete cascade not null,
  booster_id       uuid references public.profiles(id) on delete cascade not null,
  created_at       timestamptz default now()
);

-- ── MULTIPLAYER QUESTS ────────────────────────────────────
create table public.multiplayer_quests (
  id           uuid primary key default uuid_generate_v4(),
  title        text not null,
  description  text,
  quest_type   text not null default 'contribution', -- 'contribution' | 'shared'
  goal_count   integer not null default 5,
  progress     integer default 0,
  status       text default 'active', -- 'active' | 'completed' | 'expired'
  xp_reward    integer default 200,
  gold_reward  integer default 100,
  badge_reward text,
  expires_at   timestamptz,
  created_at   timestamptz default now()
);

create table public.quest_participants (
  quest_id    uuid references public.multiplayer_quests(id) on delete cascade,
  user_id     uuid references public.profiles(id) on delete cascade,
  contribution integer default 0,
  joined_at   timestamptz default now(),
  primary key (quest_id, user_id)
);

-- ── BADGES ────────────────────────────────────────────────
create table public.user_badges (
  id         uuid primary key default uuid_generate_v4(),
  user_id    uuid references public.profiles(id) on delete cascade not null,
  badge_id   text not null,
  earned_at  timestamptz default now(),
  showcased  boolean default false,
  unique(user_id, badge_id)
);

-- ============================================================
-- ROW LEVEL SECURITY
-- Users can only read/write their own data
-- ============================================================

alter table public.profiles           enable row level security;
alter table public.tasks              enable row level security;
alter table public.subtasks           enable row level security;
alter table public.task_history       enable row level security;
alter table public.combat_state       enable row level security;
alter table public.reward_events      enable row level security;
alter table public.focus_sessions     enable row level security;
alter table public.friendships        enable row level security;
alter table public.focus_boosts       enable row level security;
alter table public.multiplayer_quests enable row level security;
alter table public.quest_participants enable row level security;
alter table public.user_badges        enable row level security;

-- Profiles: own row only
create policy "profiles_own" on public.profiles
  for all using (auth.uid() = id);

-- Profiles: friends can read your profile (for social features)
create policy "profiles_friends_read" on public.profiles
  for select using (
    auth.uid() = id or
    exists (
      select 1 from public.friendships
      where status = 'accepted'
      and ((user_id = auth.uid() and friend_id = id)
        or (friend_id = auth.uid() and user_id = id))
    )
  );

-- Tasks: own rows only
create policy "tasks_own" on public.tasks
  for all using (auth.uid() = user_id);

-- Subtasks: own rows only
create policy "subtasks_own" on public.subtasks
  for all using (auth.uid() = user_id);

-- Task history: own rows only
create policy "task_history_own" on public.task_history
  for all using (auth.uid() = user_id);

-- Combat state: own row only
create policy "combat_own" on public.combat_state
  for all using (auth.uid() = user_id);

-- Reward events: own rows only
create policy "reward_events_own" on public.reward_events
  for all using (auth.uid() = user_id);

-- Focus sessions: own rows + friends can read (for boost feature)
create policy "focus_sessions_own" on public.focus_sessions
  for all using (auth.uid() = user_id);

create policy "focus_sessions_friends_read" on public.focus_sessions
  for select using (
    auth.uid() = user_id or
    exists (
      select 1 from public.friendships
      where status = 'accepted'
      and ((user_id = auth.uid() and friend_id = focus_sessions.user_id)
        or (friend_id = auth.uid() and user_id = focus_sessions.user_id))
    )
  );

-- Friendships: see your own requests + ones sent to you
create policy "friendships_own" on public.friendships
  for all using (auth.uid() = user_id or auth.uid() = friend_id);

-- Focus boosts: boosters can insert; session owner can read
create policy "focus_boosts_read" on public.focus_boosts
  for select using (
    auth.uid() = booster_id or
    exists (
      select 1 from public.focus_sessions
      where id = focus_boosts.session_id and user_id = auth.uid()
    )
  );

create policy "focus_boosts_insert" on public.focus_boosts
  for insert with check (auth.uid() = booster_id);

-- Multiplayer quests: participants can read; system inserts
create policy "quests_participant_read" on public.multiplayer_quests
  for select using (
    exists (
      select 1 from public.quest_participants
      where quest_id = multiplayer_quests.id and user_id = auth.uid()
    )
  );

create policy "quest_participants_own" on public.quest_participants
  for all using (auth.uid() = user_id);

-- Badges: own rows only; showcase is public
create policy "badges_own" on public.user_badges
  for all using (auth.uid() = user_id);

create policy "badges_showcase_read" on public.user_badges
  for select using (showcased = true);

-- ============================================================
-- TRIGGER: auto-create profile + combat_state on signup
-- ============================================================

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', 'Adventurer'));

  insert into public.combat_state (user_id)
  values (new.id);

  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- REAL-TIME: enable for social features
-- ============================================================

alter publication supabase_realtime add table public.focus_sessions;
alter publication supabase_realtime add table public.focus_boosts;
alter publication supabase_realtime add table public.friendships;
alter publication supabase_realtime add table public.quest_participants;
