// ============================================================
// useGameState — Tasks, user stats, rewards
// Strategy: localStorage first (instant), Supabase async (sync)
// On login: load from Supabase and override localStorage
// ============================================================

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  INITIAL_USER,
  SAMPLE_TASKS,
  COMPLETED_TASKS_HISTORY,
} from '../store/initialState';
import {
  calculateTaskReward,
  calculateSubtaskReward,
  calculateFocusReward,
  processLevelUp,
  uid,
} from '../utils/rewards';
import {
  fetchProfile, upsertProfile, dbProfileToLocal,
  fetchTasks, insertTask, updateTaskStatus, updateSubtask,
  deleteTask as dbDeleteTask, snoozeTask as dbSnoozeTask,
  fetchHistory, insertHistory,
} from '../lib/db';

// ── useGameState ───────────────────────────────────────────

export function useGameState(userId = null) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('dq_user');
      return saved ? JSON.parse(saved) : INITIAL_USER;
    } catch { return INITIAL_USER; }
  });

  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('dq_tasks');
      return saved ? JSON.parse(saved) : SAMPLE_TASKS;
    } catch { return SAMPLE_TASKS; }
  });

  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('dq_history');
      return saved ? JSON.parse(saved) : COMPLETED_TASKS_HISTORY;
    } catch { return COMPLETED_TASKS_HISTORY; }
  });

  const [rewardEffects, setRewardEffects]   = useState([]);
  const [levelUpData, setLevelUpData]       = useState(null);
  const [syncStatus, setSyncStatus]         = useState('idle'); // 'idle' | 'syncing' | 'synced' | 'error'

  // Debounce ref for profile sync — don't hammer Supabase on every XP tick
  const profileSyncTimer = useRef(null);

  // ── Load from Supabase on login ────────────────────────
  useEffect(() => {
    if (!userId) return;
    (async () => {
      setSyncStatus('syncing');
      try {
        const [profile, dbTasks, dbHistory] = await Promise.all([
          fetchProfile(userId),
          fetchTasks(userId),
          fetchHistory(userId),
        ]);

        if (profile) {
          const local = dbProfileToLocal(profile);
          setUser(local);
          localStorage.setItem('dq_user', JSON.stringify(local));
        }

        if (dbTasks) {
          // If Supabase has no tasks yet and we have sample tasks, seed them
          if (dbTasks.length === 0) {
            const currentTasks = JSON.parse(localStorage.getItem('dq_tasks') || '[]');
            if (currentTasks.length > 0) {
              setTasks(currentTasks);
              // Don't auto-seed sample tasks to DB — let user add their own
            }
          } else {
            setTasks(dbTasks);
            localStorage.setItem('dq_tasks', JSON.stringify(dbTasks));
          }
        }

        if (dbHistory && dbHistory.length > 0) {
          setHistory(dbHistory);
          localStorage.setItem('dq_history', JSON.stringify(dbHistory));
        }

        setSyncStatus('synced');
      } catch (err) {
        console.error('[useGameState] Supabase load failed:', err);
        setSyncStatus('error');
      }
    })();
  }, [userId]);

  // ── Persist to localStorage on change ─────────────────
  useEffect(() => {
    localStorage.setItem('dq_user', JSON.stringify(user));

    // Debounced Supabase profile sync
    if (userId) {
      clearTimeout(profileSyncTimer.current);
      profileSyncTimer.current = setTimeout(() => {
        upsertProfile(userId, user);
      }, 2000); // batch writes — only sync after 2s of no changes
    }
  }, [user, userId]);

  useEffect(() => {
    localStorage.setItem('dq_tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('dq_history', JSON.stringify(history));
  }, [history]);

  // ── Reward helpers ─────────────────────────────────────
  const showReward = useCallback((xp, gold) => {
    const id = uid();
    setRewardEffects(prev => [...prev, { id, xp, gold }]);
    setTimeout(() => setRewardEffects(prev => prev.filter(e => e.id !== id)), 2000);
  }, []);

  const applyReward = useCallback((xp, gold) => {
    setUser(prev => {
      const result = processLevelUp(prev.level, prev.xp, xp);
      if (result.leveledUp) {
        setLevelUpData({ level: result.level, talentPoints: result.talentPointsEarned });
        setTimeout(() => setLevelUpData(null), 4000);
      }
      return {
        ...prev,
        xp:           result.xp,
        xpToNext:     result.xpToNext,
        level:        result.level,
        gold:         Math.max(0, prev.gold + gold),
        talentPoints: prev.talentPoints + result.talentPointsEarned,
      };
    });
  }, []);

  // ── Complete a task ────────────────────────────────────
  const completeTask = useCallback((taskId) => {
    setTasks(prev => {
      const task = prev.find(t => t.id === taskId);
      if (!task) return prev;

      const { xp, gold } = calculateTaskReward(task, user.unlockedTalents);
      applyReward(xp, gold);
      showReward(xp, gold);

      const histEntry = {
        id: uid(), title: task.title,
        completedAt: new Date().toISOString(),
        xpEarned: xp, goldEarned: gold,
      };

      setHistory(h => [histEntry, ...h]);

      // Supabase sync
      if (userId) {
        updateTaskStatus(taskId, 'completed', new Date().toISOString());
        insertHistory(userId, histEntry);
      }

      return prev.filter(t => t.id !== taskId);
    });
  }, [user.unlockedTalents, applyReward, showReward, userId]);

  // ── Toggle subtask ─────────────────────────────────────
  const toggleSubtask = useCallback((taskId, subtaskId) => {
    setTasks(prev => prev.map(t => {
      if (t.id !== taskId) return t;
      const wasAlreadyDone = t.subtasks.find(s => s.id === subtaskId)?.done;
      if (!wasAlreadyDone) {
        const { xp, gold } = calculateSubtaskReward(user.unlockedTalents);
        applyReward(xp, gold);
        showReward(xp, gold);
      }
      const updated = {
        ...t,
        subtasks: t.subtasks.map(s =>
          s.id === subtaskId ? { ...s, done: !s.done } : s
        ),
      };

      // Supabase sync
      if (userId) {
        const newDone = !t.subtasks.find(s => s.id === subtaskId)?.done;
        updateSubtask(subtaskId, newDone);
      }

      return updated;
    }));
  }, [user.unlockedTalents, applyReward, showReward, userId]);

  // ── Add task ───────────────────────────────────────────
  const addTask = useCallback((taskData) => {
    const newTask = {
      id: uid(), status: 'pending', subtasks: [],
      createdAt: new Date().toISOString(),
      completedAt: null, isOverdue: false, tags: [], notes: '',
      ...taskData,
    };
    setTasks(prev => [newTask, ...prev]);

    // Supabase sync
    if (userId) insertTask(userId, newTask);

    return newTask;
  }, [userId]);

  // ── Snooze task ────────────────────────────────────────
  const snoozeTask = useCallback((taskId, hours = 2) => {
    const newDue = new Date(Date.now() + hours * 60 * 60 * 1000).toISOString();
    setTasks(prev => prev.map(t =>
      t.id === taskId ? { ...t, dueAt: newDue, isOverdue: false } : t
    ));
    if (userId) dbSnoozeTask(taskId, newDue);
  }, [userId]);

  // ── Delete task ────────────────────────────────────────
  const deleteTask = useCallback((taskId) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
    if (userId) dbDeleteTask(taskId);
  }, [userId]);

  // ── Unlock talent ──────────────────────────────────────
  const unlockTalent = useCallback((talentId, cost) => {
    setUser(prev => {
      if (prev.talentPoints < cost) return prev;
      return {
        ...prev,
        talentPoints:    prev.talentPoints - cost,
        unlockedTalents: [...prev.unlockedTalents, talentId],
      };
    });
  }, []);

  // ── Focus session reward ───────────────────────────────
  const completeFocusSession = useCallback((minutes, completed) => {
    const { xp, gold } = calculateFocusReward(minutes, completed, user.unlockedTalents);
    applyReward(xp, gold);
    showReward(xp, gold);
    return { xp, gold };
  }, [user.unlockedTalents, applyReward, showReward]);

  // ── Direct gold/XP modifiers (for shop/combat) ─────────
  const applyGoldReward = useCallback((amount) => {
    setUser(prev => ({ ...prev, gold: Math.max(0, prev.gold + amount) }));
  }, []);

  const applyXpReward = useCallback((xp) => {
    applyReward(xp, 0);
  }, [applyReward]);

  function setAvatarId(avatarId) {
    setUser(prev => ({ ...prev, avatarId }));
  }

  function updateUserProfile(updates) {
    setUser(prev => ({ ...prev, ...updates }));
  }

  return {
    user, tasks, history, rewardEffects, levelUpData, syncStatus,
    completeTask, toggleSubtask, addTask, snoozeTask, deleteTask,
    unlockTalent, completeFocusSession, showReward,
    applyGoldReward, applyXpReward, setAvatarId, updateUserProfile,
  };
}

// ── useFocusTimer ──────────────────────────────────────────

import { useRef as useRef2 } from 'react';

export function useFocusTimer(onComplete) {
  const [session, setSession] = useState(null);
  const intervalRef = useRef2(null);

  const start = useCallback((task, minutes = 25) => {
    const totalSeconds = minutes * 60;
    setSession({
      id: uid(),
      dbId: task.sessionDbId || null,  // Supabase UUID for real-time boost subscription
      taskId: task.id, taskTitle: task.title,
      totalSeconds, secondsLeft: totalSeconds,
      paused: false, minutes,
    });
  }, []);

  const pause  = useCallback(() => setSession(p => p ? { ...p, paused: true }  : null), []);
  const resume = useCallback(() => setSession(p => p ? { ...p, paused: false } : null), []);

  const stop = useCallback((completed = false) => {
    if (session && onComplete) {
      const elapsed = Math.round((session.totalSeconds - session.secondsLeft) / 60);
      onComplete(elapsed, completed, session.id, session.taskTitle);
    }
    setSession(null);
  }, [session, onComplete]);

  useEffect(() => {
    if (!session || session.paused) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setSession(prev => {
        if (!prev) return null;
        const next = prev.secondsLeft - 1;
        if (next <= 0) {
          clearInterval(intervalRef.current);
          if (onComplete) onComplete(prev.minutes, true, prev.id, prev.taskTitle);
          return null;
        }
        return { ...prev, secondsLeft: next };
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [session?.paused, session?.taskId, onComplete]);

  return {
    session, start, pause, resume, stop,
    formatTime: (s) => {
      const m = Math.floor(s / 60).toString().padStart(2, '0');
      const sec = (s % 60).toString().padStart(2, '0');
      return `${m}:${sec}`;
    },
  };
}
