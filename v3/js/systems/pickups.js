// ═══════════════════════════════════════ SYSTEMS: PICKUPS ═══════════════════

import { G }          from '../core/state.js';
import { playSfx }    from '../core/audio.js';
import { getSaveData } from '../core/save.js';
import { showLevelUpOverlay } from '../ui/levelUp.js';

export function updatePickups(dt) {
  const p     = G.player;
  const save  = getSaveData();
  const town  = save.town || {};
  const pickR = 70 * (1 + (p.pickupBonus || 0) + (town.lureGlyph || 0) * 0.25);

  for (let i = G.pickups.length - 1; i >= 0; i--) {
    const pk = G.pickups[i];
    if (Math.hypot(pk.x - p.x, pk.y - p.y) <= pickR) {
      collectPickup(pk);
      G.pickups.splice(i, 1);
    }
  }
}

function collectPickup(pk) {
  const p    = G.player;
  const town = (getSaveData().town || {});
  playSfx('xp_collect');
  switch (pk.type) {
    case 'xp':
      addXp(pk.value);
      break;
    case 'energy':
      p.energy = Math.min(p.energyMax, p.energy + pk.value + (town.energyCrystal || 0) * 5);
      break;
    case 'gold':
      G.gold    += pk.value;
      G.runGold += pk.value;
      break;
  }
}

function addXp(amount) {
  const p = G.player;
  p.xp += amount;
  while (p.xp >= p.xpToNext) {
    p.xp      -= p.xpToNext;
    p.level   += 1;
    p.xpToNext = Math.floor(p.xpToNext * 1.4);
    G.needLevelUp = true;
    playSfx('levelup');
  }
}
