// ============================================================
// AVATARS — Profile pictures
// Each archetype has male + female variants (_m / _f)
// 16 default (8 archetypes × 2) + 30 unlockable (15 × 2)
// Add art field once artwork is ready:
//   art: '/art/avatars/the_planner_f.png'
// ============================================================

export const AVATARS = {

  // ── DEFAULT (16) — available to all players ─────────────

  the_planner_f: {
    id: 'the_planner_f', name: 'The Planner', variant: 'f',
    icon: '📋', art: '/art/avatars/the_planner_f.png',
    description: 'Lists within lists. Beautiful, terrifying lists.',
    unlocked: true,
  },
  the_planner_m: {
    id: 'the_planner_m', name: 'The Planner', variant: 'm',
    icon: '📋', art: '/art/avatars/the_planner_m.png',
    description: 'Lists within lists. Beautiful, terrifying lists.',
    unlocked: true,
  },

  the_sprinter_f: {
    id: 'the_sprinter_f', name: 'The Sprinter', variant: 'f',
    icon: '⚡', art: '/art/avatars/the_sprinter_f.png',
    description: 'Bursts of brilliance. Then naps.',
    unlocked: true,
  },
  the_sprinter_m: {
    id: 'the_sprinter_m', name: 'The Sprinter', variant: 'm',
    icon: '⚡', art: '/art/avatars/the_sprinter_m.png',
    description: 'Bursts of brilliance. Then naps.',
    unlocked: true,
  },

  the_night_owl_f: {
    id: 'the_night_owl_f', name: 'The Night Owl', variant: 'f',
    icon: '🦉', art: '/art/avatars/the_night_owl_f.png',
    description: '2am is when the real work happens.',
    unlocked: true,
  },
  the_night_owl_m: {
    id: 'the_night_owl_m', name: 'The Night Owl', variant: 'm',
    icon: '🦉', art: '/art/avatars/the_night_owl_m.png',
    description: '2am is when the real work happens.',
    unlocked: true,
  },

  the_hyperfocuser_f: {
    id: 'the_hyperfocuser_f', name: 'The Hyperfocuser', variant: 'f',
    icon: '🔮', art: '/art/avatars/the_hyperfocuser_f.png',
    description: 'Four hours passed. Lunch did not.',
    unlocked: true,
  },
  the_hyperfocuser_m: {
    id: 'the_hyperfocuser_m', name: 'The Hyperfocuser', variant: 'm',
    icon: '🔮', art: '/art/avatars/the_hyperfocuser_m.png',
    description: 'Four hours passed. Lunch did not.',
    unlocked: true,
  },

  the_wanderer_f: {
    id: 'the_wanderer_f', name: 'The Wanderer', variant: 'f',
    icon: '🧭', art: '/art/avatars/the_wanderer_f.png',
    description: 'Not lost. Just exploring adjacent tasks.',
    unlocked: true,
  },
  the_wanderer_m: {
    id: 'the_wanderer_m', name: 'The Wanderer', variant: 'm',
    icon: '🧭', art: '/art/avatars/the_wanderer_m.png',
    description: 'Not lost. Just exploring adjacent tasks.',
    unlocked: true,
  },

  the_warrior_f: {
    id: 'the_warrior_f', name: 'The Warrior', variant: 'f',
    icon: '⚔️', art: '/art/avatars/the_warrior_f.png',
    description: 'Tasks are enemies. They will be defeated.',
    unlocked: true,
  },
  the_warrior_m: {
    id: 'the_warrior_m', name: 'The Warrior', variant: 'm',
    icon: '⚔️', art: '/art/avatars/the_warrior_m.png',
    description: 'Tasks are enemies. They will be defeated.',
    unlocked: true,
  },

  the_scholar_f: {
    id: 'the_scholar_f', name: 'The Scholar', variant: 'f',
    icon: '📚', art: '/art/avatars/the_scholar_f.png',
    description: 'Researching the best way to start. Still researching.',
    unlocked: true,
  },
  the_scholar_m: {
    id: 'the_scholar_m', name: 'The Scholar', variant: 'm',
    icon: '📚', art: '/art/avatars/the_scholar_m.png',
    description: 'Researching the best way to start. Still researching.',
    unlocked: true,
  },

  the_architect_f: {
    id: 'the_architect_f', name: 'The Architect', variant: 'f',
    icon: '🏗', art: '/art/avatars/the_architect_f.png',
    description: 'Every system is a masterpiece. Eventually.',
    unlocked: true,
  },
  the_architect_m: {
    id: 'the_architect_m', name: 'The Architect', variant: 'm',
    icon: '🏗', art: '/art/avatars/the_architect_m.png',
    description: 'Every system is a masterpiece. Eventually.',
    unlocked: true,
  },

  // ── UNLOCKABLE (30) — earned through play ──────────────

  the_streaker_f: {
    id: 'the_streaker_f', name: 'The Streaker', variant: 'f',
    icon: '🔥', art: '/art/avatars/the_streaker_f.png',
    description: 'Seven days. No breaks. No excuses.',
    unlocked: false, unlockCondition: 'week_streak', unlockHint: 'Reach a 7-day streak',
  },
  the_streaker_m: {
    id: 'the_streaker_m', name: 'The Streaker', variant: 'm',
    icon: '🔥', art: '/art/avatars/the_streaker_m.png',
    description: 'Seven days. No breaks. No excuses.',
    unlocked: false, unlockCondition: 'week_streak', unlockHint: 'Reach a 7-day streak',
  },

  the_centurion_f: {
    id: 'the_centurion_f', name: 'The Centurion', variant: 'f',
    icon: '🏆', art: '/art/avatars/the_centurion_f.png',
    description: '100 tasks. Counted. All of them.',
    unlocked: false, unlockCondition: 'hundred_tasks', unlockHint: 'Complete 100 tasks',
  },
  the_centurion_m: {
    id: 'the_centurion_m', name: 'The Centurion', variant: 'm',
    icon: '🏆', art: '/art/avatars/the_centurion_m.png',
    description: '100 tasks. Counted. All of them.',
    unlocked: false, unlockCondition: 'hundred_tasks', unlockHint: 'Complete 100 tasks',
  },

  the_deep_thinker_f: {
    id: 'the_deep_thinker_f', name: 'The Deep Thinker', variant: 'f',
    icon: '🧠', art: '/art/avatars/the_deep_thinker_f.png',
    description: 'Ten focus sessions. That brain is getting a workout.',
    unlocked: false, unlockCondition: 'focus_ten', unlockHint: 'Complete 10 focus sessions',
  },
  the_deep_thinker_m: {
    id: 'the_deep_thinker_m', name: 'The Deep Thinker', variant: 'm',
    icon: '🧠', art: '/art/avatars/the_deep_thinker_m.png',
    description: 'Ten focus sessions. That brain is getting a workout.',
    unlocked: false, unlockCondition: 'focus_ten', unlockHint: 'Complete 10 focus sessions',
  },

  the_early_bird_f: {
    id: 'the_early_bird_f', name: 'The Early Bird', variant: 'f',
    icon: '🌅', art: '/art/avatars/the_early_bird_f.png',
    description: 'Up before the sun. Probably regrets it.',
    unlocked: false, unlockCondition: 'early_bird', unlockHint: 'Complete a task before 9am',
  },
  the_early_bird_m: {
    id: 'the_early_bird_m', name: 'The Early Bird', variant: 'm',
    icon: '🌅', art: '/art/avatars/the_early_bird_m.png',
    description: 'Up before the sun. Probably regrets it.',
    unlocked: false, unlockCondition: 'early_bird', unlockHint: 'Complete a task before 9am',
  },

  the_rising_star_f: {
    id: 'the_rising_star_f', name: 'The Rising Star', variant: 'f',
    icon: '⭐', art: '/art/avatars/the_rising_star_f.png',
    description: 'Level 5. The journey truly begins.',
    unlocked: false, unlockCondition: 'level_5', unlockHint: 'Reach Level 5',
  },
  the_rising_star_m: {
    id: 'the_rising_star_m', name: 'The Rising Star', variant: 'm',
    icon: '⭐', art: '/art/avatars/the_rising_star_m.png',
    description: 'Level 5. The journey truly begins.',
    unlocked: false, unlockCondition: 'level_5', unlockHint: 'Reach Level 5',
  },

  the_socialite_f: {
    id: 'the_socialite_f', name: 'The Socialite', variant: 'f',
    icon: '🤝', art: '/art/avatars/the_socialite_f.png',
    description: 'Not alone anymore. That changes everything.',
    unlocked: false, unlockCondition: 'first_friend', unlockHint: 'Add your first friend',
  },
  the_socialite_m: {
    id: 'the_socialite_m', name: 'The Socialite', variant: 'm',
    icon: '🤝', art: '/art/avatars/the_socialite_m.png',
    description: 'Not alone anymore. That changes everything.',
    unlocked: false, unlockCondition: 'first_friend', unlockHint: 'Add your first friend',
  },

  the_supporter_f: {
    id: 'the_supporter_f', name: 'The Supporter', variant: 'f',
    icon: '💙', art: '/art/avatars/the_supporter_f.png',
    description: 'You lifted someone else up today.',
    unlocked: false, unlockCondition: 'boost_given', unlockHint: 'Send a focus boost to a friend',
  },
  the_supporter_m: {
    id: 'the_supporter_m', name: 'The Supporter', variant: 'm',
    icon: '💙', art: '/art/avatars/the_supporter_m.png',
    description: 'You lifted someone else up today.',
    unlocked: false, unlockCondition: 'boost_given', unlockHint: 'Send a focus boost to a friend',
  },

  the_champion_f: {
    id: 'the_champion_f', name: 'The Champion', variant: 'f',
    icon: '👑', art: '/art/avatars/the_champion_f.png',
    description: 'MVP. Others witness your dedication.',
    unlocked: false, unlockCondition: 'quest_mvp', unlockHint: 'Top contributor on a multiplayer quest',
  },
  the_champion_m: {
    id: 'the_champion_m', name: 'The Champion', variant: 'm',
    icon: '👑', art: '/art/avatars/the_champion_m.png',
    description: 'MVP. Others witness your dedication.',
    unlocked: false, unlockCondition: 'quest_mvp', unlockHint: 'Top contributor on a multiplayer quest',
  },

  the_team_player_f: {
    id: 'the_team_player_f', name: 'The Team Player', variant: 'f',
    icon: '🌟', art: '/art/avatars/the_team_player_f.png',
    description: 'Stronger together. You proved it.',
    unlocked: false, unlockCondition: 'quest_complete', unlockHint: 'Complete a multiplayer quest',
  },
  the_team_player_m: {
    id: 'the_team_player_m', name: 'The Team Player', variant: 'm',
    icon: '🌟', art: '/art/avatars/the_team_player_m.png',
    description: 'Stronger together. You proved it.',
    unlocked: false, unlockCondition: 'quest_complete', unlockHint: 'Complete a multiplayer quest',
  },

  the_veteran_f: {
    id: 'the_veteran_f', name: 'The Veteran', variant: 'f',
    icon: '🛡', art: '/art/avatars/the_veteran_f.png',
    description: 'Level 10. You know the grind now.',
    unlocked: false, unlockCondition: 'level_10', unlockHint: 'Reach Level 10',
  },
  the_veteran_m: {
    id: 'the_veteran_m', name: 'The Veteran', variant: 'm',
    icon: '🛡', art: '/art/avatars/the_veteran_m.png',
    description: 'Level 10. You know the grind now.',
    unlocked: false, unlockCondition: 'level_10', unlockHint: 'Reach Level 10',
  },

  the_unstoppable_f: {
    id: 'the_unstoppable_f', name: 'The Unstoppable', variant: 'f',
    icon: '🚀', art: '/art/avatars/the_unstoppable_f.png',
    description: 'A 30-day streak. Truly unstoppable.',
    unlocked: false, unlockCondition: 'month_streak', unlockHint: 'Reach a 30-day streak',
  },
  the_unstoppable_m: {
    id: 'the_unstoppable_m', name: 'The Unstoppable', variant: 'm',
    icon: '🚀', art: '/art/avatars/the_unstoppable_m.png',
    description: 'A 30-day streak. Truly unstoppable.',
    unlocked: false, unlockCondition: 'month_streak', unlockHint: 'Reach a 30-day streak',
  },

  the_legend_f: {
    id: 'the_legend_f', name: 'The Legend', variant: 'f',
    icon: '🌠', art: '/art/avatars/the_legend_f.png',
    description: '500 tasks. A legend indeed.',
    unlocked: false, unlockCondition: 'five_hundred_tasks', unlockHint: 'Complete 500 tasks',
  },
  the_legend_m: {
    id: 'the_legend_m', name: 'The Legend', variant: 'm',
    icon: '🌠', art: '/art/avatars/the_legend_m.png',
    description: '500 tasks. A legend indeed.',
    unlocked: false, unlockCondition: 'five_hundred_tasks', unlockHint: 'Complete 500 tasks',
  },

  the_phantom_f: {
    id: 'the_phantom_f', name: 'The Phantom', variant: 'f',
    icon: '👻', art: '/art/avatars/the_phantom_f.png',
    description: 'Completes tasks. Leaves no trace.',
    unlocked: false, unlockCondition: 'level_20', unlockHint: 'Reach Level 20',
  },
  the_phantom_m: {
    id: 'the_phantom_m', name: 'The Phantom', variant: 'm',
    icon: '👻', art: '/art/avatars/the_phantom_m.png',
    description: 'Completes tasks. Leaves no trace.',
    unlocked: false, unlockCondition: 'level_20', unlockHint: 'Reach Level 20',
  },

  the_void_walker_f: {
    id: 'the_void_walker_f', name: 'The Void Walker', variant: 'f',
    icon: '🌌', art: '/art/avatars/the_void_walker_f.png',
    description: 'Stared into the void of an empty inbox. Smiled.',
    unlocked: false, unlockCondition: 'hundred_focus', unlockHint: 'Complete 100 focus sessions',
  },
  the_void_walker_m: {
    id: 'the_void_walker_m', name: 'The Void Walker', variant: 'm',
    icon: '🌌', art: '/art/avatars/the_void_walker_m.png',
    description: 'Stared into the void of an empty inbox. Smiled.',
    unlocked: false, unlockCondition: 'hundred_focus', unlockHint: 'Complete 100 focus sessions',
  },

  the_transcendent_f: {
    id: 'the_transcendent_f', name: 'The Transcendent', variant: 'f',
    icon: '✨', art: '/art/avatars/the_transcendent_f.png',
    description: 'Beyond distraction. Beyond deadline. Beyond.',
    unlocked: false, unlockCondition: 'level_50', unlockHint: 'Reach Level 50',
  },
  the_transcendent_m: {
    id: 'the_transcendent_m', name: 'The Transcendent', variant: 'm',
    icon: '✨', art: '/art/avatars/the_transcendent_m.png',
    description: 'Beyond distraction. Beyond deadline. Beyond.',
    unlocked: false, unlockCondition: 'level_50', unlockHint: 'Reach Level 50',
  },
};

export const DEFAULT_AVATAR = 'the_planner_f';

export function getAvatar(id) {
  return AVATARS[id] || AVATARS[DEFAULT_AVATAR];
}

// Get avatars grouped by archetype name, pairs sorted f then m
export function getAvatarGroups(earnedBadgeIds = []) {
  const all = Object.values(AVATARS);
  const groups = {};
  all.forEach(av => {
    if (!groups[av.name]) groups[av.name] = [];
    groups[av.name].push({
      ...av,
      isUnlocked: av.unlocked || earnedBadgeIds.includes(av.unlockCondition),
    });
  });
  // Sort within each group: f first, then m
  Object.values(groups).forEach(g => g.sort((a, b) => a.variant === 'f' ? -1 : 1));
  return groups;
}

export function getUnlockedAvatars(earnedBadgeIds = []) {
  return Object.values(AVATARS).filter(a =>
    a.unlocked || earnedBadgeIds.includes(a.unlockCondition)
  );
}

export function isAvatarUnlocked(avatarId, earnedBadgeIds = []) {
  const avatar = AVATARS[avatarId];
  if (!avatar) return false;
  return avatar.unlocked || earnedBadgeIds.includes(avatar.unlockCondition);
}
