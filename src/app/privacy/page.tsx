import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Photiva",
  description:
    "Photiva Privacy Policy. Learn how we protect your data with 100% on-device processing, no cloud uploads, and no tracking.",
  alternates: {
    canonical: "https://photiva.app/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-[800px] px-5 sm:px-6 py-24">
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: March 2026</p>

      <p className="mt-6 text-muted leading-relaxed text-[15px]">
        This Privacy Policy explains how Photiva handles information when you use the Photiva software and website.
      </p>

      <div className="mt-10 space-y-10 text-muted leading-relaxed text-[15px]">

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">1. Overview</h2>
          <p>
            Photiva is designed with privacy as a core principle. The software processes photos and files locally on
            your Mac and does not require user accounts or cloud uploads.
          </p>
          <p className="mt-3">Your personal photos remain on your device.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">2. Local Processing</h2>
          <p>
            Photiva analyzes files directly on your Mac to detect duplicates, blurry photos, similar images, and
            other file characteristics.
          </p>
          <p className="mt-3">This processing occurs entirely on-device using macOS frameworks.</p>
          <p className="mt-3">Photiva does not upload or transmit your photos to external servers.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">3. No Photo Collection</h2>
          <p>Photiva does not collect, store, or access:</p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Your photos</li>
            <li>Your photo library contents</li>
            <li>Your file metadata</li>
            <li>Your personal files</li>
          </ul>
          <p className="mt-3">All analysis happens locally on your device.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">4. Website Analytics</h2>
          <p>
            The Photiva website may use basic analytics tools to understand how visitors interact with the website.
          </p>
          <p className="mt-3">This information may include:</p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Browser type</li>
            <li>Device type</li>
            <li>Pages visited</li>
            <li>Referral sources</li>
          </ul>
          <p className="mt-3">This information is used only to improve the website experience.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">5. Payment Processing</h2>
          <p>Purchases of Photiva may be handled through third-party payment providers.</p>
          <p className="mt-3">
            These providers process payment information such as billing details and payment method information.
          </p>
          <p className="mt-3">Photiva does not store payment card details.</p>
          <p className="mt-3">
            Payment providers may have their own privacy policies governing how payment data is handled.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">6. Support Communications</h2>
          <p>If you contact support, we may receive information such as:</p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Email address</li>
            <li>Message contents</li>
            <li>Diagnostic details you choose to share</li>
          </ul>
          <p className="mt-3">This information is used only to respond to your support request.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">7. Data Security</h2>
          <p>
            Because Photiva processes files locally and does not store photo libraries on external servers, the
            primary control of data security remains with the user&apos;s device.
          </p>
          <p className="mt-3">Users are encouraged to maintain backups of important files.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Updated versions will be posted on the website with
            a revised &ldquo;Last updated&rdquo; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">9. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact:{" "}
            <a href="mailto:support@photiva.app" className="text-accent hover:underline">
              support@photiva.app
            </a>
          </p>
        </section>

      </div>
    </main>
  );
}
