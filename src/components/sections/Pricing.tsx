"use client";

import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const included = [
  "Smart Cleanup: one-click library analysis",
  "Duplicate & similar photo detection",
  "5 organization systems + custom templates",
  "Photo & video compression",
  "Secure encrypted vault with Touch ID",
  "Contact cleanup & merge",
  "30-day rollback on all operations",
  "RAW + sidecar file support",
  "Lifetime updates",
];

export function Pricing() {
  return (
    <Section id="pricing" background="muted">
      <div className="text-center mb-14">
        <FadeIn>
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
            Pricing
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground">
            One price. Yours forever.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            Download and scan your entire library for free.
            Purchase once to unlock cleanup, organization, compression, vault, and contact tools.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <div className="mx-auto max-w-lg">
          <div className="rounded-2xl border-2 border-accent/40 bg-surface-elevated p-8 md:p-10 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/15 blur-[80px]" />

            <div className="relative">
              {/* Subscription anchor */}
              <div className="mb-6 rounded-xl bg-surface p-4 border border-border">
                <p className="text-xs text-muted-foreground mb-1">Other apps charge</p>
                <p className="text-sm text-muted">
                  <span className="line-through">$9.99/month</span>{" "}
                  <span className="text-muted-foreground">= $120/year. After 3 years, that&apos;s $360.</span>
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display text-5xl font-extrabold tracking-[-0.03em] text-accent">$29.99</span>
                <Badge variant="accent">One-time</Badge>
              </div>
              <p className="text-sm text-muted mb-2">Full scan is free. Cleanup requires purchase.</p>
              <p className="text-sm text-muted mb-8">Pay once. Use forever. All features included.</p>

              {/* Feature list */}
              <ul className="space-y-3 mb-8">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <Button size="lg" className="w-full">
                  Free Download &amp; Scan
                </Button>
                <Button as="a" href="https://store.appiva.app/checkout/buy/9ccb153d-2370-4663-bef7-c9ba8658fac5" variant="secondary" size="lg" className="w-full">
                  Buy Now · $29.99
                </Button>
              </div>

              {/* Guarantee */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                30-day money-back guarantee
              </div>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                Requires macOS 14 Sonoma or later. Universal app, runs natively on Apple Silicon and Intel.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
