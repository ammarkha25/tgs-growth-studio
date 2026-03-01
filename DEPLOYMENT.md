# TGS Growth Studio - Production Deployment Guide

## Overview

This Angular 18 application is fully optimized and ready for production deployment on multiple platforms. Follow the guidelines below for your chosen deployment platform.

---

## 🚀 Build for Production

First, create an optimized production build:

```bash
npm run build
```

This will:
- Minify and uglify all code
- Enable AOT (Ahead-of-Time) compilation
- Optimize bundle sizes
- Hash filenames for cache busting
- Generate source maps (configurable)

The production build output will be in the `dist/tgs-growth-studio` folder.

---

## 📦 Deployment Platforms

### 1. **Vercel (Recommended for Next-Gen Hosting)**

Vercel provides excellent Angular support with automatic optimizations.

#### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

#### Step 3: Deploy

```bash
vercel
```

**Configuration (vercel.json):**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/tgs-growth-studio",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, s-maxage=3600"
        }
      ]
    }
  ]
}
```

**Save as `vercel.json` in project root.**

---

### 2. **Netlify**

Netlify offers seamless continuous deployment from Git.

#### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Step 2: Connect to Netlify

```bash
netlify login
```

#### Step 3: Deploy

```bash
netlify deploy
```

For continuous deployment:

```bash
netlify deploy --prod
```

**Configuration (netlify.toml):**

```toml
[build]
  command = "npm run build"
  publish = "dist/tgs-growth-studio"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=3600"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

**Save as `netlify.toml` in project root.**

---

### 3. **Firebase Hosting**

Firebase provides a reliable hosting solution with content delivery network.

#### Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

#### Step 2: Login to Firebase

```bash
firebase login
```

#### Step 3: Initialize Firebase

```bash
firebase init hosting
```

When prompted:
- Use `dist/tgs-growth-studio` as your public directory
- Configure as single-page app (SPA) – **YES**

#### Step 4: Deploy

```bash
npm run build
firebase deploy
```

**Configuration (firebase.json):**

```json
{
  "hosting": {
    "public": "dist/tgs-growth-studio",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=3600"
          }
        ]
      },
      {
        "source": "/assets/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      }
    ]
  }
}
```

---

### 4. **AWS S3 + CloudFront**

#### Step 1: Build the project

```bash
npm run build
```

#### Step 2: Upload to S3

```bash
aws s3 sync dist/tgs-growth-studio s3://your-bucket-name --delete
```

#### Step 3: Invalidate CloudFront Cache

```bash
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

### 5. **GitHub Pages**

#### Step 1: Update `angular.json`

Set the base href to your repository name:

```json
"baseHref": "/tgs-growth-studio/"
```

#### Step 2: Build with base href

```bash
ng build --base-href="/tgs-growth-studio/"
```

#### Step 3: Deploy to GitHub Pages

```bash
npx angular-cli-ghpages --dir=dist/tgs-growth-studio
```

Or manually:

```bash
git add dist
git commit -m "Deploy to GitHub Pages"
git push origin
```

---

## 🔒 Security Best Practices

### Content Security Policy (CSP)

Add to your server configuration:

```
Content-Security-Policy: 
  default-src 'self'; 
  script-src 'self' 'unsafe-inline' 'unsafe-eval'; 
  style-src 'self' 'unsafe-inline'; 
  img-src 'self' data: https:; 
  font-src 'self' data:
```

### HTTPS Enforcement

Ensure all deployments use HTTPS. Modern hosting platforms (Vercel, Netlify, Firebase) provide free SSL certificates.

### CORS Headers

Configure CORS if you have a separate backend API:

```
Access-Control-Allow-Origin: https://yourdomain.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

---

## 📊 Performance Optimization

### Image Optimization

The application uses Unsplash for images. For better performance:

1. **Use responsive images**:
```html
<img 
  srcset="image-small.webp 480w, 
          image-large.webp 1024w" 
  sizes="(max-width: 480px) 100vw, 
         (max-width: 1024px) 50vw, 
         100vw"
  src="image.webp" 
  alt="...">
```

2. **Use WebP format** for better compression

3. **Lazy load images**:
```html
<img 
  src="..." 
  alt="..." 
  loading="lazy">
```

### Bundle Size Analysis

```bash
npm run build
npm install -g source-map-explorer
source-map-explorer 'dist/**/*.js'
```

### Cache Busting

The production build automatically adds hashes to filenames. Configure cache headers:

```
Static Assets (CSS, JS): Cache-Control: public, max-age=31536000, immutable
Index HTML: Cache-Control: public, max-age=3600, must-revalidate
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./dist/tgs-growth-studio
```

---

## 🧪 Pre-Deployment Checklist

- [ ] Run full test suite: `npm test`
- [ ] Build production bundle: `npm run build`
- [ ] Test production build locally: `npm run build && npm start`
- [ ] Verify all routes work
- [ ] Test responsive design on mobile
- [ ] Check performance with Lighthouse
- [ ] Enable GZIP compression on server
- [ ] Set up proper error logging (e.g., Sentry)
- [ ] Configure analytics (e.g., Google Analytics)
- [ ] Set up monitoring and alerting
- [ ] Create database backups if applicable
- [ ] Document environment variables
- [ ] Set up SSL/HTTPS
- [ ] Configure CDN if needed

---

## 📝 Environment Variables

Create `.env.production`:

```
NG_APP_API_URL=https://api.tgs-growth-studio.com
NG_APP_GA_ID=UA-XXXXX-X
NG_APP_ENV=production
```

Access in your app:

```typescript
import { environment } from '@env/environment';

console.log(environment.apiUrl);
```

---

## 🐛 Troubleshooting

### White blank page after deploy

1. Check browser console for errors
2. Verify `baseHref` is correct
3. Check that rewrite rules are configured
4. Clear browser cache

### 404 errors on refresh

Ensure your hosting platform rewrites all routes to `index.html` (SPA configuration).

### Styles not loading

1. Verify SCSS compilation
2. Check CSS file hashing in bundle
3. Ensure style paths are correct

### Performance issues

1. Check bundle size: `npm run build -- --stats-json`
2. Enable Gzip compression
3. Use CDN for static assets
4. Enable image lazy loading
5. Minify and compress assets

---

## 📞 Support & Resources

- [Angular Documentation](https://angular.io/docs)
- [Vercel Angular Guide](https://vercel.com/guides/deploying-angular-with-vercel)
- [Netlify Angular Guide](https://docs.netlify.com/frameworks/angular/)
- [Firebase Hosting Guide](https://firebase.google.com/docs/hosting)
- [Web Performance Guide](https://web.dev/performance/)

---

## 📅 Maintenance

- Monitor uptime and performance metrics
- Keep dependencies updated: `npm audit` and `npm update`
- Review and optimize database queries
- Analyze user analytics
- Plan for scaling as usage grows
- Maintain security patches and updates

---

**Last Updated**: February 27, 2026
**Angular Version**: 18
**Deployment Ready**: ✅ Yes
