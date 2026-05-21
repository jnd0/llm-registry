# LLM Registry

The source of truth for LLM benchmarks. Compare frontier models across trusted evaluation sets with normalized scoring, provenance tracking, and side-by-side analysis.

**[llm-registry.com](https://llm-registry.com)**

## Features

- **Global Leaderboard** — Sortable, filterable index with tier filtering (Verified vs Discovered)
- **Interactive Comparison** — Side-by-side model analysis with radar charts and delta tables
- **Deep Specs** — Context window, pricing (input/output/cache/reasoning), max output tokens
- **Verified Scores** — Third-party, provider, community, and estimated results with provenance
- **Capability Filtering** — Filter by reasoning, vision, tools, audio, code specialization
- **Family System** — Model family grouping (Llama, GPT, Claude, Gemini, etc.)
- **REST API** — Programmatic access with rate limiting and OpenAPI 3.0 spec
- **Scalable Architecture** — Supports 50,000+ models with on-demand data loading

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 + Shadcn UI |
| Data | Hybrid architecture (manifest + full data) |
| State | SWR for on-demand fetching |
| Charts | Recharts |
| Deployment | Cloudflare Workers via OpenNext |

### Data Loading

- **Registry Manifest** (~50KB) — Lightweight model list for discovery
- **Full Model Data** (~870KB) — Complete specs and benchmarks (used where needed)
- **Score Files** (<1KB each) — On-demand score loading per model

See [`docs/SCALABLE_ARCHITECTURE.md`](docs/SCALABLE_ARCHITECTURE.md) for complete documentation.

## Getting Started

```bash
bun install
bun run import:models-dev
bun run generate:manifest
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Purpose |
|---------|---------|
| `bun run import:models-dev` | Import metadata from models.dev |
| `bun run generate:manifest` | Generate registry manifest |
| `bun run validate:data` | Validate registry integrity |
| `bun run validate:data:strict` | Strict validation (CI parity) |
| `bun run report:coverage` | Category and benchmark coverage report |
| `bun run test` | Run test suite |

## Deploy

This project deploys with OpenNext to **Cloudflare Workers**.

```bash
bunx wrangler login    # One-time auth
bun run preview        # Local preview in Workers runtime
bun run deploy         # Deploy to production
```

For automated deploys, connect the repo via **Workers Builds** with deploy command `bun run deploy`.

## API

REST API available at `/api/v1/`:

| Endpoint | Description |
|----------|-------------|
| `GET /api/v1/models` | List all models |
| `GET /api/v1/models/[id]` | Model details |
| `GET /api/v1/benchmarks` | List benchmarks |
| `GET /api/v1/scores` | Query scores |
| `GET /api/v1/leaderboards/[category]` | Category rankings |
| `GET /api/v1/export?format=json\|csv` | Export data |

Rate limiting: 100 requests/minute per IP (Cloudflare WAF). Full docs at [`/api-docs`](/api-docs).

## Methodology

- Normalized scores (0–100) across all benchmarks; lower-is-better metrics are inverted.
- Compare defaults to strict shared-benchmark analysis for fair deltas.
- Leaderboard supports Coverage-Assisted mode; use `coverageMode=strict` for measured scores only.
- Full methodology: [`/about`](/about)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── dashboard/          # Leaderboard, compare, and data viz
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

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Data Attribution

- [Artificial Analysis](https://artificialanalysis.ai/) — Imported score overrides with explicit attribution
- [models.dev](https://models.dev) — Model metadata (MIT License)
- Provider-reported scores and third-party evaluation results

All data includes provenance tracking with source IDs, verification levels, and as-of dates.

## License

MIT License — see [LICENSE](LICENSE) for details.
