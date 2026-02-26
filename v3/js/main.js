// ═══════════════════════════════════════ MAIN: BOOT + GAME LOOP ══════════════

import { loadSave }               from './core/save.js';
import { Engine, G }              from './core/state.js';
import { initAudio, toggleMute }  from './core/audio.js';
import { loadAllSprites }         from './sprites/spriteAsset.js';
import { setupInput }             from './systems/input.js';
import { updateGame }             from './systems/update.js';
import { renderGame, ensureCanvasSize } from './rendering/render.js';
import { preloadTitleBg }         from './rendering/titleBg.js';
import { showScreen }             from './ui/screenManager.js';
import { buildCharacterCards }    from './ui/charSelect.js';
import { setupMobile }            from './ui/mobile.js';

import './ui/pause.js';
import './ui/town.js';
import './ui/gameOver.js';
import './ui/charSelect.js';

document.getElementById('muteBtn')?.addEventListener('click', () => {
  initAudio();
  toggleMute();
});

function gameLoop(timestamp) {
  requestAnimationFrame(gameLoop);
  const dt = Math.min((timestamp - (Engine.lastTimestamp || timestamp)) / 1000, 0.05);
  Engine.lastTimestamp = timestamp;
  if (Engine.currentScreen === 'game' && G && !G.paused && !G.over) {
    updateGame(dt);
  }
  renderGame();
}

async function boot() {
  preloadTitleBg();
  ensureCanvasSize();   // ← add this
  loadSave();
  buildCharacterCards();
  setupInput();
  setupMobile();
  await loadAllSprites();
  showScreen('title');
  requestAnimationFrame(gameLoop);
}

boot();
