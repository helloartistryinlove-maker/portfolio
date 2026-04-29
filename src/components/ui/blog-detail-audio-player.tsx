"use client";

import { useEffect, useRef, useState } from "react";

const BLOG_DETAIL_AUDIO_SRC = "/audio/blog-theme.wav";

export function BlogDetailAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const audio = new Audio(BLOG_DETAIL_AUDIO_SRC);
    audio.loop = true;
    audio.preload = "none";
    audio.volume = 0.62;
    audioRef.current = audio;

    let isMounted = true;

    const syncState = () => {
      if (!isMounted) return;
      setIsPlaying(!audio.paused);
    };

    const handlePlay = () => {
      syncState();
      setAutoplayBlocked(false);
    };

    const handlePause = () => {
      syncState();
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handlePause);

    // Attempt autoplay on mount (user has already clicked link to reach here)
    const startPlayback = async () => {
      try {
        audio.currentTime = 0;
        await audio.play();
      } catch {
        if (isMounted) {
          setAutoplayBlocked(true);
          setIsPlaying(false);
        }
      }
    };

    // Small delay to ensure component is mounted and page is interactive
    const timer = setTimeout(() => {
      void startPlayback();
    }, 100);

    return () => {
      clearTimeout(timer);
      isMounted = false;
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handlePause);
      audio.removeAttribute("src");
      audio.load();
      audioRef.current = null;
    };
  }, []);

  // Fallback: attempt to play on first user interaction if autoplay was blocked
  useEffect(() => {
    if (!autoplayBlocked || isPlaying) return;

    const handleInteraction = async () => {
      if (audioRef.current && audioRef.current.paused) {
        try {
          await audioRef.current.play();
          setAutoplayBlocked(false);
        } catch {
          // Still blocked - user can manually click play
        }
      }
    };

    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [autoplayBlocked, isPlaying]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        setAutoplayBlocked(false);
        await audio.play();
      } catch {
        setAutoplayBlocked(true);
      }
      return;
    }

    audio.pause();
  };

  return (
    <div className="blog-detail-audio-shell">
      <button
        type="button"
        className="blog-detail-audio-button"
        onClick={togglePlayback}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause blog music" : "Play blog music"}
        title={isPlaying ? "Pause" : "Play"}
      >
        <span className="blog-detail-audio-label">Story Music</span>
        <span className={`blog-detail-audio-dot${isPlaying ? " is-playing" : ""}`} aria-hidden="true" />
        <span className="blog-detail-audio-copy">
          <span className="blog-detail-audio-state">{isPlaying ? "Pause" : "Play"}</span>
        </span>
      </button>
      {autoplayBlocked ? (
        <p className="blog-detail-audio-note">Autoplay blocked. Tap Play.</p>
      ) : null}

      <style>{`
        .blog-detail-audio-shell {
          position: fixed;
          right: calc(clamp(16px, 4vw, 32px) + env(safe-area-inset-right));
          bottom: calc(clamp(16px, 3vw, 28px) + env(safe-area-inset-bottom));
          z-index: 120;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          pointer-events: auto;
        }

        .blog-detail-audio-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(45, 35, 28, 0.15);
          background: rgba(255, 255, 255, 0.85);
          color: var(--text-primary);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 999px;
          padding: 14px 18px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
          text-align: left;
        }

        .blog-detail-audio-button:hover {
          transform: translateY(-2px);
          border-color: rgba(45, 35, 28, 0.3);
          background: #ffffff;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
        }

        .blog-detail-audio-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(45, 35, 28, 0.3);
          box-shadow: 0 0 0 0 rgba(45, 35, 28, 0.2);
        }

        .blog-detail-audio-dot.is-playing {
          background: var(--text-primary);
          animation: blog-detail-audio-pulse 1.8s ease-out infinite;
        }

        .blog-detail-audio-copy {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .blog-detail-audio-label {
          font-family: var(--font-sans);
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.82;
          white-space: nowrap;
        }

        .blog-detail-audio-state {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .blog-detail-audio-note {
          margin: 0;
          padding-right: 4px;
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        @keyframes blog-detail-audio-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(45, 35, 28, 0.35);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(45, 35, 28, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(45, 35, 28, 0);
          }
        }

        @media (max-width: 640px) {
          .blog-detail-audio-shell {
            right: calc(12px + env(safe-area-inset-right));
            bottom: calc(12px + env(safe-area-inset-bottom));
            align-items: flex-end;
          }

          .blog-detail-audio-button {
            width: auto;
            padding: 12px 14px;
            gap: 8px;
          }

          .blog-detail-audio-state {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
}
