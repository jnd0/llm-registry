import { benchmarks, flattenedModels } from "@/lib/registry-data";
import type { Metadata } from "next";
import { ExploreClient } from "./client";
import { siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Explore",
  description: "Interactive scatter plot for exploring model price vs performance relationships.",
  keywords: ["llm price performance", "ai model scatter plot", "model pricing comparison", "llm exploration"],
  alternates: {
    canonical: "/explore",
  },
  openGraph: {
    title: `Explore Model Price vs Performance | ${siteName}`,
    description: "Interactive scatter plot for exploring model price vs performance relationships.",
    url: `${siteUrl}/explore`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Explore model price vs performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Explore Model Price vs Performance | ${siteName}`,
    description: "Interactive scatter plot for exploring model price vs performance relationships.",
    images: [`${siteUrl}/opengraph-image.png`],
  },
};

export default function ExplorePage() {
  const benchmarkOptions = benchmarks.map((b) => ({
    id: b.id,
    name: b.name,
    category: b.category,
  }));

  return (
    <ExploreClient 
      models={flattenedModels}
      benchmarkOptions={benchmarkOptions}
    />
  );
}
