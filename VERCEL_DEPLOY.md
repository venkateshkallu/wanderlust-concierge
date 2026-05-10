# Vercel Deployment Instructions

## Important Note

This project uses `@lovable.dev/vite-tanstack-config` which is optimized for Cloudflare Workers by default. For Vercel deployment, follow these steps:

## Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/new
   - Click "Import Project"
   - Select your Git repository

2. **Configure Build Settings**
   ```
   Framework Preset: Other
   Build Command: npm run build
   Output Directory: .output/public
   Install Command: npm install
   ```

3. **Add Environment Variables** (if needed)
   ```
   NODE_ENV=production
   ```

4. **Click Deploy**

## Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## Troubleshooting

### Build Fails with "Module not found"

The project is configured for Cloudflare Workers. For Vercel:

1. Make sure `vercel.json` is minimal:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".output/public"
}
```

2. Let Vercel auto-detect the framework

### Alternative: Use Cloudflare Pages

Since this project uses Cloudflare-optimized config, you might want to deploy to Cloudflare Pages instead:

1. Go to https://dash.cloudflare.com
2. Pages → Create a project
3. Connect your Git repository
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `.output/public`
5. Deploy

## Current Status

- ✅ Code is production-ready
- ✅ All pages work correctly
- ✅ SSR hydration fixed
- ⚠️  Deployment platform: Choose Vercel OR Cloudflare Pages

## Recommendation

For best compatibility with this setup, consider deploying to **Cloudflare Pages** instead of Vercel, as the project uses `@lovable.dev/vite-tanstack-config` which is optimized for Cloudflare.

Alternatively, if you must use Vercel, the build should work with the simplified `vercel.json` configuration.
