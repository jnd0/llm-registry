// Simple in-memory rate limiter for API endpoints
// Uses a sliding window algorithm

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 100; // 100 requests per minute

export function getRateLimitInfo(ip: string): {
  limit: number;
  remaining: number;
  reset: number;
  retryAfter?: number;
} {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetTime) {
    // New window
    const resetTime = now + WINDOW_MS;
    rateLimitStore.set(ip, {
      count: 1,
      resetTime,
    });

    return {
      limit: MAX_REQUESTS,
      remaining: MAX_REQUESTS - 1,
      reset: Math.ceil(resetTime / 1000),
    };
  }

  // Existing window
  if (entry.count >= MAX_REQUESTS) {
    return {
      limit: MAX_REQUESTS,
      remaining: 0,
      reset: Math.ceil(entry.resetTime / 1000),
      retryAfter: Math.ceil((entry.resetTime - now) / 1000),
    };
  }

  // Increment count
  entry.count++;
  return {
    limit: MAX_REQUESTS,
    remaining: MAX_REQUESTS - entry.count,
    reset: Math.ceil(entry.resetTime / 1000),
  };
}

export function checkRateLimit(ip: string): {
  allowed: boolean;
  headers: Record<string, string>;
} {
  const info = getRateLimitInfo(ip);
  const headers: Record<string, string> = {
    "X-RateLimit-Limit": info.limit.toString(),
    "X-RateLimit-Remaining": info.remaining.toString(),
    "X-RateLimit-Reset": info.reset.toString(),
  };

  if (info.retryAfter) {
    headers["Retry-After"] = info.retryAfter.toString();
  }

  return {
    allowed: info.remaining > 0 || info.remaining === info.limit,
    headers,
  };
}

// Clean up old entries periodically (every 5 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, 5 * 60 * 1000);
