// ============================================================
// ITEMS DATA — Equipment catalog (1-3 stats per item max)
// Slots: head, body, gloves, legs, boots, ring1, ring2, necklace
// ============================================================

export const ITEMS = {
  // ─── RINGS ───────────────────────────────────────────────
  ring_focus_1: {
    id: 'ring_focus_1',
    name: 'Ring of Slight Attention',
    slot: 'ring',
    rarity: 'common',
    icon: '💍',
    color: '#9E9BC0',
    stats: { focus: 5, critChance: 0.02 },
    effects: [{ type: 'task_xp_bonus', value: 0.10 }],
    flavor: 'You almost remember what you were doing.',
  },
  ring_focus_2: {
    id: 'ring_focus_2',
    name: 'Band of Hyperfocus',
    slot: 'ring',
    rarity: 'uncommon',
    icon: '💍',
    color: '#4FC3F7',
    stats: { focus: 14, critChance: 0.05, critDamage: 0.2 },
    effects: [{ type: 'task_xp_bonus', value: 0.20 }],
    flavor: 'Time ceases to exist. So does lunch.',
  },
  ring_speed_1: {
    id: 'ring_speed_1',
    name: 'Signet of Urgency',
    slot: 'ring',
    rarity: 'common',
    icon: '💍',
    color: '#F5A623',
    stats: { speed: 0.15 },
    flavor: 'Slightly faster. Slightly.',
  },

  // ─── HEAD ─────────────────────────────────────────────────
  helmet_clarity_1: {
    id: 'helmet_clarity_1',
    name: 'Crown of Clarity',
    slot: 'head',
    rarity: 'uncommon',
    icon: '👑',
    color: '#F5C842',
    stats: { focus: 8, critChance: 0.03 },
    effects: [{ type: 'task_xp_bonus', value: 0.12 }],
    flavor: 'Your thoughts feel just slightly less like soup.',
  },
  helmet_steel_1: {
    id: 'helmet_steel_1',
    name: 'Helm of Perseverance',
    slot: 'head',
    rarity: 'common',
    icon: '⛑️',
    color: '#B0BEC5',
    stats: { resilience: 10, attack: 3 },
    flavor: 'Dings from every missed deadline.',
  },

  // ─── BODY ─────────────────────────────────────────────────
  chest_focus_1: {
    id: 'chest_focus_1',
    name: 'Robe of Deep Work',
    slot: 'body',
    rarity: 'rare',
    icon: '🥋',
    color: '#B39DDB',
    stats: { focus: 18, attack: 5 },
    effects: [
      { type: 'task_xp_bonus', value: 0.25 },
      { type: 'focus_session_bonus', value: 0.15 },
    ],
    flavor: 'Worn by those who have achieved inbox zero.',
  },
  chest_iron_1: {
    id: 'chest_iron_1',
    name: 'Vest of Routine',
    slot: 'body',
    rarity: 'common',
    icon: '🦺',
    color: '#78909C',
    stats: { resilience: 15, speed: 0.1 },
    flavor: 'Consistent. Reliable. Slightly itchy.',
  },

  // ─── GLOVES ───────────────────────────────────────────────
  gloves_grip_1: {
    id: 'gloves_grip_1',
    name: 'Gloves of Getting Things Done',
    slot: 'gloves',
    rarity: 'common',
    icon: '🧤',
    color: '#FF8A65',
    stats: { attack: 8, critChance: 0.02 },
    flavor: '"Just start." — the gloves',
  },
  gloves_crit_1: {
    id: 'gloves_crit_1',
    name: 'Fingers of Fortune',
    slot: 'gloves',
    rarity: 'uncommon',
    icon: '🧤',
    color: '#FFD54F',
    stats: { critChance: 0.08, critDamage: 0.3 },
    flavor: 'Your pointing finger has become significantly more judgy.',
  },

  // ─── LEGS ─────────────────────────────────────────────────
  legs_endure_1: {
    id: 'legs_endure_1',
    name: 'Leggings of Long Sessions',
    slot: 'legs',
    rarity: 'uncommon',
    icon: '👖',
    color: '#5C6BC0',
    stats: { resilience: 12, focus: 6 },
    effects: [{ type: 'focus_session_bonus', value: 0.10 }],
    flavor: 'Technically pajamas. No one needs to know.',
  },
  legs_swift_1: {
    id: 'legs_swift_1',
    name: 'Trousers of Momentum',
    slot: 'legs',
    rarity: 'common',
    icon: '👗',
    color: '#26A69A',
    stats: { speed: 0.12, attack: 4 },
    flavor: 'Moving faster. Destination: unclear.',
  },

  // ─── BOOTS ────────────────────────────────────────────────
  boots_speed_1: {
    id: 'boots_speed_1',
    name: 'Restless Boots',
    slot: 'boots',
    rarity: 'common',
    icon: '👟',
    color: '#66BB6A',
    stats: { speed: 0.20 },
    flavor: 'They tap. Constantly.',
  },
  boots_speed_2: {
    id: 'boots_speed_2',
    name: 'Sprinters of Sudden Burst',
    slot: 'boots',
    rarity: 'uncommon',
    icon: '👟',
    color: '#26C6DA',
    stats: { speed: 0.35, critChance: 0.03 },
    flavor: 'Perfect for last-minute deadline runs.',
  },

  // ─── NECKLACE ─────────────────────────────────────────────
  necklace_resolve_1: {
    id: 'necklace_resolve_1',
    name: 'Amulet of Resolve',
    slot: 'necklace',
    rarity: 'rare',
    icon: '📿',
    color: '#EF5350',
    stats: { resilience: 20, focus: 10, attack: 6 },
    effects: [{ type: 'task_xp_bonus', value: 0.15 }],
    flavor: '"You will finish this." It means it.',
  },
};

export const RARITY_COLORS = {
  common:    { color: '#9E9BC0', bg: 'rgba(158,155,192,0.12)', label: 'Common' },
  uncommon:  { color: '#5CDD8B', bg: 'rgba(92,221,139,0.12)',  label: 'Uncommon' },
  rare:      { color: '#4FC3F7', bg: 'rgba(79,195,247,0.12)',  label: 'Rare' },
  epic:      { color: '#B39DDB', bg: 'rgba(179,157,219,0.15)', label: 'Epic' },
  legendary: { color: '#F5C842', bg: 'rgba(245,200,66,0.15)',  label: 'Legendary' },
};

export const EQUIPMENT_SLOTS = [
  { id: 'head',     label: 'Head',     icon: '⛑️' },
  { id: 'body',     label: 'Body',     icon: '🦺' },
  { id: 'gloves',   label: 'Gloves',   icon: '🧤' },
  { id: 'legs',     label: 'Legs',     icon: '👖' },
  { id: 'boots',    label: 'Boots',    icon: '👟' },
  { id: 'ring',     label: 'Ring 1',   icon: '💍' },
  { id: 'ring2',    label: 'Ring 2',   icon: '💍' },
  { id: 'necklace', label: 'Necklace', icon: '📿' },
];

export function getItemById(id) {
  return ITEMS[id] || null;
}

/** Sell value = ~35% of typical buy price, scaled by rarity */
const SELL_PRICE_BY_RARITY = {
  common:    30,
  uncommon:  60,
  rare:     120,
  epic:     220,
  legendary:400,
};

export function getSellPrice(item) {
  if (!item) return 0;
  return SELL_PRICE_BY_RARITY[item.rarity] || 30;
}

/** Get effective combined stats from all equipped items */
export function getEquipmentStats(equipped) {
  const base = { attack: 0, speed: 0, critChance: 0, critDamage: 0, focus: 0, resilience: 0 };
  const effects = [];

  Object.values(equipped).forEach(itemId => {
    if (!itemId) return;
    const item = ITEMS[itemId];
    if (!item) return;
    Object.entries(item.stats || {}).forEach(([stat, val]) => {
      base[stat] = (base[stat] || 0) + val;
    });
    (item.effects || []).forEach(e => effects.push(e));
  });

  // Two-ring synergy bonus
  if (equipped.ring && equipped.ring2) {
    base.critChance += 0.05;
  }

  return { stats: base, effects };
}
