// ── BODY (15 items) ───────────────────────────────────────

export const BODY_ITEMS = {
  // ── COMMON (5) ──────────────────────────────────────────
  chest_basic_1: {
    id: 'chest_basic_1', name: 'Tunic of Adequate Effort', slot: 'body', art: '/art/items/tunic_of_adequate_effort.png', rarity: 'common', icon: '👕', color: '#9E9BC0',
    stats: { resilience: 5, attack: 1 },
    flavor: 'Not bad. Not great. Adequate.',
  },
  chest_basic_2: {
    id: 'chest_basic_2', name: 'Cloak of Showing Up', slot: 'body', art: '/art/items/cloak_of_showing_up.png', rarity: 'common', icon: '🧥', color: '#9E9BC0',
    stats: { resilience: 8 },
    flavor: '80% of success is showing up. This provides the rest.',
  },
  chest_basic_3: {
    id: 'chest_basic_3', name: 'Shirt of Small Steps', slot: 'body', art: '/art/items/shirt_of_small_steps.png', rarity: 'common', icon: '👔', color: '#9E9BC0',
    stats: { focus: 3, speed: 0.04 },
    flavor: 'Break it down. Then break it down again.',
  },
  chest_basic_4: {
    id: 'chest_basic_4', name: 'Hoodie of Hypomanic Productivity', slot: 'body', art: '/art/items/hoodie_of_hypomanic_productivity.png', rarity: 'common', icon: '🧶', color: '#9E9BC0',
    stats: { attack: 4, speed: 0.05 },
    flavor: 'You cleaned the entire house at 2am. Inexplicably.',
  },
  chest_iron_1: {
    id: 'chest_iron_1', name: 'Vest of Routine', slot: 'body', art: '/art/items/vest_of_routine.png', rarity: 'common', icon: '🦺', color: '#78909C',
    stats: { resilience: 15, speed: 0.1 },
    flavor: 'Consistent. Reliable. Slightly itchy.',
  },
  // ── UNCOMMON (4) ────────────────────────────────────────
  chest_structure_1: {
    id: 'chest_structure_1', name: 'Jacket of Structure', slot: 'body', art: '/art/items/jacket_of_structure.png', rarity: 'uncommon', icon: '🧣', color: '#5CDD8B',
    stats: { resilience: 14, focus: 8 },
    effects: [{ type: 'task_xp_bonus', value: 0.08 }],
    flavor: 'A schedule. You wrote it down this time.',
  },
  chest_momentum_1: {
    id: 'chest_momentum_1', name: 'Coat of Momentum', slot: 'body', art: '/art/items/coat_of_momentum.png', rarity: 'uncommon', icon: '🌀', color: '#5CDD8B',
    stats: { attack: 10, speed: 0.12 },
    flavor: "Objects in motion stay in motion. You've been in motion for six hours.",
  },
  chest_discipline_1: {
    id: 'chest_discipline_1', name: 'Armor of Discipline', slot: 'body', art: '/art/items/armor_of_discipline.png', rarity: 'uncommon', icon: '🛡', color: '#5CDD8B',
    stats: { resilience: 20, attack: 8 },
    flavor: "You didn't want to do it. You did it anyway. That's the armor.",
  },
  chest_vestments_1: {
    id: 'chest_vestments_1', name: 'Vestments of Hyperfocus', slot: 'body', art: '/art/items/vestments_of_hyperfocus.png', rarity: 'uncommon', icon: '🎽', color: '#5CDD8B',
    stats: { focus: 18, critChance: 0.04 },
    effects: [{ type: 'focus_session_bonus', value: 0.10 }],
    flavor: 'The world narrows. The task expands.',
  },
  // ── RARE (3) ────────────────────────────────────────────
  chest_focus_1: {
    id: 'chest_focus_1', name: 'Robe of Deep Work', slot: 'body', art: '/art/items/robe_of_deep_work.png', rarity: 'rare', icon: '🥋', color: '#4FC3F7',
    stats: { focus: 22, attack: 8 },
    effects: [{ type: 'task_xp_bonus', value: 0.22 }, { type: 'focus_session_bonus', value: 0.15 }],
    flavor: 'Worn by those who have achieved inbox zero.',
  },
  chest_mantle_1: {
    id: 'chest_mantle_1', name: 'Mantle of the Planner', slot: 'body', art: '/art/items/mantle_of_the_planner.png', rarity: 'rare', icon: '📋', color: '#4FC3F7',
    stats: { focus: 22, resilience: 14 },
    effects: [{ type: 'task_xp_bonus', value: 0.18 }],
    flavor: 'The plan is not just a document. It is a shield.',
  },
  chest_chronicler_1: {
    id: 'chest_chronicler_1', name: 'Robe of the Chronicler', slot: 'body', art: '/art/items/robe_of_the_chronicler.png', rarity: 'rare', icon: '📖', color: '#4FC3F7',
    stats: { focus: 24, attack: 10, resilience: 10 },
    effects: [{ type: 'task_xp_bonus', value: 0.20 }],
    set: 'chronicler',
    flavor: 'Each completed task writes itself into the fabric.',
  },
  // ── EPIC (2) ────────────────────────────────────────────
  chest_architect_1: {
    id: 'chest_architect_1', name: 'Breastplate of the Architect', slot: 'body', art: '/art/items/breastplate_of_the_architect.png', rarity: 'epic', icon: '🏛', color: '#B39DDB',
    stats: { attack: 22, focus: 20, resilience: 22 },
    effects: [{ type: 'task_xp_bonus', value: 0.28 }, { type: 'focus_session_bonus', value: 0.15 }],
    set: 'architect',
    flavor: 'Built to last. Like your to-do list. Unfortunately.',
  },
  chest_infinite_1: {
    id: 'chest_infinite_1', name: 'Core of Infinite Focus', slot: 'body', art: '/art/items/core_of_infinite_focus.png', rarity: 'epic', icon: '♾', color: '#B39DDB',
    stats: { focus: 32, critChance: 0.07, speed: 0.15, attack: 10 },
    effects: [{ type: 'focus_session_bonus', value: 0.30 }],
    flavor: 'Infinite focus. Finite lunch break.',
  },
  // ── LEGENDARY (1) ───────────────────────────────────────
  chest_legend_1: {
    id: 'chest_legend_1', name: 'The Unbroken Will', slot: 'body', art: '/art/items/the_unbroken_will.png', rarity: 'legendary', icon: '🌟', color: '#F5C842',
    stats: { focus: 42, attack: 28, resilience: 32, critChance: 0.08 },
    effects: [{ type: 'task_xp_bonus', value: 0.45 }, { type: 'focus_session_bonus', value: 0.35 }],
    flavor: 'You have been distracted. You have recovered. Every time.',
  },
};
