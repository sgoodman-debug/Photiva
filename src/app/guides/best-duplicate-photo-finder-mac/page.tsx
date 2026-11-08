import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SITE_URL } from "@/lib/seo-guides";

const SLUG = "best-duplicate-photo-finder-mac";
const PAGE_URL = `${SITE_URL}/guides/${SLUG}`;
const PUBLISHED = "2026-11-08";
const MODIFIED = "2026-11-08";
const PRICES_CHECKED = "November 2026";

const TITLE = "Best Duplicate Photo Finder for Mac (2026): 5 Options Compared";
const DESCRIPTION =
  "An honest comparison of Apple Photos' Duplicates album, Photiva, PhotoSweeper, Gemini 2 and CleanMyMac for finding duplicate and similar photos on a Mac, with prices and who each one suits.";
const H1 = "Best Duplicate Photo Finder for Mac in 2026: An Honest Comparison";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/guides/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Photiva",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Duplicate photo finders for Mac compared" }],
    type: "article",
    locale: "en_US",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

type Tool = {
  name: string;
  bestFor: string;
  price: string;
  exact: string;
  similar: string;
  blur: string;
  organise: string;
  sources: string;
  macos: string;
};

const tools: Tool[] = [
  {
    name: "Apple Photos (Duplicates album)",
    bestFor: "A free first pass on a Photos library",
    price: "Free, built in",
    exact: "Yes",
    similar: "Some (results vary)",
    blur: "No",
    organise: "Albums only",
    sources: "Photos library only",
    macos: "macOS 13 Ventura or later",
  },
  {
    name: "Photiva",
    bestFor: "Duplicates, blurry shots and organising in one app",
    price: "Free scan, US$29.99 one-time",
    exact: "Yes",
    similar: "Yes",
    blur: "Yes (sharpness score)",
    organise: "Yes (events, dates, folders)",
    sources: "Photos library and any folder",
    macos: "macOS 14 Sonoma or later",
  },
  {
    name: "PhotoSweeper",
    bestFor: "Lightroom Classic and Capture One users",
    price: "One-time (Mac App Store, varies by region)",
    exact: "Yes",
    similar: "Yes",
    blur: "Quality score to pick the best shot",
    organise: "No",
    sources: "Photos, Lightroom Classic, Capture One, folders",
    macos: "macOS 10.15 or later",
  },
  {
    name: "Gemini 2 (MacPaw)",
    bestFor: "Duplicates across all file types, not just photos",
    price: "Subscription, about US$23 a year",
    exact: "Yes",
    similar: "Yes",
    blur: "Not a listed feature",
    organise: "No",
    sources: "Photos, Music, any folder",
    macos: "Check MacPaw for current support",
  },
  {
    name: "CleanMyMac (MacPaw)",
    bestFor: "General Mac cleanup where photos are one part",
    price: "Subscription, about US$40 a year",
    exact: "Yes",
    similar: "Yes (in My Clutter)",
    blur: "Not a listed feature",
    organise: "No",
    sources: "Whole Mac",
    macos: "Check MacPaw for current support",
  },
];

const verdicts = [
  {
    heading: "If you want to spend nothing: start with Apple Photos",
    body: "Open Photos, go to Utilities in the sidebar and choose Duplicates. Apple's album catches exact copies and some near-copies, and merging keeps one photo while combining the details. It is free and already on your Mac, so try it first. Its limits: it only looks inside your Photos library, it can take days or weeks to fill on a big library because it scans in the background, and it does not look for blurry photos.",
  },
  {
    heading: "If you use Lightroom Classic or Capture One: PhotoSweeper",
    body: "PhotoSweeper connects directly to Lightroom Classic and Capture One catalogs as well as Photos and folders, and marks rejects inside Lightroom instead of deleting them. For a professional working from catalogs, that integration matters more than anything else on this list.",
  },
  {
    heading: "If your duplicates are music, documents and downloads too: Gemini 2",
    body: "Gemini 2 finds duplicate and similar files across your whole Mac, not just photos, with a polished review screen. It is a subscription, so it suits people who want ongoing whole-Mac duplicate cleanup rather than a one-off photo tidy.",
  },
  {
    heading: "If you want a general Mac clean-up tool: CleanMyMac",
    body: "CleanMyMac covers caches, apps, malware checks and large files, and its My Clutter tool also finds duplicate and similar images. Choose it if photos are only one part of the cleanup you want, and you are happy with a yearly subscription.",
  },
  {
    heading: "If your photo library is the problem: Photiva",
    body: "Photiva is built only for photo libraries. Alongside exact and similar duplicates it scores sharpness to find blurry shots, separates screenshots and large videos, and can organise the library by events and dates, all on your Mac with no uploads. You can scan your whole library free and see what it finds before paying a one-time US$29.99. Deleted files go to the Trash and organisation changes can be rolled back for 30 days. It does not connect to Lightroom or Capture One catalogs, so catalog-based photographers are better served by PhotoSweeper.",
  },
];

const faqs = [
  {
    question: "Does a Mac have a built-in duplicate photo finder?",
    answer:
      "Yes. Since macOS 13 Ventura, the Photos app has a Duplicates album under Utilities in the sidebar. It finds exact copies and some near-copies inside your Photos library and lets you merge them. It does not scan folders outside Photos and does not detect blurry photos.",
  },
  {
    question: "Why is the Duplicates album missing from Photos on my Mac?",
    answer:
      "Photos only shows the album after it has finished scanning in the background and found at least one duplicate. On a large library this can take days, and the scan pauses while you are actively using Photos. If you are on macOS 12 Monterey or earlier, the feature is not available.",
  },
  {
    question: "What is the difference between duplicate and similar photos?",
    answer:
      "Duplicates are the same image saved more than once, sometimes at a different size or format. Similar photos are different shots that look almost the same, such as a burst of ten frames. Most cleanup gains come from similar shots, so a finder that groups them and helps you keep the best one saves far more space than exact matching alone.",
  },
  {
    question: "Is there a duplicate photo finder for Mac without a subscription?",
    answer:
      "Yes. Apple Photos' Duplicates album is free, and Photiva and PhotoSweeper are both one-time purchases. Gemini 2 and CleanMyMac are sold as yearly subscriptions.",
  },
  {
    question: "Is it safe to let an app delete duplicate photos?",
    answer:
      "It is safe when the app shows you every group before deleting, keeps the best copy by default, and moves files to the Trash rather than erasing them. Back up your library first with Time Machine or another backup, review the groups, and empty the Trash only once you are happy.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: H1,
    description: DESCRIPTION,
    url: PAGE_URL,
    mainEntityOfPage: PAGE_URL,
    image: `${SITE_URL}/og-image.png`,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { "@type": "Organization", name: "Photiva", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Photiva",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/app-icon.png` },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Duplicate photo finders for Mac",
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      description: `${tool.bestFor}. Price: ${tool.price}.`,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

const columns: { key: keyof Tool; label: string }[] = [
  { key: "bestFor", label: "Best for" },
  { key: "price", label: "Price" },
  { key: "exact", label: "Exact duplicates" },
  { key: "similar", label: "Similar shots" },
  { key: "blur", label: "Blurry photos" },
  { key: "organise", label: "Organises library" },
  { key: "sources", label: "Scans" },
  { key: "macos", label: "Needs" },
];

export default function BestDuplicatePhotoFinderMacPage() {
  return (
    <main className="pt-20">
      {schemas.map((schema, index) => (
        <script
          key={`${SLUG}-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Section>
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Comparison</p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-foreground leading-tight max-w-4xl">
          {H1}
        </h1>
        <p className="mt-4 text-sm text-muted">
          Last updated <time dateTime={MODIFIED}>November 8, 2026</time>. Written by the team that makes Photiva, so
          we have tried to be fair about where other apps are the better choice.
        </p>
      </Section>

      <Section background="muted">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground">
          What is the best duplicate photo finder for Mac?
        </h2>
        <div className="mt-6 space-y-4 max-w-4xl text-muted leading-relaxed">
          <p>
            Start with the free Duplicates album in Apple Photos. If it misses near-identical shots, or your photos also
            live in folders outside Photos, use a dedicated app: <strong className="text-foreground">PhotoSweeper</strong>{" "}
            if you work in Lightroom Classic or Capture One, <strong className="text-foreground">Gemini 2</strong> if you
            want to clear duplicates of every file type, and <strong className="text-foreground">Photiva</strong> if you
            want duplicates, blurry photos and organisation handled together for a one-time price.
          </p>
          <p>
            The right pick depends less on raw duplicate matching, which all five do, and more on where your photos live,
            whether you also want blurry shots found, and whether you would rather pay once or every year.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground">
          How do the five options compare?
        </h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[960px] text-left text-sm">
            <caption className="sr-only">Duplicate photo finders for Mac compared by price and features</caption>
            <thead className="bg-surface-elevated/70 text-foreground">
              <tr>
                <th scope="col" className="p-4 font-semibold">App</th>
                {columns.map((column) => (
                  <th key={column.key} scope="col" className="p-4 font-semibold">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-muted">
              {tools.map((tool) => (
                <tr key={tool.name} className="border-t border-border align-top">
                  <th scope="row" className="p-4 font-semibold text-foreground">
                    {tool.name}
                  </th>
                  {columns.map((column) => (
                    <td key={column.key} className="p-4 leading-relaxed">
                      {tool[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted max-w-4xl leading-relaxed">
          Prices checked {PRICES_CHECKED} in US dollars from each developer&apos;s store and change often, including
          first-year discounts on subscriptions. Check the developer&apos;s site before you buy. Features listed are what
          each developer describes; we have not counted a feature as missing unless the developer&apos;s own pages leave
          it out.
        </p>
      </Section>

      <Section background="muted">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground">
          Which one should you choose?
        </h2>
        <div className="mt-6 max-w-4xl space-y-10">
          {verdicts.map((verdict) => (
            <article key={verdict.heading}>
              <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.01em] text-foreground">
                {verdict.heading}
              </h3>
              <p className="mt-3 text-muted leading-relaxed">{verdict.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground">
          What should you check before choosing any duplicate finder?
        </h2>
        <ul className="mt-6 max-w-4xl space-y-3 text-muted list-disc list-inside leading-relaxed">
          <li>
            <strong className="text-foreground">Similar-shot grouping.</strong> Bursts and near-identical frames usually
            take more space than true duplicates.
          </li>
          <li>
            <strong className="text-foreground">Where it looks.</strong> Some tools only see the Photos library; others
            also scan folders, external drives or Lightroom catalogs.
          </li>
          <li>
            <strong className="text-foreground">How it picks the keeper.</strong> Look for automatic selection of the
            sharpest, highest-resolution copy that you can override.
          </li>
          <li>
            <strong className="text-foreground">Undo.</strong> Files should go to the Trash, not be erased, and edits to
            albums should be reversible.
          </li>
          <li>
            <strong className="text-foreground">Privacy.</strong> Photo scanning can run entirely on your Mac; you
            should not need to upload your library anywhere.
          </li>
          <li>
            <strong className="text-foreground">Try before you buy.</strong> Where an app offers a free scan or trial,
            compare what it finds on your own library before paying.
          </li>
        </ul>
      </Section>

      <Section background="muted">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground">
          Common questions
        </h2>
        <div className="mt-6 max-w-4xl space-y-6">
          {faqs.map((faq) => (
            <article key={faq.question} className="border-b border-border pb-6">
              <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-foreground">{faq.question}</h3>
              <p className="mt-2 text-muted leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground">
          Related guides
        </h2>
        <ul className="mt-5 text-muted list-disc list-inside space-y-2">
          <li>
            <Link className="text-accent hover:underline" href="/guides/remove-duplicate-photos-mac">
              How to remove duplicate photos on Mac without deleting the wrong shots
            </Link>
          </li>
          <li>
            <Link className="text-accent hover:underline" href="/guides/find-blurry-photos-mac">
              How to find blurry photos on Mac
            </Link>
          </li>
          <li>
            <Link className="text-accent hover:underline" href="/guides/photiva-vs-gemini">
              Photiva vs Gemini 2 in detail
            </Link>
          </li>
        </ul>
      </Section>

      <Section background="muted">
        <div className="rounded-2xl border border-border bg-surface/70 p-8 sm:p-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground">
            See what Photiva finds in your library
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Scan your whole photo library free. You will see every duplicate, similar shot and blurry photo it finds,
            and how much space you would get back, before deciding to pay.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button as="a" href="/download" size="lg" trackingLocation="guide_best_duplicate_finder_cta">
              Download Photiva Free
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
