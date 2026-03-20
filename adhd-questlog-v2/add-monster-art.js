#!/usr/bin/env node
// ============================================================
// add-monster-art.js
// Adds art field to every monster entry in monsters.js
// Usage: node add-monster-art.js
// ============================================================

const fs   = require('fs');
const path = require('path');

const MONSTERS_FILE = path.join(__dirname, 'src/data/monsters.js');

let content = fs.readFileSync(MONSTERS_FILE, 'utf8');
let count   = 0;

// Match each monster entry's id field, add art after it if not already present
// Looks for: id: 'some_id', name: '...'  and injects art after the id
content = content.replace(
  /(\{ id: '([^']+)',)(?![^}]*art:)/g,
  (match, prefix, id) => {
    count++;
    return `${prefix} art: '/art/monsters/${id}.png',`;
  }
);

fs.writeFileSync(MONSTERS_FILE, content, 'utf8');
console.log(`✓ monsters.js — added art field to ${count} monsters`);
console.log('\nFilename convention:');
console.log('  id: slime_distract     → slime_distract.png');
console.log('  id: boss_burnout       → boss_burnout.png');
console.log('  id: qboss_adhd_itself  → qboss_adhd_itself.png');
console.log('\nDrop images in: public/art/monsters/');
