"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { BlogDetailAudioPlayer } from "@/components/ui/blog-detail-audio-player";
import { EditorialGallery } from "@/components/ui/editorial-gallery";
import {
  buildGalleryCacheKeyPrefix,
  readGalleryCache,
  writeGalleryCache,
  type GalleryImage,
} from "@/lib/gallery-cache";

type BlogPost = {
  title: string;
  location: string;
  date: string;
  story: string;
};

const blogPosts: Record<string, BlogPost> = {
  "anurag-shreya": {
    title: "Anurag & Shreya",
    location: "India",
    date: "Wedding Story",
    story: "A curated visual narrative from pre-wedding celebrations through the wedding day, blending color, emotion, and documentary moments.",
  },
};

const INITIAL_VISIBLE_IMAGES = 40;
const LOAD_MORE_BATCH = 20;

export default function BlogPostDetail() {
  const { slug } = useParams();
  const post = blogPosts[slug as string];
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_IMAGES);
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [galleryError, setGalleryError] = useState<string | null>(null);

  useEffect(() => {
    if (slug !== "anurag-shreya") {
      setGalleryLoading(false);
      return;
    }

    let isMounted = true;

    const loadGallery = async () => {
      try {
        setGalleryLoading(true);
        const response = await fetch(`/api/gallery?client=${encodeURIComponent("Anurag&Shreya")}`, { cache: "no-store" });

        if (!response.ok) throw new Error("Could not load manifest");

        const data = (await response.json()) as Array<{ path: string }>;
        console.log("API DATA", data);

        const manifest = data.reduce<Record<string, string[]>>((accumulator, item) => {
          const normalizedPath = item.path.replace(/^\/+/, "");
          const parts = normalizedPath.split("/");
          const subfolder = parts.length > 1 ? parts[parts.length - 2] : "root";

          if (!accumulator[subfolder]) {
            accumulator[subfolder] = [];
          }

          accumulator[subfolder].push(normalizedPath);
          return accumulator;
        }, {});

        const allUrls = data.map((item) => item.path.replace(/^\/+/, ""));
        console.log("Total images received:", allUrls.length);

        const cacheKeyPrefix = buildGalleryCacheKeyPrefix("anurag-shreya", allUrls);
        const cachedImages = readGalleryCache(cacheKeyPrefix);
        let galleryToUse: GalleryImage[];

        if (cachedImages) {
          galleryToUse = cachedImages;
          console.log("SELECTED IMAGES", cachedImages);
          console.log("Images passed to gallery:", cachedImages.length);
        } else {
          const { buildCombinedSelected } = await import("@/lib/gallery-utils");
          const selectedImages = buildCombinedSelected(manifest).combined;
          console.log("SELECTED IMAGES", selectedImages);
          console.log("Images passed to gallery:", selectedImages.length);
          writeGalleryCache(cacheKeyPrefix, selectedImages, allUrls);
          galleryToUse = selectedImages;
        }

        if (isMounted) {
          setGalleryImages(galleryToUse);
          setVisibleCount(Math.min(INITIAL_VISIBLE_IMAGES, galleryToUse.length));
          setGalleryError(null);
        }
      } catch (error) {
        if (isMounted) {
          setGalleryError(error instanceof Error ? error.message : "Could not load gallery images.");
          setGalleryImages([]);
          setVisibleCount(0);
        }
      } finally {
        if (isMounted) setGalleryLoading(false);
      }
    };

    loadGallery();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  const visibleImages = useMemo(
    () => galleryImages.slice(0, visibleCount),
    [galleryImages, visibleCount],
  );
  const canLoadMore = visibleCount < galleryImages.length;

  const handleLoadMore = () => {
    setVisibleCount((current) => Math.min(current + LOAD_MORE_BATCH, galleryImages.length));
  };

  const heroImg = slug === "anurag-shreya"
    ? "/images/Blog Page Only/2X3A9669.jpg"
    : galleryImages[0]?.path ?? "/testimonial.jpg";

  if (!post) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-serif)" }}>
        <h1>Story not found.</h1>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .post-hero {
          position: relative;
          width: 100%;
          height: 80vh;
          overflow: hidden;
          background: linear-gradient(180deg, #4a372c 0%, #2d231c 100%);
        }

        .post-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
        }

        .post-hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--bg-surface);
          z-index: 2;
          padding: 20px;
        }

        .post-title {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 400;
          margin-bottom: 1rem;
        }

        .post-meta {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.8;
        }

        .post-story-section {
          padding: clamp(60px, 12vw, 120px) clamp(16px, 5vw, 40px);
          max-width: 900px;
          margin-inline: auto;
          text-align: center;
        }

        .post-story-text {
          font-family: var(--font-serif);
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          line-height: 1.8;
          color: var(--text-primary);
          font-style: italic;
        }

        .post-gallery-section {
          padding-bottom: clamp(60px, 12vw, 120px);
          padding-inline: clamp(16px, 5vw, 40px);
        }

        .post-gallery-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 20px;
          max-width: 1400px;
          margin-inline: auto;
        }

        @media (min-width: 768px) {
          .post-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          /* Asymmetrical grid effect */
          .post-gallery-grid div:nth-child(3n) {
            grid-column: span 2;
          }
        }

        .gallery-img-wrapper {
          position: relative;
          aspect-ratio: 3 / 2;
          overflow: hidden;
          background: var(--bg-surface);
        }

        .gallery-img {
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-img-wrapper:hover .gallery-img {
          transform: scale(1.05);
        }

        .gallery-status-copy {
          text-align: center;
          font-family: var(--font-sans);
          color: var(--text-secondary);
          font-size: .95rem;
          margin-top: 1rem;
        }

        .gallery-load-more-wrap {
          display: flex;
          justify-content: center;
          margin-top: clamp(40px, 8vw, 80px);
          padding-inline: clamp(16px, 5vw, 40px);
        }

        .post-footer-nav {
          padding: 60px 40px;
          text-align: center;
          border-top: 1px solid var(--border);
        }

        .back-to-blogs {
          font-family: var(--font-sans);
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .back-to-blogs::before {
          content: '←';
        }
      `}</style>

      <div className="post-detail-page">
        <BlogDetailAudioPlayer />
        <section className="post-hero">
          <OptimizedImage
            src={heroImg}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            quality={80}
            className="post-hero-img"
          />
          <div className="post-hero-content">
            <RevealOnScroll>
              <h1 className="post-title">{post.title}</h1>
              <p className="post-meta">{post.location} &bull; {post.date}</p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="post-story-section fade-in-section">
          <RevealOnScroll>
            <p className="post-story-text">
              {post.story}
            </p>
          </RevealOnScroll>
        </section>

        <section className="post-gallery-section fade-in-section">
          {slug === "anurag-shreya" ? (
            <>
              {galleryLoading ? (
                <div className="editorial-gallery">
                  <div className="editorial-section">
                    <p className="gallery-status-copy">Loading gallery...</p>
                  </div>
                </div>
              ) : null}

              {galleryError ? (
                <div className="editorial-gallery">
                  <div className="editorial-section">
                    <p className="gallery-status-copy">{galleryError}</p>
                  </div>
                </div>
              ) : null}

              {!galleryLoading && !galleryError ? (
                <>
                  <EditorialGallery images={visibleImages} />
                  {canLoadMore ? (
                    <div className="gallery-load-more-wrap">
                      <button type="button" className="btn-ghost" onClick={handleLoadMore}>
                        Load More Stories
                      </button>
                    </div>
                  ) : null}
                </>
              ) : null}
            </>
          ) : (
            <>
              {galleryLoading ? (
                <div className="post-gallery-grid">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={`placeholder-${i}`} className="gallery-img-wrapper" />
                  ))}
                </div>
              ) : null}

              {galleryError ? (
                <p className="gallery-status-copy">{galleryError}</p>
              ) : null}

              {!galleryLoading && !galleryError ? (
                <>
                  <div className="post-gallery-grid">
                    {visibleImages.map((img, i) => (
                      <RevealOnScroll key={`${img.subfolder}-${img.filename}`} delayMs={i % 2 * 100}>
                        <div className="gallery-img-wrapper" title={`${img.subfolder} / ${img.filename}`}>
                          <Image
                            src={img.src}
                            alt={`Gallery image ${i + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={80}
                            unoptimized
                            className="gallery-img"
                          />
                        </div>
                      </RevealOnScroll>
                    ))}
                  </div>

                  {canLoadMore ? (
                    <div className="gallery-load-more-wrap">
                      <button type="button" className="btn-ghost" onClick={handleLoadMore}>
                        Load More
                      </button>
                    </div>
                  ) : null}
                </>
              ) : null}
            </>
          )}
        </section>

        <section className="post-footer-nav fade-in-section">
          <Link href="/blogs" className="back-to-blogs">
            Back to All Stories
          </Link>
        </section>
      </div>
    </>
  );
}
