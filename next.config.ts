import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // Enable static export for GitHub Pages
  trailingSlash: true,        // Add trailing slashes to URLs
  basePath: '/BGE',           // Replace with your repo name
  assetPrefix: '/BGE',        // Must match basePath
  images: {
    unoptimized: true,        // Required for static export
    domains: ['github.com', 'avatars.githubusercontent.com'], // Add any external image domains
  },
};

export default nextConfig;
