// ============================================================
// CUSTOM HOOKS
// ============================================================

import { useState, useEffect, useRef, useCallback } from 'react';
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

// ─── useGameState ─────────────────────────────────────────────
// Central state for tasks, user stats, and reward events.
// Persists to localStorage for session continuity.
// ─────────────────────────────────────────────────────────────

export function useGameState() {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('ql_user');
      return saved ? JSON.parse(saved) : INITIAL_USER;
    } catch { return INITIAL_USER; }
  });

  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('ql_tasks');
      return saved ? JSON.parse(saved) : SAMPLE_TASKS;
    } catch { return SAMPLE_TASKS; }
  });

  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('ql_history');
      return saved ? JSON.parse(saved) : COMPLETED_TASKS_HISTORY;
    } catch { return COMPLETED_TASKS_HISTORY; }
  });

  const [rewardEffects, setRewardEffects] = useState([]);
  const [levelUpData, setLevelUpData] = useState(null);

  // Persist on change
  useEffect(() => {
    localStorage.setItem('ql_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('ql_tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('ql_history', JSON.stringify(history));
  }, [history]);

  // Show a floating reward effect
  const showReward = useCallback((xp, gold, x = null, y = null) => {
    const id = uid();
    setRewardEffects(prev => [...prev, { id, xp, gold, x, y }]);
    setTimeout(() => {
      setRewardEffects(prev => prev.filter(e => e.id !== id));
    }, 2000);
  }, []);

  // Apply XP and gold to user, handle level-ups
  const applyReward = useCallback((xp, gold) => {
    setUser(prev => {
      const result = processLevelUp(prev.level, prev.xp, xp);
      if (result.leveledUp) {
        setLevelUpData({ level: result.level, talentPoints: result.talentPointsEarned });
        setTimeout(() => setLevelUpData(null), 4000);
      }
      return {
        ...prev,
        xp: result.xp,
        xpToNext: result.xpToNext,
        level: result.level,
        gold: prev.gold + gold,
        talentPoints: prev.talentPoints + result.talentPointsEarned,
      };
    });
  }, []);

  // Complete a task
  const completeTask = useCallback((taskId, e = null) => {
    setTasks(prev => {
      const task = prev.find(t => t.id === taskId);
      if (!task) return prev;

      const { xp, gold } = calculateTaskReward(task, user.unlockedTalents);
      applyReward(xp, gold);
      showReward(xp, gold);

      setHistory(h => [
        { id: uid(), title: task.title, completedAt: new Date().toISOString(), xpEarned: xp, goldEarned: gold },
        ...h,
      ]);

      return prev.filter(t => t.id !== taskId);
    });
  }, [user.unlockedTalents, applyReward, showReward]);

  // Toggle a subtask done/undone
  const toggleSubtask = useCallback((taskId, subtaskId) => {
    setTasks(prev => prev.map(t => {
      if (t.id !== taskId) return t;
      const wasAlreadyDone = t.subtasks.find(s => s.id === subtaskId)?.done;
      if (!wasAlreadyDone) {
        const { xp, gold } = calculateSubtaskReward(user.unlockedTalents);
        applyReward(xp, gold);
        showReward(xp, gold);
      }
      return {
        ...t,
        subtasks: t.subtasks.map(s =>
          s.id === subtaskId ? { ...s, done: !s.done } : s
        ),
      };
    }));
  }, [user.unlockedTalents, applyReward, showReward]);

  // Add a new task
  const addTask = useCallback((taskData) => {
    const newTask = {
      id: uid(),
      status: 'pending',
      subtasks: [],
      createdAt: new Date().toISOString(),
      completedAt: null,
      isOverdue: false,
      tags: [],
      notes: '',
      ...taskData,
    };
    setTasks(prev => [newTask, ...prev]);
    return newTask;
  }, []);

  // Snooze / reschedule a task
  const snoozeTask = useCallback((taskId, hours = 2) => {
    setTasks(prev => prev.map(t => {
      if (t.id !== taskId) return t;
      const newDue = new Date(Date.now() + hours * 60 * 60 * 1000).toISOString();
      return { ...t, dueAt: newDue, isOverdue: false };
    }));
  }, []);

  // Delete a task (with confirmation handled in UI)
  const deleteTask = useCallback((taskId) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
  }, []);

  // Unlock a talent
  const unlockTalent = useCallback((talentId, cost) => {
    setUser(prev => {
      if (prev.talentPoints < cost) return prev;
      return {
        ...prev,
        talentPoints: prev.talentPoints - cost,
        unlockedTalents: [...prev.unlockedTalents, talentId],
      };
    });
  }, []);

  // Award focus session reward
  const completeFocusSession = useCallback((minutes, completed) => {
    const { xp, gold } = calculateFocusReward(minutes, completed, user.unlockedTalents);
    applyReward(xp, gold);
    showReward(xp, gold);
    return { xp, gold };
  }, [user.unlockedTalents, applyReward, showReward]);

  // Direct gold modifier (positive = add, negative = deduct) — used by shop & combat
  const applyGoldReward = useCallback((amount) => {
    setUser(prev => ({ ...prev, gold: Math.max(0, prev.gold + amount) }));
  }, []);

  // Direct XP grant — used by combat kill rewards
  const applyXpReward = useCallback((xp) => {
    applyReward(xp, 0);
  }, [applyReward]);

  return {
    user, tasks, history, rewardEffects, levelUpData,
    completeTask, toggleSubtask, addTask, snoozeTask, deleteTask,
    unlockTalent, completeFocusSession, showReward,
    applyGoldReward, applyXpReward,
  };
}

// ─── useFocusTimer ────────────────────────────────────────────
// Pomodoro-style focus timer with pause/resume.
// ─────────────────────────────────────────────────────────────

export function useFocusTimer(onComplete) {
  const [session, setSession] = useState(null); // { taskId, taskTitle, totalSeconds, secondsLeft, paused }
  const intervalRef = useRef(null);

  const start = useCallback((task, minutes = 25) => {
    const totalSeconds = minutes * 60;
    setSession({ taskId: task.id, taskTitle: task.title, totalSeconds, secondsLeft: totalSeconds, paused: false, minutes });
  }, []);

  const pause = useCallback(() => {
    setSession(prev => prev ? { ...prev, paused: true } : null);
  }, []);

  const resume = useCallback(() => {
    setSession(prev => prev ? { ...prev, paused: false } : null);
  }, []);

  const stop = useCallback((completed = false) => {
    if (session && onComplete) {
      const elapsed = Math.round((session.totalSeconds - session.secondsLeft) / 60);
      onComplete(elapsed, completed);
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
          if (onComplete) onComplete(prev.minutes, true);
          return null;
        }
        return { ...prev, secondsLeft: next };
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [session?.paused, session?.taskId, onComplete]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return { session, start, pause, resume, stop, formatTime };
}
