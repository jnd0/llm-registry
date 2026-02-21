import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LLM Registry",
    short_name: "LLM Registry",
    description: "Source-of-truth registry for LLM benchmark performance and provenance.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f14",
    theme_color: "#22d3ee",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
