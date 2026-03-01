# 🚀 Quick Start Guide - TGS Growth Studio

Welcome to TGS Growth Studio! This guide will help you get up and running in minutes.

## Prerequisites

Ensure you have the following installed:
- **Node.js**: 18+ (download from [nodejs.org](https://nodejs.org))
- **npm**: 9+ (comes with Node.js)
- **Git**: For version control

Verify installation:
```bash
node --version  # Should be v18+
npm --version   # Should be 9+
git --version   # Should be 2.x+
```

## 1️⃣ Clone & Setup (2 minutes)

```bash
# Clone the repository
git clone https://github.com/yourusername/tgs-growth-studio.git
cd tgs-growth-studio

# Install dependencies
npm install
```

## 2️⃣ Start Development Server (1 minute)

```bash
npm start
```

**Output**:
```
✔ Compiled successfully.

Application bundle generated successfully.
The development server is running!

👉 Open http://localhost:4200/ in your browser.
```

Visit `http://localhost:4200/` in your browser. You should see the TGS Growth Studio homepage!

## 3️⃣ Explore the Application

- **Home** (`/`) - Hero section with ventures and process
- **Portfolio** (`/portfolio`) - Filterable venture showcase
- **Industries** (`/industries`) - Detailed industry information
- **Process** (`/process`) - 3-phase methodology
- **About** (`/about`) - Company story and team

### Navigation

Use the sticky navbar at the top to navigate between pages. Try:
1. Click the logo to scroll to top
2. Click menu items to navigate
3. Try "Work With Us" button (demo)
4. Open sidebar on mobile (hamburger menu)

## 4️⃣ Make Your First Modification

Try editing a component to see hot reload in action:

1. Open `src/app/features/home/home.component.ts`
2. Find the `industries` array and modify a description
3. Save the file
4. Watch your browser update automatically ✨

## 5️⃣ Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a production-optimized `dist/` folder (usually 150-200KB gzipped).

## 📁 Project Structure Quick Reference

```
src/
├── app/
│   ├── core/           # Navbar, Footer, Services
│   ├── shared/         # Reusable Button, Card components
│   ├── features/       # Pages: Home, Portfolio, Industries, Process, About
│   ├── app.ts          # Main component
│   └── app.routes.ts   # Routes configuration
├── styles/             # SCSS: variables, animations, globals
├── environments/       # Development & production configs
└── main.ts            # Application entry point
```

## 🎨 Quick Styling Tips

All styles use **SCSS with CSS Variables**:

### Change Primary Color
Edit `src/styles/variables.scss`:
```scss
--color-primary: #3b82f6;  // Change this to your color
```

### Add Animation
Add the `.scroll-animate` class to any element:
```html
<div class="scroll-animate">This fades in on scroll!</div>
```

### Add Spacing
Use utility classes:
```html
<div class="mt-lg mb-xl">Spacing applied!</div>
```

## 🔧 Common Commands

```bash
# Development
npm start                      # Start dev server
npm test                       # Run tests

# Production
npm run build                  # Create production build
npm run build -- --source-map # Build with source maps

# Code Quality
npm run lint                   # Lint TypeScript
npm run build -- --stats-json # Analyze bundle
```

## 🚢 Deploy in 30 Seconds

### To Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Done!

### To Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### To Firebase
```bash
npm install -g firebase-tools
firebase login
firebase deploy
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed guides.

## 🐛 Troubleshooting

### Port 4200 Already in Use
```bash
npm start -- --port 4201
```

### Module Not Found Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Loading
```bash
# Clear browser cache (Ctrl+Shift+Delete) and restart dev server
npm start
```

### Git Size Too Large
```bash
# Initialize git and push
git add .
git commit -m "Initial commit"
git push origin main
```

## 📚 Learning Resources

- **Angular**: https://angular.io/docs
- **SCSS**: https://sass-lang.com/documentation
- **TypeScript**: https://www.typescriptlang.org/docs/
- **CSS Variables**: https://developer.mozilla.org/en-US/docs/Web/CSS/--*

## 🎯 Next Steps

1. ✅ Run the app locally
2. ✅ Explore the code structure
3. ✅ Make a small modification
4. ✅ Build for production
5. ✅ Deploy to a platform

## 📝 Environment Variables

Create `.env.local` for local development:

```bash
NG_APP_API_URL=http://localhost:3000/api
NG_APP_ENV=development
```

For production, set in your platform (Vercel/Netlify settings):

```
NG_APP_API_URL=https://api.yourdomain.com
NG_APP_ENV=production
NG_APP_GA_ID=UA-XXXXX-X
```

## 💡 Tips for Development

### Component Generation
Create new components quickly:
```bash
ng g c features/my-feature --skip-tests
```

### Debug in Browser
1. Open DevTools (F12)
2. Go to "Sources" tab
3. Edit TypeScript directly (hot reload works)
4. Set breakpoints and debug

### Check Bundle Size
```bash
npm run build
npm install -g source-map-explorer
source-map-explorer 'dist/**/*.js'
```

### Use Angular DevTools
Install Angular DevTools Chrome Extension:
https://angular.io/devtools

## ❓ Questions?

- Check [README.md](./README.md) for complete documentation
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment guides
- Review [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) for technical overview

## 🎉 You're Ready!

Your development environment is set up. Happy coding! 🚀

---

**Last Updated**: February 27, 2026  
**Angular Version**: 18  
**Quick Start Time**: 5 minutes
