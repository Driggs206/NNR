// ============================================================
// SHOP DATA — Static starter shop + rotating daily shop
// ============================================================

export const STATIC_SHOP = {
  shop_id: 'starter_shop',
  name: 'Wandering Merchant',
  icon: '🛒',
  items: [
    { item_id: 'ring_focus_1',    price: 80,  currency: 'gold' },
    { item_id: 'ring_speed_1',    price: 80,  currency: 'gold' },
    { item_id: 'boots_speed_1',   price: 90,  currency: 'gold' },
    { item_id: 'gloves_grip_1',   price: 100, currency: 'gold' },
    { item_id: 'helmet_steel_1',  price: 110, currency: 'gold' },
    { item_id: 'chest_iron_1',    price: 140, currency: 'gold' },
    { item_id: 'legs_swift_1',    price: 100, currency: 'gold' },
  ],
};

// Rotating shop: 3 random pools, one is chosen each "day" (every 24h)
export const ROTATING_POOLS = [
  [
    { item_id: 'ring_focus_2',       price: 220, currency: 'gold' },
    { item_id: 'gloves_crit_1',      price: 180, currency: 'gold' },
    { item_id: 'helmet_clarity_1',   price: 200, currency: 'gold' },
  ],
  [
    { item_id: 'boots_speed_2',      price: 200, currency: 'gold' },
    { item_id: 'legs_endure_1',      price: 190, currency: 'gold' },
    { item_id: 'ring_focus_2',       price: 220, currency: 'gold' },
  ],
  [
    { item_id: 'necklace_resolve_1', price: 350, currency: 'gold' },
    { item_id: 'chest_focus_1',      price: 400, currency: 'gold' },
    { item_id: 'gloves_crit_1',      price: 180, currency: 'gold' },
  ],
];

export const REFRESH_HOURS = 24;

/** Pick which rotating pool is active based on the day. */
export function getDailyPool(seed = Date.now()) {
  const dayIndex = Math.floor(seed / (1000 * 60 * 60 * REFRESH_HOURS));
  return ROTATING_POOLS[dayIndex % ROTATING_POOLS.length];
}

/** Time in ms until next shop rotation */
export function msUntilRefresh() {
  const msPerDay = 1000 * 60 * 60 * REFRESH_HOURS;
  const now = Date.now();
  const nextDay = (Math.floor(now / msPerDay) + 1) * msPerDay;
  return nextDay - now;
}
