// ── BOOTS (15 items) ──────────────────────────────────────

export const BOOTS_ITEMS = {
  // ── COMMON (5) ──────────────────────────────────────────
  boots_basic_1: {
    id: 'boots_basic_1', name: 'Slippers of Mild Motivation', slot: 'boots', artIcon: '/art/items/slippers_of_mild_motivation_icon.png', rarity: 'common', icon: '🥿', color: '#9E9BC0',
    stats: { speed: 0.05 },
    flavor: "You're moving. Not fast, but moving.",
  },
  boots_basic_2: {
    id: 'boots_basic_2', name: 'Sneakers of Starting', slot: 'boots', artIcon: '/art/items/sneakers_of_starting_icon.png', rarity: 'common', icon: '👟', color: '#9E9BC0',
    stats: { speed: 0.08, attack: 1 },
    flavor: 'The first step is always the hardest. These make it slightly less hard.',
  },
  boots_basic_3: {
    id: 'boots_basic_3', name: 'Flip Flops of Freedom', slot: 'boots', artIcon: '/art/items/flip_flops_of_freedom_icon.png', rarity: 'common', icon: '🩴', color: '#9E9BC0',
    stats: { speed: 0.06, resilience: 3 },
    flavor: "Casual. Carefree. Chronically late.",
  },
  boots_basic_4: {
    id: 'boots_basic_4', name: 'Office Shoes of Obligation', slot: 'boots', artIcon: '/art/items/office_shoes_of_obligation_icon.png', rarity: 'common', icon: '👞', color: '#9E9BC0',
    stats: { resilience: 5, focus: 2 },
    flavor: "You didn't choose them. They chose you. It's a relationship.",
  },
  boots_speed_1: {
    id: 'boots_speed_1', name: 'Restless Shoes', slot: 'boots', artIcon: '/art/items/restless_shoes_icon.png', rarity: 'common', icon: '👟', color: '#66BB6A',
    stats: { speed: 0.20 },
    flavor: 'They tap. Constantly.',
  },
  // ── UNCOMMON (4) ────────────────────────────────────────
  boots_speed_2: {
    id: 'boots_speed_2', name: 'Sprinters of Sudden Burst', slot: 'boots', artIcon: '/art/items/sprinters_of_sudden_burst_icon.png', rarity: 'uncommon', icon: '👟', color: '#26C6DA',
    stats: { speed: 0.35, critChance: 0.03 },
    flavor: 'Perfect for last-minute deadline runs.',
  },
  boots_storm_1: {
    id: 'boots_storm_1', name: 'Storm Runner Boots', slot: 'boots', artIcon: '/art/items/storm_runner_boots_icon.png', rarity: 'uncommon', icon: '⚡', color: '#FFD54F',
    stats: { speed: 0.28, attack: 8, critChance: 0.04 },
    set: 'storm_runner',
    flavor: "You hit the ground running. The ground didn't agree.",
  },
  boots_grounded_1: {
    id: 'boots_grounded_1', name: 'Grounded Boots of Clarity', slot: 'boots', artIcon: '/art/items/grounded_boots_of_clarity_icon.png', rarity: 'uncommon', icon: '🥾', color: '#5CDD8B',
    stats: { focus: 8, resilience: 12, speed: 0.10 },
    flavor: 'Stay grounded. Stay focused. Stay off social media.',
  },
  boots_chaser_1: {
    id: 'boots_chaser_1', name: 'Deadline Chasers', slot: 'boots', artIcon: '/art/items/deadline_chasers_icon.png', rarity: 'uncommon', icon: '🏃', color: '#5CDD8B',
    stats: { speed: 0.32, attack: 6 },
    flavor: 'You chase deadlines now. They used to chase you.',
  },
  // ── RARE (3) ────────────────────────────────────────────
  boots_hyperfocus_1: {
    id: 'boots_hyperfocus_1', name: 'Boots of Hyperfocus', slot: 'boots', artIcon: '/art/items/boots_of_hyperfocus_icon.png', rarity: 'rare', icon: '🔮', color: '#4FC3F7',
    stats: { focus: 14, speed: 0.22, critChance: 0.05 },
    effects: [{ type: 'focus_session_bonus', value: 0.18 }],
    set: 'hyperfocus',
    flavor: "Your feet know where to go. Your brain locked in an hour ago.",
  },
  boots_ghost_1: {
    id: 'boots_ghost_1', name: 'Ghost Step', slot: 'boots', artIcon: '/art/items/ghost_step_icon.png', rarity: 'rare', icon: '👻', color: '#4FC3F7',
    stats: { speed: 0.42, critChance: 0.06 },
    flavor: "Silent. Swift. You completed that task and no one even noticed.",
  },
  boots_momentum_1: {
    id: 'boots_momentum_1', name: 'Momentum Keepers', slot: 'boots', artIcon: '/art/items/momentum_keepers_icon.png', rarity: 'rare', icon: '🌀', color: '#4FC3F7',
    stats: { speed: 0.28, attack: 14, resilience: 8 },
    flavor: "Once you're rolling, these keep you rolling.",
  },
  // ── EPIC (2) ────────────────────────────────────────────
  boots_architect_1: {
    id: 'boots_architect_1', name: 'Foundation Boots', slot: 'boots', artIcon: '/art/items/foundation_boots_icon.png', rarity: 'epic', icon: '🏗', color: '#B39DDB',
    stats: { resilience: 22, focus: 16, speed: 0.18 },
    effects: [{ type: 'focus_session_bonus', value: 0.22 }],
    flavor: 'Stand firm on your schedule. Literally.',
  },
  boots_phantom_1: {
    id: 'boots_phantom_1', name: 'Phantom Runners', slot: 'boots', artIcon: '/art/items/phantom_runners_icon.png', rarity: 'epic', icon: '💨', color: '#B39DDB',
    stats: { speed: 0.48, critChance: 0.10, attack: 14 },
    flavor: 'You were at your desk. Then you were done. Time is a construct.',
  },
  // ── LEGENDARY (1) ───────────────────────────────────────
  boots_legend_1: {
    id: 'boots_legend_1', name: 'Wings of the Deadline', slot: 'boots', artIcon: '/art/items/wings_of_the_deadline_icon.png', rarity: 'legendary', icon: '🦅', color: '#F5C842',
    stats: { speed: 0.55, attack: 18, critChance: 0.10, focus: 16 },
    effects: [{ type: 'focus_session_bonus', value: 0.28 }],
    flavor: 'The deadline approaches. You are already there.',
  },
};
