import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    host: "https://photiva.app",
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://photiva.app/sitemap.xml",
  };
}
