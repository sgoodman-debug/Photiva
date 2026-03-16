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
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the Photiva software application and the
        website located at https://photiva.app (the &ldquo;Service&rdquo;), operated by Photiva.
      </p>
      <p className="mt-4 text-muted leading-relaxed text-[15px]">
        By downloading, installing, accessing, or using Photiva, you agree to be bound by these Terms. If you do not
        agree to these Terms, you must not use the software.
      </p>

      <div className="mt-10 space-y-10 text-muted leading-relaxed text-[15px]">

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">1. Description of the Service</h2>
          <p>
            Photiva is a macOS application designed to analyze, organize, and clean photo libraries. The software
            identifies duplicate photos, blurry images, similar photos, large files, and other media that may help
            users reclaim storage space and organize their photo collections.
          </p>
          <p className="mt-3">
            Features may include duplicate detection, photo comparison, compression, organization, metadata analysis,
            and file management tools.
          </p>
          <p className="mt-3">
            The software is intended as a productivity tool and does not guarantee specific results.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">2. License</h2>
          <p>
            When you purchase Photiva, you are granted a limited, non-exclusive, non-transferable, revocable license
            to install and use the software on your personal devices in accordance with these Terms.
          </p>
          <p className="mt-3">You may not:</p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Copy, distribute, sublicense, or resell the software</li>
            <li>Reverse engineer, decompile, or attempt to extract the source code</li>
            <li>Modify the software to create a competing product</li>
            <li>Remove copyright notices, branding, or proprietary markings</li>
          </ul>
          <p className="mt-3">All rights not expressly granted remain the property of Photiva.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">3. Free Scan &amp; Paid Features</h2>
          <p>Photiva allows users to scan and preview results from their photo libraries free of charge.</p>
          <p className="mt-3">
            Certain actions such as deleting files, organizing folders, compressing media, and performing automated
            cleanup require a paid license.
          </p>
          <p className="mt-3">Prices and features may change at any time.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">4. User Responsibility</h2>
          <p>
            Photiva performs file operations that may modify your file system. These operations may include
            identifying, moving, renaming, compressing, or deleting files.
          </p>
          <p className="mt-3">
            Before performing any operation, users must review the results and confirm the intended changes.
          </p>
          <p className="mt-3">
            You acknowledge that you are solely responsible for verifying all actions before execution.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">5. Backup Responsibility</h2>
          <p>
            Users are strongly encouraged to maintain a current backup of all important files and photo libraries
            before using Photiva.
          </p>
          <p className="mt-3">
            Photiva is not responsible for any loss of files, photos, metadata, or data resulting from the use of
            the software.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">6. File Operations &amp; Risk Acknowledgement</h2>
          <p>
            By using Photiva, you acknowledge that operations such as file deletion, compression, or reorganization
            may alter your file system and may result in unintended file changes.
          </p>
          <p className="mt-3">
            Although Photiva includes safety features such as previews, rollback capabilities, and Trash-based
            deletion, these features do not guarantee recovery of files.
          </p>
          <p className="mt-3">Use of the software is entirely at your own risk.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">7. Data Processing</h2>
          <p>Photiva processes photos and files locally on your device.</p>
          <p className="mt-3">
            The application does not upload photos or scan results to external servers as part of its core
            functionality.
          </p>
          <p className="mt-3">No account is required to use Photiva.</p>
          <p className="mt-3">
            For more information about how data is handled, please review the{" "}
            <a href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </a>
            .
          </p>
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
            <li>Corruption of metadata</li>
            <li>File organization changes</li>
            <li>Loss of productivity</li>
            <li>Loss of business or revenue</li>
          </ul>
          <p className="mt-3">
            In no event shall Photiva&apos;s total liability exceed the amount paid for the software.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">9. No Warranty</h2>
          <p>
            Photiva is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties
            of any kind.
          </p>
          <p className="mt-3">
            We do not guarantee that the software will be error-free, uninterrupted, or suitable for every photo
            library configuration.
          </p>
          <p className="mt-3">
            Duplicate detection, visual similarity analysis, and compression features may not produce perfect results.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">10. Refund Policy</h2>
          <p>
            Photiva offers a 30-day money-back guarantee for purchases made through our official payment provider.
          </p>
          <p className="mt-3">
            Refund requests must be submitted within 30 days of purchase through the original payment provider or
            via our support contact.
          </p>
          <p className="mt-3">Refund eligibility may depend on the policies of the payment processor.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">11. Software Updates</h2>
          <p>Photiva may release updates, improvements, or bug fixes from time to time.</p>
          <p className="mt-3">We reserve the right to modify or discontinue features without prior notice.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">12. Third-Party Technologies</h2>
          <p>
            Photiva may use third-party frameworks, Apple technologies, or open-source libraries.
          </p>
          <p className="mt-3">These components may be governed by their respective licenses.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">13. Termination</h2>
          <p>
            We reserve the right to terminate or restrict use of the software if these Terms are violated.
          </p>
          <p className="mt-3">Upon termination, the license granted to you will immediately cease.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">14. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Updated versions will be published on our website with a
            revised &ldquo;Last updated&rdquo; date.
          </p>
          <p className="mt-3">Continued use of the software constitutes acceptance of the updated Terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">15. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws applicable in the jurisdiction where Photiva operates, without
            regard to conflict of law principles.
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
