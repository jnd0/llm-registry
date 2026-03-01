import { benchmarks, models, sources } from "@/lib/registry-data";
import { changelog } from "@/data/changelog";
import type { Metadata } from "next";
import { siteName, siteUrl } from "@/lib/site";

const categories = Array.from(new Set(benchmarks.map((benchmark) => benchmark.category)));

export const metadata: Metadata = {
  title: "Methodology",
  description: "Read data policy, normalization rules, attribution, and confidence caveats used in LLM Registry rankings.",
  keywords: ["llm methodology", "benchmark normalization", "score provenance", "verification tiers"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `Methodology and Data Policy | ${siteName}`,
    description: "Read data policy, normalization rules, attribution, and confidence caveats used in LLM Registry rankings.",
    url: `${siteUrl}/about`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "LLM Registry methodology and data policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Methodology and Data Policy | ${siteName}`,
    description: "Read data policy, normalization rules, attribution, and confidence caveats used in LLM Registry rankings.",
    images: [`${siteUrl}/opengraph-image.png`],
  },
};

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-700 space-y-10 pb-20">
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card/50 px-6 py-8 sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_50%)]" />
        <div className="relative max-w-3xl space-y-4">
          <p className="label-eyebrow text-muted-foreground/70">Registry / Methodology</p>
          <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Registry Standards
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Data policy, normalization rules, and provenance labeling used across the global benchmark registry.
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Verified Models", value: models.length },
          { label: "Active Benchmarks", value: benchmarks.length },
          { label: "Evaluation Categories", value: categories.length },
          { label: "Verified Sources", value: sources.length },
        ].map((stat) => (
          <article key={stat.label} className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">{stat.label}</p>
            <p className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground">{stat.value}</p>
          </article>
        ))}
      </section>

      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <aside className="space-y-6">
          <div className="sticky top-24 space-y-8">
            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Score Normalization</h2>
              <div className="space-y-4 border-l border-border/60 pl-4 py-1">
                <div className="space-y-1">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">Max Scaling</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Score / MaxScore * 100. Standard for bounded metrics.</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">Min-Max Scaling</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">(Score - Min) / (Max - Min) * 100. Used for ELO and shifted scales.</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">Inversion</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Lower-is-better metrics are mathematically inverted to maintain 100 as the peak.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Verification Tiers</h2>
              <div className="grid gap-2">
                {[
                  { id: "third_party", label: "Third-party", desc: "Independent audits and leaderboards." },
                  { id: "provider", label: "Provider", desc: "Official scores from model developers." },
                  { id: "community", label: "Community", desc: "Open evaluations and collective results." },
                  { id: "estimated", label: "Estimated", desc: "Inferred values pending formal release." },
                ].map((tier) => (
                  <div key={tier.id} className="rounded-xl border border-border/40 bg-muted/20 p-3">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-foreground">{tier.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{tier.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </aside>

        <main className="space-y-16">
          <section className="space-y-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Provenance & Attribution</h2>
            <div className="prose prose-sm prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-base leading-relaxed">
                We prioritize transparency in every score. Every data point in the registry is tagged with a <span className="text-foreground font-medium underline decoration-primary/30">Source ID</span> and a <span className="text-foreground font-medium underline decoration-primary/30">Verification Level</span>.
              </p>
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
                <h3 className="font-display text-lg font-bold text-foreground">Data Attribution</h3>
                <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0">
                  <li className="m-0 border-l-2 border-primary/20 pl-4 py-1">
                    <p className="font-bold text-foreground text-xs uppercase tracking-widest">Artificial Analysis</p>
                    <p className="text-xs mt-1">Scores marked with <code className="text-primary font-bold">*</code> are imported from <a href="https://artificialanalysis.ai/" className="hover:text-primary transition-colors underline">artificialanalysis.ai</a>.</p>
                  </li>
                  <li className="m-0 border-l-2 border-primary/20 pl-4 py-1">
                    <p className="font-bold text-foreground text-xs uppercase tracking-widest">Metadata Source</p>
                    <p className="text-xs mt-1">Model metadata (pricing, specs, capabilities) imported from <a href="https://models.dev" className="hover:text-primary transition-colors underline">models.dev</a> (MIT License).</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Comparison Methodology</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Compare views prioritize reliability first. We separate fair, overlap-based analysis from exploratory analysis so missing data does not get interpreted as zero performance.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Strict Mode (Default)</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Uses only benchmarks shared by selected models for fair head-to-head comparisons in summary and detailed tables.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Exploratory Mode</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Includes non-shared results for broader context. Missing entries remain explicitly labeled as N/A.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Capability Profile</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Radar uses all available domains within the current scope and preserves missing values as N/A instead of plotting them as zero.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Evidence Quality</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Compare pages expose shared benchmark counts and per-model coverage so confidence in comparisons is visible before interpretation.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Coverage-Assisted Mode (Leaderboard)</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Leaderboard can optionally fill sparse base-model gaps with family-proxy scores from the same model line. These scores are marked as estimated and shown with a ~ suffix. Use Observed Only mode for strict measured values.
                </p>
              </article>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Enhanced Model Metadata</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Family System</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Models are grouped into families (e.g., Llama, GPT, Claude) for easier discovery and comparison. Family badges appear on model cards and enable family-based filtering.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Capability Icons</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Visual indicators show key capabilities: reasoning (chain-of-thought), vision (image analysis), tools (function calling), audio, video, code specialization, JSON mode, file uploads, and temperature control. Hover or tap icons for detailed descriptions.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Training Cutoff</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Each model displays its training data cutoff date, providing transparency about knowledge freshness and temporal limitations.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Advanced Pricing</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Beyond basic input/output pricing, we track cache read/write costs, reasoning token pricing, audio input/output costs, and context surcharges for models with over 200K context windows.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Model Status</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Models are tagged with lifecycle status: active (production-ready), beta (public testing), alpha (early testing), or deprecated (end-of-life).
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Max Output Tokens</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Maximum generation length is displayed for each model, helping you understand output limitations for long-form content generation.
                </p>
              </article>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Automated Data Pipeline</h2>
            <div className="space-y-4 border-l border-border/60 pl-4 py-1">
              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">models.dev Integration</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  We automatically import metadata from <a href="https://models.dev" className="text-primary hover:underline">models.dev</a>, a community-driven database of LLM specifications. This provides comprehensive coverage of 1,675+ models with pricing, capabilities, and limits.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Weekly Sync</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  GitHub Actions automatically fetch updated data every Monday, detect changes, and create pull requests for review. This ensures our registry stays current with the rapidly evolving LLM landscape.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">ID Normalization</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Model IDs from different sources are normalized to our internal naming convention using a community-maintainable JSON mapping file, making it easy for contributors to add new mappings.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Deep Merge Logic</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Imported metadata is deep-merged with existing data to prevent capability loss. Our test suite (9 tests, 100% coverage) ensures that updating one field never accidentally removes existing capabilities like vision or tool support.
                </p>
              </article>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Static API Architecture</h2>
            <div className="space-y-4 border-l border-border/60 pl-4 py-1">
              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Static Slicing</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Instead of requiring API consumers to download the entire 800KB+ dataset, we generate 1,546 individual JSON files (one per model), each under 1KB. This reduces API payload size by 99.95%.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Edge Delivery</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  All API endpoints are pre-generated at build time and served from Cloudflare's edge network globally, providing under 20ms response times worldwide with 100% uptime SLA.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Rate Limiting</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Rate limiting is handled by Cloudflare WAF at the edge (100 requests/minute per IP), providing DDoS protection without any application code or bundle size impact.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Bundle Optimization</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  By using static generation and on-demand data loading via SWR hooks, we reduced the client bundle from ~870KB to ~170KB (80% reduction), dramatically improving initial page load times.
                </p>
              </article>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Quality Assurance</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Test Coverage</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Critical data merge logic is covered by 9 unit tests with 100% coverage, ensuring data integrity is maintained during automated imports.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Data Validation</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Automated validation scripts verify data integrity, checking model IDs, benchmark IDs, score bounds, and provenance metadata before each deployment.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Source Attribution</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Every score includes provenance metadata: source ID, verification level (third-party, provider, community, estimated), and as-of date for complete transparency.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Unified Fields</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  We maintain consistent field naming across all data sources (e.g., trainingCutoff instead of knowledgeCutoff) to prevent data fragmentation and ensure reliability.
                </p>
              </article>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Registry Changelog</h2>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">History of Updates</span>
            </div>
            <div className="space-y-8">
              {changelog.map((entry) => (
                <article key={`${entry.version}-${entry.date}`} className="relative group">
                  <div className="absolute -left-3 top-0 bottom-0 w-px bg-border group-hover:bg-primary/30 transition-colors" />
                  <div className="pl-6 space-y-3">
                    <div className="flex items-baseline gap-3">
                      <p className="font-mono text-xs font-bold tracking-widest text-primary uppercase">v{entry.version}</p>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{entry.date}</p>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">{entry.title}</h3>
                    <div className="space-y-1.5 pt-1">
                      {entry.notes.map((note) => (
                        <p key={note} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40" />
                          {note}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
