// ═══════════════════════════════════════ SPRITES: ASSET LOADER ═════════════

import { SPRITE_CONFIG } from '../data/sprites.js';

class SpriteAsset {
  constructor(conf) {
    this.conf   = conf;
    this.image  = null;
    this.loaded = false;
    this.sheet  = null;
  }

  async load() {
    const promises = [];

    // Load image
    if (this.conf.src) {
      promises.push(new Promise((resolve, reject) => {
        const img    = new Image();
        img.onload   = () => { this.image = img; this.loaded = true; resolve(); };
        img.onerror  = reject;
        img.src      = this.conf.src;
      }));
    } else {
      this.loaded = true;
    }

    // Load JSON sheet data if path provided
    if (this.conf.sheetJson) {
      promises.push(
        fetch(this.conf.sheetJson)
          .then(r => r.json())
          .then(data => {
            // normalize animations array → keyed object
            if (Array.isArray(data.animations)) {
              const keyed = {};
              for (const anim of data.animations) keyed[anim.name] = anim;
              data.animations = keyed;
            }
            // normalize key names
            data.frameW = data.frameWidth  || data.frameW;
            data.frameH = data.frameHeight || data.frameH;
            this.sheet  = data;
          })
          .catch(() => { this.sheet = null; })
      );
    }

    await Promise.all(promises);
  }
}

export const spriteAssets = {};
for (const k in SPRITE_CONFIG) spriteAssets[k] = new SpriteAsset(SPRITE_CONFIG[k]);

export async function loadAllSprites() {
  await Promise.allSettled(Object.values(spriteAssets).map(a => a.load()));
}
