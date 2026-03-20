#!/usr/bin/env node
// ============================================================
// check-art.js
// Checks which artIcon (and art) files are missing from public/art/items/
// Usage: node check-art.js
// ============================================================

const fs   = require('fs');
const path = require('path');

const ITEMS_DIR  = path.join(__dirname, 'src/data/items');
const PUBLIC_DIR = path.join(__dirname, 'public');

// ── Collect all item files ────────────────────────────────
const itemFiles = ['body.js', 'boots.js', 'gloves.js', 'head.js', 'legs.js', 'necklace.js', 'rings.js'];

const missingIcon = [];
const missingArt  = [];
const foundIcon   = [];
const foundArt    = [];
const noIcon      = [];
const noArt       = [];

itemFiles.forEach(filename => {
  const filePath = path.join(ITEMS_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠ Could not find ${filename}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Extract all item blocks: id + artIcon + art fields
  const idMatches      = [...content.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);
  const artIconMatches = [...content.matchAll(/artIcon:\s*'([^']+)'/g)].map(m => m[1]);
  const artMatches     = [...content.matchAll(/(?<![a-zA-Z])art:\s*'([^']+)'/g)].map(m => m[1]);

  // Map id → artIcon and id → art by position in file
  // We pair them by order of appearance
  idMatches.forEach((id, i) => {
    // artIcon check
    const iconPath = artIconMatches[i];
    if (!iconPath) {
      noIcon.push({ id, file: filename });
    } else {
      const absPath = path.join(PUBLIC_DIR, iconPath);
      if (fs.existsSync(absPath)) {
        foundIcon.push({ id, path: iconPath });
      } else {
        missingIcon.push({ id, path: iconPath, file: filename });
      }
    }

    // art check
    const artPath = artMatches[i];
    if (!artPath) {
      noArt.push({ id, file: filename });
    } else {
      const absPath = path.join(PUBLIC_DIR, artPath);
      if (fs.existsSync(absPath)) {
        foundArt.push({ id, path: artPath });
      } else {
        missingArt.push({ id, path: artPath, file: filename });
      }
    }
  });
});

// ── Report ────────────────────────────────────────────────
console.log('\n══════════════════════════════════════════');
console.log('  DOPAMINE QUEST — ART AUDIT');
console.log('══════════════════════════════════════════\n');

if (missingIcon.length === 0 && missingArt.length === 0) {
  console.log('🎉 All art files present!\n');
} else {

  if (missingIcon.length > 0) {
    console.log(`❌ MISSING artIcon files (${missingIcon.length}):`);
    missingIcon.forEach(({ id, path: p }) => {
      const filename = path.basename(p);
      console.log(`   ✗ ${filename.padEnd(52)} ← ${id}`);
    });
    console.log('');
  }

  if (missingArt.length > 0) {
    console.log(`❌ MISSING art (full card) files (${missingArt.length}):`);
    missingArt.forEach(({ id, path: p }) => {
      const filename = path.basename(p);
      console.log(`   ✗ ${filename.padEnd(52)} ← ${id}`);
    });
    console.log('');
  }
}

if (noIcon.length > 0) {
  console.log(`⚠  Items with no artIcon field (${noIcon.length}):`);
  noIcon.forEach(({ id }) => console.log(`   - ${id}`));
  console.log('');
}

console.log('──────────────────────────────────────────');
console.log(`  artIcon: ${foundIcon.length} found, ${missingIcon.length} missing, ${noIcon.length} no field`);
console.log(`  art:     ${foundArt.length} found, ${missingArt.length} missing, ${noArt.length} no field`);
console.log('──────────────────────────────────────────\n');
