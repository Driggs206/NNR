// ═══════════════════════════════════════ RENDERING: ENTITIES ════════════════

import { G, Engine } from '../core/state.js';
import { spriteAssets } from '../sprites/spriteAsset.js';

export function drawPlayer(ctx, p) {
  ctx.save();
  if (p.invulnTimer > 0) {
    const alpha = 0.45 + 0.55 * Math.sin(performance.now() / 55);
    ctx.globalAlpha = alpha;
  }

  // shadow ellipse
  ctx.fillStyle = 'rgba(15,23,42,0.7)';
  ctx.beginPath();
  ctx.ellipse(p.x, p.y + 14, 20, 8, 0, 0, Math.PI * 2);
  ctx.fill();

  const asset = spriteAssets[p.id];
  if (asset && asset.loaded && asset.image) {
    const size = 48 * (asset.conf.scale || 1);
    ctx.drawImage(asset.image, p.x - size/2, p.y - size/2, size, size);
  } else {
    ctx.shadowBlur = 0;
    ctx.font = '26px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(p.emoji, p.x, p.y);
  }

  ctx.restore();
}

export function drawEnemy(ctx, e, isBoss = false) {
  const r = e.radius;
  ctx.save();

  const asset = spriteAssets[e.id];
  if (asset && asset.loaded && asset.image) {
    // sprite path
    if (e.poisoned) {
      ctx.filter = 'hue-rotate(90deg) saturate(2)';
    }
    const size = r * 2 * (asset.conf.scale || 1);
    ctx.drawImage(asset.image, e.x - size / 2, e.y - size / 2, size, size);
    ctx.filter = 'none';
  } else {
    // fallback: original circle
    ctx.shadowColor = e.poisoned ? '#4ade80' : e.color;
    ctx.shadowBlur  = 10;
    ctx.fillStyle   = e.poisoned ? '#16a34a' : e.color;
    ctx.beginPath();
    ctx.arc(e.x, e.y, r, 0, Math.PI * 2);
    ctx.fill();

    // inner highlight
    ctx.fillStyle  = 'rgba(255,255,255,0.18)';
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.arc(e.x - r * 0.3, e.y - r * 0.3, r * 0.38, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();

  // health bar
  const hpPct = Math.max(0, e.hp / e.maxHp);
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(e.x - r, e.y - r - 9, r * 2, 4);
  ctx.fillStyle = hpPct > 0.5 ? '#22c55e' : hpPct > 0.25 ? '#eab308' : '#ef4444';
  ctx.fillRect(e.x - r, e.y - r - 9, r * 2 * hpPct, 4);

  // boss crown emoji
  if (isBoss) {
    ctx.font = '14px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText('👑', e.x, e.y - r - 10);
  }
}

export function drawPickup(ctx, pk) {
  const asset = spriteAssets[pk.type];
  if (asset && asset.image) {
    // sprite loaded — draw it
    const size = pk.radius * 2 * (asset.conf.scale || 1);
    ctx.drawImage(asset.image, pk.x - size / 2, pk.y - size / 2, size, size);
  } else if (!asset) {
    // no sprite configured at all — draw circle fallback
    ctx.save();
    ctx.fillStyle   = pk.color;
    ctx.shadowColor = pk.color;
    ctx.shadowBlur  = 12;
    ctx.beginPath();
    ctx.arc(pk.x, pk.y, pk.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  // if asset exists but isn't loaded yet — draw nothing (no circle overlap)
}