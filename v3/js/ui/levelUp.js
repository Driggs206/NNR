// ═══════════════════════════════════════ UI: LEVEL UP ═══════════════════════

import { UPGRADE_POOL }  from '../data/upgrades.js';
import { G }             from '../core/state.js';

export function showLevelUpOverlay() {
  const overlay = document.getElementById('levelUpOverlay');
  const row     = document.getElementById('upgradeRow');
  if (!overlay || !row) return;

  row.innerHTML = '';

  // pick 3 random upgrades
  const pool = [...UPGRADE_POOL];
  const choices = [];
  while (choices.length < 3 && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length);
    choices.push(pool.splice(idx, 1)[0]);
  }

  choices.forEach(up => {
    const card = document.createElement('div');
    card.className = 'upgrade-card';
    card.innerHTML = `
      <div class="upgrade-name">${up.name}</div>
      <div class="upgrade-desc">${up.desc}</div>
      <div class="upgrade-rarity rarity-${up.rarity}">${up.rarity.toUpperCase()}</div>`;
    card.addEventListener('click', () => {
      applyUpgrade(up);
      overlay.classList.add('hidden');
      G.paused = false;
    });
    row.appendChild(card);
  });

  overlay.classList.remove('hidden');
}

function applyUpgrade(u) {
  const p = G.player;
  switch (u.id) {
    case 'maxHp':      p.maxHp += 20; p.hp = Math.min(p.maxHp, p.hp + 20); break;
    case 'speed':      p.baseSpeed *= 1.10;     break;
    case 'damage':     p.dmgMul    = (p.dmgMul || 1) * 1.15; break;
    case 'cooldown':   p.cooldownBonus = (p.cooldownBonus || 0) + 0.10; break;
    case 'range':      p.rangeBonus    = (p.rangeBonus    || 0) + 0.15; break;
    case 'pierce':     p.pierceBonus   = (p.pierceBonus   || 0) + 1;    break;
    case 'projectile': p.projectileBonus = (p.projectileBonus || 0) + 1; break;
    case 'regen':      p.regen += 1;            break;
    case 'xpMagnet':   p.pickupBonus = (p.pickupBonus || 0) + 0.30; break;
    case 'armor':      p.armor = Math.min(0.75, (p.armor || 0) + 0.06); break;
  }
}
