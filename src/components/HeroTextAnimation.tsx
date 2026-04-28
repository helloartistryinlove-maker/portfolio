"use client";

import { useEffect, useState } from "react";

export function HeroTextAnimation() {
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    // Wait 2.5 seconds before transitioning to the full text
    const timer = setTimeout(() => {
      setShowFull(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Initial "AIL" Text */}
        <h1
          style={{
            fontFamily: "var(--font-serif, 'Noto Serif', serif)",
            fontSize: "clamp(4rem, 12vw, 160px)",
            color: "rgba(255, 248, 242, 0.95)",
            position: "absolute",
            fontWeight: 400,
            letterSpacing: "0.05em",
            margin: 0,
            opacity: showFull ? 0 : 1,
            transform: showFull ? "scale(0.95)" : "scale(1)",
            filter: showFull ? "blur(10px)" : "blur(0px)",
            transition: "opacity 0.8s ease, transform 0.8s ease, filter 0.8s ease",
            animation: "fade-in-up 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
          }}
        >
          AIL
        </h1>

        {/* Full "Artistry In Love" Text */}
        {showFull && (
          <h1
            style={{
              fontFamily: "var(--font-serif, 'Noto Serif', serif)",
              fontSize: "clamp(2.5rem, 7vw, 100px)",
              color: "rgba(255, 248, 242, 0.95)",
              position: "absolute",
              fontWeight: 400,
              margin: 0,
              whiteSpace: "nowrap",
              animation: "letter-expand 2s cubic-bezier(0.25, 1, 0.5, 1) forwards",
            }}
          >
            Artistry In Love
          </h1>
        )}
      </div>
    </div>
  );
}
