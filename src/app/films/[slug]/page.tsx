import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FilmPlayer } from "@/components/ui/film-player";

type FilmPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function FilmDetailPage({ params }: FilmPageProps) {
  const { slug } = await params;

  if (slug !== "anurag-shreya") {
    notFound();
  }

  return (
    <main className="film-detail-page">
      <style>{`
        .film-detail-page {
          min-height: 100vh;
          background: var(--bg);
          color: var(--text-primary);
          padding-inline: clamp(16px, 5vw, 40px);
          padding-block: clamp(48px, 8vw, 96px);
        }

        .film-detail-shell {
          max-width: 1440px;
          margin: 0 auto;
        }

        .film-detail-kicker {
          font-family: var(--font-sans,'Manrope',sans-serif);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0 0 18px;
        }

        .film-detail-title {
          font-family: var(--font-serif,'Noto Serif',serif);
          font-size: clamp(2.3rem, 5vw, 5.4rem);
          line-height: 1.02;
          font-weight: 400;
          letter-spacing: -0.03em;
          max-width: 820px;
          margin: 0 0 18px;
        }

        .film-detail-copy {
          max-width: 620px;
          font-family: var(--font-sans,'Manrope',sans-serif);
          font-size: clamp(1rem, 2vw, 1.1rem);
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0 0 clamp(28px, 5vw, 48px);
        }

        .film-detail-visual {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 9;
          border-radius: 2px;
          box-shadow: 0 12px 34px rgba(0, 0, 0, 0.08);
          background: linear-gradient(180deg, #2f241d 0%, #1d1713 100%);
        }

        .film-detail-image {
          object-fit: cover;
        }

        .film-detail-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.42) 100%);
          pointer-events: none;
        }

        .film-detail-back {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: clamp(24px, 4vw, 36px);
          text-decoration: none;
          color: var(--text-primary);
          font-family: var(--font-sans,'Manrope',sans-serif);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .film-detail-back::before {
          content: "←";
        }

        @media (max-width: 768px) {
          .film-detail-visual {
            aspect-ratio: 4 / 5;
          }
        }
      `}</style>

      <div className="film-detail-shell">
        <p className="film-detail-kicker">Wedding Film</p>
        <h1 className="film-detail-title">Anurag &amp; Shreya Wedding Film</h1>
        <p className="film-detail-copy">
          A cinematic wedding story entry point designed to feel minimal, premium, and focused on the still frame before the film begins.
        </p>

        <FilmPlayer
          title="Anurag & Shreya Wedding Film"
          posterSrc="/Anurag&Shreya/Wedding/238A3328.jpg"
          posterAlt="Anurag & Shreya Wedding Film poster"
          videoId="bKetYuPYvX8"
        />

        <Link href="/films" className="film-detail-back">
          Back to Films
        </Link>
      </div>
    </main>
  );
}
