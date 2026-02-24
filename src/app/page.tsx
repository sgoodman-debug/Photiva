import { Navbar } from "@/components/layout/Navbar";
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
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Footer } from "@/components/layout/Footer";
import { features } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
