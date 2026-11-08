import type { MetadataRoute } from "next";
import { SITE_URL, guideDates, guideOrder } from "@/lib/seo-guides";

// Real last content-change dates. Bump a date only when that page's content changes.
const HOME_MODIFIED = "2026-11-08";
const DOWNLOAD_MODIFIED = "2026-07-19";
const LEGAL_MODIFIED = "2026-03-01";

const latestGuideChange = guideOrder
  .map((slug) => guideDates[slug].modified)
  .sort()
  .at(-1)!;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(HOME_MODIFIED),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/download`,
      lastModified: new Date(DOWNLOAD_MODIFIED),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/guides`,
      lastModified: new Date(latestGuideChange),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...guideOrder.map((slug) => ({
      url: `${SITE_URL}/guides/${slug}`,
      lastModified: new Date(guideDates[slug].modified),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(LEGAL_MODIFIED),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(LEGAL_MODIFIED),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
