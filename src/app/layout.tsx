import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | The Global Benchmark Index`,
    template: `%s | ${siteName}`,
  },
  description: "Source-of-truth registry for LLM benchmark performance with provenance, category rankings, and comparison workflows.",
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | The Global Benchmark Index`,
    description:
      "Source-of-truth registry for LLM benchmark performance with provenance, category rankings, and comparison workflows.",
    url: siteUrl,
    siteName,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Global LLM Benchmark Index`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | The Global Benchmark Index`,
    description:
      "Source-of-truth registry for LLM benchmark performance with provenance, category rankings, and comparison workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeColorScript = `
  try {
    const stored = localStorage.getItem("theme") || "system";
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored === "dark" || (stored === "system" && prefersDark);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#0a0a12' : '#fafafa');
  } catch {}
`;

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme") || "system";
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored === "dark" || (stored === "system" && prefersDark);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.dataset.theme = stored;
  } catch {
    document.documentElement.classList.add("dark");
    document.documentElement.dataset.theme = "system";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0a0a12" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: themeColorScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary`}
      >
        <TooltipProvider>
          <NuqsAdapter>
            <div className="relative flex min-h-screen flex-col">
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
              >
                Skip to content
              </a>

              <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-55 dark:opacity-0" />

              <Navbar />
              <main id="main-content" className="container relative z-10 flex-1 px-4 py-8 sm:px-8 md:py-12">
                {children}
              </main>
              <Footer />
            </div>
          </NuqsAdapter>
        </TooltipProvider>
      </body>
    </html>
  );
}
