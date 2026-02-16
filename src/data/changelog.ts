export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  notes: string[];
}

export const changelog: ChangelogEntry[] = [
  {
    version: "1.3.0",
    date: "2026-02-15",
    title: "Trust and Mobile UX Upgrade",
    notes: [
      "Added score-level provenance, verification tier labels, and freshness metadata across leaderboard, compare, and model views.",
      "Introduced mobile leaderboard cards and sticky compare tray for faster small-screen workflows.",
      "Shipped strict data validation and improved benchmark metadata defaults.",
    ],
  },
  {
    version: "1.2.0",
    date: "2026-02-14",
    title: "Methodology and Registry Guardrails",
    notes: [
      "Added methodology page with normalization and ranking explanations.",
      "Introduced data validation scripts and CI workflow for registry quality.",
      "Expanded benchmark taxonomy with Agentic and Advanced Tasks coverage.",
    ],
  },
  {
    version: "1.1.0",
    date: "2026-02-13",
    title: "Comparison and Category Scoring",
    notes: [
      "Added category-average views in leaderboard and compare workflows.",
      "Implemented column reordering, layout persistence, and summary mode.",
      "Fixed benchmark deduplication and key consistency regressions.",
    ],
  },
];
