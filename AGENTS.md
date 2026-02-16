# AGENTS.md

Guidance for coding agents working in `llm-registry`.

## Mission

`llm-registry` is positioned as an official source of truth for LLM benchmark research.

Prioritize:

- Data correctness over speed.
- Clear provenance for every score.
- Reproducible validation before shipping.

## Canonical Data Sources In Repo

- `src/data/benchmarks.ts`: benchmark definitions and normalization metadata.
- `src/data/models.ts`: model catalog and score assembly logic.
- `src/data/aa-overrides.ts`: Artificial Analysis snapshot override layer.
- `src/data/sources.ts`: source registry used for attribution.
- `src/types/index.ts`: schema for models, scores, benchmarks, and provenance.

## Source-of-Truth Rules

1. Never invent or estimate benchmark values unless explicitly marked `estimated`.
2. Every score should include provenance fields when possible:
   - `sourceId`
   - `verificationLevel`
   - `asOfDate`
3. Benchmark IDs must be unique and stable.
4. Model score keys must map to valid benchmark IDs.
5. Keep model variants as separate entries when they represent distinct offerings.

## External Data Policy (Artificial Analysis)

- Current policy: AA import can overwrite overlapping mapped scores.
- Required attribution in docs/UI/API: `https://artificialanalysis.ai/`.
- Keep AA snapshot date explicit (currently `2026-02-16` in `src/data/aa-overrides.ts`).
- Preserve UI marker for AA-imported values (`*`) where implemented.

## Validation and Release Checks

Run before finalizing changes:

```bash
npm run validate:data
npm run validate:data:strict
npm run lint
npm run build
```

If strict validation fails, fix data integrity first (IDs, bounds, provenance, sources).

## Editing Expectations

- Do not remove existing provenance metadata.
- Do not rename benchmark IDs casually; treat as public contract.
- Update `src/data/sources.ts` when adding new external sources.
- Keep methodology and attribution text aligned with data changes (`src/app/about/page.tsx`).

## API Direction

Planned approach is public read-only first. See `TODO.md` for API v1 endpoint backlog and post-API site improvements.
