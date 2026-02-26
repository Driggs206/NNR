// ═══════════════════════════════════════ RENDERING: FX ═════════════════════

import { G } from '../core/state.js';

export function drawFloaters(ctx) {
  for (const f of G.floaters) {
    const alpha = Math.max(0, f.life / f.maxLife);
    ctx.save();
    ctx.globalAlpha  = alpha;
    ctx.fillStyle    = f.color;
    ctx.font         = 'bold 13px Nunito, sans-serif';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor  = f.color;
    ctx.shadowBlur   = 6;
    ctx.fillText(f.text, f.x, f.y);
    ctx.restore();
  }
}

export function drawParticles(ctx) {
  for (const p of G.particles) {
    const alpha = Math.max(0, p.life / p.maxLife);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle   = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}
