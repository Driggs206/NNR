// ============================================================
// MULTIPLAYER QUESTS SCREEN
// View active quests, join them, contribute, see completion
// ============================================================

import React, { useState, useEffect, useCallback } from 'react';
import { supabase, isSupabaseReady } from '../lib/supabase';

// ── Sample quests seeded locally when Supabase isn't ready ─
const SAMPLE_QUESTS = [
  {
    id: 'q-sample-1',
    title: 'Team Sprint',
    description: 'Complete 10 tasks together. Each completed task counts toward the goal.',
    quest_type: 'contribution',
    goal_count: 10,
    progress: 3,
    status: 'active',
    xp_reward: 250,
    gold_reward: 150,
    badge_reward: 'quest_complete',
    expires_at: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    participants: [{ display_name: 'You', contribution: 2 }],
    myContribution: 2,
    joined: true,
  },
  {
    id: 'q-sample-2',
    title: 'Focus Marathon',
    description: 'Collectively log 5 focus sessions this week. Every session counts.',
    quest_type: 'contribution',
    goal_count: 5,
    progress: 1,
    status: 'active',
    xp_reward: 300,
    gold_reward: 200,
    badge_reward: 'quest_mvp',
    expires_at: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    participants: [],
    myContribution: 0,
    joined: false,
  },
];

// ── Helpers ───────────────────────────────────────────────
function timeLeft(expiresAt) {
  if (!expiresAt) return null;
  const diff = new Date(expiresAt) - Date.now();
  if (diff <= 0) return 'Expired';
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  if (d > 0) return `${d}d ${h}h left`;
  return `${h}h left`;
}

function progressPercent(progress, goal) {
  return Math.min(100, Math.round((progress / goal) * 100));
}

// ── Quest Card ────────────────────────────────────────────
function QuestCard({ quest, userId, onJoin, onContribute, joining, contributing }) {
  const pct       = progressPercent(quest.progress, quest.goal_count);
  const isComplete = quest.status === 'completed' || quest.progress >= quest.goal_count;
  const expires   = timeLeft(quest.expires_at);
  const topContrib = [...(quest.participants || [])].sort((a,b) => b.contribution - a.contribution)[0];

  return (
    <div className={`quest-card ${isComplete ? 'complete' : ''} ${quest.joined ? 'joined' : ''}`}>
      {/* Header */}
      <div className="qc-header">
        <div className="qc-header-left">
          <div className="qc-type-badge">
            {quest.quest_type === 'contribution' ? '🤝 Contribution' : '⚔ Shared'}
          </div>
          <h3 className="qc-title">{quest.title}</h3>
          <p className="qc-desc">{quest.description}</p>
        </div>
        {isComplete && <div className="qc-complete-badge">✓ Complete!</div>}
      </div>

      {/* Progress bar */}
      <div className="qc-progress-section">
        <div className="qc-progress-labels">
          <span className="qc-progress-text">
            {quest.progress} / {quest.goal_count} {quest.quest_type === 'contribution' ? 'tasks' : 'steps'}
          </span>
          <span className="qc-pct">{pct}%</span>
        </div>
        <div className="qc-progress-track">
          <div
            className={`qc-progress-fill ${isComplete ? 'done' : ''}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Participants */}
      {quest.participants?.length > 0 && (
        <div className="qc-participants">
          {quest.participants.slice(0, 5).map((p, i) => (
            <div key={i} className="qc-participant" title={`${p.display_name}: ${p.contribution} contributions`}>
              <span className="qcp-avatar">{p.display_name?.[0] || '?'}</span>
              <span className="qcp-contrib">+{p.contribution}</span>
            </div>
          ))}
          {quest.participants.length > 5 && (
            <div className="qc-participant-more">+{quest.participants.length - 5}</div>
          )}
        </div>
      )}

      {/* Meta row */}
      <div className="qc-meta-row">
        <div className="qc-rewards">
          <span className="qc-reward xp">⚡ {quest.xp_reward} XP</span>
          <span className="qc-reward gold">💰 {quest.gold_reward}g</span>
          {quest.badge_reward && <span className="qc-reward badge">🏅 Badge</span>}
        </div>
        {expires && <span className={`qc-expires ${expires === 'Expired' ? 'expired' : ''}`}>{expires}</span>}
      </div>

      {/* My contribution */}
      {quest.joined && quest.myContribution > 0 && (
        <div className="qc-my-contrib">
          Your contribution: <strong>{quest.myContribution}</strong>
          {topContrib?.display_name === 'You' && <span className="qc-mvp-badge">👑 MVP</span>}
        </div>
      )}

      {/* Actions */}
      {!isComplete && (
        <div className="qc-actions">
          {!quest.joined ? (
            <button
              className="btn btn-primary qc-btn"
              onClick={() => onJoin(quest.id)}
              disabled={joining === quest.id}
            >
              {joining === quest.id ? '⟳ Joining...' : '+ Join Quest'}
            </button>
          ) : (
            <button
              className="btn btn-success qc-btn"
              onClick={() => onContribute(quest.id)}
              disabled={contributing === quest.id}
            >
              {contributing === quest.id ? '⟳ ...' : '✓ Mark Contribution'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main Screen ───────────────────────────────────────────
export default function MultiplayerQuestsScreen({ userId, onXpEarned, onGoldEarned, onBadgeEarned, addToast }) {
  const [quests, setQuests]         = useState([]);
  const [loading, setLoading]       = useState(false);
  const [joining, setJoining]       = useState(null);
  const [contributing, setContrib]  = useState(null);
  const [tab, setTab]               = useState('active');

  const loadQuests = useCallback(async () => {
    if (!userId || !isSupabaseReady) {
      setQuests(SAMPLE_QUESTS);
      return;
    }
    setLoading(true);
    try {
      // Fetch quests the user participates in
      const { data: participations } = await supabase
        .from('quest_participants')
        .select('quest_id, contribution')
        .eq('user_id', userId);

      const joinedIds = new Set(participations?.map(p => p.quest_id) || []);
      const myContribMap = Object.fromEntries(
        (participations || []).map(p => [p.quest_id, p.contribution])
      );

      // Fetch active quests
      const { data: questData } = await supabase
        .from('multiplayer_quests')
        .select('*, quest_participants(user_id, contribution, profiles(display_name))')
        .eq('status', 'active')
        .order('created_at', { ascending: false });

      const enriched = (questData || []).map(q => ({
        ...q,
        joined: joinedIds.has(q.id),
        myContribution: myContribMap[q.id] || 0,
        participants: (q.quest_participants || []).map(p => ({
          display_name: p.profiles?.display_name || 'Unknown',
          contribution: p.contribution,
          user_id: p.user_id,
        })),
      }));

      setQuests(enriched);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => { loadQuests(); }, [loadQuests]);

  const handleJoin = useCallback(async (questId) => {
    if (!isSupabaseReady || !userId) return;
    setJoining(questId);
    const { error } = await supabase
      .from('quest_participants')
      .insert({ quest_id: questId, user_id: userId, contribution: 0 });
    if (!error) {
      setQuests(prev => prev.map(q =>
        q.id === questId ? { ...q, joined: true, myContribution: 0 } : q
      ));
      if (addToast) addToast({ type: 'default', icon: '🤝', title: 'Joined quest!', sub: 'Work with your friends to complete it.', duration: 3000 });
    }
    setJoining(null);
  }, [userId, addToast]);

  const handleContribute = useCallback(async (questId) => {
    if (!isSupabaseReady || !userId) return;
    setContrib(questId);

    const quest = quests.find(q => q.id === questId);
    const newContrib  = (quest?.myContribution || 0) + 1;
    const newProgress = (quest?.progress || 0) + 1;
    const isNowComplete = newProgress >= (quest?.goal_count || 999);

    // Update participant contribution
    await supabase
      .from('quest_participants')
      .update({ contribution: newContrib })
      .eq('quest_id', questId)
      .eq('user_id', userId);

    // Update quest progress
    const updates = { progress: newProgress };
    if (isNowComplete) updates.status = 'completed';
    await supabase.from('multiplayer_quests').update(updates).eq('id', questId);

    setQuests(prev => prev.map(q =>
      q.id === questId
        ? { ...q, progress: newProgress, myContribution: newContrib, status: isNowComplete ? 'completed' : q.status }
        : q
    ));

    if (isNowComplete && quest) {
      if (onXpEarned)   onXpEarned(quest.xp_reward);
      if (onGoldEarned) onGoldEarned(quest.gold_reward);
      if (quest.badge_reward && onBadgeEarned) onBadgeEarned(quest.badge_reward);
      if (addToast) addToast({ type: 'boss', icon: '🌟', title: `Quest Complete: ${quest.title}!`, sub: `+${quest.xp_reward} XP · +${quest.gold_reward}g`, duration: 6000 });
    } else {
      if (addToast) addToast({ type: 'default', icon: '✓', title: 'Contribution logged!', sub: `${newProgress}/${quest?.goal_count} total progress`, duration: 2500 });
    }

    setContrib(null);
  }, [quests, userId, onXpEarned, onGoldEarned, onBadgeEarned, addToast]);

  const activeQuests    = quests.filter(q => q.status === 'active');
  const completedQuests = quests.filter(q => q.status === 'completed');
  const joinedQuests    = quests.filter(q => q.joined);

  return (
    <div className="mpq-screen">
      <div className="mpq-header">
        <div>
          <h1 className="font-display mpq-title">Multiplayer Quests</h1>
          <div className="mpq-subtitle">
            Complete quests together. Share rewards. Earn exclusive badges.
          </div>
        </div>
        {joinedQuests.length > 0 && (
          <div className="mpq-joined-count">
            {joinedQuests.length} active quest{joinedQuests.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>

      {/* How it works */}
      <div className="mpq-explainer">
        <div className="mpq-explain-item">
          <span>🤝</span>
          <div>
            <div className="mei-title">Contribution Quests</div>
            <div className="mei-desc">Each player completes tasks toward a shared goal. Any contribution counts.</div>
          </div>
        </div>
        <div className="mpq-explain-item">
          <span>🏅</span>
          <div>
            <div className="mei-title">Exclusive Rewards</div>
            <div className="mei-desc">Multiplayer quests award badges you can't get any other way.</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mpq-tabs">
        {[
          { id: 'active',    label: `Active (${activeQuests.length})` },
          { id: 'completed', label: `Completed (${completedQuests.length})` },
        ].map(t => (
          <button
            key={t.id}
            className={`filter-tab ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Quest list */}
      {loading ? (
        <div className="mpq-loading">⟳ Loading quests...</div>
      ) : tab === 'active' && activeQuests.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🌟</div>
          <div className="empty-title">No active quests</div>
          <div className="empty-sub">
            {isSupabaseReady
              ? 'Quests are created by you or your friends. Ask a friend to create one!'
              : 'Connect Supabase to see and join real multiplayer quests.'}
          </div>
        </div>
      ) : (
        <div className="mpq-list">
          {(tab === 'active' ? activeQuests : completedQuests).map(quest => (
            <QuestCard
              key={quest.id}
              quest={quest}
              userId={userId}
              onJoin={handleJoin}
              onContribute={handleContribute}
              joining={joining}
              contributing={contributing}
            />
          ))}
        </div>
      )}

      {!isSupabaseReady && (
        <div className="mpq-offline-note">
          🔌 Showing sample quests. Connect Supabase in <code>.env</code> for real multiplayer.
        </div>
      )}

      <style>{`
        .mpq-screen {
          padding: var(--space-6) var(--space-6) var(--space-8);
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }

        .mpq-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--space-4);
          flex-wrap: wrap;
        }

        .mpq-title {
          font-size: 1.6rem;
          background: linear-gradient(135deg, var(--gold), var(--amber));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mpq-subtitle { font-size: 0.82rem; color: var(--text-muted); margin-top: 2px; }

        .mpq-joined-count {
          font-size: 0.78rem;
          font-weight: 800;
          background: var(--green-dim);
          color: var(--green);
          border: 1px solid rgba(92,221,139,0.3);
          border-radius: var(--radius-full);
          padding: var(--space-2) var(--space-3);
          align-self: flex-start;
        }

        .mpq-explainer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3);
        }

        .mpq-explain-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          font-size: 1.2rem;
        }

        .mei-title { font-size: 0.82rem; font-weight: 700; color: var(--text-primary); margin-bottom: 3px; }
        .mei-desc  { font-size: 0.72rem; color: var(--text-muted); line-height: 1.4; }

        .mpq-tabs { display: flex; gap: var(--space-2); border-bottom: 1px solid var(--border-subtle); padding-bottom: var(--space-3); }

        .mpq-loading {
          text-align: center;
          color: var(--text-muted);
          font-size: 0.85rem;
          padding: var(--space-6);
        }

        .mpq-list { display: flex; flex-direction: column; gap: var(--space-4); }

        /* Quest card */
        .quest-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xl);
          padding: var(--space-5);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          transition: all 0.2s;
          animation: fadeInUp 0.3s var(--ease-out);
        }

        .quest-card.joined {
          border-color: rgba(92,221,139,0.25);
          background: linear-gradient(135deg, var(--bg-card), rgba(92,221,139,0.03));
        }

        .quest-card.complete {
          border-color: var(--gold-glow);
          background: linear-gradient(135deg, var(--bg-card), rgba(245,200,66,0.04));
        }

        .qc-header { display: flex; align-items: flex-start; justify-content: space-between; gap: var(--space-4); }
        .qc-header-left { flex: 1; display: flex; flex-direction: column; gap: var(--space-2); }

        .qc-type-badge {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--purple);
          background: var(--purple-dim);
          border: 1px solid rgba(179,157,219,0.3);
          border-radius: var(--radius-full);
          padding: 2px 8px;
          align-self: flex-start;
        }

        .qc-title { font-size: 1rem; font-weight: 800; color: var(--text-primary); font-family: var(--font-display); }
        .qc-desc  { font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; }

        .qc-complete-badge {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--gold);
          background: var(--gold-dim);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-full);
          padding: var(--space-2) var(--space-3);
          white-space: nowrap;
          flex-shrink: 0;
          align-self: flex-start;
        }

        .qc-progress-section { display: flex; flex-direction: column; gap: var(--space-2); }
        .qc-progress-labels { display: flex; justify-content: space-between; align-items: center; }
        .qc-progress-text { font-size: 0.78rem; color: var(--text-secondary); font-weight: 600; }
        .qc-pct { font-size: 0.72rem; color: var(--text-muted); font-weight: 700; }

        .qc-progress-track {
          height: 10px;
          background: var(--bg-elevated);
          border-radius: var(--radius-full);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
        }

        .qc-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--purple), var(--xp-blue));
          border-radius: var(--radius-full);
          transition: width 0.6s var(--ease-out);
          position: relative;
          overflow: hidden;
        }

        .qc-progress-fill::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .qc-progress-fill.done {
          background: linear-gradient(90deg, var(--green), var(--xp-blue));
        }

        .qc-participants { display: flex; align-items: center; gap: var(--space-2); flex-wrap: wrap; }

        .qc-participant {
          display: flex;
          align-items: center;
          gap: 4px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          padding: 3px 8px;
          font-size: 0.72rem;
        }

        .qcp-avatar {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--purple), var(--xp-blue));
          display: flex; align-items: center; justify-content: center;
          font-size: 0.6rem; font-weight: 800; color: white;
          flex-shrink: 0;
        }

        .qcp-contrib { color: var(--green); font-weight: 800; font-size: 0.68rem; }

        .qc-participant-more {
          font-size: 0.7rem;
          color: var(--text-muted);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          padding: 3px 8px;
        }

        .qc-meta-row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-2); }
        .qc-rewards { display: flex; gap: var(--space-2); flex-wrap: wrap; }

        .qc-reward {
          font-size: 0.72rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }
        .qc-reward.xp    { background: var(--xp-blue-dim); color: var(--xp-blue); border: 1px solid rgba(79,195,247,0.3); }
        .qc-reward.gold  { background: var(--gold-dim);    color: var(--gold);    border: 1px solid var(--gold-glow); }
        .qc-reward.badge { background: var(--purple-dim);  color: var(--purple);  border: 1px solid rgba(179,157,219,0.3); }

        .qc-expires { font-size: 0.7rem; color: var(--text-muted); }
        .qc-expires.expired { color: var(--coral); }

        .qc-my-contrib {
          font-size: 0.78rem;
          color: var(--text-secondary);
          background: var(--green-dim);
          border: 1px solid rgba(92,221,139,0.2);
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-3);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .qc-mvp-badge {
          font-size: 0.68rem;
          font-weight: 800;
          background: var(--gold-dim);
          color: var(--gold);
          border-radius: var(--radius-full);
          padding: 1px 6px;
          border: 1px solid var(--gold-glow);
        }

        .qc-actions { padding-top: var(--space-2); border-top: 1px solid var(--border-subtle); }
        .qc-btn { width: 100%; justify-content: center; padding: var(--space-3); font-size: 0.9rem; }

        .mpq-offline-note {
          font-size: 0.72rem;
          color: var(--text-muted);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
          text-align: center;
        }
        .mpq-offline-note code { color: var(--coral); font-family: monospace; }

        @media (max-width: 600px) {
          .mpq-screen { padding: var(--space-4) var(--space-4) var(--space-8); }
          .mpq-explainer { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
