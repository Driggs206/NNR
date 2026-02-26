// ═══════════════════════════════════════ SYSTEMS: INPUT ═════════════════════

import { Engine, G }        from '../core/state.js';
import { initAudio, toggleMute, playTitleMusic } from '../core/audio.js';
import { showScreen }        from '../ui/screenManager.js';
import { trySuper }          from './attack.js';
import { togglePause }       from '../ui/pause.js';
import { beginRunFromChar }  from '../ui/charSelect.js';

export function setupInput() {
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup',   e => { Engine.keys[e.code] = false; });
}

function onKeyDown(e) {
  Engine.keys[e.code] = true;

  if (e.code === 'KeyM') {
    initAudio();
    toggleMute();
    return;
  }

  switch (Engine.currentScreen) {
case 'title':
  if (e.code === 'Space') {
    initAudio();
    playTitleMusic();
    showScreen('char_select');
  }
  break;

    case 'char_select':
      if (e.code === 'Enter') beginRunFromChar();
      break;

    case 'game':
      if (e.code === 'Space') { e.preventDefault(); trySuper(); }
      if (e.code === 'Escape' || e.code === 'KeyP') togglePause();
      break;
  }
}
