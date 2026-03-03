# LLM Registry

The Source of Truth for LLM Benchmarks. Compare top models like **DeepSeek V3**, **Claude 3.5 Sonnet**, and **GPT-4o** across trusted evaluation sets.

## Features

- **Global Leaderboard**: Sortable, filterable index with tier filtering (Verified vs Discovered)
- **Interactive Comparison**: "Versus Mode" with Radar Charts and Delta tables
- **Deep Specs**: Context window, pricing (input/output/cache/reasoning), max output tokens
- **Verified Scores**: Distinguishes between third-party, provider, community, and estimated results
- **Data Freshness**: Training cutoff dates and score age indicators
- **Tier System**: Verified (curated) vs Discovered (auto-imported) model classification
- **Capability Filtering**: Filter by reasoning, vision, tools, audio, code specialization
- **Family System**: Model family grouping (Llama, GPT, Claude, Gemini, etc.)
- **API Access**: REST API with rate limiting and OpenAPI 3.0 spec
- **Data Validation**: Built-in scripts to prevent broken IDs and out-of-range scores
- **Scalable Architecture**: Supports 10,000+ models with on-demand data loading

## Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 + Shadcn UI
- **Data**: Hybrid architecture (manifest + full data)
- **State Management**: SWR for on-demand data fetching
- **Charts**: Recharts
- **Deployment**: Cloudflare Pages (static + edge delivery)

### Architecture

**Hybrid Data Loading:**
- **Registry Manifest** (~50KB): Lightweight model list for discovery
- **Full Model Data** (~870KB): Complete specs and benchmarks (used where needed)
- **Score Files** (<1KB each): On-demand score loading

**Key Hooks:**
- `useRegistry()` - Fetch model lists with tier filtering
- `useModelScores()` - Load scores on-demand
- `useRegistryFamilies()` - Get unique model families

See [`docs/SCALABLE_ARCHITECTURE.md`](docs/SCALABLE_ARCHITECTURE.md) for complete documentation.

## Getting Started

1. Install dependencies:
   ```bash
   bun install
   ```

2. Generate registry manifest:
   ```bash
   bun run import:models-dev
   bun run generate:manifest
   ```

3. Run the development server:
   ```bash
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Data Quality Commands

- **Import models.dev metadata:**
  ```bash
  bun run import:models-dev
  ```
  
- **Generate registry manifest:**
  ```bash
  bun run generate:manifest
  ```

- Validate registry integrity:
  ```bash
  bun run validate:data
  ```
  
- Run strict validation (CI parity):
  ```bash
  bun run validate:data:strict
  ```
- Generate a category and benchmark coverage report:
  ```bash
  bun run report:coverage
  ```
- Run tests:
  ```bash
  bun run test
  ```

## Deploy (Cloudflare Workers)

This project deploys with OpenNext to **Cloudflare Workers** (not Cloudflare Pages).

- One-time auth:
  ```bash
  bunx wrangler login
  ```
- Build and preview locally in the Workers runtime:
  ```bash
  bun run preview
  ```
- Deploy to production:
  ```bash
  bun run deploy
  ```

### Automated Deploys (Cloudflare Git Integration)

Use **Workers Builds** (not Pages) for fully automated deploys on every push.

- Project type: `Workers`
- Worker name: `llm-registry` (must match `wrangler.jsonc`)
- Root directory: `/`
- Build command: leave empty (or `true`)
- Deploy command:
  ```bash
  bun run deploy
  ```

This gives a single automated pipeline step per commit: build + deploy.

## Methodology

- Global and category views use normalized benchmark scores (0-100).
- Lower-is-better metrics are inverted so higher normalized score always means better performance.
- Category averages are computed over available scores for that category.
- Compare view defaults to strict shared-benchmark analysis for fair model-vs-model deltas.
- Exploratory compare mode allows partial overlap; missing values stay explicit as `N/A`.
- Capability profile (radar) shows all available domains in scope and never treats missing data as zero.
- Leaderboard supports Coverage-Assisted mode by default; use `coverageMode=strict` (Observed Only) to rank using measured scores only.
- Full methodology page: `/about`
- Ongoing SEO operations checklist: `SEO_CHECKLIST.md`

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── dashboard/          # Leaderboard, compare, and data viz components
│   └── ui/                 # Shadcn UI components
├── data/
│   ├── models.ts           # Model definitions and scores
│   ├── benchmarks.ts       # Benchmark taxonomy and metadata
│   ├── aa-overrides.ts     # Artificial Analysis data imports
│   ├── sources.ts          # Data source registry
│   └── changelog.ts        # Version history
├── lib/
│   ├── registry-data.ts    # Data processing and queries
│   └── leaderboard-query.ts # Leaderboard filtering logic
├── types/                  # TypeScript type definitions
└── scripts/                # Data validation and import scripts
```

## API

The registry provides a REST API for programmatic access:

- `GET /api/v1/models` - List all models
- `GET /api/v1/models/[id]` - Get specific model details
- `GET /api/v1/benchmarks` - List all benchmarks
- `GET /api/v1/leaderboard` - Get leaderboard data with filtering
- `GET /api/v1/export?format=json|csv` - Export data for research workflows

Full API documentation available at `/api-docs`

## Adding a Model

1. Open `src/data/models.ts`
2. Add a new object to the `models` array following the `Model` interface
3. Add scores for existing benchmarks
4. Include provenance metadata (source, verification level, as-of date)
5. Run validation: `bun run validate:data:strict`

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

## Data Attribution

Benchmark data includes contributions from:
- **Artificial Analysis** (https://artificialanalysis.ai/) - Imported under current policy with explicit attribution
- Provider-reported scores from model publishers
- Third-party evaluation results

All imported data includes provenance tracking with source IDs, verification levels, and as-of dates.

---

## Build & Deployment

### Production Build

```bash
bun run build:cf
```

This will:
1. Generate registry manifest (1,581 models)
2. Copy score files to public directory
3. Build Next.js application
4. Output static files to `dist/`

### Deploy to Cloudflare Pages

```bash
# Manual deployment
bun run build:cf
npx wrangler pages deploy dist/

# Or connect GitHub repo for auto-deploy
```

### Automated Sync (Weekly)

GitHub Actions automatically:
- Imports latest models.dev data (every Monday 2 AM UTC)
- Detects changes
- Creates pull request for review

See [`.github/workflows/update-models-dev.yml`](.github/workflows/update-models-dev.yml)

---

## Performance

### Bundle Sizes

| Component | Size | Notes |
|-----------|------|-------|
| Client Bundle | ~150KB | React + app code |
| Registry Manifest | ~50KB | 1,581 models |
| Score Files | <1KB | Per model |

### Load Times

| Page | Initial Load | Data Fetch | Total |
|------|--------------|------------|-------|
| Leaderboard | <1s | <200ms | <1.2s |
| Model Detail | <1s | <50ms | <1.05s |
| Explore | <1s | N/A | <1s |

### Scalability

- **Current Models:** 1,581
- **Max Supported:** 50,000+
- **Build Time:** ~3 seconds
- **API Response:** <20ms (edge cached)

---

## API Documentation

REST API available at `/api/v1/`:

- `GET /api/v1/models` - List all models
- `GET /api/v1/models/[id]` - Model details
- `GET /api/v1/benchmarks` - List benchmarks
- `GET /api/v1/scores` - Query scores
- `GET /api/v1/leaderboards/[category]` - Category rankings
- `GET /api/v1/export` - Export data (JSON/CSV)

**Rate Limiting:** 100 requests/minute per IP (via Cloudflare WAF)

Full documentation: [`/api-docs`](/api-docs)

---

## Documentation

- **[Scalable Architecture](docs/SCALABLE_ARCHITECTURE.md)** - Data loading patterns
- **[Cloudflare WAF Setup](docs/CLOUDFLARE_WAF_SETUP.md)** - Rate limiting
- **[Migration Guide](docs/MIGRATION_GUIDE.md)** - Upgrading to v0.7.0
- **[API Documentation](/api-docs)** - REST API reference

---

## Version

**Current:** v0.7.0 (2026-03-01)

**Recent Changes:**
- Tier system (Verified/Discovered models)
- On-demand data loading with hooks
- Automated models.dev import
- 1,581 models with rich metadata
- Advanced filtering (family, capability, provider)
- Score files for on-demand loading

See [Changelog](src/data/changelog.ts) for complete history.

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Attribution

**Data Sources:**
- [models.dev](https://models.dev) - Model metadata (MIT License)
- [Artificial Analysis](https://artificialanalysis.ai/) - Score overrides
- Manual curation - Benchmark scores

**Technologies:**
- Next.js 16
- TypeScript 5
- React 19
- Tailwind CSS v4
- Shadcn UI
- SWR
- Cloudflare Pages

Built with ❤️ for the AI community.
