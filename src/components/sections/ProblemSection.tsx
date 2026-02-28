"use client";

import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { problemCards } from "@/lib/constants";

const icons: Record<string, React.ReactNode> = {
  copy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  blur: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  ),
  folder: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

export function ProblemSection() {
  return (
    <Section id="problem" background="muted">
      <div className="text-center mb-14">
        <FadeIn>
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
            The problem
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground">
            Your photo library is out of control
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            The average person has 2,000+ photos on their device. Most have never been organized.
            Duplicates alone waste 10–30% of your storage.
          </p>
        </FadeIn>
      </div>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
        {problemCards.map((card) => (
          <StaggerItem key={card.title}>
            <div className="rounded-2xl border border-border bg-surface-elevated p-7 h-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink/10 text-pink">
                {icons[card.icon]}
              </div>
              <h3 className="font-display text-lg font-bold tracking-[-0.02em] text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{card.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <FadeIn delay={0.4}>
        <p className="text-center mt-12 text-lg text-muted">
          What if your Mac fixed all of this{" "}
          <span className="text-foreground font-medium">automatically?</span>
        </p>
      </FadeIn>
    </Section>
  );
}
