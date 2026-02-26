// ═══════════════════════════════════════ RENDERING: HUD ═════════════════════

import { G } from '../core/state.js';

// ── Full HUD refresh ──────────────────────────────────────────────────────────
export function updateHudAll() {
  if (!G) return;
  const p = G.player;

  setBarWidth('hpBarFill', p.hp / p.maxHp);
  setText('hpText', `HP ${Math.round(p.hp)} / ${Math.round(p.maxHp)}`);
  setText('timer', formatTime(G.time));
  setText('killCounter', `Kills: ${G.kills}`);
  setText('goldCounter', `Gold: ${G.gold}`);

  setBarWidth('energyBarFill', p.energy / p.energyMax);
  setText('energyLabel', `Energy ${Math.round(p.energy)} / ${p.energyMax} — SPACE: Super`);

  setBarWidth('xpBarFill', p.xp / p.xpToNext);
  setText('levelBadge', `Level ${p.level}  •  Wave ${G.wave}`);

  const streakEl = document.getElementById('killStreakLabel');
  if (streakEl) streakEl.textContent = G.killStreak > 3 ? `🔥 Streak ×${G.killStreak}` : '';

  // mobile super glow
  const btnSuper = document.getElementById('btnSuper');
  if (btnSuper) btnSuper.classList.toggle('charged', p.energy >= p.energyMax);
}

// ── Wave banner ───────────────────────────────────────────────────────────────
let _waveBadgeTimer = null;
export function showWaveBadge(text) {
  const el = document.getElementById('waveBadge');
  if (!el) return;
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(_waveBadgeTimer);
  _waveBadgeTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

// ── Boss bar ──────────────────────────────────────────────────────────────────
export function updateBossBar() {
  const cont = document.getElementById('bossBarContainer');
  if (!cont) return;
  if (G && G.boss && G.bossAlive) {
    cont.classList.add('show');
    setText('bossNameLabel', G.boss.name);
    setBarWidth('bossHpFill', G.boss.hp / G.boss.maxHp);
  } else {
    cont.classList.remove('show');
  }
}

// ── Tiny helpers ──────────────────────────────────────────────────────────────
function setBarWidth(id, ratio) {
  const el = document.getElementById(id);
  if (el) el.style.width = Math.max(0, Math.min(1, ratio)) * 100 + '%';
}
function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}
function formatTime(sec) {
  const s = Math.floor(sec);
  return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
}
