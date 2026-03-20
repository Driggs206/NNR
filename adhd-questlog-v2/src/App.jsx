// ============================================================
// APP — Auth-gated root. Supabase optional — app works without it.
// ============================================================

import React, { useState, useCallback } from 'react';
import { useAuth }        from './hooks/useAuth';
import { useGameState, useFocusTimer } from './hooks/useGameState';
import { useCombat }      from './hooks/useCombat';
import { useSocial }      from './hooks/useSocial';
import { useToastLog, ToastStack } from './components/CombatToasts';
import { startFocusSession, endFocusSession } from './lib/db';

import AuthScreen       from './components/AuthScreen';
import Navigation       from './components/Navigation';
import CombatStrip      from './components/CombatStrip';
import DevPanel         from './components/DevPanel';
import RewardEffects    from './components/RewardEffects';

import Dashboard        from './views/Dashboard';
import FocusMode        from './views/FocusMode';
import RewardsScreen    from './views/RewardsScreen';
import TalentsScreen    from './views/TalentsScreen';
import InventoryScreen  from './views/InventoryScreen';
import ShopScreen       from './views/ShopScreen';
import SocialScreen     from './views/SocialScreen';
import MultiplayerQuestsScreen from './views/MultiplayerQuestsScreen';
import SettingsScreen   from './views/SettingsScreen';

import './styles/globals.css';

export default function App() {
  const [view, setView]       = useState('dashboard');
  const [newLoot, setNewLoot] = useState(false);

  // ── Auth ──────────────────────────────────────────────────
  const { session, userId, isLoggedIn, loading: authLoading,
          error: authError, signUp, signIn, signOut,
          resetPassword, updatePassword, isRecovery, isSupabaseReady } = useAuth();

  // ── Toast / combat log ────────────────────────────────────
  const { toasts, log, addToast, dismissToast } = useToastLog();

  // ── Game state (passes userId for Supabase sync) ──────────
  const {
    user, tasks, history, rewardEffects, levelUpData, syncStatus,
    completeTask, toggleSubtask, addTask, snoozeTask, deleteTask,
    unlockTalent, completeFocusSession, applyGoldReward, applyXpReward, setAvatarId, updateUserProfile,
  } = useGameState(userId);

  // ── Focus timer ───────────────────────────────────────────
  const handleFocusEnd = useCallback(async (minutes, completed, sessionId, taskTitle) => {
    if (minutes > 0) {
      const { xp } = completeFocusSession(minutes, completed);
      // Sync session end to Supabase
      if (userId && sessionId) {
        await endFocusSession(sessionId, minutes, completed, xp);
      }
    }
  }, [completeFocusSession, userId]);

  const focusTimer = useFocusTimer(handleFocusEnd);

  // ── Focus boost received ──────────────────────────────────
  const handleBoostReceived = useCallback((boosterName) => {
    addToast({
      type: 'boss',
      icon: '💙',
      title: `${boosterName} boosted your focus!`,
      sub: '+15% XP for this session ⚡',
      duration: 8000,
    });
  }, [addToast]);

  const handleFriendStartedFocus = useCallback((session) => {
    const name = session.profiles?.display_name || 'A friend';
    // Use a long duration (60s) so it stays visible and is clearly actionable
    addToast({
      type: 'default',
      icon: '🔮',
      title: `${name} started focusing!`,
      sub: session.task_title
        ? `"${session.task_title}" — go to Social to boost 💙`
        : 'Go to Social to send a boost 💙',
      duration: 60_000, // stays for 60s — tap to dismiss
    });
  }, [addToast]);

  // ── Social ────────────────────────────────────────────────
  const social = useSocial({
    userId,
    currentSession: focusTimer.session,
    onBoostReceived: handleBoostReceived,
    onFriendStartedFocus: handleFriendStartedFocus,
  });
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
      type: 'offline', icon: '🌙',
      title: `Welcome back! Hero fought for ${gains.hours}h`,
      sub: `${gains.damage.toLocaleString()} damage · +${gains.gold} gold`,
      duration: 6000,
    });
  }, [addToast]);

  const combat = useCombat({
    user, userId,
    focusSessionActive: !!focusTimer.session,
    onGoldEarned:   (gold) => applyGoldReward(gold),
    onXpEarned:     (xp)   => applyXpReward(xp),
    onLootDrop:     (loot) => loot.forEach(id => combat.addToInventory(id)),
    onKillToast:    handleKillToast,
    onOfflineToast: handleOfflineToast,
  });

  // ── Task + combat wiring ──────────────────────────────────
  const handleCompleteTask = useCallback((taskId) => {
    completeTask(taskId);
    combat.onTaskComplete();
    addToast({ type: 'default', icon: '⚡', title: 'Task complete! Power burst!', sub: '+10s attack boost', duration: 2500 });
  }, [completeTask, combat, addToast]);

  const handleToggleSubtask = useCallback((taskId, subtaskId) => {
    toggleSubtask(taskId, subtaskId);
    combat.onSubtaskComplete();
  }, [toggleSubtask, combat]);

  // ── Shop ──────────────────────────────────────────────────
  const handleShopBuy = useCallback((itemId, price) => {
    if (user.gold < price) return false;
    applyGoldReward(-price);
    combat.addToInventory(itemId);
    return true;
  }, [user.gold, applyGoldReward, combat]);

  // ── Focus start — also creates Supabase session row ───────
  async function startFocus(task) {
    const tempId = crypto.randomUUID();
    focusTimer.start({ ...task, sessionDbId: tempId }, 25);
    if (userId) await startFocusSession(userId, task.title, tempId);
    setView('focus');
  }

  const handleFocusStart = useCallback(async (task, minutes) => {
    const tempId = crypto.randomUUID();
    focusTimer.start({ ...task, sessionDbId: tempId }, minutes);
    if (userId) await startFocusSession(userId, task.title, tempId);
  }, [focusTimer, userId]);

  function uid() { return `${Date.now()}-${Math.random().toString(36).slice(2,7)}`; }

  function handleNavigate(v) {
    if (v === 'inventory') setNewLoot(false);
    if (v === 'social') social.clearWallBadge();
    setView(v);
  }

  // ── Auth loading splash ───────────────────────────────────
  if (authLoading) {
    return (
      <div style={{
        minHeight: '100dvh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', background: 'var(--bg-base)',
        fontFamily: 'var(--font-display)', color: 'var(--gold)',
        fontSize: '1.1rem', letterSpacing: '0.1em',
      }}>
        ⚔ Loading...
      </div>
    );
  }

  // ── Auth gate — only if Supabase is configured ────────────
  if (isSupabaseReady && (!isLoggedIn || isRecovery)) {
    return (
      <>
        <link rel="stylesheet" href="" />
        <div id="auth-root">
          <AuthScreen
            onSignIn={signIn}
            onSignUp={signUp}
            onReset={resetPassword}
            onUpdatePassword={updatePassword}
            isRecovery={isRecovery}
            error={authError}
            loading={authLoading}
          />
        </div>
        <style>{`
          body { background: #0D0C1D; }
          * { box-sizing: border-box; margin: 0; padding: 0; }
        `}</style>
      </>
    );
  }

  // ── Main app ──────────────────────────────────────────────
  return (
    <div className="app-layout">
      <Navigation
        user={user}
        activeView={view}
        onNavigate={handleNavigate}
        pendingCount={tasks.filter(t => t.status === 'pending').length}
        newLoot={newLoot}
        onSignOut={isSupabaseReady ? signOut : null}
        syncStatus={syncStatus}
        friendRequests={social.requests.length}
        wallBadge={social.newWallPosts}
      />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
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
              user={user} tasks={tasks}
              onComplete={handleCompleteTask}
              onToggleSubtask={handleToggleSubtask}
              onSnooze={snoozeTask} onDelete={deleteTask}
              onAddTask={addTask} onStartFocus={startFocus}
            />
          )}
          {view === 'focus' && (
            <FocusMode
              session={focusTimer.session}
              onStart={handleFocusStart} onPause={focusTimer.pause}
              onResume={focusTimer.resume} onStop={focusTimer.stop}
              formatTime={focusTimer.formatTime}
              tasks={tasks.filter(t => t.status === 'pending')}
            />
          )}
          {view === 'social' && (
            <SocialScreen
              social={social}
              userId={userId}
              isSupabaseReady={isSupabaseReady}
              onAvatarChange={setAvatarId}
            />
          )}
          {view === 'inventory' && (
            <InventoryScreen
              combat={combat} userLevel={user.level}
              onGoldEarned={(amount) => applyGoldReward(amount)}
            />
          )}
          {view === 'shop' && (
            <ShopScreen
              userGold={user.gold} onBuy={handleShopBuy}
              onRefreshSpend={(cost) => applyGoldReward(-cost)}
            />
          )}
          {view === 'mpquests' && (
            <MultiplayerQuestsScreen
              userId={userId}
              onXpEarned={(xp) => applyXpReward(xp)}
              onGoldEarned={(gold) => applyGoldReward(gold)}
              onBadgeEarned={(badgeId) => {
                addToast({ type: 'default', icon: '🏅', title: `Badge unlocked: ${badgeId}!`, duration: 4000 });
              }}
              addToast={addToast}
            />
          )}
          {view === 'settings' && (
            <SettingsScreen
              user={user}
              userId={userId}
              earnedBadgeIds={[]}
              onAvatarChange={setAvatarId}
              onDisplayNameChange={(name) => updateUserProfile({ displayName: name })}
              onSignOut={isSupabaseReady ? signOut : null}
              isSupabaseConnected={isSupabaseReady}
            />
          )}
          {view === 'rewards'  && <RewardsScreen user={user} history={history} userId={userId} onAvatarChange={setAvatarId} />}
          {view === 'talents'  && <TalentsScreen user={user} onUnlock={unlockTalent} />}
        </main>
      </div>

      <RewardEffects effects={rewardEffects} levelUpData={levelUpData} />
      <ToastStack toasts={toasts} onDismiss={dismissToast} />
      <DevPanel
        onAddGold={(g) => { applyGoldReward(g); addToast({ type:'default', icon:'🛠', title:`DEV: +${g} gold`, duration:2000 }); }}
        onInstantKill={combat.instantKill}
      />
    </div>
  );
}
