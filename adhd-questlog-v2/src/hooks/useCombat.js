// ============================================================
// useCombat — Combat state: ticks, buffs, monster HP, offline gains
// ============================================================

import { useState, useEffect, useRef, useCallback } from 'react';
import { MONSTERS, getNextMonster, getMonsterById } from '../data/monsters';
import {
  getPlayerStats, rollAttack, applyArmor,
  checkPhaseTransition, calculateOfflineGains,
  rollMonsterRewards, getFocusSessionMultiplier,
  getMomentumMultiplier, TICK_MS,
} from '../engine/combatEngine';
import { uid } from '../utils/rewards';
import { fetchCombatState, upsertCombatState } from '../lib/db';

const DEFAULT_EQUIPPED = {
  head: null, body: null, gloves: null,
  legs: null, boots: null, ring: null,
  ring2: null, necklace: null,
};

const INITIAL_COMBAT_STATE = {
  currentMonsterId: 'slime_distract',
  monsterHp: null,
  monstersKilled: 0,
  equipped: DEFAULT_EQUIPPED,
  inventory: [],
  pendingLoot: [],   // items waiting in chest
  activeBuffs: [],
  phaseEffects: [],
  lastActiveMs: Date.now(),
  momentumCount: 0,
  momentumWindowStart: Date.now(),
  lowEnergyMode: false,
};

export function useCombat({ user, userId = null, focusSessionActive = false, onGoldEarned, onXpEarned, onLootDrop, onKillToast, onOfflineToast }) {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem('dq_combat');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...INITIAL_COMBAT_STATE, ...parsed, activeBuffs: [], phaseEffects: [] };
      }
    } catch { /* ignore */ }
    return INITIAL_COMBAT_STATE;
  });

  const [floatingNumbers, setFloatingNumbers] = useState([]);
  const tickRef   = useRef(null);
  const stateRef  = useRef(state);
  const syncTimer = useRef(null);
  stateRef.current = state;

  // ── Load combat state from Supabase on login ────────────
  useEffect(() => {
    if (!userId) return;
    fetchCombatState(userId).then(remote => {
      if (remote) {
        setState(prev => ({ ...prev, ...remote, activeBuffs: [], phaseEffects: [] }));
      }
    });
  }, [userId]);

  // ── Persist to localStorage + debounced Supabase sync ──
  useEffect(() => {
    const { activeBuffs, phaseEffects, ...toSave } = state;
    toSave.lastActiveMs = Date.now();
    localStorage.setItem('dq_combat', JSON.stringify(toSave));

    if (userId) {
      clearTimeout(syncTimer.current);
      syncTimer.current = setTimeout(() => {
        upsertCombatState(userId, toSave);
      }, 30000); // sync every 30s, not 3s — reduces Supabase IO dramatically
    }
  }, [state, userId]);

  // ── Derive monster and player stats ───────────────────────
  const monster = getMonsterById(state.currentMonsterId);
  const currentHp = state.monsterHp ?? monster.max_hp;
  const playerStats = getPlayerStats(user.level, state.equipped);
  const momentumMult = getMomentumMultiplier(state.momentumCount);
  const focusMult = getFocusSessionMultiplier(focusSessionActive);

  // ── Offline gains on mount ─────────────────────────────────
  useEffect(() => {
    const saved = localStorage.getItem('dq_combat');
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      const last = parsed.lastActiveMs || Date.now();
      const gap = Date.now() - last;
      if (gap > 60_000) {
        const gains = calculateOfflineGains(playerStats, last, Date.now());
        if (gains.damage > 0) {
          applyDamage(gains.damage, false, true);
          if (gains.gold > 0 && onGoldEarned) onGoldEarned(gains.gold);
          if (onOfflineToast) onOfflineToast(gains);
        }
      }
    } catch { /* ignore */ }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Add a floating damage number ──────────────────────────
  const spawnFloat = useCallback((value, isCrit, isOffline = false) => {
    const id = uid();
    const x = 30 + Math.random() * 40; // % position
    setFloatingNumbers(prev => [...prev, { id, value, isCrit, isOffline, x }]);
    setTimeout(() => {
      setFloatingNumbers(prev => prev.filter(f => f.id !== id));
    }, 1400);
  }, []);

  // ── Core damage application ────────────────────────────────
  const applyDamage = useCallback((rawDmg, isCrit = false, isOffline = false) => {
    setState(prev => {
      const mon = getMonsterById(prev.currentMonsterId);
      const prevHp = prev.monsterHp ?? mon.max_hp;
      const afterArmor = applyArmor(rawDmg, mon.armor);
      const newHp = Math.max(0, prevHp - afterArmor);

      // Phase transitions
      const phase = checkPhaseTransition(mon, newHp, prevHp);
      let newPhaseEffects = [...(prev.phaseEffects || [])];
      if (phase) {
        newPhaseEffects.push({ id: uid(), ...phase, expiresAt: Infinity });
      }

      if (newHp <= 0) {
        // Monster killed — fire rewards, loot goes to chest
        const rewards = rollMonsterRewards(mon);
        if (onGoldEarned) onGoldEarned(rewards.gold);
        if (onXpEarned)   onXpEarned(rewards.xp);
        if (onKillToast)  onKillToast({ ...rewards, monsterName: mon.name, isBoss: mon.isBoss });

        // Add loot to pending chest instead of directly to inventory
        const newPendingLoot = rewards.loot.length > 0
          ? [...(prev.pendingLoot || []), ...rewards.loot.map(id => ({
              id,
              from: mon.name,
              fromBoss: mon.isBoss || false,
              timestamp: Date.now(),
            }))]
          : (prev.pendingLoot || []);

        const nextMon = getNextMonster(prev.currentMonsterId);
        return {
          ...prev,
          pendingLoot: newPendingLoot,
          currentMonsterId: nextMon.id,
          monsterHp: nextMon.max_hp,
          monstersKilled: prev.monstersKilled + 1,
          phaseEffects: [],
        };
      }

      return { ...prev, monsterHp: newHp, phaseEffects: newPhaseEffects };
    });

    if (!isOffline) spawnFloat(rawDmg, isCrit);
  }, [onGoldEarned, onXpEarned, onLootDrop, spawnFloat]);

  // ── Passive tick ──────────────────────────────────────────
  useEffect(() => {
    tickRef.current = setInterval(() => {
      const s = stateRef.current;
      const mon = getMonsterById(s.currentMonsterId);
      const ps  = getPlayerStats(user.level, s.equipped);
      const allBuffs = [...(s.activeBuffs || []), ...(s.phaseEffects || [])];

      // Clean expired buffs
      const now = Date.now();
      const freshBuffs = (s.activeBuffs || []).filter(b => b.expiresAt > now);
      if (freshBuffs.length !== (s.activeBuffs || []).length) {
        setState(prev => ({ ...prev, activeBuffs: freshBuffs }));
      }

      const { damage, isCrit } = rollAttack(ps, allBuffs);
      const boosted = Math.round(damage * momentumMult * focusMult);

      // Monster regen
      if (mon.regen > 0) {
        setState(prev => {
          const currentMonHp = prev.monsterHp ?? mon.max_hp;
          const regenHp = Math.min(mon.max_hp, currentMonHp + mon.regen);
          return { ...prev, monsterHp: regenHp };
        });
      }

      applyDamage(boosted, isCrit);
    }, TICK_MS);

    return () => clearInterval(tickRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.level, state.equipped, momentumMult, focusMult]);

  // ── Public: task completed burst ─────────────────────────
  const onTaskComplete = useCallback(() => {
    const ps = getPlayerStats(user.level, state.equipped);
    const burstDmg = Math.round(ps.attack * 5 * momentumMult);
    const isCrit = Math.random() < Math.min(0.8, ps.critChance + 0.2);
    const finalDmg = isCrit ? Math.round(burstDmg * ps.critDamage) : burstDmg;

    const buff = {
      id: uid(),
      type: 'attack_mult',
      label: 'Task Focus!',
      value: 1.5,
      expiresAt: Date.now() + 10_000,
      icon: '⚡',
    };

    setState(prev => ({
      ...prev,
      activeBuffs: [...(prev.activeBuffs || []).filter(b => b.id !== 'focus_boost'), buff],
      momentumCount: prev.momentumCount + 1,
    }));

    applyDamage(finalDmg, isCrit);
  }, [user.level, state.equipped, momentumMult, applyDamage]);

  // ── Public: subtask completed burst ──────────────────────
  const onSubtaskComplete = useCallback(() => {
    const ps = getPlayerStats(user.level, state.equipped);
    const dmg = Math.round(ps.attack * 1.2);
    applyDamage(dmg, false);
  }, [user.level, state.equipped, applyDamage]);

  // ── Equip an item ─────────────────────────────────────────
  const equipItem = useCallback((itemId, slot) => {
    setState(prev => {
      // Move previously-equipped item to inventory
      const prevItemInSlot = prev.equipped[slot];
      const newInventory = prevItemInSlot
        ? [...prev.inventory, prevItemInSlot]
        : [...prev.inventory];
      const withoutNew = newInventory.filter((id, idx) =>
        !(id === itemId && idx === newInventory.lastIndexOf(itemId))
      );
      return {
        ...prev,
        equipped: { ...prev.equipped, [slot]: itemId },
        inventory: withoutNew,
      };
    });
  }, []);

  // ── Unequip an item ───────────────────────────────────────
  const unequipItem = useCallback((slot) => {
    setState(prev => {
      const itemId = prev.equipped[slot];
      if (!itemId) return prev;
      return {
        ...prev,
        equipped: { ...prev.equipped, [slot]: null },
        inventory: [...prev.inventory, itemId],
      };
    });
  }, []);

  // ── Add item to inventory (from loot/shop) ────────────────
  const addToInventory = useCallback((itemId) => {
    setState(prev => ({ ...prev, inventory: [...prev.inventory, itemId] }));
  }, []);

  // ── Claim chest — move all pendingLoot to inventory ───────
  const claimChest = useCallback(() => {
    setState(prev => {
      if (!prev.pendingLoot?.length) return prev;
      const newItems = prev.pendingLoot.map(l => l.id);
      return {
        ...prev,
        inventory: [...prev.inventory, ...newItems],
        pendingLoot: [],
      };
    });
  }, []);

  // ── Buy item from shop ────────────────────────────────────
  const buyItem = useCallback((itemId, price, onDeductGold) => {
    const canAfford = onDeductGold(price);
    if (canAfford) {
      addToInventory(itemId);
      return true;
    }
    return false;
  }, [addToInventory]);

  // ── Sell an item from inventory ──────────────────────────
  const sellItem = useCallback((itemId, inventoryIndex, onGoldEarned) => {
    setState(prev => {
      const newInventory = [...prev.inventory];
      newInventory.splice(inventoryIndex, 1);
      return { ...prev, inventory: newInventory };
    });
    if (onGoldEarned) onGoldEarned();
  }, []);

  // ── Sell an equipped item (unequip + sell) ───────────────
  const sellEquipped = useCallback((slot, onGoldEarned) => {
    setState(prev => {
      if (!prev.equipped[slot]) return prev;
      return { ...prev, equipped: { ...prev.equipped, [slot]: null } };
    });
    if (onGoldEarned) onGoldEarned();
  }, []);

  // ── Dev: instant kill current monster ────────────────────
  const instantKill = useCallback(() => {
    setState(prev => {
      const mon = getMonsterById(prev.currentMonsterId);
      const rewards = rollMonsterRewards(mon);
      if (onGoldEarned) onGoldEarned(rewards.gold);
      if (onXpEarned)   onXpEarned(rewards.xp);
      if (onKillToast)  onKillToast({ ...rewards, monsterName: mon.name, isBoss: mon.isBoss });
      const newPendingLoot = rewards.loot.length > 0
        ? [...(prev.pendingLoot || []), ...rewards.loot.map(id => ({
            id, from: mon.name, fromBoss: mon.isBoss || false, timestamp: Date.now(),
          }))]
        : (prev.pendingLoot || []);
      const nextMon = getNextMonster(prev.currentMonsterId);
      return { ...prev, currentMonsterId: nextMon.id, monsterHp: nextMon.max_hp, monstersKilled: prev.monstersKilled + 1, phaseEffects: [], pendingLoot: newPendingLoot };
    });
  }, [onGoldEarned, onXpEarned, onKillToast]);

  // ── Dismiss low-energy toggle ─────────────────────────────
  const toggleLowEnergy = useCallback(() => {
    setState(prev => ({ ...prev, lowEnergyMode: !prev.lowEnergyMode }));
  }, []);

  return {
    monster,
    currentHp,
    monsterMaxHp: monster.max_hp,
    playerStats,
    equipped: state.equipped,
    inventory: state.inventory,
    pendingLoot: state.pendingLoot || [],
    activeBuffs: state.activeBuffs || [],
    monstersKilled: state.monstersKilled,
    floatingNumbers,
    lowEnergyMode: state.lowEnergyMode,
    momentumCount: state.momentumCount,
    momentumMult,
    onTaskComplete,
    onSubtaskComplete,
    equipItem,
    unequipItem,
    addToInventory,
    claimChest,
    buyItem,
    sellItem,
    sellEquipped,
    instantKill,
    toggleLowEnergy,
  };
}
