import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/fundacionbelong',
  assetPrefix: '/fundacionbelong',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
