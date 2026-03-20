// ── GLOVES (15 items) ─────────────────────────────────────

export const GLOVES_ITEMS = {
  // ── COMMON (5) ──────────────────────────────────────────
  gloves_basic_1: {
    id: 'gloves_basic_1', name: 'Mittens of Mild Effort', slot: 'gloves', artIcon: '/art/items/mittens_of_mild_effort_icon.png', rarity: 'common', icon: '🧤', color: '#9E9BC0',
    stats: { attack: 2, resilience: 2 },
    flavor: 'Warm. Functional. Uninspired.',
  },
  gloves_basic_2: {
    id: 'gloves_basic_2', name: 'Gloves of Getting Started', slot: 'gloves', artIcon: '/art/items/gloves_of_getting_started_icon.png', rarity: 'common', icon: '🧤', color: '#9E9BC0',
    stats: { attack: 3, critChance: 0.01 },
    flavor: 'The hardest part is starting. These help. Slightly.',
  },
  gloves_basic_3: {
    id: 'gloves_basic_3', name: 'Work Gloves', slot: 'gloves', artIcon: '/art/items/work_gloves_icon.png', rarity: 'common', icon: '🧤', color: '#9E9BC0',
    stats: { resilience: 4, attack: 3 },
    flavor: "They've seen better days. So have you.",
  },
  gloves_basic_4: {
    id: 'gloves_basic_4', name: 'Fingerless Gloves of Focus', slot: 'gloves', artIcon: '/art/items/fingerless_gloves_of_focus_icon.png', rarity: 'common', icon: '🧤', color: '#9E9BC0',
    stats: { focus: 3, attack: 2, speed: 0.02 },
    flavor: 'The exposed fingertips represent unfinished tasks.',
  },
  gloves_grip_1: {
    id: 'gloves_grip_1', name: 'Gloves of Getting Things Done', slot: 'gloves', artIcon: '/art/items/gloves_of_getting_things_done_icon.png', rarity: 'common', icon: '🧤', color: '#FF8A65',
    stats: { attack: 8, critChance: 0.02 },
    flavor: '"Just start." — the gloves',
  },
  // ── UNCOMMON (4) ────────────────────────────────────────
  gloves_crit_1: {
    id: 'gloves_crit_1', name: 'Fingers of Fortune', slot: 'gloves', artIcon: '/art/items/fingers_of_fortune_icon.png', rarity: 'uncommon', icon: '🧤', color: '#FFD54F',
    stats: { critChance: 0.08, critDamage: 0.30 },
    flavor: 'Your pointing finger has become significantly more judgy.',
  },
  gloves_speed_1: {
    id: 'gloves_speed_1', name: 'Gloves of Rapid Action', slot: 'gloves', artIcon: '/art/items/gloves_of_rapid_action_icon.png', rarity: 'uncommon', icon: '💨', color: '#5CDD8B',
    stats: { speed: 0.18, attack: 6 },
    flavor: "You act before you overthink. Revolutionary.",
  },
  gloves_focused_1: {
    id: 'gloves_focused_1', name: 'Gloves of the Focused Mind', slot: 'gloves', artIcon: '/art/items/gloves_of_the_focused_mind_icon.png', rarity: 'uncommon', icon: '🧤', color: '#5CDD8B',
    stats: { focus: 10, attack: 8 },
    effects: [{ type: 'task_xp_bonus', value: 0.10 }],
    flavor: 'Every keystroke intentional. Every task deliberate.',
  },
  gloves_storm_1: {
    id: 'gloves_storm_1', name: 'Gauntlets of the Storm', slot: 'gloves', artIcon: '/art/items/gauntlets_of_the_storm_icon.png', rarity: 'uncommon', icon: '⚡', color: '#FFD54F',
    stats: { attack: 12, critChance: 0.06 },
    set: 'storm_runner',
    flavor: 'Strike fast. Strike often. Strike before the tab switches.',
  },
  // ── RARE (3) ────────────────────────────────────────────
  gloves_precision_1: {
    id: 'gloves_precision_1', name: 'Precision Gauntlets', slot: 'gloves', artIcon: '/art/items/precision_gauntlets_icon.png', rarity: 'rare', icon: '🎯', color: '#4FC3F7',
    stats: { critChance: 0.10, critDamage: 0.45 },
    flavor: 'Every hit counts. Every task matters. Mostly.',
  },
  gloves_momentum_1: {
    id: 'gloves_momentum_1', name: 'Fists of Momentum', slot: 'gloves', artIcon: '/art/items/fists_of_momentum_icon.png', rarity: 'rare', icon: '👊', color: '#4FC3F7',
    stats: { attack: 16, speed: 0.20, critChance: 0.04 },
    flavor: "Three tasks in a row. You're unstoppable. Until lunch.",
  },
  gloves_chronicler_1: {
    id: 'gloves_chronicler_1', name: 'Hands of the Chronicler', slot: 'gloves', artIcon: '/art/items/hands_of_the_chronicler_icon.png', rarity: 'rare', icon: '✍', color: '#4FC3F7',
    stats: { attack: 14, focus: 12 },
    effects: [{ type: 'task_xp_bonus', value: 0.18 }],
    set: 'chronicler',
    flavor: 'These hands have written the end of a thousand procrastinations.',
  },
  // ── EPIC (2) ────────────────────────────────────────────
  gloves_architect_1: {
    id: 'gloves_architect_1', name: 'Gauntlets of the Architect', slot: 'gloves', artIcon: '/art/items/gauntlets_of_the_architect_icon.png', rarity: 'epic', icon: '🏗', color: '#B39DDB',
    stats: { attack: 22, critChance: 0.08, focus: 14 },
    effects: [{ type: 'task_xp_bonus', value: 0.22 }],
    set: 'architect',
    flavor: 'Build the system. Execute the plan. Ignore the chaos.',
  },
  gloves_void_1: {
    id: 'gloves_void_1', name: 'Void Channelers', slot: 'gloves', artIcon: '/art/items/void_channelers_icon.png', rarity: 'epic', icon: '🌑', color: '#B39DDB',
    stats: { critChance: 0.12, critDamage: 0.60, speed: 0.15, attack: 8 },
    flavor: 'Channel the void of unscheduled time into pure damage.',
  },
  // ── LEGENDARY (1) ───────────────────────────────────────
  gloves_legend_1: {
    id: 'gloves_legend_1', name: 'The Last Deadline', slot: 'gloves', artIcon: '/art/items/the_last_deadline_icon.png', rarity: 'legendary', icon: '⏰', color: '#F5C842',
    stats: { attack: 32, critChance: 0.15, critDamage: 0.85, speed: 0.12 },
    effects: [{ type: 'task_xp_bonus', value: 0.30 }],
    flavor: 'There is always one more task. You are ready for it.',
  },
};
