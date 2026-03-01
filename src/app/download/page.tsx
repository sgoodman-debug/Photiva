import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/animations/FadeIn";

// TODO: Replace with your actual .dmg / download URL
const DOWNLOAD_URL = "https://github.com/sgoodman-debug/photivareleases/releases/latest/download/Photiva-1.0.0.dmg";
const BUY_URL = "https://store.appiva.app/checkout/buy/9ccb153d-2370-4663-bef7-c9ba8658fac5";

export const metadata: Metadata = {
  title: "Download Photiva | Free Mac Photo Cleaner",
  description:
    "Download Photiva free and scan your entire Mac photo library. Find duplicates, blurry photos, and similar images. Unlock full cleanup for $29.99 one-time.",
  alternates: { canonical: "/download" },
};

const freeFeatures = [
  "Full library scan — every photo, video, and Live Photo",
  "Duplicate detection with exact + visual matching",
  "Blurry photo scoring across your entire library",
  "Similar photo grouping and side-by-side review",
  "Full results preview before any action",
  "Storage reclaim estimate before you pay",
];

const paidFeatures = [
  "One-click smart cleanup with rollback protection",
  "Duplicate & similar photo deletion",
  "5 photo organisation systems + custom templates",
  "Photo & video compression (HEIF conversion)",
  "Secure encrypted vault with Touch ID",
  "Contact cleanup & smart merge",
  "30-day undo on every operation",
  "RAW + sidecar file support",
  "Lifetime updates included",
];

const steps = [
  {
    number: "1",
    title: "Download & Open",
    body: "Download Photiva, open it, and grant Photos access. No account, no sign-up required.",
  },
  {
    number: "2",
    title: "Scan for Free",
    body: "Photiva scans your entire library on-device — duplicates, blur, similar photos, and large videos.",
  },
  {
    number: "3",
    title: "Review Results",
    body: "See exactly what Photiva found before removing anything. Every group is reviewable.",
  },
  {
    number: "4",
    title: "Unlock & Clean",
    body: "Pay once to unlock cleanup, organisation, compression, and vault. No subscription ever.",
  },
];

const trustItems = [
  { icon: "🔒", label: "100% on-device", sub: "No cloud uploads. Ever." },
  { icon: "💳", label: "One-time $29.99", sub: "No subscription. Yours forever." },
  { icon: "↩️", label: "30-day rollback", sub: "Every action is reversible." },
  { icon: "🍎", label: "macOS 14+", sub: "Universal — Apple Silicon & Intel." },
];

export default function DownloadPage() {
  return (
    <main className="pt-16">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
          <div className="absolute left-1/4 top-1/2 h-[300px] w-[400px] -translate-y-1/2 rounded-full bg-pink/8 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <Image
                src="/app-icon.png"
                alt="Photiva"
                width={120}
                height={120}
                className="mx-auto mb-8 rounded-[26px] shadow-2xl shadow-accent/20"
              />
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
                  macOS 14 Sonoma or later
                </span>
                <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
                  Universal app
                </span>
                <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
                  Apple Silicon &amp; Intel
                </span>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
                  Scan free · Cleanup $29.99
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="font-display text-5xl sm:text-6xl font-extrabold tracking-[-0.04em] text-foreground leading-[1.05]">
                Your Mac photos,{" "}
                <span className="bg-gradient-to-r from-accent to-pink bg-clip-text text-transparent">
                  finally clean.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
                Photiva scans your entire photo library for duplicates, blurry shots, and similar images — completely free.
                Unlock one-click cleanup, organisation, and compression for a single $29.99 payment.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button as="a" href={DOWNLOAD_URL} size="lg" className="w-full sm:w-auto px-10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Free Download &amp; Scan
                </Button>
                <Button as="a" href={BUY_URL} variant="secondary" size="lg" className="w-full sm:w-auto px-10">
                  Buy Now · $29.99
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                No account required · Scan is 100% free · No credit card until you&apos;re ready to clean
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="border-y border-border bg-surface/60">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── App screenshot ── */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-surface overflow-hidden shadow-2xl shadow-black/40">
              {/* Mac window chrome */}
              <div className="flex items-center gap-2 border-b border-border bg-surface-elevated px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-4 text-xs text-muted-foreground font-medium">Photiva</span>
              </div>
              {/* Screenshot */}
              <div className="relative bg-[#1a1030]">
                <Image
                  src="/screenshots/contact-cleanup.png"
                  alt="Photiva app — Contact Cleanup interface"
                  width={1200}
                  height={750}
                  className="w-full"
                  priority
                />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Photiva&apos;s Contact Cleanup — find and merge duplicate contacts safely
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ── Free vs Paid ── */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">What&apos;s included</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground">
              Start for free. Own it forever.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Free */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface p-8 h-full">
              <div className="mb-6">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Free</p>
                <p className="font-display text-3xl font-extrabold text-foreground">$0</p>
                <p className="mt-1 text-sm text-muted">Full scan of your entire library</p>
              </div>
              <ul className="space-y-3">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button as="a" href={DOWNLOAD_URL} size="lg" className="w-full">
                  Download Free
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Paid */}
          <FadeIn delay={0.2}>
            <div className="rounded-2xl border-2 border-accent/40 bg-surface-elevated p-8 h-full relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/15 blur-[60px]" />
              <div className="relative">
                <div className="mb-6">
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">Full version</p>
                  <div className="flex items-baseline gap-2">
                    <p className="font-display text-3xl font-extrabold text-foreground">$29.99</p>
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs font-semibold text-accent">One-time</span>
                  </div>
                  <p className="mt-1 text-sm text-muted">Pay once. Use forever. No subscription.</p>
                </div>
                <ul className="space-y-3">
                  {paidFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button as="a" href={BUY_URL} size="lg" className="w-full">
                    Buy Now · $29.99
                  </Button>
                </div>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Includes lifetime updates · 30-day money-back guarantee
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── How it works ── */}
      <Section>
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">How it works</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground">
              Clean in four steps
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 font-display text-lg font-bold text-accent">
                  {step.number}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── Privacy callout ── */}
      <Section background="muted">
        <FadeIn>
          <div className="mx-auto max-w-3xl rounded-2xl border border-accent/20 bg-accent/5 p-8 md:p-12 text-center">
            <div className="mb-4 inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-accent/15">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] text-foreground mb-4">
              Your photos never leave your Mac
            </h2>
            <p className="text-muted leading-relaxed max-w-xl mx-auto">
              Every scan, every comparison, every cleanup decision happens entirely on your device.
              Photiva never uploads your photos to any server. No account, no cloud, no exceptions.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ── Final CTA ── */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <Image
              src="/app-icon.png"
              alt="Photiva"
              width={72}
              height={72}
              className="mx-auto mb-6 rounded-2xl shadow-lg shadow-accent/20"
            />
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground">
              Ready to reclaim your storage?
            </h2>
            <p className="mt-4 text-muted max-w-lg mx-auto">
              Download Photiva and run your first scan free. No credit card. No account.
              Just a cleaner, faster photo library.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button as="a" href={DOWNLOAD_URL} size="lg" className="w-full sm:w-auto px-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Free Download &amp; Scan
              </Button>
              <Button as="a" href={BUY_URL} variant="secondary" size="lg" className="w-full sm:w-auto px-10">
                Buy Now · $29.99
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Requires macOS 14 Sonoma or later · Universal app · Apple Silicon &amp; Intel
            </p>
          </div>
        </FadeIn>
      </Section>
    </main>
  );
}
