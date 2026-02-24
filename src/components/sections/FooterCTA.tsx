"use client";

import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";

export function FooterCTA() {
  return (
    <Section background="accent">
      <div className="text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Your library deserves better
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            Download PhotoSweeper and take back control of your photos. Free trial — no account required.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button size="lg">
              Download Free Trial
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="mt-6 text-xs text-muted-foreground">
            macOS 14 Sonoma or later &middot; Universal app &middot; v1.0
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
