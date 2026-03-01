// Script to generate registry manifest from manual models + models.dev metadata
// Creates a lightweight, searchable manifest with tier information
// Usage: bun run generate:manifest

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, copyFileSync } from 'fs';
import { join } from 'path';

console.log('🔧 Generating registry manifest...');

const scoresDir = join(process.cwd(), 'src', 'data', 'scores');
const modelsDevMetadataPath = join(process.cwd(), 'src', 'data', 'models-dev-import.ts');
const modelsPath = join(process.cwd(), 'src', 'data', 'models.ts');
const outputPath = join(process.cwd(), 'public', 'api', 'registry-manifest.json');

// Helper to extract models from TypeScript file
function extractModelsFromTS(content) {
  const models = [];
  const modelRegex = /{\s*id:\s*["']([^"']+)["'],\s*name:\s*["']([^"']+)["'],\s*provider:\s*["']([^"']+)["'][\s\S]*?releaseDate:\s*["']([^"']+)["']/g;
  
  let match;
  while ((match = modelRegex.exec(content)) !== null) {
    models.push({
      id: match[1],
      name: match[2],
      provider: match[3],
      releaseDate: match[4]
    });
  }
  
  return models;
}

// Read manual models
const manualModels = extractModelsFromTS(readFileSync(modelsPath, 'utf-8'));
console.log(`📝 Found ${manualModels.length} manually curated models`);

// Read models.dev metadata if available
let modelsDevMetadata = {};
if (existsSync(modelsDevMetadataPath)) {
  const metadataContent = readFileSync(modelsDevMetadataPath, 'utf-8');
  const jsonMatch = metadataContent.match(/modelsDevMetadata:\s*Record<string,\s*ModelMetadataOverride>\s*=\s*({[\s\S]*?});\s*$/);
  if (jsonMatch) {
    try {
      modelsDevMetadata = JSON.parse(jsonMatch[1]);
      console.log(`📊 Loaded metadata for ${Object.keys(modelsDevMetadata).length} models from models.dev`);
    } catch (error) {
      console.warn('⚠️  Could not parse models.dev metadata:', error.message);
    }
  }
}

// Read score files to count scores per model
const scoreCounts = {};
const sourceScoresDir = join(process.cwd(), 'src', 'data', 'scores');
if (existsSync(sourceScoresDir)) {
  const files = readdirSync(sourceScoresDir)
    .filter(name => name.endsWith('.json'));
  
  files.forEach(modelId => {
    try {
      // modelId is already the full filename (e.g., "o1.json"), don't append .json again
      const scoreData = JSON.parse(readFileSync(join(sourceScoresDir, modelId), 'utf-8'));
      const key = modelId.replace('.json', '');
      scoreCounts[key] = Object.keys(scoreData.scores || {}).length;
    } catch (error) {
      scoreCounts[modelId.replace('.json', '')] = 0;
    }
  });
}

// Build the manifest
const manifestModels = manualModels.map(model => {
  const metadata = modelsDevMetadata[model.id] || {};
  const modelScoreCount = scoreCounts[model.id] || 0;
  const modelHasScores = modelScoreCount > 0;
  
  const manifestModel = {
    id: model.id,
    name: model.name,
    provider: model.provider,
    releaseDate: model.releaseDate,
    tier: 'verified',
    family: metadata.family || null,
    ...metadata
  };
  
  // Explicitly set score fields AFTER spreading metadata to prevent overwrite
  manifestModel.hasScores = modelHasScores;
  manifestModel.scoreCount = modelScoreCount;
  
  return manifestModel;
});

// Add discovered-only models from models.dev (not in manual list)
const manualIds = new Set(manualModels.map(m => m.id));
const discoveredModels = Object.entries(modelsDevMetadata)
  .filter(([id]) => !manualIds.has(id))
  .map(([id, metadata]) => ({
    id,
    name: metadata.name || id,
    provider: metadata.provider || 'Unknown',
    releaseDate: metadata.releaseDate || 'Unknown',
    tier: 'discovered',
    hasScores: false,
    scoreCount: 0,
    ...metadata
  }));

manifestModels.push(...discoveredModels);

// Sort by release date (newest first)
manifestModels.sort((a, b) => 
  new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
);

const manifest = {
  generated: new Date().toISOString().split('T')[0],
  totalModels: manifestModels.length,
  verifiedModels: manifestModels.filter(m => m.tier === 'verified').length,
  discoveredModels: manifestModels.filter(m => m.tier === 'discovered').length,
  models: manifestModels
};

// Ensure output directory exists
const outputDir = join(process.cwd(), 'public', 'api');
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Write manifest
writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

// Copy score files to public directory for runtime access
const publicScoresDir = join(process.cwd(), 'public', 'scores');
if (!existsSync(publicScoresDir)) {
  mkdirSync(publicScoresDir, { recursive: true });
}

if (existsSync(sourceScoresDir)) {
  const scoreFiles = readdirSync(sourceScoresDir)
    .filter(name => name.endsWith('.json'));
  
  scoreFiles.forEach(file => {
    const srcPath = join(sourceScoresDir, file);
    const destPath = join(publicScoresDir, file);
    copyFileSync(srcPath, destPath);
  });
  
  console.log(`📊 Copied ${scoreFiles.length} score files to ${publicScoresDir}`);
}

console.log(`✅ Generated manifest with ${manifest.totalModels} models`);
console.log(`   - Verified: ${manifest.verifiedModels}`);
console.log(`   - Discovered: ${manifest.discoveredModels}`);
console.log(`📁 Output: ${outputPath}`);
console.log(`💡 Add "bun run generate:manifest" to your build pipeline!`);
