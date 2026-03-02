/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const os = require("os");

/**
 * Load exported value from TypeScript file using bun for proper dependency resolution
 * This replaces the old regex-based approach which broke when files had imports
 */
function loadExportedValue(filePath, exportName) {
  const absolutePath = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
  
  // Create a temporary loader script that bun can execute
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'llm-registry-loader-'));
  const tempScript = path.join(tempDir, 'loader.ts');
  
  const loaderCode = `
    import { ${exportName} } from '${absolutePath}';
    
    const output = {
      value: ${exportName},
      isArray: Array.isArray(${exportName}),
      type: typeof ${exportName}
    };
    
    // Write to stdout as JSON
    process.stdout.write(JSON.stringify({ success: true, data: output }));
  `;
  
  try {
    fs.writeFileSync(tempScript, loaderCode);
    
    // Use bun to execute the TypeScript with full import resolution
    const result = execSync(`bun run "${tempScript}"`, {
      encoding: 'utf8',
      maxBuffer: 100 * 1024 * 1024, // 100MB buffer for large files
      stdio: ['pipe', 'pipe', 'pipe'],
      env: { ...process.env, NODE_ENV: 'development' }
    });
    
    const parsed = JSON.parse(result.trim());
    if (!parsed.success) {
      throw new Error('Loader script failed');
    }
    return parsed.data.value;
  } catch (error) {
    console.error(`Failed to load ${exportName} from ${filePath}:`, error.message);
    if (error.stderr) {
      console.error('stderr:', error.stderr.toString());
    }
    if (error.stdout) {
      console.error('stdout:', error.stdout.toString());
    }
    throw error;
  } finally {
    // Cleanup temp files
    try {
      fs.unlinkSync(tempScript);
      fs.rmdirSync(tempDir);
    } catch (e) {
      // Ignore cleanup errors
    }
  }
}

function loadExportedArray(filePath, exportName) {
  const value = loadExportedValue(filePath, exportName);
  if (!Array.isArray(value)) {
    throw new Error(`Expected exported value "${exportName}" to be an array.`);
  }
  return value;
}

module.exports = {
  loadExportedValue,
  loadExportedArray,
};
