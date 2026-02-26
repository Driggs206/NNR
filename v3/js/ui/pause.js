// ═══════════════════════════════════════ UI: PAUSE ══════════════════════════

import { G, Engine }   from '../core/state.js';
import { showScreen }  from './screenManager.js';
import { newRun }      from '../core/state.js';
import { buildTownGrid, refreshTownGold } from './town.js';

export function togglePause() {
  if (!G || G.over || Engine.currentScreen !== 'game') return;
  G.paused = !G.paused;
  document.getElementById('pauseOverlay')?.classList.toggle('hidden', !G.paused);
}

// Button hookups
document.getElementById('btnResume')?.addEventListener('click', () => togglePause());

document.getElementById('btnVisitTown')?.addEventListener('click', () => {
  if (G) G.paused = false;
  document.getElementById('pauseOverlay')?.classList.add('hidden');
  refreshTownGold();
  buildTownGrid();
  showScreen('town');
});

document.getElementById('btnRestart')?.addEventListener('click', () => {
  document.getElementById('pauseOverlay')?.classList.add('hidden');
  newRun(Engine.selectedCharId);
  showScreen('game');
});

document.getElementById('btnMainMenu')?.addEventListener('click', () => {
  document.getElementById('pauseOverlay')?.classList.add('hidden');
  showScreen('title');
});
