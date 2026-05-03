"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const clientGalleries = [
  {
    id: "anurag-shreya",
    slug: "anurag-shreya",
    title: "Anurag & Shreya",
  },
];

type GalleryImage = {
  src: string;
  subfolder: string;
  filename: string;
};

const blogHeroPoster = "/testimonial.jpg";
const blogCoverImage = "/images/Blog Page Only/2X3A9673.jpg";

function BlogHeroMedia() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "140px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="blog-hero-wrapper">
      {isMobile ? (
        <Image
          src={blogHeroPoster}
          alt="Wedding film still"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="blog-hero-video"
        />
      ) : (
        <video
          autoPlay={shouldLoad}
          muted
          playsInline
          loop
          preload="none"
          poster={blogHeroPoster}
          className="blog-hero-video"
        >
          {shouldLoad ? (
            <>
              <source src="/wedding-trailer.webm" type="video/webm" />
              <source src="/wedding-trailer.mp4" type="video/mp4" />
            </>
          ) : null}
        </video>
      )}
      <div className="blog-hero-overlay" />
    </div>
  );
}

export default function BlogsPage() {
  return (
    <>
      <style>{`
        .blogs-page {
          background: var(--bg);
          color: var(--text-primary);
        }

        .blog-section {
          padding-block: clamp(60px, 12vw, 160px);
        }

        .blog-section-tight {
          padding-block: clamp(40px, 8vw, 80px);
        }

        .hero-copy {
          max-width: 66rem;
          margin-inline: auto;
          text-align: center;
          padding-inline: clamp(16px, 5vw, 40px);
        }

        .hero-title {
          margin-top: .75rem;
          font-size: clamp(1.75rem, 5vw, 64px);
        }

        .hero-lead {
          max-width: 40rem;
          margin: 1rem auto 0;
          font-size: clamp(1rem, 2.5vw, 1.1rem);
          line-height: 1.75;
          color: var(--text-secondary);
        }

        .category-row {
          display: flex;
          justify-content: center;
          gap: clamp(12px, 3vw, 1.75rem);
          flex-wrap: wrap;
          padding: clamp(12px, 2vw, 1rem) 0;
          border-bottom: 1px solid rgba(45, 35, 28, 0.08);
          padding-inline: clamp(16px, 5vw, 40px);
        }

        .category-row a {
          font-family: var(--font-sans);
          font-size: clamp(.65rem, 1.5vw, .75rem);
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--text-secondary);
          position: relative;
          padding-bottom: .75rem;
          white-space: nowrap;
        }

        .category-row a.active {
          color: var(--text-primary);
        }

        .category-row a.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 1px;
          background: var(--text-primary);
        }

        .featured-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 4vw, 24px);
          align-items: start;
          padding-inline: clamp(16px, 5vw, 40px);
        }

        @media (min-width: 768px) {
          .featured-layout {
            grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
            gap: var(--gutter);
          }
        }

        .featured-panel {
          position: relative;
          overflow: hidden;
          background: var(--bg-surface);
          border: 1px solid rgba(45, 35, 28, 0.08);
        }

        .featured-panel .media-placeholder {
          aspect-ratio: 16 / 9;
        }

        .featured-panel-copy {
          padding: clamp(1rem, 3vw, 1.75rem);
        }

        .featured-side {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(12px, 3vw, 24px);
        }

        .feature-card {
          background: var(--bg-surface);
          border: 1px solid rgba(45, 35, 28, 0.08);
          overflow: hidden;
        }

        .feature-card-copy {
          padding: clamp(.95rem, 2vw, 1.25rem);
        }

        .feature-card-copy h3 {
          font-family: var(--font-serif);
          font-size: clamp(1.1rem, 2.5vw, 1.35rem);
          line-height: 1.2;
          margin-top: .55rem;
        }

        .feature-card-copy p {
          margin-top: .55rem;
          font-size: clamp(.9rem, 1.5vw, .93rem);
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .feature-meta {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          margin-top: 1rem;
          padding-top: .85rem;
          border-top: 1px solid rgba(45, 35, 28, 0.08);
          flex-wrap: wrap;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.2rem, 3vw, 2rem);
          padding-inline: clamp(16px, 5vw, 40px);
        }

        @media (min-width: 640px) {
          .story-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .story-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        .story-card {
          background: transparent;
        }

        .story-card .media-placeholder {
          aspect-ratio: 4 / 5;
        }

        .story-copy {
          padding-top: 1rem;
        }

        .story-copy h3 {
          font-family: var(--font-serif);
          font-size: clamp(1.2rem, 2.5vw, 1.55rem);
          line-height: 1.15;
          margin-top: .5rem;
        }

        .story-copy p {
          margin-top: .55rem;
          font-size: clamp(.88rem, 1.5vw, .92rem);
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .story-note {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-top: .75rem;
          font-size: .68rem;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .archive-cta {
          text-align: center;
          padding-top: 1.5rem;
        }

        .newsletter-shell {
          background: var(--bg-surface);
          border-top: 1px solid rgba(45, 35, 28, 0.08);
          border-bottom: 1px solid rgba(45, 35, 28, 0.08);
        }

        .newsletter-inner {
          max-width: 54rem;
          margin-inline: auto;
          text-align: center;
          padding-inline: clamp(16px, 5vw, 40px);
        }

        .newsletter-form {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: clamp(12px, 2vw, 1rem);
          margin-top: clamp(1.2rem, 3vw, 2rem);
          align-items: end;
        }

        @media (max-width: 560px) {
          .newsletter-form {
            grid-template-columns: 1fr;
          }
        }

        .newsletter-form input {
          width: 100%;
        }

        @media (max-width: 768px) {
          .featured-layout {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 760px) {
          .story-grid,
          .newsletter-form {
            grid-template-columns: 1fr;
            display: grid;
          }

          .featured-panel-copy {
            padding: 1.35rem;
          }
        }

        .blog-hero-wrapper {
          position: relative;
          width: 100%;
          height: 65vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(180deg, #4a372c 0%, #2d231c 100%);
        }

        .blog-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .blog-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(45,35,28,0.48) 0%, rgba(45,35,28,0.08) 50%, rgba(45,35,28,0.42) 100%);
          z-index: 1;
        }

        .wedding-blogs-section {
          padding: clamp(60px, 12vw, 120px) clamp(16px, 5vw, 40px);
          text-align: center;
          background: var(--bg-surface);
        }

        .wedding-blogs-header {
          margin-bottom: clamp(40px, 8vw, 80px);
        }

        .wedding-blogs-title {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 400;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .wedding-blogs-subtitle {
          font-family: var(--font-serif);
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-style: italic;
          color: var(--text-secondary);
          max-width: 800px;
          margin-inline: auto;
          line-height: 1.6;
        }

        .client-galleries-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: clamp(24px, 4vw, 40px);
          max-width: 420px;
          margin-inline: auto;
        }

        .client-gallery-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          text-align: center;
          text-decoration: none;
          color: inherit;
        }

        .client-gallery-image-shell {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(45, 35, 28, 0.14);
          background:
            linear-gradient(180deg, rgba(251, 247, 243, 0.9) 0%, rgba(234, 216, 202, 0.55) 100%),
            repeating-linear-gradient(
              -45deg,
              rgba(138, 95, 69, 0.04),
              rgba(138, 95, 69, 0.04) 12px,
              rgba(138, 95, 69, 0.01) 12px,
              rgba(138, 95, 69, 0.01) 24px
            );
        }

        .client-gallery-title {
          font-family: var(--font-serif);
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          color: var(--text-primary);
          margin-bottom: .7rem;
        }

        .gallery-status-copy {
          font-family: var(--font-sans);
          color: var(--text-secondary);
          font-size: .9rem;
          line-height: 1.6;
          margin-top: .8rem;
        }
      `}</style>

      <div className="blogs-page">
        <section>
          <BlogHeroMedia />
        </section>

        <section className="wedding-blogs-section fade-in-section">
          <div className="wedding-blogs-header">
            <h1 className="wedding-blogs-title">Wedding Blogs</h1>
            <p className="wedding-blogs-subtitle">
              &ldquo;Memories are timeless treasures of the heart, captured forever in the lens of the mind.&rdquo;
            </p>
          </div>

          <div className="client-galleries-grid">
            {clientGalleries.map((gallery) => (
              <Link
                key={gallery.id}
                href={`/blogs/${gallery.slug}`}
                className="client-gallery-card fade-in-section"
                style={{ transitionDelay: "0s" }}
              >
                <div className="client-gallery-image-shell" aria-label={`Gallery cover for ${gallery.title}`}>
                  <Image
                    src={blogCoverImage}
                    alt={`${gallery.title} cover`}
                    fill
                    sizes="(max-width: 560px) 100vw, 420px"
                    quality={78}
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <h3 className="client-gallery-title">{gallery.title}</h3>
              </Link>
            ))}
          </div>
        </section>





        <section className="blog-section newsletter-shell fade-in-section">
          <div className="page-wrap">
            <div className="newsletter-inner">
              <h2 className="headline-lg" style={{ marginBottom: "1rem" }}>Join the Inner Circle</h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>
                Occasional letters on photography, life, and the pursuit of beauty delivered straight to your inbox.
              </p>
              <form className="newsletter-form">
                <label style={{ flex: 1, display: "flex", flexDirection: "column", gap: ".4rem", textAlign: "left" }}>
                  <span className="label-sm" style={{ color: "var(--text-muted)" }}>Email Address</span>
                  <input className="field" placeholder="YOUR EMAIL ADDRESS" type="email" />
                </label>
                <button className="btn-primary sheen" type="submit">
                  Subscribe
                </button>
              </form>
              <p className="label-sm" style={{ marginTop: "1rem", color: "var(--text-muted)" }}>
                No spam. Only art. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
