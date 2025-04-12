import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,



  images: {
    unoptimized: true, // ✅ REQUIRED for static exports
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
export default nextConfig;
