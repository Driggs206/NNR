// ============================================================
// COSMIC BACKGROUND — Animated star field with shooting stars
// Renders on a canvas behind the entire app
// ============================================================

import React, { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let W = window.innerWidth;
    let H = window.innerHeight;

    canvas.width  = W;
    canvas.height = H;

    // ── Stars ───────────────────────────────────────────────
    const STAR_COUNT = 180;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x:       Math.random() * W,
      y:       Math.random() * H,
      r:       Math.random() * 1.4 + 0.2,
      alpha:   Math.random() * 0.7 + 0.15,
      flicker: Math.random() * 0.008 + 0.002,
      flickerDir: Math.random() > 0.5 ? 1 : -1,
      // Occasional subtle color tint
      hue:     Math.random() > 0.85 ? (Math.random() > 0.5 ? '200,160,255' : '150,210,255') : '255,255,255',
    }));

    // ── Nebula clouds (static, drawn once) ──────────────────
    const nebulae = [
      { x: W * 0.15, y: H * 0.2,  rx: W * 0.25, ry: H * 0.18, color: 'rgba(100,60,180,0.035)' },
      { x: W * 0.8,  y: H * 0.7,  rx: W * 0.2,  ry: H * 0.22, color: 'rgba(60,100,180,0.03)'  },
      { x: W * 0.5,  y: H * 0.45, rx: W * 0.3,  ry: H * 0.25, color: 'rgba(80,40,120,0.025)'  },
    ];

    // ── Shooting stars ──────────────────────────────────────
    class ShootingStar {
      constructor() { this.reset(true); }

      reset(initial = false) {
        // Start off-screen top or left
        const fromLeft = Math.random() > 0.4;
        this.x     = fromLeft ? -50 : Math.random() * W * 0.6;
        this.y     = fromLeft ? Math.random() * H * 0.5 : -20;
        this.len   = Math.random() * 180 + 80;
        this.speed = Math.random() * 6 + 4;
        this.angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.4;
        this.alpha = 0;
        this.maxAlpha = Math.random() * 0.7 + 0.3;
        this.phase = 'fadein'; // fadein | travel | fadeout | dead
        this.travelled = 0;
        this.totalDist = this.len * (Math.random() * 3 + 2);
        this.width = Math.random() * 1.5 + 0.8;
        // Delay before next one fires (only used when initial=false)
        this.delay = initial ? Math.random() * 600 : 0;
        this.delayLeft = this.delay;
        this.dead = initial && this.delay > 0;
      }

      update() {
        if (this.delayLeft > 0) {
          this.delayLeft--;
          return;
        }
        this.dead = false;

        const dx = Math.cos(this.angle) * this.speed;
        const dy = Math.sin(this.angle) * this.speed;
        this.x += dx;
        this.y += dy;
        this.travelled += this.speed;

        const progress = this.travelled / this.totalDist;

        if (progress < 0.15) {
          this.alpha = (progress / 0.15) * this.maxAlpha;
        } else if (progress < 0.75) {
          this.alpha = this.maxAlpha;
        } else {
          this.alpha = this.maxAlpha * (1 - (progress - 0.75) / 0.25);
        }

        if (progress >= 1 || this.x > W + 100 || this.y > H + 100) {
          this.reset();
        }
      }

      draw(ctx) {
        if (this.dead || this.alpha <= 0) return;

        const tailX = this.x - Math.cos(this.angle) * this.len;
        const tailY = this.y - Math.sin(this.angle) * this.len;

        const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(0.6, `rgba(200,220,255,${this.alpha * 0.4})`);
        grad.addColorStop(1, `rgba(255,255,255,${this.alpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = this.width;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Bright tip
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${this.alpha * 0.9})`;
        ctx.fill();
      }
    }

    // Spawn 2-3 shooting stars, heavily staggered
    const shootingStars = Array.from(
      { length: 3 },
      () => new ShootingStar()
    );

    // ── Draw nebula once to offscreen canvas ─────────────────
    const nebCanvas = document.createElement('canvas');
    nebCanvas.width  = W;
    nebCanvas.height = H;
    const nebCtx = nebCanvas.getContext('2d');
    nebulae.forEach(n => {
      const grad = nebCtx.createRadialGradient(n.x, n.y, 0, n.x, n.y, Math.max(n.rx, n.ry));
      grad.addColorStop(0, n.color);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      nebCtx.save();
      nebCtx.scale(n.rx / Math.max(n.rx, n.ry), n.ry / Math.max(n.rx, n.ry));
      nebCtx.beginPath();
      nebCtx.arc(
        n.x * (Math.max(n.rx, n.ry) / n.rx),
        n.y * (Math.max(n.rx, n.ry) / n.ry),
        Math.max(n.rx, n.ry), 0, Math.PI * 2
      );
      nebCtx.fillStyle = grad;
      nebCtx.fill();
      nebCtx.restore();
    });

    // ── Animation loop ──────────────────────────────────────
    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Nebula
      ctx.drawImage(nebCanvas, 0, 0);

      // Stars with flicker
      stars.forEach(s => {
        s.alpha += s.flicker * s.flickerDir;
        if (s.alpha > 0.85 || s.alpha < 0.1) s.flickerDir *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.hue},${s.alpha})`;
        ctx.fill();
      });

      // Shooting stars
      shootingStars.forEach(ss => {
        ss.update();
        ss.draw(ctx);
      });

      animId = requestAnimationFrame(draw);
    }

    draw();

    // Resize handler
    function handleResize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width  = W;
      canvas.height = H;
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85,
      }}
    />
  );
}
