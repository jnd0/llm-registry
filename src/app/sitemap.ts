import type { MetadataRoute } from "next";
import { models, benchmarks } from "@/lib/registry-data";
import { benchmarkCategories, categoryToSlug } from "@/lib/categories";
import { domainDefinitions, domainToSlug } from "@/lib/domains";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/compare`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/benchmarks`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/explore`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/api-docs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = benchmarkCategories.map((category) => ({
    url: `${siteUrl}/leaderboard/${categoryToSlug(category)}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.7,
  }));

  const domainRoutes: MetadataRoute.Sitemap = domainDefinitions.map((domain) => ({
    url: `${siteUrl}/domain/${domainToSlug(domain.id)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const benchmarkRoutes: MetadataRoute.Sitemap = benchmarks.map((benchmark) => ({
    url: `${siteUrl}/benchmark/${benchmark.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const modelRoutes: MetadataRoute.Sitemap = models.map((model) => ({
    url: `${siteUrl}/model/${model.id}`,
    lastModified: new Date(model.releaseDate),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...domainRoutes, ...benchmarkRoutes, ...modelRoutes];
}
