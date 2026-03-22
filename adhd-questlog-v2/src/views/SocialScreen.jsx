// ============================================================
// SOCIAL SCREEN — Friends, Find Players, Requests, Active Focus
// ============================================================

import React, { useState, useCallback } from 'react';
import FriendProfile from '../components/FriendProfile';
import Avatar from '../components/Avatar';

// ─── Friend Card ──────────────────────────────────────────
function FriendCard({ friend, isOnline, isFocusing, focusTask, onViewProfile }) {
  return (
    <div className="friend-card" onClick={() => onViewProfile(friend.id)}>
      <div className="fc-avatar-wrap">
        <Avatar avatarId={friend.avatar_id} displayName={friend.display_name} size={42} />
        <div className={`fc-status-dot ${isFocusing ? 'focusing' : isOnline ? 'online' : 'offline'}`} />
      </div>
      <div className="fc-info">
        <div className="fc-name">{friend.display_name}</div>
        <div className="fc-meta">
          <span className="fc-level">Lv.{friend.level}</span>
          <span className="fc-title">{friend.title}</span>
        </div>
        {isFocusing && (
          <div className="fc-focusing">
            <span className="fc-focus-pulse" />
            {focusTask ? `Focusing on: ${focusTask}` : 'In a focus session'}
          </div>
        )}
      </div>
      <div className="fc-chevron">›</div>
    </div>
  );
}

// ─── Search Result Row ────────────────────────────────────
function SearchResultRow({ profile, onSend, sent, isCurrentUser, onViewProfile }) {
  return (
    <div className="search-result-row" onClick={() => onViewProfile(profile.id)} style={{cursor:'pointer'}}>
      <Avatar avatarId={profile.avatar_id} displayName={profile.display_name} size={38} />
      <div className="srr-info">
        <div className="srr-name">
          {profile.display_name}
          {isCurrentUser && <span className="srr-you-tag">You</span>}
        </div>
        <div className="srr-level">Level {profile.level} · {profile.title}</div>
      </div>
      {isCurrentUser ? (
        <span className="srr-view-btn">View →</span>
      ) : sent ? (
        <span className="srr-sent">✓ Sent</span>
      ) : (
        <button
          className="btn btn-secondary srr-btn"
          onClick={e => { e.stopPropagation(); onSend(profile.id); }}
        >
          + Add
        </button>
      )}
    </div>
  );
}

// ─── Request Row ──────────────────────────────────────────
function RequestRow({ request, onAccept, onDecline }) {
  const profile = request.profiles;
  const [handled, setHandled] = useState(false);
  const [action, setAction]   = useState('');

  function handle(type) {
    setHandled(true);
    setAction(type);
    if (type === 'accept') onAccept(profile.id);
    else onDecline(request.id);
  }

  if (handled) {
    return (
      <div className="request-row handled">
        <span>{action === 'accept' ? '✓ Friend added!' : 'Declined'}</span>
      </div>
    );
  }

  return (
    <div className="request-row">
      <Avatar avatarId={profile.avatar_id} displayName={profile.display_name} size={38} />
      <div className="req-info">
        <div className="req-name">{profile.display_name}</div>
        <div className="req-level">Level {profile.level}</div>
      </div>
      <div className="req-actions">
        <button className="btn btn-success req-btn" onClick={() => handle('accept')}>Accept</button>
        <button className="btn btn-ghost req-btn"   onClick={() => handle('decline')}>✕</button>
      </div>
    </div>
  );
}

// ─── Active Focus Card ────────────────────────────────────
function ActiveFocusCard({ session, onBoost, alreadyBoosted, onViewProfile }) {
  const name    = session.profiles?.display_name || 'Friend';
  const initial = name[0];
  const elapsed = Math.round((Date.now() - new Date(session.started_at)) / 60000);

  return (
    <div className="active-focus-card">
      <div className="afc-header">
        <div onClick={() => onViewProfile(session.user_id)} style={{position:'relative', flexShrink:0, cursor:'pointer'}}>
          <Avatar avatarId={session.profiles?.avatar_id} displayName={name} size={44} />
          <span className="afc-focus-ring" />
        </div>
        <div className="afc-info">
          <div className="afc-name">{name}</div>
          <div className="afc-task">{session.task_title || 'Working on something'}</div>
          <div className="afc-elapsed">{elapsed}m into their session</div>
        </div>
      </div>
      <button
        className={`afc-boost-btn ${alreadyBoosted ? 'sent' : ''}`}
        onClick={() => onBoost(session.id)}
        disabled={alreadyBoosted}
      >
        {alreadyBoosted ? '💙 Boosted!' : '💙 Boost them'}
      </button>
    </div>
  );
}

// ─── Main Screen ──────────────────────────────────────────
export default function SocialScreen({ social, userId, isSupabaseReady, onAvatarChange, onBoostSent, onWallPost }) {
  const [tab, setTab]               = useState('friends');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewingFriend, setViewingFriend] = useState(null);
  const [viewingSelf, setViewingSelf]     = useState(false);

  const {
    friends, requests, activeSessions, searchResults,
    searching, loading, sentRequests, boostsSent,
    search, sendRequest, acceptRequest, declineRequest,
    boostFriend, fetchFriendProfile, friendIdSet = new Set(),
  } = social;

  const handleSearchChange = useCallback((e) => {
    const q = e.target.value;
    setSearchQuery(q);
    if (q.length >= 2) search(q);
    else search('');
  }, [search]);

  const focusingFriendIds = new Set(activeSessions.map(s => s.user_id));

  if (!isSupabaseReady) {
    return (
      <div className="social-screen">
        <div className="social-not-configured">
          <div className="snc-icon">🔌</div>
          <div className="snc-title font-display">Supabase not connected</div>
          <div className="snc-sub">
            Social features require a Supabase connection.<br/>
            Add your keys to <code>.env</code> to unlock friends, boosts, and multiplayer quests.
          </div>
        </div>
        <SocialStyles />
      </div>
    );
  }

  return (
    <div className="social-screen">
      {/* Header */}
      <div className="social-header">
        <div>
          <h1 className="font-display social-title">Social</h1>
          <div className="social-subtitle">
            {friends.length} friend{friends.length !== 1 ? 's' : ''}
            {activeSessions.length > 0 && ` · ${activeSessions.length} focusing now`}
          </div>
        </div>
        <div className="social-header-right">
          {requests.length > 0 && (
            <div className="requests-badge-header">
              {requests.length} pending
            </div>
          )}
          <button
            className="btn btn-secondary my-profile-btn"
            onClick={() => setViewingFriend(userId)}
            title="View your own profile"
          >
            👤 My Profile
          </button>
        </div>
      </div>

      {/* Notification banners */}
      {social.requests.length > 0 && tab !== 'requests' && (
        <div className="social-notif-banner" onClick={() => setTab('requests')}>
          <span>👋</span>
          <span>
            <strong>{social.requests.length} friend request{social.requests.length !== 1 ? 's' : ''}</strong> waiting — tap to review
          </span>
          <span className="snb-arrow">›</span>
        </div>
      )}

      {/* Tabs */}
      <div className="social-tabs">
        {[
          { id: 'friends',  label: `Friends (${friends.length})` },
          { id: 'find',     label: 'Find Players' },
          { id: 'requests', label: `Requests${requests.length > 0 ? ` (${requests.length})` : ''}`, alert: requests.length > 0 },
        ].map(t => (
          <button
            key={t.id}
            className={`filter-tab ${tab === t.id ? 'active' : ''} ${t.alert ? 'alert-tab' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Friends tab ── */}
      {tab === 'friends' && (
        <div className="animate-in">
          {/* Wall notification */}
          {social.newWallPosts > 0 && (
            <div className="social-notif-banner wall-notif" onClick={() => setViewingFriend(userId)}>
              <span>📋</span>
              <span>
                <strong>{social.newWallPosts} new post{social.newWallPosts !== 1 ? 's' : ''}</strong> on your wall
              </span>
              <span className="snb-arrow">›</span>
            </div>
          )}
          {/* Actively focusing friends - highlighted at top */}
          {activeSessions.length > 0 && (
            <div className="active-focus-section">
              <div className="section-label">
                <span className="focus-pulse-dot" />
                FOCUSING RIGHT NOW — tap to send a boost 💙
              </div>
              <div className="active-focus-list">
                {activeSessions.map(session => (
                  <ActiveFocusCard
                    key={session.id}
                    session={session}
                    onBoost={boostFriend}
                    alreadyBoosted={boostsSent.has(session.id)}
                    onViewProfile={setViewingFriend}
                  />
                ))}
              </div>
            </div>
          )}

          {/* All friends */}
          {loading ? (
            <div className="social-loading">⟳ Loading friends...</div>
          ) : friends.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">👥</div>
              <div className="empty-title">No friends yet</div>
              <div className="empty-sub">
                Use "Find Players" to search for people by name and send a friend request.
              </div>
              <button className="btn btn-primary" style={{marginTop: 8}} onClick={() => setTab('find')}>
                Find Players →
              </button>
            </div>
          ) : (
            <div className="friends-list">
              {friends.map(friend => (
                <FriendCard
                  key={friend.id}
                  friend={friend}
                  isOnline={false}
                  isFocusing={focusingFriendIds.has(friend.id)}
                  focusTask={activeSessions.find(s => s.user_id === friend.id)?.task_title}
                  onViewProfile={setViewingFriend}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Find Players tab ── */}
      {tab === 'find' && (
        <div className="animate-in find-section">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by display name..."
              value={searchQuery}
              onChange={handleSearchChange}
              autoFocus
            />
            {searching && <span className="search-spinner">⟳</span>}
          </div>

          {searchQuery.length < 2 && (
            <div className="search-hint">Type at least 2 characters to search</div>
          )}

          {searchQuery.length >= 2 && !searching && searchResults.length === 0 && (
            <div className="search-empty">No players found for "{searchQuery}"</div>
          )}

          {searchResults.length > 0 && (
            <div className="search-results-list">
              {searchResults.map(profile => (
                <SearchResultRow
                  key={profile.id}
                  profile={profile}
                  isCurrentUser={profile.id === userId}
                  sent={sentRequests.has(profile.id)}
                  onSend={sendRequest}
                  onViewProfile={setViewingFriend}
                />
              ))}
            </div>
          )}

          <div className="find-tip">
            💡 Share your display name with friends so they can find you.
            Your name is shown on your profile.
          </div>
        </div>
      )}

      {/* ── Requests tab ── */}
      {tab === 'requests' && (
        <div className="animate-in">
          {requests.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📬</div>
              <div className="empty-title">No pending requests</div>
              <div className="empty-sub">Friend requests from other players will appear here.</div>
            </div>
          ) : (
            <div className="requests-list">
              {requests.map(req => (
                <RequestRow
                  key={req.id}
                  request={req}
                  onAccept={acceptRequest}
                  onDecline={declineRequest}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Friend profile modal */}
      {viewingFriend && (
        <FriendProfile
          friendId={viewingFriend}
          currentUserId={userId}
          onClose={() => setViewingFriend(null)}
          fetchFriendProfile={fetchFriendProfile}
          activeSessions={activeSessions}
          boostFriend={(sessionId) => { boostFriend(sessionId); if (onBoostSent) onBoostSent(); }}
          boostsSent={boostsSent}
          isFriend={friendIdSet.has(viewingFriend)}
          onAddFriend={sendRequest}
          onAvatarChange={onAvatarChange}
          onWallPost={onWallPost}
        />
      )}

      <SocialStyles />
    </div>
  );
}

function SocialStyles() {
  return (
    <style>{`
      .social-screen {
        padding: var(--space-6) var(--space-6) var(--space-8);
        max-width: 700px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: var(--space-5);
      }

      .social-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: var(--space-4);
        flex-wrap: wrap;
      }

      .social-title {
        font-size: 1.6rem;
        background: linear-gradient(135deg, var(--purple), var(--xp-blue));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .social-subtitle {
        font-size: 0.82rem;
        color: var(--text-muted);
        margin-top: 2px;
      }

      .requests-badge-header {
        font-size: 0.75rem;
        font-weight: 800;
        background: var(--coral-dim);
        color: var(--coral);
        border: 1px solid rgba(255,101,132,0.3);
        border-radius: var(--radius-full);
        padding: var(--space-2) var(--space-3);
        align-self: flex-start;
        animation: pulse-gold 2s infinite;
      }

      .social-tabs {
        display: flex;
        gap: var(--space-2);
        border-bottom: 1px solid var(--border-subtle);
        padding-bottom: var(--space-3);
        flex-wrap: wrap;
      }

      .social-notif-banner {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        background: var(--purple-dim);
        border: 1px solid rgba(179,157,219,0.35);
        border-radius: var(--radius-lg);
        padding: var(--space-3) var(--space-4);
        cursor: pointer;
        transition: all 0.15s;
        animation: fadeInDown 0.3s var(--ease-out);
        font-size: 0.85rem;
        color: var(--text-secondary);
      }
      .social-notif-banner:hover {
        background: rgba(179,157,219,0.2);
        border-color: rgba(179,157,219,0.5);
      }
      .snb-arrow {
        margin-left: auto;
        font-size: 1.2rem;
        color: var(--purple);
        font-weight: 700;
      }

      .social-notif-banner.wall-notif {
        background: var(--xp-blue-dim);
        border-color: rgba(79,195,247,0.35);
        color: var(--text-secondary);
      }
      .social-notif-banner.wall-notif:hover {
        background: rgba(79,195,247,0.2);
        border-color: rgba(79,195,247,0.5);
      }
      .social-notif-banner.wall-notif .snb-arrow { color: var(--xp-blue); }
      .alert-tab.active { background: var(--coral-dim) !important; color: var(--coral) !important; border-color: rgba(255,101,132,0.3) !important; }

      /* ── Active focus section ── */
      .active-focus-section { display: flex; flex-direction: column; gap: var(--space-3); }
      .section-label {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        font-size: 0.72rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--xp-blue);
      }

      .focus-pulse-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--xp-blue);
        flex-shrink: 0;
        animation: pulse-gold 1.2s infinite;
        box-shadow: 0 0 6px var(--xp-blue);
      }

      .active-focus-list { display: flex; flex-direction: column; gap: var(--space-2); }

      .active-focus-card {
        background: linear-gradient(135deg, var(--bg-card), rgba(79,195,247,0.04));
        border: 1px solid rgba(79,195,247,0.25);
        border-radius: var(--radius-lg);
        padding: var(--space-4);
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
        animation: fadeInUp 0.3s var(--ease-out);
      }

      .afc-header { display: flex; align-items: center; gap: var(--space-3); }

      .afc-avatar {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--xp-blue), var(--purple));
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        font-weight: 800;
        color: white;
        flex-shrink: 0;
        position: relative;
        cursor: pointer;
      }

      .afc-focus-ring {
        position: absolute;
        inset: -4px;
        border-radius: 50%;
        border: 2px solid var(--xp-blue);
        opacity: 0.6;
        animation: pulse-gold 2s infinite;
      }

      .afc-name  { font-size: 0.9rem; font-weight: 700; color: var(--text-primary); }
      .afc-task  { font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 240px; }
      .afc-elapsed { font-size: 0.68rem; color: var(--text-muted); margin-top: 1px; }

      .afc-boost-btn {
        width: 100%;
        padding: var(--space-3) var(--space-4);
        border-radius: var(--radius-md);
        border: 1px solid rgba(79,195,247,0.4);
        background: var(--xp-blue-dim);
        color: var(--xp-blue);
        font-size: 0.88rem;
        font-weight: 800;
        font-family: var(--font-body);
        cursor: pointer;
        transition: all 0.2s;
      }
      .afc-boost-btn:hover:not(:disabled) {
        background: rgba(79,195,247,0.2);
        transform: translateY(-1px);
      }
      .afc-boost-btn:disabled { cursor: default; }
      .afc-boost-btn.sent {
        background: var(--green-dim);
        border-color: rgba(92,221,139,0.4);
        color: var(--green);
      }

      /* ── Friends list ── */
      .friends-list { display: flex; flex-direction: column; gap: var(--space-2); }

      .friend-card {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        background: var(--bg-card);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-lg);
        padding: var(--space-3) var(--space-4);
        cursor: pointer;
        transition: all 0.15s var(--ease-out);
        min-height: 60px;
      }
      .friend-card:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-default);
        transform: translateX(3px);
      }

      .fc-avatar-wrap { position: relative; flex-shrink: 0; }
      .fc-avatar {
        width: 42px; height: 42px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--purple), var(--xp-blue));
        display: flex; align-items: center; justify-content: center;
        font-size: 1rem; font-weight: 800; color: white;
      }
      .fc-status-dot {
        position: absolute; bottom: 1px; right: 1px;
        width: 10px; height: 10px;
        border-radius: 50%;
        border: 2px solid var(--bg-card);
      }
      .fc-status-dot.focusing { background: var(--xp-blue); animation: pulse-gold 1.5s infinite; }
      .fc-status-dot.online   { background: var(--green); }
      .fc-status-dot.offline  { background: var(--text-muted); }

      .fc-info  { flex: 1; min-width: 0; }
      .fc-name  { font-size: 0.9rem; font-weight: 700; color: var(--text-primary); }
      .fc-meta  { display: flex; gap: var(--space-2); align-items: center; margin-top: 2px; }
      .fc-level { font-size: 0.68rem; font-weight: 800; color: var(--xp-blue); background: var(--xp-blue-dim); border-radius: var(--radius-full); padding: 1px 6px; }
      .fc-title { font-size: 0.7rem; color: var(--text-muted); font-style: italic; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

      .fc-focusing {
        display: flex; align-items: center; gap: 5px;
        font-size: 0.68rem; color: var(--xp-blue); margin-top: 3px;
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .fc-focus-pulse {
        width: 6px; height: 6px; border-radius: 50%;
        background: var(--xp-blue); flex-shrink: 0;
        animation: pulse-gold 1.5s infinite;
      }

      .fc-chevron { color: var(--text-muted); font-size: 1.2rem; flex-shrink: 0; }

      /* ── Find players ── */
      .find-section { display: flex; flex-direction: column; gap: var(--space-4); }

      .search-bar {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        background: var(--bg-elevated);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        padding: var(--space-3) var(--space-4);
        transition: border-color 0.2s;
      }
      .search-bar:focus-within { border-color: var(--gold); box-shadow: 0 0 0 3px var(--gold-dim); }

      .search-icon  { font-size: 1rem; color: var(--text-muted); flex-shrink: 0; }
      .search-spinner { font-size: 1rem; color: var(--text-muted); animation: spinSlow 1s linear infinite; }

      .search-bar input {
        flex: 1;
        background: transparent;
        border: none;
        outline: none;
        color: var(--text-primary);
        font-size: 0.9rem;
        font-family: var(--font-body);
        box-shadow: none !important;
      }

      .search-hint, .search-empty {
        font-size: 0.8rem;
        color: var(--text-muted);
        text-align: center;
        padding: var(--space-4);
      }

      .search-results-list { display: flex; flex-direction: column; gap: var(--space-2); }

      .search-result-row {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        background: var(--bg-card);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-lg);
        padding: var(--space-3) var(--space-4);
        animation: fadeInUp 0.25s var(--ease-out);
      }

      .srr-avatar {
        width: 38px; height: 38px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--purple), var(--xp-blue));
        display: flex; align-items: center; justify-content: center;
        font-size: 0.9rem; font-weight: 800; color: white;
        flex-shrink: 0;
      }
      .srr-info { flex: 1; min-width: 0; }
      .srr-name  { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); }
      .srr-level { font-size: 0.7rem; color: var(--text-muted); margin-top: 1px; }
      .srr-btn  { font-size: 0.78rem; padding: var(--space-1) var(--space-4); flex-shrink: 0; }
      .srr-sent {
        font-size: 0.75rem; font-weight: 800; color: var(--green);
        padding: var(--space-1) var(--space-3);
        background: var(--green-dim);
        border-radius: var(--radius-full);
        border: 1px solid rgba(92,221,139,0.3);
        flex-shrink: 0;
      }

      .social-header-right {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .my-profile-btn {
          font-size: 0.78rem;
          padding: var(--space-2) var(--space-3);
          flex-shrink: 0;
        }

        .srr-you-tag {
          display: inline-block;
          font-size: 0.6rem;
          font-weight: 800;
          background: var(--xp-blue-dim);
          color: var(--xp-blue);
          border: 1px solid rgba(79,195,247,0.3);
          border-radius: var(--radius-full);
          padding: 1px 5px;
          margin-left: 5px;
          vertical-align: middle;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .srr-view-btn {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          flex-shrink: 0;
        }
        font-size: 0.75rem;
        color: var(--text-muted);
        background: var(--bg-elevated);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-md);
        padding: var(--space-3) var(--space-4);
        line-height: 1.5;
      }

      /* ── Requests ── */
      .requests-list { display: flex; flex-direction: column; gap: var(--space-2); }

      .request-row {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        background: var(--bg-card);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-lg);
        padding: var(--space-3) var(--space-4);
        animation: fadeInUp 0.25s var(--ease-out);
      }
      .request-row.handled {
        opacity: 0.5;
        font-size: 0.8rem;
        color: var(--text-muted);
        justify-content: center;
        padding: var(--space-3);
      }

      .req-avatar {
        width: 38px; height: 38px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--purple), var(--xp-blue));
        display: flex; align-items: center; justify-content: center;
        font-size: 0.9rem; font-weight: 800; color: white;
        flex-shrink: 0;
      }
      .req-info  { flex: 1; min-width: 0; }
      .req-name  { font-size: 0.88rem; font-weight: 700; color: var(--text-primary); }
      .req-level { font-size: 0.7rem; color: var(--text-muted); margin-top: 1px; }
      .req-actions { display: flex; gap: var(--space-2); flex-shrink: 0; }
      .req-btn { font-size: 0.78rem; padding: var(--space-1) var(--space-3); }

      /* ── Not configured ── */
      .social-not-configured {
        text-align: center;
        padding: var(--space-8) var(--space-4);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-4);
      }
      .snc-icon  { font-size: 3rem; }
      .snc-title { font-size: 1.3rem; color: var(--text-secondary); }
      .snc-sub   { font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; }
      .snc-sub code { color: var(--coral); font-family: monospace; }

      /* ── Loading ── */
      .social-loading {
        text-align: center;
        padding: var(--space-6);
        color: var(--text-muted);
        font-size: 0.85rem;
        animation: spinSlow 1s linear infinite;
      }

      @media (max-width: 600px) {
        .social-screen { padding: var(--space-4) var(--space-4) var(--space-8); }
        .afc-task { max-width: 160px; }
      }
    `}</style>
  );
}
