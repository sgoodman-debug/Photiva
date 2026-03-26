const HOST = "photiva.app";
const API = "https://api.indexnow.org/indexnow";

/**
 * Submits one or more URLs to IndexNow, notifying Bing, Yandex, and other
 * participating search engines simultaneously.
 *
 * Requires INDEXNOW_KEY to be set in the environment.
 */
export async function pingIndexNow(urls: string[]): Promise<void> {
  const key = process.env.INDEXNOW_KEY;
  if (!key) throw new Error("INDEXNOW_KEY environment variable is not set");
  if (urls.length === 0) return;

  const response = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key,
      keyLocation: `https://${HOST}/${key}.txt`,
      urlList: urls,
    }),
  });

  if (!response.ok) {
    throw new Error(`IndexNow API returned ${response.status}: ${await response.text()}`);
  }
}

/** All canonical URLs on the site — kept in sync with sitemap.ts */
export const SITE_URLS = [
  "https://photiva.app",
  "https://photiva.app/download",
  "https://photiva.app/guides",
  "https://photiva.app/guides/remove-duplicate-photos-mac",
  "https://photiva.app/guides/find-blurry-photos-mac",
  "https://photiva.app/guides/organize-apple-photos-library",
  "https://photiva.app/guides/mac-photo-cleaner",
  "https://photiva.app/guides/photiva-vs-gemini",
];
