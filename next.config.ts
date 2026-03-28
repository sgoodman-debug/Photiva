import type { NextConfig } from "next";

const GUIDE_SLUGS = [
  "remove-duplicate-photos-mac",
  "find-blurry-photos-mac",
  "organize-apple-photos-library",
  "mac-photo-cleaner",
  "photiva-vs-gemini",
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        // Hashed JS/CSS chunks from Next.js — content-addressed, safe to cache forever.
        // Netlify also enforces this via netlify.toml [[headers]] for CDN-level caching.
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Static assets in /public — long-lived cache (1 year)
        source: "/:path*\\.(jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|webp|avif)$",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return GUIDE_SLUGS.map((slug) => ({
      source: `/${slug}`,
      destination: `/guides/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
