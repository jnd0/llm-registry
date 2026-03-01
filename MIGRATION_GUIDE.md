# Migration Guide: New Fields from models.dev Import

## Overview

This guide documents all new fields added to the LLM Registry schema as part of the models.dev import project. Use this to understand the new data structure and update your integrations.

**Migration Date:** 2026-03-01  
**Branch:** `feature/models-dev-import`  
**Breaking Changes:** None (all fields are optional/additive)

---

## Schema Changes

### 1. Model Interface (`src/types/index.ts`)

#### New Top-Level Fields

```typescript
interface Model {
  // NEW: Family grouping (e.g., "llama", "gpt", "claude")
  family?: string;
  
  // NEW: Lifecycle status
  status?: "active" | "alpha" | "beta" | "deprecated";
  
  // NEW: Training data cutoff (YYYY-MM or YYYY-MM-DD)
  knowledgeCutoff?: string;
  
  // NEW: Last metadata update (ISO 8601)
  lastUpdated?: string;
  
  // NEW: Field name for reasoning content (e.g., "reasoning_content")
  interleavedReasoningField?: string;
  
  specs: {
    // NEW: Maximum output tokens
    maxOutputTokens?: number;
    
    pricing: {
      // NEW: Cached read pricing (USD per 1M tokens)
      cacheInput?: number;
      
      // NEW: Cached write pricing (USD per 1M tokens)
      cacheOutput?: number;
      
      // NEW: Reasoning token pricing (USD per 1M tokens)
      reasoning?: number;
      
      // NEW: Audio input pricing (USD per 1M tokens)
      inputAudio?: number;
      
      // NEW: Audio output pricing (USD per 1M tokens)
      outputAudio?: number;
      
      // NEW: Context surcharge for >200k windows
      contextOver200k?: ModelContextSurcharge;
    };
  };
  
  apiSupport?: {
    // NEW: Chain-of-thought support
    reasoning?: boolean;
    
    // NEW: JSON mode support
    structuredOutput?: boolean;
    
    // NEW: File upload support
    attachment?: boolean;
    
    // NEW: Tool/function calling support
    toolCall?: boolean;
  };
}
```

#### New Type: `ModelContextSurcharge`

```typescript
interface ModelContextSurcharge {
  input: number;      // Surcharge multiplier for input
  output: number;     // Surcharge multiplier for output
  cacheRead?: number; // Surcharge multiplier for cache reads
}
```

#### New Type: `ModelStatus`

```typescript
type ModelStatus =
  | "active"      // Production-ready
  | "alpha"       // Early testing
  | "beta"        // Public testing
  | "deprecated"; // End-of-life
```

---

## 2. API Changes

### v1 API Endpoints

All new fields are exposed in the API responses:

#### `/api/v1/models/[id]`

**Before:**
```json
{
  "id": "claude-3-5-sonnet-20241022",
  "name": "Claude 3.5 Sonnet",
  "provider": "Anthropic",
  "specs": {
    "contextWindow": 200000,
    "pricing": {
      "input": 3.0,
      "output": 15.0
    }
  }
}
```

**After:**
```json
{
  "id": "claude-3-5-sonnet-20241022",
  "name": "Claude 3.5 Sonnet",
  "provider": "Anthropic",
  "family": "claude-sonnet",
  "status": "active",
  "knowledgeCutoff": "2024-04",
  "lastUpdated": "2025-11-24",
  "specs": {
    "contextWindow": 200000,
    "maxOutputTokens": 64000,
    "pricing": {
      "input": 3.0,
      "output": 15.0,
      "cacheInput": 0.3,
      "cacheOutput": 3.75
    }
  },
  "apiSupport": {
    "reasoning": false,
    "vision": true,
    "tools": true,
    "structuredOutput": true,
    "attachment": true
  },
  "metadataSourceId": "models-dev",
  "metadataAsOfDate": "2026-03-01"
}
```

#### `/api/v1/models` (List)

The list endpoint also includes all new fields for each model.

---

## 3. Component Usage

### Using Family Badges

```tsx
import { FamilyBadge } from "@/components/model/family-badge";

// Single family badge
<FamilyBadge family="llama" size="md" showLink />

// Multiple badges
<FamilyBadges families={["llama", "gpt", "claude"]} />
```

### Using Capability Icons

```tsx
import { CapabilityIcon, CapabilityBadges } from "@/components/model/capability-icon";

// Single capability
<CapabilityIcon capability="reasoning" size="md" showLabel />

// Multiple capabilities
<CapabilityBadges 
  apiSupport={model.apiSupport}
  modalities={model.modalities}
  size="sm"
/>
```

### Using Filter Panel

```tsx
import { FilterPanel, applyModelFilters } from "@/components/model/filter-panel";

// In your component
const [filter, setFilter] = useState<ModelFilter>({
  families: [],
  capabilities: [],
  providers: [],
  openSource: "all",
  sortBy: "releaseDate",
  sortOrder: "desc",
});

const filteredModels = applyModelFilters(models, filter);

// Render filter panel
<FilterPanel
  models={models}
  filter={filter}
  onFilterChange={setFilter}
  isOpen={showFilters}
  onToggle={() => setShowFilters(!showFilters)}
/>
```

### Using Pricing Calculator

```tsx
import { PricingCalculator } from "@/components/model/pricing-calculator";

// In your page
<PricingCalculator models={models} />
```

---

## 4. Data Import

### Running the Import Script

```bash
# Using Bun (recommended)
bun run scripts/import-models-dev.mjs

# Using Node.js
node scripts/import-models-dev.mjs
```

### Detecting Changes

```bash
# Check for changes since last import
bun run scripts/detect-changes.mjs
```

### Output Files

- `src/data/models-dev-import.ts` - Generated TypeScript data
- `scripts/models-dev-backup.ts` - Backup for comparison

---

## 5. Metadata Overrides

### Adding Manual Overrides

If you need to override models.dev data, edit `src/data/model-metadata-overrides.ts`:

```typescript
export const modelMetadataOverrides: Record<string, ModelMetadataOverride> = {
  "your-model-id": {
    family: "custom-family",
    status: "beta",
    knowledgeCutoff: "2025-06",
    specs: {
      maxOutputTokens: 32768,
      pricing: {
        cacheInput: 0.5,
        reasoning: 5.0,
      },
    },
    apiSupport: {
      reasoning: true,
      vision: true,
    },
  },
};
```

**Priority:** Manual overrides > models.dev import > base model data

---

## 6. Database/Storage Migration

If you're storing model data in a database, here's the schema migration:

### SQL Migration

```sql
-- Add new columns to models table
ALTER TABLE models
ADD COLUMN family VARCHAR(100),
ADD COLUMN status VARCHAR(20) CHECK (status IN ('active', 'alpha', 'beta', 'deprecated')),
ADD COLUMN knowledge_cutoff VARCHAR(20),
ADD COLUMN last_updated TIMESTAMP,
ADD COLUMN interleaved_reasoning_field VARCHAR(100),
ADD COLUMN max_output_tokens INTEGER;

-- Add pricing columns
ALTER TABLE model_pricing
ADD COLUMN cache_input DECIMAL(10, 6),
ADD COLUMN cache_output DECIMAL(10, 6),
ADD COLUMN reasoning DECIMAL(10, 6),
ADD COLUMN input_audio DECIMAL(10, 6),
ADD COLUMN output_audio DECIMAL(10, 6),
ADD COLUMN context_surcharge_input DECIMAL(5, 2),
ADD COLUMN context_surcharge_output DECIMAL(5, 2),
ADD COLUMN context_surcharge_cache_read DECIMAL(5, 2);

-- Add capability columns
ALTER TABLE model_capabilities
ADD COLUMN reasoning BOOLEAN DEFAULT FALSE,
ADD COLUMN structured_output BOOLEAN DEFAULT FALSE,
ADD COLUMN attachment BOOLEAN DEFAULT FALSE,
ADD COLUMN tool_call BOOLEAN DEFAULT FALSE;

-- Create index for filtering
CREATE INDEX idx_models_family ON models(family);
CREATE INDEX idx_models_status ON models(status);
CREATE INDEX idx_models_knowledge_cutoff ON models(knowledge_cutoff);
```

### NoSQL Migration (MongoDB)

```javascript
// Update all documents with new schema
db.models.updateMany(
  {},
  {
    $set: {
      family: null,
      status: "active",
      knowledgeCutoff: null,
      lastUpdated: new Date(),
      specs: {
        maxOutputTokens: null,
        pricing: {
          cacheInput: null,
          cacheOutput: null,
          reasoning: null,
          inputAudio: null,
          outputAudio: null,
          contextOver200k: null,
        },
      },
      apiSupport: {
        reasoning: false,
        structuredOutput: false,
        attachment: false,
        toolCall: false,
      },
    },
  }
);
```

---

## 7. Frontend Integration

### Updating Model Cards

```tsx
// Before
<div>
  <h1>{model.name}</h1>
  <p>{model.provider}</p>
</div>

// After
<div>
  <div className="flex gap-2">
    <Badge>{model.provider}</Badge>
    {model.family && <FamilyBadge family={model.family} />}
    {model.status && <Badge>{model.status}</Badge>}
  </div>
  
  <h1 className="flex items-center gap-2">
    {model.name}
    {model.apiSupport && (
      <CapabilityBadges apiSupport={model.apiSupport} />
    )}
  </h1>
  
  {model.knowledgeCutoff && (
    <p>Knowledge: {model.knowledgeCutoff}</p>
  )}
</div>
```

### Updating Specs Display

```tsx
// Before
<div>
  <div>Context: {model.specs.contextWindow}</div>
  <div>Input: ${model.specs.pricing.input}</div>
  <div>Output: ${model.specs.pricing.output}</div>
</div>

// After
<div>
  <div>Context: {model.specs.contextWindow}</div>
  {model.specs.maxOutputTokens && (
    <div>Max Output: {model.specs.maxOutputTokens}</div>
  )}
  <div>Input: ${model.specs.pricing.input}</div>
  <div>Output: ${model.specs.pricing.output}</div>
  
  {(model.specs.pricing.cacheInput || model.specs.pricing.cacheOutput) && (
    <div>
      Cache: ${model.specs.pricing.cacheInput}/${model.specs.pricing.cacheOutput}
    </div>
  )}
  
  {model.specs.pricing.reasoning && (
    <div>Reasoning: ${model.specs.pricing.reasoning}</div>
  )}
</div>
```

---

## 8. Backend/API Updates

### Adding New Fields to Responses

```typescript
// In your API route handler
return Response.json({
  id: model.id,
  name: model.name,
  // ... existing fields
  // NEW: Add these fields
  family: model.family,
  status: model.status,
  knowledgeCutoff: model.knowledgeCutoff,
  lastUpdated: model.lastUpdated,
  specs: {
    ...model.specs,
    maxOutputTokens: model.specs.maxOutputTokens,
    pricing: {
      ...model.specs.pricing,
      cacheInput: model.specs.pricing.cacheInput,
      cacheOutput: model.specs.pricing.cacheOutput,
      reasoning: model.specs.pricing.reasoning,
      inputAudio: model.specs.pricing.inputAudio,
      outputAudio: model.specs.pricing.outputAudio,
      contextOver200k: model.specs.pricing.contextOver200k,
    },
  },
  apiSupport: model.apiSupport,
});
```

---

## 9. Testing Checklist

- [ ] Verify all new fields appear in API responses
- [ ] Test family filtering functionality
- [ ] Test capability filtering functionality
- [ ] Verify pricing calculator includes all dimensions
- [ ] Check model cards display new fields correctly
- [ ] Validate data import script runs without errors
- [ ] Confirm change detection works properly
- [ ] Test manual metadata overrides take precedence
- [ ] Verify build passes with new types
- [ ] Check TypeScript compilation succeeds

---

## 10. Rollback Plan

If you need to rollback:

1. **Revert the branch:**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Restore previous data:**
   ```bash
   # Backup current
   cp src/data/models-dev-import.ts src/data/models-dev-import.ts.current
   
   # Restore previous (if you have a backup)
   git checkout HEAD~7 -- src/data/models-dev-import.ts
   ```

3. **Rebuild:**
   ```bash
   bun run build
   ```

**Note:** All new fields are optional, so partial rollbacks are safe.

---

## 11. Support & Questions

- **Documentation:** See `IMPLEMENTATION_COMPLETE.md`
- **Data Source:** `src/data/models-dev-import.ts`
- **Import Script:** `scripts/import-models-dev.mjs`
- **Components:** `src/components/model/`
- **Types:** `src/types/index.ts`

For issues or questions, refer to the comprehensive documentation in the repository root.

---

**Last Updated:** 2026-03-01  
**Version:** 1.0.0  
**Status:** Production Ready
