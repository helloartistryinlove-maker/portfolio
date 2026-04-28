"use client";

import { useEffect, useState, useRef } from "react";

const SEQUENCE = [
  { phase: "ail",      ms: 1400 },
  { phase: "artistry", ms: 900  },
  { phase: "in",       ms: 650  },
  { phase: "love",     ms: 650  },
  { phase: "hold",     ms: 2600 },
  { phase: "collapse", ms: 1200 },
];

const ZONES = [
  { key: "a", letter: "A", rest: "rtistry" },
  { key: "i", letter: "I", rest: "n"       },
  { key: "l", letter: "L", rest: "ove"     },
];

const PHASE_TO_KEY = { artistry: "a", in: "i", love: "l" };
const CHAR_DELAY   = 60;
const ERASE_DELAY  = 35;

export function HeaderLogo({ className = "" }) {
  const [phase, setPhase] = useState("ail");
  const [chars, setChars] = useState({ a: 0, i: 0, l: 0 });
  const typeTimers = useRef([]);

  const clearTypeTimers = () => {
    typeTimers.current.forEach(clearTimeout);
    typeTimers.current = [];
  };

  const typeZone = (key, word) => {
    word.split("").forEach((_, idx) => {
      const t = setTimeout(() => {
        setChars(prev => ({ ...prev, [key]: idx + 1 }));
      }, idx * CHAR_DELAY);
      typeTimers.current.push(t);
    });
  };

  const eraseAll = () => {
    const order = [
      { key: "l", word: "ove"     },
      { key: "i", word: "n"       },
      { key: "a", word: "rtistry" },
    ];
    let delay = 0;
    order.forEach(({ key, word }) => {
      word.split("").forEach((_, idx) => {
        const t = setTimeout(() => {
          setChars(prev => ({ ...prev, [key]: word.length - idx - 1 }));
        }, delay + idx * ERASE_DELAY);
        typeTimers.current.push(t);
      });
      delay += word.length * ERASE_DELAY + 80;
    });
  };

  useEffect(() => {
    let active = true;
    const timers = [];

    const run = () => {
      timers.forEach(clearTimeout);
      timers.length = 0;
      if (!active) return;

      let cursor = 0;
      for (const step of SEQUENCE) {
        cursor += step.ms;
        timers.push(setTimeout(() => {
          if (!active) return;
          setPhase(step.phase);
          const key = PHASE_TO_KEY[step.phase];
          if (key) typeZone(key, ZONES.find(z => z.key === key).rest);
          if (step.phase === "collapse") eraseAll();
        }, cursor));
      }

      cursor += 240;
      timers.push(setTimeout(() => {
        if (!active) return;
        clearTypeTimers();
        setChars({ a: 0, i: 0, l: 0 });
        setPhase("ail");
        run();
      }, cursor));
    };

    run();
    return () => { active = false; timers.forEach(clearTimeout); clearTypeTimers(); };
  }, []);

  const isCompact = phase === "ail" || phase === "collapse";

  return (
    <>
      <style>{`
        /* Outer shell: FIXED so it never shifts the nav layout */
        .ail-shell {
          display: inline-block;
          /* Reserve the full expanded width at all times.
             The inner logo grows/shrinks freely inside. */
          min-width: max-content;
          overflow: visible;
          line-height: 1;
        }

        .ail-logo {
          display: inline-flex;
          align-items: baseline;
          white-space: nowrap;
          width: fit-content;
          line-height: 1;
          font-family: var(--font-logo, "Didot", "GFS Didot", Georgia, serif);
          font-weight: 400;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
          font-variant-ligatures: none;
          gap: 0.13em;
          transition: gap 480ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ail-logo.expanded { gap: 0.55em; }

        .ail-zone {
          display: inline-flex;
          align-items: baseline;
          flex-shrink: 0;
        }

        .ail-anchor {
          display: inline-block;
          flex: 0 0 auto;
        }

        .ail-rest {
          display: inline-flex;
          align-items: baseline;
          overflow: hidden;
          white-space: nowrap;
        }

        /* Hidden char: zero width, no space taken */
        .ail-char {
          display: inline-block;
          max-width: 0;
          overflow: hidden;
          opacity: 0;
          transform: translateY(5px);
          filter: blur(3px);
          transition:
            max-width 80ms linear,
            opacity   200ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 200ms cubic-bezier(0.16, 1, 0.3, 1),
            filter    200ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .ail-char.on {
          max-width: 1.4em;
          overflow: visible;
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .ail-logo { transition: none !important; }
          .ail-char { transition: none !important; max-width: 1.4em !important;
                      opacity: 1 !important; transform: none !important; filter: none !important; }
        }
      `}</style>

      {/* .ail-shell is what the nav sees — its footprint is stable */}
      <span className={`ail-shell ${className}`} aria-label="Artistry In Love" role="img">
        <span className={`ail-logo${isCompact ? "" : " expanded"}`}>
          {ZONES.map((zone) => (
            <span key={zone.key} className="ail-zone">
              <span className="ail-anchor">{zone.letter}</span>
              <span className="ail-rest" aria-hidden="true">
                {zone.rest.split("").map((ch, idx) => (
                  <span key={idx} className={`ail-char${idx < chars[zone.key] ? " on" : ""}`}>
                    {ch}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </span>
      </span>
    </>
  );
}