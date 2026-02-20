#!/usr/bin/env node
/**
 * Post-build script to patch _worker.js for Cloudflare Pages
 * Adds static asset serving before Next.js handling
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const workerPath = join(process.cwd(), '.open-next', '_worker.js');

console.log('Patching worker for static asset serving...');

try {
  let workerContent = readFileSync(workerPath, 'utf8');
  
  // Find the line with "const url = new URL(request.url);"
  const targetLine = 'const url = new URL(request.url);';
  const staticAssetBlock = `
            // Serve static assets first
            if (url.pathname.startsWith("/_next/") || 
                url.pathname.startsWith("/favicon") ||
                url.pathname.match(/\\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|json|xml|txt|webmanifest)$/)) {
                const assetResponse = await env.ASSETS?.fetch(request);
                if (assetResponse && assetResponse.status !== 404) {
                    return assetResponse;
                }
            }`;
  
  // Insert after the target line
  if (workerContent.includes(targetLine) && !workerContent.includes('// Serve static assets first')) {
    workerContent = workerContent.replace(
      targetLine,
      targetLine + staticAssetBlock
    );
    
    writeFileSync(workerPath, workerContent);
    console.log('✅ Worker patched successfully');
  } else if (workerContent.includes('// Serve static assets first')) {
    console.log('ℹ️ Worker already patched');
  } else {
    console.error('❌ Could not find target line in worker');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Error patching worker:', error.message);
  process.exit(1);
}
