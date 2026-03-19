// ============================================================
// REWARD EFFECTS — Floating XP/gold + level-up banner
// ============================================================

import React from 'react';

/**
 * Renders floating "+XP" and "+gold" animations on screen center.
 * Also renders the level-up celebration banner.
 */
export default function RewardEffects({ effects, levelUpData }) {
  return (
    <>
      {/* Floating reward popups */}
      {effects.map(effect => (
        <div
          key={effect.id}
          className="reward-float"
          style={{
            left: effect.x != null ? `${effect.x}px` : '50%',
            top: effect.y != null ? `${effect.y}px` : '40%',
            transform: effect.x == null ? 'translateX(-50%)' : undefined,
          }}
        >
          <span style={{ color: 'var(--xp-blue)', textShadow: '0 0 10px rgba(79,195,247,0.5)' }}>
            +{effect.xp} XP
          </span>
          <span style={{ color: 'var(--gold)', textShadow: '0 0 10px var(--gold-glow)', fontSize: '0.8rem' }}>
            +{effect.gold} 💰
          </span>
        </div>
      ))}

      {/* Level-up banner */}
      {levelUpData && (
        <div className="level-up-banner">
          <div className="level-up-glow" />
          <div className="level-up-icon">⭐</div>
          <div className="level-up-text">
            <div className="level-up-title font-display">LEVEL UP!</div>
            <div className="level-up-subtitle">
              You reached Level <strong>{levelUpData.level}</strong>
            </div>
            {levelUpData.talentPoints > 0 && (
              <div className="level-up-bonus">
                🌟 +{levelUpData.talentPoints} Talent Point{levelUpData.talentPoints > 1 ? 's' : ''} — check the Talents tab!
              </div>
            )}
          </div>
          <div className="level-up-icon">⭐</div>
        </div>
      )}

      <style>{`
        .level-up-banner {
          position: fixed;
          top: var(--space-6);
          left: 50%;
          transform: translateX(-50%);
          z-index: 400;
          background: linear-gradient(135deg, #1E1B3A, #2D2560);
          border: 2px solid var(--gold);
          border-radius: var(--radius-xl);
          padding: var(--space-4) var(--space-8);
          text-align: center;
          box-shadow: 0 0 40px var(--gold-glow), var(--shadow-lg);
          animation: levelUpBurst 0.5s var(--ease-spring) both;
          display: flex;
          align-items: center;
          gap: var(--space-4);
          white-space: nowrap;
        }

        .level-up-glow {
          position: absolute;
          inset: -2px;
          border-radius: var(--radius-xl);
          background: transparent;
          box-shadow: 0 0 30px var(--gold-glow);
          pointer-events: none;
          animation: pulse-gold 2s infinite;
        }

        .level-up-icon {
          font-size: 1.5rem;
          animation: spinSlow 4s linear infinite;
        }

        .level-up-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.08em;
        }

        .level-up-subtitle {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .level-up-bonus {
          font-size: 0.8rem;
          color: var(--purple);
          margin-top: 4px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
