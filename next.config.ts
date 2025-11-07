import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/**", // allow all paths
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
