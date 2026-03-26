"use client";

import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import("posthog-js").then(({ default: posthog }) => {
      posthog.init("phc_n8y2qS4p1Qxv4B4ifODV93YoN2ZCofLFo5nkLkDcwIN", {
        api_host: "https://us.i.posthog.com",
        capture_pageview: true,
        capture_pageleave: true,
      });
    });
  }, []);

  return <>{children}</>;
}
