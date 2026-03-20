// ============================================================
// ITEMS — Aggregates all equipment from per-slot files.
// To add new items: edit the relevant file in src/data/items/
// ============================================================

import { HEAD_ITEMS }     from './items/head.js';
import { BODY_ITEMS }     from './items/body.js';
import { GLOVES_ITEMS }   from './items/gloves.js';
import { LEGS_ITEMS }     from './items/legs.js';
import { BOOTS_ITEMS }    from './items/boots.js';
import { RINGS_ITEMS }    from './items/rings.js';
import { NECKLACE_ITEMS } from './items/necklace.js';
export { ITEM_SETS, getActiveSetBonuses } from './items/sets.js';

export const ITEMS = {
  ...HEAD_ITEMS,
  ...BODY_ITEMS,
  ...GLOVES_ITEMS,
  ...LEGS_ITEMS,
  ...BOOTS_ITEMS,
  ...RINGS_ITEMS,
  ...NECKLACE_ITEMS,
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

const SELL_PRICE_BY_RARITY = {
  common:    30,
  uncommon:  60,
  rare:     120,
  epic:     250,
  legendary:600,
};

export function getSellPrice(item) {
  if (!item) return 0;
  return SELL_PRICE_BY_RARITY[item.rarity] || 30;
}

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

// Rarity sort order for UI display
export const RARITY_ORDER = ['common', 'uncommon', 'rare', 'epic', 'legendary'];

// Get all items for a given slot, sorted by rarity
export function getItemsBySlot(slot) {
  return Object.values(ITEMS)
    .filter(item => item.slot === slot || (slot === 'ring' && item.slot === 'ring'))
    .sort((a, b) => RARITY_ORDER.indexOf(a.rarity) - RARITY_ORDER.indexOf(b.rarity));
}
