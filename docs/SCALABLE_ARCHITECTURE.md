# Scalable Registry Architecture

## Overview

This document describes the scalable architecture implemented in LLM Registry to support 10,000+ models while maintaining fast load times.

---

## Architecture Pattern: Hybrid Data Loading

### **Principle:** Use the right data source for each use case

| Page Type | Data Strategy | Reason |
|-----------|---------------|--------|
| **Leaderboard** | `useRegistry()` hook | Lightweight, on-demand, tier filtering |
| **Model Detail** | Full model data | Needs complete benchmark scores |
| **Explore** | Full model data | Needs scores for scatter plot |
| **Landing** | Static import | SEO, fast initial load |
| **API Docs** | Static import | Static documentation |

---

## Data Sources

### **1. Registry Manifest** (`/api/registry-manifest.json`)

**Purpose:** Lightweight model list for discovery and filtering

**Structure:**
```json
{
  "generated": "2026-03-01",
  "totalModels": 1581,
  "verifiedModels": 83,
  "discoveredModels": 1498,
  "models": [
    {
      "id": "gpt-4o",
      "name": "GPT-4o",
      "provider": "OpenAI",
      "tier": "verified",
      "hasScores": true,
      "scoreCount": 25,
      "specs": {
        "contextWindow": 128000,
        "pricing": { "input": 5.0, "output": 15.0 }
      },
      "capabilities": ["text", "vision"],
      "isOpenSource": false
    }
  ]
}
```

**Size:** ~200KB uncompressed, ~50KB gzipped  
**Load Time:** <200ms  
**Max Models:** Supports 50,000+ models

**Usage:**
```typescript
import { useRegistry } from '@/hooks/use-registry';

function MyComponent() {
  const { models, isLoading } = useRegistry({
    includeUnscored: true,
    filterByTier: 'verified'
  });
  
  return <div>{/* render models */}</div>;
}
```

---

### **2. Full Model Data** (`@/lib/registry-data`)

**Purpose:** Complete model information with benchmarks

**Includes:**
- All benchmark scores
- Score provenance metadata
- Family variants
- Complete specs

**Size:** ~870KB  
**Use Cases:**
- Model detail pages (need scores)
- Explore page (needs scores for charts)
- Compare page (needs variants)

**Usage:**
```typescript
import { models, findModel } from '@/lib/registry-data';

// Server component
export default async function ModelPage({ params }) {
  const { id } = await params;
  const model = findModel(id);
  
  return <ModelDetail model={model} />;
}
```

---

### **3. Score Files** (`/scores/[model-id].json`)

**Purpose:** On-demand score loading

**Structure:**
```json
{
  "modelId": "o1",
  "scores": {
    "mmlu": {
      "score": 91.8,
      "verified": true,
      "verificationLevel": "provider",
      "sourceId": "openai",
      "asOfDate": "2024-12-05"
    }
  },
  "lastUpdated": "2024-12-05",
  "source": "manual-curation"
}
```

**Size:** <1KB per model  
**Usage:**
```typescript
import { useModelScores } from '@/hooks/use-model-scores';

function ModelDetail({ modelId }) {
  const { scores, isLoading } = useModelScores(modelId);
  
  if (isLoading) return <Loading />;
  
  return <ScoreList scores={scores} />;
}
```

---

## Hooks Reference

### **useRegistry()**

Fetch lightweight model list with filtering.

```typescript
const {
  models,          // Filtered model list
  total,           // Total model count
  verified,        // Verified model count
  discovered,      // Discovered model count
  isLoading,
  isError,
  mutate
} = useRegistry({
  includeUnscored?: boolean,      // Show discovered models
  filterByTier?: 'all' | 'verified' | 'discovered',
  filterByFamily?: string,
  filterByProvider?: string
});
```

### **useModelScores()**

Fetch scores for a specific model.

```typescript
const {
  scores,          // Record<benchmarkId, ScoreEntry>
  modelId,
  lastUpdated,
  isLoading,
  isError,
  mutate
} = useModelScores(modelId: string | null);
```

### **useMultipleModelScores()**

Fetch scores for multiple models in parallel.

```typescript
const {
  scores,  // Record<modelId, Record<benchmarkId, ScoreEntry>>
  isLoading,
  isError
} = useMultipleModelScores(modelIds: string[]);
```

---

## Build Pipeline

### **Generation Steps**

1. **Import Metadata**
   ```bash
   bun run import:models-dev
   ```
   - Fetches from models.dev API
   - Generates 1,546 model metadata files
   - Creates static slices

2. **Generate Manifest**
   ```bash
   bun run generate:manifest
   ```
   - Merges manual + discovered models
   - Counts scores per model
   - Creates registry-manifest.json
   - Copies score files to public/

3. **Build**
   ```bash
   bun run build:cf
   ```
   - Runs manifest generation
   - Compiles Next.js
   - Generates static pages

### **File Output**

```
public/
├── api/
│   ├── registry-manifest.json    # Lightweight model list
│   └── v1/
│       └── models/               # Static API slices
└── scores/                       # Score files
    ├── o1.json
    ├── claude-3-5-sonnet.json
    └── ...
```

---

## Performance Metrics

### **Bundle Sizes**

| Component | Size | Notes |
|-----------|------|-------|
| **Manifest** | ~50KB (gzipped) | Loads on-demand |
| **Score File** | <1KB | Per model |
| **Client Bundle** | ~150KB | React + app code |
| **Full Models** | ~870KB | Only where needed |

### **Load Times**

| Page Type | Initial | Data Fetch | Total |
|-----------|---------|------------|-------|
| **Leaderboard** | <1s | <200ms | <1.2s |
| **Model Detail** | <1s | <50ms | <1.05s |
| **Explore** | <1s | N/A (static) | <1s |
| **API Docs** | <1s | N/A (static) | <1s |

### **Scalability**

| Metric | Current | Max Supported |
|--------|---------|---------------|
| **Models** | 1,581 | 50,000+ |
| **Manifest Size** | 200KB | <1MB |
| **Build Time** | ~3s | <10s |

---

## Best Practices

### **When to Use Hooks**

✅ **Use `useRegistry()` when:**
- Displaying model lists
- Implementing filters
- Building discovery UIs
- Need tier information

✅ **Use `useModelScores()` when:**
- Displaying scores for one model
- Building score comparison
- Need on-demand loading

✅ **Use full data when:**
- Need complete benchmark scores
- Building detailed visualizations
- Server-side rendering required

### **When to Use Static Imports**

✅ **Use `@/lib/registry-data` when:**
- Building static pages
- SEO is critical
- Need all data at build time
- Page is small (landing, docs)

---

## Migration Guide

### **From Legacy to Scalable**

**Before:**
```typescript
import { models } from '@/lib/registry-data';

function ModelList() {
  return models.map(m => <ModelCard key={m.id} model={m} />);
}
```

**After:**
```typescript
import { useRegistry } from '@/hooks/use-registry';

function ModelList() {
  const { models } = useRegistry();
  
  return models.map(m => <ModelCard key={m.id} model={m} />);
}
```

### **Benefits**

- ✅ Smaller initial bundle
- ✅ Faster page loads
- ✅ Supports 10,000+ models
- ✅ On-demand data loading

---

## Troubleshooting

### **Common Issues**

**Problem:** "Cannot read properties of undefined (reading 'pricing')"  
**Solution:** Use optional chaining: `model.specs?.pricing?.input`

**Problem:** "No models match the current filters"  
**Solution:** Check if using correct data source (manifest vs full data)

**Problem:** Build fails with TypeScript errors  
**Solution:** Ensure interfaces match (RegistryModel vs Model)

### **Debug Commands**

```bash
# Regenerate manifest
bun run generate:manifest

# Check manifest
python3 -c "import json; m = json.load(open('public/api/registry-manifest.json')); print(f'Models: {m[\"totalModels\"]}')"

# Test build
bun run build

# Check bundle size
ls -lh dist/_next/static/chunks/
```

---

## Future Enhancements

### **Planned Improvements**

1. **Incremental Static Regeneration (ISR)**
   - Auto-revalidate stale data
   - Background updates

2. **Cloudflare KV Integration**
   - Store metadata in KV
   - Update without full rebuild

3. **GraphQL API**
   - Query exactly what you need
   - Reduce over-fetching

4. **Edge Functions**
   - Dynamic filtering at edge
   - Personalized results

---

## Architecture Decisions

### **Why Hybrid Approach?**

**Question:** Why not use hooks everywhere?

**Answer:** Different pages have different needs:
- **Discovery pages** (Leaderboard): Need fast filtering → Hooks
- **Detail pages** (Model): Need complete data → Full import
- **Visualization** (Explore): Need scores → Full import

**Question:** Why not use full data everywhere?

**Answer:** Performance and scalability:
- Full data = 870KB
- Hooks = 50KB manifest
- 17x difference in initial load

### **Trade-offs**

✅ **Pros:**
- Optimal performance for each use case
- Supports massive scale
- Clean separation of concerns

⚠️ **Cons:**
- More complex architecture
- Need to choose right data source
- Slightly higher maintenance

---

## Resources

- **Manifest Generator:** `scripts/generate-manifest.mjs`
- **Registry Hook:** `src/hooks/use-registry.ts`
- **Scores Hook:** `src/hooks/use-model-scores.ts`
- **Tier Components:** `src/components/ui/tier-badge.tsx`

---

**Last Updated:** 2026-03-01  
**Version:** 1.0.0  
**Status:** Production Ready
