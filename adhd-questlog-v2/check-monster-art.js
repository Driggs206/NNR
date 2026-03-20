#!/usr/bin/env node
// ============================================================
// check-monster-art.js
// Checks which monster art files are missing from public/art/monsters/
// Usage: node check-monster-art.js
// ============================================================

const fs   = require('fs');
const path = require('path');

const MONSTERS_FILE = path.join(__dirname, 'src/data/monsters.js');
const PUBLIC_DIR    = path.join(__dirname, 'public');

const content = fs.readFileSync(MONSTERS_FILE, 'utf8');

// Extract all id + art pairs
const idMatches  = [...content.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);
const artMatches = [...content.matchAll(/art:\s*'([^']+)'/g)].map(m => m[1]);

// Also extract names for display
const nameMatches = [...content.matchAll(/name:\s*'([^']+)'/g)].map(m => m[1]);

const missing = [];
const found   = [];
const noArt   = [];

idMatches.forEach((id, i) => {
  // Skip non-monster ids (exports like LOOT_CONFIG etc don't have names)
  const name    = nameMatches[i] || id;
  const artPath = artMatches[i];

  if (!artPath) {
    noArt.push({ id, name });
    return;
  }

  const absPath = path.join(PUBLIC_DIR, artPath);
  const filename = path.basename(artPath);

  if (fs.existsSync(absPath)) {
    found.push({ id, name, filename });
  } else {
    missing.push({ id, name, filename });
  }
});

// ── Categorise missing by type ────────────────────────────
const missingTier1     = missing.filter(m => m.id.match(/^(slime|goblin|imp|rat|bat|mushroom|sprite|slug|ghost|crab)/));
const missingTier2     = missing.filter(m => m.id.match(/^(troll|witch|golem_routine|harpy|wraith_deadline|mimic|hydra_tabs|vampire|scarecrow|golem_meeting)/));
const missingTier3     = missing.filter(m => m.id.match(/^(dragon_backlog|lich|colossus_inbox|werewolf|titan_context|specter_impostor|basilisk|golem_resistance|succubus|hydra_meetings)/));
const missingTier4     = missing.filter(m => m.id.match(/^(leviathan|titan_paralysis|phoenix|colossus_shame|wraith_identity|dragon_system|specter_comparison|hydra_spiral|titan_expectation|demon)/));
const missingBoss      = missing.filter(m => m.id.startsWith('boss_'));
const missingQuestBoss = missing.filter(m => m.id.startsWith('qboss_'));

console.log('\n══════════════════════════════════════════════════');
console.log('  DOPAMINE QUEST — MONSTER ART AUDIT');
console.log('══════════════════════════════════════════════════\n');

if (missing.length === 0) {
  console.log('🎉 All monster art files present!\n');
} else {
  function printGroup(label, group) {
    if (group.length === 0) return;
    console.log(`${label} (${group.length} missing):`);
    group.forEach(({ id, filename }) => {
      console.log(`   ✗ ${filename.padEnd(45)} ← ${id}`);
    });
    console.log('');
  }

  printGroup('❌ TIER 1 — Small foes',        missingTier1);
  printGroup('❌ TIER 2 — Medium foes',        missingTier2);
  printGroup('❌ TIER 3 — Hard foes',          missingTier3);
  printGroup('❌ TIER 4 — Elite foes',         missingTier4);
  printGroup('❌ SOLO BOSSES',                 missingBoss);
  printGroup('❌ QUEST BOSSES',                missingQuestBoss);
}

if (noArt.length > 0) {
  console.log(`⚠  Monsters with no art field (${noArt.length}):`);
  noArt.forEach(({ id }) => console.log(`   - ${id}`));
  console.log('');
}

console.log('──────────────────────────────────────────────────');
console.log(`  Found:   ${found.length}`);
console.log(`  Missing: ${missing.length}`);
console.log(`  No art field: ${noArt.length}`);
console.log(`  Total:   ${idMatches.length}`);
console.log('──────────────────────────────────────────────────\n');
