// ============================================================
// useSocial — Friends, requests, presence, focus boosts
// Real-time via Supabase subscriptions
// ============================================================

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  fetchFriends, fetchFriendRequests, searchProfiles,
  sendFriendRequest, acceptFriendRequest,
  fetchActiveFriendSessions, sendBoost,
  subscribeToBoosts, subscribeToFriendRequests,
  subscribeToWallPosts, fetchBadges,
} from '../lib/db';
import { supabase, isSupabaseReady } from '../lib/supabase';

export function useSocial({ userId, currentSession, onBoostReceived, onFriendStartedFocus }) {
  const [friends, setFriends]               = useState([]);
  const [requests, setRequests]             = useState([]);
  const [activeSessions, setActiveSessions] = useState([]);
  const [searchResults, setSearchResults]   = useState([]);
  const [searching, setSearching]           = useState(false);
  const [loading, setLoading]               = useState(false);
  const [sentRequests, setSentRequests]     = useState(new Set());
  const [boostsSent, setBoostsSent]         = useState(new Set());
  const [newWallPosts, setNewWallPosts]     = useState(0); // unseen wall post count

  const unsubBoosts    = useRef(null);
  const unsubRequests  = useRef(null);
  const unsubWall      = useRef(null);
  const pollInterval   = useRef(null);
  const notifiedSessionIds = useRef(new Set()); // track sessions we've already notified about
  // Track last-seen wall post time in localStorage
  const lastSeenWallKey = userId ? `dq_wall_seen_${userId}` : null;

  // ── Load all social data ───────────────────────────────
  const loadAll = useCallback(async () => {
    if (!userId || !isSupabaseReady) return;
    setLoading(true);
    try {
      const [f, r, s] = await Promise.all([
        fetchFriends(userId),
        fetchFriendRequests(userId),
        fetchActiveFriendSessions(userId),
      ]);
      setFriends(f || []);
      setRequests(r || []);
      setActiveSessions(s || []);
      // Seed notified set so we don't notify about already-active sessions on load
      (s || []).forEach(session => notifiedSessionIds.current.add(session.id));
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (!userId || !isSupabaseReady) return;
    loadAll();

    // Poll active sessions every 10s for more responsive friend presence
    pollInterval.current = setInterval(async () => {
      const s = await fetchActiveFriendSessions(userId);

      setActiveSessions(s || []);
      // Notify only for sessions we haven't seen before
      if (onFriendStartedFocus) {
        (s || []).forEach(session => {
          if (!notifiedSessionIds.current.has(session.id)) {
            notifiedSessionIds.current.add(session.id);
            onFriendStartedFocus(session);
          }
        });
      }
      // Clean up ended sessions from the notified set
      const activeIds = new Set((s || []).map(x => x.id));
      notifiedSessionIds.current.forEach(id => {
        if (!activeIds.has(id)) notifiedSessionIds.current.delete(id);
      });
    }, 60_000); // poll every 60s instead of 10s

    // Real-time: incoming friend requests
    unsubRequests.current = subscribeToFriendRequests(userId, async () => {
      const r = await fetchFriendRequests(userId);
      setRequests(r || []);
    });

    // Real-time: new wall posts on my wall
    if (isSupabaseReady) {
      const lastSeen = lastSeenWallKey
        ? (localStorage.getItem(lastSeenWallKey) || new Date(0).toISOString())
        : new Date(0).toISOString();

      // Count posts since last seen on mount
      supabase
        .from('wall_posts')
        .select('id', { count: 'exact' })
        .eq('wall_owner_id', userId)
        .eq('is_deleted', false)
        .gt('created_at', lastSeen)
        .then(({ count }) => { if (count > 0) setNewWallPosts(count); });

      unsubWall.current = subscribeToWallPosts(userId, () => {
        setNewWallPosts(prev => prev + 1);
      });
    }

    return () => {
      clearInterval(pollInterval.current);
      if (unsubRequests.current) unsubRequests.current();
      if (unsubBoosts.current)   unsubBoosts.current();
      if (unsubWall.current)     unsubWall.current();
    };
  }, [userId, loadAll]);

  // ── Subscribe to boosts on current focus session ───────
  useEffect(() => {
    if (unsubBoosts.current) { unsubBoosts.current(); unsubBoosts.current = null; }
    const dbSessionId = currentSession?.dbId;
    if (!dbSessionId || !isSupabaseReady) return;


    unsubBoosts.current = subscribeToBoosts(dbSessionId, async (boost) => {
      const { data } = await supabase
        .from('profiles')
        .select('display_name')
        .eq('id', boost.booster_id)
        .single();
      if (onBoostReceived) onBoostReceived(data?.display_name || 'A friend');
    });

    return () => { if (unsubBoosts.current) unsubBoosts.current(); };
  }, [currentSession?.dbId, onBoostReceived]);

  // ── Search ─────────────────────────────────────────────
  const search = useCallback(async (query) => {
    if (!query.trim() || !isSupabaseReady) {
      setSearchResults([]);
      return;
    }
    setSearching(true);
    const results = await searchProfiles(query);
    // Only exclude existing friends, keep self so user can view their own profile
    const friendIds = new Set(friends.map(f => f.id));
    setSearchResults(results.filter(r => !friendIds.has(r.id) || r.id === userId));
    setSearching(false);
  }, [userId, friends]);

  // ── Send friend request ────────────────────────────────
  const sendRequest = useCallback(async (friendId) => {
    if (!isSupabaseReady) return false;
    const ok = await sendFriendRequest(userId, friendId);
    if (ok) setSentRequests(prev => new Set([...prev, friendId]));
    return ok;
  }, [userId]);

  // ── Accept friend request ──────────────────────────────
  const acceptRequest = useCallback(async (requesterId) => {
    if (!isSupabaseReady) return false;
    const ok = await acceptFriendRequest(userId, requesterId);
    if (ok) {
      // Remove from requests immediately
      setRequests(prev => prev.filter(r => r.profiles?.id !== requesterId));
      // Reload everything to get fresh friends list
      await loadAll();
    }
    return ok;
  }, [userId, loadAll]);

  // ── Decline / ignore request ───────────────────────────
  const declineRequest = useCallback(async (requestId) => {
    if (!isSupabaseReady) return;
    await supabase.from('friendships').delete().eq('id', requestId);
    setRequests(prev => prev.filter(r => r.id !== requestId));
  }, []);

  // ── Boost a friend's focus session ────────────────────
  const boostFriend = useCallback(async (sessionId) => {
    if (!isSupabaseReady || !userId) return false;
    if (boostsSent.has(sessionId)) return false; // already boosted this session
    const ok = await sendBoost(sessionId, userId);
    if (ok) setBoostsSent(prev => new Set([...prev, sessionId]));
    return ok;
  }, [userId, boostsSent]);

  // ── Fetch a single friend's full profile + badges ─────
  const fetchFriendProfile = useCallback(async (friendId) => {
    if (!isSupabaseReady) return null;
    const [{ data: profile }, badges, { data: combatState }, { data: history }] = await Promise.all([
      supabase.from('profiles').select('*').eq('id', friendId).single(),
      fetchBadges(friendId),
      supabase.from('combat_state').select('equipped, monsters_killed').eq('user_id', friendId).single(),
      supabase.from('task_history').select('*').eq('user_id', friendId).order('completed_at', { ascending: false }).limit(5),
    ]);

    return {
      profile,
      badges:        badges || [],
      equipped:      combatState?.equipped || {},
      monstersKilled: combatState?.monsters_killed || 0,
      history:       history || [],
    };
  }, []);

  // ── Clear wall notification badge ─────────────────────
  const clearWallBadge = useCallback(() => {
    setNewWallPosts(0);
    if (lastSeenWallKey) {
      localStorage.setItem(lastSeenWallKey, new Date().toISOString());
    }
  }, [lastSeenWallKey]);

  // ── Derived: set of friend IDs for quick lookup ────────
  const friendIdSet = new Set(friends.map(f => f.id));

  return {
    friends, requests, activeSessions, searchResults,
    searching, loading, sentRequests, boostsSent,
    newWallPosts, friendIdSet,
    search, sendRequest, acceptRequest, declineRequest,
    boostFriend, fetchFriendProfile, reload: loadAll,
    clearWallBadge,
  };
}
