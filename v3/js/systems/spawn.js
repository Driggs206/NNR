// ═══════════════════════════════════════ SYSTEMS: SPAWN ═════════════════════

import { G }                   from '../core/state.js';
import { ENEMY_TYPES, BOSS_TYPES } from '../data/enemies.js';

const BOSS_KEYS   = Object.keys(BOSS_TYPES);
const ENEMY_KEYS  = Object.keys(ENEMY_TYPES);

export function spawnEnemy() {
  const dist  = 380 + Math.random() * 120;
  const angle = Math.random() * Math.PI * 2;
  const ex    = G.player.x + Math.cos(angle) * dist;
  const ey    = G.player.y + Math.sin(angle) * dist;
  const tId   = ENEMY_KEYS[Math.floor(Math.random() * ENEMY_KEYS.length)];
  const tmpl  = ENEMY_TYPES[tId];

  const scaleHp  = 1 + G.time * 0.03;
  const scaleSp  = 1 + G.time * 0.015;

  G.enemies.push({
    id:       tId,
    name:     tmpl.name,
    x: ex,    y: ey,
    radius:   tmpl.size,
    hp:       tmpl.hp  * scaleHp,
    maxHp:    tmpl.hp  * scaleHp,
    speed:    tmpl.speed * scaleSp,
    color:    tmpl.color,
    xp:       tmpl.xp,
    gold:     tmpl.gold,
    poisoned: false,
    poisonDps: 0,
    poisonTime: 0,
    isBoss:   false,
  });
}

export function spawnBoss() {
  const key  = BOSS_KEYS[Math.floor(Math.random() * BOSS_KEYS.length)];
  const tmpl = BOSS_TYPES[key];
  const dist = 520;
  const ang  = Math.random() * Math.PI * 2;

  const scaleHp = 1 + G.time * 0.06;
  const boss = {
    id:       key,
    name:     tmpl.name,
    x:        G.player.x + Math.cos(ang) * dist,
    y:        G.player.y + Math.sin(ang) * dist,
    radius:   tmpl.size,
    hp:       tmpl.hp * scaleHp,
    maxHp:    tmpl.hp * scaleHp,
    speed:    tmpl.speed,
    color:    tmpl.color,
    xp:       tmpl.xp,
    gold:     tmpl.gold,
    poisoned: false,
    poisonDps: 0,
    poisonTime: 0,
    isBoss:   true,
  };

  G.boss      = boss;
  G.bossAlive = true;
}
