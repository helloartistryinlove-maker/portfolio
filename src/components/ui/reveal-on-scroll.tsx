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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const wrapperClassName = [className, isMounted ? "reveal animate" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={wrapperClassName}
      style={{
        ...style,
        opacity: 1,
        transform: "none",
        pointerEvents: "auto",
        transitionProperty: isMounted ? "opacity, transform" : undefined,
        transitionDuration: isMounted ? "720ms" : undefined,
        transitionTimingFunction: isMounted ? "cubic-bezier(.22,1,.36,1)" : undefined,
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
