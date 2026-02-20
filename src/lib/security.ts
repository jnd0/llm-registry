export function toSafeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function safeExternalHref(rawUrl?: string | null): string | null {
  if (!rawUrl) return null;

  try {
    const parsed = new URL(rawUrl);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}

const CSV_FORMULA_PREFIX = /^[=+\-@\t\r]/;

export function neutralizeCsvFormula(value: string): string {
  if (CSV_FORMULA_PREFIX.test(value)) {
    return `'${value}`;
  }
  return value;
}
