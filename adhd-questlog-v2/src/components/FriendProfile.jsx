// ============================================================
// FRIEND PROFILE MODAL
// Tabs: Profile · Wall · Equipment
// Block / unblock with confirmation
// ============================================================

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ITEMS, EQUIPMENT_SLOTS, RARITY_COLORS } from '../data/items';
import { BADGE_CATALOG } from '../views/RewardsScreen';
import Avatar from './Avatar';
import AvatarPicker from './AvatarPicker';
import {
  fetchWallPosts, postToWall, deleteWallPost,
  subscribeToWallPosts, blockUser, unblockUser, isUserBlocked,
} from '../lib/db';
import { validateWallPost } from '../utils/contentFilter';
import { isSupabaseReady } from '../lib/supabase';

// ─── Helpers ─────────────────────────────────────────────
function timeAgo(ts) {
  const s = Math.round((Date.now() - new Date(ts)) / 1000);
  if (s < 60)   return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s/60)}m ago`;
  if (s < 86400) return `${Math.floor(s/3600)}h ago`;
  return `${Math.floor(s/86400)}d ago`;
}

// ─── Gear slot tile ───────────────────────────────────────
function GearSlot({ slotMeta, itemId }) {
  const item   = itemId ? ITEMS[itemId] : null;
  const rarity = item ? (RARITY_COLORS[item.rarity] || RARITY_COLORS.common) : null;
  return (
    <div
      className={`fp-gear-slot ${item ? 'filled' : 'empty'}`}
      style={item ? { borderColor: rarity.color + '55', background: rarity.bg } : {}}
      title={item ? `${item.name} (${rarity?.label})` : `${slotMeta.label} — empty`}
    >
      <span className="fp-gs-icon">{item ? item.icon : slotMeta.icon}</span>
      {item && <div className="fp-gs-dot" style={{ background: rarity.color }} />}
    </div>
  );
}

// ─── Wall post row ────────────────────────────────────────
function WallPost({ post, wallOwnerId, currentUserId, onDelete }) {
  const [confirmDel, setConfirmDel] = useState(false);
  const canDelete = post.author_id === currentUserId || wallOwnerId === currentUserId;
  const authorName = post.profiles?.display_name || 'Unknown';
  const isSelf = post.author_id === currentUserId;

  return (
    <div className={`wall-post ${isSelf ? 'own-post' : ''}`}>
      <div className="wp-header">
        <Avatar avatarId={post.profiles?.avatar_id} displayName={authorName} size={28} />
        <div className="wp-meta">
          <span className="wp-author">{isSelf ? 'You' : authorName}</span>
          <span className="wp-time">{timeAgo(post.created_at)}</span>
        </div>
        {canDelete && !confirmDel && (
          <button className="wp-delete-btn" onClick={() => setConfirmDel(true)} title="Delete post">
            🗑
          </button>
        )}
        {confirmDel && (
          <div className="wp-confirm-row">
            <button className="btn btn-danger wp-confirm-btn" onClick={() => onDelete(post.id)}>Delete</button>
            <button className="btn btn-ghost wp-confirm-btn"  onClick={() => setConfirmDel(false)}>Cancel</button>
          </div>
        )}
      </div>
      <div className="wp-content">{post.content}</div>
    </div>
  );
}

// ─── Wall tab ─────────────────────────────────────────────
function WallTab({ wallOwnerId, currentUserId, ownerName }) {
  const [posts, setPosts]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [draft, setDraft]       = useState('');
  const [posting, setPosting]   = useState(false);
  const [filterErr, setFilterErr] = useState('');
  const unsubRef                = useRef(null);
  const inputRef                = useRef(null);

  const loadPosts = useCallback(async () => {
    if (!isSupabaseReady) { setLoading(false); return; }
    setLoading(true);
    const data = await fetchWallPosts(wallOwnerId);
    setPosts(data);
    setLoading(false);
  }, [wallOwnerId]);

  useEffect(() => {
    loadPosts();

    // Real-time: new posts arrive live
    if (isSupabaseReady) {
      unsubRef.current = subscribeToWallPosts(wallOwnerId, async (newPost) => {
        // Re-fetch to get author name join
        const refreshed = await fetchWallPosts(wallOwnerId);
        setPosts(refreshed);
      });
    }

    return () => { if (unsubRef.current) unsubRef.current(); };
  }, [wallOwnerId, loadPosts]);

  async function handlePost(e) {
    e.preventDefault();
    const validation = validateWallPost(draft);
    if (!validation.ok) { setFilterErr(validation.reason); return; }
    setFilterErr('');
    setPosting(true);
    const post = await postToWall(wallOwnerId, currentUserId, draft.trim());
    if (post) {
      setPosts(prev => [post, ...prev]);
      setDraft('');
    }
    setPosting(false);
    inputRef.current?.focus();
  }

  async function handleDelete(postId) {
    const ok = await deleteWallPost(postId);
    if (ok) setPosts(prev => prev.filter(p => p.id !== postId));
  }

  const charCount = draft.length;
  const charColor = charCount > 450 ? 'var(--coral)' : charCount > 350 ? 'var(--amber)' : 'var(--text-muted)';

  return (
    <div className="wall-tab">
      {/* Post composer */}
      {isSupabaseReady && (
        <form className="wall-composer" onSubmit={handlePost}>
          <textarea
            ref={inputRef}
            className="wall-input"
            placeholder={`Write on ${ownerName}'s wall...`}
            value={draft}
            onChange={e => { setDraft(e.target.value); setFilterErr(''); }}
            rows={2}
            maxLength={500}
            disabled={posting}
          />
          {filterErr && <div className="wall-filter-err">⚠ {filterErr}</div>}
          <div className="wall-composer-footer">
            <span className="wall-char-count" style={{ color: charColor }}>{charCount}/500</span>
            <button
              type="submit"
              className="btn btn-primary wall-post-btn"
              disabled={!draft.trim() || posting}
            >
              {posting ? '⟳' : 'Post'}
            </button>
          </div>
        </form>
      )}

      {/* Posts */}
      {loading ? (
        <div className="wall-loading">⟳ Loading wall...</div>
      ) : posts.length === 0 ? (
        <div className="wall-empty">
          <div className="wall-empty-icon">📭</div>
          <div>No posts yet. Be the first to write something!</div>
        </div>
      ) : (
        <div className="wall-posts">
          {posts.map(post => (
            <WallPost
              key={post.id}
              post={post}
              wallOwnerId={wallOwnerId}
              currentUserId={currentUserId}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {!isSupabaseReady && (
        <div className="wall-offline">🔌 Connect Supabase to enable the wall.</div>
      )}
    </div>
  );
}

// ─── Main modal ───────────────────────────────────────────
export default function FriendProfile({
  friendId, currentUserId, onClose,
  fetchFriendProfile, activeSessions, boostFriend, boostsSent,
  isFriend = false, onAddFriend, onAvatarChange,
}) {
  const [data, setData]             = useState(null);
  const [loading, setLoading]       = useState(true);
  const [tab, setTab]               = useState('profile');
  const [boostFlash, setBoostFlash] = useState(false);
  const [blocked, setBlocked]       = useState(false);
  const [blockLoading, setBlockLoading] = useState(false);
  const [confirmBlock, setConfirmBlock] = useState(false);
  const [friendRequestSent, setFriendRequestSent] = useState(false);
  const [showAvatarPicker, setShowAvatarPicker]   = useState(false);
  const isSelf = friendId === currentUserId;

  useEffect(() => {
    if (!friendId) return;
    setLoading(true);
    setTab('profile');
    setConfirmBlock(false);
    fetchFriendProfile(friendId).then(d => {
      setData(d);
      setLoading(false);
    });
    // Check block status
    if (isSupabaseReady && currentUserId) {
      isUserBlocked(currentUserId, friendId).then(setBlocked);
    }
  }, [friendId, fetchFriendProfile, currentUserId]);

  const activeSession  = activeSessions.find(s => s.user_id === friendId);
  const alreadyBoosted = activeSession && boostsSent.has(activeSession.id);

  async function handleBoost() {
    if (!activeSession || alreadyBoosted) return;
    await boostFriend(activeSession.id);
    setBoostFlash(true);
    setTimeout(() => setBoostFlash(false), 2000);
  }

  async function handleBlock() {
    if (!isSupabaseReady || !currentUserId) return;
    setBlockLoading(true);
    if (blocked) {
      await unblockUser(currentUserId, friendId);
      setBlocked(false);
    } else {
      await blockUser(currentUserId, friendId);
      setBlocked(true);
    }
    setConfirmBlock(false);
    setBlockLoading(false);
    if (!blocked) onClose(); // close after blocking
  }

  const profile        = data?.profile;
  const xpPercent      = profile ? Math.round((profile.xp / profile.xp_to_next) * 100) : 0;
  const showcasedBadges = (data?.badges || []).filter(b => b.showcased).map(b => b.badge_id);
  const equipped        = data?.equipped || {};
  const hasAnyGear      = Object.values(equipped).some(Boolean);

  const TABS = [
    { id: 'profile',   label: '👤 Profile' },
    { id: 'wall',      label: '📋 Wall' },
    { id: 'equipment', label: '⚔ Gear' },
  ];

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="fp-modal scale-in">

        {/* Close + Block + Add Friend buttons */}
        <div className="fp-top-actions">
          {/* Self-view label */}
          {friendId === currentUserId && (
            <span className="fp-self-label">👤 Your Profile</span>
          )}
          {/* Add Friend — shown when viewing a non-friend, non-self profile */}
          {isSupabaseReady && profile && friendId !== currentUserId && !isFriend && !blocked && !confirmBlock && (
            <button
              className={`fp-add-friend-btn ${friendRequestSent ? 'sent' : ''}`}
              onClick={async () => {
                if (friendRequestSent || !onAddFriend) return;
                await onAddFriend(friendId);
                setFriendRequestSent(true);
              }}
              disabled={friendRequestSent}
            >
              {friendRequestSent ? '✓ Request sent!' : '+ Add Friend'}
            </button>
          )}
          {isFriend && friendId !== currentUserId && (
            <span className="fp-friends-badge">👥 Friends</span>
          )}
          {isSupabaseReady && profile && friendId !== currentUserId && !confirmBlock && (
            <button
              className={`fp-block-btn ${blocked ? 'blocked' : ''}`}
              onClick={() => blocked ? handleBlock() : setConfirmBlock(true)}
              disabled={blockLoading}
              title={blocked ? 'Unblock this user' : 'Block this user'}
            >
              {blockLoading ? '⟳' : blocked ? '🔓 Unblock' : '🚫 Block'}
            </button>
          )}
          {confirmBlock && (
            <div className="fp-block-confirm">
              <span className="fp-block-confirm-text">Block {profile?.display_name}?</span>
              <button className="btn btn-danger fp-bc-btn" onClick={handleBlock} disabled={blockLoading}>
                {blockLoading ? '⟳' : 'Block'}
              </button>
              <button className="btn btn-ghost fp-bc-btn" onClick={() => setConfirmBlock(false)}>
                Cancel
              </button>
            </div>
          )}
          <button className="fp-close btn btn-ghost" onClick={onClose}>✕</button>
        </div>

        {loading ? (
          <div className="fp-loading">
            <div className="fp-spinner">⟳</div>
            Loading profile...
          </div>
        ) : !profile ? (
          <div className="fp-loading">Could not load profile.</div>
        ) : (<>

          {/* Header */}
          <div className="fp-header">
            <div className="fp-avatar-wrap" style={{position:'relative', flexShrink:0}}>
              <Avatar
                avatarId={isSelf ? (profile.avatar_id || 'the_planner') : profile.avatar_id}
                displayName={profile.display_name}
                size={56}
                onClick={isSelf ? () => setShowAvatarPicker(true) : undefined}
              />
              {isSelf && (
                <button className="fp-avatar-edit-btn" onClick={() => setShowAvatarPicker(true)} title="Change avatar">✎</button>
              )}
            </div>
            <div className="fp-header-info">
              <div className="fp-name">
                {profile.display_name}
                {friendId === currentUserId && (
                  <span className="fp-you-label">You</span>
                )}
              </div>
              <div className="fp-title-text">{profile.title}</div>
              {activeSession && (
                <div className="fp-focusing-badge">
                  <span className="fp-focus-dot" />
                  {activeSession.task_title || 'Focusing...'}
                </div>
              )}
            </div>
          </div>

          {/* Boost button */}
          {activeSession && (
            <button
              className={`fp-boost-btn ${alreadyBoosted ? 'sent' : ''} ${boostFlash ? 'flash' : ''}`}
              onClick={handleBoost}
              disabled={alreadyBoosted}
            >
              {alreadyBoosted ? '💙 Boost sent!' : '💙 Send Focus Boost'}
            </button>
          )}

          {/* Tabs */}
          <div className="fp-tabs">
            {TABS.map(t => (
              <button
                key={t.id}
                className={`fp-tab ${tab === t.id ? 'active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ── Profile tab ── */}
          {tab === 'profile' && (
            <div className="fp-tab-content animate-in">
              {/* Stats */}
              <div className="fp-stats">
                {[
                  { icon: '⚡', label: 'Level',  value: profile.level,           color: 'var(--xp-blue)' },
                  { icon: '🔥', label: 'Streak', value: `${profile.streak}d`,    color: 'var(--amber)'   },
                  { icon: '☠',  label: 'Kills',  value: data.monstersKilled || 0, color: 'var(--coral)'  },
                ].map(s => (
                  <div key={s.label} className="fp-stat-chip">
                    <span className="fp-stat-icon">{s.icon}</span>
                    <div className="fp-stat-value" style={{ color: s.color }}>{s.value}</div>
                    <div className="fp-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* XP bar */}
              <div className="fp-xp-section">
                <div className="fp-xp-labels">
                  <span className="text-xs text-muted">Level {profile.level}</span>
                  <span className="text-xs" style={{ color: 'var(--xp-blue)' }}>
                    {profile.xp} / {profile.xp_to_next} XP
                  </span>
                </div>
                <div className="xp-bar-track">
                  <div className="xp-bar-fill" style={{ width: `${xpPercent}%` }} />
                </div>
              </div>

              {/* Badge showcase */}
              <div className="fp-subsection">
                <div className="fp-subsection-title">✦ Badge Showcase</div>
                {showcasedBadges.length > 0 ? (
                  <div className="fp-showcase-row">
                    {showcasedBadges.map(id => {
                      const meta = BADGE_CATALOG[id];
                      if (!meta) return null;
                      return (
                        <div key={id} className="fp-showcase-pill" title={meta.desc}>
                          <span>{meta.icon}</span>
                          <span className="fp-sp-name">{meta.name}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="fp-empty-note">No badges showcased yet.</div>
                )}
              </div>

              {/* Recent quests */}
              {data.history?.length > 0 && (
                <div className="fp-subsection">
                  <div className="fp-subsection-title">📋 Recent Quests</div>
                  <div className="fp-history">
                    {data.history.map(h => (
                      <div key={h.id} className="fp-history-item">
                        <span className="fp-hi-title">{h.title}</span>
                        <span className="fp-hi-xp">+{h.xp_earned} XP</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Wall tab ── */}
          {tab === 'wall' && (
            <div className="fp-tab-content animate-in">
              <WallTab
                wallOwnerId={friendId}
                currentUserId={currentUserId}
                ownerName={profile.display_name}
              />
            </div>
          )}

          {/* ── Equipment tab ── */}
          {tab === 'equipment' && (
            <div className="fp-tab-content animate-in">
              {hasAnyGear ? (
                <>
                  <div className="fp-gear-hint">Hover a slot to see the item name.</div>
                  <div className="fp-gear-grid">
                    {EQUIPMENT_SLOTS.map(slot => (
                      <GearSlot key={slot.id} slotMeta={slot} itemId={equipped[slot.id]} />
                    ))}
                  </div>
                  {/* Gear list detail */}
                  <div className="fp-gear-list">
                    {EQUIPMENT_SLOTS.map(slot => {
                      const item = equipped[slot.id] ? ITEMS[equipped[slot.id]] : null;
                      if (!item) return null;
                      const rarity = RARITY_COLORS[item.rarity] || RARITY_COLORS.common;
                      return (
                        <div key={slot.id} className="fp-gear-list-item">
                          <span className="fp-gli-icon">{item.icon}</span>
                          <div className="fp-gli-info">
                            <span className="fp-gli-name" style={{ color: rarity.color }}>{item.name}</span>
                            <span className="fp-gli-slot">{slot.label}</span>
                          </div>
                          <span className="fp-gli-rarity" style={{ color: rarity.color, background: rarity.bg }}>
                            {rarity.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div className="fp-empty-note" style={{textAlign:'center', padding:'var(--space-8)'}}>
                  No gear equipped yet.
                </div>
              )}
            </div>
          )}

        </>)}

        {/* Avatar picker — only shown when viewing own profile */}
        {showAvatarPicker && isSelf && (
          <AvatarPicker
            currentAvatar={profile?.avatar_id || 'the_planner'}
            earnedBadgeIds={[]}
            onSelect={async (avatarId) => {
              if (onAvatarChange) onAvatarChange(avatarId);
              setShowAvatarPicker(false);
            }}
            onClose={() => setShowAvatarPicker(false)}
          />
        )}
      </div>

      <style>{`
        .fp-avatar-edit-btn {
          position: absolute;
          bottom: -2px;
          right: -2px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          border-radius: 50%;
          width: 20px;
          height: 20px;
          font-size: 0.6rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          transition: all 0.15s;
          z-index: 1;
        }
        .fp-avatar-edit-btn:hover {
          background: var(--gold-dim);
          border-color: var(--gold-glow);
        }

        .fp-modal {
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
          padding: var(--space-5) var(--space-5) var(--space-6);
          width: 100%;
          max-width: 480px;
          max-height: 90dvh;
          overflow-y: auto;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          box-shadow: var(--shadow-lg);
        }

        /* Top action row */
        .fp-top-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: var(--space-2);
          min-height: 32px;
        }

        .fp-you-label {
          display: inline-block;
          font-size: 0.6rem;
          font-weight: 800;
          background: var(--gold-dim);
          color: var(--gold);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-full);
          padding: 1px 7px;
          margin-left: 8px;
          vertical-align: middle;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-family: var(--font-body);
        }

        .fp-self-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-muted);
          flex: 1;
        }
          font-size: 0.75rem;
          font-weight: 800;
          font-family: var(--font-body);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          background: var(--purple-dim);
          border: 1px solid rgba(179,157,219,0.4);
          color: var(--purple);
          cursor: pointer;
          transition: all 0.2s var(--ease-spring);
        }
        .fp-add-friend-btn:hover:not(:disabled) {
          background: rgba(179,157,219,0.25);
          transform: translateY(-1px);
        }
        .fp-add-friend-btn.sent {
          background: var(--green-dim);
          border-color: rgba(92,221,139,0.4);
          color: var(--green);
          cursor: default;
        }

        .fp-friends-badge {
          font-size: 0.72rem;
          font-weight: 700;
          background: var(--green-dim);
          color: var(--green);
          border: 1px solid rgba(92,221,139,0.3);
          border-radius: var(--radius-full);
          padding: 3px 10px;
        }
          font-size: 0.72rem;
          font-weight: 700;
          font-family: var(--font-body);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.15s;
        }
        .fp-block-btn:hover     { border-color: var(--coral); color: var(--coral); background: var(--coral-dim); }
        .fp-block-btn.blocked   { background: var(--coral-dim); color: var(--coral); border-color: rgba(255,101,132,0.4); }
        .fp-block-btn.blocked:hover { background: var(--green-dim); color: var(--green); border-color: rgba(92,221,139,0.4); }

        .fp-block-confirm {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          flex: 1;
          background: var(--coral-dim);
          border: 1px solid rgba(255,101,132,0.3);
          border-radius: var(--radius-full);
          padding: 4px 12px 4px 10px;
        }
        .fp-block-confirm-text { font-size: 0.72rem; color: var(--coral); font-weight: 700; flex: 1; }
        .fp-bc-btn { font-size: 0.7rem; padding: 2px 8px; }

        .fp-close { font-size: 1rem; color: var(--text-muted); padding: 4px 8px; }

        /* Loading */
        .fp-loading {
          display: flex; flex-direction: column; align-items: center;
          gap: var(--space-3); padding: var(--space-8);
          color: var(--text-muted); font-size: 0.85rem;
        }
        .fp-spinner { font-size: 1.5rem; animation: spinSlow 1s linear infinite; }

        /* Header */
        .fp-header { display: flex; align-items: center; gap: var(--space-4); }
        .fp-avatar {
          width: 56px; height: 56px; border-radius: 50%;
          background: linear-gradient(135deg, var(--purple), var(--xp-blue));
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem; font-weight: 800; color: white; flex-shrink: 0;
          box-shadow: 0 0 20px rgba(179,157,219,0.3);
        }
        .fp-name       { font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; color: var(--text-primary); }
        .fp-title-text { font-size: 0.75rem; color: var(--purple); font-style: italic; margin-top: 2px; }
        .fp-focusing-badge {
          display: inline-flex; align-items: center; gap: 5px;
          margin-top: 5px; font-size: 0.7rem; font-weight: 700;
          color: var(--xp-blue); background: var(--xp-blue-dim);
          border: 1px solid rgba(79,195,247,0.3); border-radius: var(--radius-full);
          padding: 2px 8px; max-width: 200px;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .fp-focus-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--xp-blue); flex-shrink: 0;
          animation: pulse-gold 1.5s infinite;
        }

        /* Boost */
        .fp-boost-btn {
          width: 100%; padding: var(--space-3);
          border-radius: var(--radius-lg); border: 1px solid rgba(79,195,247,0.4);
          background: var(--xp-blue-dim); color: var(--xp-blue);
          font-size: 0.95rem; font-weight: 800; font-family: var(--font-body);
          cursor: pointer; transition: all 0.2s;
        }
        .fp-boost-btn:hover:not(:disabled) { background: rgba(79,195,247,0.2); transform: translateY(-1px); }
        .fp-boost-btn.sent    { background: var(--green-dim); border-color: rgba(92,221,139,0.4); color: var(--green); }
        .fp-boost-btn.flash   { animation: levelUpBurst 0.4s var(--ease-spring); }
        .fp-boost-btn:disabled { cursor: default; }

        /* Tabs */
        .fp-tabs {
          display: flex;
          gap: var(--space-1);
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: var(--space-2);
        }
        .fp-tab {
          flex: 1; padding: var(--space-2) var(--space-1);
          border-radius: var(--radius-md) var(--radius-md) 0 0;
          background: transparent; border: none;
          color: var(--text-muted); font-size: 0.78rem; font-weight: 700;
          font-family: var(--font-body); cursor: pointer; transition: all 0.15s;
        }
        .fp-tab:hover { color: var(--text-secondary); background: var(--bg-card); }
        .fp-tab.active { color: var(--gold); background: var(--gold-dim); border: 1px solid var(--gold-glow); border-bottom: none; }

        .fp-tab-content { display: flex; flex-direction: column; gap: var(--space-4); }

        /* Profile tab */
        .fp-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2); }
        .fp-stat-chip {
          background: var(--bg-card); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md); padding: var(--space-3);
          display: flex; flex-direction: column; align-items: center; gap: 2px; text-align: center;
        }
        .fp-stat-icon  { font-size: 1rem; }
        .fp-stat-value { font-size: 1.1rem; font-weight: 800; font-family: var(--font-display); line-height: 1; }
        .fp-stat-label { font-size: 0.6rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }

        .fp-xp-section { display: flex; flex-direction: column; gap: var(--space-1); }
        .fp-xp-labels  { display: flex; justify-content: space-between; }

        .fp-subsection { display: flex; flex-direction: column; gap: var(--space-2); }
        .fp-subsection-title {
          font-size: 0.68rem; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted);
        }

        .fp-showcase-row { display: flex; flex-wrap: wrap; gap: var(--space-2); }
        .fp-showcase-pill {
          display: inline-flex; align-items: center; gap: 5px;
          background: var(--gold-dim); border: 1px solid var(--gold-glow);
          border-radius: var(--radius-full); padding: 4px 10px;
          font-size: 0.75rem; font-weight: 700; color: var(--gold);
        }
        .fp-sp-name { font-size: 0.7rem; }

        .fp-empty-note {
          font-size: 0.78rem; color: var(--text-muted); font-style: italic;
          padding: var(--space-3); background: var(--bg-card);
          border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);
          text-align: center;
        }

        .fp-history { display: flex; flex-direction: column; gap: 4px; }
        .fp-history-item {
          display: flex; justify-content: space-between; align-items: center;
          gap: var(--space-3); padding: var(--space-2) var(--space-3);
          background: var(--bg-card); border-radius: var(--radius-sm); font-size: 0.78rem;
        }
        .fp-hi-title { color: var(--text-secondary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; }
        .fp-hi-xp    { color: var(--xp-blue); font-weight: 800; font-size: 0.7rem; flex-shrink: 0; }

        /* Wall tab */
        .wall-tab { display: flex; flex-direction: column; gap: var(--space-3); }

        .wall-composer {
          display: flex; flex-direction: column; gap: var(--space-2);
          background: var(--bg-card); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg); padding: var(--space-3);
        }

        .wall-input {
          background: transparent; border: none; outline: none;
          color: var(--text-primary); font-family: var(--font-body);
          font-size: 0.88rem; resize: none; width: 100%;
          box-shadow: none !important;
        }
        .wall-input:focus { box-shadow: none !important; border: none !important; }

        .wall-filter-err {
          font-size: 0.75rem; color: var(--coral);
          background: var(--coral-dim); border-radius: var(--radius-sm);
          padding: 4px 8px;
        }

        .wall-composer-footer {
          display: flex; align-items: center; justify-content: space-between;
          border-top: 1px solid var(--border-subtle); padding-top: var(--space-2);
        }
        .wall-char-count { font-size: 0.68rem; font-weight: 700; transition: color 0.2s; }
        .wall-post-btn   { font-size: 0.78rem; padding: var(--space-1) var(--space-4); }

        .wall-loading, .wall-offline {
          text-align: center; color: var(--text-muted);
          font-size: 0.82rem; padding: var(--space-4);
        }

        .wall-empty {
          display: flex; flex-direction: column; align-items: center;
          gap: var(--space-3); padding: var(--space-6);
          color: var(--text-muted); font-size: 0.82rem; text-align: center;
        }
        .wall-empty-icon { font-size: 1.8rem; }

        .wall-posts { display: flex; flex-direction: column; gap: var(--space-2); }

        .wall-post {
          background: var(--bg-card); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md); padding: var(--space-3);
          display: flex; flex-direction: column; gap: var(--space-2);
          animation: fadeInUp 0.2s var(--ease-out);
        }
        .wall-post.own-post {
          background: rgba(79,195,247,0.04); border-color: rgba(79,195,247,0.2);
        }

        .wp-header {
          display: flex; align-items: center; gap: var(--space-2);
        }
        .wp-avatar {
          width: 28px; height: 28px; border-radius: 50%;
          background: linear-gradient(135deg, var(--purple), var(--xp-blue));
          display: flex; align-items: center; justify-content: center;
          font-size: 0.72rem; font-weight: 800; color: white; flex-shrink: 0;
        }
        .wp-meta  { flex: 1; display: flex; align-items: center; gap: var(--space-2); }
        .wp-author { font-size: 0.78rem; font-weight: 700; color: var(--text-primary); }
        .wp-time   { font-size: 0.65rem; color: var(--text-muted); }

        .wp-delete-btn {
          background: transparent; border: none; cursor: pointer;
          font-size: 0.8rem; opacity: 0.4; transition: opacity 0.15s; padding: 2px 4px;
        }
        .wp-delete-btn:hover { opacity: 1; }

        .wp-confirm-row { display: flex; gap: 4px; }
        .wp-confirm-btn { font-size: 0.65rem; padding: 2px 6px; }

        .wp-content {
          font-size: 0.85rem; color: var(--text-secondary);
          line-height: 1.5; word-break: break-word;
        }

        /* Equipment tab */
        .fp-gear-hint {
          font-size: 0.72rem; color: var(--text-muted);
          font-style: italic;
        }

        .fp-gear-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-2);
        }

        .fp-gear-slot {
          aspect-ratio: 1; border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle); background: var(--bg-card);
          display: flex; align-items: center; justify-content: center;
          position: relative; transition: all 0.15s;
        }
        .fp-gear-slot.empty  { opacity: 0.4; }
        .fp-gear-slot.filled { box-shadow: 0 0 6px rgba(0,0,0,0.2); }
        .fp-gear-slot.filled:hover { transform: scale(1.08); z-index: 1; }

        .fp-gs-icon { font-size: 1.4rem; }
        .fp-gs-dot  {
          position: absolute; bottom: 3px; right: 3px;
          width: 7px; height: 7px; border-radius: 50%;
          border: 1.5px solid var(--bg-card);
        }

        .fp-gear-list { display: flex; flex-direction: column; gap: 4px; }
        .fp-gear-list-item {
          display: flex; align-items: center; gap: var(--space-3);
          background: var(--bg-card); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm); padding: var(--space-2) var(--space-3);
        }
        .fp-gli-icon  { font-size: 1.1rem; flex-shrink: 0; }
        .fp-gli-info  { flex: 1; display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .fp-gli-name  { font-size: 0.8rem; font-weight: 700; }
        .fp-gli-slot  { font-size: 0.65rem; color: var(--text-muted); }
        .fp-gli-rarity {
          font-size: 0.6rem; font-weight: 800;
          padding: 2px 6px; border-radius: var(--radius-full);
          text-transform: uppercase; letter-spacing: 0.06em;
          flex-shrink: 0;
        }

        @media (max-width: 480px) {
          .fp-modal {
            border-radius: var(--radius-xl) var(--radius-xl) 0 0;
            max-height: 92dvh;
            position: fixed; bottom: 0; left: 0; right: 0; max-width: 100%;
          }
          .modal-overlay { align-items: flex-end; }
        }
      `}</style>
    </div>
  );
}
