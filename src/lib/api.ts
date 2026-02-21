import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { models } from "@/lib/registry-data";

export const apiAttribution = {
  label: "Artificial Analysis attribution",
  url: "https://artificialanalysis.ai/",
  note: "AA-imported values are marked with isArtificialAnalysis=true.",
};

function toHttpDate(value?: string): string | undefined {
  if (!value) return undefined;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toUTCString();
}

export function getLatestScoreDate(): string | null {
  let latest = "";

  for (const model of models) {
    for (const score of Object.values(model.scores)) {
      if (score.asOfDate && score.asOfDate > latest) {
        latest = score.asOfDate;
      }
    }
  }

  return latest || null;
}

export function jsonWithCache(
  request: NextRequest | null,
  payload: unknown,
  options?: { status?: number; lastModified?: string | null }
) {
  const status = options?.status ?? 200;
  const body = JSON.stringify(payload);
  const etag = `W/"${createHash("sha1").update(body).digest("base64url")}"`;
  
  // In static mode (null request), skip ETag comparison
  const ifNoneMatch = request?.headers.get("if-none-match");

  const headers = new Headers({
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": status >= 400 ? "no-store" : "public, s-maxage=3600, stale-while-revalidate=86400",
    ETag: etag,
  });

  const lastModified = toHttpDate(options?.lastModified ?? undefined);
  if (lastModified) {
    headers.set("Last-Modified", lastModified);
  }

  if (ifNoneMatch === etag) {
    return new NextResponse(null, { status: 304, headers });
  }

  return new NextResponse(body, { status, headers });
}
