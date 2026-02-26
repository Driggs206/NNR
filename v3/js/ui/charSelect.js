// ═══════════════════════════════════════ UI: CHARACTER SELECT ═══════════════

import { CHARACTERS }       from '../data/characters.js';
import { Engine, newRun }   from '../core/state.js';
import { showScreen }       from './screenManager.js';
import { getSaveData }      from '../core/save.js';
import { SPRITE_CONFIG }    from '../data/sprites.js';

export function buildCharacterCards() {
  const grid = document.getElementById('charGrid');
  if (!grid) return;
  grid.innerHTML = '';

  CHARACTERS.forEach(ch => {
    const hpScore  = ch.baseHP  / 140;
    const spdScore = ch.speed   / 260;
    const dmgScore = ch.damage  / 15;

    const spriteConf  = SPRITE_CONFIG[ch.id];
    const portraitHtml = spriteConf && spriteConf.src
      ? `<img class="char-portrait" src="${spriteConf.src}" alt="${ch.name}">`
      : `<div class="char-emoji">${ch.emoji}</div>`;

    const card = document.createElement('div');
    card.className  = 'char-card';
    card.dataset.id = ch.id;
    card.innerHTML  = `
      ${portraitHtml}
      <div class="char-name">${ch.name}</div>
      <div class="char-desc">${ch.desc}</div>
      <div class="char-super"><strong>⚡ Super:</strong> ${ch.superDesc}</div>
      <div class="stat-bars">
        ${statBar('HP',  hpScore)}
        ${statBar('SPD', spdScore)}
        ${statBar('DMG', dmgScore)}
      </div>`;

    card.addEventListener('click', () => {
      Engine.selectedCharId = ch.id;
      document.querySelectorAll('.char-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
    grid.appendChild(card);
  });

  // default selection
  const first = grid.querySelector('.char-card');
  if (first) { first.classList.add('selected'); Engine.selectedCharId = first.dataset.id; }
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

// button hookup
document.getElementById('charStartBtn')?.addEventListener('click', beginRunFromChar);
document.getElementById('tapToBeginBtn')?.addEventListener('click', () => {
  import('../core/audio.js').then(({ initAudio, playTitleMusic }) => {
    initAudio();
    playTitleMusic();
  });
  showScreen('char_select');
});
