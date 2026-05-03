"use client";

import Image from "next/image";
import React, { useMemo } from "react";

type GalleryImage = {
  src: string;
  subfolder: string;
  filename: string;
};

type LayoutPattern = "hero-full" | "balanced-split" | "equal-halves" | "tight-grid";

interface EditorialGalleryProps {
  images: GalleryImage[];
}

const PATTERN_SEQUENCE: LayoutPattern[] = ["hero-full", "balanced-split", "equal-halves", "tight-grid"];
const PATTERN_COUNTS: Record<LayoutPattern, number> = {
  "hero-full": 1,
  "balanced-split": 3,
  "equal-halves": 2,
  "tight-grid": 3,
};

// Minimal blur placeholder (semi-transparent dark)
const BLUR_PLACEHOLDER = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGZpbHRlciBpZD0iYiI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43IiBudW1PY3RhdmVzPSI0IiByZXN1bHQ9Im5vaXNlIiAvPgogICAgPGZlQ29sb3JNYXRyaXggaW4gIm5vaXNlIiB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIiAvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMmQyMzFjIiBmaWx0ZXI9InVybCgjYikiIG9wYWNpdHk9IjAuNyIgLz4KPC9zdmc+";

function getPatternForSection(sectionIndex: number): LayoutPattern {
  return PATTERN_SEQUENCE[sectionIndex % PATTERN_SEQUENCE.length];
}

function getPatternForRemaining(remaining: number): LayoutPattern {
  if (remaining <= 1) return "hero-full";
  if (remaining === 2) return "equal-halves";
  return "balanced-split";
}

function buildSections(images: GalleryImage[]) {
  const sections: Array<{ pattern: LayoutPattern; images: GalleryImage[] }> = [];
  let cursor = 0;

  while (cursor < images.length) {
    const remaining = images.length - cursor;
    const sequencePattern = getPatternForSection(sections.length);
    const pattern = remaining >= PATTERN_COUNTS[sequencePattern] ? sequencePattern : getPatternForRemaining(remaining);
    const count = Math.min(PATTERN_COUNTS[pattern], remaining);

    sections.push({ pattern, images: images.slice(cursor, cursor + count) });
    cursor += count;
  }

  const lastSection = sections[sections.length - 1];
  if (lastSection && lastSection.pattern !== "hero-full" && lastSection.images.length === 3) {
    const closingImage = lastSection.images[2];
    sections[sections.length - 1] = {
      pattern: "equal-halves",
      images: lastSection.images.slice(0, 2),
    };
    sections.push({
      pattern: "hero-full",
      images: [closingImage],
    });
  }

  return sections;
}

function renderSection(
  section: { pattern: LayoutPattern; images: GalleryImage[] },
  sectionIndex: number,
  totalSections: number,
) {
  const isFirstSection = sectionIndex === 0;
  const isFinalSection = sectionIndex === totalSections - 1;

  switch (section.pattern) {
    case "hero-full":
      return renderHeroFull(section.images, isFirstSection, isFinalSection);
    case "balanced-split":
      return renderBalancedSplit(section.images, sectionIndex, isFirstSection);
    case "equal-halves":
      return renderEqualHalves(section.images, sectionIndex, isFirstSection);
    case "tight-grid":
      return renderTightGrid(section.images, sectionIndex, isFirstSection);
    default:
      return renderHeroFull(section.images, isFirstSection, isFinalSection);
  }
}

function ImageFrame({
  image,
  alt,
  className,
  delayIndex,
}: {
  image: GalleryImage;
  alt: string;
  className: string;
  quality?: number;
  sizes?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  delayIndex?: number;
  width?: number;
}) {
  return (
    <div
      className={className}
      style={delayIndex !== undefined ? ({ "--index": delayIndex } as React.CSSProperties) : undefined}
    >
      <img
        src={image.src}
        alt={alt}
        className="gallery-image"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function renderHeroFull(images: GalleryImage[], isFirstSection: boolean, isFinalSection: boolean) {
  const hero = images[0];

  return (
    <section className={`editorial-section pattern-c ${isFirstSection ? "first-section" : ""} ${isFinalSection ? "final-section" : ""}`}>
      {hero ? (
        <div className="pattern-c-frame">
          <ImageFrame
            image={hero}
            alt={`${hero.subfolder} feature`}
            className="frame frame-c"
            quality={isFirstSection ? 90 : 86}
            sizes="100vw"
            priority={isFirstSection}
            loading={isFirstSection ? "eager" : "lazy"}
            width={1800}
          />
          {isFinalSection ? <div className="final-overlay" /> : null}
          {isFinalSection ? <div className="final-caption">Anurag & Shreya</div> : null}
        </div>
      ) : null}
    </section>
  );
}

function renderBalancedSplit(images: GalleryImage[], sectionIndex: number, isFirstSection: boolean) {
  const hero = images[0];
  const top = images[1];
  const bottom = images[2];

  return (
    <section className={`editorial-section pattern-a ${isFirstSection ? "first-section" : ""}`}>
      <div className="pattern-a-shell">
        {hero ? (
          <ImageFrame
            image={hero}
            alt={`${hero.subfolder} feature`}
            className="frame frame-a-hero"
            quality={isFirstSection ? 90 : 84}
            sizes="(max-width: 1024px) 100vw, 58vw"
            priority={isFirstSection}
            loading={isFirstSection ? "eager" : sectionIndex < 2 ? "eager" : "lazy"}
            width={1600}
          />
        ) : null}

        <div className="pattern-a-stack">
          {top ? (
            <ImageFrame
              image={top}
              alt={`${top.subfolder} detail`}
              className="frame frame-a-small"
              quality={78}
              sizes="(max-width: 1024px) 50vw, 21vw"
              delayIndex={0}
              loading="lazy"
              width={1000}
            />
          ) : null}
          {bottom ? (
            <ImageFrame
              image={bottom}
              alt={`${bottom.subfolder} detail`}
              className="frame frame-a-small"
              quality={78}
              sizes="(max-width: 1024px) 50vw, 21vw"
              delayIndex={1}
              loading="lazy"
              width={1000}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

function renderEqualHalves(images: GalleryImage[], sectionIndex: number, isFirstSection: boolean) {
  const left = images[0];
  const right = images[1];

  return (
    <section className={`editorial-section pattern-b ${isFirstSection ? "first-section" : ""}`}>
      <div className="pattern-b-grid">
        {left ? (
          <ImageFrame
            image={left}
            alt={`${left.subfolder} detail`}
            className="frame frame-b"
            quality={isFirstSection ? 88 : 82}
            sizes="(max-width: 1024px) 100vw, 50vw"
            delayIndex={0}
            loading={isFirstSection ? "eager" : "lazy"}
            width={1400}
          />
        ) : null}
        {right ? (
          <ImageFrame
            image={right}
            alt={`${right.subfolder} detail`}
            className="frame frame-b"
            quality={82}
            sizes="(max-width: 1024px) 100vw, 50vw"
            delayIndex={1}
            loading="lazy"
            width={1400}
          />
        ) : null}
      </div>
    </section>
  );
}

function renderTightGrid(images: GalleryImage[], sectionIndex: number, isFirstSection: boolean) {
  const first = images[0];
  const second = images[1];
  const third = images[2];

  return (
    <section className={`editorial-section pattern-d ${isFirstSection ? "first-section" : ""}`}>
      <div className="pattern-d-grid">
        {first ? (
          <ImageFrame
            image={first}
            alt={`${first.subfolder} detail`}
            className="frame frame-d"
            quality={isFirstSection ? 86 : 80}
            sizes="(max-width: 1024px) 50vw, 33vw"
            delayIndex={0}
            loading={isFirstSection ? "eager" : "lazy"}
            width={1200}
          />
        ) : null}
        {second ? (
          <ImageFrame
            image={second}
            alt={`${second.subfolder} detail`}
            className="frame frame-d"
            quality={80}
            sizes="(max-width: 1024px) 50vw, 33vw"
            delayIndex={1}
            loading="lazy"
            width={1200}
          />
        ) : null}
        {third ? (
          <ImageFrame
            image={third}
            alt={`${third.subfolder} detail`}
            className="frame frame-d"
            quality={80}
            sizes="(max-width: 1024px) 50vw, 33vw"
            delayIndex={2}
            loading="lazy"
            width={1200}
          />
        ) : null}
      </div>
    </section>
  );
}

export function EditorialGallery({ images }: EditorialGalleryProps) {
  const sections = useMemo(() => {
    return buildSections(images);
  }, [images]);

  return (
    <div className="editorial-gallery">
      <style>{`
        .editorial-gallery {
          padding: clamp(40px, 8vw, 80px) 0;
          background: var(--bg-surface);
        }

        .editorial-section {
          display: block;
          padding-inline: clamp(16px, 5vw, 40px);
          max-width: 1440px;
          margin: 0 auto clamp(72px, 9vw, 112px);
        }

        .editorial-section.first-section {
          margin-bottom: clamp(92px, 11vw, 144px);
        }

        .editorial-section.final-section {
          margin-bottom: 0;
        }

        .pattern-c-frame,
        .pattern-a-shell,
        .pattern-b-grid,
        .pattern-d-grid {
          position: relative;
          width: 100%;
        }

        .pattern-c-frame {
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 2px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
          background: rgba(255, 255, 255, 0.02);
        }

        .final-section .pattern-c-frame {
          animation: cinematicClose 1.1s ease-out both;
          animation-delay: 180ms;
        }

        .final-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.18) 100%);
          pointer-events: none;
          z-index: 1;
        }

        .final-caption {
          position: absolute;
          left: 50%;
          bottom: clamp(20px, 5vw, 48px);
          transform: translateX(-50%);
          z-index: 2;
          font-family: var(--font-sans);
          font-size: clamp(18px, 3vw, 34px);
          font-weight: 300;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.86);
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.22);
          animation: textFadeIn 900ms ease-out 280ms both;
        }

        .pattern-a-shell {
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
          gap: clamp(14px, 1.6vw, 24px);
          align-items: stretch;
          min-height: clamp(520px, 58vw, 720px);
        }

        .pattern-a-stack {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: clamp(14px, 1.6vw, 24px);
          min-height: 100%;
        }

        .pattern-b-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(14px, 1.6vw, 24px);
          min-height: clamp(360px, 44vw, 560px);
        }

        .pattern-d-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(12px, 1.4vw, 20px);
          min-height: clamp(280px, 34vw, 440px);
        }

        .frame {
          position: relative;
          overflow: hidden;
          border-radius: 2px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.045);
          background: rgba(255, 255, 255, 0.02);
        }

        .frame-hero,
        .frame-c {
          aspect-ratio: 16 / 9;
        }

        .frame-a-hero {
          aspect-ratio: 4 / 5;
        }

        .frame-a-small,
        .frame-b,
        .frame-d {
          aspect-ratio: 1 / 1;
        }

        .gallery-image {
          object-fit: cover;
          width: 100%;
          height: 100%;
          transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1), filter 240ms cubic-bezier(0.22, 1, 0.36, 1);
          animation: imageLoadFade 380ms ease-out both;
        }

        .frame:hover .gallery-image {
          transform: scale(1.03);
          filter: brightness(1.05);
        }

        .frame,
        .pattern-c-frame {
          animation: fadeInUp 560ms ease-out both;
        }

        .first-section .frame-hero,
        .first-section .frame-c {
          animation: heroEntrance 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .pattern-a-shell .frame-a-small:nth-child(1),
        .pattern-d-grid .frame:nth-child(2) {
          transform: translateY(2px);
        }

        .pattern-a-shell .frame-a-small:nth-child(2),
        .pattern-d-grid .frame:nth-child(3) {
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .pattern-a-shell,
          .pattern-b-grid,
          .pattern-d-grid {
            min-height: auto;
          }

          .pattern-a-shell {
            grid-template-columns: 1fr 1fr;
            min-height: clamp(480px, 74vw, 640px);
          }

          .pattern-d-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pattern-d-grid .frame:nth-child(3) {
            grid-column: 1 / -1;
            aspect-ratio: 2 / 1;
          }
        }

        @media (max-width: 768px) {
          .editorial-section {
            padding-inline: 16px;
            margin-bottom: 72px;
          }

          .editorial-section.first-section {
            margin-bottom: 96px;
          }

          .pattern-a-shell,
          .pattern-b-grid,
          .pattern-d-grid {
            grid-template-columns: 1fr;
            min-height: auto;
            gap: 12px;
          }

          .pattern-a-stack {
            grid-template-rows: auto;
          }

          .pattern-a-stack .frame-a-small,
          .pattern-d-grid .frame:nth-child(3) {
            aspect-ratio: 4 / 5;
            grid-column: auto;
          }

          .pattern-c-frame {
            aspect-ratio: 4 / 3;
          }

          .frame-hero,
          .frame-c,
          .frame-b,
          .frame-d,
          .frame-a-hero,
          .frame-a-small {
            aspect-ratio: 4 / 5;
          }

          .final-caption {
            font-size: clamp(16px, 5vw, 24px);
            letter-spacing: 0.12em;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroEntrance {
          from {
            opacity: 0;
            transform: scale(0.98) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes imageLoadFade {
          from {
            opacity: 0.92;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes cinematicClose {
          from {
            opacity: 0;
            transform: scale(0.996);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes textFadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .frame,
        .pattern-c-frame {
          animation-delay: calc(var(--index, 0) * 40ms);
        }
      `}</style>

      {sections.map((section, sectionIndex) => (
        <React.Fragment key={`${section.pattern}-${sectionIndex}`}>
          {renderSection(section, sectionIndex, sections.length)}
        </React.Fragment>
      ))}
    </div>
  );
}
