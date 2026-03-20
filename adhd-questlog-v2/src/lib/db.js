// ============================================================
// DB HELPERS — All Supabase operations centralised here
// Each function is safe to call even if Supabase is not configured
// (isSupabaseReady guard), so the app always works offline.
// ============================================================

import { supabase, isSupabaseReady } from './supabase';

// ─── PROFILE ──────────────────────────────────────────────

export async function fetchProfile(userId) {
  if (!isSupabaseReady) return null;
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  if (error) { console.error('[db] fetchProfile:', error.message); return null; }
  return data;
}

export async function upsertProfile(userId, profile) {
  if (!isSupabaseReady) return;
  const { error } = await supabase
    .from('profiles')
    .upsert({
      id:               userId,
      display_name:     profile.displayName,
      avatar_id:        profile.avatarId || 'the_planner',
      title:            profile.title,
      level:            profile.level,
      xp:               profile.xp,
      xp_to_next:       profile.xpToNext,
      gold:             profile.gold,
      streak:           profile.streak,
      talent_points:    profile.talentPoints,
      unlocked_talents: profile.unlockedTalents,
      last_active_at:   new Date().toISOString(),
    });
  if (error) console.error('[db] upsertProfile:', error.message);
}

// ─── TASKS ────────────────────────────────────────────────

export async function fetchTasks(userId) {
  if (!isSupabaseReady) return null;
  const { data, error } = await supabase
    .from('tasks')
    .select('*, subtasks(*)')
    .eq('user_id', userId)
    .eq('status', 'pending')
    .order('created_at', { ascending: false });
  if (error) { console.error('[db] fetchTasks:', error.message); return null; }
  return data?.map(dbTaskToLocal) || [];
}

export async function insertTask(userId, task) {
  if (!isSupabaseReady) return;
  const { data, error } = await supabase
    .from('tasks')
    .insert({
      id:         task.id,
      user_id:    userId,
      title:      task.title,
      notes:      task.notes || '',
      due_at:     task.dueAt || null,
      priority:   task.priority,
      effort:     task.effort,
      status:     task.status,
      tags:       task.tags || [],
      is_overdue: task.isOverdue || false,
    })
    .select()
    .single();
  if (error) { console.error('[db] insertTask:', error.message); return; }

  // Insert subtasks if any
  if (task.subtasks?.length > 0) {
    const { error: subErr } = await supabase.from('subtasks').insert(
      task.subtasks.map((s, i) => ({
        id: s.id, task_id: task.id, user_id: userId,
        title: s.title, done: s.done, order_index: i,
      }))
    );
    if (subErr) console.error('[db] insertSubtasks:', subErr.message);
  }
}

export async function updateTaskStatus(taskId, status, completedAt = null) {
  if (!isSupabaseReady) return;
  const { error } = await supabase
    .from('tasks')
    .update({ status, completed_at: completedAt })
    .eq('id', taskId);
  if (error) console.error('[db] updateTaskStatus:', error.message);
}

export async function updateSubtask(subtaskId, done) {
  if (!isSupabaseReady) return;
  const { error } = await supabase
    .from('subtasks')
    .update({ done })
    .eq('id', subtaskId);
  if (error) console.error('[db] updateSubtask:', error.message);
}

export async function deleteTask(taskId) {
  if (!isSupabaseReady) return;
  const { error } = await supabase.from('tasks').delete().eq('id', taskId);
  if (error) console.error('[db] deleteTask:', error.message);
}

export async function snoozeTask(taskId, newDueAt) {
  if (!isSupabaseReady) return;
  const { error } = await supabase
    .from('tasks')
    .update({ due_at: newDueAt, is_overdue: false })
    .eq('id', taskId);
  if (error) console.error('[db] snoozeTask:', error.message);
}

// ─── TASK HISTORY ─────────────────────────────────────────

export async function fetchHistory(userId) {
  if (!isSupabaseReady) return null;
  const { data, error } = await supabase
    .from('task_history')
    .select('*')
    .eq('user_id', userId)
    .order('completed_at', { ascending: false })
    .limit(60);
  if (error) { console.error('[db] fetchHistory:', error.message); return null; }
  return data?.map(h => ({
    id:          h.id,
    title:       h.title,
    xpEarned:    h.xp_earned,
    goldEarned:  h.gold_earned,
    completedAt: h.completed_at,
  })) || [];
}

export async function insertHistory(userId, entry) {
  if (!isSupabaseReady) return;
  const { error } = await supabase.from('task_history').insert({
    id:          entry.id,
    user_id:     userId,
    title:       entry.title,
    xp_earned:   entry.xpEarned,
    gold_earned: entry.goldEarned,
    completed_at: entry.completedAt,
  });
  if (error) console.error('[db] insertHistory:', error.message);
}

// ─── COMBAT STATE ─────────────────────────────────────────

export async function fetchCombatState(userId) {
  if (!isSupabaseReady) return null;
  const { data, error } = await supabase
    .from('combat_state')
    .select('*')
    .eq('user_id', userId)
    .single();
  if (error) { console.error('[db] fetchCombatState:', error.message); return null; }
  return {
    currentMonsterId: data.current_monster_id,
    monsterHp:        data.monster_hp,
    monstersKilled:   data.monsters_killed,
    equipped:         data.equipped,
    inventory:        data.inventory || [],
    lowEnergyMode:    data.low_energy_mode,
    lastActiveMs:     new Date(data.last_active_at).getTime(),
  };
}

export async function upsertCombatState(userId, state) {
  if (!isSupabaseReady) return;
  const { error } = await supabase.from('combat_state').upsert({
    user_id:            userId,
    current_monster_id: state.currentMonsterId,
    monster_hp:         state.monsterHp,
    monsters_killed:    state.monstersKilled,
    equipped:           state.equipped,
    inventory:          state.inventory || [],
    low_energy_mode:    state.lowEnergyMode,
    last_active_at:     new Date().toISOString(),
  });
  if (error) console.error('[db] upsertCombatState:', error.message);
}

// ─── FOCUS SESSIONS ───────────────────────────────────────

export async function startFocusSession(userId, taskTitle, sessionId) {
  if (!isSupabaseReady) return null;
  // Generate a proper UUID v4 if sessionId isn't one
  const id = sessionId?.match(/^[0-9a-f-]{36}$/) ? sessionId : crypto.randomUUID();
  const { data, error } = await supabase
    .from('focus_sessions')
    .insert({ id, user_id: userId, task_title: taskTitle })
    .select()
    .single();
  if (error) { console.error('[db] startFocusSession:', error.message, error); return null; }
  return data;
}

export async function endFocusSession(sessionId, durationMinutes, completed, xpEarned) {
  if (!isSupabaseReady) return;
  const { error } = await supabase
    .from('focus_sessions')
    .update({
      ended_at:   new Date().toISOString(),
      duration_m: durationMinutes,
      completed,
      xp_earned:  xpEarned,
    })
    .eq('id', sessionId);
  if (error) console.error('[db] endFocusSession:', error.message);
}

// ─── SOCIAL: FRIENDS ──────────────────────────────────────

export async function searchProfiles(query) {
  if (!isSupabaseReady) return [];
  const { data, error } = await supabase
    .from('profiles')
    .select('id, display_name, title, level, avatar_id')
    .ilike('display_name', `%${query}%`)
    .limit(10);
  if (error) { console.error('[db] searchProfiles:', error.message); return []; }
  return data || [];
}

export async function sendFriendRequest(userId, friendId) {
  if (!isSupabaseReady) return false;
  const { error } = await supabase
    .from('friendships')
    .insert({ user_id: userId, friend_id: friendId, status: 'pending' });
  if (error) { console.error('[db] sendFriendRequest:', error.message); return false; }
  return true;
}

export async function acceptFriendRequest(userId, friendId) {
  if (!isSupabaseReady) return false;
  const { error } = await supabase
    .from('friendships')
    .update({ status: 'accepted' })
    .eq('user_id', friendId)
    .eq('friend_id', userId);
  if (error) { console.error('[db] acceptFriendRequest:', error.message); return false; }
  return true;
}

export async function fetchFriends(userId) {
  if (!isSupabaseReady) return [];
  // Friendships can be stored either way, query both directions
  const { data, error } = await supabase
    .from('friendships')
    .select(`
      user_id, friend_id,
      requester:profiles!friendships_user_id_fkey(id, display_name, title, level, avatar_id),
      receiver:profiles!friendships_friend_id_fkey(id, display_name, title, level, avatar_id)
    `)
    .or(`user_id.eq.${userId},friend_id.eq.${userId}`)
    .eq('status', 'accepted');
  if (error) { console.error('[db] fetchFriends:', error.message); return []; }
  return (data || []).map(f =>
    f.user_id === userId ? f.receiver : f.requester
  ).filter(Boolean);
}

export async function fetchFriendRequests(userId) {
  if (!isSupabaseReady) return [];
  const { data, error } = await supabase
    .from('friendships')
    .select('*, profiles!friendships_user_id_fkey(id, display_name, title, level, avatar_id)')
    .eq('friend_id', userId)
    .eq('status', 'pending');
  if (error) { console.error('[db] fetchFriendRequests:', error.message); return []; }
  return data || [];
}

// ─── SOCIAL: FOCUS BOOSTS ─────────────────────────────────

export async function sendBoost(sessionId, boosterId) {
  if (!isSupabaseReady) return false;
  const { error } = await supabase
    .from('focus_boosts')
    .insert({ session_id: sessionId, booster_id: boosterId });
  if (error) { console.error('[db] sendBoost:', error.message); return false; }
  return true;
}

export async function fetchActiveFriendSessions(userId) {
  if (!isSupabaseReady) return [];
  // Get friend IDs first
  const { data: friendships } = await supabase
    .from('friendships')
    .select('friend_id, user_id')
    .or(`user_id.eq.${userId},friend_id.eq.${userId}`)
    .eq('status', 'accepted');

  if (!friendships?.length) return [];

  const friendIds = friendships.map(f =>
    f.user_id === userId ? f.friend_id : f.user_id
  );

  // Get their active focus sessions (started in last 2h, not ended)
  const cutoff = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
  const { data, error } = await supabase
    .from('focus_sessions')
    .select('*, profiles!focus_sessions_user_id_fkey(display_name, level, avatar_id)')
    .in('user_id', friendIds)
    .is('ended_at', null)
    .gte('started_at', cutoff);

  if (error) { console.error('[db] fetchActiveFriendSessions:', error.message); return []; }
  return data || [];
}

// ─── BADGES ───────────────────────────────────────────────

export async function awardBadge(userId, badgeId) {
  if (!isSupabaseReady) return;
  const { error } = await supabase
    .from('user_badges')
    .upsert({ user_id: userId, badge_id: badgeId });
  if (error) console.error('[db] awardBadge:', error.message);
}

export async function fetchBadges(userId) {
  if (!isSupabaseReady) return [];
  const { data, error } = await supabase
    .from('user_badges')
    .select('*')
    .eq('user_id', userId);
  if (error) { console.error('[db] fetchBadges:', error.message); return []; }
  return data || [];
}

export async function setShowcaseBadge(userId, badgeId, showcased) {
  if (!isSupabaseReady) return;
  const { error } = await supabase
    .from('user_badges')
    .update({ showcased })
    .eq('user_id', userId)
    .eq('badge_id', badgeId);
  if (error) console.error('[db] setShowcaseBadge:', error.message);
}

// ─── REAL-TIME SUBSCRIPTIONS ──────────────────────────────

/**
 * Subscribe to boosts on a specific focus session.
 * Calls onBoost({ boosterId }) when a new boost arrives.
 * Returns an unsubscribe function.
 */
export function subscribeToBoosts(sessionId, onBoost) {
  if (!isSupabaseReady) return () => {};
  const channel = supabase
    .channel(`boosts:${sessionId}`)
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'focus_boosts',
      filter: `session_id=eq.${sessionId}`,
    }, payload => onBoost(payload.new))
    .subscribe();

  return () => supabase.removeChannel(channel);
}

/**
 * Subscribe to incoming friend requests.
 * Returns an unsubscribe function.
 */
export function subscribeToFriendRequests(userId, onRequest) {
  if (!isSupabaseReady) return () => {};
  const channel = supabase
    .channel(`friend_requests:${userId}`)
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'friendships',
      filter: `friend_id=eq.${userId}`,
    }, payload => onRequest(payload.new))
    .subscribe();

  return () => supabase.removeChannel(channel);
}

export async function updateDisplayName(userId, displayName) {
  if (!isSupabaseReady) return false;
  const { error } = await supabase
    .from('profiles')
    .update({ display_name: displayName })
    .eq('id', userId);
  if (error) { console.error('[db] updateDisplayName:', error.message); return false; }
  return true;
}

export async function updateAvatar(userId, avatarId) {
  if (!isSupabaseReady) return false;
  const { error } = await supabase
    .from('profiles')
    .update({ avatar_id: avatarId })
    .eq('id', userId);
  if (error) { console.error('[db] updateAvatar:', error.message); return false; }
  return true;
}

// ─── WALL POSTS ───────────────────────────────────────────

export async function fetchWallPosts(wallOwnerId) {
  if (!isSupabaseReady) return [];
  const { data, error } = await supabase
    .from('wall_posts')
    .select('*, profiles!wall_posts_author_id_fkey(id, display_name, avatar_id)')
    .eq('wall_owner_id', wallOwnerId)
    .eq('is_deleted', false)
    .order('created_at', { ascending: false })
    .limit(50);
  if (error) { console.error('[db] fetchWallPosts:', error.message); return []; }
  return data || [];
}

export async function postToWall(wallOwnerId, authorId, content) {
  if (!isSupabaseReady) return null;
  const { data, error } = await supabase
    .from('wall_posts')
    .insert({ wall_owner_id: wallOwnerId, author_id: authorId, content })
    .select('*, profiles!wall_posts_author_id_fkey(id, display_name, avatar_id)')
    .single();
  if (error) { console.error('[db] postToWall:', error.message); return null; }
  return data;
}

export async function deleteWallPost(postId) {
  if (!isSupabaseReady) return false;
  const { error } = await supabase
    .from('wall_posts')
    .update({ is_deleted: true })
    .eq('id', postId);
  if (error) { console.error('[db] deleteWallPost:', error.message); return false; }
  return true;
}

export function subscribeToWallPosts(wallOwnerId, onNew) {
  if (!isSupabaseReady) return () => {};
  const channel = supabase
    .channel(`wall:${wallOwnerId}`)
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'wall_posts',
      filter: `wall_owner_id=eq.${wallOwnerId}`,
    }, payload => onNew(payload.new))
    .subscribe();
  return () => supabase.removeChannel(channel);
}

// ─── BLOCK SYSTEM ─────────────────────────────────────────

export async function blockUser(blockerId, blockedId) {
  if (!isSupabaseReady) return false;
  const { error } = await supabase
    .from('blocked_users')
    .insert({ blocker_id: blockerId, blocked_id: blockedId });
  if (error) { console.error('[db] blockUser:', error.message); return false; }
  // Also remove the friendship in both directions
  await supabase.from('friendships').delete()
    .or(`and(user_id.eq.${blockerId},friend_id.eq.${blockedId}),and(user_id.eq.${blockedId},friend_id.eq.${blockerId})`);
  return true;
}

export async function unblockUser(blockerId, blockedId) {
  if (!isSupabaseReady) return false;
  const { error } = await supabase
    .from('blocked_users')
    .delete()
    .eq('blocker_id', blockerId)
    .eq('blocked_id', blockedId);
  if (error) { console.error('[db] unblockUser:', error.message); return false; }
  return true;
}

export async function fetchBlockedUsers(userId) {
  if (!isSupabaseReady) return [];
  const { data, error } = await supabase
    .from('blocked_users')
    .select('blocked_id, profiles!blocked_users_blocked_id_fkey(id, display_name)')
    .eq('blocker_id', userId);
  if (error) { console.error('[db] fetchBlockedUsers:', error.message); return []; }
  return data || [];
}

export async function isUserBlocked(blockerId, blockedId) {
  if (!isSupabaseReady) return false;
  const { data } = await supabase
    .from('blocked_users')
    .select('blocker_id')
    .eq('blocker_id', blockerId)
    .eq('blocked_id', blockedId)
    .single();
  return !!data;
}

// ─── LOCAL ↔ DB MAPPING ───────────────────────────────────

function dbTaskToLocal(t) {
  return {
    id:          t.id,
    title:       t.title,
    notes:       t.notes || '',
    dueAt:       t.due_at,
    priority:    t.priority,
    effort:      t.effort,
    status:      t.status,
    tags:        t.tags || [],
    isOverdue:   t.is_overdue,
    createdAt:   t.created_at,
    completedAt: t.completed_at,
    subtasks:    (t.subtasks || [])
      .sort((a, b) => a.order_index - b.order_index)
      .map(s => ({ id: s.id, title: s.title, done: s.done })),
  };
}

function dbProfileToLocal(p) {
  return {
    id:              p.id,
    displayName:     p.display_name,
    avatarId:        p.avatar_id || 'the_planner',
    title:           p.title,
    level:           p.level,
    xp:              p.xp,
    xpToNext:        p.xp_to_next,
    gold:            p.gold,
    streak:          p.streak,
    talentPoints:    p.talent_points,
    unlockedTalents: p.unlocked_talents || [],
  };
}

export { dbProfileToLocal };
