import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Pin Turbopack/workspace root so it doesn't infer a parent dir when
  // an unrelated package-lock.json sits above the project (Vercel is fine,
  // but `next dev` on a dev workstation can pick up ~/package-lock.json
  // and Tailwind ends up scanning the whole home directory).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
