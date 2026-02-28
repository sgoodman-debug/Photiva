"use client";

import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const reviews = [
  {
    quote:
      "I recovered over 45 GB of storage just from duplicates and old screenshots. Photiva found things I'd been ignoring for years.",
    name: "Alex Chen",
    role: "Photographer",
    stars: 5,
    featured: false,
  },
  {
    quote:
      "10 years of family photos finally organized into folders I can actually browse. My wife thinks I spent the whole weekend doing it. Took me 20 minutes.",
    name: "Sarah Mitchell",
    role: "Parent of three",
    stars: 5,
    featured: true,
  },
  {
    quote:
      "I use it after every client shoot to clean up rejected shots and organize deliverables. The RAW + sidecar handling alone is worth the price.",
    name: "James Rivera",
    role: "Professional photographer",
    stars: 5,
    featured: false,
  },
  {
    quote:
      "Finally an app that doesn't try to upload my photos to some server. Everything stays on my Mac. That's how it should be.",
    name: "Maria Gonzalez",
    role: "Privacy advocate",
    stars: 5,
    featured: false,
  },
  {
    quote:
      "One-time purchase, no subscription, and it actually works better than the apps charging $60/year. No-brainer.",
    name: "David Park",
    role: "Software developer",
    stars: 5,
    featured: true,
  },
  {
    quote:
      "The vault feature is brilliant. Some photos just need to be private. Touch ID to unlock is the cherry on top.",
    name: "Emma Thompson",
    role: "Blogger",
    stars: 5,
    featured: false,
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="text-center mb-14">
        <FadeIn>
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
            Trusted by thousands
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-foreground">
            People love Photiva
          </h2>
        </FadeIn>
      </div>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
        {reviews.map((review) => (
          <StaggerItem key={review.name}>
            <div
              className={`rounded-2xl border p-6 flex h-full min-h-[280px] flex-col gap-4 ${
                review.featured
                  ? "border-accent/30 bg-accent-muted"
                  : "border-border bg-surface-elevated"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="flex-1 text-sm text-foreground/80 leading-relaxed"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="pt-2 border-t border-border/50 mt-auto">
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
