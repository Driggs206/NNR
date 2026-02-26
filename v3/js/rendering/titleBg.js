// ═══════════════════════════════════════ RENDERING: TITLE BACKGROUND ════════

let _bgImg       = null;
let _bgImgLoaded = false;

export function preloadTitleBg() {
  _bgImg         = new Image();
  _bgImg.onload  = () => { _bgImgLoaded = true; };
  _bgImg.onerror = () => { _bgImgLoaded = false; };
  _bgImg.src     = 'titlebg.png';
}

export function drawTitleBackground(ctx, w, h) {
  const t = performance.now() / 1000;

  if (_bgImgLoaded && _bgImg) {
    ctx.drawImage(_bgImg, 0, 0, w, h);
    ctx.fillStyle = 'rgba(2,6,23,0.48)';
    ctx.fillRect(0, 0, w, h);
  } else {
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#020617');
    sky.addColorStop(1, '#0f172a');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    for (let i = 0; i < 80; i++) {
      const sx = ((i * 137.508) % w);
      const sy = ((i * 97.3) % (h * 0.65));
      const br = 0.4 + 0.6 * Math.abs(Math.sin(t * 0.7 + i));
      ctx.fillStyle = `rgba(255,255,255,${br * 0.8})`;
      ctx.beginPath();
      ctx.arc(sx, sy, 0.9, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    ctx.save();
    ctx.translate(w * 0.8, h * 0.18);
    const grd = ctx.createRadialGradient(0, 0, 8, 0, 0, 68);
    grd.addColorStop(0,   '#fefce8');
    grd.addColorStop(0.3, '#fef9c3');
    grd.addColorStop(1,   'rgba(254,249,195,0)');
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(0, 0, 68, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = '#060f1e';
    for (let x = -20; x < w + 40; x += 38) {
      const ht = 70 + Math.sin((x / 120) + 1.2) * 28 + Math.sin(x / 60) * 14;
      ctx.beginPath();
      ctx.moveTo(x, h);
      ctx.lineTo(x + 19, h - ht);
      ctx.lineTo(x + 38, h);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }

  ctx.save();
  for (let i = 0; i < 40; i++) {
    const px    = ((i * 67.3 + t * 30) % (w + 60)) - 30;
    const py    = (Math.sin(i * 11.3 + t * 1.6) * 130) + h * 0.42;
    const alpha = 0.5 + 0.5 * Math.sin(t * 3 + i * 2.1);
    ctx.fillStyle   = `rgba(129,230,217,${alpha * 0.85})`;
    ctx.shadowColor = '#81e6d9';
    ctx.shadowBlur  = 8;
    ctx.beginPath();
    ctx.arc(px, py, 2, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}
