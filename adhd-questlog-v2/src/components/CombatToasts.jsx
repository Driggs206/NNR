// ============================================================
// COMBAT TOASTS — Non-blocking kill/loot/offline notifications
// + expandable combat log
// ============================================================

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { getItemById, RARITY_COLORS } from '../data/items';

// ─── useToastLog ──────────────────────────────────────────
// Manages a queue of auto-dismissing toasts + persistent log
// ─────────────────────────────────────────────────────────

export function useToastLog() {
  const [toasts, setToasts]   = useState([]);
  const [log, setLog]         = useState([]);
  const counterRef            = useRef(0);

  const addToast = useCallback((entry) => {
    const id = `toast-${Date.now()}-${counterRef.current++}`;
    const toast = { ...entry, id, ts: Date.now() };

    setToasts(prev => [...prev.slice(-3), toast]); // max 4 visible
    setLog(prev => [toast, ...prev].slice(0, 60));  // keep last 60

    // Auto-dismiss after duration
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, entry.duration || 3500);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return { toasts, log, addToast, dismissToast };
}

// ─── ToastStack ───────────────────────────────────────────
// Renders stacked slide-in toasts in top-right corner

export function ToastStack({ toasts, onDismiss }) {
  return (
    <div className="toast-stack">
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}

      <style>{`
        .toast-stack {
          position: fixed;
          top: 12px;
          right: 12px;
          z-index: 500;
          display: flex;
          flex-direction: column;
          gap: 8px;
          pointer-events: none;
          max-width: 300px;
          width: calc(100vw - 24px);
        }
        @media (min-width: 480px) {
          .toast-stack { width: 300px; }
        }
      `}</style>
    </div>
  );
}

function ToastItem({ toast, onDismiss }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const typeStyles = {
    kill:    { border: 'var(--coral)', bg: 'rgba(255,101,132,0.12)',  icon: '☠' },
    boss:    { border: 'var(--gold)',  bg: 'rgba(245,200,66,0.14)',   icon: '👑' },
    loot:    { border: 'var(--green)', bg: 'rgba(92,221,139,0.12)',   icon: '🎁' },
    offline: { border: 'var(--xp-blue)', bg: 'rgba(79,195,247,0.1)', icon: '🌙' },
    level:   { border: 'var(--gold)',  bg: 'rgba(245,200,66,0.14)',   icon: '⭐' },
    default: { border: 'var(--border-default)', bg: 'var(--bg-elevated)', icon: '✦' },
  };

  const style = typeStyles[toast.type] || typeStyles.default;

  return (
    <div
      className={`toast-item ${visible ? 'visible' : ''}`}
      style={{ borderColor: style.border, background: style.bg }}
      onClick={() => onDismiss(toast.id)}
    >
      <span className="toast-icon">{toast.icon || style.icon}</span>
      <div className="toast-body">
        <div className="toast-title">{toast.title}</div>
        {toast.sub && <div className="toast-sub">{toast.sub}</div>}
        {toast.loot?.length > 0 && (
          <div className="toast-loot">
            {toast.loot.map(itemId => {
              const item = getItemById(itemId);
              if (!item) return null;
              const rarity = RARITY_COLORS[item.rarity] || RARITY_COLORS.common;
              return (
                <span key={itemId} className="toast-loot-chip" style={{ color: rarity.color, borderColor: rarity.color }}>
                  {item.icon} {item.name}
                </span>
              );
            })}
          </div>
        )}
      </div>
      <div className="toast-progress" style={{ '--dur': `${(toast.duration || 3500)}ms` }} />
    </div>
  );
}

// ─── CombatLog ────────────────────────────────────────────
// Expandable recent-events log, lives inside CombatStrip

export function CombatLog({ log }) {
  const [open, setOpen] = useState(false);

  const recent = log.slice(0, 8);

  return (
    <div className="combat-log-wrap">
      <button
        className={`log-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen(o => !o)}
        title="Combat log"
      >
        📜 Log {log.length > 0 && <span className="log-count">{log.length}</span>}
      </button>

      {open && (
        <div className="combat-log-panel">
          <div className="clp-header">
            <span className="font-display" style={{fontSize:'0.75rem',color:'var(--gold)'}}>Combat Log</span>
            <button className="btn btn-ghost" style={{fontSize:'0.8rem',padding:'2px 6px'}} onClick={() => setOpen(false)}>×</button>
          </div>
          {recent.length === 0 ? (
            <div className="clp-empty">No events yet.</div>
          ) : (
            recent.map(entry => (
              <div key={entry.id} className="clp-entry">
                <span className="clp-icon">{entry.icon || '✦'}</span>
                <div className="clp-content">
                  <span className="clp-title">{entry.title}</span>
                  {entry.sub && <span className="clp-sub"> — {entry.sub}</span>}
                </div>
                <span className="clp-time">{formatAge(entry.ts)}</span>
              </div>
            ))
          )}
        </div>
      )}

      <style>{`
        .combat-log-wrap { position: relative; }

        .log-toggle {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.65rem;
          font-weight: 700;
          font-family: var(--font-body);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          color: var(--text-muted);
          padding: 3px 8px;
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
        }
        .log-toggle:hover, .log-toggle.open {
          border-color: var(--border-default);
          color: var(--text-secondary);
        }

        .log-count {
          background: var(--coral);
          color: white;
          border-radius: var(--radius-full);
          padding: 0 4px;
          font-size: 0.6rem;
          font-weight: 800;
        }

        .combat-log-panel {
          position: fixed;
          bottom: calc(64px + env(safe-area-inset-bottom, 0px) + 8px);
          right: 8px;
          width: min(280px, calc(100vw - 16px));
          max-height: 240px;
          overflow-y: auto;
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          z-index: 200;
          animation: fadeInUp 0.2s var(--ease-out);
        }

        @media (min-width: 769px) {
          .combat-log-panel {
            position: absolute;
            bottom: calc(100% + 8px);
            right: 0;
            width: 280px;
          }
        }

        .clp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px 6px;
          border-bottom: 1px solid var(--border-subtle);
          position: sticky;
          top: 0;
          background: var(--bg-elevated);
        }

        .clp-empty {
          padding: 16px;
          text-align: center;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .clp-entry {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 7px 12px;
          border-bottom: 1px solid var(--border-subtle);
          font-size: 0.75rem;
        }
        .clp-entry:last-child { border-bottom: none; }

        .clp-icon { font-size: 0.85rem; flex-shrink: 0; margin-top: 1px; }
        .clp-content { flex: 1; line-height: 1.4; }
        .clp-title { color: var(--text-secondary); font-weight: 600; }
        .clp-sub   { color: var(--text-muted); }
        .clp-time  { color: var(--text-muted); font-size: 0.65rem; white-space: nowrap; flex-shrink: 0; }

        /* Toast styles */
        .toast-item {
          pointer-events: all;
          background: var(--bg-elevated);
          border: 1px solid;
          border-radius: var(--radius-lg);
          padding: 10px 12px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          box-shadow: var(--shadow-md);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.25s var(--ease-out), transform 0.25s var(--ease-spring);
        }

        .toast-item.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .toast-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }

        .toast-body { flex: 1; min-width: 0; }
        .toast-title { font-size: 0.82rem; font-weight: 700; color: var(--text-primary); line-height: 1.3; }
        .toast-sub   { font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px; }

        .toast-loot {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 5px;
        }

        .toast-loot-chip {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: var(--radius-full);
          border: 1px solid;
          background: rgba(0,0,0,0.2);
        }

        /* Progress bar that shrinks as toast expires */
        .toast-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background: currentColor;
          opacity: 0.3;
          transform-origin: left;
          animation: toastExpire var(--dur, 3500ms) linear forwards;
        }

        @keyframes toastExpire {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
      `}</style>
    </div>
  );
}

// ─── Helper ───────────────────────────────────────────────
function formatAge(ts) {
  const s = Math.round((Date.now() - ts) / 1000);
  if (s < 60)  return `${s}s ago`;
  if (s < 3600) return `${Math.round(s/60)}m ago`;
  return `${Math.round(s/3600)}h ago`;
}
