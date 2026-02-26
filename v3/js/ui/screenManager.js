// ═══════════════════════════════════════ UI: SCREEN MANAGER ════════════════

import { Engine }           from '../core/state.js';
import { initAudio, playBgMusic, playTitleMusic } from '../core/audio.js';

import { updateTitleSaveInfo } from './charSelect.js';

const SCREEN_IDS = {
  title:      'titleScreen',
  char_select:'characterScreen',
  game:       null,           // canvas-based, no div
  town:       'townScreen',
  game_over:  'gameOverScreen',
};

const HUD_SCREEN = 'game';

export function showScreen(name) {
  Engine.currentScreen = name;

  // hide all screens
  Object.values(SCREEN_IDS).forEach(id => {
    if (id) document.getElementById(id)?.classList.add('hidden');
  });

  // show target screen
  const targetId = SCREEN_IDS[name];
  if (targetId) document.getElementById(targetId)?.classList.remove('hidden');

  // HUD
  document.getElementById('hud')?.classList.toggle('hidden', name !== HUD_SCREEN);

  // overlays always start hidden on screen change
  document.getElementById('levelUpOverlay')?.classList.add('hidden');
  document.getElementById('pauseOverlay')?.classList.add('hidden');

  // touch controls (only during gameplay on touch devices)
  const tc = document.getElementById('touchControls');
  if (tc) tc.classList.toggle('hidden', !(Engine.isTouchDevice && name === 'game'));

  // music
if (name === 'game') {
  playBgMusic();
} else if (name === 'title') {
  // Start title music on first click/tap anywhere on the page
  const startTitleAudio = () => {
    initAudio();
    playTitleMusic();
    window.removeEventListener('click',   startTitleAudio);
    window.removeEventListener('keydown', startTitleAudio);
    window.removeEventListener('touchstart', startTitleAudio);
  };
  window.addEventListener('click',      startTitleAudio, { once: true });
  window.addEventListener('keydown',    startTitleAudio, { once: true });
  window.addEventListener('touchstart', startTitleAudio, { once: true });
}


  // title screen save info refresh
  if (name === 'title') updateTitleSaveInfo();
}
