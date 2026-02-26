// ═══════════════════════════════════════ SYSTEMS: ATTACK ════════════════════

import { G, Engine }    from '../core/state.js';
import { playSfx }      from '../core/audio.js';
import { applyDamage, healPlayer } from './damage.js';
import { spawnParticles } from './damage.js';

// ── Helpers ──────────────────────────────────────────────────────────────────
function getNearestEnemy() {
  let best = null, bestD2 = Infinity;
  const check = e => {
    const d2 = (e.x - G.player.x) ** 2 + (e.y - G.player.y) ** 2;
    if (d2 < bestD2) { bestD2 = d2; best = e; }
  };
  G.enemies.forEach(check);
  if (G.boss && G.bossAlive) check(G.boss);
  return best;
}

function makeProjectile(p, type, angle, speed, overrides = {}) {
  const rangeBonus = 1 + (p.rangeBonus || 0);
  const dmgMul     = p.dmgMul || 1;
  return Object.assign({
    type,
    x: p.x, y: p.y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius:       10,
    dmg:          (p.weapon.dmg * dmgMul),
    pierce:       (p.weapon.pierce || 1) + (p.pierceBonus || 0),
    range:        (p.weapon.range  * rangeBonus),
    distTraveled: 0,
    poisonDot:    0,
  }, overrides);
}

// ── Auto-attack dispatcher ────────────────────────────────────────────────────
export function handleAttacks(dt) {
  const p   = G.player;
  const cd  = Math.max(0.05, p.weapon.cd * (1 - (p.cooldownBonus || 0)));
  Engine.weaponTimer += dt;
  if (Engine.weaponTimer < cd) return;
  Engine.weaponTimer = 0;

  const target = getNearestEnemy();
  if (!target) return;

  const baseAngle = Math.atan2(target.y - p.y, target.x - p.x);

  switch (p.weapon.type) {
    case 'laser':    _fireLasers(p, baseAngle);    break;
    case 'bite':     _doBite(p, target);           break;
    case 'tentacle': _fireTentacles(p);            break;
    case 'poison':   _firePoison(p, baseAngle);    break;
    case 'spectral': _fireSpectral(p);             break;
  }
  playSfx('shoot');
}

function _fireLasers(p, angle) {
  const count = (p.weapon.count || 1) + (p.projectileBonus || 0);
  for (let i = 0; i < count; i++) {
    const spread = count > 1 ? ((i / (count - 1)) - 0.5) * 0.35 : 0;
    G.projectiles.push(makeProjectile(p, 'laser', angle + spread, 520,
      { radius:11, pierce: (p.weapon.pierce||3)+(p.pierceBonus||0) }));
  }
}

function _doBite(p, target) {
  if (Math.hypot(target.x - p.x, target.y - p.y) > p.weapon.range) return;
  const dmg  = p.weapon.dmg * (p.dmgMul || 1);
  applyDamage(target, dmg, 'bite');
  healPlayer(dmg * (p.weapon.lifesteal || 0.3), p.x, p.y);
}

function _fireTentacles(p) {
  const count = (p.weapon.count || 12) + (p.projectileBonus || 0);
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    G.projectiles.push(makeProjectile(p, 'tentacle', a, 260, { radius:12 }));
  }
}

function _firePoison(p, angle) {
  const count = (p.weapon.count || 8) + (p.projectileBonus || 0);
  for (let i = 0; i < count; i++) {
    const spread = count > 1 ? ((i / (count - 1)) - 0.5) * 0.6 : 0;
    G.projectiles.push(makeProjectile(p, 'poison', angle + spread, 380,
      { poisonDot: p.weapon.dot || 3 }));
  }
}

function _fireSpectral(p) {
  const count = (p.weapon.count || 4) + (p.projectileBonus || 0);
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    G.projectiles.push(makeProjectile(p, 'spectral', a, 320, { radius:10 }));
  }
}

// ── Supermoves ────────────────────────────────────────────────────────────────
export function trySuper() {
  const p = G.player;
  if (!G || G.over || G.paused) return;
  if (p.energy < p.energyMax) return;
  p.energy = 0;
  playSfx('supermove');
  flashSuper();

  switch (p.super) {
    case 'squirrelNova': _superSquirrel(p); break;
    case 'beaverNova':   _superBeaver(p);   break;
    case 'catNova':      _superCat(p);      break;
    case 'cobraNova':    _superCobra(p);    break;
    case 'honkerNova':   _superHonker(p);   break;
  }
}

function _superSquirrel(p) {
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    G.projectiles.push({ type:'laser', x:p.x, y:p.y,
      vx: Math.cos(a)*560, vy: Math.sin(a)*560,
      radius:11, dmg:18*(p.dmgMul||1), pierce:6, range:460, distTraveled:0, poisonDot:0 });
  }
}

function _superBeaver(p) {
  healPlayer(60, p.x, p.y);
  const victims = [...G.enemies, ...(G.boss && G.bossAlive ? [G.boss] : [])];
  victims.forEach(e => {
    if (Math.hypot(e.x - p.x, e.y - p.y) <= 130)
      applyDamage(e, 30 * (p.dmgMul || 1), 'bite');
  });
}

function _superCat(p) {
  for (let r = 0; r < 3; r++) {
    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        const a = (i / 20) * Math.PI * 2;
        G.projectiles.push({ type:'tentacle', x:p.x, y:p.y,
          vx:Math.cos(a)*260, vy:Math.sin(a)*260,
          radius:12, dmg:16*(p.dmgMul||1), pierce:2,
          range: 260 * (1 + r * 0.4), distTraveled:0, poisonDot:0 });
      }
    }, r * 120);
  }
}

function _superCobra(p) {
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    G.projectiles.push({ type:'poison', x:p.x, y:p.y,
      vx:Math.cos(a)*360, vy:Math.sin(a)*360,
      radius:10, dmg:9*(p.dmgMul||1), pierce:2, range:300, distTraveled:0, poisonDot:5 });
  }
  const victims = [...G.enemies, ...(G.boss && G.bossAlive ? [G.boss] : [])];
  victims.forEach(e => { e.poisoned=true; e.poisonDps=Math.max(e.poisonDps,5); e.poisonTime=4; });
}

function _superHonker(p) {
  for (let v = 0; v < 8; v++) {
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        const a = ((i / 8) + v * 0.1) * Math.PI * 2;
        G.projectiles.push({ type:'spectral', x:p.x, y:p.y,
          vx:Math.cos(a)*330, vy:Math.sin(a)*330,
          radius:11, dmg:13*(p.dmgMul||1), pierce:3, range:300, distTraveled:0, poisonDot:0 });
      }
    }, v * 80);
  }
}

function flashSuper() {
  const el = document.createElement('div');
  Object.assign(el.style, {
    position:'absolute', inset:'0', pointerEvents:'none',
    background:'radial-gradient(circle at center,rgba(250,204,21,0.3),transparent 60%)',
    mixBlendMode:'screen', zIndex:'200',
  });
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 160);
}
