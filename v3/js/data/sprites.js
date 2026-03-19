// ═══════════════════════════════════════ DATA: SPRITES ══════════════════════

export const SPRITE_CONFIG = {
  // ── Playable characters ───────────────────────────────────────────────────
  squirrel:       { src:'assets/img/squirrel1.png',      sheetJson:'assets/data/squirrel.json',  baseSize: 96,  scale: 2.0, offsetY: 0 },
  beaver:         { src:'assets/img/beaver1.png',        sheetJson:'assets/data/beaver.json',    baseSize: 96,  scale: 2.0, offsetY: 0 },
  catthulu:       { src:'assets/img/catt1.png',          sheetJson:'assets/data/catt.json',      baseSize: 112, scale: 2.0, offsetY: 0 },
  cobra:          { src:'assets/img/chupa1.png',         sheetJson:'assets/data/chupa.json',     baseSize: 96,  scale: 2.0, offsetY: 0 },
  honker:         { src:'assets/img/honkk1.png',         sheetJson:'assets/data/honkk.json',     baseSize: 96,  scale: 2.0, offsetY: 0 },


  // ── Enemies ───────────────────────────────────────────────────────────────
  honeybee:       { src:'assets/img/honeybee.png',       sheetJson:'assets/data/honeybee.json',  baseSize: 64,  scale: 2.0, offsetY: 0 },
  sunsprite:      { src:'assets/img/flower1.png',        sheetJson: null,                        baseSize: 64,  scale: 1.0, offsetY: 0 },
  dewdrop:        { src:'assets/img/goo1.png',           sheetJson: null,                        baseSize: 64,  scale: 1.0, offsetY: 0 },
  daybloom:       { src:'assets/img/flower1.png',        sheetJson: null,                        baseSize: 64,  scale: 1.0, offsetY: 0 },
  boss_sunkeeper: { src: null,                           sheetJson: null,                        baseSize: 128, scale: 1.4, offsetY: 0 },
  boss_blossom:   { src: null,                           sheetJson: null,                        baseSize: 128, scale: 1.4, offsetY: 0 },

  // ── Pickups ───────────────────────────────────────────────────────────────
  gem:            { src:'assets/img/expcrystal.png',     sheetJson: null,                        baseSize: 32,  scale: 1.0, offsetY: 0 },
  gold:           { src:'assets/img/Coin.png',           sheetJson: null,                        baseSize: 32,  scale: 1.5, offsetY: 0 },
  xp:             { src:'assets/img/expcrystal.png',     sheetJson: null,                        baseSize: 32,  scale: 1.5, offsetY: 0 },
  energy:         { src:'assets/img/energycrystal.png',  sheetJson: null,                        baseSize: 32,  scale: 1.5, offsetY: 0 },
};

export const ANIM_SHEETS = {};