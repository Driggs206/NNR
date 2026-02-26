// ═══════════════════════════════════════ DATA: UPGRADES ═════════════════════

export const UPGRADE_POOL = [
  { id:'maxHp',      name:'Robust Hide',      desc:'+20 max HP.',              rarity:'common' },
  { id:'speed',      name:'Night Stride',     desc:'+10% move speed.',         rarity:'common' },
  { id:'damage',     name:'Cursed Fangs',     desc:'+15% damage.',             rarity:'rare'   },
  { id:'cooldown',   name:'Moon Rhythm',      desc:'-10% weapon cooldown.',    rarity:'common' },
  { id:'range',      name:'Long Shadows',     desc:'+15% weapon range.',       rarity:'rare'   },
  { id:'pierce',     name:'Through the Dawn', desc:'+1 pierce.',               rarity:'rare'   },
  { id:'projectile', name:'Extra Echoes',     desc:'+1 projectile.',           rarity:'rare'   },
  { id:'regen',      name:'Dark Sap',         desc:'+1 HP regen/sec.',         rarity:'epic'   },
  { id:'xpMagnet',   name:'Lure Glyph',       desc:'+30% pickup radius.',      rarity:'common' },
  { id:'armor',      name:'Bark Plating',     desc:'6% damage reduction.',     rarity:'common' },
];

export const TOWN_UPGRADES = [
  { id:'fortifiedDen',  name:'Fortified Den',   desc:'+20 max HP per rank.',          maxRank:6, baseCost:60,  costMul:1.5 },
  { id:'nightStride',   name:'Night Stride',    desc:'+8% speed per rank.',           maxRank:5, baseCost:70,  costMul:1.6 },
  { id:'cursedFangs',   name:'Cursed Fangs',    desc:'+12% damage per rank.',         maxRank:5, baseCost:70,  costMul:1.6 },
  { id:'barkPlating',   name:'Bark Plating',    desc:'+6% armor per rank.',           maxRank:4, baseCost:80,  costMul:1.7 },
  { id:'darkSap',       name:'Dark Sap',        desc:'+1 HP regen/sec per rank.',     maxRank:4, baseCost:80,  costMul:1.7 },
  { id:'energyCrystal', name:'Energy Crystal',  desc:'+15 starting energy per rank.', maxRank:4, baseCost:65,  costMul:1.5 },
  { id:'lureGlyph',     name:'Lure Glyph',      desc:'+25% pickup radius per rank.',  maxRank:3, baseCost:90,  costMul:1.8 },
];
