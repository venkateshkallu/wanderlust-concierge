# Vercel Deployment Guide

## Prerequisites
- Vercel account (sign up at https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Fastest)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **voyago-india** (or your preferred name)
- Directory? **./
- Override settings? **N**

4. **Deploy to Production**
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard (Recommended)

1. **Push code to Git**
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

2. **Import to Vercel**
- Go to https://vercel.com/new
- Click "Import Project"
- Select your Git repository
- Configure project:
  - **Framework Preset:** Other
  - **Build Command:** `npm run build`
  - **Output Directory:** `.output/public`
  - **Install Command:** `npm install`

3. **Environment Variables** (if needed)
- Add any environment variables in Vercel dashboard
- Example: `NODE_ENV=production`

4. **Deploy**
- Click "Deploy"
- Wait for build to complete (2-3 minutes)

## Post-Deployment

### Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

### Environment Variables
If you need to add environment variables:
1. Go to Project Settings → Environment Variables
2. Add variables for Production, Preview, and Development

### Monitoring
- Check deployment logs in Vercel dashboard
- Monitor performance in Analytics tab
- Set up error tracking if needed

## Build Configuration

The project is configured with:
- ✅ Node.js 20.x runtime
- ✅ Automatic cache optimization
- ✅ Edge network distribution
- ✅ Serverless functions for SSR
- ✅ Static asset optimization

## Troubleshooting

### Build Fails
```bash
# Clear Vercel cache and redeploy
vercel --force
```

### Pages Not Loading
- Check build logs for errors
- Verify all dependencies are in `dependencies` (not `devDependencies`)
- Check serverless function logs

### Slow Performance
- Enable Edge Functions in Vercel settings
- Optimize images (use WebP format)
- Enable Vercel Analytics

## Vercel Configuration Files

- `vercel.json` - Deployment configuration
- `.vercelignore` - Files to exclude from deployment
- `api/index.js` - Serverless function entry point

## Production Checklist

Before deploying to production:
- [ ] Test all pages locally
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test contact forms
- [ ] Check WhatsApp integration
- [ ] Verify SEO meta tags
- [ ] Test performance (Lighthouse)
- [ ] Set up custom domain
- [ ] Configure SSL certificate (automatic on Vercel)
- [ ] Set up monitoring/analytics

## Continuous Deployment

Vercel automatically deploys:
- **Production:** When you push to `main` branch
- **Preview:** When you create a pull request
- **Development:** When you push to other branches

## Support

- Vercel Docs: https://vercel.com/docs
- TanStack Start Docs: https://tanstack.com/start
- Project Issues: Create an issue in your repository

## Performance Tips

1. **Enable Edge Functions**
   - Go to Project Settings → Functions
   - Enable Edge Runtime

2. **Optimize Images**
   - Use Vercel Image Optimization
   - Convert to WebP format

3. **Enable Caching**
   - Already configured in `vercel.json`
   - Static assets cached for 1 year

4. **Monitor Performance**
   - Use Vercel Analytics
   - Check Core Web Vitals
   - Monitor serverless function execution time

## Cost Estimation

Vercel Free Tier includes:
- 100 GB bandwidth
- 100 GB-hours serverless function execution
- Unlimited deployments
- Automatic HTTPS
- Global CDN

For production apps, consider Pro plan for:
- More bandwidth
- Longer function execution
- Team collaboration
- Advanced analytics
