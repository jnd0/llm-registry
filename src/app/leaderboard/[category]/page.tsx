import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { benchmarkCategories, categoryToSlug, slugToCategory } from "@/lib/categories";
import { benchmarks, models } from "@/lib/registry-data";
import { siteName, siteUrl } from "@/lib/site";
import { ClientCategoryLeaderboard } from "@/components/dashboard/client-category-leaderboard";
import { Skeleton } from "@/components/ui/skeleton";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description = `Normalized rankings and benchmark coverage for ${activeCategory} models in LLM Registry.`;

  return {
    title: `${activeCategory} Leaderboard`,
    description,
    keywords: [
      `${activeCategory.toLowerCase()} leaderboard`,
      `${activeCategory.toLowerCase()} llm benchmark`,
      "llm category rankings",
    ],
    alternates: {
      canonical: `/leaderboard/${categorySlug}`,
    },
    openGraph: {
      title: `${activeCategory} Leaderboard | ${siteName}`,
      description,
      url: `${siteUrl}/leaderboard/${categorySlug}`,
      type: "website",
      images: [
        {
          url: `${siteUrl}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: `${activeCategory} leaderboard`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${activeCategory} Leaderboard | ${siteName}`,
      description,
      images: [`${siteUrl}/opengraph-image.png`],
    },
  };
}

function LoadingShell() {
  return (
    <div className="surface-card flex h-96 items-center justify-center rounded-xl font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
      Loading Category Leaderboard…
    </div>
  );
}

export default async function CategoryLeaderboardPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const activeCategory = slugToCategory(categorySlug);

  if (!activeCategory) return notFound();

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

      <Suspense fallback={<LoadingShell />}>
        <ClientCategoryLeaderboard
          models={models}
          benchmarks={benchmarks}
          activeCategory={activeCategory}
          activeCategorySlug={categorySlug}
        />
      </Suspense>
    </div>
  );
}
