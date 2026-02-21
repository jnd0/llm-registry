/// <reference types="@cloudflare/workers-types" />

// Cloudflare Pages Function - Main Entry Point
// Handles static assets and routes everything else to Next.js

interface Env {
  ASSETS: Fetcher;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // Serve static assets first (JS, CSS, images, fonts, etc.)
  if (url.pathname.startsWith("/_next/") || 
      url.pathname.startsWith("/favicon") ||
      url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|json|xml|txt|webmanifest)$/)) {
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse && assetResponse.status !== 404) {
      return assetResponse;
    }
  }
  
  // Import and use the OpenNext worker for everything else
  // @ts-ignore - Worker is generated at build time
  const { default: worker } = await import("../../.open-next/worker.js");
  return worker.fetch(request, env, context);
};
