// ============================================================
// LOOT CHEST — Animated chest that reveals pending loot items
// ============================================================

import React, { useState, useEffect, useRef } from 'react';
import { ITEMS, RARITY_COLORS } from '../data/items';

// ── Single item card that flies in ────────────────────────
function LootItemCard({ itemId, index, total, onDone }) {
  const item   = ITEMS[itemId];
  const rarity = item ? (RARITY_COLORS[item.rarity] || RARITY_COLORS.common) : RARITY_COLORS.common;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 180);
    return () => clearTimeout(t);
  }, [index]);

  useEffect(() => {
    if (index === total - 1) {
      const t = setTimeout(onDone, index * 180 + 800);
      return () => clearTimeout(t);
    }
  }, [index, total, onDone]);

  if (!item) return null;

  return (
    <div
      className={`loot-item-card ${visible ? 'visible' : ''}`}
      style={{ '--rc': rarity.color, '--delay': `${index * 0.18}s` }}
    >
      {/* Sparkles */}
      <div className="lic-sparkles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="lic-sparkle" style={{
            '--sa': `${i * 60}deg`,
            '--sd': `${0.05 + i * 0.06}s`,
          }} />
        ))}
      </div>

      <div className="lic-rarity-glow" style={{ background: rarity.color }} />

      <div className="lic-icon-wrap" style={{ background: rarity.bg }}>
        {item.artIcon ? (
          <img
            src={`${import.meta.env.BASE_URL}${item.artIcon.replace(/^\//, '')}`}
            alt={item.name}
            className="lic-art"
          />
        ) : (
          <span className="lic-icon">{item.icon}</span>
        )}
      </div>

      <div className="lic-info">
        <div className="lic-name" style={{ color: rarity.color }}>{item.name}</div>
        <div className="lic-rarity">{rarity.label}</div>
      </div>

      <div className="lic-new-badge">NEW</div>
    </div>
  );
}

// ── Chest button — pulsing when loot available ─────────────
export function ChestButton({ pendingLoot, onClick }) {
  const count = pendingLoot.length;
  if (count === 0) return null;

  const hasBossLoot = pendingLoot.some(l => l.fromBoss);

  return (
    <button className={`chest-btn ${hasBossLoot ? 'boss' : ''}`} onClick={onClick}>
      <span className="chest-btn-icon">{hasBossLoot ? '👑' : '📦'}</span>
      <span className="chest-btn-count">{count}</span>
      <span className="chest-btn-label">Open Chest!</span>

      <style>{`
        .chest-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #8B6914, #D4AF37, #8B6914);
          border: 2px solid #F5C842;
          border-radius: var(--radius-full);
          padding: 8px 16px;
          cursor: pointer;
          color: #1a1200;
          font-weight: 800;
          font-size: 0.85rem;
          position: relative;
          overflow: hidden;
          animation: chestPulse 1.5s ease infinite;
          box-shadow: 0 0 20px rgba(245,200,66,0.5);
          white-space: nowrap;
        }

        .chest-btn.boss {
          background: linear-gradient(135deg, #4a0080, #9B59B6, #4a0080);
          border-color: #CE93D8;
          color: white;
          box-shadow: 0 0 24px rgba(179,157,219,0.6);
        }

        @keyframes chestPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 16px rgba(245,200,66,0.4); }
          50%       { transform: scale(1.05); box-shadow: 0 0 28px rgba(245,200,66,0.7); }
        }

        .chest-btn-icon { font-size: 1.2rem; }

        .chest-btn-count {
          background: rgba(0,0,0,0.25);
          border-radius: var(--radius-full);
          padding: 1px 7px;
          font-size: 0.78rem;
        }

        .chest-btn-label { font-size: 0.82rem; }
      `}</style>
    </button>
  );
}

// ── Main chest opening modal ───────────────────────────────
export default function LootChest({ pendingLoot, onClaim }) {
  const [phase, setPhase]         = useState('opening'); // opening | revealing | done
  const [allRevealed, setAllRevealed] = useState(false);
  const itemIds = pendingLoot.map(l => l.id);

  useEffect(() => {
    // Chest lid opens for 600ms then start revealing items
    const t = setTimeout(() => setPhase('revealing'), 600);
    return () => clearTimeout(t);
  }, []);

  function handleAllDone() {
    setAllRevealed(true);
    setPhase('done');
  }

  return (
    <div className="loot-chest-overlay" onClick={e => e.target === e.currentTarget && allRevealed && onClaim()}>

      {/* Chest animation */}
      <div className={`chest-container ${phase}`}>
        <div className="chest-lid">
          <div className="chest-lid-inner">🏆</div>
        </div>
        <div className="chest-body">
          <span className="chest-body-icon">📦</span>
        </div>

        {/* Light burst on open */}
        {phase !== 'opening' && (
          <div className="chest-burst">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="burst-ray" style={{ '--ba': `${i * 45}deg` }} />
            ))}
          </div>
        )}
      </div>

      {/* Title */}
      <div className={`chest-title ${phase !== 'opening' ? 'visible' : ''}`}>
        {pendingLoot.some(l => l.fromBoss) ? '👑 Boss Loot!' : '⚔ Loot Drop!'}
      </div>

      {/* Item cards */}
      {phase === 'revealing' || phase === 'done' ? (
        <div className="loot-items-grid">
          {itemIds.map((id, i) => (
            <LootItemCard
              key={`${id}-${i}`}
              itemId={id}
              index={i}
              total={itemIds.length}
              onDone={handleAllDone}
            />
          ))}
        </div>
      ) : null}

      {/* Claim button */}
      {allRevealed && (
        <button className="chest-claim-btn" onClick={onClaim}>
          ✓ Add to Bag!
        </button>
      )}

      <style>{`
        .loot-chest-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5, 4, 15, 0.88);
          backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          z-index: 200;
          padding: 24px;
        }

        /* ── Chest ── */
        .chest-container {
          position: relative;
          width: 120px;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .chest-lid {
          font-size: 3rem;
          transition: transform 0.5s var(--ease-spring);
          transform-origin: bottom center;
          position: relative;
          z-index: 2;
        }

        .chest-container.opening .chest-lid {
          animation: lidShake 0.5s ease;
        }

        .chest-container.revealing .chest-lid,
        .chest-container.done .chest-lid {
          transform: rotateX(-120deg) translateY(-20px);
          animation: none;
        }

        @keyframes lidShake {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(8deg); }
          60% { transform: rotate(-5deg); }
          80% { transform: rotate(5deg); }
        }

        .chest-lid-inner { font-size: 2.5rem; }
        .chest-body { font-size: 2.5rem; margin-top: -8px; }

        /* ── Light burst ── */
        .chest-burst {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .burst-ray {
          position: absolute;
          width: 3px;
          height: 60px;
          background: linear-gradient(to top, rgba(245,200,66,0), rgba(245,200,66,0.8));
          border-radius: 2px;
          transform-origin: bottom center;
          transform: rotate(var(--ba));
          animation: rayBurst 0.6s ease-out forwards;
        }

        @keyframes rayBurst {
          from { opacity: 1; height: 20px; }
          to   { opacity: 0; height: 80px; }
        }

        /* ── Title ── */
        .chest-title {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--gold);
          text-shadow: 0 0 20px rgba(245,200,66,0.6);
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s var(--ease-spring);
        }

        .chest-title.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Item grid ── */
        .loot-items-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          max-width: 500px;
          max-height: 50vh;
          overflow-y: auto;
        }

        /* ── Item card ── */
        .loot-item-card {
          position: relative;
          background: var(--bg-elevated);
          border: 2px solid var(--rc);
          border-radius: var(--radius-lg);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 160px;
          opacity: 0;
          transform: translateY(30px) scale(0.8);
          transition: all 0.4s var(--ease-spring);
          box-shadow: 0 0 16px color-mix(in srgb, var(--rc) 30%, transparent);
          overflow: hidden;
        }

        .loot-item-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .lic-rarity-glow {
          position: absolute;
          inset: 0;
          opacity: 0.06;
          pointer-events: none;
        }

        /* Sparkles */
        .lic-sparkles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .lic-sparkle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--rc, #F5C842);
          animation: sparkleFly var(--sd) ease-out forwards;
          transform: rotate(var(--sa)) translateY(0);
          opacity: 0;
        }

        @keyframes sparkleFly {
          0%   { opacity: 1; transform: rotate(var(--sa)) translateY(0) scale(1); }
          100% { opacity: 0; transform: rotate(var(--sa)) translateY(-40px) scale(0); }
        }

        .lic-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
        }

        .lic-art {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .lic-icon { font-size: 1.6rem; }

        .lic-info { flex: 1; min-width: 0; }

        .lic-name {
          font-size: 0.82rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .lic-rarity {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-top: 2px;
        }

        .lic-new-badge {
          position: absolute;
          top: 4px;
          right: 6px;
          font-size: 0.55rem;
          font-weight: 900;
          color: var(--rc);
          letter-spacing: 0.08em;
          opacity: 0.8;
        }

        /* ── Claim button ── */
        .chest-claim-btn {
          background: linear-gradient(135deg, var(--gold), var(--amber));
          color: var(--text-inverse);
          border: none;
          border-radius: var(--radius-full);
          padding: 14px 40px;
          font-size: 1.1rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 0 24px var(--gold-glow);
          animation: claimBounce 0.5s var(--ease-spring);
          transition: transform 0.15s, box-shadow 0.15s;
        }

        .chest-claim-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 36px var(--gold-glow);
        }

        @keyframes claimBounce {
          0%   { transform: scale(0.7); opacity: 0; }
          60%  { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
