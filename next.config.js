/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Optimize production build
  poweredByHeader: false,
  compress: true,
  // Generate static sitemap and robots.txt
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
}

module.exports = nextConfig

