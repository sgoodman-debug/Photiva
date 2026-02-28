"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const badges = [
  {
    label: "Apple\nNotarized",
    sublabel: "Passed Apple's security check",
    gradient: "from-purple-600 to-purple-900",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    label: "100%\nOn-Device",
    sublabel: "No cloud, no uploads",
    gradient: "from-pink-500 to-pink-800",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "SHA-256\nDetection",
    sublabel: "Exact duplicate matching",
    gradient: "from-orange-500 to-orange-800",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    label: "50K+",
    sublabel: "Libraries cleaned",
    gradient: "from-teal-500 to-teal-800",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "One-Time\nPurchase",
    sublabel: "No subscription",
    gradient: "from-emerald-500 to-emerald-800",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export function TrustBadges() {
  return (
    <section className="relative z-10 py-10">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <FadeIn delay={0.5}>
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3" staggerDelay={0.08}>
            {badges.map((badge) => (
              <StaggerItem key={badge.sublabel}>
                <div className={`rounded-2xl bg-gradient-to-br ${badge.gradient} p-5 h-full flex flex-col items-center justify-center text-center gap-2 min-h-[130px]`}>
                  {badge.icon}
                  <p className="text-white font-display font-bold text-sm leading-tight whitespace-pre-line">
                    {badge.label}
                  </p>
                  <p className="text-white/60 text-xs leading-tight">
                    {badge.sublabel}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </FadeIn>
      </div>
    </section>
  );
}
