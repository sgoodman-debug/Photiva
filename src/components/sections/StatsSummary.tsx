"use client";

import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const summaryStats = [
  {
    value: 50,
    suffix: " GB",
    label: "Average storage recovered",
    ariaLabel: "50 GB average storage recovered",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    value: 3200,
    suffix: "+",
    label: "Duplicates found per library",
    ariaLabel: "3,200 plus duplicates found per library",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink">
        <rect x="8" y="2" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    ),
  },
  {
    prefix: "~",
    value: 20,
    suffix: " min",
    label: "to review and clean a 100K photo library",
    ariaLabel: "Approximately 20 minutes to review and clean a 100K photo library",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: 100,
    suffix: "%",
    label: "On-device processing",
    ariaLabel: "100 percent on-device processing",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-emerald-400">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <line x1="8" y1="20" x2="16" y2="20" />
        <line x1="12" y1="16" x2="12" y2="20" />
      </svg>
    ),
  },
];

export function StatsSummary() {
  return (
    <Section className="bg-gradient-section">
      <div className="text-center mb-14">
        <FadeIn>
          <p className="text-sm font-medium text-pink uppercase tracking-widest mb-3">
            The results speak for themselves
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-foreground">
            Real results from real cleanup sessions
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-3 text-sm text-muted">
            You can scan and preview these results for free.
          </p>
        </FadeIn>
      </div>

      <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
        {summaryStats.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="rounded-2xl border border-border bg-surface-elevated p-8 text-center flex flex-col items-center gap-4 h-full">
              <div className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-foreground">
                <span className="sr-only">{stat.ariaLabel}</span>
                {stat.prefix ? <span aria-hidden>{stat.prefix}</span> : null}
                {stat.value % 1 !== 0 ? (
                  <span aria-hidden>{stat.value}{stat.suffix}</span>
                ) : (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-sm text-muted leading-snug">{stat.label}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
      <FadeIn delay={0.25}>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Results vary by library size and condition.
        </p>
      </FadeIn>
    </Section>
  );
}
