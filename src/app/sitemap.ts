import type { MetadataRoute } from "next";
import { models } from "@/lib/registry-data";
import { benchmarkCategories, categoryToSlug } from "@/lib/categories";
import { siteUrl } from "@/lib/site";

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
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = benchmarkCategories.map((category) => ({
    url: `${siteUrl}/leaderboard/${categoryToSlug(category)}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.7,
  }));

  const modelRoutes: MetadataRoute.Sitemap = models.map((model) => ({
    url: `${siteUrl}/model/${model.id}`,
    lastModified: new Date(model.releaseDate),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...modelRoutes];
}
