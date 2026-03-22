// ============================================================
// useDailyQuests — tracks and updates daily quest progress
// ============================================================

import { useState, useCallback, useEffect } from 'react';
import {
  getDailyQuests, loadDailyProgress,
  saveDailyProgress, getDailyQuestStorageKey,
} from '../data/dailyQuests';

export function useDailyQuests({ onGoldEarned, onXpEarned }) {
  const [quests,   setQuests]   = useState(() => getDailyQuests());
  const [progress, setProgress] = useState(() => loadDailyProgress());
  const [justCompleted, setJustCompleted] = useState(null); // quest id flash

  // Check for day rollover every minute
  useEffect(() => {
    const key = getDailyQuestStorageKey();
    const interval = setInterval(() => {
      const currentKey = getDailyQuestStorageKey();
      if (currentKey !== key) {
        // New day — reset
        setQuests(getDailyQuests());
        setProgress(loadDailyProgress());
      }
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  // Persist progress whenever it changes
  useEffect(() => {
    saveDailyProgress(progress);
  }, [progress]);

  // ── Update progress for a quest type ──────────────────────
  const updateProgress = useCallback((type, amount = 1) => {
    setProgress(prev => {
      const next = { ...prev };
      let changed = false;

      quests.forEach(quest => {
        if (quest.type !== type) return;
        const current = next[quest.id] || { progress: 0, claimed: false };
        if (current.claimed) return;

        const newProgress = Math.min(current.progress + amount, quest.target);
        if (newProgress !== current.progress) {
          next[quest.id] = { ...current, progress: newProgress };
          changed = true;
        }
      });

      return changed ? next : prev;
    });
  }, [quests]);

  // ── Claim a completed quest ────────────────────────────────
  const claimQuest = useCallback((questId) => {
    const quest = quests.find(q => q.id === questId);
    if (!quest) return;

    const current = progress[questId];
    if (!current || current.claimed || current.progress < quest.target) return;

    setProgress(prev => ({
      ...prev,
      [questId]: { ...prev[questId], claimed: true },
    }));

    if (onGoldEarned) onGoldEarned(quest.reward.gold);
    if (onXpEarned)   onXpEarned(quest.reward.xp);
    setJustCompleted(questId);
    setTimeout(() => setJustCompleted(null), 2000);
  }, [quests, progress, onGoldEarned, onXpEarned]);

  // ── Convenience: get quest with its current progress ──────
  const questsWithProgress = quests.map(q => ({
    ...q,
    progress:  (progress[q.id]?.progress || 0),
    claimed:   (progress[q.id]?.claimed  || false),
    completed: (progress[q.id]?.progress || 0) >= q.target,
  }));

  return {
    quests: questsWithProgress,
    updateProgress,
    claimQuest,
    justCompleted,
  };
}
