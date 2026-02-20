import { NextRequest, NextResponse } from "next/server";
import { normalizeScore } from "@/lib/stats";
import { apiAttribution, getLatestScoreDate } from "@/lib/api";
import { benchmarks, models } from "@/lib/registry-data";
import { neutralizeCsvFormula } from "@/lib/security";

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

function getExportData(filters: {
  modelId?: string;
  benchmarkId?: string;
  category?: string;
  sourceId?: string;
  limit?: number;
  offset?: number;
}): ExportRow[] {
  const benchmarkById = new Map(benchmarks.map((benchmark) => [benchmark.id, benchmark]));

  const rows = models.flatMap((model) => {
    if (filters.modelId && model.id !== filters.modelId) return [];

    return Object.entries(model.scores).flatMap(([id, scoreEntry]) => {
      if (scoreEntry.score === null || scoreEntry.score === undefined) return [];
      if (filters.benchmarkId && id !== filters.benchmarkId) return [];
      if (filters.sourceId && scoreEntry.sourceId !== filters.sourceId) return [];

      const benchmark = benchmarkById.get(id);
      if (!benchmark) return [];
      if (filters.category && benchmark.category.toLowerCase() !== filters.category.toLowerCase()) return [];

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

  const sorted = rows.sort((a, b) => {
    const modelCmp = a.modelName.localeCompare(b.modelName);
    if (modelCmp !== 0) return modelCmp;
    return a.benchmarkName.localeCompare(b.benchmarkName);
  });

  const offset = Math.max(0, filters.offset ?? 0);
  const limit = Math.max(1, Math.min(10_000, filters.limit ?? 5_000));
  return sorted.slice(offset, offset + limit);
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

export function GET(request: NextRequest) {
  const format = request.nextUrl.searchParams.get("format") ?? "json";
  const modelId = request.nextUrl.searchParams.get("modelId") ?? undefined;
  const benchmarkId = request.nextUrl.searchParams.get("benchmarkId") ?? undefined;
  const category = request.nextUrl.searchParams.get("category") ?? undefined;
  const sourceId = request.nextUrl.searchParams.get("sourceId") ?? undefined;
  const limitParam = Number.parseInt(request.nextUrl.searchParams.get("limit") ?? "5000", 10);
  const offsetParam = Number.parseInt(request.nextUrl.searchParams.get("offset") ?? "0", 10);
  const limit = Number.isFinite(limitParam) ? Math.max(1, Math.min(10_000, limitParam)) : 5_000;
  const offset = Number.isFinite(offsetParam) ? Math.max(0, offsetParam) : 0;

  const rows = getExportData({ modelId, benchmarkId, category, sourceId, limit, offset });
  const lastModified = getLatestScoreDate() ?? new Date().toISOString();

  if (format === "csv") {
    const csv = rowsToCsv(rows);
    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="llm-registry-export-${new Date().toISOString().split("T")[0]}.csv"`,
        "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
        "Last-Modified": lastModified,
      },
    });
  }

  return NextResponse.json(
    {
      total: rows.length,
      exportedAt: new Date().toISOString(),
      filters: { modelId, benchmarkId, category, sourceId, limit, offset },
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
