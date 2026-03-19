// ═══════════════════════════════════════ RENDERING: RENDER ══════════════════

import { G, Engine }            from '../core/state.js';
import { drawPlayer, drawEnemy, drawPickup } from './drawEntities.js';
import { drawProjectile }        from './drawProjectile.js';
import { drawFloaters, drawParticles } from './drawFx.js';
import { drawTitleBackground }   from './titleBg.js';


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

// ── Background tile image ────────────────────────────────────────────────────
const bgTile = new Image();
bgTile.src = 'assets/img/bg_tile.png';

const TILE_SIZE = 128; // adjust to match your tile's natural size

function drawBackground(ctx, g, W, H) {
  const camX = g.cameraX, camY = g.cameraY;

  if (!bgTile.complete || !bgTile.naturalWidth) {
    ctx.fillStyle = '#020617';
    ctx.fillRect(camX - W, camY - H, W * 2, H * 2);
    return;
  }

  const startX = Math.floor((camX - W) / TILE_SIZE) * TILE_SIZE;
  const startY = Math.floor((camY - H) / TILE_SIZE) * TILE_SIZE;

  for (let x = startX; x < camX + W * 2; x += TILE_SIZE)
    for (let y = startY; y < camY + H * 2; y += TILE_SIZE)
      ctx.drawImage(bgTile, x, y, TILE_SIZE, TILE_SIZE);

  // moody overlay
  ctx.fillStyle = 'rgba(2,6,23,0.18)';
  ctx.fillRect(camX - W, camY - H, W * 2, H * 2);
}

