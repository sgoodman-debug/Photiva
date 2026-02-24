import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Photiva — The Most Comprehensive Photo Library Cleaner for Mac",
  description:
    "Remove duplicates, organize your library, compress photos & videos, and protect sensitive images — all on-device. One-time purchase. No subscription.",
  keywords: [
    "photo cleaner mac",
    "duplicate photo finder",
    "photo organizer mac",
    "photo library cleanup",
    "macos photo app",
    "remove duplicate photos",
  ],
  openGraph: {
    title: "Photiva — Clean Up Your Mac Photo Library",
    description:
      "Remove duplicates, organize your library, compress photos & videos — all on-device. One-time purchase.",
    url: "https://photiva.app",
    siteName: "Photiva",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Photiva app dashboard" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photiva — Clean Up Your Mac Photo Library",
    description:
      "Remove duplicates, organize your library, compress photos & videos — all on-device. One-time purchase.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Photiva",
  operatingSystem: "macOS",
  applicationCategory: "UtilitiesApplication",
  description:
    "The most comprehensive photo library cleaner for Mac. Remove duplicates, organize, compress, and protect your photos.",
  offers: {
    "@type": "Offer",
    price: "29.99",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
