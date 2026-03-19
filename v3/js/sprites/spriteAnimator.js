// ═══════════════════════════════════════ SPRITES: ANIMATOR ═════════════════

import { ANIM_SHEETS } from '../data/sprites.js';
import { spriteAssets } from './spriteAsset.js';

export class SpriteAnimator {
  constructor(sheetKey) {
    this.sheetKey   = sheetKey;
    this.sheet      = ANIM_SHEETS[sheetKey] || null;
    this.current    = 'idle';
    this.time       = 0;
    this.frameIndex = 0;
    this.playingOnce = false;
    this.onceDone    = false;
  }
  
    init() {
    const asset = spriteAssets[this.sheetKey];
    this.sheet  = asset?.sheet || null;
  }


  play(name) {
    if (this.playingOnce) return;
    if (this.current !== name) { this.current = name; this.time = 0; this.frameIndex = 0; }
  }

  playOnce(name) {
    if (this.playingOnce && !this.onceDone) return;
    this.playingOnce = true;
    this.current     = name;
    this.time        = 0;
    this.frameIndex  = 0;
    this.onceDone    = false;
  }

  _resolve(name) {
    if (!this.sheet) return null;
    const anims = this.sheet.animations;
    if (anims[name]) return anims[name];
    const fallbacks = ['idle','idle_down','idle_right','idle_left','idle_up'];
    for (const f of fallbacks) if (anims[f]) return anims[f];
    const keys = Object.keys(anims);
    return keys.length ? anims[keys[0]] : null;
  }

  // Returns frame count for an animation, supporting both formats
  _frameCount(anim) {
    if (anim.count !== undefined) return anim.count;                   // row format
    if (anim.endFrame !== undefined) return anim.endFrame - anim.startFrame + 1; // grid format
    return 1;
  }

  update(dt) {
    if (!this.sheet) return;
    const anim = this._resolve(this.current);
    if (!anim) return;
    this.time += dt;
    const dur = 1 / (anim.fps || 8);
    const count = this._frameCount(anim);
    while (this.time >= dur) {
      this.time -= dur;
      this.frameIndex++;
      if (this.frameIndex >= count) {
        if (anim.loop === false) {
          this.frameIndex  = count - 1;
          this.playingOnce = false;
          this.onceDone    = true;
        } else {
          this.frameIndex = 0;
        }
      }
    }
  }

  draw(ctx, x, y, hitbox) {
    if (!this.sheet) return;
    const asset = spriteAssets[this.sheetKey];
    if (!asset?.image) return;
    const anim = this._resolve(this.current);
    if (!anim) return;

    const { frameWidth, frameHeight, frameW, frameH, offsetY = 0 } = this.sheet;
    const scale = asset.conf?.scale ?? 1;
    const fw = frameWidth  || frameW;   // support both JSON key names
    const fh = frameHeight || frameH;

    let sx, sy;

    if (anim.row !== undefined) {
      // Row-based format (original)
      sx = (anim.start + this.frameIndex) * fw;
      sy = anim.row * fh;
    } else {
      // Grid format (new JSON): convert absolute frame number to col/row
      const cols      = this.sheet.columns || Math.floor(asset.image.width / fw);
      const absFrame  = anim.startFrame + this.frameIndex;
      sx = (absFrame % cols) * fw;
      sy = Math.floor(absFrame / cols) * fh;
    }

    const dw = hitbox * scale;
    const dh = hitbox * scale;
    ctx.save();
    ctx.translate(x, y + offsetY);
    if (anim.flipX) ctx.scale(-1, 1);
    ctx.drawImage(asset.image, sx, sy, fw, fh, -dw / 2, -dh / 2, dw, dh);
    ctx.restore();
  }
}

/**
 * Called each frame during updateGame.
 * Selects the correct directional animation based on movement vector.
 */
export function updatePlayerAnimator(player, dt, mx, my) {
  if (!player.animator) return;
  const anim = player.animator;
  const len  = Math.hypot(mx, my);
  if (len > 0.1) {
    const angle = Math.atan2(my, mx);
    if      (Math.abs(angle) < Math.PI * 0.25)                          anim.play('right');
    else if (angle > Math.PI * 0.25 && angle < Math.PI * 0.75)          anim.play('idle');
    else if (angle < -Math.PI * 0.25 && angle > -Math.PI * 0.75)        anim.play('idle');
    else                                                                  anim.play('left');
  } else {
    anim.play('idle');
  }
  anim.update(dt);
}
