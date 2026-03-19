// ============================================================
// COMBAT ENGINE — Passive DPS, task bursts, buffs, offline gains
// ============================================================

import { getEquipmentStats } from '../data/items';

// ─── BASE PLAYER STATS ────────────────────────────────────
export const BASE_PLAYER_STATS = {
  attack:      10,   // base damage per tick
  speed:       1.0,  // attacks per second (base)
  critChance:  0.05, // 5% base crit
  critDamage:  1.5,  // 150% of normal damage on crit
  focus:       0,    // boosts task XP rewards
  resilience:  0,    // reduces penalties
};

// ─── TICK RATE ────────────────────────────────────────────
export const TICK_MS = 2000; // combat ticks every 2 seconds

// ─── CALCULATE EFFECTIVE PLAYER STATS ─────────────────────
export function getPlayerStats(level, equipped, talentBonus = {}) {
  const levelBonus = {
    attack:    Math.floor(level * 2.5),
    critChance: level * 0.002,
    speed:     0,
    critDamage: 0,
    focus:     0,
    resilience: 0,
  };

  const { stats: gearStats } = getEquipmentStats(equipped);

  return {
    attack:     BASE_PLAYER_STATS.attack + levelBonus.attack + (gearStats.attack || 0) + (talentBonus.attack || 0),
    speed:      BASE_PLAYER_STATS.speed  + (gearStats.speed || 0)  + (talentBonus.speed || 0),
    critChance: Math.min(0.75, BASE_PLAYER_STATS.critChance + levelBonus.critChance + (gearStats.critChance || 0) + (talentBonus.critChance || 0)),
    critDamage: BASE_PLAYER_STATS.critDamage + (gearStats.critDamage || 0) + (talentBonus.critDamage || 0),
    focus:      BASE_PLAYER_STATS.focus + (gearStats.focus || 0) + (talentBonus.focus || 0),
    resilience: BASE_PLAYER_STATS.resilience + (gearStats.resilience || 0) + (talentBonus.resilience || 0),
  };
}

// ─── DAMAGE CALCULATION ───────────────────────────────────
/**
 * Roll a single attack hit.
 * Returns { damage, isCrit }
 */
export function rollAttack(playerStats, activeBuffs = []) {
  let atk = playerStats.attack;
  let crit = playerStats.critChance;

  // Apply active buffs
  activeBuffs.forEach(buff => {
    if (buff.type === 'attack_mult')  atk  *= buff.value;
    if (buff.type === 'crit_boost')   crit  = Math.min(0.9, crit + buff.value);
    if (buff.type === 'slow_player')  atk  *= buff.value; // enemy phase effect
  });

  const isCrit = Math.random() < crit;
  const damage = isCrit
    ? Math.round(atk * playerStats.critDamage)
    : Math.round(atk * (0.9 + Math.random() * 0.2)); // ±10% variance

  return { damage, isCrit };
}

// ─── TASK BURST ───────────────────────────────────────────
/**
 * When a task is completed: returns burst damage + buff.
 */
export function onTaskComplete(playerStats) {
  const burstDamage = Math.round(playerStats.attack * 5);
  const isCrit = Math.random() < (playerStats.critChance + 0.2); // crit spike
  const finalDamage = isCrit ? Math.round(burstDamage * playerStats.critDamage) : burstDamage;

  return {
    damage:  finalDamage,
    isCrit,
    buff: {
      id:       `focus_boost_${Date.now()}`,
      type:     'attack_mult',
      label:    'Task Focus!',
      value:    1.5,
      durationMs: 10_000,
      expiresAt:  Date.now() + 10_000,
      icon:     '⚡',
    },
  };
}

/**
 * When a subtask is completed: smaller burst.
 */
export function onSubtaskComplete(playerStats) {
  const damage = Math.round(playerStats.attack * 1.2);
  return { damage, isCrit: false };
}

/**
 * When a focus session is active: passive DPS multiplier applied each tick.
 */
export function getFocusSessionMultiplier(sessionActive) {
  return sessionActive ? 1.4 : 1.0;
}

// ─── MOMENTUM MODE ────────────────────────────────────────
/**
 * Momentum streak boosts attack speed.
 * completedInWindow: tasks completed in last 30 min
 */
export function getMomentumMultiplier(completedInWindow) {
  if (completedInWindow >= 5) return 1.5;
  if (completedInWindow >= 3) return 1.3;
  if (completedInWindow >= 1) return 1.15;
  return 1.0;
}

// ─── ARMOR MITIGATION ─────────────────────────────────────
export function applyArmor(rawDamage, armor) {
  // Soft armor formula: each point reduces ~3% damage, max ~70%
  const reduction = Math.min(0.7, armor * 0.03);
  return Math.max(1, Math.round(rawDamage * (1 - reduction)));
}

// ─── PHASE TRANSITIONS ────────────────────────────────────
/**
 * Check if monster has entered a new phase based on current HP.
 * Returns the triggered phase or null.
 */
export function checkPhaseTransition(monster, currentHp, previousHp) {
  if (!monster.phases) return null;
  for (const phase of monster.phases) {
    const threshold = monster.max_hp * phase.hp_threshold;
    if (previousHp > threshold && currentHp <= threshold) {
      return phase;
    }
  }
  return null;
}

// ─── OFFLINE GAINS ────────────────────────────────────────
/**
 * Calculate damage dealt while the app was closed.
 * Only 50% efficiency to keep active play better.
 */
export function calculateOfflineGains(playerStats, lastActiveMs, currentMs) {
  const offlineSec = Math.max(0, (currentMs - lastActiveMs) / 1000);
  const maxOfflineSec = 8 * 60 * 60; // cap at 8 hours
  const cappedSec = Math.min(offlineSec, maxOfflineSec);

  const dpsBase = playerStats.attack * playerStats.speed;
  const damage = Math.round(dpsBase * cappedSec * 0.5);
  const gold   = Math.round(damage * 0.015); // rough gold from idle
  const hours  = Math.round(cappedSec / 3600 * 10) / 10;

  return { damage, gold, offlineSec: cappedSec, hours };
}

// ─── MONSTER KILL REWARDS ─────────────────────────────────
export function rollMonsterRewards(monster) {
  const [minGold, maxGold] = monster.gold_drop;
  const gold = minGold + Math.floor(Math.random() * (maxGold - minGold + 1));
  const xp   = monster.xp_drop;

  const loot = [];
  (monster.loot_table || []).forEach(entry => {
    if (Math.random() < entry.chance) {
      loot.push(entry.item);
    }
  });

  return { gold, xp, loot };
}

// ─── DPS DISPLAY ──────────────────────────────────────────
export function calcDisplayDPS(playerStats) {
  const avgDmg = playerStats.attack * (1 + playerStats.critChance * (playerStats.critDamage - 1));
  return Math.round(avgDmg * playerStats.speed);
}
