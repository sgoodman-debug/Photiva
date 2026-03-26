"use client";

import { useState, useEffect, useRef } from "react";

export function useScrollProgress() {
  const [scrolled, setScrolled] = useState(false);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      // Update progress bar directly — no React re-render on every scroll tick
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }

      // Only re-render Navbar when crossing the scroll threshold
      setScrolled((prev) => {
        const nowScrolled = scrollTop > 50;
        return prev === nowScrolled ? prev : nowScrolled;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { progressBarRef, scrolled };
}
