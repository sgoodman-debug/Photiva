import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";

const guides = [
  {
    href: "/remove-duplicate-photos-mac",
    title: "Remove Duplicate Photos on Mac",
    description: "Learn a safe workflow for finding exact and similar duplicates before deleting anything.",
  },
  {
    href: "/find-blurry-photos-mac",
    title: "Find Blurry Photos on Mac",
    description: "Use quality-focused review steps to remove soft shots while keeping the best moments.",
  },
  {
    href: "/organize-apple-photos-library",
    title: "Organize Apple Photos Library",
    description: "Build a simple system for events, dates, and recurring cleanup that stays manageable.",
  },
  {
    href: "/mac-photo-cleaner",
    title: "Mac Photo Cleaner Guide",
    description: "Compare what matters in a cleaner: accuracy, privacy, rollback safety, and workflow coverage.",
  },
  {
    href: "/photiva-vs-gemini",
    title: "Photiva vs Gemini 2",
    description: "See how duplicate-only cleanup compares to a complete cleanup and organization workflow.",
  },
];

export const metadata: Metadata = {
  title: "Photiva Guides | Mac Photo Cleanup Help",
  description:
    "Browse Photiva guides for duplicate cleanup, blurry photo detection, Apple Photos organization, and tool comparisons on macOS.",
  alternates: {
    canonical: "/guides",
  },
};

export default function GuidesPage() {
  return (
    <main className="pt-20">
      <Section>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-foreground leading-tight">
          Photiva Guides
        </h1>
        <p className="mt-4 text-muted max-w-3xl leading-relaxed">
          Step-by-step resources to clean and organize your Mac photo library safely.
        </p>
      </Section>

      <Section background="muted">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <article key={guide.href} className="rounded-2xl border border-border bg-surface-elevated/70 p-6">
              <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-foreground">
                <Link href={guide.href} className="hover:text-accent transition-colors">
                  {guide.title}
                </Link>
              </h2>
              <p className="mt-3 text-muted leading-relaxed">{guide.description}</p>
              <Link href={guide.href} className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
                Read guide
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
