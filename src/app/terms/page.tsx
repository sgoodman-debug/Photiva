import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Photiva",
  description:
    "Photiva Terms and Conditions. Read about the terms governing your use of the Photiva macOS application.",
  alternates: {
    canonical: "https://photiva.app/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-[800px] px-5 sm:px-6 py-24">
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: February 27, 2026</p>

      <div className="mt-10 space-y-10 text-muted leading-relaxed text-[15px]">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using Photiva (&ldquo;the App&rdquo;), you agree to be bound by these Terms
            and Conditions (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">License Grant</h2>
          <p>
            Upon purchase, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use
            Photiva on any Mac computers that you own or control, for personal or internal business use. This is a
            one-time purchase license with no recurring fees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Restrictions</h2>
          <p>You agree not to:</p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Copy, modify, distribute, sell, or lease any part of the App</li>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Use the App for any unlawful purpose</li>
            <li>Remove or alter any proprietary notices or labels on the App</li>
            <li>Use the App to process data you do not have the right to access</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Intellectual Property</h2>
          <p>
            Photiva, including its code, design, features, and documentation, is the intellectual property of Photiva
            and is protected by copyright and other intellectual property laws. Your purchase grants a license to use the
            App, not ownership of the underlying software.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Your Data</h2>
          <p>
            You retain full ownership of all photos, videos, contacts, and other files processed by Photiva. The App
            operates entirely on your device and does not upload, transmit, or store your data on any external server.
            For more details, please review our{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Disclaimer of Warranties</h2>
          <p>
            Photiva is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind,
            either express or implied. We do not warrant that the App will be uninterrupted, error-free, or free of
            harmful components. While Photiva includes safety features such as Trash-based deletion and 30-day rollback,
            we recommend maintaining independent backups of important files.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Photiva and its developers shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data,
            loss of profits, or loss of use, arising out of or related to your use of the App.
          </p>
          <p className="mt-3">
            In no event shall our total liability exceed the amount you paid for the App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Updates &amp; Modifications</h2>
          <p>
            We may release updates to the App from time to time. Updates may include bug fixes, new features, or changes
            to existing functionality. We are not obligated to provide updates, but we strive to improve the App
            continuously. We reserve the right to modify these Terms at any time. Continued use of the App following any
            changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Termination</h2>
          <p>
            We may terminate or suspend your license to use Photiva if you violate these Terms. Upon termination, you
            must cease all use of the App and delete all copies from your devices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Australia, without regard to
            its conflict of law provisions. Any disputes arising from these Terms or your use of the App shall be
            resolved in the courts of Australia.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
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
