"use client";

import Image from "next/image";
import { useState } from "react";
import { getYouTubeThumbnailWithFallbacks } from "@/lib/youtube-utils";

type YouTubeThumbnailProps = {
  videoId: string;
  title: string;
};

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

export function YouTubeThumbnail({ videoId, title }: YouTubeThumbnailProps) {
  const { primary, fallbacks } = getYouTubeThumbnailWithFallbacks(videoId);
  const [currentSrc, setCurrentSrc] = useState(primary);
  const [fallbackIndex, setFallbackIndex] = useState(0);

  const handleImageError = () => {
    if (fallbackIndex < fallbacks.length) {
      const nextSrc = fallbacks[fallbackIndex];
      setCurrentSrc(nextSrc);
      setFallbackIndex(fallbackIndex + 1);
    }
    // If all fallbacks exhausted, display will be the last attempted src
    // This is a graceful fallback to hqdefault which always exists
  };

  return (
    <div className="youtube-thumbnail">
      <style>{`
        .youtube-thumbnail {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 2px;
          background: linear-gradient(180deg, #2f241d 0%, #1d1713 100%);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          isolation: isolate;
        }

        .youtube-thumbnail-img {
          object-fit: cover;
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1), filter 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .youtube-thumbnail-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.48) 100%);
          z-index: 1;
          transition: background 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .youtube-thumbnail-play {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1), opacity 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .youtube-thumbnail:hover .youtube-thumbnail-img {
          transform: scale(1.03);
          filter: brightness(1.06);
        }

        .youtube-thumbnail:hover .youtube-thumbnail-overlay {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.56) 100%);
        }

        .youtube-thumbnail:hover .youtube-thumbnail-play {
          transform: scale(1.08);
        }

        .youtube-thumbnail svg {
          width: clamp(48px, 8vw, 72px);
          height: clamp(48px, 8vw, 72px);
          filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.1));
        }
      `}</style>

      <Image
        src={currentSrc}
        alt={`${title} thumbnail`}
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        className="youtube-thumbnail-img"
        loading="lazy"
        onError={handleImageError}
      />
      <div className="youtube-thumbnail-overlay" />
      <div className="youtube-thumbnail-play" aria-hidden="true">
        <PlayIcon />
      </div>
    </div>
  );
}
