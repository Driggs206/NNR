// ============================================================
// ITEM SETS — Thematic set bonuses
// Each set grants bonuses when 2, 3, or 4 pieces are equipped
// ============================================================

export const ITEM_SETS = {
  chronicler: {
    id: 'chronicler',
    name: 'The Chronicler',
    icon: '📜',
    color: '#4FC3F7',
    description: 'For those who turn every task into a story.',
    pieces: ['helmet_chronicler_1', 'chest_chronicler_1', 'gloves_chronicler_1', 'legs_chronicler_1'],
    bonuses: {
      2: { label: '2pc: +20% Task XP',          effects: [{ type: 'task_xp_bonus', value: 0.20 }] },
      3: { label: '3pc: +35% Task XP',          effects: [{ type: 'task_xp_bonus', value: 0.35 }] },
      4: { label: '4pc: +50% Task XP + Burst',  effects: [{ type: 'task_xp_bonus', value: 0.50 }, { type: 'task_burst_bonus', value: 2.0 }] },
    },
  },

  architect: {
    id: 'architect',
    name: 'The Architect',
    icon: '🏗',
    color: '#B39DDB',
    description: 'Build your focus like a fortress.',
    pieces: ['helmet_architect_1', 'chest_architect_1', 'gloves_architect_1', 'necklace_architect_1'],
    bonuses: {
      2: { label: '2pc: +15% Focus XP',         effects: [{ type: 'focus_session_bonus', value: 0.15 }] },
      3: { label: '3pc: +25% All XP',           effects: [{ type: 'task_xp_bonus', value: 0.25 }, { type: 'focus_session_bonus', value: 0.25 }] },
      4: { label: '4pc: +40% All XP + Focus',   effects: [{ type: 'task_xp_bonus', value: 0.40 }, { type: 'focus_session_bonus', value: 0.40 }] },
    },
  },

  storm_runner: {
    id: 'storm_runner',
    name: 'Storm Runner',
    icon: '⚡',
    color: '#FFD54F',
    description: 'Move fast, hit hard, never stop.',
    pieces: ['gloves_storm_1', 'legs_storm_1', 'boots_storm_1', 'necklace_storm_1'],
    bonuses: {
      2: { label: '2pc: +0.25 Attack Speed',    stats: { speed: 0.25 } },
      3: { label: '3pc: +10% Crit Chance',      stats: { critChance: 0.10 } },
      4: { label: '4pc: +25% Crit Damage',      stats: { critChance: 0.10, critDamage: 0.25 } },
    },
  },

  hyperfocus: {
    id: 'hyperfocus',
    name: 'Hyperfocus Protocol',
    icon: '🔮',
    color: '#5CDD8B',
    description: 'When you lock in, nothing can stop you.',
    pieces: ['ring_hyperfocus_1', 'boots_hyperfocus_1', 'necklace_hyperfocus_1'],
    bonuses: {
      2: { label: '2pc: +20% Focus Session XP', effects: [{ type: 'focus_session_bonus', value: 0.20 }] },
      3: { label: '3pc: Focus XP doubled',      effects: [{ type: 'focus_session_bonus', value: 1.0 }] },
    },
  },
};

/**
 * Get active set bonuses given the current equipped items.
 * Returns array of { set, piecesEquipped, bonuses }
 */
export function getActiveSetBonuses(equipped) {
  const equippedIds = new Set(Object.values(equipped).filter(Boolean));
  const active = [];

  Object.values(ITEM_SETS).forEach(set => {
    const count = set.pieces.filter(id => equippedIds.has(id)).length;
    if (count >= 2) {
      // Find highest tier bonus unlocked
      const tiers = Object.keys(set.bonuses).map(Number).sort((a,b) => a-b);
      const activeTiers = tiers.filter(t => count >= t);
      const highestTier = activeTiers[activeTiers.length - 1];
      active.push({
        set,
        piecesEquipped: count,
        totalPieces: set.pieces.length,
        bonus: set.bonuses[highestTier],
        tier: highestTier,
        allTiers: set.bonuses,
      });
    }
  });

  return active;
}
