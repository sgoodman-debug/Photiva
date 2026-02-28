"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

/* ── Animated mesh gradient background ── */
function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* ── Base animated mesh gradient ── */}
      {/* This creates a multi-point gradient that morphs by animating the positions */}
      <motion.div
        className="absolute -inset-[50%] opacity-60"
        style={{
          background:
            "conic-gradient(from 0deg at 30% 40%, #a78bfa44, #e8439333, #6c5ce744, #fd79a833, #a78bfa44)",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -inset-[50%] opacity-40"
        style={{
          background:
            "conic-gradient(from 180deg at 70% 60%, #6c5ce744, #fd79a833, #c4b5fc44, #e8439333, #6c5ce744)",
        }}
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Floating aurora blobs ── */}
      {/* Large purple - dominant */}
      <motion.div
        className="absolute w-[700px] h-[400px] rounded-full blur-[100px]"
        style={{
          background: "linear-gradient(135deg, #a78bfa, #6c5ce7)",
          top: "5%",
          left: "0%",
          opacity: 0.35,
        }}
        animate={{
          x: [0, 150, -100, 50, 0],
          y: [0, -80, 60, -30, 0],
          scaleX: [1, 1.3, 0.9, 1.15, 1],
          scaleY: [1, 0.85, 1.2, 0.95, 1],
          rotate: [0, 8, -5, 3, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hot pink - wide ribbon */}
      <motion.div
        className="absolute w-[600px] h-[300px] rounded-full blur-[90px]"
        style={{
          background: "linear-gradient(135deg, #e84393, #fd79a8)",
          top: "30%",
          right: "-5%",
          opacity: 0.3,
        }}
        animate={{
          x: [0, -140, 100, -80, 0],
          y: [0, 100, -60, 80, 0],
          scaleX: [1, 0.8, 1.2, 0.9, 1],
          scaleY: [1, 1.3, 0.85, 1.15, 1],
          rotate: [0, -10, 6, -4, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Deep indigo - concentrated core */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px]"
        style={{
          background: "radial-gradient(circle, #6c5ce7, #4a3aad)",
          bottom: "-5%",
          left: "25%",
          opacity: 0.4,
        }}
        animate={{
          x: [0, 80, -120, 60, 0],
          y: [0, -100, 40, -60, 0],
          scale: [1, 1.3, 0.8, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Lavender wide wash */}
      <motion.div
        className="absolute w-[800px] h-[300px] rounded-full blur-[130px]"
        style={{
          background: "linear-gradient(90deg, #c4b5fc, #a78bfa)",
          top: "50%",
          left: "20%",
          opacity: 0.2,
        }}
        animate={{
          x: [0, -60, 120, -80, 0],
          y: [0, 60, -40, 50, 0],
          scaleX: [1, 1.2, 0.85, 1.1, 1],
          rotate: [0, 5, -8, 3, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small bright pink pop */}
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full blur-[60px]"
        style={{
          background: "radial-gradient(circle, #fd79a8, #e84393)",
          top: "15%",
          left: "55%",
          opacity: 0.35,
        }}
        animate={{
          x: [0, 100, -40, 80, 0],
          y: [0, -50, 80, -60, 0],
          scale: [1, 1.4, 0.7, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Light beams that sweep across ── */}
      <motion.div
        className="absolute h-[2px] w-[500px] rotate-[18deg]"
        style={{
          top: "20%",
          left: "-10%",
          background: "linear-gradient(90deg, transparent, #a78bfa99, #e8439966, transparent)",
        }}
        animate={{ x: ["-100%", "250vw"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 0 }}
      />
      <motion.div
        className="absolute h-[2px] w-[400px] rotate-[-10deg]"
        style={{
          top: "50%",
          right: "-10%",
          background: "linear-gradient(90deg, transparent, #6c5ce799, #fd79a866, transparent)",
        }}
        animate={{ x: ["100%", "-250vw"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2 }}
      />
      <motion.div
        className="absolute h-[1px] w-[350px] rotate-[30deg]"
        style={{
          top: "70%",
          left: "20%",
          background: "linear-gradient(90deg, transparent, #c4b5fc88, transparent)",
        }}
        animate={{ x: ["-100%", "200vw"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 4 }}
      />

      {/* ── Pulsing core glow ── */}
      <motion.div
        className="absolute top-[30%] left-[40%] h-[500px] w-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 65%)",
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Noise texture overlay ── */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.035]" aria-hidden="true">
        <filter id="hero-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>

      {/* ── Subtle dot grid ── */}
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
      <AuroraBackground />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 mb-6">
                <span className="text-accent text-xs font-semibold tracking-wide">Photiva</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.04em] text-foreground leading-[1.05]">
                Reclaim Your Mac&apos;s Storage.
                <br />
                Remove Duplicates. Organize Years of Photos.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Photiva automatically finds duplicate, blurry, and similar photos and organizes your entire library in minutes.
                No cloud uploads. No subscription. Just a clean Mac.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
                <li className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-accent">&#10003;</span>
                  Recover 10&ndash;40GB in a typical cleanup session
                </li>
                <li className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-accent">&#10003;</span>
                  Detect blurry and useless shots
                </li>
                <li className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-accent">&#10003;</span>
                  Auto-organize by event and date
                </li>
                <li className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-accent">&#10003;</span>
                  100 percent on-device. Nothing uploaded.
                </li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Button as="a" href="/#pricing" size="lg">
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
            </FadeIn>
          </div>

          {/* Right: App screenshot */}
          <FadeIn direction="left" delay={0.3}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <Image
                  src="/screenshots/dashboard.png"
                  alt="Photiva Dashboard showing storage breakdown, duplicate detection, blurry photo finder, and cleanup categories"
                  width={1280}
                  height={800}
                  className="w-full h-auto"
                  priority
                  quality={90}
                />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-border/60 bg-surface-elevated/90 backdrop-blur-sm p-3 shadow-lg hidden sm:block">
                <p className="text-xs text-muted">Storage saved</p>
                <p className="text-lg font-display font-bold text-accent">24.3 GB</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── Section divider: smooth gradient fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface" />
        {/* Thin accent line for a crisp edge */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>
    </section>
  );
}
