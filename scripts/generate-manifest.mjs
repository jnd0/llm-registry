// Script to generate registry manifest from manual models + models.dev metadata
// Creates a lightweight, searchable manifest with tier information
// Usage: bun run generate:manifest

import { writeFileSync, existsSync, mkdirSync, readdirSync, copyFileSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';
import { mkdtempSync, unlinkSync, rmdirSync, writeFileSync as writeFile } from 'fs';
import { tmpdir } from 'os';

console.log('🔧 Generating registry manifest...');

const scoresDir = join(process.cwd(), 'src', 'data', 'scores');
const outputPath = join(process.cwd(), 'public', 'api', 'registry-manifest.json');

// Use bun to load the models array directly with full dependency resolution
// This is more robust than regex parsing
function loadModels() {
  const tempDir = mkdtempSync(join(tmpdir(), 'llm-registry-manifest-'));
  const tempScript = join(tempDir, 'loader.ts');
  const modelsPath = join(process.cwd(), 'src', 'data', 'models.ts');
  
  const loaderCode = `
    import { models } from '${modelsPath}';
    
    // Convert models to serializable format
    const serializableModels = models.map(m => ({
      id: m.id,
      name: m.name,
      provider: m.provider,
      releaseDate: m.releaseDate,
      tier: m.tier,
      family: m.family,
      specs: {
        contextWindow: m.specs?.contextWindow || 0,
        maxOutputTokens: m.specs?.maxOutputTokens,
        pricing: m.specs?.pricing || { input: 0, output: 0 }
      },
      capabilities: m.capabilities || [],
      isOpenSource: m.isOpenSource || false,
      apiSupport: m.apiSupport || {},
      modalities: m.modalities || {},
      trainingCutoff: m.trainingCutoff,
    }));
    
    process.stdout.write(JSON.stringify({ success: true, models: serializableModels }));
  `;
  
  try {
    writeFile(tempScript, loaderCode);
    
    const result = execSync(`bun run "${tempScript}"`, {
      encoding: 'utf8',
      maxBuffer: 100 * 1024 * 1024,
      stdio: ['pipe', 'pipe', 'pipe'],
      env: { ...process.env, NODE_ENV: 'development' }
    });
    
    const parsed = JSON.parse(result.trim());
    if (!parsed.success) {
      throw new Error('Loader script failed');
    }
    return parsed.models;
  } catch (error) {
    console.error('Failed to load models:', error.message);
    if (error.stderr) {
      console.error('stderr:', error.stderr.toString());
    }
    throw error;
  } finally {
    // Cleanup temp files
    try {
      unlinkSync(tempScript);
      rmdirSync(tempDir);
    } catch (e) {
      // Ignore cleanup errors
    }
  }
}

// Load models using bun
const manualModels = loadModels();
console.log(`📝 Found ${manualModels.length} manually curated models`);

// Read score files to count scores per model
const scoreCounts = {};
const sourceScoresDir = join(process.cwd(), 'src', 'data', 'scores');
if (existsSync(sourceScoresDir)) {
  const files = readdirSync(sourceScoresDir)
    .filter(name => name.endsWith('.json'));
  
  files.forEach(modelId => {
    try {
      const scoreData = JSON.parse(readFileSync(join(sourceScoresDir, modelId), 'utf-8'));
      const key = modelId.replace('.json', '');
      scoreCounts[key] = Object.keys(scoreData.scores || {}).length;
    } catch (error) {
      scoreCounts[modelId.replace('.json', '')] = 0;
    }
  });
}

// Build the manifest with score information
const manifestModels = manualModels.map(model => {
  const modelScoreCount = scoreCounts[model.id] || 0;
  const modelHasScores = modelScoreCount > 0;
  
  return {
    ...model,
    hasScores: modelHasScores,
    scoreCount: modelScoreCount
  };
});

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
