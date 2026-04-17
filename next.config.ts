import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.bjs-softsolution.com",
        port: "",
        pathname: "/**",
      },
    ],
    qualities: [75, 85],
  },
};

export default nextConfig;
