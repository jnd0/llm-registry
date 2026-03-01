# Cloudflare WAF Rate Limiting Setup Guide

## Overview

This guide explains how to configure Cloudflare WAF rate limiting for the LLM Registry API. Rate limiting is handled at the edge by Cloudflare, providing DDoS protection without any application code.

---

## Why Cloudflare WAF?

**Benefits:**
- ✅ Free tier includes 10,000 requests/minute
- ✅ Blocks attacks at edge (before hitting your server)
- ✅ Zero code required
- ✅ No bundle size impact
- ✅ Global enforcement
- ✅ Configurable via dashboard or API

**vs. Application Rate Limiting:**
| Feature | Cloudflare WAF | express-rate-limit |
|---------|---------------|-------------------|
| Location | Edge (global) | Server/Function |
| Free Tier | 10K req/min | Unlimited |
| Bundle Size | 0 bytes | ~50KB |
| Code Required | None | Yes |
| Cold Start Impact | None | Yes |
| DDoS Protection | ✅ Yes | ❌ No |

---

## Configuration via Dashboard

### Step 1: Access WAF Settings

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain (llm-registry.dev)
3. Go to **Security** → **WAF**
4. Click **Rate limiting rules** tab
5. Click **Create rule**

### Step 2: Configure Rate Limit Rule

**Rule Name:** `API Rate Limiting`

**Expression:**
```
(http.request.uri.path contains "/api/v1/")
```

**Characteristics:**
- Check: `ip.src`

**Threshold:**
- Requests: `100`
- Period: `60 seconds`

**Action:**
- Select: `Block`
- Duration: `60 seconds`

**Advanced Options:**
- Response code: `429`
- Response content type: `application/json`
- Response body (optional):
```json
{
  "error": "Rate limit exceeded",
  "message": "Too many requests. Please try again in 1 minute.",
  "retry_after": 60
}
```

### Step 3: Save and Test

1. Click **Deploy** to save the rule
2. Test with curl:
```bash
# Make 100+ requests quickly
for i in {1..105}; do
  curl -s -o /dev/null -w "%{http_code}\n" https://llm-registry.dev/api/v1/models
done

# Should see: 200 (first 100), then 429
```

---

## Configuration via API

For automation, use the Cloudflare API:

```bash
# Set variables
ZONE_ID="your-zone-id"
API_TOKEN="your-api-token"

# Create rate limiting rule
curl -X POST "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/rulesets/phases/http_ratelimit/entrypoint/rules" \
  -H "Authorization: Bearer ${API_TOKEN}" \
  -H "Content-Type: application/json" \
  --data '{
    "action": "block",
    "ratelimit": {
      "characteristics": ["ip.src"],
      "period": 60,
      "requests_per_period": 100,
      "mitigation_timeout": 60
    },
    "expression": "http.request.uri.path contains \"/api/v1/\"",
    "description": "API Rate Limiting - 100 requests per minute"
  }'
```

---

## Free Tier Limits

**Cloudflare Free Plan:**
- 10 rate limiting rules
- 10,000 requests per minute (per rule)
- 10,000 requests per day (total across all rules)

**For LLM Registry:**
- 100 requests/minute is well within free tier
- Typical usage: ~1,000 requests/day
- Cost: **FREE** ✅

---

## Monitoring & Alerts

### View Rate Limited Requests

1. Go to **Analytics** → **WAF**
2. Filter by rule: "API Rate Limiting"
3. See blocked requests by IP, country, etc.

### Set Up Alerts

1. Go to **Security** → **WAF**
2. Click **Notifications** tab
3. Create notification for:
   - Rate limit rule triggered
   - Threshold: 100 blocked requests in 5 minutes
   - Send to: Email, Slack, or webhook

---

## Troubleshooting

### Issue: Legitimate users getting rate limited

**Solution:** Increase limit or add bypass rules

```bash
# Bypass for authenticated users (if you add auth later)
(http.request.uri.path contains "/api/v1/") 
and 
(not http.request.headers["cf-ipcountry"][0] in {"US" "CA" "GB"})
```

### Issue: Bots bypassing rate limit

**Solution:** Add additional characteristics

```bash
# Rate limit by IP + User-Agent
(ip.src, http.request.headers["User-Agent"][0])
```

### Issue: API consumers complaining

**Solution:** Add rate limit headers via Cloudflare Workers (optional)

```javascript
// workers-rate-limit.js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch(request)
  
  // Add headers
  const newHeaders = new Headers(response.headers)
  newHeaders.set('X-RateLimit-Limit', '100')
  newHeaders.set('X-RateLimit-Remaining', '99')
  newHeaders.set('X-RateLimit-Reset', Math.floor(Date.now() / 1000) + 60)
  
  return new Response(response.body, {
    status: response.status,
    headers: newHeaders,
  })
}
```

---

## Best Practices

### 1. Start Conservative
- Begin with 100 req/min
- Monitor for a week
- Adjust based on usage patterns

### 2. Document for API Consumers
- Add rate limit info to API docs
- Provide retry guidance
- Consider rate limit headers

### 3. Monitor Regularly
- Check WAF analytics weekly
- Set up alerts for spikes
- Review blocked IPs monthly

### 4. Plan for Growth
- Free tier: 10K req/min
- Pro plan: 100K req/min ($20/month)
- Business plan: Custom (custom pricing)

---

## Removing Application Rate Limiter

Once Cloudflare WAF is configured, remove the custom rate limiter:

```bash
# Delete rate limiter files
rm src/lib/rate-limit.ts

# Remove from API routes
# Edit: src/app/api/v1/models/[id]/route.ts
# Remove: import { checkRateLimit } from "@/lib/rate-limit"
# Remove: rate limit check logic
```

Update `package.json`:
```json
{
  "dependencies": {
    // Remove if you added it
    // "express-rate-limit": "^7.1.5"
  }
}
```

---

## Summary

✅ **Cloudflare WAF is configured** when you see:
- HTTP 429 responses after 100 requests/minute
- Requests blocked at edge (check WAF analytics)
- No rate limit code in application
- No bundle size impact

📊 **Expected Results:**
- DDoS protection: ✅ Enabled
- Rate limiting: ✅ 100 req/min per IP
- Bundle size: ✅ 0 bytes added
- Performance: ✅ No impact

---

**Questions?** See Cloudflare docs: https://developers.cloudflare.com/waf/rate-limiting-rules/
