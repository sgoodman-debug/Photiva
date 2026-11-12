"use client";

import { type ButtonHTMLAttributes, type MouseEvent } from "react";
import { withCheckoutSource } from "@/lib/attribution";

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: Record<string, string | number | boolean | undefined>) => void;
    fbq?: (
      action: "track" | "trackCustom",
      eventName: string,
      params?: Record<string, string | number | boolean | undefined>
    ) => void;
  }
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  trackingLocation?: string;
}

const variantClasses = {
  primary:
    "bg-cta text-cta-foreground hover:bg-cta-hover shadow-lg shadow-cta/25 hover:shadow-cta/40",
  secondary:
    "border-2 border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-foreground/40",
  ghost:
    "text-muted hover:text-foreground hover:bg-surface",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  as = "button",
  href,
  trackingLocation,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-display font-semibold tracking-[-0.01em] transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  function trackClick(e: MouseEvent) {
    const label = (e.currentTarget as HTMLElement).textContent?.trim() || "";
    const destination = href || undefined;
    const isPurchase = destination?.includes("store.appiva.app/checkout/buy") ?? false;
    const isDirectDownload = destination?.includes("/Photiva.dmg") ?? false;
    const isDownloadPage = destination === "/download" || destination?.endsWith("/download");
    const eventName = isPurchase
      ? "purchase_clicked"
      : isDirectDownload || isDownloadPage
        ? "download_clicked"
        : "cta_clicked";

    import("posthog-js").then(({ default: posthog }) => {
      posthog.capture(eventName, {
        label,
        href: destination,
        variant,
        location: trackingLocation,
        destination_type: isPurchase
          ? "checkout"
          : isDirectDownload
            ? "dmg_download"
            : isDownloadPage
              ? "download_page"
              : "other",
      }, {
        transport: "sendBeacon",
      });
    });

    // Pass the visitor's source to Lemon Squeezy so the order records it.
    if (isPurchase && destination && e.currentTarget instanceof HTMLAnchorElement) {
      e.currentTarget.href = withCheckoutSource(destination);
    }

    // GA4 events, imported into Google Ads and Microsoft Ads as conversions.
    // photiva_download fires only for the actual app download, not for links
    // to the /download page.
    if (typeof window !== "undefined" && window.gtag) {
      if (isDirectDownload) {
        window.gtag("event", "photiva_download", { location: trackingLocation, transport_type: "beacon" });
      } else if (isPurchase) {
        window.gtag("event", "begin_checkout", {
          currency: "USD",
          value: 29.99,
          location: trackingLocation,
          transport_type: "beacon",
        });
        window.gtag("event", "conversion", {
          send_to: "AW-18562960603/TFT0CLGCnbQdENuZwZNF",
          currency: "USD",
          value: 29.99,
          transport_type: "beacon",
        });
      }
    }

    if (typeof window !== "undefined" && window.fbq) {
      const metaPayload = {
        content_name: label,
        destination_url: destination,
        location: trackingLocation,
      };

      if (isPurchase) {
        window.fbq("track", "InitiateCheckout", metaPayload);
      } else if (isDirectDownload || isDownloadPage) {
        window.fbq("trackCustom", "DownloadClicked", {
          ...metaPayload,
          destination_type: isDirectDownload ? "dmg_download" : "download_page",
        });
      }
    }
  }

  if (as === "a" && href) {
    return (
      <a href={href} className={classes} onClick={trackClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={(e) => { trackClick(e); props.onClick?.(e); }} {...props}>
      {children}
    </button>
  );
}
