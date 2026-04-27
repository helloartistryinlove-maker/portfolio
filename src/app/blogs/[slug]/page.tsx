"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const blogPosts: Record<string, any> = {
  "suraj-risha-udaipur": {
    title: "Suraj & Risha, Udaipur",
    heroImg: "/portfolio1.jpg",
    location: "Udaipur, India",
    date: "Autumn MMXXIV",
    story: "Suraj and Risha chose the majestic city of Udaipur for their intimate wedding celebration, blending tradition, love, and breathtaking views into one unforgettable experience. The ceremony took place overlooking the serene waters of Lake Pichola, where the ancient stone architecture provided a timeless backdrop for their union. Every moment was a reflection of their deep connection, from the quiet morning preparations to the vibrant celebration that followed.",
  },
  "shraddha-neeti-goa": {
    title: "Shraddha and Neeti, Goa",
    heroImg: "/portfoli2.jpg",
    location: "Goa, India",
    date: "Winter MMXXIV",
    story: "Shraddha and Neeti's wedding was more than just a beautiful event; it was a powerful statement of love and acceptance. Set against the sun-drenched beaches of Goa, their celebration was filled with joy, laughter, and the warmth of their closest family and friends. It showed that true love can overcome any barrier and that every love story deserves to be celebrated with grandeur and authenticity.",
  },
  "grace-yohan-goa": {
    title: "Grace & Yohan, Goa",
    heroImg: "/portfoli3.jpg",
    location: "Goa, India",
    date: "Spring MMXXIV",
    story: "Grace and Yohan recently tied the knot in a beautifully intimate ceremony in Goa, surrounded by the serene beauty of the coastal paradise. Their wedding was a heartfelt and personal affair, focusing on the depth of their connection rather than the grandeur of the event. The sound of the waves and the gentle sea breeze added a magical layer to their vows.",
  },
  "aman-priya-jaipur": {
    title: "Aman & Priya, Jaipur",
    heroImg: "/foooter11.jpg",
    location: "Jaipur, India",
    date: "Summer MMXXIV",
    story: "A vibrant celebration of love in the Pink City. Aman and Priya's wedding was a masterclass in royal elegance, featuring historic palaces and timeless traditions. The city's rich heritage was woven into every aspect of the celebration, from the intricate decor to the traditional music that filled the air.",
  },
  "sanya-rohan-tuscany": {
    title: "Sanya & Rohan, Tuscany",
    heroImg: "/internationalsection.jpg",
    location: "Tuscany, Italy",
    date: "Summer MMXXIV",
    story: "An editorial escape to the rolling hills of Italy. Sanya and Rohan's sunset ceremony was a testament to understated luxury and the beauty of quiet, shared moments. The golden hour light across the vineyards created a dreamlike atmosphere as they exchanged their promises.",
  },
  "meera-arjun-mumbai": {
    title: "Meera & Arjun, Mumbai",
    heroImg: "/footer8.jpg",
    location: "Mumbai, India",
    date: "Monsoon MMXXIV",
    story: "A contemporary coastal celebration in the heart of Mumbai. Meera and Arjun's wedding blended urban energy with the calm of the Arabian Sea. Despite the monsoon rains, the celebration was full of light and warmth, capturing the unique spirit of the city.",
  },
};

const galleryImages = [
  "/portfolio1.jpg",
  "/portfoli2.jpg",
  "/portfoli3.jpg",
  "/foooter11.jpg",
  "/internationalsection.jpg",
  "/footer8.jpg",
  "/footer1.jpg",
  "/footer2.jpg",
  "/footer3.jpg",
  "/footer4.jpg",
];

export default function BlogPostDetail() {
  const { slug } = useParams();
  const post = blogPosts[slug as string];

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
          overflow: hidden;
          background: var(--bg-surface);
        }

        .gallery-img {
          width: 100%;
          height: auto;
          aspect-ratio: 3 / 2;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-img-wrapper:hover .gallery-img {
          transform: scale(1.05);
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
        <section className="post-hero">
          <img src={post.heroImg} alt={post.title} className="post-hero-img" />
          <div className="post-hero-content">
            <RevealOnScroll>
              <h1 className="post-title">{post.title}</h1>
              <p className="post-meta">{post.location} &bull; {post.date}</p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="post-story-section">
          <RevealOnScroll>
            <p className="post-story-text">
              {post.story}
            </p>
          </RevealOnScroll>
        </section>

        <section className="post-gallery-section">
          <div className="post-gallery-grid">
            {galleryImages.map((img, i) => (
              <RevealOnScroll key={i} delayMs={i % 2 * 100}>
                <div className="gallery-img-wrapper">
                  <img src={img} alt={`Gallery image ${i + 1}`} className="gallery-img" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="post-footer-nav">
          <Link href="/blogs" className="back-to-blogs">
            Back to All Stories
          </Link>
        </section>
      </div>
    </>
  );
}
