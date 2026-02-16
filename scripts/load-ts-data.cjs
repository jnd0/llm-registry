/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const ts = require("typescript");

function loadExportedValue(path, exportName) {
  let source = fs.readFileSync(path, "utf8");

  source = source.replace(/^import[^\n]*\n/gm, "");
  source = source.replace(new RegExp(`export const ${exportName}\\s*:\\s*[^=]+=`, "m"), `const ${exportName} =`);
  source += `\nmodule.exports = ${exportName};`;

  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;

  const mod = { exports: {} };
  const evaluator = new Function("module", "exports", transpiled);
  evaluator(mod, mod.exports);
  return mod.exports;
}

function loadExportedArray(path, exportName) {
  const value = loadExportedValue(path, exportName);
  if (!Array.isArray(value)) {
    throw new Error(`Expected exported value "${exportName}" to be an array.`);
  }
  return value;
}

module.exports = {
  loadExportedValue,
  loadExportedArray,
};
