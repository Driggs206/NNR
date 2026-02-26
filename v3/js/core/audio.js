// ═══════════════════════════════════════ CORE: AUDIO ═══════════════════════

let _ctx   = null;
let _gain  = null;
let _muted = false;

let bgMusic    = null;
let titleMusic = null;

const THROTTLE_GAP = { shoot:0.06, xp:0.04, hurt:0.15 };
const _lastPlay = {};

export function initAudio() {
  if (_ctx) return;
  _ctx  = new (window.AudioContext || window.webkitAudioContext)();
  _gain = _ctx.createGain();
  _gain.gain.value = 0.6;
  _gain.connect(_ctx.destination);

  bgMusic    = new Audio('music.mp3');
  bgMusic.loop = true;
  bgMusic.volume = 0.6;

  titleMusic = new Audio('titlemusic.mp3');
  titleMusic.loop = true;
  titleMusic.volume = 0.6;
}

export function isMuted() { return _muted; }

export function setMute(flag) {
  _muted = flag;
  if (_gain)      _gain.gain.value    = _muted ? 0 : 0.6;
  if (bgMusic)    bgMusic.volume      = _muted ? 0 : 0.6;
  if (titleMusic) titleMusic.volume   = _muted ? 0 : 0.6;
  const btn = document.getElementById('muteBtn');
  if (btn) btn.textContent = _muted ? '🔇' : '🔊';
}

export function toggleMute() { setMute(!_muted); }

function tone(type, freq, dur, gain = 0.3) {
  if (!_ctx || _muted) return;
  const osc = _ctx.createOscillator();
  const g   = _ctx.createGain();
  osc.type  = type;
  osc.frequency.setValueAtTime(freq, _ctx.currentTime);
  g.gain.value = gain;
  osc.connect(g);
  g.connect(_gain);
  osc.start();
  g.gain.exponentialRampToValueAtTime(0.0001, _ctx.currentTime + dur);
  osc.stop(_ctx.currentTime + dur);
}

export function playSfx(name) {
  const now = performance.now() / 1000;
  if (THROTTLE_GAP[name] && now - (_lastPlay[name] || 0) < THROTTLE_GAP[name]) return;
  _lastPlay[name] = now;

  switch (name) {
    case 'shoot':       tone('square',   680, 0.08, 0.2);  break;
    case 'enemy_die':   tone('triangle', 260, 0.12, 0.26); break;
    case 'player_hurt': tone('sawtooth', 180, 0.16, 0.28); break;
    case 'xp_collect':  tone('sine',     880, 0.06, 0.25); break;
    case 'levelup':
      tone('sine', 660, 0.08, 0.25);
      setTimeout(() => tone('sine', 880, 0.12, 0.25), 60);
      break;
    case 'gameover':    tone('triangle', 140, 0.5, 0.3);   break;
    case 'supermove':
      for (let i = 0; i < 6; i++)
        setTimeout(() => tone('sine', 520 + i * 90, 0.1, 0.24), i * 60);
      break;
  }
}

export function playBgMusic() {
  if (!bgMusic) return;
  if (titleMusic) titleMusic.pause();
  if (bgMusic.paused) { bgMusic.currentTime = 0; bgMusic.play().catch(() => {}); }
}

export function playTitleMusic() {
  if (!titleMusic) return;
  if (bgMusic) bgMusic.pause();
  if (titleMusic.paused) { titleMusic.currentTime = 0; titleMusic.play().catch(() => {}); }
}

export function stopAllMusic() {
  if (bgMusic)    bgMusic.pause();
  if (titleMusic) titleMusic.pause();
}
