import type { NextConfig } from "next";

/**
 * Next.js configuration with performance optimizations
 */
const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize images
  images: {
    // Enable modern image formats
    formats: ["image/avif", "image/webp"],
    // Define allowed remote image domains if needed
    remotePatterns: [],
  },

  // Enable experimental features for better performance
  experimental: {
    // Optimize package imports for faster builds
    optimizePackageImports: ["lucide-react"],
  },

  // Compress responses
  compress: true,

  // Generate ETags for caching
  generateEtags: true,

  // PoweredBy header removal for security
  poweredByHeader: false,
};

export default nextConfig;
