# Favicon Setup Guide

## Required Files

Add these image files to the `public/` folder:

1. **favicon.ico** (32x32 or 16x16)
2. **icon.png** (192x192 or 512x512)  
3. **apple-icon.png** (180x180)

## Quick Methods

### Option 1: Online Generator (Easiest)
1. Go to https://favicon.io/favicon-converter/
2. Upload your profile photo (`public/images/profile.jpg`)
3. Download the generated ZIP file
4. Extract and copy these files to `public/`:
   - `favicon.ico`
   - `android-chrome-192x192.png` → rename to `icon.png`
   - `apple-touch-icon.png` → rename to `apple-icon.png`

### Option 2: Using Your Profile Photo
Use an image editor or command line:

```bash
# If you have ImageMagick installed:
cd public
convert images/profile.jpg -resize 32x32 favicon.ico
convert images/profile.jpg -resize 192x192 icon.png
convert images/profile.jpg -resize 180x180 apple-icon.png
```

### Option 3: Create Custom Icon
1. Go to https://www.canva.com
2. Create 512x512px design
3. Add your initials "BN" or logo
4. Download as PNG
5. Use Option 1 to convert to all sizes

## After Adding Files

1. Check files exist in `public/`:
   ```
   public/
   ├── favicon.ico
   ├── icon.png
   ├── apple-icon.png
   └── manifest.json (already created)
   ```

2. Test locally:
   ```bash
   bun dev
   ```
   
3. Check browser tab for favicon

4. Deploy:
   ```bash
   git add public/
   git commit -m "Add favicon files"
   git push
   ```

## Verify

- Check browser tab shows your icon
- Test on mobile devices (home screen icon)
- Validate with https://realfavicongenerator.net/favicon_checker

---

**Note**: The favicon configuration is already set up in `app/layout.tsx`. You just need to add the actual image files!

