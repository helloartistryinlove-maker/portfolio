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

  return (
    <>
      <style>{`
        :root {
          --primary-color: #000000;
          --on-primary: #ffffff;
          --charcoal: #1c1b1b;
          --off-white: #fdf8f8;
          --soft-beige: #e5e2e1;
          --secondary-text: #5e5e5b;
          --text-secondary: #5e5e5b;
          --hairline: #1c1b1b;
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
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 35%;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(28,27,27,0.45) 0%, rgba(28,27,27,0.2) 40%, rgba(28,27,27,0) 100%);
          z-index: 1;
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
          color: #ffffff;
          font-family: Inter;
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
            grid-column: span 5;
            order: 1;
          }

          .intro-image {
            grid-column: span 6;
            grid-column-start: 7;
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
          font-family: Inter;
          font-size: clamp(1rem, 2vw, 16px);
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: clamp(24px, 5vw, 40px);
          max-width: 420px;
        }

        .intro-link {
          font-family: Inter;
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
          font-family: Inter;
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
          font-family: Inter;
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
          font-family: Inter;
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
          background: var(--soft-beige);
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
          font-family: Inter;
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
          font-family: Inter;
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
          font-family: Inter;
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
          font-family: Inter;
          font-size: clamp(0.9rem, 1.8vw, 16px);
          line-height: 1.6;
          color: var(--text-secondary);
        }

        /* ── Testimonial section ────── */
        .testimonial-wrapper {
          background-image: linear-gradient(rgba(28,27,27,0.85), rgba(28,27,27,0.85)), url('/testimonial.jpg');
          background-size: cover;
          background-position: center;
          color: #ffffff;
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
          font-family: Inter;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.6);
          text-transform: uppercase;
        }

        /* ── CTA section ────────── */
        .cta-wrapper {
          background: var(--off-white);
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
          font-family: Inter;
          font-size: clamp(1rem, 2vw, 16px);
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: clamp(32px, 6vw, 48px);
        }

        .cta-button {
          display: inline-block;
          padding: clamp(12px, 2.5vw, 16px) clamp(28px, 5vw, 48px);
          border: 0.5px solid var(--charcoal);
          background: transparent;
          color: var(--charcoal);
          font-family: Inter;
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
          color: #ffffff;
        }

        /* ── Dividers ──────────── */
        .fine-line {
          height: 0.5px;
          background: rgba(28,27,27,0.1);
          margin-block: clamp(32px, 6vw, 64px);
        }
      `}</style>

      {/* ════════════════════════════════════════════════════
          §1  HERO — Premium cinematic full-screen
          ════════════════════════════════════════════════════ */}
      <section className="hero-wrapper">
        <img
          src="/coverimg.jpg"
          alt="Cinematic wedding photography hero background"
          className="hero-bg"
        />
        <div className="hero-overlay" />
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
            <div className="intro-image">
              <img
                src="/portfolio1.jpg"
                alt="Editorial wedding cinematography portrait"
              />
            </div>
          </div>
        </div>
      </section>

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
                <div className="portfolio-img-wrapper" style={{ aspectRatio: "16 / 9" }}>
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
                <div className="portfolio-img-wrapper" style={{ aspectRatio: "3 / 4" }}>
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
                <div className="portfolio-img-wrapper" style={{ aspectRatio: "4 / 3" }}>
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
              <div className="portfolio-quote">
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
            <div className="process-image-wrapper">
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

      {/* ════════════════════════════════════════════════════
          §5  TESTIMONIAL — Centered quote on charcoal background
          ════════════════════════════════════════════════════ */}
      <section className="section-xl section-base testimonial-wrapper">
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
        <div className="cta-container">
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
    </>
  );
}
