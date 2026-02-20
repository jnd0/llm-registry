const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://llm-registry.com";

export const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const siteName = "LLM Registry";
