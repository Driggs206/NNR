// ============================================================
// MONSTERS DATA — JSON-driven enemy catalog
// Pacing: small 5-15m, medium 30-90m, boss 1-3 days
// ============================================================

export const MONSTERS = [
  // ─── TIER 1 — Small (5–15 min active play) ───────────────
  {
    id: 'slime_distract',
    name: 'Distracto Slime',
    tier: 1,
    max_hp: 400,
    regen: 0,
    armor: 0,
    gold_drop: [8, 18],
    xp_drop: 12,
    sprite: '🟢',
    color: '#5CDD8B',
    flavor: 'It jiggles every time you check your phone.',
    loot_table: [
      { item: 'ring_focus_1', chance: 0.12 },
      { item: 'boots_speed_1', chance: 0.06 },
    ],
  },
  {
    id: 'goblin_procrastin',
    name: 'Procrastin Goblin',
    tier: 1,
    max_hp: 650,
    regen: 0,
    armor: 1,
    gold_drop: [12, 25],
    xp_drop: 20,
    sprite: '👺',
    color: '#FF6584',
    flavor: '"I\'ll deal with you in a minute." It has been 3 hours.',
    loot_table: [
      { item: 'gloves_grip_1', chance: 0.1 },
      { item: 'ring_focus_1', chance: 0.08 },
    ],
  },

  // ─── TIER 2 — Medium (30–90 min active play) ─────────────
  {
    id: 'troll_overwhelm',
    name: 'Overwhelm Troll',
    tier: 2,
    max_hp: 3500,
    regen: 1,
    armor: 3,
    gold_drop: [40, 80],
    xp_drop: 80,
    sprite: '🧌',
    color: '#B39DDB',
    flavor: 'It throws seventeen tasks at you at once.',
    loot_table: [
      { item: 'helmet_clarity_1', chance: 0.15 },
      { item: 'chest_focus_1', chance: 0.08 },
      { item: 'necklace_resolve_1', chance: 0.06 },
    ],
  },
  {
    id: 'witch_avoidance',
    name: 'Avoidance Witch',
    tier: 2,
    max_hp: 5000,
    regen: 2,
    armor: 4,
    gold_drop: [60, 120],
    xp_drop: 110,
    sprite: '🧙',
    color: '#4FC3F7',
    flavor: 'She whispers "you can do it tomorrow."',
    loot_table: [
      { item: 'ring_focus_2', chance: 0.1 },
      { item: 'boots_speed_2', chance: 0.08 },
      { item: 'legs_endure_1', chance: 0.07 },
    ],
    phases: [
      { hp_threshold: 0.5, effect: 'regen_boost', effect_value: 3 },
    ],
  },

  // ─── TIER 3 — Boss (1–3 days) ────────────────────────────
  {
    id: 'boss_procrastination',
    name: 'The Eternal Procrastinator',
    tier: 3,
    max_hp: 50000,
    regen: 5,
    armor: 10,
    gold_drop: [500, 800],
    xp_drop: 300,
    sprite: '👑',
    color: '#F5C842',
    flavor: '"I\'ll fight you properly once conditions are perfect." It never happens.',
    isBoss: true,
    loot_table: [
      { item: 'ring_focus_2', chance: 1.0 },
      { item: 'necklace_resolve_1', chance: 0.5 },
      { item: 'chest_focus_1', chance: 0.4 },
    ],
    phases: [
      { hp_threshold: 0.75, effect: 'armor_boost', effect_value: 5 },
      { hp_threshold: 0.5,  effect: 'slow_player', effect_value: 0.5 },
      { hp_threshold: 0.25, effect: 'regen_boost', effect_value: 10 },
    ],
  },
  {
    id: 'boss_burnout',
    name: 'Lord Burnout',
    tier: 3,
    max_hp: 80000,
    regen: 8,
    armor: 15,
    gold_drop: [800, 1200],
    xp_drop: 500,
    sprite: '🔥',
    color: '#FF3860',
    flavor: 'You have faced him before. You will face him again.',
    isBoss: true,
    loot_table: [
      { item: 'chest_focus_1', chance: 1.0 },
      { item: 'helmet_clarity_1', chance: 0.6 },
      { item: 'ring_focus_2', chance: 0.4 },
    ],
    phases: [
      { hp_threshold: 0.5, effect: 'regen_boost', effect_value: 15 },
      { hp_threshold: 0.2, effect: 'armor_boost', effect_value: 8 },
    ],
  },
];

// Ordered progression: slime → goblin → troll → witch → boss1 → boss2
export const MONSTER_PROGRESSION = MONSTERS.map(m => m.id);

export function getMonsterById(id) {
  return MONSTERS.find(m => m.id === id) || MONSTERS[0];
}

export function getNextMonster(currentId) {
  const idx = MONSTER_PROGRESSION.indexOf(currentId);
  if (idx === -1 || idx >= MONSTER_PROGRESSION.length - 1) {
    // Loop back to tier 1 after bosses, with higher HP scaling
    return { ...MONSTERS[0], _loop: true };
  }
  return MONSTERS[idx + 1];
}
