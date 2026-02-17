import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { loadExportedArray } = require("./load-ts-data.cjs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const SOURCE_ID = "yamanahlawat-llm-registry";
const SOURCE_URL = "https://github.com/yamanahlawat/llm-registry";
const SOURCE_DATA_URL =
  "https://raw.githubusercontent.com/yamanahlawat/llm-registry/main/src/llm_registry/data/models.json";
const SOURCE_SNAPSHOT_DATE = "2026-02-07";

const DRY_RUN = process.argv.includes("--dry-run");

const PROVIDER_MAP = {
  openai: "OpenAI",
  anthropic: "Anthropic",
  google: "Google DeepMind",
  deepseek: "DeepSeek",
  meta: "Meta",
  xai: "xAI",
  mistral: "Mistral",
  alibaba: "Alibaba",
  microsoft: "Microsoft",
  cohere: "Cohere",
  kimi: "Moonshot AI",
  amazon: "Amazon",
  ai21: "AI21",
  github: "GitHub",
  ollama: "Ollama",
  azure: "Azure",
  other: "Other",
};

const MODALITY_SET = new Set(["text", "image", "audio", "video", "other"]);
const DIRECTION_SET = new Set(["input", "output", "cache_input", "cache_output"]);
const UNIT_SET = new Set(["per_1m_tokens", "per_image", "per_minute", "per_request"]);

function normalizeId(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function unique(values) {
  return [...new Set(values)];
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function isNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function mapProvider(provider) {
  if (typeof provider !== "string") return null;
  return PROVIDER_MAP[provider] ?? null;
}

function toLocalModality(value) {
  if (typeof value !== "string") return "other";
  return MODALITY_SET.has(value) ? value : "other";
}

function buildApiSupport(externalModel, localModel) {
  const next = {
    stream: externalModel?.api_params?.stream,
    tools: externalModel?.features?.tools,
    vision: externalModel?.features?.vision,
    jsonMode: externalModel?.features?.json_mode,
    systemPrompt: externalModel?.features?.system_prompt,
    maxTokens: externalModel?.api_params?.max_tokens,
    temperature: externalModel?.api_params?.temperature,
    topP: externalModel?.api_params?.top_p,
  };

  const current = localModel.apiSupport ?? {};
  const merged = { ...current };
  let changed = false;

  for (const [key, value] of Object.entries(next)) {
    if (typeof value === "boolean" && merged[key] === undefined) {
      merged[key] = value;
      changed = true;
    }
  }

  return changed ? merged : null;
}

function deriveCapabilities(externalModel, localModel) {
  const derived = [];
  const modalities = externalModel?.modalities ?? {};
  const input = Array.isArray(modalities.input) ? modalities.input : [];
  const output = Array.isArray(modalities.output) ? modalities.output : [];
  const allModalities = [...input, ...output].map(toLocalModality);

  if (externalModel?.features?.vision || allModalities.includes("image")) {
    derived.push("vision");
  }
  if (allModalities.includes("audio")) {
    derived.push("audio");
  }
  if (allModalities.includes("video")) {
    derived.push("video");
  }

  if (derived.length === 0) return null;

  const merged = unique([...(localModel.capabilities ?? []), ...derived]);
  return arraysEqual(merged, localModel.capabilities ?? []) ? null : merged;
}

function buildModalities(externalModel, localModel) {
  if (localModel.modalities) return null;
  const modalities = externalModel?.modalities;
  if (!modalities) return null;

  const input = Array.isArray(modalities.input) ? modalities.input.map(toLocalModality) : [];
  const output = Array.isArray(modalities.output) ? modalities.output.map(toLocalModality) : [];

  if (input.length === 0 && output.length === 0) return null;

  return {
    input: input.length > 0 ? input : ["text"],
    output: output.length > 0 ? output : ["text"],
  };
}

function buildPricingDimensions(externalModel, localModel) {
  if (Array.isArray(localModel.pricingDimensions) && localModel.pricingDimensions.length > 0) {
    return null;
  }

  const dimensions = Array.isArray(externalModel?.pricing_dimensions)
    ? externalModel.pricing_dimensions
    : [];

  if (dimensions.length === 0) return null;

  const mapped = dimensions
    .map((dimension) => {
      const direction = dimension?.direction;
      const unit = dimension?.unit;
      const priceUsd = dimension?.price_usd;

      if (!DIRECTION_SET.has(direction) || !UNIT_SET.has(unit) || !isNumber(priceUsd)) {
        return null;
      }

      return {
        name: typeof dimension?.name === "string" ? dimension.name : "dimension",
        modality: toLocalModality(dimension?.modality),
        direction,
        unit,
        priceUsd,
        ...(typeof dimension?.notes === "string" ? { notes: dimension.notes } : {}),
      };
    })
    .filter(Boolean);

  return mapped.length > 0 ? mapped : null;
}

function sortObjectKeys(value) {
  if (Array.isArray(value)) {
    return value.map(sortObjectKeys);
  }

  if (value && typeof value === "object") {
    return Object.keys(value)
      .sort((a, b) => a.localeCompare(b))
      .reduce((acc, key) => {
        acc[key] = sortObjectKeys(value[key]);
        return acc;
      }, {});
  }

  return value;
}

function buildOverrideFileContent(overrides) {
  const sorted = Object.fromEntries(
    Object.entries(overrides)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([modelId, patch]) => [modelId, sortObjectKeys(patch)])
  );

  const body = JSON.stringify(sorted, null, 2);

  return `import { Model } from "@/types";

export interface ModelMetadataOverride {
  capabilities?: Model["capabilities"];
  providers?: string[];
  apiSupport?: Model["apiSupport"];
  modalities?: Model["modalities"];
  pricingDimensions?: Model["pricingDimensions"];
  trainingCutoff?: string;
  metadataSourceId?: string;
  metadataSourceUrl?: string;
  metadataAsOfDate?: string;
  externalModelId?: string;
  specs?: {
    contextWindow?: number;
    pricing?: {
      input?: number;
      output?: number;
      cacheInput?: number;
      cacheOutput?: number;
    };
  };
}

export const modelMetadataOverrides: Record<string, ModelMetadataOverride> = ${body};
`;
}

async function main() {
  const localModels = loadExportedArray(path.join(root, "src/data/models.ts"), "models");

  const manualMapPath = path.join(root, "scripts/import-maps/yaman-id-map.json");
  const manualMap = JSON.parse(fs.readFileSync(manualMapPath, "utf8"));

  const response = await fetch(SOURCE_DATA_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch source data: ${response.status} ${response.statusText}`);
  }

  const sourceJson = await response.json();
  const externalModels = sourceJson.models ?? {};
  const externalIds = Object.keys(externalModels);
  const externalIdSet = new Set(externalIds);

  const normalizedExternal = new Map();
  for (const externalId of externalIds) {
    const normalized = normalizeId(externalId);
    const existing = normalizedExternal.get(normalized) ?? [];
    existing.push(externalId);
    normalizedExternal.set(normalized, existing);
  }

  const overrides = {};
  const mapped = [];
  const changed = [];
  const unmatchedLocal = [];
  const ambiguousLocal = [];
  const matchedExternalIds = new Set();

  for (const localModel of localModels) {
    let externalId = null;
    let matchType = null;

    if (manualMap[localModel.id]) {
      if (!externalIdSet.has(manualMap[localModel.id])) {
        throw new Error(
          `Manual map target \"${manualMap[localModel.id]}\" for local model \"${localModel.id}\" does not exist.`
        );
      }
      externalId = manualMap[localModel.id];
      matchType = "manual";
    } else if (externalIdSet.has(localModel.id)) {
      externalId = localModel.id;
      matchType = "exact";
    } else {
      const candidates = normalizedExternal.get(normalizeId(localModel.id)) ?? [];
      if (candidates.length === 1) {
        externalId = candidates[0];
        matchType = "normalized";
      } else if (candidates.length > 1) {
        ambiguousLocal.push({ localId: localModel.id, candidates });
      }
    }

    if (!externalId) {
      unmatchedLocal.push(localModel.id);
      continue;
    }

    matchedExternalIds.add(externalId);
    mapped.push({ localId: localModel.id, externalId, matchType });

    const externalModel = externalModels[externalId];
    const patch = {};
    const changeFields = [];

    const mappedProviders = unique(
      (Array.isArray(externalModel?.providers) ? externalModel.providers : [])
        .map(mapProvider)
        .filter(Boolean)
    );

    if (mappedProviders.length > 0) {
      const currentProviders =
        Array.isArray(localModel.providers) && localModel.providers.length > 0
          ? localModel.providers
          : [localModel.provider];
      const mergedProviders = unique([...currentProviders, ...mappedProviders]);
      if (!arraysEqual(currentProviders, mergedProviders)) {
        patch.providers = mergedProviders;
        changeFields.push("providers");
      }
    }

    const nextApiSupport = buildApiSupport(externalModel, localModel);
    if (nextApiSupport) {
      patch.apiSupport = nextApiSupport;
      changeFields.push("apiSupport");
    }

    const nextCapabilities = deriveCapabilities(externalModel, localModel);
    if (nextCapabilities) {
      patch.capabilities = nextCapabilities;
      changeFields.push("capabilities");
    }

    const nextModalities = buildModalities(externalModel, localModel);
    if (nextModalities) {
      patch.modalities = nextModalities;
      changeFields.push("modalities");
    }

    const nextPricingDimensions = buildPricingDimensions(externalModel, localModel);
    if (nextPricingDimensions) {
      patch.pricingDimensions = nextPricingDimensions;
      changeFields.push("pricingDimensions");
    }

    const externalTokenCosts = externalModel?.token_costs;
    const specsPatch = {};
    const pricingPatch = {};

    if (isNumber(externalTokenCosts?.context_window) && (!localModel.specs?.contextWindow || localModel.specs.contextWindow <= 0)) {
      specsPatch.contextWindow = externalTokenCosts.context_window;
      changeFields.push("specs.contextWindow");
    }

    if (
      isNumber(externalTokenCosts?.input_cost) &&
      externalTokenCosts.input_cost > 0 &&
      (!isNumber(localModel.specs?.pricing?.input) || localModel.specs.pricing.input <= 0)
    ) {
      pricingPatch.input = externalTokenCosts.input_cost;
      changeFields.push("specs.pricing.input");
    }

    if (
      isNumber(externalTokenCosts?.output_cost) &&
      externalTokenCosts.output_cost > 0 &&
      (!isNumber(localModel.specs?.pricing?.output) || localModel.specs.pricing.output <= 0)
    ) {
      pricingPatch.output = externalTokenCosts.output_cost;
      changeFields.push("specs.pricing.output");
    }

    if (
      isNumber(externalTokenCosts?.cache_input_cost) &&
      localModel.specs?.pricing?.cacheInput === undefined
    ) {
      pricingPatch.cacheInput = externalTokenCosts.cache_input_cost;
      changeFields.push("specs.pricing.cacheInput");
    }

    if (
      isNumber(externalTokenCosts?.cache_output_cost) &&
      localModel.specs?.pricing?.cacheOutput === undefined
    ) {
      pricingPatch.cacheOutput = externalTokenCosts.cache_output_cost;
      changeFields.push("specs.pricing.cacheOutput");
    }

    if (Object.keys(pricingPatch).length > 0) {
      specsPatch.pricing = pricingPatch;
    }

    if (Object.keys(specsPatch).length > 0) {
      patch.specs = specsPatch;
    }

    if (typeof externalTokenCosts?.training_cutoff === "string" && !localModel.trainingCutoff) {
      patch.trainingCutoff = externalTokenCosts.training_cutoff;
      changeFields.push("trainingCutoff");
    }

    if (changeFields.length > 0) {
      if (!localModel.metadataSourceId) patch.metadataSourceId = SOURCE_ID;
      if (!localModel.metadataSourceUrl) patch.metadataSourceUrl = SOURCE_URL;
      if (!localModel.metadataAsOfDate) patch.metadataAsOfDate = SOURCE_SNAPSHOT_DATE;
      if (externalId !== localModel.id && !localModel.externalModelId) {
        patch.externalModelId = externalId;
      }

      overrides[localModel.id] = patch;
      changed.push({
        localId: localModel.id,
        externalId,
        matchType,
        fields: unique(changeFields).sort((a, b) => a.localeCompare(b)),
      });
    }
  }

  const unmatchedExternal = externalIds.filter((externalId) => !matchedExternalIds.has(externalId));

  const report = {
    source: {
      id: SOURCE_ID,
      url: SOURCE_URL,
      dataUrl: SOURCE_DATA_URL,
      snapshotDate: SOURCE_SNAPSHOT_DATE,
      generatedAt: new Date().toISOString(),
      dryRun: DRY_RUN,
    },
    summary: {
      localModelCount: localModels.length,
      externalModelCount: externalIds.length,
      mappedModelCount: mapped.length,
      changedModelCount: changed.length,
      unchangedMappedModelCount: mapped.length - changed.length,
      unmatchedLocalCount: unmatchedLocal.length,
      ambiguousLocalCount: ambiguousLocal.length,
      unmatchedExternalCount: unmatchedExternal.length,
    },
    changed,
    mapped,
    unresolved: {
      unmatchedLocal,
      ambiguousLocal,
      unmatchedExternal,
    },
    manualMap,
  };

  const overrideOutputPath = path.join(root, "src/data/model-metadata-overrides.ts");
  const reportDir = path.join(root, "reports");
  const reportPath = path.join(reportDir, "yaman-import-report.json");

  if (!DRY_RUN) {
    const overrideContent = buildOverrideFileContent(overrides);
    fs.writeFileSync(overrideOutputPath, overrideContent, "utf8");
    fs.mkdirSync(reportDir, { recursive: true });
    fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  }

  console.log(`[import] Source: ${SOURCE_URL}`);
  console.log(`[import] Local models: ${localModels.length}`);
  console.log(`[import] External models: ${externalIds.length}`);
  console.log(`[import] Mapped: ${mapped.length}`);
  console.log(`[import] Changed: ${changed.length}`);
  console.log(`[import] Unmatched local: ${unmatchedLocal.length}`);
  console.log(`[import] Ambiguous local: ${ambiguousLocal.length}`);
  console.log(`[import] Unmatched external: ${unmatchedExternal.length}`);

  if (DRY_RUN) {
    console.log("[import] Dry run complete. No files were written.");
  } else {
    console.log(`[import] Wrote overrides: ${path.relative(root, overrideOutputPath)}`);
    console.log(`[import] Wrote report: ${path.relative(root, reportPath)}`);
  }
}

main().catch((error) => {
  console.error(`[import] Failed: ${error.message}`);
  process.exit(1);
});
