// ═══════════════════════════════════════ SYSTEMS: DAMAGE ════════════════════

import { G, Engine }  from '../core/state.js';
import { playSfx }    from '../core/audio.js';
import { getSaveData, recordRun, setSaveGold, persistSave } from '../core/save.js';
import { showGameOver } from '../ui/gameOver.js';

// ── Apply damage to an enemy ──────────────────────────────────────────────────
export function applyDamage(enemy, rawDmg) {
  if (!enemy) return;
  enemy.hp -= rawDmg;
  spawnFloater(enemy.x, enemy.y, `-${Math.round(rawDmg)}`, '#fecaca');
  if (enemy.hp <= 0) onEnemyDeath(enemy);
}

// ── Projectile hits enemy ─────────────────────────────────────────────────────
export function projectileHitEnemy(proj, enemy) {
  const dmg = proj.dmg * (1 - (enemy.armorReduction || 0));
  enemy.hp -= dmg;
  proj.pierce -= 1;
  spawnFloater(enemy.x, enemy.y, `-${Math.round(dmg)}`, '#fee2e2');

  if (proj.type === 'poison' && proj.poisonDot > 0) {
    enemy.poisoned   = true;
    enemy.poisonDps  = Math.max(enemy.poisonDps, proj.poisonDot);
    enemy.poisonTime = Math.max(enemy.poisonTime, 3);
  }
  if (enemy.hp <= 0) onEnemyDeath(enemy);
}

// ── Heal the player ───────────────────────────────────────────────────────────
export function healPlayer(amount, x, y) {
  const p = G.player;
  p.hp = Math.min(p.maxHp, p.hp + amount);
  spawnFloater(x, y, `+${Math.round(amount)}`, '#bbf7d0');
}

// ── Enemy touches player ──────────────────────────────────────────────────────
export function damagePlayer(amount) {
  const p = G.player;
  if (p.invulnTimer > 0) return;
  const final = amount * (1 - (p.armor || 0));
  p.hp -= final;
  p.invulnTimer = 0.8;
  spawnFloater(p.x, p.y, `-${Math.round(final)}`, '#fecaca');
  playSfx('player_hurt');
  Engine.shake.mag   = 8;
  Engine.shake.timer = 0.3;
  if (p.hp <= 0) triggerGameOver();
}

// ── Enemy death ───────────────────────────────────────────────────────────────
function onEnemyDeath(enemy) {
  G.kills++;
  G.killStreak++;
  G.killStreakTimer = 0;
  playSfx('enemy_die');
  spawnParticles(enemy.x, enemy.y, enemy.color || '#fbbf24');

  G.pickups.push({ type:'xp',    x:enemy.x, y:enemy.y, radius:10, value:enemy.xp || 3,  color:'#a855f7' });
  G.pickups.push({ type:'gold',  x:enemy.x, y:enemy.y, radius:9,  value:enemy.gold || 2, color:'#facc15' });
  if (Math.random() < (enemy.isBoss ? 0.8 : 0.4))
    G.pickups.push({ type:'energy', x:enemy.x, y:enemy.y, radius:8, value:20, color:'#22d3ee' });

  if (enemy.isBoss) {
    G.bossAlive = false;
    G.boss      = null;
  } else {
    const idx = G.enemies.indexOf(enemy);
    if (idx >= 0) G.enemies.splice(idx, 1);
  }
}

// ── Game over ─────────────────────────────────────────────────────────────────
function triggerGameOver() {
  if (G.over) return;
  G.over = true;
  playSfx('gameover');
  const save = getSaveData();
  recordRun(G.time, G.kills);
  setSaveGold(G.gold);
  persistSave();
  setTimeout(showGameOver, 200);
}

// ── Visual helpers ────────────────────────────────────────────────────────────
export function spawnFloater(x, y, text, color) {
  G.floaters.push({ x, y, text, color, life:0.9, maxLife:0.9 });
}

export function spawnParticles(x, y, color) {
  for (let i = 0; i < 14; i++) {
    const a  = Math.random() * Math.PI * 2;
    const sp = 80 + Math.random() * 80;
    G.particles.push({ x, y, vx:Math.cos(a)*sp, vy:Math.sin(a)*sp, color, life:0.5+Math.random()*0.3, maxLife:0.8 });
  }
}
