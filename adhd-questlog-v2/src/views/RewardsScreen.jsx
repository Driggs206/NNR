// ============================================================
// REWARDS SCREEN — XP history, stats, badges
// ============================================================

import React from 'react';
import { xpForLevel } from '../utils/rewards';

const BADGES = [
  { id: 'first_quest', icon: '⚔️', name: 'First Quest', desc: 'Completed your first task', earned: true },
  { id: 'week_streak', icon: '🔥', name: 'Week Warrior', desc: '7-day streak', earned: true },
  { id: 'focus_ten', icon: '🔮', name: 'Deep Thinker', desc: '10 focus sessions', earned: false },
  { id: 'early_bird', icon: '🌅', name: 'Early Bird', desc: 'Complete a task before 9am', earned: false },
  { id: 'level_5', icon: '⭐', name: 'Rising Star', desc: 'Reach Level 5', earned: false },
  { id: 'hundred_tasks', icon: '🏆', name: 'Century', desc: 'Complete 100 tasks', earned: false },
];

export default function RewardsScreen({ user, history }) {
  const totalXPEarned = history.reduce((sum, h) => sum + h.xpEarned, 0);
  const totalGoldEarned = history.reduce((sum, h) => sum + h.goldEarned, 0);
  const xpPercent = Math.round((user.xp / user.xpToNext) * 100);

  return (
    <div className="rewards-screen">
      {/* Hero stats */}
      <div className="rewards-hero">
        <div className="rewards-avatar">
          <span className="rewards-level font-display">{user.level}</span>
          <span className="rewards-level-label">LVL</span>
        </div>

        <div className="rewards-hero-info">
          <h1 className="font-display rewards-name">{user.displayName}</h1>
          <div className="rewards-title-text">{user.title}</div>

          <div className="xp-section">
            <div className="xp-section-labels">
              <span className="text-xs" style={{color:'var(--xp-blue)'}}>XP Progress</span>
              <span className="text-xs text-muted">{user.xp} / {user.xpToNext}</span>
            </div>
            <div className="xp-bar-track">
              <div className="xp-bar-fill" style={{ width: `${xpPercent}%` }} />
            </div>
            <div className="text-xs text-muted" style={{marginTop:4}}>
              {user.xpToNext - user.xp} XP until Level {user.level + 1}
            </div>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="stats-grid">
        {[
          { icon: '⚡', label: 'Current Level', value: user.level, color: 'var(--xp-blue)' },
          { icon: '💰', label: 'Total Gold', value: user.gold, color: 'var(--gold)' },
          { icon: '🔥', label: 'Day Streak', value: `${user.streak}d`, color: 'var(--amber)' },
          { icon: '✅', label: 'Tasks Done', value: history.length, color: 'var(--green)' },
          { icon: '🌟', label: 'Total XP Earned', value: `${totalXPEarned.toLocaleString()}`, color: 'var(--purple)' },
          { icon: '🎯', label: 'Talent Points', value: user.talentPoints, color: 'var(--coral)' },
        ].map(stat => (
          <div key={stat.label} className="stat-card">
            <div className="stat-card-icon" style={{color: stat.color}}>{stat.icon}</div>
            <div className="stat-card-value" style={{color: stat.color}}>{stat.value}</div>
            <div className="stat-card-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="section">
        <h2 className="section-title font-display">Achievements</h2>
        <div className="badges-grid">
          {BADGES.map(badge => (
            <div key={badge.id} className={`badge-card ${badge.earned ? 'earned' : 'locked'}`}>
              <div className="badge-icon">{badge.icon}</div>
              <div className="badge-name">{badge.name}</div>
              <div className="badge-desc">{badge.desc}</div>
              {!badge.earned && <div className="badge-lock">🔒</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Recent history */}
      <div className="section">
        <h2 className="section-title font-display">Recent Completions</h2>
        <div className="history-list">
          {history.length === 0 ? (
            <div className="text-muted" style={{textAlign:'center', padding: 'var(--space-6)'}}>
              No completed tasks yet. Go conquer something! ⚔️
            </div>
          ) : (
            history.slice(0, 20).map(entry => (
              <div key={entry.id} className="history-item animate-in">
                <div className="history-title">{entry.title}</div>
                <div className="history-meta">
                  <span className="text-xs text-muted">
                    {new Date(entry.completedAt).toLocaleString([], { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' })}
                  </span>
                </div>
                <div className="history-rewards">
                  <span className="history-xp">+{entry.xpEarned} XP</span>
                  <span className="history-gold">+{entry.goldEarned} 💰</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <style>{`
        .rewards-screen {
          padding: var(--space-8);
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-8);
        }

        .rewards-hero {
          display: flex;
          align-items: center;
          gap: var(--space-6);
          background: linear-gradient(135deg, var(--bg-elevated), #1E1B40);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          box-shadow: 0 0 30px rgba(245,200,66,0.06);
          animation: fadeInDown 0.4s var(--ease-out);
        }

        .rewards-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--gold), var(--amber));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 24px var(--gold-glow);
        }

        .rewards-level {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-inverse);
          line-height: 1;
        }

        .rewards-level-label {
          font-size: 0.62rem;
          font-weight: 800;
          color: var(--text-inverse);
          opacity: 0.7;
          letter-spacing: 0.1em;
        }

        .rewards-hero-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .rewards-name {
          font-size: 1.6rem;
          color: var(--text-primary);
        }

        .rewards-title-text {
          font-size: 0.85rem;
          color: var(--purple);
          font-style: italic;
        }

        .xp-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .xp-section-labels {
          display: flex;
          justify-content: space-between;
        }

        /* Stats grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-3);
        }

        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
          text-align: center;
          transition: all 0.2s;
        }

        .stat-card:hover {
          border-color: var(--border-default);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .stat-card-icon { font-size: 1.5rem; }
        .stat-card-value {
          font-size: 1.6rem;
          font-weight: 800;
          font-family: var(--font-display);
          line-height: 1;
        }
        .stat-card-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Sections */
        .section {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .section-title {
          font-size: 1rem;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }

        /* Badges */
        .badges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-3);
        }

        .badge-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
          position: relative;
          transition: all 0.2s;
        }

        .badge-card.earned {
          border-color: var(--gold-glow);
          background: linear-gradient(135deg, var(--bg-card), rgba(245,200,66,0.04));
        }

        .badge-card.locked {
          opacity: 0.5;
          filter: grayscale(0.5);
        }

        .badge-icon { font-size: 1.8rem; }
        .badge-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .badge-desc {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .badge-lock {
          position: absolute;
          top: var(--space-2);
          right: var(--space-2);
          font-size: 0.7rem;
        }

        /* History */
        .history-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .history-item {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-3) var(--space-4);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          transition: all 0.15s;
        }

        .history-item:hover {
          border-color: var(--border-default);
          background: var(--bg-card-hover);
        }

        .history-title {
          flex: 1;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .history-meta { flex-shrink: 0; }

        .history-rewards {
          display: flex;
          gap: var(--space-2);
          flex-shrink: 0;
        }

        .history-xp {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--xp-blue);
        }

        .history-gold {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--gold);
        }

        @media (max-width: 600px) {
          .rewards-screen { padding: var(--space-4); }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .badges-grid { grid-template-columns: repeat(2, 1fr); }
          .rewards-hero { flex-direction: column; text-align: center; }
        }
      `}</style>
    </div>
  );
}
