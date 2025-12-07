# Benjie Nonato - Professional Portfolio

A modern, SEO-optimized portfolio website built with Next.js 15, showcasing my experience as a Full Stack Developer and Team Leader.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **SEO Optimized**: Comprehensive metadata, Open Graph tags, JSON-LD structured data, sitemap, and robots.txt
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Performance Optimized**: Image optimization, font optimization, and code splitting
- **Smooth Animations**: Subtle animations using Framer Motion for enhanced user experience
- **Accessible**: ARIA labels, semantic HTML, and keyboard navigation support

## 📋 Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About & Skills**: Professional summary with categorized technical proficiencies
- **Experience**: Timeline of professional work history with detailed responsibilities
- **Testimonials**: Client and colleague recommendations
- **Resume Download**: Direct download of professional resume
- **Contact**: Easy ways to get in touch

## 🛠️ Technologies Used

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Image Optimization**: Sharp
- **Fonts**: Google Fonts (Inter)

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd new-personal-portfolio
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
bun run build
bun start
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Configure environment variables if needed
5. Update the domain in:
   - `app/layout.tsx` (metadataBase)
   - `app/sitemap.ts` (baseUrl)
   - `app/robots.ts` (baseUrl)

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Customization

### Update Personal Information

1. **Resume**: Replace `/public/resume/Resume.docx` with your own resume
2. **Profile Image**: Add your profile photo to `/public/images/profile.jpg`
3. **OG Image**: Add a custom Open Graph image to `/public/images/og-image.png` (1200x630px)
4. **Testimonials**: Update the testimonials array in `app/components/Testimonials.tsx`
5. **Experience**: Modify the experiences array in `app/components/Experience.tsx`
6. **Skills**: Update skill categories in `app/components/About.tsx`

### Update Domain

Update the following files with your actual domain:
- `app/layout.tsx` - Line 14: `metadataBase`
- `app/sitemap.ts` - Line 4: `baseUrl`
- `app/robots.ts` - Line 4: `baseUrl`

### Theme Colors

Customize the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Update these values
  }
}
```

## 📊 SEO Checklist

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Person schema)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML5 structure
- ✅ Optimized images with alt text
- ✅ Mobile responsive
- ✅ Fast loading times
- ✅ Accessibility features

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Contact

**Benjie Louise T. Nonato**
- Email: benjiepersonal1095@gmail.com
- Phone: +63-956-612-2219
- LinkedIn: [linkedin.com/in/natzkie2](https://www.linkedin.com/in/natzkie2)
- Location: Davao City, Philippines

---

Built with ❤️ using Next.js 15

