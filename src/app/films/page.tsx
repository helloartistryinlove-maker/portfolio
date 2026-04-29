"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─── Film data ──────────────────────────────────────────── */

const videos = [
  { id: "v1", title: "Israa & Faizan", location: "Wedding Trailer 2025", src: "/wedding-trailer.mp4", poster: "/testimonial.jpg" },
  { id: "v2", title: "Cinematic Collection I", location: "Selected Works", src: "/wedding-trailer.mp4", poster: "/testimonial.jpg" },
  { id: "v3", title: "Cinematic Collection II", location: "Selected Works", src: "/wedding-trailer.mp4", poster: "/testimonial.jpg" },
  { id: "v4", title: "The Art of Love", location: "Signature Film", src: "/wedding-trailer.mp4", poster: "/testimonial.jpg" },
];

/* ─── Play Button SVG ────────────────────────────────────── */
function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      style={{ width: 64, height: 64 }}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="31" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
      <polygon points="26,20 48,32 26,44" fill="rgba(255,255,255,0.95)" />
    </svg>
  );
}

/* ─── Interactive Video Block ────────────────────────────── */
function InteractiveVideo({ src, poster, title, location, index = 0 }: { src: string; poster: string; title: string; location: string; index?: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const webmSrc = src.replace(/\.mp4$/i, ".webm");

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "120px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad) {
      videoRef.current?.load();
    }
  }, [shouldLoad]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div ref={wrapperRef} className="video-block-container fade-in-section" style={{ marginBottom: "clamp(40px, 8vw, 80px)", transitionDelay: `${(index % 4) * 0.1}s` }}>
      <div 
        className="video-wrapper"
        onClick={!isPlaying ? handlePlay : undefined}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          background: "linear-gradient(180deg, #4a372c 0%, #2d231c 100%)",
          cursor: !isPlaying ? "pointer" : "default",
          overflow: "hidden",
          borderRadius: "2px",
        }}
      >
        <video
          ref={videoRef}
          preload="none"
          muted
          playsInline
          poster={poster}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          controls={isPlaying}
        >
          {shouldLoad ? (
            <>
              <source src={webmSrc} type="video/webm" />
              <source src={src} type="video/mp4" />
            </>
          ) : null}
        </video>
        
        {!isPlaying && (
          <div 
            className="video-overlay"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(45,35,28,0.2)",
              transition: "background 0.4s ease",
            }}
          >
            <div className="play-btn-wrapper" style={{ transform: "scale(1)", transition: "transform 0.3s ease" }}>
              <PlayIcon />
            </div>
          </div>
        )}
      </div>
      
      <div style={{ marginTop: 24 }}>
        <p
          style={{
            fontFamily: "var(--font-sans,'Manrope',sans-serif)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text-muted,#747878)",
            marginBottom: 8,
          }}
        >
          {location}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-serif,'Noto Serif',serif)",
            fontSize: "clamp(1.25rem, 3vw, 28px)",
            fontWeight: 400,
            lineHeight: 1.3,
            color: "var(--text-primary)",
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function FilmsPage() {
  return (
    <>
      <style>{`
        .films-page {
          background: var(--bg);
          color: var(--text-primary);
          min-height: 100vh;
        }

        .video-wrapper:hover .video-overlay {
          background: rgba(45,35,28,0.48) !important;
        }
        
        .video-wrapper:hover .play-btn-wrapper {
          transform: scale(1.1) !important;
        }

        /* Grid layout */
        .video-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(24px, 5vw, 60px);
          padding-inline: clamp(16px, 5vw, 40px);
          max-width: 1320px;
          margin: 0 auto 160px;
        }

        @media (min-width: 768px) {
          .video-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Reveal animation */
        @keyframes filmRise {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .reveal { animation: filmRise 0.8s cubic-bezier(.22,1,.36,1) both; }

        /* Film reel strip accent */
        .reel-strip {
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.35;
          pointer-events: none;
          user-select: none;
        }
        .reel-hole {
          width: 7px; height: 10px;
          border: 1px solid var(--text-primary);
          flex-shrink: 0;
        }
      `}</style>

      <div className="films-page">

        {/* ── 1. HERO ──────────────────────────────────────────── */}
        <section className="fade-in-section" style={{ paddingInline: "clamp(16px, 5vw, 40px)", paddingBlock: "clamp(60px, 10vw, 120px)" }}>
          <div style={{ maxWidth: 1320, marginInline: "auto" }}>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(12, minmax(0,1fr))", gap: "clamp(12px, 3vw, 24px)" }}>
              <div className="reveal" style={{ gridColumn: "span 12" }}>
                <h1
                  style={{
                    fontFamily: "var(--font-serif,'Noto Serif',serif)",
                    fontSize: "clamp(2.5rem, 6vw, 64px)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: "var(--text-primary)",
                    marginBottom: "clamp(24px, 4vw, 40px)",
                    maxWidth: 760,
                  }}
                >
                  Cinematic Stories
                  <br />
                  <em>Told with Intention</em>
                </h1>

                <p
                  style={{
                    fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                    fontSize: "clamp(1rem, 2.5vw, 18px)",
                    lineHeight: 1.6,
                    color: "var(--text-secondary)",
                    maxWidth: 540,
                  }}
                >
                  Capturing the quiet moments and grand celebrations through an editorial lens.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="video-grid">
          {videos.map((video, index) => (
            <InteractiveVideo 
              key={video.id}
              src={video.src}
              poster={video.poster}
              title={video.title}
              location={video.location}
              index={index}
            />
          ))}
        </div>

      </div>
    </>
  );
}
