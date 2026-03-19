# ⚔️ QuestLog — ADHD Gamified Task Manager

**Node.js requirement: 18, 20, or 22.x (any patch). Works with Node 22.11.0.**
**Built with Vite 4 for maximum compatibility.**

## Quick start

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # production build → /dist
npm run preview    # preview production build
```

## Project structure

```
src/
├── store/initialState.js      # Data models, sample tasks, talents catalog
├── utils/rewards.js           # XP/gold math, level-up, task sorting
├── hooks/useGameState.js      # useGameState + useFocusTimer hooks
├── styles/globals.css         # CSS design system & animations
├── components/
│   ├── Navigation.jsx         # Sidebar: XP bar, stats, nav
│   ├── TaskCard.jsx           # Task row with subtasks & completion
│   ├── AddTaskModal.jsx       # Quick-add form (progressive disclosure)
│   └── RewardEffects.jsx      # Floating XP/gold + level-up banner
├── views/
│   ├── Dashboard.jsx          # Quest board: next action + task list
│   ├── FocusMode.jsx          # Full-screen Pomodoro timer
│   ├── RewardsScreen.jsx      # Badges, stats, history
│   └── TalentsScreen.jsx      # Unlock productivity perks
└── App.jsx                    # Root: view router + state wiring
```

## Features

- Task CRUD with priorities, effort estimates, subtasks, tags, due dates
- "Next Best Action" spotlight — one clear starting point
- Overdue recovery prompts (no shame, just encouragement)
- XP + Gold on every completion (priority × effort multipliers)
- Level-up system with talent points
- 5 unlockable talents: Deep Focus, Quick Start, Second Wind, Subtask Master, Streak Shield
- Full-screen Pomodoro focus timer (5/15/25/45/60 min)
- Rewards screen with badges and completion history
- LocalStorage persistence across sessions
