"use client";

import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  const images = [
    "/footer1.jpg", "/footer2.jpg", "/footer3.jpg", "/footer4.jpg",
    "/footer5.jpg", "/footer6.jpg", "/footer7.jpg", "/footer8.jpg",
    "/footer9.jpg", "/footer10.jpg", "/foooter11.jpg", "/footer12.jpg",
    "/footer13.jpg", "/footer14.jpg", "/footer15.jpg", "/footter16.jpg", "/footer17.jpg"
  ];

  return (
    <>
      <style>{`
        .footer-root {
          background: linear-gradient(180deg, rgba(251,247,243,0.96) 0%, rgba(242,234,228,0.98) 100%);
          padding-top: 100px;
          padding-bottom: 60px;
          text-align: center;
          overflow: hidden;
        }

        .footer-instagram-header {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-primary);
          margin-bottom: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding-inline: clamp(16px, 5vw, 64px);
        }

        .header-line {
          flex-grow: 1;
          height: 1px;
          background: rgba(45,35,28,0.1);
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
          width: 100%;
          overflow: hidden;
          margin-bottom: 100px;
          position: relative;
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
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); }
        }

        .footer-img {
          width: clamp(250px, 20vw, 350px);
          aspect-ratio: 1;
          object-fit: cover;
          flex-shrink: 0;
          background: var(--bg-container);
          border: none;
        }

        .footer-brand-section {
          padding-top: 40px;
        }

        .footer-brand-name {
          font-family: var(--font-serif, "Noto Serif", serif);
          font-size: clamp(28px, 6vw, 40px);
          font-weight: 400;
          font-style: italic;
          color: var(--text-primary);
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .footer-brand-subtext {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        .footer-bottom-links {
          margin-top: 80px;
          display: flex;
          justify-content: center;
          gap: clamp(24px, 5vw, 48px);
          flex-wrap: wrap;
        }

        .footer-link {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.4s;
        }

        .footer-link:hover {
          color: var(--text-primary);
        }

        .footer-copyright {
          margin-top: 60px;
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 9px;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          text-transform: uppercase;
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-instagram-header">
          <span className="header-line" />
          <span style={{ whiteSpace: "nowrap" }}>
            FOLLOW US ON <span className="instagram-script">Instagram</span>
          </span>
          <span className="header-line" />
        </div>

        <div className="footer-scroll-container">
          <div className="footer-scroll-content">
            {/* Doubling the items for seamless infinite scroll */}
            {[...images, ...images].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Instagram feed item ${i}`}
                className="footer-img"
              />
            ))}
          </div>
        </div>

        <div className="footer-brand-section">
          <h2 className="footer-brand-name">Artistry in Love</h2>
          <p className="footer-brand-subtext">Editorial Wedding Cinema</p>
        </div>

        <div className="footer-bottom-links">
          <Link href="/films" className="footer-link">Films</Link>
          <Link href="/blogs" className="footer-link">Blogs</Link>
          <Link href="/testimonials" className="footer-link">Testimonials</Link>
          <Link href="/contact-us" className="footer-link">Contact</Link>
          <Link href="/career" className="footer-link">Careers</Link>
        </div>

        <p className="footer-copyright">
          © {year} Artistry in Love. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
