export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  notes: string[];
}

export const changelog: ChangelogEntry[] = [
  {
    version: "0.5.0",
    date: "2026-02-19",
    title: "Filters, Freshness, and API Enhancements",
    notes: [
      "Added source and verification level multi-select filters to leaderboard toolbar.",
      "Added data freshness indicators: amber dot for aging (91-180d), red dot for stale (>180d).",
      "Fixed URL params clobbering between chart and leaderboard on benchmark pages.",
      "Fixed domain ranking calculation to use normalized scores for cross-benchmark comparability.",
      "Added /api/v1/export endpoint with JSON and CSV format support for research workflows.",
      "Added /api-docs page with live data counts and endpoint documentation.",
      "Added domain detail pages showing top models and benchmark lists.",
      "Added explore page with log scale toggle and searchable benchmark selector.",
      "Added loading states for benchmark, model, explore, and benchmarks pages.",
      "Added Open Graph metadata for model, benchmark, and domain pages.",
      "Added mobile menu domain links and API navigation item.",
    ],
  },
  {
    version: "0.4.0",
    date: "2026-02-18",
    title: "Accessibility and UX Polish",
    notes: [
      "Fixed search input race condition that caused characters to be lost during rapid typing.",
      "Made empty compare slots clickable to open model selector directly.",
      "Added aria-live regions for screen reader announcements on search results.",
      "Added theme-color meta tag for consistent mobile browser theming.",
      "Added prefers-reduced-motion support for all animated progress bars.",
      "Made Report Inaccuracy button functional with mailto link.",
      "Cleaned up unused imports for improved bundle size.",
    ],
  },
  {
    version: "0.3.0",
    date: "2026-02-15",
    title: "Trust and Mobile UX Upgrade",
    notes: [
      "Added score-level provenance, verification tier labels, and freshness metadata across leaderboard, compare, and model views.",
      "Introduced mobile leaderboard cards and sticky compare tray for faster small-screen workflows.",
      "Shipped strict data validation and improved benchmark metadata defaults.",
    ],
  },
  {
    version: "0.2.0",
    date: "2026-02-14",
    title: "Methodology and Registry Guardrails",
    notes: [
      "Added methodology page with normalization and ranking explanations.",
      "Introduced data validation scripts and CI workflow for registry quality.",
      "Expanded benchmark taxonomy with Agentic and Advanced Tasks coverage.",
    ],
  },
  {
    version: "0.1.0",
    date: "2026-02-13",
    title: "Comparison and Category Scoring",
    notes: [
      "Added category-average views in leaderboard and compare workflows.",
      "Implemented column reordering, layout persistence, and summary mode.",
      "Fixed benchmark deduplication and key consistency regressions.",
    ],
  },
];
