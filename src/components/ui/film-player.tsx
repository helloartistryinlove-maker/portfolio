"use client";

import Image from "next/image";
import { useState } from "react";

type FilmPlayerProps = {
  title: string;
  posterSrc: string;
  posterAlt: string;
  videoId: string;
};

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" aria-hidden="true" className="film-player-icon">
      <circle cx="32" cy="32" r="30" stroke="rgba(255,255,255,0.9)" strokeWidth="2.25" />
      <polygon points="27,20 49,32 27,44" fill="rgba(255,255,255,0.96)" />
    </svg>
  );
}

export function FilmPlayer({ title, posterSrc, posterAlt, videoId }: FilmPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0`;

  return (
    <div className={`film-player ${isPlaying ? "is-playing" : ""}`}>
      <style>{`
        .film-player {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 2px;
          background: linear-gradient(180deg, #2f241d 0%, #1d1713 100%);
          box-shadow: 0 12px 34px rgba(0, 0, 0, 0.08);
          isolation: isolate;
        }

        .film-player-stage,
        .film-player-frame {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .film-player-stage {
          opacity: 1;
          transition: opacity 300ms ease-in-out;
          cursor: pointer;
        }

        .film-player.is-playing .film-player-stage {
          opacity: 0;
          pointer-events: none;
        }

        .film-player-thumb {
          object-fit: cover;
        }

        .film-player-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%);
          transition: background 240ms ease-in-out, opacity 240ms ease-in-out;
          z-index: 1;
        }

        .film-player-stage:hover .film-player-overlay {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.54) 100%);
        }

        .film-player-play {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: grid;
          place-items: center;
          transition: transform 240ms ease-in-out, opacity 240ms ease-in-out, filter 240ms ease-in-out;
          filter: drop-shadow(0 0 18px rgba(255, 255, 255, 0.08));
        }

        .film-player-icon {
          width: clamp(76px, 8vw, 128px);
          height: clamp(76px, 8vw, 128px);
        }

        .film-player-icon circle {
          fill: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(8px);
        }

        .film-player-icon polygon {
          opacity: 0.92;
        }

        .film-player-stage:hover .film-player-play {
          transform: scale(1.05);
          filter: drop-shadow(0 0 22px rgba(255, 255, 255, 0.12));
        }

        .film-player-trigger {
          all: unset;
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .film-player-trigger:focus-visible {
          outline: 2px solid rgba(255, 255, 255, 0.8);
          outline-offset: -4px;
        }

        .film-player-label {
          position: absolute;
          left: clamp(18px, 4vw, 32px);
          bottom: clamp(18px, 4vw, 28px);
          z-index: 2;
          max-width: min(70%, 540px);
          color: rgba(255, 255, 255, 0.88);
          font-family: var(--font-sans,'Manrope',sans-serif);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.28);
          opacity: 0.88;
        }

        .film-player-frame {
          opacity: 0;
          transition: opacity 300ms ease-in-out;
        }

        .film-player.is-playing .film-player-frame {
          opacity: 1;
        }

        .film-player-frame iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .film-player-stage,
          .film-player-overlay,
          .film-player-play,
          .film-player-frame {
            transition: none;
          }
        }

        @media (max-width: 768px) {
          .film-player-icon {
            width: clamp(64px, 14vw, 92px);
            height: clamp(64px, 14vw, 92px);
          }

          .film-player-label {
            left: 16px;
            bottom: 16px;
            max-width: 78%;
          }
        }
      `}</style>

      <div className="film-player-stage">
        <button
          type="button"
          className="film-player-trigger"
          aria-label={`Play ${title}`}
          onClick={() => setIsPlaying(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setIsPlaying(true);
            }
          }}
        >
          <Image src={posterSrc} alt={posterAlt} fill priority sizes="(max-width: 768px) 100vw, 1200px" className="film-player-thumb" />
          <div className="film-player-overlay" />
          <div className="film-player-play" aria-hidden="true">
            <PlayIcon />
          </div>
          <span className="film-player-label">Play film</span>
        </button>
      </div>

      {isPlaying ? (
        <div className="film-player-frame">
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : null}
    </div>
  );
}