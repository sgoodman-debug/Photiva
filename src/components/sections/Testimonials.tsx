"use client";

import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { testimonials, stats } from "@/lib/constants";

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
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground">
            People love Photiva
          </h2>
        </FadeIn>
      </div>

      {/* Testimonial cards */}
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" staggerDelay={0.12}>
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
            <div className="rounded-2xl border border-border bg-surface-elevated p-7 h-full flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm text-muted leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      {/* Stat strip */}
      <FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 rounded-2xl border border-border bg-surface-elevated p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-extrabold tracking-[-0.02em] text-foreground">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
