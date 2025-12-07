# Deployment Guide

This guide will help you deploy your portfolio to Vercel (recommended) or other platforms.

## Prerequisites

Before deploying, make sure to:

1. **Update Domain References** in the following files:
   - `app/layout.tsx` - Line 14: Update `metadataBase` URL
   - `app/sitemap.ts` - Line 4: Update `baseUrl`
   - `app/robots.ts` - Line 4: Update `baseUrl`

2. **Add Your Images**:
   - Profile photo: `public/images/profile.jpg`
   - OG Image for social sharing: `public/images/og-image.png` (1200x630px)

3. **Update Testimonials**:
   - Edit `app/components/Testimonials.tsx` with real testimonials

4. **Verify Resume**:
   - Ensure your resume is at `public/resume/Resume.docx`

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and it's made by the creators of Next.js.

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js configuration
5. Click "Deploy"

### Step 3: Configure Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS settings as instructed by Vercel
5. Update the domain URLs in the files mentioned above

### Step 4: Environment Variables (If Needed)

If you add features that require environment variables:

1. Go to Project Settings → Environment Variables
2. Add your variables (e.g., `NEXT_PUBLIC_GA_ID` for Google Analytics)
3. Redeploy your application

## Deploy to Other Platforms

### Netlify

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Build your project: `bun run build`
3. Deploy: `netlify deploy --prod`

### AWS Amplify

1. Go to AWS Amplify Console
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `bun run build`
   - Publish directory: `.next`
4. Deploy

### Railway

1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub repo
3. Railway will auto-detect Next.js
4. Deploy

### DigitalOcean App Platform

1. Go to DigitalOcean App Platform
2. Create new app from GitHub
3. Configure:
   - Build command: `bun install && bun run build`
   - Run command: `bun start`
4. Deploy

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify resume download works
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify SEO meta tags using browser dev tools
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Test page load speed with Lighthouse
- [ ] Verify Open Graph tags using [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Check Twitter Card using [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Performance Optimization

Your portfolio is already optimized with:

- ✅ Image optimization via Next.js
- ✅ Font optimization (Inter via Google Fonts)
- ✅ Code splitting and lazy loading
- ✅ Static generation for maximum speed
- ✅ Minified CSS and JavaScript

Expected Lighthouse scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Maintenance

### Updating Content

To update your portfolio content:

1. Make changes locally
2. Test with `bun dev`
3. Commit and push to GitHub
4. Vercel will automatically redeploy

### Monitoring

Set up monitoring in Vercel:
- Enable Web Analytics (free)
- Check deployment logs
- Monitor Core Web Vitals

## Troubleshooting

### Build Fails

- Check the build logs in your deployment platform
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility (18+)

### Images Not Loading

- Ensure images are in the `public` folder
- Check file names match imports
- Verify image formats are supported

### Environment Variables Not Working

- Prefix public variables with `NEXT_PUBLIC_`
- Redeploy after adding new variables
- Check variable names match exactly

## Support

If you encounter issues:

1. Check Next.js documentation: https://nextjs.org/docs
2. Check Vercel documentation: https://vercel.com/docs
3. Search GitHub issues: https://github.com/vercel/next.js/issues

---

Need help? Contact: benjiepersonal1095@gmail.com

