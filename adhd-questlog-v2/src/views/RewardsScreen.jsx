// ============================================================
// REWARDS SCREEN — Stats, badge showcase (pick + display),
//                  completion history
// ============================================================

import React, { useState, useEffect, useCallback } from 'react';
import { fetchBadges, setShowcaseBadge, awardBadge, updateAvatar } from '../lib/db';
import { isSupabaseReady } from '../lib/supabase';
import AvatarPicker from '../components/AvatarPicker';
import Avatar from '../components/Avatar';

// ── Badge catalog — single source of truth ────────────────
export const BADGE_CATALOG = {
  first_quest:        { icon: '⚔️', name: 'First Quest',       desc: 'Completed your first task',            type: 'solo' },
  week_streak:        { icon: '🔥', name: 'Week Warrior',      desc: '7-day streak',                         type: 'solo' },
  focus_ten:          { icon: '🔮', name: 'Deep Thinker',      desc: '10 focus sessions completed',          type: 'solo' },
  early_bird:         { icon: '🌅', name: 'Early Bird',        desc: 'Completed a task before 9am',          type: 'solo' },
  level_5:            { icon: '⭐', name: 'Rising Star',       desc: 'Reached Level 5',                      type: 'solo' },
  hundred_tasks:      { icon: '🏆', name: 'Century',           desc: 'Completed 100 tasks',                  type: 'solo' },
  first_friend:       { icon: '🤝', name: 'Not Alone',         desc: 'Added your first friend',              type: 'social' },
  boost_given:        { icon: '💙', name: 'Good Energy',       desc: 'Sent a focus boost to a friend',       type: 'social' },
  boost_received:     { icon: '✨', name: 'Supported',         desc: 'Received a focus boost mid-session',   type: 'social' },
  quest_complete:     { icon: '🌟', name: 'Team Player',       desc: 'Completed a multiplayer quest',        type: 'multiplayer' },
  quest_mvp:          { icon: '👑', name: 'Quest MVP',         desc: 'Top contributor on a multiplayer quest', type: 'multiplayer' },
};

const TYPE_LABELS = { solo: 'Solo', social: 'Social', multiplayer: 'Multiplayer' };
const TYPE_COLORS = {
  solo:        { color: 'var(--xp-blue)',  bg: 'var(--xp-blue-dim)' },
  social:      { color: 'var(--purple)',   bg: 'var(--purple-dim)'  },
  multiplayer: { color: 'var(--gold)',     bg: 'var(--gold-dim)'    },
};

// ── Badge tile ────────────────────────────────────────────
function BadgeTile({ badgeId, earned, showcased, onToggleShowcase, canShowcase }) {
  const meta = BADGE_CATALOG[badgeId];
  if (!meta) return null;
  const tc = TYPE_COLORS[meta.type] || TYPE_COLORS.solo;

  return (
    <div
      className={`badge-tile ${earned ? 'earned' : 'locked'} ${showcased ? 'showcased' : ''}`}
      style={earned ? { '--bc': tc.color, '--bb': tc.bg } : {}}
      onClick={() => {
        if (!earned || !isSupabaseReady) return;
        if (showcased) {
          onToggleShowcase(badgeId, false); // remove
        } else if (canShowcase) {
          onToggleShowcase(badgeId, true);  // add if slot free
        }
        // if showcase full and not currently showcased — do nothing (slots panel handles remove)
      }}
      title={
        !earned      ? 'Not yet earned' :
        showcased    ? 'Click to remove from showcase' :
        canShowcase  ? 'Click to add to showcase' :
        'Showcase full — remove a badge above first'
      }
    >
      <div className="bt-icon-wrap">
        <span className="bt-icon">{meta.icon}</span>
        {!earned && <span className="bt-lock">🔒</span>}
        {showcased && <span className="bt-star">★</span>}
      </div>
      <div className="bt-name">{meta.name}</div>
      <div className="bt-desc">{meta.desc}</div>
      {earned && (
        <div className="bt-type-badge" style={{ color: tc.color, background: tc.bg }}>
          {TYPE_LABELS[meta.type]}
        </div>
      )}
    </div>
  );
}

// ── Showcase strip ────────────────────────────────────────
function BadgeShowcase({ showcasedIds }) {
  if (showcasedIds.length === 0) return null;
  return (
    <div className="showcase-strip">
      <div className="showcase-label">✦ Showcased</div>
      <div className="showcase-badges">
        {showcasedIds.map(id => {
          const meta = BADGE_CATALOG[id];
          if (!meta) return null;
          return (
            <div key={id} className="showcase-chip" title={meta.name}>
              <span>{meta.icon}</span>
              <span className="showcase-chip-name">{meta.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Main screen ───────────────────────────────────────────
export default function RewardsScreen({ user, history, userId, onAvatarChange }) {
  const [earnedBadges, setEarnedBadges]     = useState([]); // from Supabase
  const [badgesLoading, setBadgesLoading]   = useState(false);
  const [showcaseLimit]                     = useState(5);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [localEarned]                       = useState(['first_quest', 'week_streak']); // fallback when offline

  const totalXPEarned   = history.reduce((sum, h) => sum + (h.xpEarned || 0), 0);
  const xpPercent       = Math.round((user.xp / user.xpToNext) * 100);

  // ── Load badges from Supabase ───────────────────────────
  useEffect(() => {
    if (!userId || !isSupabaseReady) return;
    setBadgesLoading(true);
    fetchBadges(userId).then(data => {
      setEarnedBadges(data || []);
      setBadgesLoading(false);
    });
  }, [userId]);

  const earnedIds    = isSupabaseReady
    ? new Set(earnedBadges.map(b => b.badge_id))
    : new Set(localEarned);

  const showcasedIds = earnedBadges
    .filter(b => b.showcased)
    .map(b => b.badge_id)
    .slice(0, showcaseLimit);

  const canAddToShowcase = showcasedIds.length < showcaseLimit;

  const handleToggleShowcase = useCallback(async (badgeId, newVal) => {
    if (!userId || !isSupabaseReady) return;
    setEarnedBadges(prev => prev.map(b =>
      b.badge_id === badgeId ? { ...b, showcased: newVal } : b
    ));
    await setShowcaseBadge(userId, badgeId, newVal);
  }, [userId]);

  const handleAvatarChange = useCallback(async (avatarId) => {
    if (onAvatarChange) onAvatarChange(avatarId);
    if (userId && isSupabaseReady) await updateAvatar(userId, avatarId);
  }, [userId, onAvatarChange]);

  const allBadgeIds = Object.keys(BADGE_CATALOG);

  return (
    <div className="rewards-screen">
      {/* Hero */}
      <div className="rewards-hero">
        <div className="rewards-avatar-wrap">
          <Avatar
            avatarId={user.avatarId}
            displayName={user.displayName}
            size={90}
            onClick={() => setShowAvatarPicker(true)}
          />
          <button className="change-avatar-btn" onClick={() => setShowAvatarPicker(true)}>
            ✎
          </button>
          <div className="rewards-level-badge font-display">{user.level}</div>
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
          { icon: '⚡', label: 'Level',          value: user.level,                     color: 'var(--xp-blue)' },
          { icon: '💰', label: 'Gold',            value: user.gold.toLocaleString(),     color: 'var(--gold)'    },
          { icon: '🔥', label: 'Streak',          value: `${user.streak}d`,             color: 'var(--amber)'   },
          { icon: '✅', label: 'Tasks Done',      value: history.length,                color: 'var(--green)'   },
          { icon: '🌟', label: 'Total XP',        value: totalXPEarned.toLocaleString(), color: 'var(--purple)' },
          { icon: '🎯', label: 'Talent Points',   value: user.talentPoints,             color: 'var(--coral)'   },
        ].map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-card-icon" style={{color: s.color}}>{s.icon}</div>
            <div className="stat-card-value" style={{color: s.color}}>{s.value}</div>
            <div className="stat-card-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Badge Showcase */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title font-display">Badges</h2>
        </div>

        {/* Showcase slots - always visible, shows filled/empty state */}
        <div className="showcase-manager">
          <div className="showcase-manager-header">
            <span className="showcase-manager-title">✦ Your Showcase</span>
            <span className="showcase-manager-count">
              {showcasedIds.length} / {showcaseLimit} slots filled
            </span>
          </div>
          <div className="showcase-slots-row">
            {Array.from({ length: showcaseLimit }).map((_, i) => {
              const badgeId = showcasedIds[i];
              const meta    = badgeId ? BADGE_CATALOG[badgeId] : null;
              return (
                <div
                  key={i}
                  className={`showcase-slot ${badgeId ? 'filled' : 'empty'}`}
                  onClick={() => badgeId && handleToggleShowcase(badgeId, false)}
                  title={badgeId ? `${meta?.name} — click to remove` : 'Empty slot'}
                >
                  {meta ? (
                    <>
                      <span className="ss-icon">{meta.icon}</span>
                      <span className="ss-remove">✕</span>
                    </>
                  ) : (
                    <span className="ss-empty-icon">+</span>
                  )}
                </div>
              );
            })}
          </div>
          {isSupabaseReady && (
            <div className="showcase-instruction">
              {showcasedIds.length < showcaseLimit
                ? '↓ Tap any earned badge below to add it to your showcase'
                : '✓ Showcase full — tap a badge above to remove it, or a badge below to swap'}
            </div>
          )}
        </div>

        {badgesLoading ? (
          <div className="badges-loading">⟳ Loading badges...</div>
        ) : (
          <div className="badges-grid">
            {allBadgeIds.map(id => (
              <BadgeTile
                key={id}
                badgeId={id}
                earned={earnedIds.has(id)}
                showcased={showcasedIds.includes(id)}
                onToggleShowcase={handleToggleShowcase}
                canShowcase={canAddToShowcase || showcasedIds.includes(id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* History */}
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

      {/* Avatar picker modal */}
      {showAvatarPicker && (
        <AvatarPicker
          currentAvatar={user.avatarId || 'the_planner'}
          earnedBadgeIds={earnedBadges.map(b => b.badge_id)}
          onSelect={handleAvatarChange}
          onClose={() => setShowAvatarPicker(false)}
        />
      )}

      <style>{`
        .rewards-screen {
          padding: var(--space-6) var(--space-6) var(--space-8);
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
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

        .rewards-avatar-wrap {
          position: relative;
          flex-shrink: 0;
          width: 90px;
          height: 90px;
        }

        .rewards-level-badge {
          position: absolute;
          bottom: -4px;
          right: -4px;
          background: linear-gradient(135deg, var(--gold), var(--amber));
          color: var(--text-inverse);
          font-size: 0.85rem;
          font-weight: 800;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--bg-elevated);
          box-shadow: 0 0 8px var(--gold-glow);
          z-index: 1;
        }

        .change-avatar-btn {
          position: absolute;
          top: -4px;
          right: -4px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          border-radius: 50%;
          width: 26px;
          height: 26px;
          font-size: 0.7rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all 0.15s;
          z-index: 2;
        }
        .change-avatar-btn:hover {
          background: var(--purple-dim);
          color: var(--purple);
          border-color: rgba(179,157,219,0.4);
        }

        .rewards-hero-info { flex: 1; display: flex; flex-direction: column; gap: var(--space-3); }
        .rewards-name { font-size: 1.5rem; color: var(--text-primary); }
        .rewards-title-text { font-size: 0.85rem; color: var(--purple); font-style: italic; }
        .xp-section { display: flex; flex-direction: column; gap: var(--space-1); }
        .xp-section-labels { display: flex; justify-content: space-between; }

        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3); }
        .stat-card {
          background: var(--bg-card); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg); padding: var(--space-5);
          display: flex; flex-direction: column; align-items: center; gap: var(--space-2); text-align: center;
          transition: all 0.2s;
        }
        .stat-card:hover { border-color: var(--border-default); transform: translateY(-2px); box-shadow: var(--shadow-sm); }
        .stat-card-icon  { font-size: 1.5rem; }
        .stat-card-value { font-size: 1.5rem; font-weight: 800; font-family: var(--font-display); line-height: 1; }
        .stat-card-label { font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }

        /* ── Sections ── */
        .section { display: flex; flex-direction: column; gap: var(--space-4); }
        .section-header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-2); }
        .section-title { font-size: 1rem; letter-spacing: 0.05em; color: var(--text-secondary); }

        .showcase-hint {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-style: italic;
        }

        /* ── Showcase strip ── */
        .showcase-strip {
          background: linear-gradient(135deg, var(--bg-elevated), rgba(245,200,66,0.04));
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-lg);
          padding: var(--space-4) var(--space-5);
          display: flex;
          align-items: center;
          gap: var(--space-4);
          flex-wrap: wrap;
          animation: fadeInUp 0.3s var(--ease-out);
        }

        .showcase-label {
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--gold);
          flex-shrink: 0;
        }

        .showcase-badges { display: flex; flex-wrap: wrap; gap: var(--space-2); }

        .showcase-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: var(--gold-dim);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-full);
          padding: 4px 10px;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--gold);
        }

        .showcase-chip-name { font-size: 0.72rem; }

        /* ── Showcase manager ── */
        .showcase-manager {
          background: linear-gradient(135deg, var(--bg-elevated), rgba(245,200,66,0.03));
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-xl);
          padding: var(--space-5);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .showcase-manager-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .showcase-manager-title {
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--gold);
        }

        .showcase-manager-count {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-muted);
          background: var(--bg-card);
          border-radius: var(--radius-full);
          padding: 2px 10px;
          border: 1px solid var(--border-subtle);
        }

        .showcase-slots-row {
          display: flex;
          gap: var(--space-2);
        }

        .showcase-slot {
          flex: 1;
          aspect-ratio: 1;
          max-width: 64px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.2s var(--ease-spring);
        }

        .showcase-slot.filled {
          background: var(--gold-dim);
          border: 1px solid var(--gold-glow);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(245,200,66,0.15);
        }

        .showcase-slot.filled:hover .ss-remove { opacity: 1; }
        .showcase-slot.filled:hover .ss-icon   { opacity: 0.3; }

        .showcase-slot.empty {
          background: var(--bg-card);
          border: 1px dashed var(--border-default);
        }

        .ss-icon  { font-size: 1.6rem; transition: opacity 0.15s; }
        .ss-empty-icon { font-size: 1.2rem; color: var(--text-muted); opacity: 0.4; }

        .ss-remove {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--coral);
          opacity: 0;
          transition: opacity 0.15s;
        }

        .showcase-instruction {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-style: italic;
          text-align: center;
        }
        .badges-loading {
          text-align: center;
          color: var(--text-muted);
          font-size: 0.85rem;
          padding: var(--space-6);
          animation: spinSlow 1s linear infinite;
        }

        .badges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: var(--space-3);
        }

        .badge-tile {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-4) var(--space-3);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
          text-align: center;
          transition: all 0.2s var(--ease-out);
          position: relative;
        }

        .badge-tile.earned {
          border-color: color-mix(in srgb, var(--bc) 30%, transparent);
          background: linear-gradient(135deg, var(--bg-card), color-mix(in srgb, var(--bb) 50%, transparent));
          cursor: pointer;
        }

        .badge-tile.earned:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 16px color-mix(in srgb, var(--bc) 20%, transparent);
          border-color: color-mix(in srgb, var(--bc) 50%, transparent);
        }

        .badge-tile.showcased {
          box-shadow: 0 0 16px var(--gold-glow);
          border-color: var(--gold) !important;
        }

        .badge-tile.locked { opacity: 0.45; filter: grayscale(0.6); }

        .bt-icon-wrap {
          position: relative;
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
        }

        .bt-icon { font-size: 1.8rem; }
        .bt-lock { position: absolute; bottom: -2px; right: -4px; font-size: 0.75rem; }
        .bt-star {
          position: absolute; top: -4px; right: -4px;
          color: var(--gold); font-size: 0.75rem;
          text-shadow: 0 0 6px var(--gold-glow);
        }

        .bt-name {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .bt-desc {
          font-size: 0.65rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .bt-type-badge {
          font-size: 0.58rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          padding: 2px 6px;
          border-radius: var(--radius-full);
          margin-top: auto;
        }

        /* ── History ── */
        .history-list { display: flex; flex-direction: column; gap: var(--space-2); }
        .history-item {
          display: flex; align-items: center; gap: var(--space-4);
          padding: var(--space-3) var(--space-4);
          background: var(--bg-card); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md); transition: all 0.15s;
        }
        .history-item:hover { border-color: var(--border-default); background: var(--bg-card-hover); }
        .history-title { flex: 1; font-size: 0.88rem; font-weight: 600; color: var(--text-secondary); }
        .history-meta  { flex-shrink: 0; }
        .history-rewards { display: flex; gap: var(--space-2); flex-shrink: 0; }
        .history-xp   { font-size: 0.78rem; font-weight: 800; color: var(--xp-blue); }
        .history-gold { font-size: 0.78rem; font-weight: 800; color: var(--gold); }

        @media (max-width: 600px) {
          .rewards-screen { padding: var(--space-4) var(--space-4) var(--space-8); }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .badges-grid { grid-template-columns: repeat(3, 1fr); }
          .rewards-hero { flex-direction: column; text-align: center; gap: var(--space-4); }
          .rewards-avatar { width: 72px; height: 72px; }
          .rewards-level { font-size: 1.6rem; }
        }
      `}</style>
    </div>
  );
}
