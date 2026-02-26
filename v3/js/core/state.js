// ═══════════════════════════════════════ CORE: STATE ════════════════════════
// Single shared mutable state object consumed by all systems.
// Systems import { G } and read/write it directly.

import { CHARACTERS }    from '../data/characters.js';
import { ENEMY_TYPES, BOSS_TYPES } from '../data/enemies.js';
import { getSaveData }   from './save.js';

/** Live game-run data. Null between runs. */
export let G = null;

/** Transient engine state (input, shake, screen). */
export const Engine = {
  currentScreen: 'title',
  keys: {},
  joyVec: { x:0, y:0 },
  shake: { mag:0, timer:0 },
  lastTimestamp: 0,
  selectedCharId: 'squirrel',
  weaponTimer: 0,
  isTouchDevice: matchMedia('(pointer:coarse)').matches,
};

/**
 * Create a fresh run game object and assign it to G.
 * @param {string} charId
 */
export function newRun(charId) {
  const char    = CHARACTERS.find(c => c.id === charId) || CHARACTERS[0];
  const save    = getSaveData();
  const town    = save.town || {};

  const maxHpBonus    = (town.fortifiedDen  || 0) * 20;
  const speedMul      = 1 + (town.nightStride   || 0) * 0.08;
  const dmgMul        = 1 + (town.cursedFangs   || 0) * 0.12;
  const armorBonus    = (town.barkPlating    || 0) * 0.06;
  const regenBonus    = (town.darkSap        || 0) * 1;
  const startEnergy   = (town.energyCrystal  || 0) * 15;

  const player = {
    id:          char.id,
    emoji:       char.emoji,
    x: 0, y: 0,
    radius:      18,
    hp:          char.baseHP + maxHpBonus,
    maxHp:       char.baseHP + maxHpBonus,
    baseHP:      char.baseHP,
    baseSpeed:   char.speed * speedMul,
    dmgMul,
    armor:       armorBonus,
    regen:       regenBonus,
    xp:          0,
    level:       1,
    xpToNext:    20,
    energy:      startEnergy,
    energyMax:   100,
    weapon:      JSON.parse(JSON.stringify(char.weapon)),
    super:       char.super,
    invulnTimer: 0,
    // per-run upgrade bonuses
    cooldownBonus:   0,
    rangeBonus:      0,
    pierceBonus:     0,
    projectileBonus: 0,
    pickupBonus:     0,
  };

  G = {
    player,
    enemies:      [],
    projectiles:  [],
    pickups:      [],
    floaters:     [],
    particles:    [],
    spawnTimer:   0,
    wave:         1,
    waveTimer:    0,
    boss:         null,
    bossAlive:    false,
    bossTimer:    0,
    time:         0,
    kills:        0,
    gold:         save.gold || 0,
    runGold:      0,
    killStreak:   0,
    killStreakTimer: 0,
    paused:       false,
    over:         false,
    needLevelUp:  false,
    cameraX:      0,
    cameraY:      0,
  };

  Engine.weaponTimer = 0;
  Engine.shake.mag   = 0;
  Engine.shake.timer = 0;
}
