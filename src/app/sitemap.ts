import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://photiva.app",
      lastModified: new Date("2026-03-26"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://photiva.app/download",
      lastModified: new Date("2026-03-26"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://photiva.app/guides",
      lastModified: new Date("2026-03-26"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://photiva.app/guides/remove-duplicate-photos-mac",
      lastModified: new Date("2026-03-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://photiva.app/guides/find-blurry-photos-mac",
      lastModified: new Date("2026-03-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://photiva.app/guides/organize-apple-photos-library",
      lastModified: new Date("2026-03-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://photiva.app/guides/mac-photo-cleaner",
      lastModified: new Date("2026-03-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://photiva.app/guides/photiva-vs-gemini",
      lastModified: new Date("2026-03-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://photiva.app/privacy",
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://photiva.app/terms",
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
