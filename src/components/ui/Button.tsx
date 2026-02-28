import { type ButtonHTMLAttributes, type MouseEvent } from "react";
import posthog from "posthog-js";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
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
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-display font-semibold tracking-[-0.01em] transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  function trackClick(e: MouseEvent) {
    const label = (e.currentTarget as HTMLElement).textContent?.trim() || "";
    posthog.capture("cta_clicked", {
      label,
      href: href || undefined,
      variant,
    });
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
