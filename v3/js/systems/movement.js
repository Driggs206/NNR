// ═══════════════════════════════════════ SYSTEMS: MOVEMENT ══════════════════

import { G, Engine } from '../core/state.js';

export function movePlayer(dt) {
  const p  = G.player;
  const k  = Engine.keys;
  const jv = Engine.joyVec;

  let mx = 0, my = 0;
  if (k['KeyW'] || k['ArrowUp'])    my -= 1;
  if (k['KeyS'] || k['ArrowDown'])  my += 1;
  if (k['KeyA'] || k['ArrowLeft'])  mx -= 1;
  if (k['KeyD'] || k['ArrowRight']) mx += 1;

  if (Math.abs(jv.x) > 0.05 || Math.abs(jv.y) > 0.05) {
    mx += jv.x;
    my += jv.y;
  }

  const len = Math.hypot(mx, my);
  if (len > 0) { mx /= len; my /= len; }

  p.x += mx * p.baseSpeed * dt;
  p.y += my * p.baseSpeed * dt;
}
