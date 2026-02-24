"use client";

import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";
import type { Feature } from "@/types";

interface FeatureSectionProps {
  feature: Feature;
  reversed?: boolean;
}

export function FeatureSection({ feature, reversed = false }: FeatureSectionProps) {
  return (
    <Section>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          reversed ? "lg:direction-rtl" : ""
        }`}
        style={reversed ? { direction: "rtl" } : undefined}
      >
        {/* Text column */}
        <div style={reversed ? { direction: "ltr" } : undefined}>
          <FadeIn direction={reversed ? "right" : "left"}>
            <Badge variant="accent" className="mb-4">
              {feature.badge}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              {feature.title}
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              {feature.description}
            </p>
            <ul className="mt-6 space-y-3">
              {feature.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 shrink-0 text-accent"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Screenshot placeholder */}
        <div style={reversed ? { direction: "ltr" } : undefined}>
          <FadeIn direction={reversed ? "left" : "right"}>
            <div className="aspect-[4/3] rounded-2xl border border-border bg-surface-elevated overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              <div className="flex h-full flex-col items-center justify-center gap-3 p-8">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-muted-foreground/40"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <p className="text-xs text-muted-foreground/40 text-center max-w-[200px]">
                  {feature.screenshotLabel}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
