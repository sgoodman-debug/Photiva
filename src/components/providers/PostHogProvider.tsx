"use client";

import { useEffect } from "react";
import { captureVisitSource } from "@/lib/attribution";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Record UTM tags, ad click IDs or the referring site on the landing page,
    // so a later checkout can be credited to the right channel.
    captureVisitSource();

    const load = () => {
      import("posthog-js").then(({ default: posthog }) => {
        posthog.init("phc_n8y2qS4p1Qxv4B4ifODV93YoN2ZCofLFo5nkLkDcwIN", {
          api_host: "https://us.i.posthog.com",
          capture_pageview: true,
          capture_pageleave: true,
          // Prevents PostHog from auto-fetching surveys.js (~32 KiB) on init.
          disable_surveys: true,
        });
      });
    };

    // Defer until the browser is idle so PostHog doesn't compete with LCP.
    // Safari doesn't support requestIdleCallback — fall back to a 2 s delay.
    if ("requestIdleCallback" in window) {
      requestIdleCallback(load, { timeout: 4000 });
    } else {
      setTimeout(load, 2000);
    }
  }, []);

  return <>{children}</>;
}
