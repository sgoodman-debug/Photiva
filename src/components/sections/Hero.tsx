"use client";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { trustBadges } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <FadeIn delay={0.1}>
              <p className="text-sm text-muted mb-4">
                Stop losing your best photos in a sea of duplicates
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Clean your photo library.{" "}
                <span className="text-accent">Effortlessly.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-lg">
                Thousands of duplicates, blurry shots, and screenshots are burying your best
                memories. Photiva finds them all — and gives you a clean, organized library
                in minutes, not hours.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button as="a" href="#pricing" size="lg">
                  Download Free Trial
                </Button>
                <Button as="a" href="#how-it-works" variant="secondary" size="lg">
                  See How It Works
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-8 flex flex-wrap gap-2">
                {trustBadges.map((badge) => (
                  <Badge key={badge} variant="outline">
                    {badge}
                  </Badge>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Screenshot placeholder */}
          <FadeIn direction="left" delay={0.3}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl border border-border bg-surface-elevated overflow-hidden shadow-2xl shadow-black/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                <div className="flex h-full flex-col items-center justify-center gap-3 p-8">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground/50">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <p className="text-sm text-muted-foreground/50 text-center">
                    App Dashboard showing storage breakdown and cleanup summary
                  </p>
                </div>
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-surface-elevated p-3 shadow-lg hidden sm:block">
                <p className="text-xs text-muted">Storage saved</p>
                <p className="text-lg font-bold text-accent">24.3 GB</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
