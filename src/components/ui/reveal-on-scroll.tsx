"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type RevealOnScrollProps = {
  children: React.ReactNode;
  delayMs?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
};

export function RevealOnScroll({
  children,
  delayMs = 0,
  y = 18,
  className,
  style,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition:
          "opacity 720ms cubic-bezier(.22,1,.36,1), transform 720ms cubic-bezier(.22,1,.36,1)",
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
