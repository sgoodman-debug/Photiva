import Image from "next/image";
import { Button } from "@/components/ui/Button";

const ease = "cubic-bezier(0.21, 0.47, 0.32, 0.98)";
const fadeUp = (delay: number) => ({ animation: `fade-in-up 0.5s ${ease} ${delay}s both` });
// LCP-safe: translate-only, no opacity — Chrome won't record LCP until opacity > 0,
// so wrapping the hero image in an opacity animation pushes LCP by the full duration.
const slideFromRight = (delay: number) => ({ animation: `slide-in-from-right 0.5s ${ease} ${delay}s both` });

/* ── Animated mesh gradient background (CSS-only — no JS on main thread) ── */
function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Rotating mesh gradients */}
      <div
        className="absolute -inset-[50%] opacity-60"
        style={{
          background: "conic-gradient(from 0deg at 30% 40%, #a78bfa44, #e8439333, #6c5ce744, #fd79a833, #a78bfa44)",
          animation: "aurora-rotate-cw 30s linear infinite",
        }}
      />
      <div
        className="absolute -inset-[50%] opacity-40"
        style={{
          background: "conic-gradient(from 180deg at 70% 60%, #6c5ce744, #fd79a833, #c4b5fc44, #e8439333, #6c5ce744)",
          animation: "aurora-rotate-ccw 25s linear infinite",
        }}
      />

      {/* Static blobs — opacity-only animation is compositor-safe with blur filters */}
      <div
        className="absolute w-[700px] h-[400px] rounded-full blur-[100px]"
        style={{
          background: "linear-gradient(135deg, #a78bfa, #6c5ce7)",
          top: "5%",
          left: "0%",
          animation: "aurora-pulse-1 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[600px] h-[300px] rounded-full blur-[90px]"
        style={{
          background: "linear-gradient(135deg, #e84393, #fd79a8)",
          top: "30%",
          right: "-5%",
          animation: "aurora-pulse-2 6s ease-in-out infinite -2s",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px]"
        style={{
          background: "radial-gradient(circle, #6c5ce7, #4a3aad)",
          bottom: "-5%",
          left: "25%",
          animation: "aurora-pulse-3 5s ease-in-out infinite -1s",
        }}
      />
      <div
        className="absolute w-[800px] h-[300px] rounded-full blur-[130px]"
        style={{
          background: "linear-gradient(90deg, #c4b5fc, #a78bfa)",
          top: "50%",
          left: "20%",
          animation: "aurora-pulse-4 7s ease-in-out infinite -3s",
        }}
      />
      <div
        className="absolute w-[250px] h-[250px] rounded-full blur-[60px]"
        style={{
          background: "radial-gradient(circle, #fd79a8, #e84393)",
          top: "15%",
          left: "55%",
          animation: "aurora-pulse-5 4s ease-in-out infinite -1.5s",
        }}
      />

      {/* Pulsing core glow — no blur, scale+opacity is compositor-friendly */}
      <div
        className="absolute top-[30%] left-[40%] h-[500px] w-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 65%)",
          animation: "aurora-pulse-core 4s ease-in-out infinite",
        }}
      />

      {/* Noise texture overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.035]" aria-hidden="true">
        <filter id="hero-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 bg-gradient-hero">
      {/* Manual preload for the LCP image with fetchpriority="high".
          Two reasons this exists alongside the Next.js-generated preload:
          1. Next.js 16 + Turbopack does not add fetchpriority="high" to its
             auto-generated <link rel="preload">, so this carries that signal.
          2. Ensures quality/URL consistency — Next.js default quality is 75 and
             the preload URLs must exactly match the <img> srcSet URLs or the
             browser downloads the image twice (preload + img = wasted request).
          Quality is intentionally left at the Next.js default (75) here and on
          the <Image> below so all three sources (preload, img srcset, Next.js
          auto-preload) resolve to identical URLs. */}
      <link
        rel="preload"
        as="image"
        imageSrcSet="/_next/image?url=%2Fscreenshots%2Fdashboard.png&w=640&q=75 640w,/_next/image?url=%2Fscreenshots%2Fdashboard.png&w=750&q=75 750w,/_next/image?url=%2Fscreenshots%2Fdashboard.png&w=828&q=75 828w,/_next/image?url=%2Fscreenshots%2Fdashboard.png&w=1080&q=75 1080w,/_next/image?url=%2Fscreenshots%2Fdashboard.png&w=1200&q=75 1200w,/_next/image?url=%2Fscreenshots%2Fdashboard.png&w=1920&q=75 1920w"
        imageSizes="(max-width: 1024px) 100vw, 50vw"
        fetchPriority="high"
      />
      {/* quality intentionally left at default (75) — matches Next.js Image default so
          the manual preload URLs above exactly match the <img> srcSet URLs generated
          by Next.js, preventing a double-download (preload + img = wasted request). */}
      <AuroraBackground />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <div style={fadeUp(0.1)}>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 mb-6">
                <span className="text-accent text-xs font-semibold tracking-wide">Photiva</span>
              </div>
            </div>

            <div style={fadeUp(0.2)}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.04em] text-foreground leading-[1.05]">
                Reclaim Your Mac&apos;s Storage.
                <br />
                Remove Duplicates. Organize Years of Photos.
              </h1>
            </div>

            <div style={fadeUp(0.3)}>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Photiva automatically finds duplicate, blurry, and similar photos and organizes your entire library in minutes.
                No cloud uploads. No subscription. Just a clean Mac.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                <li className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-accent shrink-0 leading-5">&#10003;</span>
                  Recover 10&ndash;40GB in a typical cleanup session
                </li>
                <li className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-accent shrink-0 leading-5">&#10003;</span>
                  100 percent on-device. Nothing uploaded.
                </li>
                <li className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-accent shrink-0 leading-5">&#10003;</span>
                  Auto-organize by event and date
                </li>
                <li className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-accent shrink-0 leading-5">&#10003;</span>
                  Detect blurry and useless shots
                </li>
              </ul>
            </div>

            <div style={fadeUp(0.4)}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Button as="a" href="/download" size="lg">
                  Free Download &amp; Scan
                </Button>
                <Button as="a" href="/#how-it-works" variant="secondary" size="lg">
                  See How It Works
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted">
                Used by Mac users to clean years of photo clutter.
              </p>
              <p className="mt-2 text-xs text-muted">
                Scan your entire library for free. Unlock cleanup and organization with a one-time purchase.
              </p>
            </div>
          </div>

          {/* Right: App screenshot — slideFromRight has no opacity so LCP fires on image load */}
          <div style={slideFromRight(0.3)}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <Image
                  src="/screenshots/dashboard.png"
                  alt="Photiva Dashboard showing storage breakdown, duplicate detection, blurry photo finder, and cleanup categories"
                  width={1280}
                  height={800}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  fetchPriority="high"
                />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-border/60 bg-surface-elevated/90 backdrop-blur-sm p-3 shadow-lg hidden sm:block">
                <p className="text-xs text-muted">Storage saved</p>
                <p className="text-lg font-display font-bold text-accent">24.3 GB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section divider: smooth gradient fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>
    </section>
  );
}
