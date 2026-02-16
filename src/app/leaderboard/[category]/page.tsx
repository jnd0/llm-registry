import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { DataTable } from "@/components/dashboard/leaderboard";
import { benchmarks } from "@/data/benchmarks";
import { models } from "@/data/models";
import { benchmarkCategories, categoryToSlug, slugToCategory } from "@/lib/categories";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return benchmarkCategories.map((category) => ({
    category: categoryToSlug(category),
  }));
}

export default async function CategoryLeaderboardPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const activeCategory = slugToCategory(categorySlug);

  if (!activeCategory) return notFound();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-end justify-between border-b border-white/5 pb-6">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Category Leaderboard</p>
          <h1 className="mt-2 text-3xl font-display font-bold tracking-tight text-foreground">{activeCategory}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/" className="px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-wider border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
              Global View
            </Link>
            {benchmarkCategories.map((category) => {
              const slug = categoryToSlug(category);
              const isActive = category === activeCategory;
              return (
                <Link
                  key={category}
                  href={`/leaderboard/${slug}`}
                  className={`px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-wider border transition-colors ${isActive ? "border-primary/35 bg-primary/10 text-primary" : "border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/5"}`}
                >
                  {category}
                </Link>
              );
            })}
          </div>
        </div>
        <Link href={`/compare?category=${categorySlug}`} className="hidden sm:inline-flex h-10 items-center rounded-md bg-primary px-5 text-[10px] font-mono uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors">
          Compare in {activeCategory}
        </Link>
      </div>

      <Suspense fallback={<div className="h-96 flex items-center justify-center font-mono text-muted-foreground animate-pulse">Initializing Category Leaderboard...</div>}>
        <DataTable data={models} benchmarks={benchmarks} activeCategory={activeCategory} activeCategorySlug={categorySlug} />
      </Suspense>
    </div>
  );
}
