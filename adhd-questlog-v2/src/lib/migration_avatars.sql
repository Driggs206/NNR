-- ============================================================
-- MIGRATION: Add avatar_id to profiles
-- Paste into a NEW query tab in Supabase SQL Editor → Run
-- ============================================================

alter table public.profiles
  add column if not exists avatar_id text default 'the_planner';
