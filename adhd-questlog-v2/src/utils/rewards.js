// ============================================================
// REWARD UTILITIES — XP/Gold calculation per design document
// ============================================================

import { PRIORITIES, EFFORT } from '../store/initialState';

/**
 * Calculate XP earned for completing a task.
 * Applies priority multiplier + overdue penalty (unless talent removes it).
 */
export function calculateTaskReward(task, talents = []) {
  const effortData = EFFORT[task.effort] || EFFORT.M;
  const priorityData = PRIORITIES[task.priority] || PRIORITIES.MEDIUM;

  let baseXP = effortData.baseXP;
  let xp = Math.round(baseXP * priorityData.xpMult);

  const isOverdue = task.isOverdue || (task.dueAt && new Date(task.dueAt) < new Date());
  const hasNoOverduePenalty = talents.includes('second_wind');

  if (isOverdue && !hasNoOverduePenalty) {
    xp = Math.round(xp * 0.6); // 40% reduction for overdue
  } else if (!isOverdue) {
    xp = Math.round(xp * 1.1); // 10% bonus for on-time
  }

  const gold = Math.round(xp * 0.2);

  return { xp, gold, isOverdue };
}

/**
 * XP for completing a subtask — smaller win.
 */
export function calculateSubtaskReward(talents = []) {
  const base = 12;
  const hasSubtaskBonus = talents.includes('subtask_master');
  const xp = hasSubtaskBonus ? Math.round(base * 1.5) : base;
  const gold = 2;
  return { xp, gold };
}

/**
 * XP for completing a focus session.
 * Sessions that run to completion earn more.
 */
export function calculateFocusReward(minutes, completed, talents = []) {
  const baseXP = Math.round(minutes * 2.5);
  const focusMult = talents.includes('deep_focus') ? 1.15 : 1;
  const completionBonus = completed ? 1.25 : 0.7;
  const xp = Math.round(baseXP * focusMult * completionBonus);
  const gold = Math.round(xp * 0.15);
  return { xp, gold };
}

/**
 * Determine XP needed to reach next level.
 * Scales moderately to stay motivating.
 */
export function xpForLevel(level) {
  return Math.round(200 * Math.pow(level, 1.4));
}

/**
 * Process level-ups after XP gain.
 * Returns new level, remaining XP, and whether a level-up occurred.
 */
export function processLevelUp(currentLevel, currentXP, gainedXP) {
  let level = currentLevel;
  let xp = currentXP + gainedXP;
  let leveledUp = false;
  let talentPointsEarned = 0;

  while (xp >= xpForLevel(level)) {
    xp -= xpForLevel(level);
    level += 1;
    leveledUp = true;
    talentPointsEarned += 1;
  }

  return {
    level,
    xp,
    xpToNext: xpForLevel(level),
    leveledUp,
    talentPointsEarned,
  };
}

/**
 * Format a relative time string ("in 2h", "2h ago", "Overdue")
 */
export function formatDueTime(dueAt) {
  if (!dueAt) return null;
  const diff = new Date(dueAt) - new Date();
  const abs = Math.abs(diff);

  if (abs < 60 * 1000) return diff < 0 ? 'Just overdue' : 'Due now';
  if (abs < 60 * 60 * 1000) {
    const mins = Math.round(abs / 60000);
    return diff < 0 ? `${mins}m overdue` : `in ${mins}m`;
  }
  if (abs < 24 * 60 * 60 * 1000) {
    const hrs = Math.round(abs / 3600000);
    return diff < 0 ? `${hrs}h overdue` : `in ${hrs}h`;
  }
  const days = Math.round(abs / 86400000);
  return diff < 0 ? `${days}d overdue` : `in ${days}d`;
}

/**
 * Generate a unique ID.
 */
export function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

/**
 * Sort tasks by urgency: overdue first, then priority, then due time.
 */
export function sortTasks(tasks) {
  const priorityOrder = { URGENT: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
  return [...tasks].sort((a, b) => {
    const aOverdue = a.isOverdue || (a.dueAt && new Date(a.dueAt) < new Date());
    const bOverdue = b.isOverdue || (b.dueAt && new Date(b.dueAt) < new Date());
    if (aOverdue !== bOverdue) return aOverdue ? -1 : 1;
    const pDiff = (priorityOrder[a.priority] || 2) - (priorityOrder[b.priority] || 2);
    if (pDiff !== 0) return pDiff;
    if (a.dueAt && b.dueAt) return new Date(a.dueAt) - new Date(b.dueAt);
    return 0;
  });
}
