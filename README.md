# LLM Registry

The Source of Truth for LLM Benchmarks. Compare top models like **DeepSeek V3**, **Claude 3.5 Sonnet**, and **GPT-4o** across trusted evaluation sets.

## Features

- **Global Leaderboard**: Sortable, filterable index of top LLMs.
- **Interactive Comparison**: "Versus Mode" with Radar Charts and Delta tables.
- **Deep Specs**: Detailed context window, pricing, and parameter data.
- **Verified Scores**: Distinguishes between self-reported and verified benchmark results.
- **Data Validation**: Built-in scripts to prevent broken IDs and out-of-range scores.

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
  npm run validate:data
  ```
- Run strict validation (CI parity):
  ```bash
  npm run validate:data:strict
  ```
- Generate a category and benchmark coverage report:
  ```bash
  npm run report:coverage
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

- `src/data`: The source of truth for models and benchmarks.
- `src/components/dashboard`: Core interactive components (Table, Radar).
- `src/types`: Strict TypeScript definitions.

## Adding a Model

1. Open `src/data/models.ts`
2. Add a new object to the `models` array following the `Model` interface.
3. Add scores for existing benchmarks.
