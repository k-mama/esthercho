import type { NextConfig } from "next";
import { execFileSync } from "node:child_process";

// Cloudflare Pages uses `npx next build` (not npm run build), so npm prebuild may be skipped.
// Stage the 57 authentic family meal photographs whenever Next.js loads its build config.
execFileSync(process.execPath, ["scripts/expand-family-meal-photos.mjs"], { stdio: "inherit" });

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
