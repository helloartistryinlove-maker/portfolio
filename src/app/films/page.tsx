"use client";

import { useRef, useState } from "react";
import Link from "next/link";

/* ─── Film data ──────────────────────────────────────────── */

const featured = [
  {
    id: "f1",
    location: "PROVENCE, FRANCE",
    title: "Julianne & Matteo",
    duration: "04:22",
    alt: "Cinematic shot of a couple walking through a golden sunlit field at dusk, soft warm tones and lens flare",
  },
  {
    id: "f2",
    location: "LAKE COMO, ITALY",
    title: "Sophia & Alexander",
    duration: "05:45",
    alt: "Elegant indoor wedding reception with long tables, tall candles, and soft ambient lighting in a historic European villa",
  },
  {
    id: "f3",
    location: "NEW YORK CITY",
    title: "The Sterling Wedding",
    duration: "03:15",
    alt: "Close-up of a bride's hands holding a delicate bouquet of white peonies against a silk dress backdrop",
  },
  {
    id: "f4",
    location: "KYOTO, JAPAN",
    title: "Hana & Kenji",
    duration: "06:10",
    alt: "Bride and groom in traditional attire standing in a bamboo forest with soft diffused morning light",
  },
];

type FilterKey = "all" | "short" | "feature" | "editorial";

const filters: { key: FilterKey; label: string }[] = [
  { key: "all",       label: "All Films" },
  { key: "short",     label: "Cinematic Shorts" },
  { key: "feature",   label: "Feature Length" },
  { key: "editorial", label: "Editorial" },
];

const archives = [
  {
    id: "a1",
    type: "short" as FilterKey,
    category: "Short Film",
    title: "Marcus & Elara: Venice After Dark",
    aspect: "4/5",
    cols: "md:col-span-7",
    offset: "",
    alt: "Editorial portrait of a groom in a classic tuxedo sitting in a vintage velvet chair with moody lighting",
  },
  {
    id: "a2",
    type: "editorial" as FilterKey,
    category: "Editorial",
    title: "Shadows & Silk",
    aspect: "3/4",
    cols: "md:col-span-4 md:col-start-9",
    offset: "md:mt-[80px]",
    alt: "Blurry aesthetic shot of a wedding dress hanging in a grand window with soft morning light pouring in",
  },
  {
    id: "a3",
    type: "feature" as FilterKey,
    category: "Feature Film",
    title: "The Highland Vows",
    aspect: "21/9",
    cols: "md:col-span-12",
    offset: "",
    alt: "Wide cinematic landscape of the Scottish highlands with a small white chapel in the distance under a dramatic sky",
    hasViewStory: true,
  },
  {
    id: "a4",
    type: "short" as FilterKey,
    category: "Cinematic Short",
    title: "Lydia & Thomas in Seville",
    aspect: "1/1",
    cols: "md:col-span-5",
    offset: "",
    alt: "Top-down shot of a couple dancing in the middle of a stone courtyard surrounded by flower petals",
  },
  {
    id: "a5",
    type: "editorial" as FilterKey,
    category: "Editorial Collection",
    title: "Monochrome Love",
    aspect: "16/10",
    cols: "md:col-span-6 md:col-start-7",
    offset: "",
    alt: "Black and white shot of wedding rings resting on a textured linen surface with sharp shadows",
  },
];

/* ─── Play Button SVG ────────────────────────────────────── */
function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      style={{ width: 56, height: 56 }}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="31" stroke="rgba(255,255,255,0.75)" strokeWidth="1" />
      <polygon points="26,20 48,32 26,44" fill="rgba(255,255,255,0.9)" />
    </svg>
  );
}

/* ─── Black media placeholder ────────────────────────────── */
function BlackPlaceholder({
  aspect,
  alt,
  showPlay = true,
}: {
  aspect: string;
  alt: string;
  showPlay?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      style={{
        aspectRatio: aspect.replace("/", " / "),
        background: "#0d0d0d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      {/* subtle film-grain texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(80,70,50,.13), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {showPlay && (
        <div
          style={{
            position: "relative",
            zIndex: 1,
            opacity: 0.7,
            transition: "opacity 0.4s, transform 0.4s",
          }}
          className="play-icon-wrap"
        >
          <PlayIcon />
        </div>
      )}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function FilmsPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  function scrollLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth * 0.8, behavior: "smooth" });
    }
  }
  function scrollRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth * 0.8, behavior: "smooth" });
    }
  }

  const visible = archives.filter(
    (f) => activeFilter === "all" || f.type === activeFilter
  );

  return (
    <>
      <style>{`
        /* ── Films page scoped styles ── */
        .films-page {
          background: var(--bg, #fbf9f4);
          color: var(--text-primary, #1b1c19);
        }

        /* Cinematic scroller */
        .cin-scroll {
          display: flex;
          overflow-x: auto;
          gap: clamp(12px, 3vw, 24px);
          padding-inline: clamp(16px, 5vw, 40px);
          scroll-snap-type: x mandatory;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .cin-scroll::-webkit-scrollbar { display: none; }

        .cin-card {
          flex: 0 0 clamp(85vw, 90vw, 640px);
          scroll-snap-align: start;
          cursor: pointer;
        }
        @media (min-width: 640px) { 
          .cin-card { flex: 0 0 45vw; } 
        }
        @media (min-width: 1024px) { 
          .cin-card { flex: 0 0 45vw; max-width: 640px; } 
        }

        /* Play hover */
        .film-thumb { position: relative; overflow: hidden; }
        .film-thumb img { transition: transform 1s cubic-bezier(.22,1,.36,1); }
        .film-thumb:hover img { transform: scale(1.05); }
        .film-thumb .play-overlay {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.15);
          opacity: 0; transition: opacity 0.5s;
        }
        .film-thumb:hover .play-overlay,
        .cin-card:hover .play-overlay { opacity: 1; }

        .play-icon-wrap { transition: opacity 0.4s, transform 0.4s; }
        .film-thumb:hover .play-icon-wrap { opacity: 1 !important; transform: scale(1.08); }

        /* Archive grid item hover */
        .archive-item { cursor: pointer; }
        .archive-item .film-thumb img,
        .archive-item .film-thumb .play-overlay {
          transition: transform 0.7s cubic-bezier(.22,1,.36,1), opacity 0.5s;
        }
        .archive-item:hover .film-thumb img { transform: scale(1.05); }
        .archive-item:hover .film-thumb .play-overlay { opacity: 1; }

        /* Filter tabs */
        .filter-btn {
          font-family: var(--font-sans, 'Manrope', sans-serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: none;
          border: none;
          border-bottom: 1px solid transparent;
          padding: 0 0 4px;
          cursor: pointer;
          color: var(--text-muted, #747878);
          white-space: nowrap;
          transition: color 0.3s, border-color 0.3s;
        }
        .filter-btn.active {
          color: var(--text-primary, #1b1c19);
          border-bottom-color: var(--text-primary, #1b1c19);
        }
        .filter-btn:hover { color: var(--text-primary, #1b1c19); }

        /* Arrow nav buttons */
        .arrow-btn {
          width: clamp(36px, 8vw, 48px); 
          height: clamp(36px, 8vw, 48px);
          display: flex; 
          align-items: center; 
          justify-content: center;
          border: 1px solid var(--outline, #747878);
          background: transparent;
          cursor: pointer;
          transition: background 0.3s;
          border-radius: 0;
          -webkit-tap-highlight-color: transparent;
          min-width: 36px;
          min-height: 36px;
        }
        .arrow-btn:hover { background: var(--bg-container, #f0eee9); }
        .arrow-btn svg { width: clamp(16px, 4vw, 20px); height: clamp(16px, 4vw, 20px); stroke: var(--text-primary, #1b1c19); fill: none; }

        /* Archive grid */
        .archive-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(24px, 4vw, 24px);
          row-gap: clamp(40px, 8vw, 80px);
          align-items: start;
        }
        @media (min-width: 768px) {
          .archive-grid {
            grid-template-columns: repeat(12, minmax(0, 1fr));
            gap: 24px;
            row-gap: 80px;
          }
        }
        .archive-grid > * { grid-column: 1 / -1 !important; grid-column-start: auto !important; margin-top: 0 !important; }
        @media (min-width: 768px) {
          .gc-7  { grid-column: span 7 !important; }
          .gc-4  { grid-column: 9 / span 4 !important; }
          .gc-12 { grid-column: span 12 !important; }
          .gc-5  { grid-column: span 5 !important; }
          .gc-6  { grid-column: 7 / span 6 !important; }
        }

        /* Grid column helpers */
        .gc-7  { grid-column: span 7; }
        .gc-4  { grid-column: 9 / span 4; }
        .gc-12 { grid-column: span 12; }
        .gc-5  { grid-column: span 5; }
        .gc-6  { grid-column: 7 / span 6; }

        /* CTA section */
        .cta-border-box {
          border: 1px solid var(--outline, #747878);
          text-align: center;
          padding: clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px);
          background: var(--bg, #fbf9f4);
        }

        /* Section spacing */
        .stack-xl { margin-bottom: clamp(80px, 12vw, 160px); }
        .stack-lg { margin-bottom: clamp(40px, 8vw, 80px); }
        .stack-md { margin-bottom: clamp(24px, 4vw, 40px); }
        .stack-sm { margin-bottom: clamp(12px, 2vw, 20px); }

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
          border: 1px solid var(--text-primary, #1b1c19);
          border-radius: 0;
          flex-shrink: 0;
        }

        /* Reveal animation */
        @keyframes filmRise {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .reveal { animation: filmRise 0.8s cubic-bezier(.22,1,.36,1) both; }
        .reveal-d1 { animation-delay: 0.1s; }
        .reveal-d2 { animation-delay: 0.2s; }
        .reveal-d3 { animation-delay: 0.3s; }
      `}</style>

      <div className="films-page">

        {/* ── 1. HERO ──────────────────────────────────────────── */}
        <section style={{ paddingInline: "clamp(16px, 5vw, 40px)", marginBottom: "clamp(80px, 12vw, 160px)" }}>
          <div style={{ maxWidth: 1320, marginInline: "auto" }}>

            {/* Film reel accent */}
            <div className="reel-strip" style={{ marginBottom: "clamp(16px, 3vw, 28px)" }} aria-hidden="true">
              {Array.from({ length: 18 }).map((_, i) => (
                <span key={i} className="reel-hole" />
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(12, minmax(0,1fr))", gap: "clamp(12px, 3vw, 24px)" }}>
              <div
                className="reveal"
                style={{ gridColumn: "span 12" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-muted,#747878)",
                    display: "block",
                    marginBottom: "clamp(12px, 2vw, 20px)",
                  }}
                >
                  Our Portfolio
                </span>

                <h1
                  style={{
                    fontFamily: "var(--font-serif,'Noto Serif',serif)",
                    fontSize: "clamp(2rem, 6vw, 64px)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: "var(--text-primary,#1b1c19)",
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
                    color: "var(--text-secondary,#5e5e5e)",
                    maxWidth: 540,
                  }}
                >
                  We capture the quiet moments, the unspoken promises, and the grand
                  celebrations through an editorial lens that honors the artistry of
                  your connection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. FEATURED COLLECTIONS SCROLLER ────────────────── */}
        <section style={{ marginBottom: "clamp(80px, 12vw, 160px)" }}>

          {/* Header */}
          <div
            style={{
              paddingInline: "clamp(16px, 5vw, 40px)",
              maxWidth: 1320,
              marginInline: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "clamp(24px, 4vw, 40px)",
              flexWrap: "wrap",
              gap: "clamp(12px, 2vw, 16px)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif,'Noto Serif',serif)",
                fontSize: "clamp(1.5rem, 4vw, 40px)",
                fontWeight: 400,
                lineHeight: 1.2,
                fontStyle: "italic",
              }}
            >
              Featured Collections
            </h2>
            <div style={{ display: "flex", gap: "clamp(8px, 2vw, 12px)" }}>
              <button className="arrow-btn" onClick={scrollLeft} aria-label="Scroll left">
                <svg viewBox="0 0 24 24" strokeWidth="1.5"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button className="arrow-btn" onClick={scrollRight} aria-label="Scroll right">
                <svg viewBox="0 0 24 24" strokeWidth="1.5"><polyline points="9 6 15 12 9 18" /></svg>
              </button>
            </div>
          </div>

          {/* Horizontal scroll */}
          <div ref={scrollRef} className="cin-scroll">
            {featured.map((film) => (
              <div key={film.id} className="cin-card">
                <div className="film-thumb" style={{ marginBottom: 16 }}>
                  <BlackPlaceholder aspect="16/9" alt={film.alt} />
                  <div className="play-overlay" aria-hidden="true"><PlayIcon /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--text-muted,#747878)",
                        marginBottom: 6,
                      }}
                    >
                      {film.location}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif,'Noto Serif',serif)",
                        fontSize: "clamp(1.25rem,2.5vw,24px)",
                        fontWeight: 400,
                        lineHeight: 1.4,
                      }}
                    >
                      {film.title}
                    </h3>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-serif,'Noto Serif',serif)",
                      fontStyle: "italic",
                      fontSize: 16,
                      lineHeight: 1.6,
                      opacity: 0.55,
                      flexShrink: 0,
                      marginLeft: 16,
                      marginTop: 4,
                    }}
                  >
                    {film.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. EDITORIAL QUOTE ───────────────────────────────── */}
        <section
          style={{
            background: "var(--bg-surface,#f5f3ee)",
            paddingBlock: 160,
            paddingInline: "5vw",
            marginBottom: 160,
          }}
        >
          <div style={{ maxWidth: 900, marginInline: "auto", textAlign: "center" }}>
            <blockquote
              style={{
                fontFamily: "var(--font-serif,'Noto Serif',serif)",
                fontSize: "clamp(1.75rem,4.5vw,48px)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.25,
                color: "var(--text-primary,#1b1c19)",
                marginBottom: 40,
                letterSpacing: "-0.01em",
              }}
            >
              &ldquo;A film is not just a recording of events, but a preservation of
              the atmosphere that lived between the frames.&rdquo;
            </blockquote>
            <cite
              style={{
                fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-muted,#747878)",
                fontStyle: "normal",
              }}
            >
              — Elias Thorne, Creative Director
            </cite>
          </div>
        </section>

        {/* ── 4. ARCHIVES GRID ──────────────────────────────────── */}
        <section style={{ paddingInline: "5vw", marginBottom: 160 }}>
          <div style={{ maxWidth: 1320, marginInline: "auto" }}>

            {/* Section header + filters */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 24,
                marginBottom: 80,
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif,'Noto Serif',serif)",
                  fontSize: "clamp(1.75rem,4vw,40px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                Archives
              </h2>
              <div
                style={{
                  display: "flex",
                  gap: 32,
                  overflowX: "auto",
                  paddingBottom: 4,
                }}
              >
                {filters.map((f) => (
                  <button
                    key={f.key}
                    className={`filter-btn${activeFilter === f.key ? " active" : ""}`}
                    onClick={() => setActiveFilter(f.key)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Asymmetric grid */}
            {visible.length > 0 ? (
              <div className="archive-grid">
                {visible.map((film) => {
                  const isFullBleed = film.cols.includes("col-span-12") || film.id === "a3";
                  return (
                    <div
                      key={film.id}
                      className={`archive-item ${film.cols} ${film.offset}`}
                      style={
                        film.offset
                          ? { gridColumn: getGridCol(film.cols), marginTop: 80 }
                          : { gridColumn: getGridCol(film.cols) }
                      }
                    >
                      <div className="film-thumb" style={{ marginBottom: 16 }}>
                        <BlackPlaceholder aspect={film.aspect} alt={film.alt} />
                        <div className="play-overlay" aria-hidden="true"><PlayIcon /></div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: isFullBleed ? "space-between" : "flex-start",
                          alignItems: isFullBleed ? "flex-end" : "flex-start",
                          flexDirection: isFullBleed ? "row" : "column",
                          gap: isFullBleed ? 16 : 0,
                        }}
                      >
                        <div>
                          <span
                            style={{
                              fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                              fontSize: 11,
                              fontWeight: 600,
                              letterSpacing: "0.15em",
                              textTransform: "uppercase",
                              color: "var(--text-muted,#747878)",
                              display: "block",
                              marginBottom: 8,
                            }}
                          >
                            {film.category}
                          </span>
                          <h4
                            style={{
                              fontFamily: "var(--font-serif,'Noto Serif',serif)",
                              fontSize: "clamp(1.25rem,2.5vw,24px)",
                              fontWeight: 400,
                              lineHeight: 1.4,
                            }}
                          >
                            {film.title}
                          </h4>
                        </div>
                        {isFullBleed && (
                          <button
                            style={{
                              fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                              fontSize: 11,
                              fontWeight: 600,
                              letterSpacing: "0.15em",
                              textTransform: "uppercase",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              textDecoration: "underline",
                              textUnderlineOffset: 8,
                              textDecorationColor: "var(--outline-variant,#c4c7c7)",
                              color: "var(--text-primary,#1b1c19)",
                              padding: 0,
                              whiteSpace: "nowrap",
                              flexShrink: 0,
                              transition: "text-decoration-color 0.4s",
                            }}
                            onMouseEnter={(e) =>
                              ((e.target as HTMLButtonElement).style.textDecorationColor =
                                "var(--text-primary,#1b1c19)")
                            }
                            onMouseLeave={(e) =>
                              ((e.target as HTMLButtonElement).style.textDecorationColor =
                                "var(--outline-variant,#c4c7c7)")
                            }
                          >
                            View Story
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  paddingBlock: 80,
                  fontFamily: "var(--font-serif,'Noto Serif',serif)",
                  fontStyle: "italic",
                  fontSize: 22,
                  color: "var(--text-muted,#747878)",
                }}
              >
                No films in this category yet.
              </div>
            )}
          </div>
        </section>

        {/* ── 5. CTA ───────────────────────────────────────────── */}
        <section style={{ paddingInline: "5vw", marginBottom: 160 }}>
          <div style={{ maxWidth: 1320, marginInline: "auto" }}>
            <div className="cta-border-box">
              <h2
                style={{
                  fontFamily: "var(--font-serif,'Noto Serif',serif)",
                  fontSize: "clamp(1.75rem,4vw,40px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}
              >
                Ready to Tell Your Story?
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-secondary,#5e5e5e)",
                  maxWidth: 480,
                  marginInline: "auto",
                  marginBottom: 40,
                }}
              >
                We take on a limited number of commissions each year to ensure every
                film receives our full creative attention.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 20,
                  justifyContent: "center",
                }}
              >
                <Link href="/contact-us" className="btn-primary">
                  Contact Us
                </Link>
                <Link href="/films" className="btn-secondary">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

/* ─── Helper: map Tailwind-ish col class to CSS grid-column ─ */
function getGridCol(cols: string): string {
  if (cols.includes("col-span-12")) return "span 12";
  if (cols.includes("col-span-7"))  return "span 7";
  if (cols.includes("col-span-5"))  return "span 5";
  if (cols.includes("col-start-9") && cols.includes("col-span-4")) return "9 / span 4";
  if (cols.includes("col-start-7") && cols.includes("col-span-6")) return "7 / span 6";
  return "span 12";
}
