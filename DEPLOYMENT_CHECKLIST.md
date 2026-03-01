# ✅ Pre-Deployment Checklist - TGS Growth Studio

Use this checklist before deploying to production.

## Code Quality & Testing

- [ ] All TypeScript errors resolved (`npm run build` shows no errors)
- [ ] All unit tests passing (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] No console errors in dev tools
- [ ] No console warnings (or documented)
- [ ] Code reviewed by team member
- [ ] Branch merged to main/master
- [ ] Latest dependencies (`npm update`)
- [ ] No security vulnerabilities (`npm audit`)

## Build & Performance

- [ ] Production build created (`npm run build`)
- [ ] Build output size acceptable (< 500KB gzipped)
- [ ] Source maps generated for debugging
- [ ] Tree-shaking enabled and working
- [ ] Code splitting verified per route
- [ ] Bundle analysis completed (`source-map-explorer`)
- [ ] Lazy loading routes configured
- [ ] Images optimized (< 100KB each)

## Responsive & Accessibility

- [ ] Tested on mobile (iPhone, Android)
- [ ] Tested on tablet
- [ ] Tested on desktop
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Color contrast adequate (WCAG AA)
- [ ] Screen reader tested
- [ ] ARIA labels present
- [ ] Alt text on all images
- [ ] Form labels accessible

## Browser Compatibility

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers
- [ ] Graceful degradation for older browsers

## Functionality Testing

- [ ] All routes working
- [ ] Navigation working (links not broken)
- [ ] Forms submitting
- [ ] API calls working (if applicable)
- [ ] Error states handled
- [ ] Loading states visible
- [ ] Empty states designed
- [ ] 404 page working
- [ ] Redirects working

## SEO Optimization

- [ ] Page titles set per route
- [ ] Meta descriptions present
- [ ] Semantic HTML used
- [ ] Heading hierarchy correct (H1, H2, H3)
- [ ] Images have alt text
- [ ] Open Graph tags ready
- [ ] robots.txt configured
- [ ] Sitemap ready
- [ ] Schema markup considered
- [ ] No duplicate content

## Performance (Lighthouse)

Run Lighthouse audit in Chrome DevTools:

```
npm run build
npx http-server dist/tgs-growth-studio
# Open in Chrome, run Lighthouse
```

- [ ] Performance: > 90
- [ ] Accessibility: > 90
- [ ] Best Practices: > 90
- [ ] SEO: > 90
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] First Input Delay (FID): < 100ms
- [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] Time to Interactive: < 3.5s

## Security

- [ ] Environment variables not committed (.env.local in .gitignore)
- [ ] No secrets in code
- [ ] HTTPS enabled on production
- [ ] CSP headers configured
- [ ] CORS properly configured
- [ ] Input sanitization applied
- [ ] CSRF protection in place
- [ ] Rate limiting considered
- [ ] DDoS protection considered
- [ ] Dependency vulnerabilities resolved

## Analytics & Monitoring

- [ ] Google Analytics set up
- [ ] Error tracking configured (Sentry, etc.)
- [ ] Performance monitoring enabled
- [ ] User tracking consent checkbox ready
- [ ] Privacy policy link present
- [ ] Terms of service link present
- [ ] Cookie policy configured

## Configuration

- [ ] Environment variables configured
- [ ] API endpoints correct for production
- [ ] Database connections tested
- [ ] Email service configured
- [ ] CDN configured (if using)
- [ ] Cache headers set
- [ ] GZIP compression enabled
- [ ] Minification enabled

## Deployment Platform

### For Vercel
- [ ] vercel.json configured correctly
- [ ] Environment variables set in Vercel dashboard
- [ ] Custom domain configured
- [ ] SSL certificate auto-enabled
- [ ] Automatic deployments from Git set up
- [ ] Preview deployments tested

### For Netlify
- [ ] netlify.toml configured correctly
- [ ] Environment variables set in Netlify UI
- [ ] Custom domain configured
- [ ] SSL certificate auto-enabled
- [ ] Git integration working
- [ ] Build logs reviewed
- [ ] Functions configured (if needed)

### For Firebase
- [ ] firebase.json configured correctly
- [ ] Project selected correctly
- [ ] Environment variables set
- [ ] Custom domain configured
- [ ] SSL certificate enabled
- [ ] Firestore/Database rules set
- [ ] Firebase Hosting rules reviewed

### For AWS

- [ ] S3 bucket created & configured
- [ ] CloudFront distribution created
- [ ] Origin Access Identity set
- [ ] Cache headers configured
- [ ] Lambda functions deployed (if needed)
- [ ] Route 53 domains configured
- [ ] SSL certificate created
- [ ] WAF rules configured (optional)
- [ ] CloudWatch alarms set

## Documentation

- [ ] README.md updated with production info
- [ ] DEPLOYMENT.md reviewed
- [ ] API documentation if applicable
- [ ] Environment variables documented
- [ ] Deployment steps documented
- [ ] Rollback plan documented
- [ ] Known issues documented
- [ ] Contact information added

## Data & Backups

- [ ] Database backed up
- [ ] Current environment documented
- [ ] Disaster recovery plan in place
- [ ] Rollback procedure tested
- [ ] Data retention policy confirmed
- [ ] GDPR compliance (if needed)

## Final Checks

- [ ] Entire team notified of deployment
- [ ] Deployment window scheduled
- [ ] Off-peak time selected
- [ ] Monitoring dashboard ready
- [ ] Support team briefed
- [ ] Rollback plan ready
- [ ] Database migrations tested (if needed)
- [ ] Static assets versioned/hashed
- [ ] Service workers updated (if applicable)
- [ ] Push notifications tested (if applicable)

## Post-Deployment

- [ ] Verify live site loads
- [ ] Check all pages accessible
- [ ] Verify API calls working
- [ ] Check database connectivity
- [ ] Monitor error logs
- [ ] Monitor performance metrics
- [ ] Check Lighthouse scores
- [ ] Verify redirects working
- [ ] Test from different network (mobile hotspot)
- [ ] Check social media cards (Open Graph)
- [ ] Announce deployment to team
- [ ] Update status page
- [ ] Monitor user reports for 24 hours

## Rollback Plan

If deployment fails:

1. [ ] Revert to previous version
2. [ ] Run database migrations rollback (if applicable)
3. [ ] Verify previous version working
4. [ ] Notify team and users
5. [ ] Begin investigation
6. [ ] Schedule new deployment when ready

---

## Deployment Commands Cheat Sheet

```bash
# Build
npm run build

# Analyze bundle
npm install -g source-map-explorer
source-map-explorer 'dist/**/*.js'

# Deploy to Vercel
npx vercel --prod

# Deploy to Netlify
npx netlify-cli deploy --prod

# Deploy to Firebase
firebase deploy

# Deploy to AWS S3
aws s3 sync dist/tgs-growth-studio s3://bucket-name --delete
aws cloudfront create-invalidation --distribution-id ID --paths "/*"

# Preview locally
npx http-server dist/tgs-growth-studio
# Open http://localhost:8080
```

## Quick Issues & Fixes

| Issue | Solution |
|-------|----------|
| Blank page | Check console, verify routing, check base href |
| 404 errors | Configure SPA rewrites (all routes → index.html) |
| Styles missing | Check CSS file hashing, verify SCSS compilation |
| Images not loading | Verify image paths, check CORS headers |
| API not working | Check environment variables, verify CORS, test endpoint |
| Performance slow | Analyze bundle, enable compression, check network |
| Mobile issues | Test responsive, clear browser cache, check viewport |

---

## Success Criteria

Deployment is successful when:

✅ Site loads without errors
✅ All pages accessible and functional
✅ Mobile responsive and working
✅ Performance metrics good (Lighthouse > 90)
✅ No console errors/warnings
✅ Analytics tracking working
✅ Error monitoring working
✅ Team notified

---

**Last Updated**: February 27, 2026
**Project**: TGS Growth Studio
**Status**: Ready for Deployment ✅
