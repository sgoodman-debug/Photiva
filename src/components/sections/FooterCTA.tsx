"use client";

import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";

export function FooterCTA() {
  return (
    <Section background="muted">
      <div className="text-center">
        <FadeIn>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground">
            Ready to reclaim your storage?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            Scan your entire library for free. Unlock cleanup and organization with a one-time purchase.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button as="a" href="/download" size="lg">
              Free Download &amp; Scan
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
