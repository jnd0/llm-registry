# TODO

## API Roadmap (Public Read-Only First)

- [x] Build API v1 endpoints under `src/app/api/v1`
  - [x] `GET /api/v1/models`
  - [x] `GET /api/v1/models/[id]`
  - [x] `GET /api/v1/benchmarks`
  - [x] `GET /api/v1/scores`
  - [x] `GET /api/v1/leaderboards/[category]`
  - [x] `GET /api/v1/meta`
  - [x] `GET /api/v1/export` (json/csv)
- [x] Ensure all score responses include provenance
  - [x] `sourceId`, `verificationLevel`, `asOfDate`
- [x] Add Artificial Analysis attribution in API responses and docs
  - [x] Attribution text + source URL
  - [x] Mark AA-imported values consistently
- [x] Add caching + freshness headers
  - [x] ETag / Last-Modified
  - [x] `s-maxage` + `stale-while-revalidate`
- [x] Publish API docs page with examples + schema
  - [x] `/api-docs` with live data counts
- [ ] Add public-first rate limiting (IP-based)

## Site Improvements (Post-API)

- [x] Source filter + verification filter in leaderboard/compare
  - [x] Multi-select dropdowns for sources
  - [x] Multi-select dropdowns for verification levels
  - [x] URL param persistence (`source`, `verification`)
- [x] Data freshness UI (stale score indicators)
  - [x] Fresh: ≤90 days (no indicator)
  - [x] Aging: 91-180 days (amber dot)
  - [x] Stale: >180 days (red dot)
- [x] Benchmark detail pages (`/benchmark/[id]`)
  - [x] Frontier chart with SOTA timeline
  - [x] Leaderboard with Gap to SOTA column
  - [x] Share button, histogram, similar benchmarks
- [ ] Conflict view for differing source scores
- [ ] Column virtualization for full-detail leaderboard performance

## Code Quality

- [x] URL params fix: Shared `useMergedSearchParams` hook
- [x] Domain rankings: Fixed to use normalized scores
