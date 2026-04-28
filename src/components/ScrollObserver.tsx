"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || reducedMotionQuery.matches) {
          entry.target.classList.add("fade-in-visible");
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Timeout allows DOM to update after client-side route changes
    const timeoutId = setTimeout(() => {
      const fadeElements = document.querySelectorAll(".fade-in-section:not(.fade-in-visible)");
      fadeElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
