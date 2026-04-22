import Link from "next/link";
import { CtaStrip } from "@/components/ui/cta-strip";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
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
          grid-template-columns: repeat(3, 1fr);
          gap: 1.125rem;
        }
        @media (max-width: 900px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
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
        <section className="blog-grid">
          {cards.map((card) => (
            <article
              key={card.id}
              className="surface card-lift"
              style={{ overflow: "hidden" }}
            >
              <MediaPlaceholder ratio="wide" label="Story Cover" />
              <div style={{ padding: "1.125rem 1.25rem 1.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: ".75rem",
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
                    fontSize: "1.35rem",
                    fontWeight: 500,
                    lineHeight: 1.15,
                    color: "var(--text-1)",
                  }}
                >
                  {card.title}
                </h2>
                <p
                  style={{
                    marginTop: ".5rem",
                    fontSize: ".8125rem",
                    lineHeight: 1.6,
                    color: "var(--text-3)",
                  }}
                >
                  {card.summary}
                </p>
                <div
                  style={{
                    marginTop: "1rem",
                    paddingTop: ".75rem",
                    borderTop: "1px solid var(--line)",
                  }}
                >
                  <span
                    style={{
                      fontSize: ".75rem",
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    Read Story →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </section>

        <CtaStrip
          title="Planning your own story chapter?"
          text="Share your date, city, and moodboard to receive tailored availability and collections."
          primaryLabel="Check Availability"
          primaryHref="/contact-us"
          secondaryLabel="View Films"
          secondaryHref="/films"
        />

        <div style={{ textAlign: "center", paddingBottom: ".5rem" }}>
          <Link href="/contact-us" className="btn-secondary sheen">
            Contact The Studio
          </Link>
        </div>
      </div>
    </>
  );
}
