import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { DataTable } from "@/components/dashboard/leaderboard";
import { benchmarkCategories, categoryToSlug, slugToCategory } from "@/lib/categories";
import { parseLeaderboardQueryParams, queryLeaderboardModels } from "@/lib/leaderboard-query";
import { benchmarks, models } from "@/lib/registry-data";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{
    q?: string;
    sort?: string;
    dir?: string;
    page?: string;
    pageSize?: string;
  }>;
}

export async function generateStaticParams() {
  return benchmarkCategories.map((category) => ({
    category: categoryToSlug(category),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const activeCategory = slugToCategory(categorySlug);

  if (!activeCategory) {
    return {
      title: "Category",
      description: "Category leaderboard in LLM Registry.",
    };
  }

  return {
    title: `${activeCategory} Leaderboard`,
    description: `Normalized rankings and benchmark coverage for ${activeCategory} models in LLM Registry.`,
    alternates: {
      canonical: `/leaderboard/${categorySlug}`,
    },
  };
}

export default async function CategoryLeaderboardPage({ params, searchParams }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const rawSearchParams = await searchParams;
  const activeCategory = slugToCategory(categorySlug);

  if (!activeCategory) return notFound();

  const queryParams = parseLeaderboardQueryParams(rawSearchParams, benchmarks, { activeCategory });
  const leaderboard = queryLeaderboardModels(models, benchmarks, queryParams);

  return (
    <div className="animate-in fade-in duration-500 space-y-8">
      <section className="surface-panel rounded-2xl px-5 py-6 sm:px-7 sm:py-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label-eyebrow">Category Leaderboard</p>
            <h1 className="mt-2 text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl">{activeCategory}</h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Normalized rankings for {activeCategory}. Use Compare to inspect benchmark-level deltas and shared coverage.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/" className="chip-pill px-3 py-1.5 text-[11px] font-mono tracking-wide text-muted-foreground hover:text-foreground">
                Global View
              </Link>
              {benchmarkCategories.map((category) => {
                const slug = categoryToSlug(category);
                const isActive = category === activeCategory;
                return (
                  <Link
                    key={category}
                    href={`/leaderboard/${slug}`}
                    className={`chip-pill px-3 py-1.5 text-[11px] font-mono tracking-wide transition-colors ${isActive ? "border-primary/40 bg-primary/12 text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {category}
                  </Link>
                );
              })}
            </div>
          </div>

          <Link href={`/compare?category=${categorySlug}`} className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-xs font-medium text-primary-foreground shadow-[0_12px_28px_-20px_var(--color-primary)] transition-colors hover:bg-primary/90">
            Compare in {activeCategory}
          </Link>
        </div>
      </section>

      <Suspense fallback={<div className="surface-card flex h-96 items-center justify-center rounded-xl font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Loading Category Leaderboard…</div>}>
        <DataTable
          data={leaderboard.rows}
          benchmarks={benchmarks}
          activeCategory={activeCategory}
          activeCategorySlug={categorySlug}
          totalRows={leaderboard.total}
          currentPage={leaderboard.page}
          totalPages={leaderboard.totalPages}
          pageSize={leaderboard.pageSize}
          sortBy={leaderboard.sortBy}
          sortDir={leaderboard.sortDir}
          searchQuery={leaderboard.query}
        />
      </Suspense>
    </div>
  );
}
