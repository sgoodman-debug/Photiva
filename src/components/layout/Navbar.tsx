"use client";

import { useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  const { progress, scrolled } = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-150"
        style={{ width: `${progress * 100}%` }}
      />

      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 sm:px-6 h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg tracking-[-0.02em] text-foreground">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-accent">
            <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.15" />
            <path
              d="M10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="16" cy="16" r="2" fill="currentColor" />
          </svg>
          Photiva
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button as="a" href="#pricing" size="sm">
            Download Free Trial
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted hover:text-foreground hover:bg-surface transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button as="a" href="#pricing" size="sm" className="w-full">
                Download Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
