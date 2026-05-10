# Vercel Deployment Troubleshooting

**Last Updated:** 2026-05-10 17:10 UTC

## Current Issue: 404 NOT_FOUND

Your app is built with **TanStack Start**, which is primarily designed for **Cloudflare Workers**, not Vercel. This causes compatibility issues.

## What We've Done

1. **Created `/api/index.js`** - A Vercel serverless function that acts as an adapter
2. **Updated `vercel.json`** - Routes all requests through the serverless function
3. **Modified build script** - Generates proper output structure

## If Still Getting 404

The issue is likely one of these:

### 1. Build Output Structure
Check Vercel build logs for:
- Does `dist/server/index.js` exist after build?
- Does `dist/client` contain static assets?

### 2. Server Handler Export
The Cloudflare build might not export a compatible handler. Check if `dist/server/index.js` exports a `fetch` function.

### 3. Alternative Solution: Deploy to Cloudflare Pages

Since your app is built for Cloudflare Workers, the easiest solution is to deploy to **Cloudflare Pages** instead:

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist/client
```

## Vercel-Specific Fix (If Needed)

If the current setup doesn't work, you may need to:

1. **Remove Cloudflare plugin** from vite config
2. **Add Vercel adapter** for TanStack Start
3. **Rebuild** with Node.js target instead of Cloudflare Workers

### Check Deployment Logs

Go to your Vercel dashboard:
1. Click on your deployment
2. Check "Build Logs" for errors
3. Check "Function Logs" to see runtime errors
4. Look for messages about missing files or import errors

## Quick Test

After deployment completes, check:
- Homepage: `https://your-domain.vercel.app/`
- API function: `https://your-domain.vercel.app/api/index`

If the API function returns an error, check the error message in the response.
