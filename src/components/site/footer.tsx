"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
// Footer uses local static images from /public

const footerScrollImages = [
  "A7402765.jpg",
  "PPG03594.jpg",
  "PPG03764.jpg",
  "PPG03865.jpg",
  "PPG03986.jpg",
  "PPG04315.jpg",
  "PPG04362.jpg",
  "PPG04611.jpg",
  "PPG04628.jpg",
  "PPG04800.jpg",
  "PPG04823.jpg",
  "PPG04837.jpg",
  "PPG04992.jpg",
  "PPG05421.jpg",
  "PPG05514.jpg",
  "PPG05859.jpg",
  "PPG07068.jpg",
  "PPG07813.jpg",
  "PPG07815.jpg",
  "PPG08249.jpg",
  "PPG08363.jpg",
  "PPG08659.jpg",
  "PRN00258.jpg",
  "PRN05586.jpg",
  "PRN06668.jpg",
  "PRN07275.jpg",
  "PRN08965.jpg",
  "PRN09135.jpg",
  "PRN09243.jpg",
  "PRN09335.jpg",
  "PRN09631.jpg",
  "_PPG3793.jpg",
  "_PPG4159.jpg",
  "_PPG8636 Prerana Photo Studio.JPG",
];

const toFooterImageSrc = (fileName: string) => `/images/footer-scroll/${encodeURIComponent(fileName)}`;

export function Footer() {
  const year = new Date().getFullYear();
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const contactEmail = "hello@artistryinlove.com";

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

  // Improved wave SVGs using cubic beziers for an organic, asymmetric liquid surface
  // %23141413 = URL-encoded #141413
  const waveBottomToTop = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 300' preserveAspectRatio='none'%3E%3Cpath d='M0,148 C7,128,18,122,25,148 C32,174,43,178,50,150 C57,122,66,118,75,152 C84,180,93,172,100,148 L100,300 L0,300 Z' fill='%23141413'/%3E%3C/svg%3E")`;
  const waveTopToBottom = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 300' preserveAspectRatio='none'%3E%3Cpath d='M0,152 C7,172,18,178,25,152 C32,126,43,122,50,150 C57,178,66,182,75,148 C84,120,93,128,100,152 L100,0 L0,0 Z' fill='%23141413'/%3E%3C/svg%3E")`;

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
          padding: clamp(40px, 6vw, 80px);
          overflow: hidden;
        }

        .footer-content-rule,
        .footer-bottom-rule {
          width: 100%;
          height: 1px;
          background: rgba(20, 20, 19, 0.1);
        }

        .footer-bottom-rule {
          background: rgba(20, 20, 19, 0.08);
        }

        /* ── 1. CTA CENTERPIECE ── */
        .footer-cta-shell {
          width: 100%;
          max-width: 920px;
          margin: 0 auto clamp(40px, 6vw, 64px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: clamp(28px, 4vw, 40px) clamp(20px, 4vw, 40px);
          border: 1px solid rgba(20, 20, 19, 0.08);
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(4px);
        }

        .footer-cta-label {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--text-primary, #141413);
          opacity: 0.56;
          margin-bottom: 18px;
        }

        .footer-cta-title {
          font-family: var(--font-serif, "Noto Serif", serif);
          font-size: clamp(2.2rem, 5vw, 4.4rem);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: var(--text-primary, #141413);
          margin: 0 0 12px;
        }

        .footer-cta-copy {
          max-width: 620px;
          margin: 0 0 28px;
          font-size: clamp(0.95rem, 1.6vw, 1.05rem);
          line-height: 1.75;
          color: rgba(20, 20, 19, 0.72);
        }

        .footer-cta-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 20px 40px;
          border-radius: 9999px;
          border: 1px solid rgba(20,20,19,0.2);
          background: rgba(20,20,19,0.02);
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

        /* ── INSTAGRAM PREVIEW GRID ── */
        .footer-preview-shell {
          width: 100%;
          max-width: 1160px;
          margin: 0 auto clamp(36px, 5vw, 56px);
        }

        .footer-instagram-header {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-primary, #141413);
          margin-bottom: 18px;
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

        .footer-preview-grid {
          --footer-preview-gap: clamp(12px, 1.5vw, 20px);
          display: flex;
          justify-content: flex-start;
          overflow: hidden;
          overflow-y: hidden;
          position: relative;
          width: 100vw;
          max-width: none;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding-inline: clamp(16px, 3vw, 40px);
        }

        .footer-preview-track {
          display: flex;
          gap: var(--footer-preview-gap);
          width: max-content;
          animation: footer-preview-marquee 140s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }

        .footer-preview-set {
          display: flex;
          gap: var(--footer-preview-gap);
        }

        @keyframes footer-preview-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - (var(--footer-preview-gap) / 2)));
          }
        }

        .footer-preview-card {
          position: relative;
          flex: 0 0 auto;
          width: clamp(170px, 24vw, 260px);
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 0;
          background: rgba(224, 216, 210, 0.25);
          border: none;
          outline: none;
        }

        .footer-trust-line {
          margin-top: 16px;
          text-align: center;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(20, 20, 19, 0.58);
        }

        .footer-trust-copy {
          margin-top: 10px;
          text-align: center;
          font-family: var(--font-serif, "Noto Serif", serif);
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          font-style: italic;
          line-height: 1.5;
          color: rgba(20, 20, 19, 0.85);
        }

        .footer-contact-panel {
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-width: 320px;
        }

        .footer-contact-label {
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(20, 20, 19, 0.35);
        }

        .footer-contact-value {
          font-family: var(--font-serif, "Noto Serif", serif);
          font-size: clamp(1.05rem, 1.5vw, 1.2rem);
          line-height: 1.35;
          letter-spacing: 0.015em;
          color: #141413;
          text-decoration: none;
        }

        .footer-contact-note {
          font-size: 10.5px;
          line-height: 1.7;
          color: rgba(20, 20, 19, 0.38);
          letter-spacing: 0.04em;
          margin: 0;
        }

        /* ── 2. INFORMATION FLOW ── */
        .footer-content-grid {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
          gap: clamp(24px, 4vw, 48px);
          padding-block: clamp(24px, 4vw, 56px) clamp(24px, 4vw, 60px);
          margin-bottom: clamp(16px, 2.5vw, 28px);
          align-items: start;
        }

        .footer-brand-section {
          max-width: 255px;
          padding-top: 2px;
        }

        .footer-brand-subtext {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 12.5px;
          font-weight: 400;
          line-height: 2;
          color: #141413;
          opacity: 0.55;
          letter-spacing: 0.025em;
        }

        .footer-nav-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
          justify-self: center;
        }

        .footer-contact-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: flex-end;
          justify-self: end;
          text-align: right;
          padding-top: 2px;
        }

        .footer-social-col {
          display: flex;
          flex-direction: row;
          gap: 24px;
          justify-content: flex-end;
        }

        .footer-link {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #141413;
          opacity: 0.58;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          width: fit-content;
          transition: opacity 0.25s ease;
          padding: 2px 0;
        }

        .footer-social-link {
          color: #141413;
          opacity: 0.6;
          display: inline-flex;
          align-items: center;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .footer-link:hover {
          opacity: 1;
        }

        .footer-social-link:hover {
          opacity: 1;
          transform: translateY(-4px) scale(1.05);
        }

        .footer-enquire-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 18px;
          border: 1px solid rgba(20, 20, 19, 0.26);
          background: transparent;
          color: #141413;
          text-decoration: none;
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          transition: color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }

        .footer-enquire-button:hover {
          background: #141413;
          color: #F2EAE4;
          border-color: #141413;
          transform: translateY(-1px);
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
          font-size: clamp(2.8rem, 9.5vw, 110px);
          opacity: 0.85;
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
            font-size: 12.5vw;
          }
        }

        .footer-bottom-bar {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 24px;
          padding-top: 20px;
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
          justify-self: end;
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
            grid-template-columns: 1fr;
            gap: 40px;
            justify-items: center;
            text-align: center;
            padding-block: 32px;
          }

          .footer-brand-section {
            max-width: 100%;
          }

          .footer-nav-col,
          .footer-contact-col {
            justify-self: center;
            align-items: center;
            text-align: center;
          }

          .footer-social-col {
            justify-content: center;
          }

          .footer-preview-grid {
            justify-content: flex-start;
          }
        }

        @media (max-width: 640px) {
          .footer-cta-shell {
            padding-inline: 16px;
          }

          .footer-preview-card {
            width: clamp(140px, 42vw, 220px);
          }

          .footer-content-grid {
            gap: 32px;
          }

          .footer-bottom-bar {
            grid-template-columns: 1fr;
            align-items: center;
            text-align: center;
            gap: 12px;
          }

          .footer-back-top {
            justify-self: center;
          }

          .footer-signature {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-preview-track {
            animation: none;
          }
        }
      `}</style>

      <footer className="footer-root">

        <section className="footer-cta-shell">
          <p className="footer-cta-label">Limited availability</p>
          <h2 className="footer-cta-title">Let&apos;s Tell Your Story</h2>
          <p className="footer-cta-copy">Limited bookings per season. Enquire now to check availability.</p>
          <Link href="/contact-us" className="footer-cta-button" aria-label="Enquire now">
            <span>Enquire Now</span>
            <svg className="arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2 10L10 2M6 2H10V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </section>

        <section className="footer-preview-shell" aria-label="Instagram preview">
          <div className="footer-instagram-header">
            <span className="header-line" />
            <span style={{ whiteSpace: "nowrap" }}>
              FOLLOW US ON <span className="instagram-script">Instagram</span>
            </span>
            <span className="header-line" />
          </div>

          <div className="footer-preview-grid">
            <div className="footer-preview-track" aria-hidden="true">
              <div className="footer-preview-set">
                {footerScrollImages.map((fileName, index) => (
                  <div key={`preview-a-${fileName}`} className="footer-preview-card">
                    <Image
                      src={toFooterImageSrc(fileName)}
                      alt={`Footer gallery image ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 1024px) 24vw, 260px"
                      loading="lazy"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                ))}
              </div>
              <div className="footer-preview-set">
                {footerScrollImages.map((fileName, index) => (
                  <div key={`preview-b-${fileName}`} className="footer-preview-card">
                    <Image
                      src={toFooterImageSrc(fileName)}
                      alt={`Footer gallery image ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 1024px) 24vw, 260px"
                      loading="lazy"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="footer-trust-line">Crafting cinematic wedding stories across India.</p>
          <p className="footer-trust-copy">Visual proof of the moments we preserve with a quiet, editorial eye.</p>
        </section>

        <div ref={logoRef} className="footer-logo-wrapper" style={{ marginBottom: "clamp(24px, 4vw, 48px)" }}>

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

          <div className="footer-content-rule" aria-hidden="true" />

        {/* ── 2. INFO FLOW ── */}
        <div className="footer-content-grid">
          <div className="footer-brand-section">
            <p className="footer-brand-subtext">
              Preserving the fleeting whispers of today into the timeless poetry of tomorrow. Based in India, traversing the globe for the modern romantic.
            </p>
          </div>

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

          {/* Socials & Client Info */}
          <div className="footer-contact-col">
            <div className="footer-social-col" aria-label="Social links">
              <a
                href="https://instagram.com/artistryinlove"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="footer-social-link"
                aria-label="Email"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>

            <div className="footer-contact-panel">
              <span className="footer-contact-label">Enquiries</span>
              <a className="footer-contact-value" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              <p className="footer-contact-note">Crafting cinematic wedding stories across India.</p>
            </div>

            <Link href="/contact-us" className="footer-enquire-button" aria-label="Enquire now - limited slots">
              Enquire Now - Limited Slots
            </Link>
          </div>
        </div>

        <div className="footer-bottom-rule" aria-hidden="true" />

        {/* ── 3. GRAND FINALE ── */}
        <div>
          <div className="footer-bottom-bar">
            <p className="footer-copyright">© {year} Artistry in Love. All Rights Reserved.</p>

            <p className="footer-signature">Crafted with intention. Ready when you are.</p>

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