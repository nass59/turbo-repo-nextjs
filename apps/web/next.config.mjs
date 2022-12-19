// @see https://beta.nextjs.org/docs/rendering/edge-and-nodejs-runtimes#global-runtime-option
// @see https://beta.nextjs.org/docs/api-reference/next.config.js

import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages: ["ui"],
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "turborepo-nextjs.vercel.app",
      },
    ],
  },
};

export default withContentlayer(nextConfig);