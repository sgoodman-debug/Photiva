import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { CapabilityGrid } from "@/components/sections/CapabilityGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { StatsSummary } from "@/components/sections/StatsSummary";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Section } from "@/components/layout/Section";
import { faqs, features } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Photiva | Mac Photo Cleaner for Duplicate & Blur",
  description:
    "Photiva is a macOS photo cleaner app for duplicate, blurry, and similar photos. Organize Apple Photos locally with no cloud uploads and no subscriptions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Photiva | Mac Photo Cleaner for Duplicate & Blur",
    description:
      "Clean duplicate, blurry, and similar photos on Mac. Organize Apple Photos privately with a one-time purchase and no subscription.",
    url: "https://photiva.app",
    siteName: "Photiva",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Photiva macOS photo cleaner interface",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photiva | Mac Photo Cleaner for Duplicate & Blur",
    description:
      "Clean duplicate, blurry, and similar photos on Mac with private on-device processing and one-time pricing.",
    images: ["/og-image.png"],
  },
};

const homepageSoftwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Photiva",
  operatingSystem: "macOS 14 Sonoma or later",
  applicationCategory: "UtilityApplication",
  url: "https://photiva.app",
  image: "https://photiva.app/og-image.png",
  description:
    "Photiva is a macOS photo library cleaner app designed to remove duplicate, blurry, and similar photos while organizing your Apple Photos library. All without cloud uploads or subscriptions.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "29.99",
    availability: "https://schema.org/InStock",
  },
};

const homepageProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Photiva",
  description:
    "Photiva is a macOS photo cleaner app designed to remove duplicate, blurry, and similar photos while organizing your Apple Photos library.",
  image: "https://photiva.app/og-image.png",
  offers: {
    "@type": "Offer",
    price: "29.99",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

const homepageFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const homepageHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to clean your Mac photo library with Photiva",
  description: "Simple workflow for duplicate cleanup and organization on macOS.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Scan photos",
      text: "Import your Apple Photos library or folders and run a full scan.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Review results",
      text: "Review duplicate, blurry, similar, and large media groups before action.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Clean and organize",
      text: "Apply cleanup and organization rules with rollback safety.",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSoftwareApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageHowTo) }}
      />

      <Hero />
      <StatsSummary />
      <ProblemSection />
      <div id="features">
        {features.map((feature, i) => (
          <FeatureSection key={feature.id} feature={feature} reversed={i % 2 !== 0} />
        ))}
      </div>
      <CapabilityGrid />
      <HowItWorks />
      <PrivacySection />
      <ComparisonTable />
      <Testimonials />
      <Pricing />
      <Section background="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground">
            What is Photiva?
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            Photiva is a macOS photo library cleaner app that removes duplicate, blurry, and similar photos while organizing your Apple Photos library. All without cloud uploads or subscriptions.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-surface-elevated/70 p-6 text-left">
            <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-foreground">Quick Summary</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Photiva scans your Mac to find duplicate photos, blurry shots, similar images, large videos, and hidden Live Photo data. It safely removes clutter and organizes your photo library in minutes using on-device processing. One-time purchase. No subscription.
            </p>
          </div>
          <div className="mt-6">
            <Link className="text-sm font-semibold text-accent hover:underline" href="/guides">
              Explore cleanup guides
            </Link>
          </div>
        </div>
      </Section>
      <FAQ />
      <FooterCTA />
    </main>
  );
}
