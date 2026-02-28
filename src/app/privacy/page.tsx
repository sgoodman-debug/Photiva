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
      <p className="mt-2 text-sm text-muted">Last updated: February 27, 2026</p>

      <div className="mt-10 space-y-10 text-muted leading-relaxed text-[15px]">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Introduction</h2>
          <p>
            Photiva (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a macOS application designed to help
            you clean, organize, compress, and protect your photo library. We are committed to protecting your privacy.
            This Privacy Policy explains how we handle your data when you use Photiva.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Information We Collect</h2>
          <p>
            Photiva is designed with privacy at its core. We collect <strong className="text-foreground">minimal to no personal information</strong>:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>
              <strong className="text-foreground">Purchase information:</strong> If you purchase Photiva through the Mac App Store, Apple handles the
              transaction. We do not receive or store your payment details.
            </li>
            <li>
              <strong className="text-foreground">Crash reports (optional):</strong> If you opt in to Apple&apos;s crash reporting, anonymized diagnostic
              data may be shared with us through App Store Connect. This data does not contain personal information or
              photos.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Information We Do NOT Collect</h2>
          <p>Photiva does not:</p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Upload your photos, videos, contacts, or any personal files to any server</li>
            <li>Require an account, login, or registration</li>
            <li>Track your usage with analytics or telemetry</li>
            <li>Use cookies or third-party tracking tools</li>
            <li>Access the internet during normal operation</li>
            <li>Share any data with third parties</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Local Data Processing</h2>
          <p>
            All photo scanning, duplicate detection, organization, and compression happens entirely on your Mac. Your
            files never leave your device. Photiva reads your photo library metadata (file names, EXIF data, file sizes,
            timestamps) to perform its functions, but this data is processed locally and is not transmitted anywhere.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Secure Vault &amp; Encryption</h2>
          <p>
            The Secure Vault feature encrypts photos using AES-GCM 256-bit encryption. Encrypted files are stored
            locally on your Mac. Authentication is handled by macOS through Touch ID or your system password. We do not
            have access to your vault contents or encryption keys.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Contact Cleanup</h2>
          <p>
            The Contact Cleanup feature accesses your macOS Contacts database to find and merge duplicate entries. This
            data is processed locally. Contact information is never uploaded or shared.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Third-Party Services</h2>
          <p>
            Photiva is distributed exclusively through the Mac App Store. Apple&apos;s own privacy practices apply to
            the purchase and download process. We recommend reviewing{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Apple&apos;s Privacy Policy
            </a>{" "}
            for details on how they handle App Store transactions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Data Retention</h2>
          <p>
            Since we do not collect personal data, there is nothing to retain. Any local data generated by Photiva (scan
            results, organization history, rollback data) is stored on your Mac and can be deleted at any time by
            removing the application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Children&apos;s Privacy</h2>
          <p>
            Photiva does not knowingly collect any personal information from children under 13. Since we do not collect
            personal data from any users, this applies universally.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
            &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:support@photiva.app" className="text-accent hover:underline">
              support@photiva.app
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
