// ═══════════════════════════════════════ SYSTEMS: UPDATE (main tick) ════════

import { G, Engine }         from '../core/state.js';
import { movePlayer }         from './movement.js';
import { spawnEnemy, spawnBoss } from './spawn.js';
import { handleAttacks }      from './attack.js';
import { projectileHitEnemy, damagePlayer } from './damage.js';
import { updatePickups }      from './pickups.js';
import { showWaveBadge, updateHudAll, updateBossBar } from '../rendering/drawHud.js';
import { showLevelUpOverlay } from '../ui/levelUp.js';

const SPAWN_INTERVAL_MIN = 0.25;
const SPAWN_INTERVAL_BASE = 1.2;
const BOSS_INTERVAL = 90;

export function updateGame(dt) {
  G.time            += dt;
  G.waveTimer       += dt;
  G.bossTimer       += dt;
  G.spawnTimer      += dt;
  G.killStreakTimer  += dt;
  if (G.killStreakTimer > 4) G.killStreak = 0;

  // wave
  const newWave = Math.floor(G.time / 30) + 1;
  if (newWave > G.wave) {
    G.wave = newWave;
    showWaveBadge(`Wave ${G.wave}`);
  }

  // spawn
  const spawnInterval = Math.max(SPAWN_INTERVAL_MIN, SPAWN_INTERVAL_BASE - G.time * 0.01);
  if (G.spawnTimer >= spawnInterval) { G.spawnTimer = 0; spawnEnemy(); }

  // boss
  if (!G.bossAlive && G.bossTimer >= BOSS_INTERVAL) { G.bossTimer = 0; spawnBoss(); }

  movePlayer(dt);

  // regen
  if (G.player.regen > 0)
    G.player.hp = Math.min(G.player.maxHp, G.player.hp + G.player.regen * dt);

  // invuln
  if (G.player.invulnTimer > 0) G.player.invulnTimer -= dt;

  handleAttacks(dt);
  updateProjectiles(dt);
  updateEnemies(dt);
  updatePickups(dt);
  updateFx(dt);

  // camera
  G.cameraX = G.player.x;
  G.cameraY = G.player.y;

  // shake decay
  if (Engine.shake.timer > 0) {
    Engine.shake.timer -= dt;
    if (Engine.shake.timer <= 0) Engine.shake.mag = 0;
  }

  updateBossBar();
  updateHudAll();

  if (G.needLevelUp) {
    G.needLevelUp = false;
    G.paused = true;
    showLevelUpOverlay();
  }
}

// ── Projectile tick ───────────────────────────────────────────────────────────
function updateProjectiles(dt) {
  const victims = () => [...G.enemies, ...(G.boss && G.bossAlive ? [G.boss] : [])];

  for (let i = G.projectiles.length - 1; i >= 0; i--) {
    const pr = G.projectiles[i];
    pr.x += pr.vx * dt;
    pr.y += pr.vy * dt;
    pr.distTraveled += Math.hypot(pr.vx * dt, pr.vy * dt);

    if (pr.distTraveled > pr.range) { G.projectiles.splice(i, 1); continue; }

    for (const e of victims()) {
      if (pr.pierce <= 0) break;
      if (Math.hypot(e.x - pr.x, e.y - pr.y) <= e.radius + pr.radius) {
        projectileHitEnemy(pr, e);
      }
    }
    if (pr.pierce <= 0) { G.projectiles.splice(i, 1); }
  }
}

// ── Enemy tick ────────────────────────────────────────────────────────────────
function updateEnemies(dt) {
  const p = G.player;
  const all = [...G.enemies, ...(G.boss && G.bossAlive ? [G.boss] : [])];

  for (const e of all) {
    // move toward player
    const dx   = p.x - e.x;
    const dy   = p.y - e.y;
    const dist = Math.hypot(dx, dy) || 1;
    e.x += (dx / dist) * e.speed * dt;
    e.y += (dy / dist) * e.speed * dt;

    // poison tick
    if (e.poisoned && e.poisonTime > 0) {
      e.poisonTime -= dt;
      e.hp -= e.poisonDps * dt;
      if (e.hp <= 0) { projectileHitEnemy({ dmg:0, pierce:99, type:'', poisonDot:0 }, e); }
      if (e.poisonTime <= 0) e.poisoned = false;
    }

    // contact damage
    if (Math.hypot(e.x - p.x, e.y - p.y) <= e.radius + p.radius)
      damagePlayer(12);
  }

  // prune dead (removed via splice in onEnemyDeath)
}

// ── Floaters + particles ──────────────────────────────────────────────────────
function updateFx(dt) {
  for (let i = G.floaters.length - 1; i >= 0; i--) {
    const f = G.floaters[i];
    f.y    -= 20 * dt;
    f.life -= dt;
    if (f.life <= 0) G.floaters.splice(i, 1);
  }
  for (let i = G.particles.length - 1; i >= 0; i--) {
    const p = G.particles[i];
    p.x    += p.vx * dt;
    p.y    += p.vy * dt;
    p.life -= dt;
    if (p.life <= 0) G.particles.splice(i, 1);
  }
}
