import Link from "next/link";
import { CtaStrip } from "@/components/ui/cta-strip";
import { BlogsAudioPlayer } from "@/components/ui/blogs-audio-player";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { SectionHeading } from "@/components/ui/section-heading";

const cards = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Story Chapter ${String(i + 1).padStart(2, "0")}`,
  category: "Wedding Story",
  date: "Editorial Entry",
  summary: "A narrative-led story note that blends atmosphere, emotion, and documentary detail.",
}));

const categories = ["All Stories", "Behind the Scenes", "Style Tips", "Wedding Stories"];

const highlights = [
  {
    label: "Featured Story",
    title: "The Ethereal Radiance of Lake Como",
    text: "Exploring the interplay of ancient stone and shimmering waters during an intimate sunset elopement on the Italian coast.",
    meta: "Long-form · Photo + Film",
  },
  {
    label: "Story Note",
    title: "Why We Still Shoot Film",
    text: "The chemical magic and intentionality behind medium format film photography in the digital age.",
    meta: "Behind the Scenes",
  },
  {
    label: "Style Note",
    title: "Curating Your Engagement Look",
    text: "Choosing timeless silhouettes and palettes that harmonize with the architectural landscape.",
    meta: "Style Tips",
  },
];

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

        .blogs-grid-3 {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: clamp(32px, 5vw, 64px);
          max-width: 1400px;
          margin-inline: auto;
        }

        @media (min-width: 768px) {
          .blogs-grid-3 {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .blog-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .blog-item-img {
          width: 100%;
          aspect-ratio: 3 / 4;
          object-fit: cover;
          margin-bottom: 2rem;
        }

        .blog-item-title {
          font-family: var(--font-serif);
          font-size: clamp(1.4rem, 2vw, 1.8rem);
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .blog-item-desc {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 320px;
        }
      `}</style>

      <div className="blogs-page">
        <section className="blog-hero-wrapper">
          <BlogsAudioPlayer />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="blog-hero-video"
          >
            <source src="/wedding-trailer.mp4" type="video/mp4" />
          </video>
          <div className="blog-hero-overlay" />
        </section>

        <section className="wedding-blogs-section">
          <div className="wedding-blogs-header">
            <h1 className="wedding-blogs-title">Wedding Blogs</h1>
            <p className="wedding-blogs-subtitle">
              &ldquo;Memories are timeless treasures of the heart, captured forever in the lens of the mind.&rdquo;
            </p>
          </div>

          <div className="blogs-grid-3">
            {[
              {
                slug: "suraj-risha-udaipur",
                title: "Suraj & Risha, Udaipur",
                img: "/portfolio1.jpg",
                desc: "Suraj and Risha chose the majestic city of Udaipur for their intimate wedding celebration, blending tradition, love, and breathtaking views into one unforgettable experience."
              },
              {
                slug: "shraddha-neeti-goa",
                title: "Shraddha and Neeti, Goa",
                img: "/portfoli2.jpg",
                desc: "Shraddha and Neeti's wedding was more than just a beautiful event; it was a powerful statement of love and acceptance. Their wedding in Goa will be remembered for its stunning setting."
              },
              {
                slug: "grace-yohan-goa",
                title: "Grace & Yohan, Goa",
                img: "/portfoli3.jpg",
                desc: "Grace and Yohan recently tied the knot in a beautifully intimate ceremony in Goa, surrounded by the serene beauty of the coastal paradise. Their wedding was a heartfelt and personal affair."
              },
              {
                slug: "aman-priya-jaipur",
                title: "Aman & Priya, Jaipur",
                img: "/foooter11.jpg",
                desc: "A vibrant celebration of love in the Pink City. Aman and Priya's wedding was a masterclass in royal elegance, featuring historic palaces and timeless traditions."
              },
              {
                slug: "sanya-rohan-tuscany",
                title: "Sanya & Rohan, Tuscany",
                img: "/internationalsection.jpg",
                desc: "An editorial escape to the rolling hills of Italy. Sanya and Rohan's sunset ceremony was a testament to understated luxury and the beauty of quiet, shared moments."
              },
              {
                slug: "meera-arjun-mumbai",
                title: "Meera & Arjun, Mumbai",
                img: "/footer8.jpg",
                desc: "A contemporary coastal celebration in the heart of Mumbai. Meera and Arjun's wedding blended urban energy with the calm of the Arabian Sea."
              }
            ].map((blog, i) => (
              <Link key={i} href={`/blogs/${blog.slug}`} className="blog-item" style={{ textDecoration: 'none' }}>
                <img src={blog.img} alt={blog.title} className="blog-item-img" />
                <h3 className="blog-item-title">{blog.title}</h3>
                <p className="blog-item-desc">{blog.desc}</p>
              </Link>
            ))}
          </div>
        </section>





        <section className="blog-section newsletter-shell">
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
