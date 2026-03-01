import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display font-bold text-lg tracking-[-0.02em] text-foreground mb-3">
              <Image src="/app-icon.png" alt="Photiva" width={28} height={28} className="rounded-lg" />
              Photiva
            </div>
            <p className="text-sm text-muted max-w-sm">
              The most comprehensive photo library cleaner for Mac. One-time purchase. No subscription.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/#features" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/#faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Guides</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/guides/remove-duplicate-photos-mac" className="hover:text-foreground transition-colors">Remove duplicate photos on Mac</Link></li>
              <li><Link href="/guides/find-blurry-photos-mac" className="hover:text-foreground transition-colors">Find blurry photos on Mac</Link></li>
              <li><Link href="/guides/organize-apple-photos-library" className="hover:text-foreground transition-colors">Organize Apple Photos library</Link></li>
              <li><Link href="/guides/mac-photo-cleaner" className="hover:text-foreground transition-colors">Mac photo cleaner guide</Link></li>
              <li><Link href="/guides/photiva-vs-gemini" className="hover:text-foreground transition-colors">Photiva vs Gemini 2</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms &amp; Conditions</Link></li>
              <li><a href="mailto:support@photiva.app" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Photiva. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Requires macOS 14 Sonoma or later. Universal app. Apple Silicon &amp; Intel.
          </p>
        </div>
      </div>
    </footer>
  );
}
