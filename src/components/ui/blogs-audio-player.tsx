"use client";

import { useEffect, useRef, useState } from "react";

const BLOG_THEME_SRC = "/audio/blog-theme.wav";

export function BlogsAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const audio = new Audio(BLOG_THEME_SRC);
    audio.loop = true;
    audio.preload = "auto";
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

    void startPlayback();

    return () => {
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
    <div className="blogs-audio-shell">
      <button
        type="button"
        className="blogs-audio-button"
        onClick={togglePlayback}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause blogs music" : "Play blogs music"}
        title={isPlaying ? "Pause" : "Play"}
      >
        <span className="blogs-audio-label">Blog music</span>
        <span className={`blogs-audio-dot${isPlaying ? " is-playing" : ""}`} aria-hidden="true" />
        <span className="blogs-audio-copy">
          <span className="blogs-audio-state">{isPlaying ? "Pause" : "Play"}</span>
        </span>
      </button>
      {autoplayBlocked ? (
        <p className="blogs-audio-note">Autoplay blocked by browser. Tap Play.</p>
      ) : null}

      <style>{`
        .blogs-audio-shell {
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

        .blogs-audio-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(251, 247, 243, 0.26);
          background: linear-gradient(135deg, rgba(251, 247, 243, 0.18), rgba(242, 234, 228, 0.08));
          color: var(--bg-surface);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 999px;
          padding: 14px 18px;
          box-shadow: 0 12px 30px rgba(45, 35, 28, 0.12);
          cursor: pointer;
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
          text-align: left;
        }

        .blogs-audio-button:hover {
          transform: translateY(-1px);
          border-color: rgba(251, 247, 243, 0.42);
          background: linear-gradient(135deg, rgba(251, 247, 243, 0.24), rgba(242, 234, 228, 0.14));
        }

        .blogs-audio-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(251, 247, 243, 0.42);
          box-shadow: 0 0 0 0 rgba(251, 247, 243, 0.34);
        }

        .blogs-audio-dot.is-playing {
          background: #fff8f2;
          animation: blogs-audio-pulse 1.8s ease-out infinite;
        }

        .blogs-audio-copy {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .blogs-audio-label {
          font-family: var(--font-sans);
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.82;
          white-space: nowrap;
        }

        .blogs-audio-state {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .blogs-audio-note {
          margin: 0;
          padding-right: 4px;
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: rgba(255, 248, 242, 0.78);
        }

        @keyframes blogs-audio-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 248, 242, 0.35);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(255, 248, 242, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 248, 242, 0);
          }
        }

        @media (max-width: 640px) {
          .blogs-audio-shell {
            right: calc(12px + env(safe-area-inset-right));
            bottom: calc(12px + env(safe-area-inset-bottom));
            align-items: flex-end;
          }

          .blogs-audio-button {
            width: auto;
            padding: 12px 14px;
            gap: 8px;
          }

          .blogs-audio-state {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
}