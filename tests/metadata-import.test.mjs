import test from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { loadExportedArray, loadExportedValue } = require("../scripts/load-ts-data.cjs");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const models = loadExportedArray(path.join(root, "src/data/models.ts"), "models");
const modelMetadataOverrides = loadExportedValue(
  path.join(root, "src/data/model-metadata-overrides.ts"),
  "modelMetadataOverrides"
);

const VALID_MODALITIES = new Set(["text", "image", "audio", "video", "other"]);
const VALID_DIRECTIONS = new Set(["input", "output", "cache_input", "cache_output"]);
const VALID_UNITS = new Set(["per_1m_tokens", "per_image", "per_minute", "per_request"]);

function flattenModels(input) {
  return input.flatMap((model) => [
    model,
    ...(Array.isArray(model.variants) ? flattenModels(model.variants) : []),
  ]);
}

function buildKnownModelIds(modelsList) {
  const known = new Set();

  for (const model of flattenModels(modelsList)) {
    known.add(model.id);
    const parts = model.id.split("-");
    for (let i = 1; i < parts.length; i += 1) {
      known.add(parts.slice(i).join("-"));
    }
  }

  return known;
}

test("metadata override IDs reference known models", () => {
  const modelIds = buildKnownModelIds(models);
  for (const modelId of Object.keys(modelMetadataOverrides)) {
    assert.ok(modelIds.has(modelId), `Unknown model metadata override key: ${modelId}`);
  }
});

test("metadata overrides do not modify benchmark scores", () => {
  for (const [modelId, patch] of Object.entries(modelMetadataOverrides)) {
    assert.ok(!Object.hasOwn(patch, "scores"), `${modelId} metadata override contains scores`);
  }
});

test("metadata pricing dimensions use valid enums and non-negative prices", () => {
  for (const [modelId, patch] of Object.entries(modelMetadataOverrides)) {
    if (!Array.isArray(patch.pricingDimensions)) continue;

    for (const [index, dimension] of patch.pricingDimensions.entries()) {
      assert.ok(VALID_MODALITIES.has(dimension.modality), `${modelId} pricingDimensions[${index}] invalid modality`);
      assert.ok(VALID_DIRECTIONS.has(dimension.direction), `${modelId} pricingDimensions[${index}] invalid direction`);
      assert.ok(VALID_UNITS.has(dimension.unit), `${modelId} pricingDimensions[${index}] invalid unit`);
      assert.ok(typeof dimension.priceUsd === "number" && dimension.priceUsd >= 0, `${modelId} pricingDimensions[${index}] invalid priceUsd`);
    }
  }
});
