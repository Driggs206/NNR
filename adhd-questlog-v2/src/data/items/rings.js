// ── RINGS (15 items) ──────────────────────────────────────

export const RINGS_ITEMS = {
  // ── COMMON (5) ──────────────────────────────────────────
  ring_basic_1: {
    id: 'ring_basic_1', name: 'Pebble of Persistence', slot: 'ring', rarity: 'common', icon: '💍', color: '#9E9BC0',
    stats: { resilience: 3 },
    flavor: "Small. Unremarkable. Still there.",
  },
  ring_basic_2: {
    id: 'ring_basic_2', name: 'Band of Bare Minimum', slot: 'ring', rarity: 'common', icon: '💍', color: '#9E9BC0',
    stats: { attack: 2, resilience: 2 },
    flavor: "You did the minimum. It was enough today.",
  },
  ring_basic_3: {
    id: 'ring_basic_3', name: 'Copper Ring of Trying', slot: 'ring', rarity: 'common', icon: '💍', color: '#9E9BC0',
    stats: { focus: 3 },
    flavor: "A for effort. Literally.",
  },
  ring_speed_1: {
    id: 'ring_speed_1', name: 'Signet of Urgency', slot: 'ring', rarity: 'common', icon: '💍', color: '#F5A623',
    stats: { speed: 0.15 },
    flavor: 'Slightly faster. Slightly.',
  },
  ring_focus_1: {
    id: 'ring_focus_1', name: 'Ring of Slight Attention', slot: 'ring', rarity: 'common', icon: '💍', color: '#9E9BC0',
    stats: { focus: 5, critChance: 0.02 },
    effects: [{ type: 'task_xp_bonus', value: 0.10 }],
    flavor: 'You almost remember what you were doing.',
  },
  // ── UNCOMMON (4) ────────────────────────────────────────
  ring_focus_2: {
    id: 'ring_focus_2', name: 'Band of Hyperfocus', slot: 'ring', rarity: 'uncommon', icon: '💍', color: '#4FC3F7',
    stats: { focus: 14, critChance: 0.05, critDamage: 0.20 },
    effects: [{ type: 'task_xp_bonus', value: 0.20 }],
    flavor: 'Time ceases to exist. So does lunch.',
  },
  ring_luck_1: {
    id: 'ring_luck_1', name: 'Ring of the Lucky Strike', slot: 'ring', rarity: 'uncommon', icon: '💍', color: '#5CDD8B',
    stats: { critChance: 0.08, critDamage: 0.28 },
    flavor: "Luck favors the prepared. You're mostly prepared.",
  },
  ring_action_1: {
    id: 'ring_action_1', name: 'Fist Ring of Action', slot: 'ring', rarity: 'uncommon', icon: '💍', color: '#5CDD8B',
    stats: { attack: 12, speed: 0.10 },
    flavor: 'Stop planning. Start doing. The ring insists.',
  },
  ring_hyperfocus_1: {
    id: 'ring_hyperfocus_1', name: 'Hyperfocus Loop', slot: 'ring', rarity: 'uncommon', icon: '🔮', color: '#5CDD8B',
    stats: { focus: 16, critChance: 0.06 },
    effects: [{ type: 'focus_session_bonus', value: 0.15 }],
    set: 'hyperfocus',
    flavor: "The loop begins. The loop continues. The loop is productive.",
  },
  // ── RARE (3) ────────────────────────────────────────────
  ring_willpower_1: {
    id: 'ring_willpower_1', name: 'Iron Will Band', slot: 'ring', rarity: 'rare', icon: '⚔', color: '#4FC3F7',
    stats: { resilience: 20, focus: 10, attack: 8 },
    flavor: 'Forged from the stubbornness of doing the thing you kept avoiding.',
  },
  ring_insight_1: {
    id: 'ring_insight_1', name: 'Ring of Critical Insight', slot: 'ring', rarity: 'rare', icon: '💎', color: '#4FC3F7',
    stats: { critChance: 0.10, critDamage: 0.45, focus: 12 },
    flavor: 'You see the weakness in every problem. You exploit it.',
  },
  ring_void_1: {
    id: 'ring_void_1', name: 'Void Loop', slot: 'ring', rarity: 'rare', icon: '🌑', color: '#4FC3F7',
    stats: { attack: 16, critDamage: 0.55, speed: 0.10 },
    flavor: "The void stares back. You stare harder. Tasks complete themselves somehow.",
  },
  // ── EPIC (2) ────────────────────────────────────────────
  ring_chronicler_1: {
    id: 'ring_chronicler_1', name: 'Seal of the Chronicler', slot: 'ring', rarity: 'epic', icon: '📜', color: '#B39DDB',
    stats: { focus: 24, attack: 16, critChance: 0.08 },
    effects: [{ type: 'task_xp_bonus', value: 0.28 }],
    flavor: 'This seal certifies: you completed things today.',
  },
  ring_storm_1: {
    id: 'ring_storm_1', name: 'Eye of the Storm', slot: 'ring', rarity: 'epic', icon: '🌪', color: '#B39DDB',
    stats: { critChance: 0.12, critDamage: 0.65, speed: 0.22 },
    flavor: 'Chaos everywhere. You: completely focused in the center.',
  },
  // ── LEGENDARY (1) ───────────────────────────────────────
  ring_legend_1: {
    id: 'ring_legend_1', name: 'Ouroboros of Completion', slot: 'ring', rarity: 'legendary', icon: '♾', color: '#F5C842',
    stats: { focus: 32, critChance: 0.16, critDamage: 0.75, attack: 22 },
    effects: [{ type: 'task_xp_bonus', value: 0.40 }, { type: 'focus_session_bonus', value: 0.25 }],
    flavor: 'Finish one thing. Begin the next. The cycle is eternal. The dopamine is real.',
  },
};
