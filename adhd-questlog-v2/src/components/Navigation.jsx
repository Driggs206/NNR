// ============================================================
// NAVIGATION — Desktop sidebar + mobile bottom tab bar
// ============================================================

import React from 'react';
import Avatar from './Avatar';

const NAV_ITEMS = [
  { id: 'dashboard',  icon: '⚔️',  label: 'Quests' },
  { id: 'focus',      icon: '🔮',  label: 'Focus' },
  { id: 'social',     icon: '👥',  label: 'Social' },
  { id: 'mpquests',   icon: '🌟',  label: 'Co-op' },
  { id: 'inventory',  icon: '🎒',  label: 'Gear' },
  { id: 'shop',       icon: '🛒',  label: 'Shop' },
  { id: 'rewards',    icon: '✨',  label: 'Rewards' },
  { id: 'talents',    icon: '🌟',  label: 'Talents' },
  { id: 'settings',   icon: '⚙️',  label: 'Settings' },
];

export default function Navigation({ user, activeView, onNavigate, pendingCount, newLoot = false, onSignOut, syncStatus, friendRequests = 0, wallBadge = 0 }) {
  const xpPercent = Math.round((user.xp / user.xpToNext) * 100);

  const badge = (item) => {
    if (item.id === 'dashboard' && pendingCount > 0) return pendingCount;
    if (item.id === 'talents' && user.talentPoints > 0) return '!';
    if (item.id === 'inventory' && newLoot) return '●';
    if (item.id === 'social' && (friendRequests > 0 || wallBadge > 0)) return friendRequests + wallBadge;
    return null;
  };

  return (
    <>
      {/* ── Desktop sidebar ─────────────────────────── */}
      <nav className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon">⚔</div>
          <div>
            <div className="logo-title">Dopamine Quest</div>
            <div className="logo-sub">ADHD Task Manager</div>
          </div>
        </div>

        <div className="sidebar-profile">
          <Avatar
            avatarId={user.avatarId}
            displayName={user.displayName}
            size={42}
          />
          <div className="profile-info">
            <div className="profile-name">{user.displayName}</div>
            <div className="profile-title">{user.title}</div>
          </div>
        </div>

        <div className="sidebar-stats">
          {[
            { icon: '⚡', label: 'Level', value: user.level, color: 'var(--xp-blue)' },
            { icon: '💰', label: 'Gold',  value: user.gold,  color: 'var(--gold)' },
            { icon: '🔥', label: 'Streak', value: `${user.streak}d`, color: 'var(--amber)' },
          ].map(s => (
            <div key={s.label} className="stat-chip">
              <span className="stat-icon">{s.icon}</span>
              <div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar-xp">
          <div className="sidebar-xp-labels">
            <span className="text-secondary text-xs">XP</span>
            <span className="text-xs" style={{ color: 'var(--xp-blue)' }}>{user.xp}/{user.xpToNext}</span>
          </div>
          <div className="xp-bar-track">
            <div className="xp-bar-fill" style={{ width: `${xpPercent}%` }} />
          </div>
          <div className="text-xs text-muted" style={{ marginTop: 3 }}>
            {user.xpToNext - user.xp} to Lv.{user.level + 1}
          </div>
        </div>

        <div className="sidebar-nav">
          {NAV_ITEMS.map(item => {
            const b = badge(item);
            return (
              <button
                key={item.id}
                className={`nav-item ${activeView === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                {b && <span className={`nav-badge ${item.id === 'inventory' ? 'loot-badge' : item.id === 'talents' ? 'talent-badge' : ''}`}>{b}</span>}
              </button>
            );
          })}

          {/* Sync status + sign out */}
          <div className="sidebar-footer">
            {syncStatus && syncStatus !== 'idle' && (
              <div className={`sync-status ${syncStatus}`}>
                {syncStatus === 'syncing' && '⟳ Syncing...'}
                {syncStatus === 'synced'  && '✓ Saved'}
                {syncStatus === 'error'   && '⚠ Sync error'}
              </div>
            )}
            {onSignOut && (
              <button className="signout-btn" onClick={onSignOut}>
                ↩ Sign out
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ── Mobile bottom tab bar ───────────────────── */}
      <nav className="bottom-nav">
        {NAV_ITEMS.map(item => {
          const b = badge(item);
          return (
            <button
              key={item.id}
              className={`bottom-tab ${activeView === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="bottom-tab-icon">{item.icon}</span>
              <span className="bottom-tab-label">{item.label}</span>
              {b && <span className="bottom-tab-badge">{b}</span>}
            </button>
          );
        })}
      </nav>

      <style>{`
        /* ── Desktop sidebar ── */
        .sidebar {
          width: 220px;
          flex-shrink: 0;
          background: var(--bg-surface);
          border-right: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          padding: var(--space-5) var(--space-4);
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding-bottom: var(--space-4);
          border-bottom: 1px solid var(--border-subtle);
        }
        .logo-icon {
          font-size: 1.3rem;
          width: 36px; height: 36px;
          background: var(--gold-dim);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-family: var(--font-display);
          color: var(--gold);
        }
        .logo-title { font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: var(--gold); }
        .logo-sub { font-size: 0.6rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }

        .sidebar-profile {
          display: flex; align-items: center; gap: var(--space-2);
          background: var(--bg-card); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md); padding: var(--space-2) var(--space-3);
        }
        .profile-avatar {
          width: 32px; height: 32px;
          background: linear-gradient(135deg, var(--purple), var(--xp-blue));
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem; font-weight: 800; color: white; flex-shrink: 0;
        }
        .profile-name  { font-size: 0.82rem; font-weight: 700; color: var(--text-primary); }
        .profile-title { font-size: 0.65rem; color: var(--purple); font-style: italic; }

        .sidebar-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2); }
        .stat-chip {
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          background: var(--bg-card); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md); padding: var(--space-2) 4px; text-align: center;
        }
        .stat-icon { font-size: 0.9rem; }
        .stat-label { font-size: 0.58rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; }
        .stat-value { font-size: 0.85rem; font-weight: 800; }

        .sidebar-xp { display: flex; flex-direction: column; gap: var(--space-1); }
        .sidebar-xp-labels { display: flex; justify-content: space-between; align-items: center; }

        .sidebar-nav { display: flex; flex-direction: column; gap: 2px; flex: 1; }
        .nav-item {
          display: flex; align-items: center; gap: var(--space-3);
          padding: var(--space-2) var(--space-3); border-radius: var(--radius-md);
          background: transparent; color: var(--text-secondary);
          font-size: 0.85rem; font-weight: 600; font-family: var(--font-body);
          width: 100%; text-align: left;
          transition: all 0.15s; position: relative;
          min-height: 40px;
        }
        .nav-item:hover { background: var(--bg-elevated); color: var(--text-primary); }
        .nav-item.active { background: var(--gold-dim); color: var(--gold); border: 1px solid var(--gold-glow); }
        .nav-icon  { font-size: 1rem; }
        .nav-label { flex: 1; }
        .nav-badge {
          background: var(--coral); color: white;
          border-radius: var(--radius-full); min-width: 18px; height: 18px;
          padding: 0 5px; display: inline-flex; align-items: center; justify-content: center;
          font-size: 0.65rem; font-weight: 800;
        }
        .talent-badge { background: var(--purple); }
        .loot-badge   { background: var(--gold); color: var(--text-inverse); }

        .sidebar-footer {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: auto;
          padding-top: var(--space-3);
          border-top: 1px solid var(--border-subtle);
        }

        .sync-status {
          font-size: 0.65rem;
          font-weight: 700;
          text-align: center;
          padding: 3px 8px;
          border-radius: var(--radius-full);
          letter-spacing: 0.04em;
        }
        .sync-status.syncing { color: var(--amber);    background: var(--amber-dim); }
        .sync-status.synced  { color: var(--green);    background: var(--green-dim); }
        .sync-status.error   { color: var(--coral);    background: var(--coral-dim); }

        .signout-btn {
          font-size: 0.72rem;
          font-weight: 700;
          font-family: var(--font-body);
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-3);
          cursor: pointer;
          transition: all 0.15s;
          width: 100%;
          text-align: left;
        }
        .signout-btn:hover {
          background: var(--coral-dim);
          color: var(--coral);
          border-color: rgba(255,101,132,0.3);
        }

        /* ── Mobile bottom nav ── */
        .bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 90;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          padding-bottom: env(safe-area-inset-bottom, 0);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .bottom-tab {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: 8px 4px;
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-body);
          cursor: pointer;
          transition: all 0.15s;
          position: relative;
          min-height: 56px;
          /* Ensure touch target */
          min-width: 44px;
        }

        .bottom-tab.active {
          color: var(--gold);
        }

        .bottom-tab.active .bottom-tab-icon {
          filter: drop-shadow(0 0 6px var(--gold-glow));
        }

        .bottom-tab-icon  { font-size: 1.3rem; line-height: 1; }
        .bottom-tab-label { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.02em; }

        .bottom-tab-badge {
          position: absolute;
          top: 6px;
          right: calc(50% - 16px);
          background: var(--coral);
          color: white;
          border-radius: var(--radius-full);
          min-width: 16px;
          height: 16px;
          padding: 0 4px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.58rem;
          font-weight: 800;
          border: 1px solid var(--bg-surface);
        }

        @media (max-width: 768px) {
          .sidebar      { display: none; }
          .bottom-nav   { display: flex; }
        }

        @media (min-width: 769px) {
          .bottom-nav { display: none; }
        }
      `}</style>
    </>
  );
}
