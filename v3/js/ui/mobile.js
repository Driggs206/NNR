// ═══════════════════════════════════════ UI: MOBILE CONTROLS ════════════════

import { Engine }      from '../core/state.js';
import { trySuper }    from '../systems/attack.js';
import { togglePause } from './pause.js';

const DEAD_ZONE = 12;
const KNOB_MAX  = 32;

export function setupMobile() {
  if (!Engine.isTouchDevice) return;

  const base = document.getElementById('joystickBase');
  const knob = document.getElementById('joystickKnob');
  if (!base || !knob) return;

  let joyActive = false;
  let centerX   = 0;
  let centerY   = 0;

  function setKnob(dx, dy) {
    const len   = Math.hypot(dx, dy);
    const clamp = Math.min(len, KNOB_MAX);
    const ang   = Math.atan2(dy, dx) || 0;
    knob.style.transform =
      `translate(${20 + Math.cos(ang) * clamp}px, ${20 + Math.sin(ang) * clamp}px)`;
  }

  document.addEventListener('touchstart', ev => {
    for (const t of ev.touches) {
      const r = base.getBoundingClientRect();
      if (t.clientX >= r.left && t.clientX <= r.right &&
          t.clientY >= r.top  && t.clientY <= r.bottom) {
        joyActive = true;
        centerX   = r.left + r.width  / 2;
        centerY   = r.top  + r.height / 2;
        break;
      }
    }
  }, { passive: true });

  document.addEventListener('touchmove', ev => {
    if (!joyActive) return;
    const t   = ev.touches[0];
    const dx  = t.clientX - centerX;
    const dy  = t.clientY - centerY;
    const len = Math.hypot(dx, dy);
    if (len < DEAD_ZONE) {
      Engine.joyVec.x = 0;
      Engine.joyVec.y = 0;
      setKnob(0, 0);
      return;
    }
    Engine.joyVec.x = dx / len;
    Engine.joyVec.y = dy / len;
    setKnob(dx, dy);
  }, { passive: true });

  document.addEventListener('touchend', ev => {
    if (ev.touches.length === 0) {
      joyActive       = false;
      Engine.joyVec.x = 0;
      Engine.joyVec.y = 0;
      setKnob(0, 0);
    }
  }, { passive: true });

  document.getElementById('btnSuper')
    ?.addEventListener('touchstart', e => { e.preventDefault(); trySuper(); });

  document.getElementById('btnPauseMobile')
    ?.addEventListener('touchstart', e => { e.preventDefault(); togglePause(); });
}
