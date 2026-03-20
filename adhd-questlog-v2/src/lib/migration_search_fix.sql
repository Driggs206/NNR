-- ============================================================
-- MIGRATION: Fix profile search RLS
-- Paste into a NEW query tab in Supabase SQL Editor → Run
-- ============================================================

-- The existing policies only let friends read each other's profiles.
-- This blocks the search feature from finding new people.
-- We add a policy that lets any logged-in user read basic profile
-- fields so search works. Sensitive data (email etc) never lives
-- in profiles so this is safe.

create policy "profiles_search_read" on public.profiles
  for select using (
    auth.role() = 'authenticated'
  );
