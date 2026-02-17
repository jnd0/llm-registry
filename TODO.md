# TODO

## API Roadmap (Public Read-Only First)

- [ ] Build API v1 endpoints under `src/app/api/v1`
  - [x] `GET /api/v1/models`
  - [x] `GET /api/v1/models/[id]`
  - [x] `GET /api/v1/benchmarks`
  - [x] `GET /api/v1/scores`
  - [x] `GET /api/v1/leaderboards/[category]`
  - [x] `GET /api/v1/meta`
- [x] Ensure all score responses include provenance
  - [x] `sourceId`, `verificationLevel`, `asOfDate`
- [x] Add Artificial Analysis attribution in API responses and docs
  - [x] Attribution text + source URL
  - [x] Mark AA-imported values consistently
- [x] Add caching + freshness headers
  - [x] ETag / Last-Modified
  - [x] `s-maxage` + `stale-while-revalidate`
- [ ] Add public-first rate limiting (IP-based)
- [ ] Publish API docs page with examples + schema
- [ ] Add export endpoint (`json`/`csv`) for research workflows

## Site Improvements (Post-API)

- [ ] Source filter + verification filter in leaderboard/compare
- [ ] Data freshness UI (stale score indicators)
- [ ] Benchmark detail pages (`/benchmark/[id]`)
- [ ] Conflict view for differing source scores
- [ ] Column virtualization for full-detail leaderboard performance
