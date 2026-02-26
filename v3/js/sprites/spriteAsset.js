// ═══════════════════════════════════════ SPRITES: ASSET LOADER ═════════════

import { SPRITE_CONFIG } from '../data/sprites.js';

class SpriteAsset {
  constructor(conf) { this.conf = conf; this.image = null; this.loaded = false; }
  load() {
    if (!this.conf.src) { this.loaded = true; return Promise.resolve(); }
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload  = () => { this.image = img; this.loaded = true; resolve(); };
      img.onerror = reject;
      img.src     = this.conf.src;
    });
  }
}

export const spriteAssets = {};
for (const k in SPRITE_CONFIG) spriteAssets[k] = new SpriteAsset(SPRITE_CONFIG[k]);

export async function loadAllSprites() {
  await Promise.allSettled(Object.values(spriteAssets).map(a => a.load()));
}
