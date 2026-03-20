#!/usr/bin/env node
// ============================================================
// add-art-icons.js
// Adds artIcon field to every item entry in a JS item file
// Usage: node add-art-icons.js src/data/items/boots.js
//        node add-art-icons.js src/data/items/*.js
// ============================================================

const fs   = require('fs');
const path = require('path');

function nameToFilename(name) {
  return name
    .toLowerCase()
    .replace(/['']/g, '')        // remove apostrophes
    .replace(/[^a-z0-9]+/g, '_') // non-alphanumeric → underscore
    .replace(/^_|_$/g, '');      // trim leading/trailing underscores
}

function addArtIcons(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let count = 0;

  // Match each item entry: id: 'some_id', name: 'Some Name'
  // Inject artIcon after the name field if not already present
  content = content.replace(
    /(id:\s*'[^']+',\s*name:\s*'([^']+)',\s*slot:\s*'([^']+)',)(?!\s*artIcon)/g,
    (match, prefix, name, slot) => {
      const filename = nameToFilename(name);
      count++;
      return `${prefix} artIcon: '/art/items/${filename}_icon.png',`;
    }
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ ${path.basename(filePath)} — added artIcon to ${count} items`);
}

const files = process.argv.slice(2);
if (files.length === 0) {
  console.log('Usage: node add-art-icons.js <file.js> [file2.js ...]');
  console.log('Example: node add-art-icons.js src/data/items/boots.js');
  process.exit(1);
}

files.forEach(f => {
  if (!fs.existsSync(f)) {
    console.error(`✗ File not found: ${f}`);
    return;
  }
  addArtIcons(f);
});

console.log('\nDone! Filename convention:');
console.log('  "Boots of Hyperfocus" → boots_of_hyperfocus_icon.png');
console.log('  "Robe of Deep Work"   → robe_of_deep_work_icon.png');
