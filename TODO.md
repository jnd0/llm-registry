# TODO

## API Roadmap (Public Read-Only First)

- [ ] Build API v1 endpoints under `src/app/api/v1`
  - [ ] `GET /api/v1/models`
  - [ ] `GET /api/v1/models/[id]`
  - [ ] `GET /api/v1/benchmarks`
  - [ ] `GET /api/v1/scores`
  - [ ] `GET /api/v1/leaderboards/[category]`
  - [ ] `GET /api/v1/meta`
- [ ] Ensure all score responses include provenance
  - [ ] `sourceId`, `verificationLevel`, `asOfDate`
- [ ] Add Artificial Analysis attribution in API responses and docs
  - [ ] Attribution text + source URL
  - [ ] Mark AA-imported values consistently
- [ ] Add caching + freshness headers
  - [ ] ETag / Last-Modified
  - [ ] `s-maxage` + `stale-while-revalidate`
- [ ] Add public-first rate limiting (IP-based)
- [ ] Publish API docs page with examples + schema
- [ ] Add export endpoint (`json`/`csv`) for research workflows

## Site Improvements (Post-API)

- [ ] Source filter + verification filter in leaderboard/compare
- [ ] Data freshness UI (stale score indicators)
- [ ] Benchmark detail pages (`/benchmark/[id]`)
- [ ] Conflict view for differing source scores
- [ ] Column virtualization for full-detail leaderboard performance
