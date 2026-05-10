# Deployment Checklist

## Pre-Deployment

- [x] Code pushed to Git repository
- [x] Production-grade folder structure
- [x] All unnecessary files removed
- [x] Documentation complete
- [ ] Environment variables configured
- [ ] Build tested locally
- [ ] All pages tested and working

## Vercel Deployment Steps

### 1. Connect Repository

1. Go to https://vercel.com/new
2. Click "Import Project"
3. Select your Git repository: `wanderlust-concierge`
4. Click "Import"

### 2. Configure Project

**Framework Preset:** Other

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `.output/public`
- Install Command: `npm install`
- Development Command: `npm run dev`

**Root Directory:** `./` (leave as default)

### 3. Environment Variables (Optional)

Add if needed:
```
NODE_ENV=production
VITE_WHATSAPP_NUMBER=919121878363
```

### 4. Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build
3. Check deployment logs for any errors

## Post-Deployment

### Verify Deployment

- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Tours page displays all regions
- [ ] Car rentals page works
- [ ] Bus rentals page works
- [ ] International tours page works
- [ ] Blogs page loads
- [ ] About page loads
- [ ] Contact page and form work
- [ ] WhatsApp links work
- [ ] Mobile responsive design works
- [ ] Images load properly
- [ ] Animations work smoothly

### Performance Check

- [ ] Run Lighthouse audit (target: 90+)
- [ ] Check page load speed (target: < 3s)
- [ ] Verify Core Web Vitals
- [ ] Test on mobile devices
- [ ] Test on different browsers

### SEO Check

- [ ] Meta tags present on all pages
- [ ] Open Graph tags configured
- [ ] Sitemap generated (if applicable)
- [ ] Robots.txt configured
- [ ] Canonical URLs set

### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add custom domain
3. Configure DNS records:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

4. Wait for DNS propagation (5-30 minutes)
5. Verify SSL certificate is active

### Monitoring Setup

- [ ] Enable Vercel Analytics
- [ ] Set up error tracking (optional)
- [ ] Configure uptime monitoring
- [ ] Set up deployment notifications

## Troubleshooting

### Build Fails

**Check:**
1. Build logs in Vercel dashboard
2. All dependencies in `package.json`
3. TypeScript errors
4. Environment variables

**Fix:**
```bash
# Test build locally
npm run build

# If successful, redeploy
vercel --prod --force
```

### Pages Not Loading

**Check:**
1. Browser console for errors
2. Network tab for failed requests
3. Vercel function logs
4. Server-side errors

**Fix:**
- Clear browser cache
- Check serverless function configuration
- Verify API routes

### Slow Performance

**Optimize:**
1. Enable Edge Functions
2. Optimize images (WebP format)
3. Enable caching headers
4. Minimize JavaScript bundles

## Production URLs

After deployment, you'll get:
- **Production:** `https://your-project.vercel.app`
- **Preview:** `https://your-project-git-branch.vercel.app`

## Rollback Plan

If deployment fails:

1. Go to Vercel dashboard
2. Click "Deployments"
3. Find last working deployment
4. Click "..." → "Promote to Production"

Or via CLI:
```bash
vercel rollback
```

## Continuous Deployment

Vercel automatically deploys:
- **Production:** Push to `main` branch
- **Preview:** Create pull request
- **Development:** Push to feature branches

## Support

- Vercel Status: https://vercel-status.com
- Vercel Docs: https://vercel.com/docs
- Support: support@vercel.com

## Success Criteria

Deployment is successful when:
- ✅ All pages load without errors
- ✅ Lighthouse score > 90
- ✅ Mobile responsive
- ✅ All links work
- ✅ Forms submit correctly
- ✅ Images load properly
- ✅ SSL certificate active
- ✅ Custom domain configured (if applicable)

---

**Last Updated:** May 10, 2026
**Deployment Status:** Ready for Production
