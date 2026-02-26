// ═══════════════════════════════════════ DATA: ENEMIES ═══════════════════════
// Add new enemy / boss templates here.

export const ENEMY_TYPES = {
  sunsprite: { name:'Sunbeam Sprite', hp:30,  speed:80,  size:18, color:'#facc15', xp:3,  gold:2 },
  honeybee:  { name:'Happy Honeybee', hp:40,  speed:110, size:16, color:'#fbbf24', xp:4,  gold:2 },
  dewdrop:   { name:'Morning Dew',    hp:22,  speed:70,  size:14, color:'#67e8f9', xp:2,  gold:1 },
  daybloom:  { name:'Daybloom',       hp:55,  speed:60,  size:20, color:'#f97316', xp:5,  gold:3 },
  gem:       { name:'Gleaming Gem',   hp:85,  speed:45,  size:22, color:'#a855f7', xp:8,  gold:5 },
};

export const BOSS_TYPES = {
  boss_sunkeeper: { name:'Grand Sunkeeper', hp:800,  speed:70, size:50, color:'#facc15', xp:80, gold:60 },
  boss_blossom:   { name:'Queen Blossom',   hp:950,  speed:60, size:54, color:'#fb7185', xp:90, gold:70 },
};
