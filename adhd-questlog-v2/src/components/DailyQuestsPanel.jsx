// ============================================================
// DAILY QUESTS PANEL
// Shows today's 3 quests with progress bars and claim buttons
// ============================================================

import React from 'react';
import { getTimeUntilReset } from '../data/dailyQuests';

export default function DailyQuestsPanel({ quests, onClaim, justCompleted }) {
  const resetIn = getTimeUntilReset();
  const allDone = quests.every(q => q.claimed);

  return (
    <div className="dq-panel">
      <div className="dq-header">
        <div>
          <div className="dq-title font-display">⚡ Daily Quests</div>
          <div className="dq-reset">Resets in {resetIn}</div>
        </div>
        {allDone && (
          <div className="dq-all-done">✓ All done!</div>
        )}
      </div>

      <div className="dq-list">
        {quests.map(quest => {
          const pct      = Math.min((quest.progress / quest.target) * 100, 100);
          const isReady  = quest.completed && !quest.claimed;
          const isFlash  = justCompleted === quest.id;

          return (
            <div
              key={quest.id}
              className={`dq-quest ${quest.claimed ? 'claimed' : ''} ${isReady ? 'ready' : ''} ${isFlash ? 'flash' : ''}`}
              style={{ '--qc': quest.color }}
            >
              <div className="dq-quest-icon">{quest.icon}</div>

              <div className="dq-quest-body">
                <div className="dq-quest-title">{quest.title}</div>
                <div className="dq-quest-desc">{quest.description}</div>

                {/* Progress bar */}
                <div className="dq-progress-wrap">
                  <div className="dq-progress-bar">
                    <div
                      className="dq-progress-fill"
                      style={{ width: `${pct}%`, background: quest.color }}
                    />
                  </div>
                  <div className="dq-progress-label">
                    {quest.claimed ? '✓ Complete' : `${quest.progress}/${quest.target}`}
                  </div>
                </div>

                {/* Reward chips */}
                <div className="dq-rewards">
                  <span className="dq-reward-chip gold">💰 {quest.reward.gold}g</span>
                  <span className="dq-reward-chip xp">✨ {quest.reward.xp} XP</span>
                </div>
              </div>

              {/* Claim button */}
              {isReady && (
                <button
                  className="dq-claim-btn"
                  onClick={() => onClaim(quest.id)}
                >
                  Claim!
                </button>
              )}
              {quest.claimed && (
                <div className="dq-claimed-badge">✓</div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        .dq-panel {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xl);
          padding: var(--space-4) var(--space-5);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .dq-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .dq-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .dq-reset {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .dq-all-done {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--green);
          background: var(--green-dim);
          border-radius: var(--radius-full);
          padding: 4px 12px;
          border: 1px solid rgba(92,221,139,0.3);
        }

        .dq-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .dq-quest {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-3) var(--space-4);
          transition: all 0.2s var(--ease-out);
          position: relative;
          overflow: hidden;
        }

        .dq-quest::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--qc);
          border-radius: var(--radius-full);
        }

        .dq-quest.ready {
          border-color: var(--qc);
          box-shadow: 0 0 12px color-mix(in srgb, var(--qc) 30%, transparent);
          animation: questPulse 2s ease infinite;
        }

        .dq-quest.claimed {
          opacity: 0.55;
        }

        .dq-quest.flash {
          animation: questFlash 0.4s ease;
        }

        @keyframes questPulse {
          0%, 100% { box-shadow: 0 0 8px color-mix(in srgb, var(--qc) 20%, transparent); }
          50%       { box-shadow: 0 0 20px color-mix(in srgb, var(--qc) 45%, transparent); }
        }

        @keyframes questFlash {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.02); background: var(--bg-card-hover); }
          100% { transform: scale(1); }
        }

        .dq-quest-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          width: 36px;
          text-align: center;
        }

        .dq-quest-body {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .dq-quest-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .dq-quest-desc {
          font-size: 0.72rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .dq-progress-wrap {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          margin-top: 2px;
        }

        .dq-progress-bar {
          flex: 1;
          height: 5px;
          background: var(--bg-card);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .dq-progress-fill {
          height: 100%;
          border-radius: var(--radius-full);
          transition: width 0.4s var(--ease-out);
        }

        .dq-progress-label {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-muted);
          white-space: nowrap;
          min-width: 40px;
          text-align: right;
        }

        .dq-rewards {
          display: flex;
          gap: var(--space-2);
          margin-top: 2px;
        }

        .dq-reward-chip {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: var(--radius-full);
        }

        .dq-reward-chip.gold {
          background: var(--gold-dim);
          color: var(--gold);
          border: 1px solid rgba(245,200,66,0.3);
        }

        .dq-reward-chip.xp {
          background: var(--purple-dim);
          color: var(--purple);
          border: 1px solid rgba(179,157,219,0.3);
        }

        .dq-claim-btn {
          flex-shrink: 0;
          background: linear-gradient(135deg, var(--gold), var(--amber));
          color: var(--text-inverse);
          border: none;
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-3);
          font-size: 0.78rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
          box-shadow: 0 0 12px var(--gold-glow);
        }

        .dq-claim-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px var(--gold-glow);
        }

        .dq-claimed-badge {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--green-dim);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 800;
          border: 1px solid rgba(92,221,139,0.3);
        }
      `}</style>
    </div>
  );
}
