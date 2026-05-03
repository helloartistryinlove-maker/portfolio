import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    qualities: [75, 78, 80, 82, 84, 86, 88, 90],
  },
};

export default nextConfig;