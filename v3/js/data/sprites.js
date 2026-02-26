// ═══════════════════════════════════════ DATA: SPRITES ══════════════════════
// Set src to a URL/path to use image sprites. null = emoji fallback.
// ANIM_SHEETS: wire up sprite sheet animations here per entity key.

export const SPRITE_CONFIG = {
  squirrel:       { src:'assets/img/squirrel1.png', scale:1.0, offsetY:0 },
  beaver:         { src:'assets/img/beaver1.png', scale:1.0, offsetY:0 },
  catthulu:       { src:'assets/img/catt1.png', scale:2.0, offsetY:0 },
  cobra:          { src:'assets/img/chupa1.png', scale:1.0, offsetY:0 },
  honker:         { src:'assets/img/honk1.png', scale:1.0, offsetY:0 },
  sunsprite:      { src:'assets/img/flower1.png', scale:1.0, offsetY:0 },
  honeybee:       { src:'assets/img/bee1.png', scale:1.0, offsetY:0 },
  dewdrop:        { src:'assets/img/goo1.png', scale:1.0, offsetY:0 },
  daybloom:       { src:'assets/img/flower1.png', scale:1.0, offsetY:0 },
  gem:            { src:'assets/img/expcrystal.png', scale:1.0, offsetY:0 },
  boss_sunkeeper: { src:null, scale:1.4, offsetY:0 },
  boss_blossom:   { src:null, scale:1.4, offsetY:0 },
  gold:           { src:'assets/img/Coin.png',          scale:1.5, offsetY:0 },
  xp:             { src:'assets/img/expcrystal.png',    scale:1.5, offsetY:0 },
  energy:         { src:'assets/img/energycrystal.png', scale:1.5, offsetY:0 },
};

// Example ANIM_SHEETS entry (uncomment & fill when you add sprite sheets):
// export const ANIM_SHEETS = {
//   squirrel: {
//     key: 'squirrel',
//     frameW: 32, frameH: 32, scale: 1.5, offsetY: 0,
//     animations: {
//       walk_right: { row:0, start:0, count:4, fps:8 },
//       walk_left:  { row:1, start:0, count:4, fps:8 },
//       idle_down:  { row:2, start:0, count:2, fps:4 },
//       attack:     { row:3, start:0, count:3, fps:12, loop:false },
//       hurt:       { row:4, start:0, count:2, fps:10, loop:false },
//       death:      { row:5, start:0, count:4, fps:8,  loop:false },
//     },
//   },
// };
export const ANIM_SHEETS = {};
