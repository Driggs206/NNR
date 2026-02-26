// ═══════════════════════════════════════ UI: GAME OVER ══════════════════════

import { G, Engine, newRun } from '../core/state.js';
import { getSaveData }        from '../core/save.js';
import { showScreen }         from './screenManager.js';
import { buildTownGrid, refreshTownGold } from './town.js';

export function showGameOver() {
  const save   = getSaveData();
  const sec    = Math.floor(G.time);
  const m      = String(Math.floor(sec/60)).padStart(2,'0');
  const s      = String(sec % 60).padStart(2,'0');
  const bestSec = Math.floor(save.bestTime);
  const bm     = String(Math.floor(bestSec/60)).padStart(2,'0');
  const bs     = String(bestSec % 60).padStart(2,'0');

  const statsEl = document.getElementById('gameOverStats');
  if (statsEl) {
    statsEl.innerHTML = `
      <div>⏱ Time survived: <strong>${m}:${s}</strong></div>
      <div>💀 Kills: <strong>${G.kills}</strong></div>
      <div>⬆ Level: <strong>${G.player.level}</strong></div>
      <div>🌊 Wave: <strong>${G.wave}</strong></div>
      <div>💰 Gold earned: <strong>${G.runGold}</strong></div>
      <div>🏆 Best time: <strong>${bm}:${bs}</strong></div>
      <div>🎯 Total kills: <strong>${save.totalKills}</strong></div>`;
  }

  showScreen('game_over');
}

// ── Button hookups ────────────────────────────────────────────────────────────
document.getElementById('btnTryAgain')?.addEventListener('click', () => {
  newRun(Engine.selectedCharId);
  showScreen('game');
});

document.getElementById('btnVisitTownFromOver')?.addEventListener('click', () => {
  refreshTownGold();
  buildTownGrid();
  showScreen('town');
});

document.getElementById('btnMainMenuFromOver')?.addEventListener('click', () => {
  showScreen('title');
});
