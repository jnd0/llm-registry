# SEO Checklist (Search Console Mapped)

Use this checklist as the recurring SEO ops runbook for `llm-registry`.

## Weekly Checks

| Area | Search Console Report | What to Check | Target | Action if Off-Target |
| --- | --- | --- | --- | --- |
| Index coverage | Pages > Indexed | Indexed pages trend vs expected routes (home, categories, models, benchmarks, domains) | Stable growth, no sudden drops | Inspect `robots.txt`, canonicals, noindex flags, and sitemap entries |
| Excluded pages | Pages > Not indexed | Unexpected spikes in duplicate/crawled-not-indexed | No unexplained spikes | Review duplicate URL patterns and canonical consistency |
| Crawl health | Settings > Crawl stats | Crawl requests, response codes, host status | Mostly 200s; low 5xx | Fix server errors, route issues, or accidental blocks |
| Search performance | Search results | Clicks, impressions, CTR, average position for high-intent pages | CTR improving on top pages | Rewrite title/meta description for low CTR pages |
| Query relevance | Search results > Queries | Query-topic fit for `/`, `/compare`, `/leaderboard/*` | Queries match benchmark/model intent | Expand content blocks and internal links to target topics |
| Rich results | Enhancements / Rich results | Structured data validity | 0 critical errors | Fix invalid JSON-LD fields and retest in Rich Results Test |

## Monthly Checks

| Area | Search Console Report | What to Check | Target | Action if Off-Target |
| --- | --- | --- | --- | --- |
| Sitemap quality | Sitemaps | Submitted vs discovered URLs, fetch success | 100% success | Regenerate sitemap logic and ensure canonical URLs only |
| Core Web Vitals | Experience > Core Web Vitals | LCP, INP, CLS page group health | All “Good” where feasible | Optimize largest components/images/scripts on affected templates |
| Cannibalization | Search results + URL filter | Same queries spread across multiple pages unintentionally | Clear primary URL per query cluster | Tighten internal linking and on-page targeting |
| Content freshness | Search performance by page | Declining pages with aging data copy | Refresh top decaying pages monthly | Update methodology notes, intros, and benchmark context |

## Priority URL Groups

Track these separately in Search Console URL filters:

1. `/` and `/leaderboard/*` (primary acquisition pages)
2. `/model/*` (long-tail model intent)
3. `/benchmark/*` (benchmark research intent)
4. `/compare` (comparison intent)
5. `/about` (E-E-A-T trust page)

## KPI Targets (90-day)

- Increase non-brand impressions by 20%.
- Increase organic CTR on top 20 landing pages by 1.0-1.5 points.
- Keep rich-result and structured-data critical errors at 0.
- Maintain stable indexation for all canonical templates.

## Implementation Notes (Current)

- Canonicals and metadata are centralized via Next metadata API.
- `robots.txt` allows site content and blocks API crawl paths.
- Dynamic pages include OG/Twitter metadata and JSON-LD.
- Compare pages emphasize overlap quality and explicit missing data (`N/A`).
