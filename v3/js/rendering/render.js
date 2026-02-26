// ═══════════════════════════════════════ RENDERING: RENDER ══════════════════

import { G, Engine }            from '../core/state.js';
import { drawPlayer, drawEnemy, drawPickup } from './drawEntities.js';
import { drawProjectile }        from './drawProjectile.js';
import { drawFloaters, drawParticles } from './drawFx.js';
import { drawTitleBackground }   from './titleBg.js';

const GRID_SIZE = 64;

function resizeCanvas() {
  const canvas = document.getElementById('gameCanvas');
  if (!canvas) return;
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);

export function ensureCanvasSize() { resizeCanvas(); }

export function renderGame() {
  const canvas = document.getElementById('gameCanvas');
  const ctx    = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  if (!G || Engine.currentScreen !== 'game') {
    drawTitleBackground(ctx, W, H);
    return;
  }

  // ── Camera + shake ──────────────────────────────────────────────────────────
  const sh = Engine.shake;
  let ox = W / 2 - G.cameraX;
  let oy = H / 2 - G.cameraY;
  if (sh.mag > 0 && sh.timer > 0) {
    ox += (Math.random() - 0.5) * sh.mag;
    oy += (Math.random() - 0.5) * sh.mag;
  }
  ctx.save();
  ctx.translate(ox, oy);

  // ── Background grid ─────────────────────────────────────────────────────────
  drawBackground(ctx, G, W, H);

  // ── Particles ───────────────────────────────────────────────────────────────
  drawParticles(ctx);

  // ── Enemies ─────────────────────────────────────────────────────────────────
  G.enemies.forEach(e => drawEnemy(ctx, e, false));
  if (G.boss && G.bossAlive) drawEnemy(ctx, G.boss, true);

  // ── Pickups ─────────────────────────────────────────────────────────────────
  G.pickups.forEach(pk => drawPickup(ctx, pk));

  // ── Projectiles ─────────────────────────────────────────────────────────────
  G.projectiles.forEach(pr => drawProjectile(ctx, pr));

  // ── Player ──────────────────────────────────────────────────────────────────
  drawPlayer(ctx, G.player);

  // ── Floaters ────────────────────────────────────────────────────────────────
  drawFloaters(ctx);

  ctx.restore();
}

// ── Infinite scrolling grid ───────────────────────────────────────────────────
function drawBackground(ctx, g, W, H) {
  const camX = g.cameraX, camY = g.cameraY;

  ctx.fillStyle = '#020617';
  ctx.fillRect(camX - W, camY - H, W * 2, H * 2);

  ctx.strokeStyle = 'rgba(30,64,175,0.22)';
  ctx.lineWidth   = 1;
  const startX = Math.floor((camX - W) / GRID_SIZE) * GRID_SIZE;
  const endX   = camX + W;
  const startY = Math.floor((camY - H) / GRID_SIZE) * GRID_SIZE;
  const endY   = camY + H;

  ctx.beginPath();
  for (let x = startX; x <= endX; x += GRID_SIZE) {
    ctx.moveTo(x, startY);
    ctx.lineTo(x, endY);
  }
  for (let y = startY; y <= endY; y += GRID_SIZE) {
    ctx.moveTo(startX, y);
    ctx.lineTo(endX,   y);
  }
  ctx.stroke();
}
