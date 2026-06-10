import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the file-tracing root to this project (a stray parent lockfile exists).
  outputFileTracingRoot: here,
};

export default nextConfig;
