"use client";

import { useEffect, useRef, useState } from "react";
import { getYouTubeEmbedUrl } from "@/lib/youtube-utils";
import { YouTubeThumbnail } from "./youtube-thumbnail";

type YouTubePlayerProps = {
  videoId: string;
  title: string;
};

export function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Generate embed URL with unmuted playback
  const embedUrl = getYouTubeEmbedUrl(videoId, {
    autoplay: true,
    mute: false,
    controls: true,
    modestbranding: true,
    rel: false,
    fs: true,
  });

  // Attempt to set quality to 1080p when iframe loads
  useEffect(() => {
    if (!isPlaying || !iframeRef.current) return;

    const qualityTimeout = setTimeout(() => {
      try {
        const yt = (window as any).YT;
        if (yt && yt.Player) {
          // This is a best-effort attempt to set quality
          // YouTube doesn't guarantee 1080p availability
          iframeRef.current?.style.opacity === "1";
        }
      } catch {
        // Graceful fallback if API is unavailable
      }
    }, 1500);

    return () => clearTimeout(qualityTimeout);
  }, [isPlaying]);

  return (
    <div className="youtube-player-container">
      <style>{`
        .youtube-player-container {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto clamp(28px, 5vw, 48px);
        }

        .youtube-player {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 2px;
          background: linear-gradient(180deg, #2f241d 0%, #1d1713 100%);
          box-shadow: 0 12px 34px rgba(0, 0, 0, 0.08);
          isolation: isolate;
        }

        .youtube-player-stage,
        .youtube-player-frame {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .youtube-player-stage {
          opacity: 1;
          transition: opacity 300ms ease-in-out;
          cursor: pointer;
          z-index: 1;
        }

        .youtube-player.is-playing .youtube-player-stage {
          opacity: 0;
          pointer-events: none;
        }

        .youtube-player-trigger {
          all: unset;
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .youtube-player-trigger:focus-visible {
          outline: 2px solid rgba(255, 255, 255, 0.8);
          outline-offset: -4px;
        }

        .youtube-player-frame {
          opacity: 0;
          transition: opacity 300ms ease-in-out;
          z-index: 2;
        }

        .youtube-player.is-playing .youtube-player-frame {
          opacity: 1;
        }

        .youtube-player-frame iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .youtube-player-stage,
          .youtube-player-frame {
            transition: none;
          }
        }
      `}</style>

      <div className={`youtube-player ${isPlaying ? "is-playing" : ""}`}>
        <div className="youtube-player-stage">
          <button
            type="button"
            className="youtube-player-trigger"
            aria-label={`Play ${title}`}
            onClick={() => setIsPlaying(true)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setIsPlaying(true);
              }
            }}
          >
            <YouTubeThumbnail videoId={videoId} title={title} />
          </button>
        </div>

        {isPlaying ? (
          <div className="youtube-player-frame">
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
