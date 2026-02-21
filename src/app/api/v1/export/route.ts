import { NextResponse } from "next/server";
import { normalizeScore } from "@/lib/stats";
import { apiAttribution, getLatestScoreDate } from "@/lib/api";
import { benchmarks, models } from "@/lib/registry-data";
import { neutralizeCsvFormula } from "@/lib/security";

// Static export - full dataset only (no query parameter filtering)
export const dynamic = "force-static";

interface ExportRow {
  modelId: string;
  modelName: string;
  provider: string;
  benchmarkId: string;
  benchmarkName: string;
  category: string;
  score: number;
  normalizedScore: number;
  verified: boolean;
  verificationLevel: string | null;
  sourceId: string | null;
  sourceUrl: string | null;
  asOfDate: string | null;
  isArtificialAnalysis: boolean;
}

function getExportData(): ExportRow[] {
  const benchmarkById = new Map(benchmarks.map((benchmark) => [benchmark.id, benchmark]));

  const rows = models.flatMap((model) => {
    return Object.entries(model.scores).flatMap(([id, scoreEntry]) => {
      if (scoreEntry.score === null || scoreEntry.score === undefined) return [];

      const benchmark = benchmarkById.get(id);
      if (!benchmark) return [];

      return {
        modelId: model.id,
        modelName: model.name,
        provider: model.provider,
        benchmarkId: id,
        benchmarkName: benchmark.name,
        category: benchmark.category,
        score: scoreEntry.score,
        normalizedScore: Number(normalizeScore(scoreEntry.score, benchmark).toFixed(1)),
        verified: scoreEntry.verified,
        verificationLevel: scoreEntry.verificationLevel ?? null,
        sourceId: scoreEntry.sourceId ?? null,
        sourceUrl: scoreEntry.sourceUrl ?? null,
        asOfDate: scoreEntry.asOfDate ?? null,
        isArtificialAnalysis: scoreEntry.sourceId === "artificial-analysis",
      };
    });
  });

  return rows.sort((a, b) => {
    const modelCmp = a.modelName.localeCompare(b.modelName);
    if (modelCmp !== 0) return modelCmp;
    return a.benchmarkName.localeCompare(b.benchmarkName);
  });
}

function rowsToCsv(rows: ExportRow[]): string {
  const headers = [
    "modelId",
    "modelName",
    "provider",
    "benchmarkId",
    "benchmarkName",
    "category",
    "score",
    "normalizedScore",
    "verified",
    "verificationLevel",
    "sourceId",
    "sourceUrl",
    "asOfDate",
    "isArtificialAnalysis",
  ];

  const escapeCsv = (value: string | number | boolean | null): string => {
    if (value === null) return "";
    const str = typeof value === "string" ? neutralizeCsvFormula(value) : String(value);
    if (str.includes(",") || str.includes('"') || str.includes("\n")) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };

  const lines = [
    headers.join(","),
    ...rows.map((row) =>
      headers.map((h) => escapeCsv(row[h as keyof ExportRow] as string | number | boolean | null)).join(",")
    ),
  ];

  return lines.join("\n");
}

// Static export only supports JSON (CSV would need client-side generation)
export function GET() {
  const rows = getExportData();
  const lastModified = getLatestScoreDate() ?? new Date().toISOString();

  return NextResponse.json(
    {
      total: rows.length,
      exportedAt: new Date().toISOString(),
      scores: rows,
      attribution: apiAttribution,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
        "Last-Modified": lastModified,
      },
    }
  );
}
