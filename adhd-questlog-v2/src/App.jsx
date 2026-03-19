// ============================================================
// APP — Root: routes views, connects task + combat + toast state
// ============================================================

import React, { useState, useCallback } from 'react';
import Navigation from './components/Navigation';
import CombatStrip from './components/CombatStrip';
import { ToastStack, useToastLog } from './components/CombatToasts';
import DevPanel from './components/DevPanel';
import Dashboard from './views/Dashboard';
import FocusMode from './views/FocusMode';
import RewardsScreen from './views/RewardsScreen';
import TalentsScreen from './views/TalentsScreen';
import InventoryScreen from './views/InventoryScreen';
import ShopScreen from './views/ShopScreen';
import RewardEffects from './components/RewardEffects';
import { useGameState, useFocusTimer } from './hooks/useGameState';
import { useCombat } from './hooks/useCombat';
import './styles/globals.css';

export default function App() {
  const [view, setView] = useState('dashboard');
  const [newLoot, setNewLoot] = useState(false);

  // ── Toast / combat log ────────────────────────────────────
  const { toasts, log, addToast, dismissToast } = useToastLog();

  // ── Task / game state ─────────────────────────────────────
  const {
    user, tasks, history,
    rewardEffects, levelUpData,
    completeTask, toggleSubtask, addTask, snoozeTask, deleteTask,
    unlockTalent, completeFocusSession, applyGoldReward, applyXpReward,
  } = useGameState();

  // ── Focus timer ───────────────────────────────────────────
  const handleFocusEnd = useCallback((minutes, completed) => {
    if (minutes > 0) completeFocusSession(minutes, completed);
  }, [completeFocusSession]);

  const focusTimer = useFocusTimer(handleFocusEnd);

  // ── Toast callbacks for combat ────────────────────────────
  const handleKillToast = useCallback((reward) => {
    addToast({
      type: reward.isBoss ? 'boss' : 'kill',
      icon: reward.isBoss ? '👑' : '☠',
      title: `${reward.monsterName} defeated!`,
      sub: `+${reward.gold} gold · +${reward.xp} XP`,
      loot: reward.loot,
      duration: reward.loot?.length > 0 ? 5000 : 3000,
    });
    if (reward.loot?.length > 0) setNewLoot(true);
  }, [addToast]);

  const handleOfflineToast = useCallback((gains) => {
    addToast({
      type: 'offline',
      icon: '🌙',
      title: `Welcome back! Hero fought for ${gains.hours}h`,
      sub: `${gains.damage.toLocaleString()} damage dealt · +${gains.gold} gold`,
      duration: 6000,
    });
  }, [addToast]);

  // ── Combat state ──────────────────────────────────────────
  const combat = useCombat({
    user,
    focusSessionActive: !!focusTimer.session,
    onGoldEarned:    (gold) => applyGoldReward(gold),
    onXpEarned:      (xp)   => applyXpReward(xp),
    onLootDrop:      (loot) => loot.forEach(id => combat.addToInventory(id)),
    onKillToast:     handleKillToast,
    onOfflineToast:  handleOfflineToast,
  });

  // ── Task completion → combat burst ────────────────────────
  const handleCompleteTask = useCallback((taskId) => {
    completeTask(taskId);
    combat.onTaskComplete();
    addToast({
      type: 'default',
      icon: '⚡',
      title: 'Task complete! Power burst!',
      sub: '+10s attack speed boost',
      duration: 2500,
    });
  }, [completeTask, combat, addToast]);

  const handleToggleSubtask = useCallback((taskId, subtaskId) => {
    toggleSubtask(taskId, subtaskId);
    combat.onSubtaskComplete();
  }, [toggleSubtask, combat]);

  // ── Shop buy / refresh ────────────────────────────────────
  const handleShopBuy = useCallback((itemId, price) => {
    if (user.gold < price) return false;
    applyGoldReward(-price);
    combat.addToInventory(itemId);
    return true;
  }, [user.gold, applyGoldReward, combat]);

  const handleShopRefresh = useCallback((cost) => {
    applyGoldReward(-cost);
  }, [applyGoldReward]);

  // ── Dev cheats ────────────────────────────────────────────
  const handleDevGold = useCallback((amount) => {
    applyGoldReward(amount);
    addToast({ type: 'default', icon: '🛠', title: `DEV: +${amount} gold`, duration: 2000 });
  }, [applyGoldReward, addToast]);

  const handleDevInstantKill = useCallback(() => {
    combat.instantKill();
  }, [combat]);

  function startFocus(task) {
    focusTimer.start(task, 25);
    setView('focus');
  }

  function handleNavigate(v) {
    if (v === 'inventory') setNewLoot(false);
    setView(v);
  }

  return (
    <div className="app-layout">
      <Navigation
        user={user}
        activeView={view}
        onNavigate={handleNavigate}
        pendingCount={tasks.filter(t => t.status === 'pending').length}
        newLoot={newLoot}
      />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
        {/* Persistent combat strip — always visible */}
        <CombatStrip
          monster={combat.monster}
          currentHp={combat.currentHp}
          playerStats={combat.playerStats}
          activeBuffs={combat.activeBuffs}
          floatingNumbers={combat.floatingNumbers}
          momentumMult={combat.momentumMult}
          lowEnergyMode={combat.lowEnergyMode}
          monstersKilled={combat.monstersKilled}
          onToggleLowEnergy={combat.toggleLowEnergy}
          combatLog={log}
        />

        <main className="main-content">
          {view === 'dashboard' && (
            <Dashboard
              user={user}
              tasks={tasks}
              onComplete={handleCompleteTask}
              onToggleSubtask={handleToggleSubtask}
              onSnooze={snoozeTask}
              onDelete={deleteTask}
              onAddTask={addTask}
              onStartFocus={startFocus}
            />
          )}
          {view === 'focus' && (
            <FocusMode
              session={focusTimer.session}
              onStart={focusTimer.start}
              onPause={focusTimer.pause}
              onResume={focusTimer.resume}
              onStop={focusTimer.stop}
              formatTime={focusTimer.formatTime}
              tasks={tasks.filter(t => t.status === 'pending')}
            />
          )}
          {view === 'inventory' && (
            <InventoryScreen
              combat={combat}
              userLevel={user.level}
              onGoldEarned={(amount) => applyGoldReward(amount)}
            />
          )}
          {view === 'shop' && (
            <ShopScreen
              userGold={user.gold}
              onBuy={handleShopBuy}
              onRefreshSpend={handleShopRefresh}
            />
          )}
          {view === 'rewards' && (
            <RewardsScreen user={user} history={history} />
          )}
          {view === 'talents' && (
            <TalentsScreen user={user} onUnlock={unlockTalent} />
          )}
        </main>
      </div>

      {/* Non-blocking overlays */}
      <RewardEffects effects={rewardEffects} levelUpData={levelUpData} />
      <ToastStack toasts={toasts} onDismiss={dismissToast} />
      <DevPanel onAddGold={handleDevGold} onInstantKill={handleDevInstantKill} />
    </div>
  );
}
