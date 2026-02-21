import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { categoryToSlug, slugToCategory } from "@/lib/categories";

export function middleware(request: NextRequest) {
  const { searchParams, pathname } = request.nextUrl;

  // Only handle root path with category param
  if (pathname !== "/") {
    return NextResponse.next();
  }

  const categoryParam = searchParams.get("category");
  if (!categoryParam) {
    return NextResponse.next();
  }

  // Validate category
  const category = slugToCategory(categoryParam);
  if (!category) {
    return NextResponse.next();
  }

  // Build redirect URL
  const slug = categoryToSlug(category);
  const remainingParams = new URLSearchParams();
  
  // Preserve other query params
  const paramsToKeep = ["q", "sort", "dir", "page", "pageSize", "domain", "license", "source", "verification", "coverageMode"];
  paramsToKeep.forEach((key) => {
    const value = searchParams.get(key);
    if (value) remainingParams.set(key, value);
  });

  const queryString = remainingParams.toString();
  const redirectUrl = `/leaderboard/${slug}${queryString ? `?${queryString}` : ""}`;

  return NextResponse.redirect(new URL(redirectUrl, request.url), 307);
}

export const config = {
  matcher: "/",
};
