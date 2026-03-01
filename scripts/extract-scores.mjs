// Script to extract score overrides from models.ts into individual JSON files
// This enables scalable score management for the hybrid registry
// Usage: bun run extract-scores

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

console.log('📝 Extracting score overrides from models.ts...');

// Read the models.ts file
const modelsPath = join(process.cwd(), 'src', 'data', 'models.ts');
const modelsContent = readFileSync(modelsPath, 'utf-8');

// Extract model definitions with scores using regex
// This is a simplified extraction - in production you'd want a proper AST parser
const modelRegex = /{\s*id:\s*["']([^"']+)["'][\s\S]*?scores:\s*{([\s\S]*?)}\s*}/g;

const scoresDir = join(process.cwd(), 'src', 'data', 'scores');
if (!existsSync(scoresDir)) {
  mkdirSync(scoresDir, { recursive: true });
}

let modelCount = 0;
let match;

while ((match = modelRegex.exec(modelsContent)) !== null) {
  const modelId = match[1];
  const scoresText = match[2];
  
  // Try to parse the scores object
  try {
    // Clean up the scores text to make it valid JSON
    const cleanedScores = scoresText
      .replace(/(\w+):/g, '"$1":') // Quote keys
      .replace(/,\s*}/g, '}') // Remove trailing commas
      .replace(/verified:\s*true/g, '"verified": true')
      .replace(/verified:\s*false/g, '"verified": false');
    
    const scores = JSON.parse(`{${cleanedScores}}`);
    
    // Create score file
    const scoreFile = {
      modelId,
      scores,
      lastUpdated: new Date().toISOString().split('T')[0],
      source: 'manual-curation'
    };
    
    const filePath = join(scoresDir, `${modelId}.json`);
    writeFileSync(filePath, JSON.stringify(scoreFile, null, 2));
    modelCount++;
    
  } catch (error) {
    console.warn(`⚠️  Could not parse scores for ${modelId}:`, error.message);
  }
}

console.log(`✅ Extracted scores for ${modelCount} models to ${scoresDir}`);
console.log(`💡 Next step: Run bun run generate:manifest to create the registry manifest`);
