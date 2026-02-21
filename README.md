# LLM Registry

The Source of Truth for LLM Benchmarks. Compare top models like **DeepSeek V3**, **Claude 3.5 Sonnet**, and **GPT-4o** across trusted evaluation sets.

## Features

- **Global Leaderboard**: Sortable, filterable index of top LLMs with pagination and column selection
- **Interactive Comparison**: "Versus Mode" with Radar Charts and Delta tables
- **Deep Specs**: Detailed context window, pricing, and parameter data
- **Verified Scores**: Distinguishes between self-reported and verified benchmark results
- **Data Freshness**: Visual indicators showing score age (amber for aging, red for stale)
- **Coverage-Assisted Mode**: Family-proxy estimation for sparse models with clear attribution
- **API Access**: REST API for programmatic access to benchmark data
- **Data Validation**: Built-in scripts to prevent broken IDs and out-of-range scores

## Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 + Shadcn UI
- **Data**: TypeScript-based local "database" (for speed & type safety)
- **Schema Validation**: Zod runtime guards for registry data integrity
- **State**: `nuqs` (URL-driven state management)
- **Charts**: Recharts

Leaderboard filtering/sorting/pagination is URL-driven and server-applied, so the client only hydrates the current page slice instead of the full registry dataset.

## Getting Started

1. Install dependencies:
   ```bash
   bun install
   ```

2. Run the development server:
   ```bash
   bun dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Data Quality Commands

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
