"use client";

import Image from "next/image";
import Link from "next/link";

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      width="72"
      height="72"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" stroke="rgba(255,255,255,0.82)" strokeWidth="1.5" />
      <polygon points="27,20 49,32 27,44" fill="rgba(255,255,255,0.96)" />
    </svg>
  );
}

function FilmCard() {
  return (
    <Link href="/films/anurag-shreya" className="film-card" aria-label="Open Anurag and Shreya Wedding Film">
      <div className="film-card-media">
        <Image
          src="/Anurag&Shreya/Wedding/238A3328.jpg"
          alt="Anurag & Shreya Wedding Film thumbnail"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="film-card-image"
        />
        <div className="film-card-overlay" />
        <div className="film-card-play">
          <PlayIcon />
        </div>
      </div>

      <div className="film-card-meta">
        <p className="film-card-kicker">Signature Film</p>
        <h2>Anurag &amp; Shreya Wedding Film</h2>
      </div>
    </Link>
  );
}

export default function FilmsPage() {
  return (
    <>
      <style>{`
        .films-page {
          background: var(--bg);
          color: var(--text-primary);
          min-height: 100vh;
        }

        .films-shell {
          padding-inline: clamp(16px, 5vw, 40px);
          padding-block: clamp(56px, 9vw, 108px) clamp(96px, 12vw, 144px);
          max-width: 1440px;
          margin: 0 auto;
        }

        .films-intro {
          max-width: 760px;
          margin-bottom: clamp(28px, 5vw, 44px);
        }

        .films-intro h1 {
          font-family: var(--font-serif,'Noto Serif',serif);
          font-size: clamp(2.2rem, 5vw, 5rem);
          font-weight: 400;
          line-height: 1.02;
          letter-spacing: -0.03em;
          margin: 0 0 16px;
        }

        .films-intro p {
          font-family: var(--font-sans,'Manrope',sans-serif);
          font-size: clamp(1rem, 2vw, 1.1rem);
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0;
          max-width: 540px;
        }

        .film-card {
          display: block;
          text-decoration: none;
          color: inherit;
          max-width: 1240px;
          margin: 0 auto;
          transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .film-card:hover {
          transform: translateY(-2px) scale(1.02);
        }

        .film-card-media {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 2px;
          background: linear-gradient(180deg, #2f241d 0%, #1d1713 100%);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          isolation: isolate;
        }

        .film-card-image {
          object-fit: cover;
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1), filter 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .film-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.48) 100%);
          z-index: 1;
          transition: background 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .film-card-play {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1), opacity 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .film-card:hover .film-card-image {
          transform: scale(1.035);
          filter: brightness(1.06);
        }

        .film-card:hover .film-card-overlay {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.56) 100%);
        }

        .film-card:hover .film-card-play {
          transform: scale(1.06);
        }

        .film-card-meta {
          padding-top: 18px;
        }

        .film-card-kicker {
          font-family: var(--font-sans,'Manrope',sans-serif);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0 0 10px;
        }

        .film-card-meta h2 {
          font-family: var(--font-serif,'Noto Serif',serif);
          font-size: clamp(1.4rem, 2.4vw, 2.2rem);
          font-weight: 400;
          line-height: 1.2;
          margin: 0;
        }

        .films-page .fade-in-section {
          animation: filmRise 0.8s cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes filmRise {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="films-page">
        <div className="films-shell">
          <section className="films-intro fade-in-section">
            <h1>Cinematic Stories</h1>
            <p>A single premium entry point to the Anurag &amp; Shreya wedding film, presented with a clean editorial hierarchy.</p>
          </section>

          <FilmCard />
        </div>

      </div>
    </>
  );
}
