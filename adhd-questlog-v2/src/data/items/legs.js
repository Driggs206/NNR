// ── LEGS (15 items) ───────────────────────────────────────

export const LEGS_ITEMS = {
  // ── COMMON (5) ──────────────────────────────────────────
  legs_basic_1: {
    id: 'legs_basic_1', name: 'Sweatpants of Comfort', slot: 'legs', artIcon: '/art/items/sweatpants_of_comfort_icon.png', rarity: 'common', icon: '👖', color: '#9E9BC0',
    stats: { resilience: 5 },
    flavor: "Work from home attire. No judgment.",
  },
  legs_basic_2: {
    id: 'legs_basic_2', name: 'Jeans of Just Enough', slot: 'legs', artIcon: '/art/items/jeans_of_just_enough_icon.png', rarity: 'common', icon: '👖', color: '#9E9BC0',
    stats: { resilience: 6, speed: 0.03 },
    flavor: "Presentable. Barely.",
  },
  legs_basic_3: {
    id: 'legs_basic_3', name: 'Shorts of Spontaneity', slot: 'legs', artIcon: '/art/items/shorts_of_spontaneity_icon.png', rarity: 'common', icon: '🩳', color: '#9E9BC0',
    stats: { speed: 0.08 },
    flavor: "You started without a plan. This is fine.",
  },
  legs_basic_4: {
    id: 'legs_basic_4', name: 'Leggings of Low Expectations', slot: 'legs', artIcon: '/art/items/leggings_of_low_expectations_icon.png', rarity: 'common', icon: '🩱', color: '#9E9BC0',
    stats: { resilience: 7, focus: 2 },
    flavor: "Set the bar low. Clear it. Celebrate.",
  },
  legs_swift_1: {
    id: 'legs_swift_1', name: 'Trousers of Momentum', slot: 'legs', artIcon: '/art/items/trousers_of_momentum_icon.png', rarity: 'common', icon: '👗', color: '#26A69A',
    stats: { speed: 0.12, attack: 4 },
    flavor: 'Moving faster. Destination: unclear.',
  },
  // ── UNCOMMON (4) ────────────────────────────────────────
  legs_endure_1: {
    id: 'legs_endure_1', name: 'Leggings of Long Sessions', slot: 'legs', artIcon: '/art/items/leggings_of_long_sessions_icon.png', rarity: 'uncommon', icon: '👖', color: '#5C6BC0',
    stats: { resilience: 12, focus: 6 },
    effects: [{ type: 'focus_session_bonus', value: 0.10 }],
    flavor: 'Technically pajamas. No one needs to know.',
  },
  legs_storm_1: {
    id: 'legs_storm_1', name: 'Greaves of the Storm', slot: 'legs', artIcon: '/art/items/greaves_of_the_storm_icon.png', rarity: 'uncommon', icon: '⚡', color: '#FFD54F',
    stats: { speed: 0.20, attack: 8 },
    set: 'storm_runner',
    flavor: 'Lightning-fast. Like your best ideas. Like your worst.',
  },
  legs_mindrunner_1: {
    id: 'legs_mindrunner_1', name: 'Leggings of the Mind Runner', slot: 'legs', artIcon: '/art/items/leggings_of_the_mind_runner_icon.png', rarity: 'uncommon', icon: '🏃', color: '#5CDD8B',
    stats: { focus: 10, speed: 0.15 },
    flavor: 'Your body runs. Your mind runs faster. Neither stop.',
  },
  legs_persistence_1: {
    id: 'legs_persistence_1', name: 'Plate Legs of Persistence', slot: 'legs', artIcon: '/art/items/plate_legs_of_persistence_icon.png', rarity: 'uncommon', icon: '🛡', color: '#5CDD8B',
    stats: { resilience: 22, attack: 6 },
    flavor: "You fall. You get back up. The task is still there waiting.",
  },
  // ── RARE (3) ────────────────────────────────────────────
  legs_quickstride_1: {
    id: 'legs_quickstride_1', name: 'Quickstride Greaves', slot: 'legs', artIcon: '/art/items/quickstride_greaves_icon.png', rarity: 'rare', icon: '💨', color: '#4FC3F7',
    stats: { speed: 0.28, critChance: 0.05 },
    flavor: 'You move between tasks so fast they blur together beautifully.',
  },
  legs_chronicler_1: {
    id: 'legs_chronicler_1', name: 'Trousers of the Chronicler', slot: 'legs', artIcon: '/art/items/trousers_of_the_chronicler_icon.png', rarity: 'rare', icon: '📜', color: '#4FC3F7',
    stats: { focus: 16, resilience: 16 },
    effects: [{ type: 'task_xp_bonus', value: 0.16 }],
    set: 'chronicler',
    flavor: 'Each step forward is a paragraph in your story.',
  },
  legs_flowstate_1: {
    id: 'legs_flowstate_1', name: 'Flow State Leggings', slot: 'legs', artIcon: '/art/items/flow_state_leggings_icon.png', rarity: 'rare', icon: '🌊', color: '#4FC3F7',
    stats: { focus: 18, speed: 0.22, resilience: 10 },
    effects: [{ type: 'focus_session_bonus', value: 0.15 }],
    flavor: 'You found the flow. Try not to lose it when someone texts you.',
  },
  // ── EPIC (2) ────────────────────────────────────────────
  legs_architect_1: {
    id: 'legs_architect_1', name: 'Foundations of the Architect', slot: 'legs', artIcon: '/art/items/foundations_of_the_architect_icon.png', rarity: 'epic', icon: '🏛', color: '#B39DDB',
    stats: { resilience: 28, focus: 20, speed: 0.18 },
    effects: [{ type: 'focus_session_bonus', value: 0.20 }],
    set: 'architect',
    flavor: 'A strong foundation makes everything else possible.',
  },
  legs_phantom_1: {
    id: 'legs_phantom_1', name: 'Phantom Step Greaves', slot: 'legs', artIcon: '/art/items/phantom_step_greaves_icon.png', rarity: 'epic', icon: '👻', color: '#B39DDB',
    stats: { speed: 0.38, critChance: 0.09, attack: 16 },
    flavor: "You were there. Then you weren't. Task is done somehow.",
  },
  // ── LEGENDARY (1) ───────────────────────────────────────
  legs_legend_1: {
    id: 'legs_legend_1', name: 'Stride of the Eternal', slot: 'legs', artIcon: '/art/items/stride_of_the_eternal_icon.png', rarity: 'legendary', icon: '🌌', color: '#F5C842',
    stats: { speed: 0.42, attack: 22, focus: 22, resilience: 26 },
    effects: [{ type: 'focus_session_bonus', value: 0.30 }],
    flavor: 'You never stop moving. Even sleep is productive.',
  },
};
