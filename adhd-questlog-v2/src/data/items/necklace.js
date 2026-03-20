// ── NECKLACE (15 items) ───────────────────────────────────

export const NECKLACE_ITEMS = {
  // ── COMMON (5) ──────────────────────────────────────────
  necklace_basic_1: {
    id: 'necklace_basic_1', name: 'String of Effort', slot: 'necklace', artIcon: '/art/items/string_of_effort_icon.png', rarity: 'common', icon: '📿', color: '#9E9BC0',
    stats: { resilience: 4 },
    flavor: 'Strung together from every small win.',
  },
  necklace_basic_2: {
    id: 'necklace_basic_2', name: 'Pendant of Purpose', slot: 'necklace', artIcon: '/art/items/pendant_of_purpose_icon.png', rarity: 'common', icon: '📿', color: '#9E9BC0',
    stats: { focus: 4 },
    flavor: "You have a reason. You just need to remember it.",
  },
  necklace_basic_3: {
    id: 'necklace_basic_3', name: 'Charm of Consistency', slot: 'necklace', artIcon: '/art/items/charm_of_consistency_icon.png', rarity: 'common', icon: '📿', color: '#9E9BC0',
    stats: { attack: 3, resilience: 3 },
    flavor: 'Show up. Do the thing. Repeat.',
  },
  necklace_basic_4: {
    id: 'necklace_basic_4', name: 'Bead of Beginning', slot: 'necklace', artIcon: '/art/items/bead_of_beginning_icon.png', rarity: 'common', icon: '📿', color: '#9E9BC0',
    stats: { speed: 0.05, focus: 3 },
    flavor: 'Every journey starts with a single bead. Or something.',
  },
  necklace_basic_5: {
    id: 'necklace_basic_5', name: 'Amulet of Mild Clarity', slot: 'necklace', artIcon: '/art/items/amulet_of_mild_clarity_icon.png', rarity: 'common', icon: '📿', color: '#9E9BC0',
    stats: { focus: 6, resilience: 5 },
    flavor: "Mild clarity. Better than none.",
  },
  // ── UNCOMMON (4) ────────────────────────────────────────
  necklace_presence_1: {
    id: 'necklace_presence_1', name: 'Pendant of Presence', slot: 'necklace', artIcon: '/art/items/pendant_of_presence_icon.png', rarity: 'uncommon', icon: '🌙', color: '#5CDD8B',
    stats: { focus: 12, resilience: 8 },
    effects: [{ type: 'task_xp_bonus', value: 0.10 }],
    flavor: 'You are here. You are present. You are not checking your phone.',
  },
  necklace_urgency_1: {
    id: 'necklace_urgency_1', name: 'Necklace of Urgency', slot: 'necklace', artIcon: '/art/items/necklace_of_urgency_icon.png', rarity: 'uncommon', icon: '⏱', color: '#5CDD8B',
    stats: { speed: 0.15, attack: 8 },
    flavor: "The timer is always running. This helps you remember that.",
  },
  necklace_hyperfocus_1: {
    id: 'necklace_hyperfocus_1', name: 'Talisman of Hyperfocus', slot: 'necklace', artIcon: '/art/items/talisman_of_hyperfocus_icon.png', rarity: 'uncommon', icon: '🔮', color: '#5CDD8B',
    stats: { focus: 18, critChance: 0.05 },
    effects: [{ type: 'focus_session_bonus', value: 0.18 }],
    set: 'hyperfocus',
    flavor: 'Touch it when you need to lock in. Lock in.',
  },
  necklace_fortune_1: {
    id: 'necklace_fortune_1', name: 'Pendant of Fortune', slot: 'necklace', artIcon: '/art/items/pendant_of_fortune_icon.png', rarity: 'uncommon', icon: '🍀', color: '#5CDD8B',
    stats: { critChance: 0.07, critDamage: 0.32 },
    flavor: 'Luck exists. You just have to complete enough tasks to find it.',
  },
  // ── RARE (3) ────────────────────────────────────────────
  necklace_resolve_1: {
    id: 'necklace_resolve_1', name: 'Amulet of Resolve', slot: 'necklace', artIcon: '/art/items/amulet_of_resolve_icon.png', rarity: 'rare', icon: '📿', color: '#EF5350',
    stats: { resilience: 20, focus: 10, attack: 6 },
    effects: [{ type: 'task_xp_bonus', value: 0.15 }],
    flavor: '"You will finish this." It means it.',
  },
  necklace_architect_1: {
    id: 'necklace_architect_1', name: 'Blueprint Locket', slot: 'necklace', artIcon: '/art/items/blueprint_locket_icon.png', rarity: 'rare', icon: '🗺', color: '#4FC3F7',
    stats: { focus: 22, attack: 14, resilience: 10 },
    effects: [{ type: 'task_xp_bonus', value: 0.20 }, { type: 'focus_session_bonus', value: 0.12 }],
    set: 'architect',
    flavor: 'Inside: the perfect day. Achievable: with effort.',
  },
  necklace_storm_1: {
    id: 'necklace_storm_1', name: 'Eye of Calm', slot: 'necklace', artIcon: '/art/items/eye_of_calm_icon.png', rarity: 'rare', icon: '🌀', color: '#4FC3F7',
    stats: { speed: 0.22, attack: 16, critChance: 0.06 },
    set: 'storm_runner',
    flavor: 'In the eye of every storm, perfect stillness. Perfect clarity.',
  },
  // ── EPIC (2) ────────────────────────────────────────────
  necklace_void_1: {
    id: 'necklace_void_1', name: 'Void Heart', slot: 'necklace', artIcon: '/art/items/void_heart_icon.png', rarity: 'epic', icon: '🖤', color: '#B39DDB',
    stats: { critDamage: 0.65, critChance: 0.10, attack: 20 },
    flavor: 'Empty inside. Efficient outside. A relatable gem.',
  },
  necklace_chronicler_1: {
    id: 'necklace_chronicler_1', name: 'Locket of the Chronicler', slot: 'necklace', artIcon: '/art/items/locket_of_the_chronicler_icon.png', rarity: 'epic', icon: '📖', color: '#B39DDB',
    stats: { focus: 30, resilience: 22, attack: 16 },
    effects: [{ type: 'task_xp_bonus', value: 0.35 }, { type: 'focus_session_bonus', value: 0.20 }],
    flavor: 'Inside the locket: a list. Every item crossed off.',
  },
  // ── LEGENDARY (1) ───────────────────────────────────────
  necklace_legend_1: {
    id: 'necklace_legend_1', name: 'The Unfinished List', slot: 'necklace', artIcon: '/art/items/the_unfinished_list_icon.png', rarity: 'legendary', icon: '🌠', color: '#F5C842',
    stats: { focus: 38, attack: 28, resilience: 28, critChance: 0.10 },
    effects: [{ type: 'task_xp_bonus', value: 0.50 }, { type: 'focus_session_bonus', value: 0.40 }],
    flavor: 'The list is never finished. That is the point. You keep going anyway.',
  },
};
