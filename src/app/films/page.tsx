import { CtaStrip } from "@/components/ui/cta-strip";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { SectionHeading } from "@/components/ui/section-heading";

const films = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  slug: String(i + 1).padStart(2, "0"),
  title: `Timeless Film ${String(i + 1).padStart(2, "0")}`,
  caption: "An emotion-first edit with editorial pacing and cinematic sound design.",
  duration: "03:42 Runtime",
}));

export default function FilmsPage() {
  return (
    <>
      <style>{`
        .featured-film-layout {
          display: grid;
          grid-template-columns: minmax(0,2.1fr) minmax(0,1.4fr);
          gap: 1.25rem;
          align-items: stretch;
        }
        .film-supporting-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }
        @media (max-width: 980px) {
          .featured-film-layout { grid-template-columns: 1fr; }
          .film-supporting-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 640px) {
          .film-supporting-grid { grid-template-columns: 1fr; }
        }
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
              "radial-gradient(ellipse 65% 60% at 92% 5%,rgba(185,154,107,.12),transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="page-wrap"
          style={{ paddingBlock: "4.5rem 3.5rem", position: "relative", zIndex: 1 }}
        >
          <SectionHeading
            eyebrow="Films"
            title="Watch stories unfold like cinema"
            description="A film-first showcase designed for modern couples who value emotion, craft, and movement."
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

      {/* Content */}
      <div
        className="page-wrap"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.75rem",
          paddingBlock: "2.5rem clamp(3.5rem,8vw,7rem)",
        }}
      >
        {/* Featured film row */}
        <section className="featured-film-layout">
          <RevealOnScroll className="surface card-lift" style={{ overflow: "hidden" }}>
            <MediaPlaceholder ratio="video" label="Featured Film" />
          </RevealOnScroll>
          <RevealOnScroll delayMs={120} className="surface" style={{ padding: "1.5rem 1.75rem" }}>
            <p className="eyebrow" style={{ marginBottom: ".6rem" }}>
              Featured Sequence
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display,'Cormorant Garamond'),serif",
                fontSize: "clamp(1.8rem,3.1vw,2.6rem)",
                fontWeight: 500,
                letterSpacing: "-.02em",
                color: "var(--text-1)",
              }}
            >
              An entire wedding told in motion
            </h2>
            <p
              style={{
                marginTop: ".7rem",
                fontSize: ".9rem",
                lineHeight: 1.7,
                color: "var(--text-2)",
              }}
            >
              A signature film placeholder for a full wedding story — opening credits, vows,
              families, and late-night scenes in one cohesive cinematic arc.
            </p>
            <div
              style={{
                marginTop: "1.25rem",
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
                Play Featured Film →
              </span>
              <span
                style={{
                  fontSize: ".7rem",
                  color: "var(--text-4)",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}
              >
                Long-form · 06:12 Runtime
              </span>
            </div>
          </RevealOnScroll>
        </section>

        {/* Supporting films strip */}
        <section className="film-supporting-grid">
          {films.map((film, idx) => (
            <RevealOnScroll
              key={film.id}
              className="surface card-lift"
              delayMs={idx * 80}
              style={{ overflow: "hidden" }}
            >
              <MediaPlaceholder ratio="video" label={`Film ${film.slug}`} />
              <div style={{ padding: "1rem 1.1rem 1.35rem" }}>
                <p className="eyebrow" style={{ marginBottom: ".45rem" }}>
                  Film {film.slug}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-display,'Cormorant Garamond'),serif",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    letterSpacing: "-.01em",
                    color: "var(--text-1)",
                  }}
                >
                  {film.title}
                </h2>
                <p
                  style={{
                    marginTop: ".4rem",
                    fontSize: ".82rem",
                    lineHeight: 1.65,
                    color: "var(--text-2)",
                  }}
                >
                  {film.caption}
                </p>
                <div
                  style={{
                    marginTop: ".85rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className="tag">{film.duration}</span>
                  <span
                    style={{
                      fontSize: ".7rem",
                      color: "var(--gold)",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Play →
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </section>

        <RevealOnScroll>
          <CtaStrip
          title="Ready for your own timeless film?"
          text="Inquire with your event date, location, and mood direction for a custom film proposal."
          primaryLabel="Inquire Now"
          primaryHref="/contact-us"
          secondaryLabel="Read Journal"
          secondaryHref="/blogs"
          />
        </RevealOnScroll>
      </div>
    </>
  );
}
