// ═══════════════════════════════════════ UI: CHARACTER SELECT ═══════════════

import { CHARACTERS }       from '../data/characters.js';
import { Engine, newRun }   from '../core/state.js';
import { showScreen }       from './screenManager.js';
import { getSaveData }      from '../core/save.js';
import { SPRITE_CONFIG }    from '../data/sprites.js';
import { spriteAssets }     from '../sprites/spriteAsset.js';

const cardAnimators = [];

export function buildCharacterCards() {
  const grid = document.getElementById('charGrid');
  if (!grid) return;
  grid.innerHTML = '';
  cardAnimators.length = 0;

  CHARACTERS.forEach(ch => {
    const hpScore  = ch.baseHP  / 140;
    const spdScore = ch.speed   / 260;
    const dmgScore = ch.damage  / 15;

    const spriteConf = SPRITE_CONFIG[ch.id];
    const asset      = spriteAssets[ch.id];
    const hasSheet   = !!(asset?.sheet);

    const card = document.createElement('div');
    card.className  = 'char-card';
    card.dataset.id = ch.id;

    let portraitEl;
    let animState = null;

    if (hasSheet) {
      portraitEl = document.createElement('canvas');
      portraitEl.className = 'char-portrait';
      portraitEl.width  = 64;
      portraitEl.height = 64;

      animState = {
        canvas:     portraitEl,
        asset,
        sheet:      asset.sheet,
        frameIndex: 0,
        timer:      0,
        animName:   'idle',
        hovering:   false,
      };
      cardAnimators.push(animState);
      drawCardFrame(animState);

    } else if (spriteConf?.src) {
      portraitEl = document.createElement('img');
      portraitEl.className = 'char-portrait';
      portraitEl.src = spriteConf.src;
      portraitEl.alt = ch.name;
    } else {
      portraitEl = document.createElement('div');
      portraitEl.className = 'char-emoji';
      portraitEl.textContent = ch.emoji;
    }

    card.appendChild(portraitEl);

    const info = document.createElement('div');
    info.innerHTML = `
      <div class="char-name">${ch.name}</div>
      <div class="char-desc">${ch.desc}</div>
      <div class="char-super"><strong>⚡ Super:</strong> ${ch.superDesc}</div>
      <div class="stat-bars">
        ${statBar('HP',  hpScore)}
        ${statBar('SPD', spdScore)}
        ${statBar('DMG', dmgScore)}
      </div>`;
    card.appendChild(info);

    // ── Mouse listeners on the whole card ──
    if (hasSheet) {
      card.addEventListener('mouseenter', () => {
        animState.hovering   = true;
        animState.animName   = 'idle';
        animState.frameIndex = 0;
        animState.timer      = 0;
      });
      card.addEventListener('mouseleave', () => {
        // only stop animating if this card is not selected
        if (!card.classList.contains('selected')) {
          animState.hovering = false;
          drawCardFrame(animState);
        }
      });
    }

    card.addEventListener('click', () => {
      Engine.selectedCharId = ch.id;
      document.querySelectorAll('.char-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      // stop all other card animations
      for (const s of cardAnimators) {
        s.hovering = false;
        drawCardFrame(s);
      }

      // animate this card
      if (hasSheet) {
        animState.hovering   = true;
        animState.animName   = 'idle';
        animState.frameIndex = 0;
        animState.timer      = 0;
      }
    });

    grid.appendChild(card);
  });

  // default selection — animate first card
  const first = grid.querySelector('.char-card');
  if (first) {
    first.classList.add('selected');
    Engine.selectedCharId = first.dataset.id;
    if (cardAnimators.length > 0) {
      cardAnimators[0].hovering = true;
    }
  }

  startCardAnimLoop();
}

let cardLoopRunning = false;
let lastCardTime    = 0;

function startCardAnimLoop() {
  if (cardLoopRunning) return;
  cardLoopRunning = true;
  lastCardTime    = performance.now();
  requestAnimationFrame(tickCardAnims);
}

function tickCardAnims(now) {
  if (!document.getElementById('charGrid')) {
    cardLoopRunning = false;
    return;
  }

  const dt = Math.min((now - lastCardTime) / 1000, 0.1);
  lastCardTime = now;

  for (const state of cardAnimators) {
    if (!state.hovering) continue;
    const anim = state.sheet.animations[state.animName];
    if (!anim) continue;

    state.timer += dt;
    const dur   = 1 / (anim.fps || 6);
    const count = anim.endFrame - anim.startFrame + 1;

    while (state.timer >= dur) {
      state.timer -= dur;
      state.frameIndex = (state.frameIndex + 1) % count;
    }

    drawCardFrame(state);
  }

  requestAnimationFrame(tickCardAnims);
}

function drawCardFrame(state) {
  const { canvas, asset, sheet, animName, frameIndex } = state;
  const fw   = sheet.frameW || sheet.frameWidth;
  const fh   = sheet.frameH || sheet.frameHeight;
  const cols = sheet.columns;
  const anim = sheet.animations[animName];

  const ctx  = canvas.getContext('2d');
  if (!anim || !asset.image) return;

  const abs  = anim.startFrame + frameIndex;
  const sx   = (abs % cols) * fw;
  const sy   = Math.floor(abs / cols) * fh;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(asset.image, sx, sy, fw, fh, 0, 0, canvas.width, canvas.height);
}

function statBar(label, ratio) {
  return `<div class="stat-row">
    <span class="label">${label}</span>
    <div class="bar"><div class="bar-fill" style="width:${Math.round(ratio*100)}%;"></div></div>
  </div>`;
}

export function beginRunFromChar() {
  newRun(Engine.selectedCharId);
  showScreen('game');
}

export function updateTitleSaveInfo() {
  const el   = document.getElementById('titleSaveInfo');
  if (!el) return;
  const save = getSaveData();
  if (save.totalRuns === 0) {
    el.textContent = 'No save data yet — begin your first raid!';
  } else {
    const best = Math.floor(save.bestTime);
    const m = String(Math.floor(best/60)).padStart(2,'0');
    const s = String(best % 60).padStart(2,'0');
    el.textContent =
      `Runs: ${save.totalRuns}  •  Best: ${m}:${s}  •  Total kills: ${save.totalKills}  •  Gold: ${save.gold}`;
  }
}

document.getElementById('charStartBtn')?.addEventListener('click', beginRunFromChar);
document.getElementById('tapToBeginBtn')?.addEventListener('click', () => {
  import('../core/audio.js').then(({ initAudio, playTitleMusic }) => {
    initAudio();
    playTitleMusic();
  });
  showScreen('char_select');
});
