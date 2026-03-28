import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
    <html lang="en" data-theme="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1846756576038195&ev=PageView&noscript=1" alt="" />
        </noscript>
        <PostHogProvider>
          <Navbar />
          {children}
          <Footer />
        </PostHogProvider>
        {/* GA — afterInteractive so the initial pageview fires reliably. */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EZLYFY63MR" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EZLYFY63MR');
        `}</Script>
        {/* Meta Pixel — lazyOnload defers fbevents.js (~98 KiB) until the
            browser is fully idle, well after LCP. fbq() calls are safe
            because the stub queues them until fbevents.js resolves. */}
        <Script id="meta-pixel" strategy="lazyOnload">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','1846756576038195');
          fbq('track','PageView');
        `}</Script>
      </body>
    </html>
  );
}
