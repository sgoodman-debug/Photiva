import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
});

const outfit = localFont({
  src: "./fonts/outfit-latin.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "400 800",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://photiva.app"),
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
  title: {
    default: "Photiva | Mac Photo Cleaner",
    template: "%s | Photiva",
  },
  description:
    "Photiva is a macOS photo cleaner for duplicates, blurry photos, and Apple Photos organization with private on-device processing.",
  keywords: [
    "photo cleaner mac",
    "duplicate photo finder mac",
    "find blurry photos mac",
    "organize apple photos library",
    "mac photo cleaner",
    "photiva vs gemini 2",
  ],
  openGraph: {
    title: "Photiva | Mac Photo Cleaner",
    description:
      "Clean duplicates, blurry shots, and similar photos. Organize Apple Photos privately on-device.",
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
    title: "Photiva | Mac Photo Cleaner",
    description:
      "Clean duplicates, blurry shots, and similar photos. Organize Apple Photos privately on-device.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-EZLYFY63MR" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EZLYFY63MR');
        `}</Script>
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <PostHogProvider>
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
