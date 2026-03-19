// ============================================================
// COMBAT MODALS — Kill reward popup + offline gains notification
// ============================================================

import React from 'react';
import { getItemById, RARITY_COLORS } from '../data/items';

// ── Kill Reward Modal ─────────────────────────────────────
export function KillRewardModal({ reward, onDismiss }) {
  if (!reward) return null;
  return (
    <div className="modal-overlay" onClick={onDismiss}>
      <div className="kill-modal scale-in" onClick={e => e.stopPropagation()}>
        <div className="kill-header">
          {reward.isBoss
            ? <div className="kill-title-boss font-display">⚡ BOSS DEFEATED!</div>
            : <div className="kill-title font-display">☠ Defeated!</div>
          }
          <div className="kill-monster">{reward.monsterName}</div>
        </div>

        <div className="kill-rewards">
          <div className="kill-reward-chip gold">
            <span>💰</span><span>+{reward.gold} Gold</span>
          </div>
          <div className="kill-reward-chip xp">
            <span>⚡</span><span>+{reward.xp} XP</span>
          </div>
        </div>

        {reward.loot?.length > 0 && (
          <div className="kill-loot">
            <div className="kill-loot-label">🎁 Loot Drop!</div>
            {reward.loot.map(itemId => {
              const item = getItemById(itemId);
              if (!item) return null;
              const rarity = RARITY_COLORS[item.rarity] || RARITY_COLORS.common;
              return (
                <div key={itemId} className="loot-item" style={{ borderColor: rarity.color, background: rarity.bg }}>
                  <span className="loot-icon">{item.icon}</span>
                  <div>
                    <div className="loot-name" style={{ color: rarity.color }}>{item.name}</div>
                    <div className="loot-flavor">{item.flavor}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <button className="btn btn-primary" style={{ width: '100%', marginTop: 16 }} onClick={onDismiss}>
          Onward! →
        </button>
      </div>

      <style>{`
        .kill-modal {
          background: var(--bg-elevated);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-xl);
          padding: 28px;
          width: 100%;
          max-width: 380px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: var(--shadow-lg), 0 0 40px rgba(245,200,66,0.1);
        }
        .kill-header { text-align: center; }
        .kill-title { font-size: 1.3rem; color: var(--text-primary); }
        .kill-title-boss { font-size: 1.5rem; color: var(--gold); text-shadow: 0 0 20px var(--gold-glow); }
        .kill-monster { color: var(--text-muted); font-size: 0.9rem; margin-top: 4px; font-style: italic; }
        .kill-rewards { display: flex; gap: 10px; justify-content: center; }
        .kill-reward-chip {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 16px; border-radius: var(--radius-full);
          font-size: 0.9rem; font-weight: 800;
        }
        .kill-reward-chip.gold { background: var(--gold-dim); color: var(--gold); border: 1px solid var(--gold-glow); }
        .kill-reward-chip.xp   { background: var(--xp-blue-dim); color: var(--xp-blue); border: 1px solid rgba(79,195,247,0.3); }
        .kill-loot { display: flex; flex-direction: column; gap: 8px; }
        .kill-loot-label { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); }
        .loot-item { display: flex; gap: 10px; align-items: center; padding: 10px; border-radius: var(--radius-md); border: 1px solid; }
        .loot-icon { font-size: 1.4rem; }
        .loot-name { font-size: 0.85rem; font-weight: 700; }
        .loot-flavor { font-size: 0.72rem; color: var(--text-muted); font-style: italic; margin-top: 2px; }
      `}</style>
    </div>
  );
}

// ── Offline Gains Modal ────────────────────────────────────
export function OfflineGainsModal({ gains, onDismiss }) {
  if (!gains) return null;
  return (
    <div className="modal-overlay" onClick={onDismiss}>
      <div className="offline-modal scale-in" onClick={e => e.stopPropagation()}>
        <div className="offline-icon">🌙</div>
        <div className="offline-title font-display">Welcome Back!</div>
        <div className="offline-sub">
          Your hero kept fighting for {gains.hours}h while you were away.
        </div>
        <div className="offline-rewards">
          <div className="offline-chip dmg">
            <span>⚔</span><span>{gains.damage.toLocaleString()} damage dealt</span>
          </div>
          {gains.gold > 0 && (
            <div className="offline-chip gold">
              <span>💰</span><span>+{gains.gold} gold earned</span>
            </div>
          )}
        </div>
        <div className="offline-note">
          Idle efficiency is 50% — active play is always stronger.
        </div>
        <button className="btn btn-primary" style={{ width: '100%', marginTop: 8 }} onClick={onDismiss}>
          Let's go! ⚔
        </button>
      </div>

      <style>{`
        .offline-modal {
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
          padding: 28px;
          width: 100%;
          max-width: 340px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          box-shadow: var(--shadow-lg);
        }
        .offline-icon { font-size: 2.5rem; }
        .offline-title { font-size: 1.4rem; color: var(--xp-blue); }
        .offline-sub { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; }
        .offline-rewards { display: flex; flex-direction: column; gap: 8px; width: 100%; }
        .offline-chip {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 16px; border-radius: var(--radius-md);
          font-size: 0.85rem; font-weight: 700;
          justify-content: center;
        }
        .offline-chip.dmg  { background: rgba(255,101,132,0.12); color: var(--coral); border: 1px solid rgba(255,101,132,0.25); }
        .offline-chip.gold { background: var(--gold-dim); color: var(--gold); border: 1px solid var(--gold-glow); }
        .offline-note { font-size: 0.72rem; color: var(--text-muted); font-style: italic; }
      `}</style>
    </div>
  );
}
