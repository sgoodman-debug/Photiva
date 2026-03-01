import type { NextConfig } from "next";

const GUIDE_SLUGS = [
  "remove-duplicate-photos-mac",
  "find-blurry-photos-mac",
  "organize-apple-photos-library",
  "mac-photo-cleaner",
  "photiva-vs-gemini",
];

const nextConfig: NextConfig = {
  async redirects() {
    return GUIDE_SLUGS.map((slug) => ({
      source: `/${slug}`,
      destination: `/guides/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
