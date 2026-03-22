// ============================================================
// DAILY QUESTS
// 3 quests per day, reset at midnight local time
// Seeded from date so everyone gets same pool (social fun)
// ============================================================

// ── Quest templates ────────────────────────────────────────
const QUEST_POOL = [
  // ── Task-based ─────────────────────────────────────────
  {
    id: 'complete_any_1',
    type: 'tasks_completed',
    title: 'First Blood',
    description: 'Complete 1 task today.',
    icon: '⚔️',
    target: 1,
    reward: { gold: 25, xp: 30 },
    color: '#5CDD8B',
  },
  {
    id: 'complete_any_3',
    type: 'tasks_completed',
    title: 'On a Roll',
    description: 'Complete 3 tasks today.',
    icon: '🎯',
    target: 3,
    reward: { gold: 60, xp: 80 },
    color: '#5CDD8B',
  },
  {
    id: 'complete_any_5',
    type: 'tasks_completed',
    title: 'Momentum Builder',
    description: 'Complete 5 tasks today.',
    icon: '🔥',
    target: 5,
    reward: { gold: 100, xp: 140 },
    color: '#FF6584',
  },
  {
    id: 'complete_high_1',
    type: 'high_priority_completed',
    title: 'Priority One',
    description: 'Complete 1 High or Urgent priority task.',
    icon: '⚡',
    target: 1,
    reward: { gold: 50, xp: 70 },
    color: '#F5C842',
  },
  {
    id: 'complete_high_2',
    type: 'high_priority_completed',
    title: 'No More Avoidance',
    description: 'Complete 2 High or Urgent priority tasks.',
    icon: '💥',
    target: 2,
    reward: { gold: 90, xp: 120 },
    color: '#FF3860',
  },
  {
    id: 'complete_quick_3',
    type: 'quick_tasks_completed',
    title: 'Quick Wins',
    description: 'Complete 3 quick tasks (≤15 min).',
    icon: '⚡',
    target: 3,
    reward: { gold: 55, xp: 75 },
    color: '#4FC3F7',
  },
  {
    id: 'complete_overdue_1',
    type: 'overdue_completed',
    title: 'Debt Collector',
    description: 'Complete 1 overdue task.',
    icon: '🧾',
    target: 1,
    reward: { gold: 70, xp: 90 },
    color: '#FFB74D',
  },
  {
    id: 'add_tasks_2',
    type: 'tasks_added',
    title: 'Quest Log Updated',
    description: 'Add 2 new tasks to your quest log.',
    icon: '📋',
    target: 2,
    reward: { gold: 20, xp: 25 },
    color: '#B39DDB',
  },

  // ── Focus-based ─────────────────────────────────────────
  {
    id: 'focus_any',
    type: 'focus_sessions',
    title: 'Enter the Zone',
    description: 'Complete 1 focus session.',
    icon: '🔮',
    target: 1,
    reward: { gold: 40, xp: 60 },
    color: '#7E57C2',
  },
  {
    id: 'focus_two',
    type: 'focus_sessions',
    title: 'Deep Dive',
    description: 'Complete 2 focus sessions.',
    icon: '🌊',
    target: 2,
    reward: { gold: 80, xp: 110 },
    color: '#29B6F6',
  },
  {
    id: 'focus_long',
    type: 'focus_minutes',
    title: 'Sustained Effort',
    description: 'Accumulate 45 minutes of focus time.',
    icon: '⏱️',
    target: 45,
    reward: { gold: 75, xp: 100 },
    color: '#4FC3F7',
  },
  {
    id: 'focus_very_long',
    type: 'focus_minutes',
    title: 'Flow State',
    description: 'Accumulate 90 minutes of focus time.',
    icon: '🌀',
    target: 90,
    reward: { gold: 130, xp: 180 },
    color: '#7E57C2',
  },

  // ── Gold-based (always works regardless of enemy) ──────
  {
    id: 'earn_gold_100',
    type: 'gold_earned',
    title: 'Treasure Hunter',
    description: 'Earn 100 gold today.',
    icon: '💰',
    target: 100,
    reward: { gold: 50, xp: 40 },
    color: '#F5C842',
  },
  {
    id: 'earn_gold_300',
    type: 'gold_earned',
    title: 'Gold Hoarder',
    description: 'Earn 300 gold today.',
    icon: '💎',
    target: 300,
    reward: { gold: 120, xp: 90 },
    color: '#F5C842',
  },

  // ── Social-based ────────────────────────────────────────
  {
    id: 'boost_friend',
    type: 'boosts_sent',
    title: 'Team Spirit',
    description: 'Send a focus boost to a friend.',
    icon: '💙',
    target: 1,
    reward: { gold: 30, xp: 40 },
    color: '#4FC3F7',
  },
  {
    id: 'wall_post',
    type: 'wall_posts',
    title: 'Keeping in Touch',
    description: 'Post on a friend\'s wall.',
    icon: '💬',
    target: 1,
    reward: { gold: 25, xp: 30 },
    color: '#CE93D8',
  },
];

// ── Date seeding — same 3 quests for everyone each day ────
function getDayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
}

function seededRandom(seed) {
  // Simple deterministic hash → float
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return Math.abs(h) / 2147483647;
}

export function getDailyQuests() {
  const dayKey = getDayKey();
  const pool   = [...QUEST_POOL];
  const picked = [];

  // Pick 3 unique quests seeded by date
  for (let i = 0; i < 3; i++) {
    const rand  = seededRandom(`${dayKey}-slot-${i}`);
    const idx   = Math.floor(rand * pool.length);
    picked.push(pool[idx]);
    pool.splice(idx, 1); // no duplicates
  }

  return picked;
}

// ── Storage key ────────────────────────────────────────────
export function getDailyQuestStorageKey() {
  return `dq_daily_${getDayKey()}`;
}

// ── Load/save daily progress ───────────────────────────────
export function loadDailyProgress() {
  try {
    const key  = getDailyQuestStorageKey();
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
  } catch {}
  // Fresh day — initialize progress for today's quests
  const quests  = getDailyQuests();
  const initial = {};
  quests.forEach(q => { initial[q.id] = { progress: 0, claimed: false }; });
  return initial;
}

export function saveDailyProgress(progress) {
  try {
    const key = getDailyQuestStorageKey();
    localStorage.setItem(key, JSON.stringify(progress));
    // Clean up old days
    Object.keys(localStorage)
      .filter(k => k.startsWith('dq_daily_') && k !== key)
      .forEach(k => localStorage.removeItem(k));
  } catch {}
}

export function getTimeUntilReset() {
  const now       = new Date();
  const midnight  = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const ms = midnight - now;
  const h  = Math.floor(ms / 3_600_000);
  const m  = Math.floor((ms % 3_600_000) / 60_000);
  return `${h}h ${m}m`;
}
