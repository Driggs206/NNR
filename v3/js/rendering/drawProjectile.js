// ═══════════════════════════════════════ RENDERING: PROJECTILES ════════════

const PROJ_COLORS = {
  laser:    '#c4b5fd',
  bite:     '#fb7185',
  tentacle: '#f97316',
  poison:   '#4ade80',
  spectral: '#fef3c7',
};

export function drawProjectile(ctx, pr) {
  const color = PROJ_COLORS[pr.type] || '#ffffff';
  ctx.save();
  ctx.fillStyle   = color;
  ctx.shadowColor = color;
  ctx.shadowBlur  = 16;
  ctx.beginPath();

  if (pr.type === 'laser') {
    // elongated laser bolt
    ctx.save();
    ctx.translate(pr.x, pr.y);
    ctx.rotate(Math.atan2(pr.vy, pr.vx));
    ctx.fillRect(-14, -4, 28, 8);
    ctx.restore();
  } else {
    ctx.arc(pr.x, pr.y, pr.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}
