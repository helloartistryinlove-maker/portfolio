import Link from "next/link";
import { CtaStrip } from "@/components/ui/cta-strip";
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
          padding-block: var(--stack-xl);
        }

        .blog-section-tight {
          padding-block: var(--stack-lg);
        }

        .hero-copy {
          max-width: 66rem;
          margin-inline: auto;
          text-align: center;
        }

        .hero-title {
          margin-top: .75rem;
        }

        .hero-lead {
          max-width: 40rem;
          margin: 1rem auto 0;
          font-size: 1.1rem;
          line-height: 1.75;
          color: var(--text-secondary);
        }

        .category-row {
          display: flex;
          justify-content: center;
          gap: 1.75rem;
          flex-wrap: wrap;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(28, 27, 27, 0.08);
        }

        .category-row a {
          font-family: var(--font-sans);
          font-size: .75rem;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--text-secondary);
          position: relative;
          padding-bottom: .75rem;
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
          grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
          gap: var(--gutter);
          align-items: start;
        }

        .featured-panel {
          position: relative;
          overflow: hidden;
          background: var(--bg-surface);
          border: 1px solid rgba(28, 27, 27, 0.08);
        }

        .featured-panel .media-placeholder {
          aspect-ratio: 16 / 9;
        }

        .featured-panel-copy {
          padding: 1.75rem;
        }

        .featured-side {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--gutter);
        }

        .feature-card {
          background: var(--bg-surface);
          border: 1px solid rgba(28, 27, 27, 0.08);
          overflow: hidden;
        }

        .feature-card-copy {
          padding: 1.25rem 1.25rem 1.4rem;
        }

        .feature-card-copy h3 {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          line-height: 1.2;
          margin-top: .75rem;
        }

        .feature-card-copy p {
          margin-top: .55rem;
          font-size: .93rem;
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
          border-top: 1px solid rgba(28, 27, 27, 0.08);
        }

        .story-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2rem;
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
          font-size: 1.55rem;
          line-height: 1.15;
          margin-top: .5rem;
        }

        .story-copy p {
          margin-top: .55rem;
          font-size: .92rem;
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
          border-top: 1px solid rgba(28, 27, 27, 0.08);
          border-bottom: 1px solid rgba(28, 27, 27, 0.08);
        }

        .newsletter-inner {
          max-width: 54rem;
          margin-inline: auto;
          text-align: center;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          align-items: end;
        }

        .newsletter-form input {
          width: 100%;
        }

        @media (max-width: 980px) {
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
      `}</style>

      <div className="blogs-page">
        <section className="blog-section" style={{ paddingTop: "calc(var(--stack-lg) + 80px)" }}>
          <div className="page-wrap">
            <RevealOnScroll>
              <div className="hero-copy">
                <p className="label-sm" style={{ color: "var(--text-muted)" }}>Blogs</p>
                <h1 className="headline-display hero-title">Stories that go beyond the highlight reel.</h1>
                <p className="hero-lead">
                  Read thoughtful editorials, styling notes, and wedding stories shaped with
                  visual rhythm, honest moments, and a premium narrative point of view.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="blog-section-tight">
          <div className="page-wrap">
            <nav className="category-row" aria-label="Blog categories">
              {categories.map((category, index) => (
                <Link key={category} href="/blogs" className={index === 0 ? "active" : ""}>
                  {category}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section className="blog-section">
          <div className="page-wrap">
            <div className="featured-layout">
              <RevealOnScroll className="featured-panel">
                <MediaPlaceholder ratio="wide" label="Featured blog placeholder image" />
                <div className="featured-panel-copy">
                  <span className="tag">Featured Story</span>
                  <h2 className="headline-lg" style={{ marginTop: ".9rem" }}>
                    The Ethereal Radiance of Lake Como
                  </h2>
                  <p style={{ marginTop: ".7rem", fontSize: ".98rem", lineHeight: 1.75, color: "var(--text-secondary)", maxWidth: "34rem" }}>
                    Exploring the interplay of ancient stone and shimmering waters during an
                    intimate sunset elopement on the Italian coast.
                  </p>
                  <div className="feature-meta">
                    <span className="label-sm" style={{ color: "var(--text-muted)" }}>Read Article</span>
                    <span className="label-sm" style={{ color: "var(--text-muted)" }}>Long-form · Photo + Film</span>
                  </div>
                </div>
              </RevealOnScroll>

              <div className="featured-side">
                {highlights.slice(1).map((item, index) => (
                  <RevealOnScroll key={item.title} className="feature-card" delayMs={index * 80}>
                    <MediaPlaceholder ratio="wide" label={`${item.label} placeholder image`} />
                    <div className="feature-card-copy">
                      <span className="tag">{item.label}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <div className="feature-meta">
                        <span className="label-sm" style={{ color: "var(--text-muted)" }}>{item.meta}</span>
                        <span className="label-sm" style={{ color: "var(--text-muted)" }}>Open Story</span>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="blog-section-tight" style={{ background: "var(--bg-surface)" }}>
          <div className="page-wrap">
            <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "end", marginBottom: "1.75rem", flexWrap: "wrap" }}>
              <div>
                <p className="label-sm" style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>Story Highlights</p>
                <h2 className="headline-lg">Browse recent notes and editorial chapters.</h2>
              </div>
              <Link href="/contact-us" className="link-underline">Suggest a Topic</Link>
            </div>

            <div className="story-grid">
              {cards.map((card, idx) => (
                <RevealOnScroll key={card.id} className="story-card" delayMs={idx * 70}>
                  <MediaPlaceholder ratio="portrait" label={`${card.title} blog placeholder image`} />
                  <div className="story-copy">
                    <div className="story-note">
                      <span>{card.category}</span>
                      <span>{card.date}</span>
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.summary}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="archive-cta">
              <button className="btn-secondary sheen" type="button">
                View Archive
              </button>
            </div>
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

        <section className="blog-section-tight">
          <div className="page-wrap">
            <RevealOnScroll>
              <CtaStrip
                title="Planning your own story chapter?"
                text="Share your date, city, and moodboard to receive tailored availability and collections."
                primaryLabel="Check Availability"
                primaryHref="/contact-us"
                secondaryLabel="View Films"
                secondaryHref="/films"
              />
            </RevealOnScroll>

            <div style={{ textAlign: "center", paddingTop: "1.5rem" }}>
              <Link href="/contact-us" className="btn-secondary sheen">
                Contact The Studio
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
