import { findModel, models } from "@/lib/registry-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteName, siteUrl } from "@/lib/site";
import { ModelDetail } from "@/components/model/model-detail-client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return models.map((model) => ({
    id: model.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const model = findModel(id);

  if (!model) {
    return {
      title: "Model",
      description: "Model details and benchmark performance.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description = `${model.name} by ${model.provider}: pricing, specs, and benchmark-level provenance in LLM Registry.`;

  return {
    title: model.name,
    description,
    alternates: {
      canonical: `/model/${model.id}`,
    },
    openGraph: {
      title: `${model.name} by ${model.provider}`,
      description,
      url: `${siteUrl}/model/${model.id}`,
      type: "article",
      images: [
        {
          url: `${siteUrl}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: `${model.name} - LLM Registry`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${model.name} by ${model.provider}`,
      description,
      images: [`${siteUrl}/opengraph-image.png`],
    },
  };
}

export default async function ModelPage({ params }: PageProps) {
  const { id } = await params;
  const model = findModel(id);

  if (!model) {
    return notFound();
  }

  return (
    <div className="animate-in fade-in duration-500 space-y-8 pb-20">
      {/* Back Button */}
      <div className="flex items-center gap-2">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Leaderboard
        </Link>
      </div>

      {/* Model Detail Component */}
      <ModelDetail modelId={id} />
    </div>
  );
}
