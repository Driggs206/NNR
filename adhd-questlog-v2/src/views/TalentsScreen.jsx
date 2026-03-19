// ============================================================
// TALENTS SCREEN — Unlock productivity perks with talent points
// ============================================================

import React from 'react';
import { TALENTS } from '../store/initialState';

export default function TalentsScreen({ user, onUnlock }) {
  return (
    <div className="talents-screen">
      <div className="talents-header">
        <h1 className="font-display talents-title">Talent Tree</h1>
        <div className="talents-subtitle">
          Unlock perks that make productivity easier — not just look better.
        </div>
        <div className="talent-points-display">
          <span className="talent-points-icon">🌟</span>
          <span className="talent-points-value">{user.talentPoints}</span>
          <span className="talent-points-label">Talent Points Available</span>
        </div>
      </div>

      <div className="talents-grid">
        {TALENTS.map(talent => {
          const unlocked = user.unlockedTalents.includes(talent.id);
          const canAfford = user.talentPoints >= talent.cost;

          return (
            <div
              key={talent.id}
              className={`talent-card ${unlocked ? 'unlocked' : ''} ${!unlocked && canAfford ? 'available' : ''}`}
            >
              <div className="talent-icon">{talent.icon}</div>
              <div className="talent-info">
                <div className="talent-name">{talent.name}</div>
                <div className="talent-desc">{talent.description}</div>
              </div>
              <div className="talent-action">
                {unlocked ? (
                  <div className="talent-status unlocked-status">
                    <span>✓</span> Unlocked
                  </div>
                ) : (
                  <button
                    className={`btn ${canAfford ? 'btn-primary' : 'btn-secondary'} talent-unlock-btn`}
                    onClick={() => onUnlock(talent.id, talent.cost)}
                    disabled={!canAfford}
                  >
                    🌟 {talent.cost} {talent.cost === 1 ? 'point' : 'points'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="talents-tip">
        <span>💡</span>
        <span>You earn Talent Points by leveling up. Every level grants 1 point. Keep completing quests to unlock more perks!</span>
      </div>

      <style>{`
        .talents-screen {
          padding: var(--space-8);
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .talents-header {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          animation: fadeInDown 0.4s var(--ease-out);
        }

        .talents-title {
          font-size: 1.8rem;
          background: linear-gradient(135deg, var(--purple), var(--xp-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .talents-subtitle {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .talent-points-display {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          background: var(--purple-dim);
          border: 1px solid rgba(179,157,219,0.3);
          border-radius: var(--radius-full);
          padding: var(--space-2) var(--space-4);
          align-self: flex-start;
        }

        .talent-points-icon { font-size: 1rem; }
        .talent-points-value {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--purple);
          font-family: var(--font-display);
        }
        .talent-points-label {
          font-size: 0.78rem;
          color: var(--purple);
          font-weight: 600;
        }

        .talents-grid {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .talent-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          display: flex;
          align-items: center;
          gap: var(--space-4);
          transition: all 0.2s var(--ease-out);
          animation: fadeInUp 0.3s var(--ease-out) both;
        }

        .talent-card:hover {
          border-color: var(--border-default);
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }

        .talent-card.unlocked {
          background: linear-gradient(135deg, var(--bg-card), rgba(179,157,219,0.06));
          border-color: rgba(179,157,219,0.3);
        }

        .talent-card.available {
          border-color: rgba(179,157,219,0.2);
        }

        .talent-icon {
          font-size: 2rem;
          width: 56px;
          height: 56px;
          background: var(--bg-elevated);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid var(--border-subtle);
        }

        .talent-card.unlocked .talent-icon {
          background: var(--purple-dim);
          border-color: rgba(179,157,219,0.3);
          box-shadow: 0 0 12px rgba(179,157,219,0.15);
        }

        .talent-info {
          flex: 1;
          min-width: 0;
        }

        .talent-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-1);
        }

        .talent-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .talent-action { flex-shrink: 0; }

        .talent-status {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--purple);
          background: var(--purple-dim);
          border: 1px solid rgba(179,157,219,0.3);
          border-radius: var(--radius-full);
          padding: var(--space-2) var(--space-3);
        }

        .talent-unlock-btn {
          font-size: 0.82rem;
          padding: var(--space-2) var(--space-4);
        }

        button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          transform: none !important;
        }

        .talents-tip {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: var(--space-4) var(--space-5);
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .talents-screen { padding: var(--space-4); }
          .talent-card { flex-direction: column; text-align: center; }
          .talent-icon { width: 48px; height: 48px; }
        }
      `}</style>
    </div>
  );
}
