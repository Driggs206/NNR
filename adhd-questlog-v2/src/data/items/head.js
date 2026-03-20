// ── HEAD (15 items) ───────────────────────────────────────

export const HEAD_ITEMS = {
  // ── COMMON (5) ──────────────────────────────────────────
  helmet_basic_1: {
    id: 'helmet_basic_1', name: 'Thinking Cap', slot: 'head', artIcon: '/art/items/thinking_cap_icon.png', rarity: 'common', icon: '🧢', color: '#9E9BC0',
    stats: { focus: 2, resilience: 2 },
    flavor: 'Slightly smarter. Marginally.',
  },
  helmet_basic_2: {
    id: 'helmet_basic_2', name: 'Hood of Mild Awareness', slot: 'head', artIcon: '/art/items/hood_of_mild_awareness_icon.png', rarity: 'common', icon: '🪖', color: '#9E9BC0',
    stats: { resilience: 5, speed: 0.03 },
    flavor: 'You are aware. Barely, but it counts.',
  },
  helmet_basic_3: {
    id: 'helmet_basic_3', name: 'Bandana of Barely Trying', slot: 'head', artIcon: '/art/items/bandana_of_barely_trying_icon.png', rarity: 'common', icon: '🎭', color: '#9E9BC0',
    stats: { speed: 0.05, attack: 1 },
    flavor: 'The effort is implied.',
  },
  helmet_basic_4: {
    id: 'helmet_basic_4', name: 'Cap of Good Intentions', slot: 'head', artIcon: '/art/items/cap_of_good_intentions_icon.png', rarity: 'common', icon: '🧢', color: '#9E9BC0',
    stats: { attack: 2, focus: 2 },
    flavor: '"I was going to do it tomorrow." — the cap',
  },
  helmet_steel_1: {
    id: 'helmet_steel_1', name: 'Helm of Perseverance', slot: 'head', artIcon: '/art/items/helm_of_perseverance_icon.png', rarity: 'common', icon: '⛑️', color: '#B0BEC5',
    stats: { resilience: 10, attack: 3 },
    flavor: 'Dings from every missed deadline.',
  },
  // ── UNCOMMON (4) ────────────────────────────────────────
  helmet_clarity_1: {
    id: 'helmet_clarity_1', name: 'Crown of Clarity', slot: 'head', artIcon: '/art/items/crown_of_clarity_icon.png', rarity: 'uncommon', icon: '👑', color: '#F5C842',
    stats: { focus: 8, critChance: 0.03 },
    effects: [{ type: 'task_xp_bonus', value: 0.12 }],
    flavor: 'Your thoughts feel just slightly less like soup.',
  },
  helmet_structure_1: {
    id: 'helmet_structure_1', name: 'Circlet of Structure', slot: 'head', artIcon: '/art/items/circlet_of_structure_icon.png', rarity: 'uncommon', icon: '🔮', color: '#5CDD8B',
    stats: { focus: 12, resilience: 5 },
    flavor: 'A routine forms. You are surprised.',
  },
  helmet_vigilance_1: {
    id: 'helmet_vigilance_1', name: 'Visor of Vigilance', slot: 'head', artIcon: '/art/items/visor_of_vigilance_icon.png', rarity: 'uncommon', icon: '🥽', color: '#5CDD8B',
    stats: { critChance: 0.05, attack: 5, speed: 0.05 },
    flavor: 'Nothing escapes your notice. Except the thing you forgot.',
  },
  helmet_hyperfocus_1: {
    id: 'helmet_hyperfocus_1', name: 'Headband of the Hyperfocused', slot: 'head', artIcon: '/art/items/headband_of_the_hyperfocused_icon.png', rarity: 'uncommon', icon: '🎯', color: '#5CDD8B',
    stats: { focus: 15, speed: 0.08 },
    effects: [{ type: 'focus_session_bonus', value: 0.10 }],
    flavor: 'Three hours pass. You forgot to eat.',
  },
  // ── RARE (3) ────────────────────────────────────────────
  helmet_planner_1: {
    id: 'helmet_planner_1', name: 'Diadem of Deep Thought', slot: 'head', artIcon: '/art/items/diadem_of_deep_thought_icon.png', rarity: 'rare', icon: '💎', color: '#4FC3F7',
    stats: { focus: 20, critChance: 0.04, resilience: 8 },
    effects: [{ type: 'task_xp_bonus', value: 0.15 }],
    flavor: 'The plan is clear. Execution is next.',
  },
  helmet_momentum_1: {
    id: 'helmet_momentum_1', name: 'Helm of Momentum', slot: 'head', artIcon: '/art/items/helm_of_momentum_icon.png', rarity: 'rare', icon: '⚡', color: '#4FC3F7',
    stats: { attack: 14, speed: 0.15, critChance: 0.04 },
    flavor: "You can't stop. You won't stop. The tasks fear you.",
  },
  helmet_chronicler_1: {
    id: 'helmet_chronicler_1', name: 'Cowl of the Chronicler', slot: 'head', artIcon: '/art/items/cowl_of_the_chronicler_icon.png', rarity: 'rare', icon: '📜', color: '#4FC3F7',
    stats: { focus: 18, attack: 8 },
    effects: [{ type: 'task_xp_bonus', value: 0.18 }],
    set: 'chronicler',
    flavor: 'Every task completed becomes legend.',
  },
  // ── EPIC (2) ────────────────────────────────────────────
  helmet_architect_1: {
    id: 'helmet_architect_1', name: 'Crown of the Architect', slot: 'head', artIcon: '/art/items/crown_of_the_architect_icon.png', rarity: 'epic', icon: '🏗', color: '#B39DDB',
    stats: { focus: 26, critChance: 0.06, resilience: 15, attack: 8 },
    effects: [{ type: 'task_xp_bonus', value: 0.22 }, { type: 'focus_session_bonus', value: 0.12 }],
    set: 'architect',
    flavor: 'The blueprint is in your mind. The deadline is not.',
  },
  helmet_mindforge_1: {
    id: 'helmet_mindforge_1', name: 'Mindforge Helm', slot: 'head', artIcon: '/art/items/mindforge_helm_icon.png', rarity: 'epic', icon: '🔥', color: '#B39DDB',
    stats: { attack: 20, critDamage: 0.45, speed: 0.18, focus: 12 },
    flavor: 'Forged in the fire of a thousand overdue tasks.',
  },
  // ── LEGENDARY (1) ───────────────────────────────────────
  helmet_legend_1: {
    id: 'helmet_legend_1', name: 'Halo of Eternal Clarity', slot: 'head', artIcon: '/art/items/halo_of_eternal_clarity_icon.png', rarity: 'legendary', icon: '✨', color: '#F5C842',
    stats: { focus: 38, critChance: 0.10, attack: 22, resilience: 20 },
    effects: [{ type: 'task_xp_bonus', value: 0.35 }, { type: 'focus_session_bonus', value: 0.25 }],
    flavor: 'You see through every distraction. You are the deadline.',
  },
};
