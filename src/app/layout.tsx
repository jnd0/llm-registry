import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { TooltipProvider } from "@/components/ui/tooltip";
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
  title: "LLM Registry | The Global Benchmark Index",
  description: "Interactive comparison of top LLMs (DeepSeek, Claude, GPT-4o) across trusted benchmarks.",
};

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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary`}
      >
        <TooltipProvider>
          <NuqsAdapter>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 container px-4 sm:px-8 py-8 md:py-12">{children}</main>
            </div>
          </NuqsAdapter>
        </TooltipProvider>
      </body>
    </html>
  );
}
