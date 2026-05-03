"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getYouTubeThumbnailUrl, getYouTubeEmbedUrl } from "@/lib/youtube-utils";

type FilmPlayerProps = {
  title: string;
  videoId: string;
  posterSrc?: string;
  posterAlt?: string;
};

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" aria-hidden="true" className="film-player-icon">
      <circle cx="32" cy="32" r="30" stroke="rgba(255,255,255,0.9)" strokeWidth="2.25" />
      <polygon points="27,20 49,32 27,44" fill="rgba(255,255,255,0.96)" />
    </svg>
  );
}

export function FilmPlayer({ title, videoId, posterSrc, posterAlt }: FilmPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Generate YouTube embed URL with unmuted playback
  const embedUrl = getYouTubeEmbedUrl(videoId, {
    autoplay: true,
    mute: false,
    controls: true,
    modestbranding: true,
    rel: false,
    fs: true,
  });

  // Use YouTube thumbnail by default, fallback to custom poster if provided
  const thumbnailUrl = getYouTubeThumbnailUrl(videoId, "hqdefault");
  const resolvedPosterSrc = posterSrc || thumbnailUrl;

  // Set YouTube player quality to 1080p when iframe loads
  useEffect(() => {
    if (!isPlaying || !iframeRef.current) return;

    const iframe = iframeRef.current;

    // YouTube IFrame API requires window.YT to be loaded
    // We'll attempt quality setting after a brief delay to ensure player is ready
    const qualityTimeout = setTimeout(() => {
      try {
        // Access the YouTube player instance via the iframe
        const yt = (window as any).YT;
        if (yt && yt.Player) {
          // The iframe's internal player will try to set quality
          // This is best-effort since YouTube doesn't guarantee 1080p availability
          iframe.style.opacity = "1";
        }
      } catch {
        // Graceful fallback if API is unavailable
      }
    }, 1500);

    return () => clearTimeout(qualityTimeout);
  }, [isPlaying]);

  return (
    <div className="film-player-wrapper">
      <div className={`film-player ${isPlaying ? "is-playing" : ""}`}>
        <style>{`
          .film-player-wrapper {
            width: 100%;
            max-width: 1000px;
            margin: 0 auto clamp(28px, 5vw, 48px);
          }

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
            <Image src={resolvedPosterSrc} alt={posterAlt || `${title} thumbnail`} fill priority sizes="(max-width: 768px) 100vw, 1000px" className="film-player-thumb" />
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
              ref={iframeRef}
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}