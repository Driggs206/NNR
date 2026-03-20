# 🧠⚡ Dopamine Quest — ADHD Task RPG

Turn your tasks into quests. Defeat monsters with focus. Level up your life.

Dopamine Quest is a gamified task manager built specifically for ADHD brains — combining idle RPG combat, streaks, gear progression, and social accountability into a productivity app that actually feels rewarding to use.

## Features

- ⚔️ **Idle Combat** — complete tasks to deal damage to monsters
- 🔮 **Focus Mode** — Pomodoro timer that writes to a live session for friends to boost
- 🎒 **Equipment System** — 105 items across 7 slots, 5 rarities, 4 set bonuses
- 👥 **Social** — friends, focus boosts, wall posts, multiplayer quests
- 🏆 **Badges & Avatars** — 23 unlockable avatars tied to achievements
- 🌟 **Talent Tree** — spend points on passive upgrades

## Stack

- React + Vite
- Supabase (Postgres + Auth + Realtime)

## Setup

1. Copy `.env.example` to `.env` and add your Supabase keys
2. Run `schema.sql` in Supabase SQL Editor
3. Run `migration_wall.sql`, `migration_search_fix.sql`, `migration_avatars.sql` in order
4. `npm install && npm run dev`

## Credits

Named by someone without ADHD. Diagnosed twice by someone who initially rejected the name.
