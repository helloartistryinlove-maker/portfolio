"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export function Footer() {
  const year = new Date().getFullYear();
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  // Trigger liquid fill when the logo section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsLogoVisible(true); },
      { threshold: 0.5 }
    );
    if (logoRef.current) observer.observe(logoRef.current);
    return () => { if (logoRef.current) observer.unobserve(logoRef.current); };
  }, []);

  const brandName = "Artistry In Love";

  // Organic ink splatters — positioned relative to the logo container
  const splatters = [
    { top: "-18%", left:  "4%",  size: "13px", delay:  700 },
    { top: "115%", left: "11%",  size:  "7px", delay: 1700 },
    { top: "-28%", left: "24%",  size: "17px", delay: 3100 },
    { top: "130%", left: "37%",  size:  "9px", delay: 4400 },
    { top: "-12%", left: "51%",  size: "11px", delay: 5700 },
    { top: "118%", left: "67%",  size: "15px", delay: 7100 },
    { top: "-22%", left: "81%",  size:  "8px", delay: 8700 },
    { top: "108%", left: "94%",  size: "14px", delay: 10400 },
    // Satellite micro-drops for realism
    { top:  "8%",  left: "27%",  size:  "4px", delay: 3400 },
    { top: "78%",  left: "71%",  size:  "5px", delay: 7400 },
    { top: "-5%",  left: "57%",  size:  "3px", delay: 6100 },
    { top: "95%",  left: "44%",  size:  "4px", delay: 5000 },
  ];

  // Improved wave SVGs using cubic beziers for an organic, asymmetric liquid surface
  // %23141413 = URL-encoded #141413
  const waveBottomToTop = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 300' preserveAspectRatio='none'%3E%3Cpath d='M0,148 C7,128,18,122,25,148 C32,174,43,178,50,150 C57,122,66,118,75,152 C84,180,93,172,100,148 L100,300 L0,300 Z' fill='%23141413'/%3E%3C/svg%3E")`;
  const waveTopToBottom = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 300' preserveAspectRatio='none'%3E%3Cpath d='M0,152 C7,172,18,178,25,152 C32,126,43,122,50,150 C57,178,66,182,75,148 C84,120,93,128,100,152 L100,0 L0,0 Z' fill='%23141413'/%3E%3C/svg%3E")`;

  const images = [
    "/footer1.jpg", "/footer2.jpg", "/footer3.jpg", "/footer4.jpg",
    "/footer5.jpg", "/footer6.jpg", "/footer7.jpg", "/footer8.jpg",
    "/footer9.jpg", "/footer10.jpg", "/foooter11.jpg", "/footer12.jpg",
    "/footer13.jpg", "/footer14.jpg", "/footer15.jpg", "/footter16.jpg", "/footer17.jpg"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .footer-root {
          background: #F2EAE4;
          color: #141413;
          font-family: var(--font-sans, "Manrope", sans-serif);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100vh;
          padding-top: 128px;
          padding-bottom: 24px;
          padding-inline: clamp(24px, 5vw, 64px);
          overflow: hidden;
        }

        /* ── 1. CTA CENTERPIECE ── */
        .footer-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 900px;
          margin: 0 auto 96px;
        }

        .footer-cta-label {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--text-primary, #141413);
          opacity: 0.5;
          margin-bottom: 32px;
        }

        .footer-cta-title {
          font-family: var(--font-serif, "Noto Serif", serif);
          font-size: clamp(3rem, 8vw, 7.5rem);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: var(--text-primary, #141413);
          margin-bottom: 48px;
        }

        .footer-cta-title em {
          font-style: italic;
          font-weight: 300;
          opacity: 0.9;
        }

        .footer-cta-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 20px 40px;
          border-radius: 9999px;
          border: 1px solid rgba(20,20,19,0.2);
          background: transparent;
          color: var(--text-primary, #141413);
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          overflow: hidden;
          transition: border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .footer-cta-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--text-primary, #141413);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.5s cubic-bezier(0.7, 0, 0.3, 1);
          z-index: 0;
        }

        .footer-cta-button span {
          position: relative;
          z-index: 1;
          transition: color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .footer-cta-button .arrow {
          position: relative;
          z-index: 1;
          transition: color 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .footer-cta-button:hover {
          border-color: var(--text-primary, #141413);
        }

        .footer-cta-button:hover::before {
          transform: scaleY(1);
        }

        .footer-cta-button:hover span,
        .footer-cta-button:hover .arrow {
          color: #F2EAE4;
        }

        .footer-cta-button:hover .arrow {
          transform: translate(3px, -3px);
        }

        /* ── INSTAGRAM STRIP ── */
        .footer-instagram-header {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-primary, #141413);
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }

        .header-line {
          flex-grow: 1;
          height: 1px;
          background: rgba(20,20,19,0.1);
          display: block;
        }

        .instagram-script {
          font-family: var(--font-script, "Great Vibes", cursive);
          font-size: 42px;
          text-transform: none;
          letter-spacing: -0.01em;
          color: var(--accent);
          font-weight: 400;
          line-height: 1;
        }

        .footer-scroll-container {
          width: calc(100% + clamp(48px, 10vw, 128px));
          margin-inline: calc(-1 * clamp(24px, 5vw, 64px));
          overflow: hidden;
          margin-bottom: 80px;
        }

        .footer-scroll-content {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: footer-ticker 80s linear infinite;
        }

        .footer-scroll-content:hover {
          animation-play-state: paused;
        }

        @keyframes footer-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); }
        }

        .footer-img {
          width: clamp(220px, 18vw, 320px);
          aspect-ratio: 1;
          object-fit: cover;
          flex-shrink: 0;
          background: #e0d8d2;
        }

        /* ── 2. INFORMATION FLOW ── */
        .footer-content-grid {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          gap: clamp(48px, 6vw, 96px);
          margin-bottom: 80px;
        }

        .footer-brand-section {
          max-width: 420px;
        }

        .footer-brand-name {
          font-family: var(--font-serif, "Noto Serif", serif);
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 400;
          font-style: italic;
          color: var(--text-primary, #141413);
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .footer-brand-subtext {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.8;
          color: #141413;
          opacity: 0.75;
        }

        /* Right column: nav + socials side by side */
        .footer-dir {
          display: flex;
          flex-direction: row;
          gap: clamp(48px, 6vw, 96px);
          align-items: flex-start;
        }

        .footer-nav-col,
        .footer-social-col {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .footer-link,
        .footer-social-link {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #141413;
          opacity: 0.6;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .footer-link:hover,
        .footer-social-link:hover {
          opacity: 1;
          transform: translateX(6px);
        }

        /* ── LIQUID WAVE ANIMATION ── */
        @keyframes liquid-wave-x {
          0%   { background-position-x: 0%; }
          100% { background-position-x: 100%; }
        }

        .liquid-text-fill {
          background-repeat: repeat-x;
          background-size: 210% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: liquid-wave-x 2.8s linear infinite;
          transition-property: background-position-y;
          transition-duration: 4800ms;
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* ── 3. GRAND FINALE ── */
        .footer-logo-wrapper {
          width: 100%;
          text-align: center;
          display: flex;
          justify-content: center;
          position: relative;
          margin-bottom: 24px;
        }

        .footer-editorial-brand {
          font-family: var(--font-serif, "Noto Serif", serif);
          font-size: 13.5vw;
          font-weight: 400;
          line-height: 0.85;
          letter-spacing: -0.05em;
          white-space: nowrap;
          user-select: none;
          display: flex;
          position: relative;
          z-index: 10;
          padding-bottom: 0.12em;
        }

        .footer-letter {
          position: relative;
          display: inline-block;
          padding-bottom: 0.15em;
          filter: drop-shadow(0 1px 1px rgba(20,20,19,0.08));
        }

        .footer-letter-base {
          color: #141413;
          opacity: 0.05;
        }

        .footer-letter-liquid {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 640px) {
          .footer-editorial-brand {
            font-size: 14vw;
          }
        }

        .footer-bottom-bar {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding-inline: 4px;
        }

        .footer-copyright {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.5;
        }

        .footer-signature {
          font-family: var(--font-serif, "Noto Serif", serif);
          font-size: 14px;
          font-style: italic;
          letter-spacing: 0;
          opacity: 1;
          color: #141413;
        }

        .footer-back-top {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.5;
          background: none;
          border: none;
          cursor: pointer;
          color: #141413;
          transition: opacity 0.3s ease, transform 0.3s ease;
          padding: 0;
        }

        .footer-back-top:hover {
          opacity: 1;
          transform: translateY(-2px);
        }

        .footer-back-top svg {
          transition: transform 0.3s ease;
        }

        .footer-back-top:hover svg {
          transform: translateY(-3px);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .footer-content-grid {
            flex-direction: column;
            align-items: flex-start;
            gap: 40px;
          }

          .footer-brand-section {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .footer-cta {
            margin-bottom: 64px;
          }

          .footer-dir {
            gap: 40px;
          }

          .footer-bottom-bar {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 12px;
          }

          .footer-signature {
            display: none;
          }
        }
      `}</style>

      <footer className="footer-root">

        {/* ── 1. EDITORIAL CTA ── */}
        <section className="footer-cta">
          <span className="footer-cta-label">Now Accepting 2025 / 2026 Commissions</span>
          <h2 className="footer-cta-title">
            Let's author <br />
            <em>your legacy.</em>
          </h2>
          <Link href="/contact-us" className="footer-cta-button">
            <span>Start Your Story</span>
            <span className="arrow" aria-hidden="true">↗</span>
          </Link>
        </section>

        {/* ── INSTAGRAM SCROLL ── */}
        <div>
          <div className="footer-instagram-header">
            <span className="header-line" />
            <span style={{ whiteSpace: "nowrap" }}>
              FOLLOW US ON <span className="instagram-script">Instagram</span>
            </span>
            <span className="header-line" />
          </div>

          <div className="footer-scroll-container">
            <div className="footer-scroll-content">
              {[...images, ...images].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Instagram feed ${i}`}
                  className="footer-img"
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── 2. INFO FLOW ── */}
        <div className="footer-content-grid">
          <div className="footer-brand-section">
            <h3 className="footer-brand-name">AIL.</h3>
            <p className="footer-brand-subtext">
              Preserving the fleeting whispers of today into the timeless poetry of tomorrow. Based in India, traversing the globe for the modern romantic.
            </p>
          </div>

          <div className="footer-dir">
            {/* Navigation */}
            <nav className="footer-nav-col" aria-label="Footer navigation">
              {[
                { label: "Films",        href: "/films" },
                { label: "Blogs",        href: "/blogs" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact",      href: "/contact-us" },
                { label: "Careers",      href: "/career" },
              ].map(({ label, href }) => (
                <Link key={label} href={href} className="footer-link">
                  {label}
                </Link>
              ))}
            </nav>

            {/* Socials */}
            <div className="footer-social-col" aria-label="Social links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <span>↗</span> Instagram
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label="WhatsApp"
              >
                <span>↗</span> WhatsApp
              </a>
              <a
                href="mailto:hello@artistryinlove.in"
                className="footer-social-link"
                aria-label="Email"
              >
                <span>↗</span> Email Studio
              </a>
            </div>
          </div>
        </div>

        {/* ── 3. GRAND FINALE ── */}
        <div>
          <div ref={logoRef} className="footer-logo-wrapper">

            {/* Organic ink splatters */}
            {splatters.map((splat, i) => (
              <div
                key={`splat-${i}`}
                style={{
                  position: "absolute",
                  top: splat.top,
                  left: splat.left,
                  width: splat.size,
                  height: splat.size,
                  background: "#141413",
                  borderRadius: i % 3 === 0
                    ? "40% 60% 70% 30% / 40% 50% 60% 50%"
                    : i % 3 === 1
                    ? "60% 40% 30% 70% / 50% 60% 40% 50%"
                    : "50% 70% 40% 60% / 60% 40% 70% 50%",
                  opacity: isLogoVisible ? 0.65 : 0,
                  transform: isLogoVisible
                    ? "scale(1) translateY(0)"
                    : "scale(0) translateY(-40px)",
                  transition: `opacity 2400ms cubic-bezier(0.34,1.56,0.64,1) ${splat.delay}ms,
                               transform 2400ms cubic-bezier(0.34,1.56,0.64,1) ${splat.delay}ms`,
                  pointerEvents: "none",
                  zIndex: 0,
                  filter: "drop-shadow(0 1px 3px rgba(20,20,19,0.2))",
                }}
              />
            ))}

            {/* Letter-by-letter liquid fill */}
            <h2 className="footer-editorial-brand">
              {brandName.split("").map((char, index) => {
                const isTopToBottom = index % 2 === 0;
                const bgImage = isTopToBottom ? waveTopToBottom : waveBottomToTop;
                const bgPosYEmpty  = isTopToBottom ? "112%" : "-12%";
                const bgPosYSolid  = isTopToBottom ?   "8%" :  "92%";

                return (
                  <span key={index} className="footer-letter">
                    {/* Ghost base — the "empty glass" */}
                    <span className="footer-letter-base">
                      {char === " " ? "\u00A0" : char}
                    </span>
                    {/* Liquid fill overlay */}
                    <span
                      className="footer-letter-liquid liquid-text-fill"
                      style={{
                        backgroundImage: bgImage,
                        backgroundPositionY: isLogoVisible ? bgPosYSolid : bgPosYEmpty,
                        transitionDelay: `${index * 480}ms`,
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  </span>
                );
              })}
            </h2>
          </div>

          <div className="footer-bottom-bar">
            <p className="footer-copyright">© {year} Artistry in Love. All Rights Reserved.</p>

            <p className="footer-signature">Crafted with intention, captured with soul.</p>

            <button onClick={scrollToTop} className="footer-back-top" aria-label="Back to top">
              Back to Top&nbsp;
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

      </footer>
    </>
  );
}