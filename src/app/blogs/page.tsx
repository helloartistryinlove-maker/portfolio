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
  summary: "A narrative-led journal entry that blends atmosphere, emotion, and documentary detail.",
}));

export default function BlogsPage() {
  return (
    <>
      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .featured-blog-layout {
          display: grid;
          grid-template-columns: minmax(0,2.2fr) minmax(0,1.6fr);
          gap: 1.25rem;
        }
        @media (max-width: 980px) {
          .featured-blog-layout { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) { .blog-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Hero */}
      <section
        className="cinema"
        style={{
          position: "relative",
          minHeight: "40vh",
          display: "flex",
          alignItems: "flex-end",
          background: "linear-gradient(160deg, rgba(20,18,14,1) 0%, var(--bg) 100%)",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 55% 65% at 8% 100%,rgba(185,154,107,.1),transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="page-wrap"
          style={{ paddingBlock: "4.5rem 3.5rem", position: "relative", zIndex: 1 }}
        >
          <SectionHeading
            eyebrow="Journal"
            title="Stories that go beyond the highlight reel"
            description="Read full wedding narratives with emotional context, visual rhythm, and honest moments."
            size="lg"
          />
        </div>
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "5rem",
            background: "linear-gradient(to bottom,transparent,var(--bg))",
            pointerEvents: "none",
          }}
        />
      </section>

      <div
        className="page-wrap"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(2.5rem,6vw,4.5rem)",
          paddingBlock: "2.5rem clamp(3.5rem,8vw,7rem)",
        }}
      >
        {/* Featured + grid */}
        <section className="featured-blog-layout">
          <RevealOnScroll className="surface card-lift" style={{ overflow: "hidden" }}>
            <MediaPlaceholder ratio="wide" label="Featured Story" />
            <div style={{ padding: "1.25rem 1.5rem 1.75rem" }}>
              <span className="tag">Featured Chapter</span>
              <h2
                style={{
                  marginTop: ".9rem",
                  fontFamily: "var(--font-display,'Cormorant Garamond'),serif",
                  fontSize: "1.7rem",
                  fontWeight: 500,
                  lineHeight: 1.15,
                  color: "var(--text-1)",
                }}
              >
                A day that moved like cinema
              </h2>
              <p
                style={{
                  marginTop: ".6rem",
                  fontSize: ".9rem",
                  lineHeight: 1.7,
                  color: "var(--text-2)",
                  maxWidth: "30rem",
                }}
              >
                A full wedding story layout placeholder for a hero editorial piece, with room
                for behind-the-scenes and stills in a single scroll.
              </p>
              <div
                style={{
                  marginTop: "1.15rem",
                  paddingTop: ".85rem",
                  borderTop: "1px solid var(--line)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: ".75rem",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: 700,
                  }}
                >
                  Read Featured Story →
                </span>
                <span
                  style={{
                    fontSize: ".7rem",
                    color: "var(--text-4)",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                  }}
                >
                  Long-form · Photo + Film
                </span>
              </div>
            </div>
          </RevealOnScroll>

          <div className="blog-grid">
            {cards.slice(0, 4).map((card, idx) => (
              <RevealOnScroll
                key={card.id}
                className="surface card-lift"
                delayMs={idx * 70}
                style={{ overflow: "hidden" }}
              >
                <MediaPlaceholder ratio="wide" label="Story Cover" />
                <div style={{ padding: "1rem 1.1rem 1.4rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: ".6rem",
                    }}
                  >
                    <span className="tag">{card.category}</span>
                    <span
                      style={{
                        fontSize: ".625rem",
                        letterSpacing: ".1em",
                        color: "var(--text-4)",
                      }}
                    >
                      {card.date}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display,'Cormorant Garamond'),serif",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      lineHeight: 1.15,
                      color: "var(--text-1)",
                    }}
                  >
                    {card.title}
                  </h2>
                  <p
                    style={{
                      marginTop: ".45rem",
                      fontSize: ".8rem",
                      lineHeight: 1.6,
                      color: "var(--text-3)",
                    }}
                  >
                    {card.summary}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

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

        <div style={{ textAlign: "center", paddingBottom: ".5rem" }}>
          <Link href="/contact-us" className="btn-secondary sheen">
            Contact The Studio
          </Link>
        </div>
      </div>
    </>
  );
}
