// ============================================================
// INITIAL STATE — Data models aligned with the design document
// ============================================================

export const PRIORITIES = {
  LOW: { label: 'Low', color: '#6C8EBF', icon: '○', xpMult: 0.8 },
  MEDIUM: { label: 'Medium', color: '#F5A623', icon: '◐', xpMult: 1.0 },
  HIGH: { label: 'High', color: '#FF6584', icon: '●', xpMult: 1.3 },
  URGENT: { label: 'Urgent', color: '#FF3860', icon: '⚡', xpMult: 1.6 },
};

export const EFFORT = {
  XS: { label: 'Quick (5m)', minutes: 5, baseXP: 20 },
  S: { label: 'Short (15m)', minutes: 15, baseXP: 40 },
  M: { label: 'Medium (30m)', minutes: 30, baseXP: 75 },
  L: { label: 'Long (1h)', minutes: 60, baseXP: 140 },
  XL: { label: 'Deep (2h+)', minutes: 120, baseXP: 250 },
};

export const TALENTS = [
  {
    id: 'quick_start',
    name: 'Quick Start',
    description: 'Earn +20 XP bonus for starting any task within 5 minutes of viewing it.',
    icon: '⚡',
    effect_type: 'xp_bonus_on_start',
    effect_value: 20,
    cost: 1,
  },
  {
    id: 'deep_focus',
    name: 'Deep Focus',
    description: 'Focus sessions earn +15% more XP.',
    icon: '🔮',
    effect_type: 'xp_mult_focus',
    effect_value: 0.15,
    cost: 1,
  },
  {
    id: 'second_wind',
    name: 'Second Wind',
    description: 'Completing an overdue task gives full XP instead of reduced.',
    icon: '🌬️',
    effect_type: 'no_overdue_penalty',
    effect_value: true,
    cost: 2,
  },
  {
    id: 'subtask_master',
    name: 'Subtask Master',
    description: 'Subtask XP increased by 50%.',
    icon: '📋',
    effect_type: 'subtask_xp_mult',
    effect_value: 0.5,
    cost: 1,
  },
  {
    id: 'streak_shield',
    name: 'Streak Shield',
    description: 'Once per week, missing a daily will not break your streak.',
    icon: '🛡️',
    effect_type: 'streak_forgiveness',
    effect_value: 1,
    cost: 2,
  },
];

export const SAMPLE_TASKS = [
  {
    id: 'task-1',
    title: 'Review project proposal',
    notes: 'Check the Q3 roadmap and leave comments before the team meeting.',
    dueAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours from now
    priority: 'HIGH',
    effort: 'M',
    status: 'pending',
    tags: ['work'],
    subtasks: [
      { id: 'st-1a', title: 'Read through executive summary', done: true },
      { id: 'st-1b', title: 'Add inline comments', done: false },
      { id: 'st-1c', title: 'Write summary feedback', done: false },
    ],
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    completedAt: null,
    isOverdue: false,
  },
  {
    id: 'task-2',
    title: 'Reply to Sarah\'s email',
    notes: '',
    dueAt: new Date(Date.now() + 30 * 60 * 1000).toISOString(), // 30 min from now
    priority: 'URGENT',
    effort: 'XS',
    status: 'pending',
    tags: ['work', 'comms'],
    subtasks: [],
    createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    completedAt: null,
    isOverdue: false,
  },
  {
    id: 'task-3',
    title: 'Grocery run',
    notes: 'Pick up ingredients for the week. Check the list on the fridge.',
    dueAt: new Date(Date.now() + 5 * 60 * 60 * 1000).toISOString(),
    priority: 'MEDIUM',
    effort: 'S',
    status: 'pending',
    tags: ['personal', 'errands'],
    subtasks: [
      { id: 'st-3a', title: 'Check fridge for what\'s needed', done: false },
      { id: 'st-3b', title: 'Go to store', done: false },
    ],
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    completedAt: null,
    isOverdue: false,
  },
  {
    id: 'task-4',
    title: 'Do 20-min stretching routine',
    notes: 'Back has been tight — do the hip flexor and shoulder opener sequences.',
    dueAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // Overdue
    priority: 'LOW',
    effort: 'XS',
    status: 'pending',
    tags: ['health'],
    subtasks: [],
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    completedAt: null,
    isOverdue: true,
  },
];

export const INITIAL_USER = {
  id: 'user-1',
  displayName: 'Adventurer',
  level: 3,
  xp: 340,
  xpToNext: 500,
  gold: 127,
  streak: 5,
  talentPoints: 1,
  unlockedTalents: ['quick_start'],
  title: 'Aspiring Chronicler',
};

export const COMPLETED_TASKS_HISTORY = [
  {
    id: 'hist-1',
    title: 'Morning standup notes',
    completedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    xpEarned: 40,
    goldEarned: 8,
  },
  {
    id: 'hist-2',
    title: 'Send weekly update to manager',
    completedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    xpEarned: 75,
    goldEarned: 15,
  },
];

export const TAG_COLORS = {
  work: '#4FC3F7',
  personal: '#B39DDB',
  health: '#69F0AE',
  errands: '#F5A623',
  comms: '#FF6584',
  school: '#FFD54F',
};
