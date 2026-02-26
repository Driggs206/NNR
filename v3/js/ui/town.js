// ═══════════════════════════════════════ UI: TOWN ═══════════════════════════

import { TOWN_UPGRADES }                          from '../data/upgrades.js';
import { getSaveData, addTownRank, getTownRank,
         setSaveGold, persistSave }               from '../core/save.js';
import { G, Engine }                              from '../core/state.js';
import { showScreen }                             from './screenManager.js';
import { newRun }                                 from '../core/state.js';

export function buildTownGrid() {
  const grid = document.getElementById('townGrid');
  if (!grid) return;
  grid.innerHTML = '';

  TOWN_UPGRADES.forEach(u => {
    const rank = getTownRank(u.id);
    const cost = Math.round(u.baseCost * Math.pow(u.costMul, rank));
    const maxed = rank >= u.maxRank;
    const card  = document.createElement('div');
    card.className = 'town-card';
    card.innerHTML = `
      <div class="town-name">${u.name}</div>
      <div class="town-desc">${u.desc}</div>
      <div class="town-rank">Rank ${rank} / ${u.maxRank}</div>
      <div class="town-cost">${maxed ? '✅ Maxed' : `Cost: ${cost} gold`}</div>
      <button ${maxed ? 'disabled' : ''}>Purchase</button>`;
    if (!maxed) {
      card.querySelector('button').addEventListener('click', () => {
        const save = getSaveData();
        if (save.gold >= cost) {
          setSaveGold(save.gold - cost);
          addTownRank(u.id);
          persistSave();
          refreshTownGold();
          buildTownGrid();
        }
      });
    }
    grid.appendChild(card);
  });
}

export function refreshTownGold() {
  const el = document.getElementById('townGoldLabel');
  if (el) el.textContent = getSaveData().gold;
}

// ── Button hookups ────────────────────────────────────────────────────────────
document.getElementById('townBackBtn')?.addEventListener('click', () => {
  if (G && !G.over) {
    showScreen('game');
  } else {
    showScreen('title');
  }
});
