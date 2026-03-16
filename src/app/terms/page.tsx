import type { Metadata } from "next";

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
      <p className="mt-2 text-sm text-muted">Last updated: March 2026</p>

      <p className="mt-6 text-muted leading-relaxed text-[15px]">
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the Photiva software application and
        website located at https://photiva.app (the &ldquo;Service&rdquo;), operated by Photiva.
      </p>
      <p className="mt-4 text-muted leading-relaxed text-[15px]">
        By downloading, installing, or using Photiva, you agree to these Terms. If you do not agree with these Terms,
        you must not use the software.
      </p>

      <div className="mt-10 space-y-10 text-muted leading-relaxed text-[15px]">

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">1. Description of the Service</h2>
          <p>
            Photiva is a macOS application designed to help users analyze, organize, and clean photo libraries. The
            software can detect duplicate images, blurry photos, similar photos, large files, and other media content
            to assist users in organizing and reclaiming storage space.
          </p>
          <p className="mt-3">
            Photiva may also provide optional features such as file organization, compression, metadata analysis, and
            file management tools.
          </p>
          <p className="mt-3">
            The application is provided as a productivity tool and does not guarantee specific results.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">2. License</h2>
          <p>
            When you purchase Photiva, you are granted a non-exclusive, non-transferable, revocable license to install
            and use the software on your personal devices in accordance with these Terms.
          </p>
          <p className="mt-3">You may not:</p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Copy, distribute, resell, sublicense, or commercially exploit the software</li>
            <li>Reverse engineer, decompile, or attempt to extract the source code</li>
            <li>Use the software to develop a competing product</li>
            <li>Remove or alter copyright notices or branding</li>
          </ul>
          <p className="mt-3">All rights not expressly granted remain the property of Photiva.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">3. Free Scan &amp; Paid Features</h2>
          <p>
            Photiva allows users to scan their photo libraries and preview results free of charge.
          </p>
          <p className="mt-3">
            Certain actions such as cleanup, deletion, organization, compression, and other advanced functionality
            require a paid license.
          </p>
          <p className="mt-3">Prices and availability of features may change at any time.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">4. User Responsibility</h2>
          <p>
            Photiva performs file operations such as identifying, moving, renaming, organizing, compressing, or
            deleting files.
          </p>
          <p className="mt-3">You are solely responsible for reviewing the results before performing any cleanup actions.</p>
          <p className="mt-3">
            Before using Photiva to modify or delete files, you should ensure that you have a current backup of your
            data.
          </p>
          <p className="mt-3">
            You acknowledge that file management operations can alter your file system and that you use the software
            at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">5. Backup Recommendation</h2>
          <p>
            Users are strongly encouraged to maintain a complete backup of their files and photo libraries before
            performing any cleanup, compression, or organization actions using Photiva.
          </p>
          <p className="mt-3">
            Photiva is not responsible for any loss of files, photographs, metadata, or data resulting from the use
            of the software.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">6. Data Processing &amp; Privacy</h2>
          <p>Photiva processes files locally on your device.</p>
          <p className="mt-3">
            Your photos, videos, and files are not uploaded to external servers as part of the core functionality of
            the application.
          </p>
          <p className="mt-3">Photiva does not require an account to analyze your photo library.</p>
          <p className="mt-3">
            For additional information about how data is handled, please review our{" "}
            <a href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">7. Safe Removal &amp; Undo Features</h2>
          <p>
            Photiva may provide safety features such as preview modes, rollback capabilities, and moving files to the
            system Trash instead of permanently deleting them.
          </p>
          <p className="mt-3">These features are provided as safeguards but do not guarantee recovery of files.</p>
          <p className="mt-3">Users remain responsible for verifying results before confirming any operation.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Photiva and its owners, developers, affiliates, partners, and
            distributors shall not be liable for any direct, indirect, incidental, consequential, or special damages
            arising from the use or inability to use the software.
          </p>
          <p className="mt-3">This includes but is not limited to:</p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Loss of photos</li>
            <li>Loss of files or data</li>
            <li>Corruption of files or metadata</li>
            <li>Changes to file structure or organization</li>
            <li>Loss of business, profits, or productivity</li>
          </ul>
          <p className="mt-3">
            The software is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without
            warranties of any kind.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">9. No Warranty</h2>
          <p>
            Photiva makes no guarantees regarding the accuracy, reliability, or effectiveness of duplicate detection,
            image similarity analysis, compression, or organization features.
          </p>
          <p className="mt-3">
            While the software is designed to operate safely, no software can guarantee error-free operation.
          </p>
          <p className="mt-3">Use of the software is entirely at your own risk.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">10. Refund Policy</h2>
          <p>
            Photiva offers a 30-day money-back guarantee for purchases made through our official payment provider.
          </p>
          <p className="mt-3">
            If you are not satisfied with the software, you may request a refund within 30 days of purchase.
          </p>
          <p className="mt-3">
            Refund requests must be submitted through the original payment provider or the official support contact
            listed on our website.
          </p>
          <p className="mt-3">
            Refund eligibility may depend on the policies of the payment processor used during purchase.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">11. Software Updates</h2>
          <p>Photiva may provide updates, bug fixes, and feature improvements.</p>
          <p className="mt-3">Updates may be installed automatically or made available for download.</p>
          <p className="mt-3">
            We reserve the right to modify, improve, or discontinue features of the software at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">12. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to the software if these Terms are violated.
          </p>
          <p className="mt-3">Upon termination, the license granted to you will immediately cease.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">13. Third-Party Technologies</h2>
          <p>
            Photiva may use third-party frameworks, libraries, or technologies provided by Apple or other vendors.
          </p>
          <p className="mt-3">These components may be governed by their own licenses.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">14. Changes to These Terms</h2>
          <p>We may update these Terms from time to time.</p>
          <p className="mt-3">
            If changes are made, the updated version will be published on our website with a revised &ldquo;Last
            updated&rdquo; date.
          </p>
          <p className="mt-3">
            Continued use of the software after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">15. Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with the laws applicable in the
            jurisdiction where Photiva operates, without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">16. Contact</h2>
          <p>
            If you have questions about these Terms, please contact:{" "}
            <a href="mailto:support@photiva.app" className="text-accent hover:underline">
              support@photiva.app
            </a>
          </p>
        </section>

      </div>
    </main>
  );
}
