/* eslint-disable */
import type { NextConfig } from "next";

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = withPWA({
  basePath: '/test-pwa',
  assetPrefix: '/test-pwa',
  output: 'export',
  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: true,
  },
});

export default nextConfig;
