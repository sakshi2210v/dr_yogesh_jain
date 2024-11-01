/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true, // Enables gzip compression for smaller file sizes
  reactStrictMode: true, // Helps identify potential issues in the app

  images: {
    deviceSizes: [320, 420, 768, 1024, 1200], // Tailors image sizes for mobile devices
    formats: ["image/avif", "image/webp"], // Uses modern image formats for optimization
  },

  experimental: {
    optimizeCss: true, // Minifies CSS, improving loading speed
    scrollRestoration: true, // Improves the user experience when navigating back to previous pages
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Caches static files effectively
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
