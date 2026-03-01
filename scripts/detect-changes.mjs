#!/usr/bin/env node
// Script to detect changes between models.dev imports
// Usage: node scripts/detect-changes.mjs

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';

const CURRENT_FILE = join(process.cwd(), 'src', 'data', 'models-dev-import.ts');
const BACKUP_FILE = join(process.cwd(), 'scripts', 'models-dev-backup.ts');

function getFileHash(content) {
  return createHash('sha256').update(content).digest('hex');
}

function extractModels(content) {
  const match = content.match(/export const modelsDevMetadata:\s*Record<string,\s*ModelMetadataOverride>\s*=\s*({[\s\S]*?});/);
  if (!match) return [];
  
  // Extract model IDs
  const modelIds = [];
  const regex = /"([^"]+)":\s*{/g;
  let match2;
  while ((match2 = regex.exec(match[1])) !== null) {
    modelIds.push(match2[1]);
  }
  return modelIds;
}

function countFeatures(content) {
  const features = {
    family: (content.match(/family:/g) || []).length,
    knowledgeCutoff: (content.match(/knowledgeCutoff:/g) || []).length,
    reasoning: (content.match(/reasoning:/g) || []).length,
    cacheInput: (content.match(/cacheInput:/g) || []).length,
    maxOutputTokens: (content.match(/maxOutputTokens:/g) || []).length,
  };
  return features;
}

console.log('🔍 Detecting changes in models.dev import...\n');

// Check if current file exists
if (!readFileSync(CURRENT_FILE, 'utf-8')) {
  console.error('❌ Current file not found:', CURRENT_FILE);
  process.exit(1);
}

const currentContent = readFileSync(CURRENT_FILE, 'utf-8');
const currentHash = getFileHash(currentContent);
const currentModels = extractModels(currentContent);
const currentFeatures = countFeatures(currentContent);

console.log('📊 Current Import:');
console.log(`   Hash: ${currentHash.slice(0, 16)}...`);
console.log(`   Models: ${currentModels.length.toLocaleString()}`);
console.log(`   Features:`);
console.log(`     - Family: ${currentFeatures.family.toLocaleString()}`);
console.log(`     - Knowledge Cutoff: ${currentFeatures.knowledgeCutoff.toLocaleString()}`);
console.log(`     - Reasoning: ${currentFeatures.reasoning.toLocaleString()}`);
console.log(`     - Cache Pricing: ${currentFeatures.cacheInput.toLocaleString()}`);
console.log(`     - Max Output: ${currentFeatures.maxOutputTokens.toLocaleString()}`);

// Check if backup exists
let hasChanges = true;
if (readFileSync(BACKUP_FILE, 'utf-8')) {
  const backupContent = readFileSync(BACKUP_FILE, 'utf-8');
  const backupHash = getFileHash(backupContent);
  const backupModels = extractModels(backupContent);
  
  console.log('\n📊 Previous Import:');
  console.log(`   Hash: ${backupHash.slice(0, 16)}...`);
  console.log(`   Models: ${backupModels.length.toLocaleString()}`);
  
  if (currentHash === backupHash) {
    console.log('\n✅ No changes detected');
    hasChanges = false;
  } else {
    console.log('\n⚠️  Changes detected!');
    
    const added = currentModels.filter(m => !backupModels.includes(m));
    const removed = backupModels.filter(m => !currentModels.includes(m));
    
    if (added.length > 0) {
      console.log(`\n➕ Added models (${added.length}):`);
      added.slice(0, 10).forEach(m => console.log(`   - ${m}`));
      if (added.length > 10) console.log(`   ... and ${added.length - 10} more`);
    }
    
    if (removed.length > 0) {
      console.log(`\n➖ Removed models (${removed.length}):`);
      removed.slice(0, 10).forEach(m => console.log(`   - ${m}`));
      if (removed.length > 10) console.log(`   ... and ${removed.length - 10} more`);
    }
    
    // Feature changes
    const backupFeatures = countFeatures(backupContent);
    console.log('\n📈 Feature Changes:');
    if (currentFeatures.family !== backupFeatures.family) {
      console.log(`   Family: ${backupFeatures.family} → ${currentFeatures.family} (${currentFeatures.family - backupFeatures.family > 0 ? '+' : ''}${currentFeatures.family - backupFeatures.family})`);
    }
    if (currentFeatures.knowledgeCutoff !== backupFeatures.knowledgeCutoff) {
      console.log(`   Knowledge: ${backupFeatures.knowledgeCutoff} → ${currentFeatures.knowledgeCutoff} (${currentFeatures.knowledgeCutoff - backupFeatures.knowledgeCutoff > 0 ? '+' : ''}${currentFeatures.knowledgeCutoff - backupFeatures.knowledgeCutoff})`);
    }
    if (currentFeatures.reasoning !== backupFeatures.reasoning) {
      console.log(`   Reasoning: ${backupFeatures.reasoning} → ${currentFeatures.reasoning} (${currentFeatures.reasoning - backupFeatures.reasoning > 0 ? '+' : ''}${currentFeatures.reasoning - backupFeatures.reasoning})`);
    }
    if (currentFeatures.cacheInput !== backupFeatures.cacheInput) {
      console.log(`   Cache: ${backupFeatures.cacheInput} → ${currentFeatures.cacheInput} (${currentFeatures.cacheInput - backupFeatures.cacheInput > 0 ? '+' : ''}${currentFeatures.cacheInput - backupFeatures.cacheInput})`);
    }
  }
  
  // Create backup of current
  writeFileSync(BACKUP_FILE, currentContent);
  console.log('\n💾 Backup updated');
} else {
  console.log('\n⚠️  No backup found, creating initial backup');
  writeFileSync(BACKUP_FILE, currentContent);
}

// Output for GitHub Actions
if (process.env.GITHUB_OUTPUT) {
  writeFileSync(
    process.env.GITHUB_OUTPUT,
    `has_changes=${hasChanges}\nmodel_count=${currentModels.length}\nhash=${currentHash.slice(0, 16)}\n`,
    { flag: 'a' }
  );
}

process.exit(hasChanges ? 0 : 0);
