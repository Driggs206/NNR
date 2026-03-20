// ============================================================
// MONSTERS — 40 regular + 3 solo bosses + 6 quest bosses
// ============================================================
// LOOT SYSTEM:
//   Each monster rolls loot_rolls times.
//   Each roll picks a rarity from RARITY_WEIGHTS[tier],
//   then picks a random item from ITEMS matching that rarity.
//   Individual loot_table entries override with specific items + chances.
//
// TUNABLE VALUES — adjust these to balance the game:
// ============================================================

export const LOOT_CONFIG = {
  // How many item rolls per tier kill [min, max]
  rolls: {
    tier1:      [0, 1],
    tier2:      [1, 2],
    tier3:      [2, 3],
    tier4:      [3, 4],
    boss_solo:  [4, 5],
    boss_quest: [5, 6],
  },

  // Rarity weight tables — values are relative weights (engine normalizes)
  rarity_weights: {
    tier1:      { common: 100, uncommon: 0,  rare: 0,  epic: 0,  legendary: 0  },
    tier2:      { common: 70,  uncommon: 30, rare: 0,  epic: 0,  legendary: 0  },
    tier3:      { common: 0,   uncommon: 65, rare: 35, epic: 0,  legendary: 0  },
    tier4:      { common: 0,   uncommon: 45, rare: 40, epic: 15, legendary: 0  },
    boss_solo:  { common: 0,   uncommon: 0,  rare: 60, epic: 35, legendary: 5  },
    boss_quest: { common: 0,   uncommon: 0,  rare: 0,  epic: 65, legendary: 35 },
  },

  // Global drop rate modifier (1.0 = normal, 2.0 = double drops)
  drop_rate_multiplier: 1.0,
};

export function rollRarity(tierKey) {
  const weights = LOOT_CONFIG.rarity_weights[tierKey];
  const total   = Object.values(weights).reduce((a, b) => a + b, 0);
  let roll      = Math.random() * total;
  for (const [rarity, weight] of Object.entries(weights)) {
    roll -= weight;
    if (roll <= 0) return rarity;
  }
  return 'common';
}

export function rollLootCount(tierKey) {
  const [min, max] = LOOT_CONFIG.rolls[tierKey];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ============================================================
// MONSTERS
// ============================================================

export const MONSTERS = [

  // ─── TIER 1 — Small foes (5–20 min active play) ──────────

  { id: 'slime_distract', art: '/art/monsters/slime_distract.png', name: 'Distracto Slime', tier: 1, loot_tier: 'tier1',
    max_hp: 400, regen: 0, armor: 0, gold_drop: [8, 18], xp_drop: 12,
    sprite: '🟢', color: '#5CDD8B',
    flavor: 'It jiggles every time you check your phone.',
    loot_table: [{ item: 'ring_basic_1', chance: 0.12 }] },

  { id: 'goblin_procrastin', art: '/art/monsters/goblin_procrastin.png', name: 'Procrastin Goblin', tier: 1, loot_tier: 'tier1',
    max_hp: 650, regen: 0, armor: 1, gold_drop: [12, 25], xp_drop: 20,
    sprite: '👺', color: '#FF6584',
    flavor: '"I\'ll deal with you in a minute." It has been 3 hours.',
    loot_table: [{ item: 'boots_basic_1', chance: 0.1 }] },

  { id: 'imp_notification', art: '/art/monsters/imp_notification.png', name: 'Notification Imp', tier: 1, loot_tier: 'tier1',
    max_hp: 500, regen: 0, armor: 0, gold_drop: [10, 20], xp_drop: 15,
    sprite: '😈', color: '#FF6584',
    flavor: 'Ding. Ding. Ding. It never stops.',
    loot_table: [{ item: 'ring_basic_2', chance: 0.1 }] },

  { id: 'rat_snooze', art: '/art/monsters/rat_snooze.png', name: 'Snooze Rat', tier: 1, loot_tier: 'tier1',
    max_hp: 350, regen: 0, armor: 0, gold_drop: [8, 15], xp_drop: 10,
    sprite: '🐀', color: '#B0BEC5',
    flavor: 'Just five more minutes. It always says five more minutes.',
    loot_table: [] },

  { id: 'bat_tangent', art: '/art/monsters/bat_tangent.png', name: 'Tangent Bat', tier: 1, loot_tier: 'tier1',
    max_hp: 450, regen: 0, armor: 0, gold_drop: [9, 18], xp_drop: 14,
    sprite: '🦇', color: '#7E57C2',
    flavor: 'It loops around. You forget what you were doing.',
    loot_table: [] },

  { id: 'mushroom_drift', art: '/art/monsters/mushroom_drift.png', name: 'Daydrift Mushroom', tier: 1, loot_tier: 'tier1',
    max_hp: 600, regen: 0, armor: 1, gold_drop: [11, 22], xp_drop: 18,
    sprite: '🍄', color: '#CE93D8',
    flavor: 'Its spores make you think about unrelated things for 20 minutes.',
    loot_table: [{ item: 'gloves_basic_1', chance: 0.08 }] },

  { id: 'sprite_excuse', art: '/art/monsters/sprite_excuse.png', name: 'Excuse Sprite', tier: 1, loot_tier: 'tier1',
    max_hp: 550, regen: 0, armor: 0, gold_drop: [10, 20], xp_drop: 16,
    sprite: '🧚', color: '#80DEEA',
    flavor: '"But what if you\'re not in the right headspace?" Silence it.',
    loot_table: [] },

  { id: 'slug_inertia', art: '/art/monsters/slug_inertia.png', name: 'Inertia Slug', tier: 1, loot_tier: 'tier1',
    max_hp: 750, regen: 1, armor: 0, gold_drop: [13, 24], xp_drop: 22,
    sprite: '🐌', color: '#A5D6A7',
    flavor: 'Incredibly difficult to get moving. Momentum is everything.',
    loot_table: [{ item: 'boots_basic_2', chance: 0.09 }] },

  { id: 'ghost_yesterday', art: '/art/monsters/ghost_yesterday.png', name: 'Ghost of Yesterday\'s Plans', tier: 1, loot_tier: 'tier1',
    max_hp: 480, regen: 0, armor: 0, gold_drop: [9, 17], xp_drop: 13,
    sprite: '👻', color: '#E0E0E0',
    flavor: 'The list from last Tuesday haunts you.',
    loot_table: [] },

  { id: 'crab_sideways', art: '/art/monsters/crab_sideways.png', name: 'Sideways Crab', tier: 1, loot_tier: 'tier1',
    max_hp: 700, regen: 0, armor: 2, gold_drop: [14, 26], xp_drop: 24,
    sprite: '🦀', color: '#EF9A9A',
    flavor: 'Makes progress, but never in the right direction.',
    loot_table: [{ item: 'legs_basic_1', chance: 0.08 }] },

  // ─── TIER 2 — Medium foes (30–90 min active play) ─────────

  { id: 'troll_overwhelm', art: '/art/monsters/troll_overwhelm.png', name: 'Overwhelm Troll', tier: 2, loot_tier: 'tier2',
    max_hp: 3500, regen: 1, armor: 3, gold_drop: [40, 80], xp_drop: 80,
    sprite: '🧌', color: '#B39DDB',
    flavor: 'It throws seventeen tasks at you at once.',
    loot_table: [{ item: 'helmet_basic_1', chance: 0.12 }] },

  { id: 'witch_avoidance', art: '/art/monsters/witch_avoidance.png', name: 'Avoidance Witch', tier: 2, loot_tier: 'tier2',
    max_hp: 5000, regen: 2, armor: 4, gold_drop: [60, 120], xp_drop: 110,
    sprite: '🧙', color: '#4FC3F7',
    flavor: 'She whispers "you can do it tomorrow."',
    loot_table: [{ item: 'boots_speed_1', chance: 0.1 }],
    phases: [{ hp_threshold: 0.5, effect: 'regen_boost', effect_value: 3 }] },

  { id: 'golem_routine', art: '/art/monsters/golem_routine.png', name: 'Broken Routine Golem', tier: 2, loot_tier: 'tier2',
    max_hp: 4000, regen: 1, armor: 5, gold_drop: [50, 100], xp_drop: 90,
    sprite: '🗿', color: '#78909C',
    flavor: 'Built from missed habits. Every crack is a skipped day.',
    loot_table: [{ item: 'chest_basic_1', chance: 0.1 }] },

  { id: 'harpy_comparison', art: '/art/monsters/harpy_comparison.png', name: 'Comparison Harpy', tier: 2, loot_tier: 'tier2',
    max_hp: 4500, regen: 1, armor: 3, gold_drop: [55, 110], xp_drop: 100,
    sprite: '🦅', color: '#FFB74D',
    flavor: '"Look how much they got done today." Don\'t look.',
    loot_table: [{ item: 'gloves_basic_3', chance: 0.1 }] },

  { id: 'wraith_deadline', art: '/art/monsters/wraith_deadline.png', name: 'Deadline Wraith', tier: 2, loot_tier: 'tier2',
    max_hp: 6000, regen: 2, armor: 4, gold_drop: [70, 130], xp_drop: 120,
    sprite: '💀', color: '#EF5350',
    flavor: 'It gets stronger the longer you wait.',
    loot_table: [{ item: 'ring_basic_3', chance: 0.12 }],
    phases: [{ hp_threshold: 0.4, effect: 'armor_boost', effect_value: 4 }] },

  { id: 'mimic_taskswitch', art: '/art/monsters/mimic_taskswitch.png', name: 'Task-Switch Mimic', tier: 2, loot_tier: 'tier2',
    max_hp: 3800, regen: 1, armor: 2, gold_drop: [45, 90], xp_drop: 85,
    sprite: '📦', color: '#FFF176',
    flavor: 'Every time you focus on it, it becomes something else.',
    loot_table: [{ item: 'necklace_basic_1', chance: 0.09 }] },

  { id: 'hydra_tabs', art: '/art/monsters/hydra_tabs.png', name: 'Browser Tab Hydra', tier: 2, loot_tier: 'tier2',
    max_hp: 5500, regen: 2, armor: 3, gold_drop: [65, 125], xp_drop: 115,
    sprite: '🐉', color: '#80CBC4',
    flavor: 'Close one tab. Two more open. This is eternal.',
    loot_table: [{ item: 'legs_basic_2', chance: 0.1 }],
    phases: [{ hp_threshold: 0.6, effect: 'regen_boost', effect_value: 2 }] },

  { id: 'vampire_energy', art: '/art/monsters/vampire_energy.png', name: 'Energy Vampire', tier: 2, loot_tier: 'tier2',
    max_hp: 4200, regen: 2, armor: 3, gold_drop: [50, 105], xp_drop: 95,
    sprite: '🧛', color: '#CE93D8',
    flavor: 'Not a person. A meeting that could have been an email.',
    loot_table: [{ item: 'boots_basic_3', chance: 0.09 }] },

  { id: 'scarecrow_perfectionism', art: '/art/monsters/scarecrow_perfectionism.png', name: 'Perfectionism Scarecrow', tier: 2, loot_tier: 'tier2',
    max_hp: 4800, regen: 1, armor: 6, gold_drop: [58, 115], xp_drop: 105,
    sprite: '🎃', color: '#FFA726',
    flavor: 'It won\'t let you finish anything. Nothing is ever good enough.',
    loot_table: [{ item: 'helmet_basic_2', chance: 0.1 }] },

  { id: 'golem_meeting', art: '/art/monsters/golem_meeting.png', name: 'Unnecessary Meeting Golem', tier: 2, loot_tier: 'tier2',
    max_hp: 5200, regen: 1, armor: 4, gold_drop: [62, 120], xp_drop: 112,
    sprite: '🪑', color: '#90CAF9',
    flavor: 'Sixty minutes of your life. Gone. You\'ll never get them back.',
    loot_table: [{ item: 'gloves_basic_4', chance: 0.1 }] },

  // ─── TIER 3 — Hard foes (2–8 hrs active play) ─────────────

  { id: 'dragon_backlog', art: '/art/monsters/dragon_backlog.png', name: 'Backlog Dragon', tier: 3, loot_tier: 'tier3',
    max_hp: 18000, regen: 3, armor: 8, gold_drop: [150, 280], xp_drop: 220,
    sprite: '🐲', color: '#EF5350',
    flavor: 'It has been hoarding your unfinished tasks since January.',
    loot_table: [{ item: 'chest_iron_1', chance: 0.15 }],
    phases: [{ hp_threshold: 0.5, effect: 'armor_boost', effect_value: 5 }] },

  { id: 'lich_selfdoubt', art: '/art/monsters/lich_selfdoubt.png', name: 'Self-Doubt Lich', tier: 3, loot_tier: 'tier3',
    max_hp: 22000, regen: 4, armor: 7, gold_drop: [180, 320], xp_drop: 260,
    sprite: '💀', color: '#7E57C2',
    flavor: 'Ancient and powerful. Feeds on the question "am I good enough?"',
    loot_table: [{ item: 'ring_focus_1', chance: 0.15 }],
    phases: [
      { hp_threshold: 0.6, effect: 'regen_boost', effect_value: 4 },
      { hp_threshold: 0.3, effect: 'armor_boost', effect_value: 6 },
    ] },

  { id: 'colossus_inbox', art: '/art/monsters/colossus_inbox.png', name: 'Inbox Colossus', tier: 3, loot_tier: 'tier3',
    max_hp: 28000, regen: 5, armor: 10, gold_drop: [220, 380], xp_drop: 300,
    sprite: '📧', color: '#29B6F6',
    flavor: '847 unread. It grows stronger with every notification.',
    loot_table: [{ item: 'helmet_steel_1', chance: 0.14 }],
    phases: [{ hp_threshold: 0.5, effect: 'regen_boost', effect_value: 6 }] },

  { id: 'werewolf_anxiety', art: '/art/monsters/werewolf_anxiety.png', name: 'Anxiety Werewolf', tier: 3, loot_tier: 'tier3',
    max_hp: 20000, regen: 4, armor: 6, gold_drop: [160, 300], xp_drop: 240,
    sprite: '🐺', color: '#78909C',
    flavor: 'Worst at 3am. Strongest when there\'s nothing you can actually do.',
    loot_table: [{ item: 'necklace_presence_1', chance: 0.13 }],
    phases: [{ hp_threshold: 0.4, effect: 'slow_player', effect_value: 0.3 }] },

  { id: 'titan_context', art: '/art/monsters/titan_context.png', name: 'Context Switch Titan', tier: 3, loot_tier: 'tier3',
    max_hp: 32000, regen: 5, armor: 9, gold_drop: [240, 420], xp_drop: 330,
    sprite: '🔄', color: '#66BB6A',
    flavor: 'Every time you fight it, you forget what you were doing before.',
    loot_table: [{ item: 'boots_speed_2', chance: 0.13 }] },

  { id: 'specter_impostor', art: '/art/monsters/specter_impostor.png', name: 'Impostor Specter', tier: 3, loot_tier: 'tier3',
    max_hp: 25000, regen: 4, armor: 8, gold_drop: [200, 360], xp_drop: 280,
    sprite: '🫥', color: '#B0BEC5',
    flavor: '"They\'ll find out you don\'t know what you\'re doing." They won\'t.',
    loot_table: [{ item: 'helmet_clarity_1', chance: 0.12 }],
    phases: [{ hp_threshold: 0.5, effect: 'armor_boost', effect_value: 7 }] },

  { id: 'basilisk_stagnation', art: '/art/monsters/basilisk_stagnation.png', name: 'Stagnation Basilisk', tier: 3, loot_tier: 'tier3',
    max_hp: 30000, regen: 5, armor: 9, gold_drop: [230, 400], xp_drop: 315,
    sprite: '🦎', color: '#A5D6A7',
    flavor: 'Its gaze turns momentum to stone. Keep moving.',
    loot_table: [{ item: 'legs_swift_1', chance: 0.13 }],
    phases: [{ hp_threshold: 0.3, effect: 'slow_player', effect_value: 0.4 }] },

  { id: 'golem_resistance', art: '/art/monsters/golem_resistance.png', name: 'Resistance Golem', tier: 3, loot_tier: 'tier3',
    max_hp: 26000, regen: 4, armor: 12, gold_drop: [210, 370], xp_drop: 290,
    sprite: '🪨', color: '#8D6E63',
    flavor: 'It doesn\'t fight. It just makes starting feel impossible.',
    loot_table: [{ item: 'chest_momentum_1', chance: 0.12 }] },

  { id: 'succubus_scroll', art: '/art/monsters/succubus_scroll.png', name: 'Doomscroll Succubus', tier: 3, loot_tier: 'tier3',
    max_hp: 23000, regen: 3, armor: 7, gold_drop: [185, 340], xp_drop: 270,
    sprite: '📱', color: '#EC407A',
    flavor: 'One more post. One more. One more. It\'s been 90 minutes.',
    loot_table: [{ item: 'gloves_focused_1', chance: 0.12 }],
    phases: [{ hp_threshold: 0.5, effect: 'regen_boost', effect_value: 5 }] },

  { id: 'hydra_meetings', art: '/art/monsters/hydra_meetings.png', name: 'Recurring Meeting Hydra', tier: 3, loot_tier: 'tier3',
    max_hp: 35000, regen: 6, armor: 8, gold_drop: [260, 450], xp_drop: 350,
    sprite: '🗓️', color: '#42A5F5',
    flavor: 'Every week. No matter what. It cannot be cancelled.',
    loot_table: [{ item: 'ring_focus_2', chance: 0.14 }],
    phases: [
      { hp_threshold: 0.66, effect: 'regen_boost', effect_value: 3 },
      { hp_threshold: 0.33, effect: 'regen_boost', effect_value: 6 },
    ] },

  // ─── TIER 4 — Elite foes (1–3 days active play) ───────────

  { id: 'leviathan_burnout', name: 'Burnout Leviathan', tier: 4, loot_tier: 'tier4',
    max_hp: 80000, regen: 8, armor: 15, gold_drop: [500, 900], xp_drop: 600,
    sprite: '🌊', color: '#1565C0',
    flavor: 'It rose from the depths of years of unsustainable effort.',
    art: '/art/monsters/leviathan_burnout.png',
    loot_table: [{ item: 'chest_focus_1', chance: 0.2 }],
    phases: [
      { hp_threshold: 0.6, effect: 'armor_boost', effect_value: 8 },
      { hp_threshold: 0.3, effect: 'regen_boost', effect_value: 12 },
    ] },

  { id: 'titan_paralysis', name: 'Analysis Paralysis Titan', tier: 4, loot_tier: 'tier4',
    max_hp: 100000, regen: 10, armor: 18, gold_drop: [650, 1100], xp_drop: 750,
    sprite: '🧊', color: '#80DEEA',
    flavor: 'You have researched it for three weeks. You have not started.',
    art: '/art/monsters/titan_paralysis.png',
    loot_table: [{ item: 'ring_hyperfocus_1', chance: 0.18 }],
    phases: [
      { hp_threshold: 0.7, effect: 'slow_player', effect_value: 0.3 },
      { hp_threshold: 0.4, effect: 'armor_boost', effect_value: 10 },
    ] },

  { id: 'phoenix_relapse', name: 'Relapse Phoenix', tier: 4, loot_tier: 'tier4',
    max_hp: 90000, regen: 12, armor: 14, gold_drop: [580, 1000], xp_drop: 680,
    sprite: '🔥', color: '#FF7043',
    flavor: 'You\'ve beaten it before. It always comes back.',
    art: '/art/monsters/phoenix_relapse.png',
    loot_table: [{ item: 'boots_hyperfocus_1', chance: 0.18 }],
    phases: [
      { hp_threshold: 0.5, effect: 'regen_boost', effect_value: 15 },
      { hp_threshold: 0.2, effect: 'armor_boost', effect_value: 12 },
    ] },

  { id: 'colossus_shame', name: 'Shame Colossus', tier: 4, loot_tier: 'tier4',
    max_hp: 120000, regen: 10, armor: 20, gold_drop: [750, 1250], xp_drop: 850,
    sprite: '⛰️', color: '#546E7A',
    flavor: 'Built from every task left undone. Heavy. Immovable. Yours.',
    art: '/art/monsters/colossus_shame.png',
    loot_table: [{ item: 'chest_discipline_1', chance: 0.17 }],
    phases: [
      { hp_threshold: 0.5, effect: 'armor_boost', effect_value: 15 },
      { hp_threshold: 0.25, effect: 'regen_boost', effect_value: 18 },
    ] },

  { id: 'wraith_identity', name: 'Identity Wraith', tier: 4, loot_tier: 'tier4',
    max_hp: 95000, regen: 9, armor: 16, gold_drop: [600, 1050], xp_drop: 700,
    sprite: '🌫️', color: '#CE93D8',
    flavor: '"Who are you when you\'re not productive?" Fight it anyway.',
    art: '/art/monsters/wraith_identity.png',
    loot_table: [{ item: 'necklace_hyperfocus_1', chance: 0.17 }],
    phases: [
      { hp_threshold: 0.6, effect: 'slow_player', effect_value: 0.35 },
      { hp_threshold: 0.3, effect: 'regen_boost', effect_value: 14 },
    ] },

  { id: 'dragon_system', name: 'The System Dragon', tier: 4, loot_tier: 'tier4',
    max_hp: 150000, regen: 14, armor: 22, gold_drop: [900, 1500], xp_drop: 1000,
    sprite: '🐉', color: '#D4AF37',
    flavor: 'You built this system. You abandoned this system. It remembers.',
    art: '/art/monsters/dragon_system.png',
    loot_table: [{ item: 'helmet_hyperfocus_1', chance: 0.19 }],
    phases: [
      { hp_threshold: 0.75, effect: 'armor_boost', effect_value: 8 },
      { hp_threshold: 0.5,  effect: 'regen_boost', effect_value: 10 },
      { hp_threshold: 0.25, effect: 'slow_player', effect_value: 0.4 },
    ] },

  { id: 'specter_comparison', name: 'The Comparison Engine', tier: 4, loot_tier: 'tier4',
    max_hp: 110000, regen: 11, armor: 17, gold_drop: [700, 1200], xp_drop: 800,
    sprite: '🔬', color: '#26C6DA',
    flavor: 'Constantly measuring you against everyone who seems to have it together.',
    art: '/art/monsters/specter_comparison.png',
    loot_table: [{ item: 'ring_insight_1', chance: 0.17 }],
    phases: [
      { hp_threshold: 0.5, effect: 'armor_boost', effect_value: 12 },
      { hp_threshold: 0.25, effect: 'regen_boost', effect_value: 16 },
    ] },

  { id: 'hydra_spiral', name: 'Spiral Hydra', tier: 4, loot_tier: 'tier4',
    max_hp: 130000, regen: 12, armor: 19, gold_drop: [800, 1350], xp_drop: 920,
    sprite: '🌀', color: '#7E57C2',
    flavor: 'One bad day becomes a bad week becomes a bad month. Cut every head.',
    art: '/art/monsters/hydra_spiral.png',
    loot_table: [{ item: 'gloves_storm_1', chance: 0.18 }],
    phases: [
      { hp_threshold: 0.66, effect: 'regen_boost', effect_value: 8 },
      { hp_threshold: 0.33, effect: 'regen_boost', effect_value: 16 },
    ] },

  { id: 'titan_expectation', name: 'Expectation Titan', tier: 4, loot_tier: 'tier4',
    max_hp: 105000, regen: 10, armor: 18, gold_drop: [660, 1120], xp_drop: 760,
    sprite: '⚖️', color: '#FFA726',
    flavor: 'Other people\'s. Your own. Indistinguishable at this point.',
    art: '/art/monsters/titan_expectation.png',
    loot_table: [{ item: 'legs_flowstate_1', chance: 0.17 }],
    phases: [
      { hp_threshold: 0.5, effect: 'slow_player', effect_value: 0.3 },
      { hp_threshold: 0.3, effect: 'armor_boost', effect_value: 14 },
    ] },

  { id: 'demon_executive', name: 'Executive Function Demon', tier: 4, loot_tier: 'tier4',
    max_hp: 140000, regen: 13, armor: 21, gold_drop: [860, 1450], xp_drop: 980,
    sprite: '👿', color: '#EF5350',
    flavor: 'Knows exactly what you need to do. Refuses to let you start.',
    art: '/art/monsters/demon_executive.png',
    loot_table: [{ item: 'necklace_hyperfocus_1', chance: 0.18 }],
    phases: [
      { hp_threshold: 0.6, effect: 'armor_boost', effect_value: 10 },
      { hp_threshold: 0.35, effect: 'regen_boost', effect_value: 20 },
      { hp_threshold: 0.15, effect: 'slow_player', effect_value: 0.5 },
    ] },

  // ─── SOLO BOSSES ──────────────────────────────────────────

  { id: 'boss_procrastination', name: 'The Eternal Procrastinator', tier: 3, loot_tier: 'boss_solo',
    max_hp: 50000, regen: 5, armor: 10, gold_drop: [500, 800], xp_drop: 300,
    sprite: '👑', color: '#F5C842',
    flavor: '"I\'ll fight you properly once conditions are perfect." It never happens.',
    art: '/art/monsters/boss_procrastination.png',
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
    ] },

  { id: 'boss_burnout', name: 'Lord Burnout', tier: 3, loot_tier: 'boss_solo',
    max_hp: 80000, regen: 8, armor: 15, gold_drop: [800, 1200], xp_drop: 500,
    sprite: '🔥', color: '#FF3860',
    flavor: 'You have faced him before. You will face him again.',
    art: '/art/monsters/boss_burnout.png',
    isBoss: true,
    loot_table: [
      { item: 'chest_focus_1', chance: 1.0 },
      { item: 'helmet_clarity_1', chance: 0.6 },
      { item: 'ring_focus_2', chance: 0.4 },
    ],
    phases: [
      { hp_threshold: 0.5, effect: 'regen_boost', effect_value: 15 },
      { hp_threshold: 0.2, effect: 'armor_boost', effect_value: 8 },
    ] },

  { id: 'boss_void', name: 'The Void of Potential', tier: 4, loot_tier: 'boss_solo',
    max_hp: 200000, regen: 15, armor: 25, gold_drop: [1500, 2500], xp_drop: 1500,
    sprite: '🌑', color: '#424242',
    flavor: 'Everything you could have been. Everything you still could be. Terrifying.',
    art: '/art/monsters/boss_void.png',
    isBoss: true,
    loot_table: [
      { item: 'chest_vestments_1', chance: 1.0 },
      { item: 'helmet_mindforge_1', chance: 0.7 },
      { item: 'ring_void_1', chance: 0.5 },
      { item: 'necklace_void_1', chance: 0.25 },
    ],
    phases: [
      { hp_threshold: 0.75, effect: 'armor_boost', effect_value: 10 },
      { hp_threshold: 0.5,  effect: 'regen_boost', effect_value: 20 },
      { hp_threshold: 0.25, effect: 'slow_player', effect_value: 0.6 },
      { hp_threshold: 0.1,  effect: 'armor_boost', effect_value: 20 },
    ] },

  // ─── QUEST BOSSES — Multiplayer group encounters ──────────

  { id: 'qboss_adhd_itself', name: 'ADHD Itself', tier: 5, loot_tier: 'boss_quest',
    max_hp: 1000000, regen: 50, armor: 30, gold_drop: [3000, 5000], xp_drop: 3000,
    sprite: '🧠', color: '#FF6584',
    flavor: 'Not an enemy. A companion. Defeat it to understand it.',
    art: '/art/monsters/qboss_adhd_itself.png',
    isBoss: true, isQuestBoss: true,
    loot_table: [
      { item: 'chest_infinite_1', chance: 0.8 },
      { item: 'helmet_clarity_1', chance: 0.5 },
      { item: 'ring_focus_2', chance: 0.4 },
      { item: 'chest_legend_1', chance: 0.15 },
    ],
    phases: [
      { hp_threshold: 0.8, effect: 'regen_boost', effect_value: 30 },
      { hp_threshold: 0.6, effect: 'armor_boost', effect_value: 15 },
      { hp_threshold: 0.4, effect: 'slow_player', effect_value: 0.4 },
      { hp_threshold: 0.2, effect: 'regen_boost', effect_value: 60 },
    ] },

  { id: 'qboss_the_system', name: 'The Failed System', tier: 5, loot_tier: 'boss_quest',
    max_hp: 750000, regen: 40, armor: 28, gold_drop: [2500, 4000], xp_drop: 2500,
    sprite: '⚙️', color: '#90A4AE',
    flavor: 'A productivity system so complex it became its own obstacle.',
    art: '/art/monsters/qboss_the_system.png',
    isBoss: true, isQuestBoss: true,
    loot_table: [
      { item: 'chest_architect_1', chance: 0.8 },
      { item: 'helmet_architect_1', chance: 0.5 },
      { item: 'ring_focus_2', chance: 0.35 },
      { item: 'helmet_legend_1', chance: 0.15 },
    ],
    phases: [
      { hp_threshold: 0.7, effect: 'armor_boost', effect_value: 12 },
      { hp_threshold: 0.4, effect: 'regen_boost', effect_value: 40 },
      { hp_threshold: 0.2, effect: 'slow_player', effect_value: 0.5 },
    ] },

  { id: 'qboss_collective_anxiety', name: 'The Collective Anxiety', tier: 5, loot_tier: 'boss_quest',
    max_hp: 900000, regen: 45, armor: 26, gold_drop: [2800, 4500], xp_drop: 2800,
    sprite: '😰', color: '#80DEEA',
    flavor: 'All your worries combined. All your group\'s worries combined. Face it together.',
    art: '/art/monsters/qboss_collective_anxiety.png',
    isBoss: true, isQuestBoss: true,
    loot_table: [
      { item: 'necklace_void_1', chance: 0.8 },
      { item: 'ring_void_1', chance: 0.5 },
      { item: 'boots_phantom_1', chance: 0.35 },
      { item: 'boots_legend_1', chance: 0.15 },
    ],
    phases: [
      { hp_threshold: 0.75, effect: 'slow_player', effect_value: 0.3 },
      { hp_threshold: 0.5,  effect: 'regen_boost', effect_value: 35 },
      { hp_threshold: 0.25, effect: 'armor_boost', effect_value: 20 },
    ] },

  { id: 'qboss_time_itself', name: 'Father Time, Distorted', tier: 5, loot_tier: 'boss_quest',
    max_hp: 1200000, regen: 60, armor: 35, gold_drop: [4000, 6000], xp_drop: 4000,
    sprite: '⏳', color: '#FFF176',
    flavor: 'Time blindness made manifest. It moves differently for everyone here.',
    art: '/art/monsters/qboss_time_itself.png',
    isBoss: true, isQuestBoss: true,
    loot_table: [
      { item: 'legs_endure_1', chance: 0.8 },
      { item: 'boots_speed_2', chance: 0.5 },
      { item: 'ring_focus_2', chance: 0.35 },
      { item: 'legs_legend_1', chance: 0.15 },
    ],
    phases: [
      { hp_threshold: 0.8, effect: 'slow_player', effect_value: 0.5 },
      { hp_threshold: 0.6, effect: 'armor_boost', effect_value: 15 },
      { hp_threshold: 0.4, effect: 'regen_boost', effect_value: 50 },
      { hp_threshold: 0.2, effect: 'slow_player', effect_value: 0.7 },
    ] },

  { id: 'qboss_the_grind', name: 'The Endless Grind', tier: 5, loot_tier: 'boss_quest',
    max_hp: 850000, regen: 42, armor: 29, gold_drop: [2600, 4200], xp_drop: 2600,
    sprite: '⚙️', color: '#EF9A9A',
    flavor: 'Work without meaning. Motion without progress. It must be stopped.',
    art: '/art/monsters/qboss_the_grind.png',
    isBoss: true, isQuestBoss: true,
    loot_table: [
      { item: 'chest_chronicler_1', chance: 0.8 },
      { item: 'gloves_chronicler_1', chance: 0.5 },
      { item: 'legs_chronicler_1', chance: 0.35 },
      { item: 'ring_legend_1', chance: 0.15 },
    ],
    phases: [
      { hp_threshold: 0.6, effect: 'armor_boost', effect_value: 14 },
      { hp_threshold: 0.3, effect: 'regen_boost', effect_value: 45 },
    ] },

  { id: 'qboss_executive_dysfunction', name: 'Executive Dysfunction Incarnate',
    tier: 5, loot_tier: 'boss_quest',
    max_hp: 2000000, regen: 80, armor: 40, gold_drop: [6000, 10000], xp_drop: 6000,
    sprite: '👁️', color: '#F5C842',
    flavor: 'The final form of everything that holds you back. Slay it together.',
    art: '/art/monsters/qboss_executive_dysfunction.png',
    isBoss: true, isQuestBoss: true,
    loot_table: [
      { item: 'chest_legend_1', chance: 0.8 },
      { item: 'helmet_legend_1', chance: 0.6 },
      { item: 'boots_legend_1', chance: 0.5 },
      { item: 'ring_legend_1', chance: 0.35 },
      { item: 'necklace_legend_1', chance: 0.2 },
    ],
    phases: [
      { hp_threshold: 0.8, effect: 'armor_boost', effect_value: 10 },
      { hp_threshold: 0.6, effect: 'regen_boost', effect_value: 40 },
      { hp_threshold: 0.4, effect: 'slow_player', effect_value: 0.4 },
      { hp_threshold: 0.2, effect: 'armor_boost', effect_value: 25 },
      { hp_threshold: 0.05, effect: 'regen_boost', effect_value: 100 },
    ] },
];

// ── Convenience exports ────────────────────────────────────
export const SOLO_BOSSES      = MONSTERS.filter(m => m.isBoss && !m.isQuestBoss);
export const QUEST_BOSSES     = MONSTERS.filter(m => m.isQuestBoss);
export const REGULAR_MONSTERS = MONSTERS.filter(m => !m.isBoss);

export function getMonstersForTier(tier) {
  return REGULAR_MONSTERS.filter(m => m.tier === tier);
}

export function getRandomMonster(maxTier = 2) {
  const pool = REGULAR_MONSTERS.filter(m => m.tier <= maxTier);
  return pool[Math.floor(Math.random() * pool.length)];
}

// ── Legacy helpers used by useCombat ──────────────────────
export function getMonsterById(id) {
  return MONSTERS.find(m => m.id === id) || MONSTERS[0];
}

export function getNextMonster(currentId) {
  // Progress through regular monsters by tier, loop back at end
  const current = getMonsterById(currentId);
  const pool    = REGULAR_MONSTERS;
  const idx     = pool.findIndex(m => m.id === currentId);
  if (idx === -1 || idx >= pool.length - 1) return pool[0];
  return pool[idx + 1];
}
