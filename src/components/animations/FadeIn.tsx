"use client";
import { useRef, useState, useEffect } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const keyframeMap: Record<Direction, string> = {
  up: "fade-in-up",
  down: "fade-in-down",
  left: "fade-in-from-right",
  right: "fade-in-from-left",
  none: "fade-in-up",
};

interface FadeInProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-80px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={
        visible
          ? { animation: `${keyframeMap[direction]} ${duration}s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}s both` }
          : { opacity: 0 }
      }
      className={className}
    >
      {children}
    </div>
  );
}
