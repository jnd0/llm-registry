export interface ProviderTheme {
  border: string;
  bg: string;
  text: string;
}

const PROVIDER_THEMES: Array<{
  match: RegExp;
  theme: ProviderTheme;
}> = [
  {
    match: /anthropic/i,
    theme: {
      border: "border-amber-500/35 dark:border-amber-300/35",
      bg: "bg-amber-500/10 dark:bg-amber-300/10",
      text: "text-amber-700 dark:text-amber-200",
    },
  },
  {
    match: /openai/i,
    theme: {
      border: "border-cyan-500/35 dark:border-cyan-300/35",
      bg: "bg-cyan-500/12 dark:bg-cyan-300/12",
      text: "text-cyan-700 dark:text-cyan-200",
    },
  },
  {
    match: /deepseek/i,
    theme: {
      border: "border-violet-500/35 dark:border-violet-300/35",
      bg: "bg-violet-500/10 dark:bg-violet-300/10",
      text: "text-violet-700 dark:text-violet-200",
    },
  },
  {
    match: /meta|llama/i,
    theme: {
      border: "border-sky-500/35 dark:border-sky-300/35",
      bg: "bg-sky-500/10 dark:bg-sky-300/10",
      text: "text-sky-700 dark:text-sky-200",
    },
  },
  {
    match: /mistral/i,
    theme: {
      border: "border-orange-500/35 dark:border-orange-300/35",
      bg: "bg-orange-500/10 dark:bg-orange-300/10",
      text: "text-orange-700 dark:text-orange-200",
    },
  },
  {
    match: /google|gemini/i,
    theme: {
      border: "border-sky-500/35 dark:border-sky-300/35",
      bg: "bg-sky-500/10 dark:bg-sky-300/10",
      text: "text-sky-700 dark:text-sky-200",
    },
  },
];

const DEFAULT_THEME: ProviderTheme = {
  border: "border-emerald-500/30 dark:border-emerald-300/30",
  bg: "bg-emerald-500/10 dark:bg-emerald-300/10",
  text: "text-emerald-700 dark:text-emerald-200",
};

export function getProviderTheme(provider: string): ProviderTheme {
  const match = PROVIDER_THEMES.find((entry) => entry.match.test(provider));
  return match?.theme ?? DEFAULT_THEME;
}
