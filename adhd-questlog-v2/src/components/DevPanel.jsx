// ============================================================
// DEV PANEL — Cheat panel for testing. Disable via devConfig.js
// ============================================================

import React, { useState } from 'react';
import { DEV_MODE, DEV_CHEATS } from '../devConfig';

export default function DevPanel({ onAddGold, onInstantKill }) {
  const [open, setOpen] = useState(false);
  const [flashMsg, setFlashMsg] = useState('');

  if (!DEV_MODE) return null;

  function flash(msg) {
    setFlashMsg(msg);
    setTimeout(() => setFlashMsg(''), 1500);
  }

  function handleGoldSmall() {
    onAddGold(DEV_CHEATS.goldSmall);
    flash(`+${DEV_CHEATS.goldSmall} gold`);
  }

  function handleGoldLarge() {
    onAddGold(DEV_CHEATS.goldLarge);
    flash(`+${DEV_CHEATS.goldLarge} gold`);
  }

  function handleInstantKill() {
    onInstantKill();
    flash('Monster slain!');
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        className="dev-toggle"
        onClick={() => setOpen(o => !o)}
        title="Dev Panel (disable in devConfig.js)"
      >
        🛠
      </button>

      {open && (
        <div className="dev-panel">
          <div className="dev-header">
            <span className="dev-title">🛠 DEV MODE</span>
            <span className="dev-hint">Set DEV_MODE=false to hide</span>
            <button className="dev-close" onClick={() => setOpen(false)}>×</button>
          </div>

          {flashMsg && (
            <div className="dev-flash">{flashMsg}</div>
          )}

          <div className="dev-actions">
            <button className="dev-btn gold" onClick={handleGoldSmall}>
              💰 +{DEV_CHEATS.goldSmall} Gold
            </button>
            <button className="dev-btn gold-big" onClick={handleGoldLarge}>
              💰💰 +{DEV_CHEATS.goldLarge} Gold
            </button>
            <button className="dev-btn kill" onClick={handleInstantKill}>
              ☠ Instant Kill
            </button>
          </div>

          <div className="dev-note">
            Edit <code>src/devConfig.js</code> to configure or disable.
          </div>
        </div>
      )}

      <style>{`
        .dev-toggle {
          position: fixed;
          bottom: 80px;
          right: 12px;
          z-index: 600;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 56, 96, 0.2);
          border: 1px solid rgba(255, 56, 96, 0.5);
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          transition: all 0.2s;
          backdrop-filter: blur(4px);
        }
        .dev-toggle:hover {
          background: rgba(255, 56, 96, 0.35);
          transform: scale(1.1);
        }

        .dev-panel {
          position: fixed;
          bottom: 128px;
          right: 12px;
          z-index: 600;
          width: 220px;
          background: var(--bg-elevated);
          border: 1px solid rgba(255,56,96,0.4);
          border-radius: var(--radius-lg);
          padding: 12px;
          box-shadow: var(--shadow-lg), 0 0 20px rgba(255,56,96,0.1);
          display: flex;
          flex-direction: column;
          gap: 10px;
          animation: fadeInUp 0.2s var(--ease-spring);
        }

        .dev-header {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .dev-title {
          font-size: 0.78rem;
          font-weight: 800;
          color: #FF3860;
          font-family: var(--font-display);
          letter-spacing: 0.05em;
        }

        .dev-hint {
          font-size: 0.6rem;
          color: var(--text-muted);
          flex: 1;
        }

        .dev-close {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 1rem;
          cursor: pointer;
          line-height: 1;
          padding: 0;
          margin-left: auto;
        }
        .dev-close:hover { color: var(--text-primary); }

        .dev-flash {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--green);
          text-align: center;
          background: var(--green-dim);
          border: 1px solid rgba(92,221,139,0.3);
          border-radius: var(--radius-md);
          padding: 4px 8px;
          animation: scaleIn 0.2s var(--ease-spring);
        }

        .dev-actions {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .dev-btn {
          font-size: 0.78rem;
          font-weight: 700;
          font-family: var(--font-body);
          padding: 8px 12px;
          border-radius: var(--radius-md);
          cursor: pointer;
          border: 1px solid;
          transition: all 0.15s;
          text-align: left;
        }

        .dev-btn.gold {
          background: var(--gold-dim);
          border-color: var(--gold-glow);
          color: var(--gold);
        }
        .dev-btn.gold:hover { background: rgba(245,200,66,0.25); }

        .dev-btn.gold-big {
          background: rgba(245,200,66,0.08);
          border-color: var(--gold-glow);
          color: var(--gold);
        }
        .dev-btn.gold-big:hover { background: rgba(245,200,66,0.2); }

        .dev-btn.kill {
          background: var(--coral-dim);
          border-color: rgba(255,101,132,0.4);
          color: var(--coral);
        }
        .dev-btn.kill:hover { background: rgba(255,101,132,0.25); }

        .dev-note {
          font-size: 0.62rem;
          color: var(--text-muted);
          line-height: 1.4;
          padding-top: 4px;
          border-top: 1px solid var(--border-subtle);
        }

        .dev-note code {
          font-family: monospace;
          color: var(--coral);
          font-size: 0.68rem;
        }

        @media (max-width: 480px) {
          .dev-toggle { bottom: 76px; right: 8px; }
          .dev-panel  { bottom: 122px; right: 8px; width: 200px; }
        }
      `}</style>
    </>
  );
}
