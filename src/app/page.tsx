"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────
   Home Page — Rebuilt strictly from Design.md
   Premium, cinematic photographer brand home
   Sections:
   1. Hero           – full-screen cinematic with dark gradient
   2. Philosophy     – asymmetrical 2-col text + image intro
   3. Portfolio      – bento grid with asymmetrical layout
   4. Process        – 2-col: image + numbered steps
   5. Testimonial    – centered quote with charcoal background
   6. Final CTA      – centered call-to-action
   ───────────────────────────────────────────────────────── */

function placeholderSvg(text: string): string {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect width="1920" height="1080" fill="#1c1b1b"/><text x="50%" y="50%" font-family="Noto Serif" font-size="24" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" opacity="0.3">${text}</text></svg>`
  )}`;
}

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHoveredRef.current) return;

      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const parallaxNodes = Array.from(
      root.querySelectorAll<HTMLElement>("[data-parallax-speed]"),
    );

    if (!parallaxNodes.length) return;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let rafId = 0;
    let ticking = false;

    const getIntensityFactor = () => {
      const width = window.innerWidth;
      if (width <= 640) return 0;
      if (width <= 1024) return 0.45;
      return 1;
    };

    const clearTransforms = () => {
      parallaxNodes.forEach((node) => {
        node.style.transform = "translate3d(0, 0, 0)";
      });
    };

    const updateParallax = () => {
      ticking = false;

      if (reducedMotionQuery.matches) {
        clearTransforms();
        return;
      }

      const intensity = getIntensityFactor();
      if (intensity === 0) {
        clearTransforms();
        return;
      }

      const viewportHeight = window.innerHeight;
      const maxOffset = 64 * intensity;

      parallaxNodes.forEach((node) => {
        const speed = Number(node.dataset.parallaxSpeed ?? "0");
        if (!Number.isFinite(speed) || speed === 0) return;

        const rect = node.getBoundingClientRect();
        const distanceFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
        const rawOffset = -distanceFromCenter * speed * intensity;
        const offsetY = Math.max(-maxOffset, Math.min(maxOffset, rawOffset));

        node.style.transform = `translate3d(0, ${offsetY.toFixed(2)}px, 0)`;
      });
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(updateParallax);
    };

    const handleReducedMotionChange = () => {
      requestUpdate();
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    if ("addEventListener" in reducedMotionQuery) {
      reducedMotionQuery.addEventListener("change", handleReducedMotionChange);
    } else {
      reducedMotionQuery.addListener(handleReducedMotionChange);
    }

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if ("removeEventListener" in reducedMotionQuery) {
        reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
      } else {
        reducedMotionQuery.removeListener(handleReducedMotionChange);
      }

      clearTransforms();
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --primary-color: var(--text-primary);
          --on-primary: var(--bg-surface);
          --charcoal: var(--text-primary);
          --off-white: var(--bg-surface);
          --soft-beige: var(--bg-container);
          --secondary-text: var(--text-secondary);
          --text-secondary: var(--text-secondary);
          --hairline: var(--border);
        }

        /* ── Base section spacing ─────── */
        .section-xl { padding-block: clamp(80px, 15vw, 160px); }
        .section-lg { padding-block: clamp(60px, 12vw, 120px); }
        .section-base { padding-inline: clamp(16px, 5vw, 64px); }

        /* ── 12-col grid ────────────── */
        .grid-12 {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: clamp(16px, 3vw, 32px);
        }

        /* ── Hero section ──────────── */
        .hero-wrapper {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          isolation: isolate;
        }

        .parallax-layer {
          transform: translate3d(0, 0, 0);
          will-change: transform;
          backface-visibility: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 35%;
          z-index: 0;
          transform: scale(1.04);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(45,35,28,0.42) 0%, rgba(45,35,28,0.18) 40%, rgba(45,35,28,0) 100%);
          z-index: 1;
        }

        .hero-grain {
          position: absolute;
          inset: -10%;
          z-index: 1;
          opacity: 0.22;
          pointer-events: none;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(251,247,243,0.22), transparent 45%),
            radial-gradient(circle at 70% 65%, rgba(45,35,28,0.24), transparent 44%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding-inline: clamp(16px, 5vw, 64px);
          max-width: 900px;
        }

        .hero-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--bg-surface);
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-decoration: none;
          position: relative;
          text-transform: uppercase;
        }

        .hero-link::after {
          content: '→';
          transition: transform 0.4s ease;
        }

        .hero-link:hover::after {
          transform: translateX(4px);
        }

        /* ── Intro section ──────────── */
        .intro-text {
          grid-column: 1 / -1;
        }

        .intro-image {
          grid-column: 1 / -1;
        }

        @media (min-width: 768px) {
          .intro-text {
            grid-column: 1 / span 5;
            order: 1;
          }

          .intro-image {
            grid-column: 7 / span 6;
            order: 2;
          }
        }

        .intro-headline {
          font-family: "Noto Serif";
          font-size: clamp(1.8rem, 4vw, 48px);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: var(--charcoal);
          margin-bottom: clamp(20px, 4vw, 32px);
        }

        .intro-body {
          font-family: var(--font-sans);
          font-size: clamp(1rem, 2vw, 16px);
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: clamp(24px, 5vw, 40px);
          max-width: 420px;
        }

        .intro-link {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: var(--charcoal);
          text-decoration: none;
          border-bottom: 1px solid var(--charcoal);
          padding-bottom: 2px;
          transition: opacity 0.3s;
        }

        .intro-link:hover {
          opacity: 0.7;
        }

        .intro-kicker {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          text-transform: uppercase;
        }

        .intro-image img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          border: 0.5px solid var(--soft-beige);
        }

        /* ── Portfolio bento ────────── */
        .portfolio-wrapper {
          background: var(--off-white);
        }

        .portfolio-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: clamp(16px, 3vw, 24px);
          flex-wrap: wrap;
          margin-bottom: clamp(40px, 8vw, 80px);
          padding-bottom: clamp(32px, 6vw, 48px);
          border-bottom: 0.5px solid var(--soft-beige);
        }

        .portfolio-kicker {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }

        .portfolio-title {
          font-family: "Noto Serif";
          font-size: clamp(1.8rem, 4vw, 48px);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: var(--charcoal);
        }

        .portfolio-link {
          font-family: Inter;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: var(--charcoal);
          text-decoration: none;
          border-bottom: 1px solid var(--charcoal);
          padding-bottom: 2px;
          white-space: nowrap;
        }

        .portfolio-link:hover {
          opacity: 0.7;
        }

        /* Bento grid items */
        .portfolio-item-large { grid-column: 1 / -1; }
        .portfolio-item-small { grid-column: 1 / -1; }
        .portfolio-item-medium { grid-column: 1 / -1; }
        .portfolio-item-text { grid-column: 1 / -1; }

        @media (min-width: 768px) {
          .portfolio-item-large { grid-column: span 8; }
          .portfolio-item-small { grid-column: span 4; }
          .portfolio-item-medium { grid-column: span 5; }
          .portfolio-item-text { grid-column: span 7; }
        }

        .portfolio-card {
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 2vw, 16px);
        }

        .portfolio-img-wrapper {
          position: relative;
          overflow: hidden;
          background: var(--charcoal);
        }

        .portfolio-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .portfolio-card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: clamp(12px, 2vw, 20px);
          flex-wrap: wrap;
        }

        .portfolio-card-title {
          font-family: "Noto Serif";
          font-size: clamp(1.2rem, 2.5vw, 32px);
          font-weight: 600;
          line-height: 1.3;
          color: var(--charcoal);
          font-style: italic;
        }

        .portfolio-card-location {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          text-transform: uppercase;
          white-space: nowrap;
        }

        .portfolio-quote {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(24px, 4vw, 48px);
          background: linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-container) 100%);
          min-height: clamp(200px, 40vh, 300px);
        }

        .portfolio-quote-text {
          font-family: "Noto Serif";
          font-size: clamp(1.2rem, 2vw, 24px);
          font-weight: 600;
          line-height: 1.6;
          color: var(--charcoal);
          font-style: italic;
          margin-bottom: 16px;
        }

        .portfolio-quote-source {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          text-transform: uppercase;
        }

        /* ── Process section ────────── */
        .process-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(40px, 8vw, 80px);
          align-items: start;
        }

        @media (min-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .process-image-wrapper {
          position: relative;
          width: 100%;
        }

        .process-image {
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          display: block;
          background: var(--charcoal);
        }

        .process-steps {
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 4vw, 40px);
        }

        .process-kicker {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          text-transform: uppercase;
          display: block;
          margin-bottom: 12px;
        }

        .process-headline {
          font-family: "Noto Serif";
          font-size: clamp(1.8rem, 4vw, 48px);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: var(--charcoal);
          margin-bottom: clamp(20px, 4vw, 32px);
        }

        .process-step {
          padding-bottom: clamp(20px, 3vw, 24px);
          border-bottom: 0.5px solid var(--soft-beige);
        }

        .process-step:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .process-step-number {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--charcoal);
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }

        .process-step-title {
          font-family: "Noto Serif";
          font-size: clamp(1.1rem, 2vw, 18px);
          font-weight: 600;
          color: var(--charcoal);
          margin-bottom: 8px;
        }

        .process-step-description {
          font-family: var(--font-sans);
          font-size: clamp(0.9rem, 1.8vw, 16px);
          line-height: 1.6;
          color: var(--text-secondary);
        }

        /* ── Testimonial section ────── */
        .testimonial-wrapper {
          background-image: linear-gradient(rgba(45,35,28,0.78), rgba(45,35,28,0.78)), url('/testimonial.jpg');
          background-size: cover;
          background-position: center;
          color: var(--bg-surface);
        }

        .testimonial-container {
          max-width: 1200px;
          margin-inline: auto;
          text-align: center;
          overflow: hidden;
          position: relative;
        }

        .testimonial-scroll-wrapper {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          gap: 0;
          cursor: grab;
          padding-bottom: 20px;
        }

        .testimonial-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }

        .testimonial-item {
          flex: 0 0 100%;
          scroll-snap-align: center;
          padding-inline: clamp(16px, 5vw, 64px);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .testimonial-quote-icon {
          margin-bottom: clamp(20px, 4vw, 32px);
          opacity: 0.25;
          display: block;
          margin-inline: auto;
        }

        .testimonial-quote {
          font-family: "Noto Serif";
          font-size: clamp(1.5rem, 4vw, 48px);
          font-weight: 600;
          line-height: 1.2;
          color: #ffffff;
          font-style: italic;
          margin-bottom: clamp(24px, 4vw, 40px);
          max-width: 900px;
        }

        .testimonial-source {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.6);
          text-transform: uppercase;
        }

        /* ── CTA section ────────── */
        .cta-wrapper {
          background: var(--bg);
        }

        .cta-container {
          max-width: 700px;
          margin-inline: auto;
          text-align: center;
        }

        .cta-headline {
          font-family: "Noto Serif";
          font-size: clamp(1.8rem, 4vw, 48px);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: var(--charcoal);
          margin-bottom: clamp(16px, 3vw, 24px);
        }

        .cta-description {
          font-family: var(--font-sans);
          font-size: clamp(1rem, 2vw, 16px);
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: clamp(32px, 6vw, 48px);
        }

        .cta-button {
          display: inline-block;
          padding: clamp(12px, 2.5vw, 16px) clamp(28px, 5vw, 48px);
          border: 1px solid var(--charcoal);
          background: transparent;
          color: var(--charcoal);
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.4s, color 0.4s;
        }

        .cta-button:hover {
          background: var(--charcoal);
          color: var(--bg-surface);
        }

        /* ── Dividers ──────────── */
        .fine-line {
          height: 0.5px;
          background: rgba(45,35,28,0.1);
          margin-block: clamp(32px, 6vw, 64px);
        }

        .section-divider {
          position: relative;
          height: clamp(32px, 5vw, 56px);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .section-divider-line {
          width: min(220px, 40vw);
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(138,95,69,0.38) 50%, transparent 100%);
        }

        .section-divider-glow {
          position: absolute;
          width: clamp(120px, 18vw, 220px);
          height: clamp(120px, 18vw, 220px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(138,95,69,0.18) 0%, transparent 72%);
          filter: blur(18px);
          opacity: 0.65;
        }

        .testimonial-wrapper {
          position: relative;
        }

        .testimonial-drift {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 20% 20%, rgba(251,247,243,0.1), transparent 55%),
            radial-gradient(ellipse at 75% 75%, rgba(45,35,28,0.16), transparent 60%);
          mix-blend-mode: screen;
          z-index: 0;
        }

        .testimonial-container,
        .cta-container {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 640px) {
          .parallax-layer {
            will-change: auto;
          }
        }
      `}</style>

      <div ref={pageRef}>
      {/* ════════════════════════════════════════════════════
          §1  HERO — Premium cinematic full-screen
          ════════════════════════════════════════════════════ */}
      <section className="hero-wrapper">
        <img
          src="/coverimg.jpg"
          alt="Cinematic wedding photography hero background"
          className="hero-bg parallax-layer"
          data-parallax-speed="0.08"
        />
        <div className="hero-overlay parallax-layer" data-parallax-speed="0.04" />
        <div className="hero-grain parallax-layer" data-parallax-speed="0.05" aria-hidden="true" />
      </section>

      {/* ════════════════════════════════════════════════════
          §2  PHILOSOPHY — Asymmetrical intro with image
          ════════════════════════════════════════════════════ */}
      <section className="section-xl section-base">
        <div style={{ maxWidth: "1320px", marginInline: "auto" }}>
          <div className="grid-12" style={{ alignItems: "center" }}>
            {/* Text column — 5 cols on desktop */}
            <div className="intro-text">
              <span className="intro-kicker" style={{ display: "block", marginBottom: "clamp(12px, 2vw, 16px)" }}>
                <span className="portfolio-kicker">Our Philosophy</span>
              </span>
              <h2 className="intro-headline">
                A legacy defined by what is <em>felt</em>, not just seen.
              </h2>
              <p className="intro-body">
                We specialize in editorial wedding cinema for those who value the intentional, the understated, and the timeless. Our approach is observational, preserving the raw honesty of your celebration through discreet, deliberate cinematography.
              </p>
              <Link href="/films" className="intro-link">
                Learn Our Approach
              </Link>
            </div>

            {/* Image column — 6 cols on desktop, 7 cols start */}
            <div className="intro-image parallax-layer" data-parallax-speed="0.06">
              <img
                src="/portfolio1.jpg"
                alt="Editorial wedding cinematography portrait"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true">
        <span className="section-divider-line" />
        <span className="section-divider-glow parallax-layer" data-parallax-speed="0.1" />
      </div>

      {/* ════════════════════════════════════════════════════
          §3  PORTFOLIO — Bento grid with asymmetrical layout
          ════════════════════════════════════════════════════ */}
      <section className="section-xl section-base portfolio-wrapper">
        <div style={{ maxWidth: "1320px", marginInline: "auto" }}>
          {/* Header with divider */}
          <div className="portfolio-header">
            <div>
              <span className="portfolio-kicker">Selected Works</span>
              <h2 className="portfolio-title">The Portfolio</h2>
            </div>
            <Link href="/films" className="portfolio-link">
              View All Films →
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid-12">
            {/* Large — 16:9, 8 cols on desktop */}
            <div className="portfolio-item-large">
              <div className="portfolio-card">
                <div className="portfolio-img-wrapper parallax-layer" data-parallax-speed="0.05" style={{ aspectRatio: "16 / 9" }}>
                  <img
                    src="/portfoli2.jpg"
                    alt="Sienna & Alessandro — Amalfi, Italy wedding film"
                  />
                </div>
                <div className="portfolio-card-meta">
                  <h3 className="portfolio-card-title">Sienna &amp; Alessandro</h3>
                  <span className="portfolio-card-location">Amalfi, Italy</span>
                </div>
              </div>
            </div>

            {/* Vertical — 3:4, 4 cols on desktop */}
            <div className="portfolio-item-small">
              <div className="portfolio-card">
                <div className="portfolio-img-wrapper parallax-layer" data-parallax-speed="0.07" style={{ aspectRatio: "3 / 4" }}>
                  <img
                    src="/portfoli3.jpg"
                    alt="Chloe & Julian — Paris, France wedding film"
                  />
                </div>
                <div className="portfolio-card-meta">
                  <h3 className="portfolio-card-title">Chloe &amp; Julian</h3>
                  <span className="portfolio-card-location">Paris, France</span>
                </div>
              </div>
            </div>

            {/* Medium — 4:3, 5 cols on desktop */}
            <div className="portfolio-item-medium">
              <div className="portfolio-card">
                <div className="portfolio-img-wrapper parallax-layer" data-parallax-speed="0.06" style={{ aspectRatio: "4 / 3" }}>
                  <img
                    src="/internationalsection.jpg"
                    alt="Isabella & James — Cotswolds, UK wedding film"
                  />
                </div>
                <div className="portfolio-card-meta">
                  <h3 className="portfolio-card-title">Isabella &amp; James</h3>
                  <span className="portfolio-card-location">Cotswolds, UK</span>
                </div>
              </div>
            </div>

            {/* Editorial quote section — 7 cols on desktop */}
            <div className="portfolio-item-text">
              <div className="portfolio-quote parallax-layer" data-parallax-speed="-0.03">
                <p className="portfolio-quote-text">
                  &ldquo;They don&apos;t just film a wedding; they document a feeling. Every frame feels like a memory we didn&apos;t know we&apos;d forgotten.&rdquo;
                </p>
                <span className="portfolio-quote-source">— Harper's Bazaar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          §4  PROCESS — 2-col image + numbered steps
          ════════════════════════════════════════════════════ */}
      <section className="section-lg section-base">
        <div style={{ maxWidth: "1320px", marginInline: "auto" }}>
          <div className="process-grid">
            {/* Left — image */}
            <div className="process-image-wrapper parallax-layer" data-parallax-speed="0.05">
              <img
                src="/foooter11.jpg"
                alt="The artist at work — filmmaker's cinematography process"
                className="process-image"
              />
            </div>

            {/* Right — steps */}
            <div className="process-steps">
              <span className="process-kicker">The Artistry</span>
              <h2 className="process-headline">Intentional Filmmaking</h2>

              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "A deep dive into your narrative, aesthetics, and the nuances that make your connection unique.",
                },
                {
                  number: "02",
                  title: "Observation",
                  description:
                    "Discreet, handheld cinematography that captures the unscripted moments between the milestones.",
                },
                {
                  number: "03",
                  title: "Curation",
                  description:
                    "Meticulous editing where sound design and color grading create an immersive cinematic experience.",
                },
              ].map((step) => (
                <div key={step.number} className="process-step">
                  <span className="process-step-number">{step.number}. {step.title.toUpperCase()}</span>
                  <p className="process-step-description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true">
        <span className="section-divider-line" />
        <span className="section-divider-glow parallax-layer" data-parallax-speed="0.09" />
      </div>

      {/* ════════════════════════════════════════════════════
          §5  TESTIMONIAL — Centered quote on charcoal background
          ════════════════════════════════════════════════════ */}
      <section className="section-xl section-base testimonial-wrapper">
        <div className="testimonial-drift parallax-layer" data-parallax-speed="-0.04" aria-hidden="true" />
        <div className="testimonial-container">
          <div 
            className="testimonial-scroll-wrapper" 
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {[
              {
                quote: "Artistry in Love created something more than a film; they created a heirloom. We watch it and feel the exact same breeze from that evening in Lake Como.",
                source: "Mr. & Mrs. Vanderbilt"
              },
              {
                quote: "The way they captured the light during our ceremony was magical. It feels like watching a dream unfold in real-time.",
                source: "Sophia & Liam"
              },
              {
                quote: "Beyond professional. They blended into the background and caught moments we didn't even know happened until we saw the film.",
                source: "Elena & Marcus"
              },
              {
                quote: "A masterclass in cinematography. Every shot is intentional, and the editing is rhythmic and emotional.",
                source: "Charlotte & James"
              }
            ].map((t, i) => (
              <div key={i} className="testimonial-item">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="testimonial-quote-icon"
                  aria-hidden="true"
                >
                  <path
                    d="M8 30c0-8.616 4.848-15.84 14.4-19.2l2.4 3.6c-5.76 2.88-8.64 6.48-8.64 12H21.6v10.8H8v-7.2zm21.6 0c0-8.616 4.848-15.84 14.4-19.2l2.4 3.6c-5.76 2.88-8.64 6.48-8.64 12h7.2v10.8H29.6v-7.2z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="testimonial-quote">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <cite className="testimonial-source">
                  {t.source}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          §6  FINAL CTA — Centered call-to-action
          ════════════════════════════════════════════════════ */}
      <section className="section-xl section-base cta-wrapper">
        <div className="cta-container parallax-layer" data-parallax-speed="-0.03">
          <h2 className="cta-headline">
            Now booking for the MMXXV Season
          </h2>
          <p className="cta-description">
            We accept a limited number of commissions each year to ensure every film receives our undivided artistic devotion.
          </p>
          <Link href="/contact-us" className="cta-button">
            Start the Conversation
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}
