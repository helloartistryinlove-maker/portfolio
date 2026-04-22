import { CtaStrip } from "@/components/ui/cta-strip";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
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
        .film-card-inner {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: flex-end;
          justify-content: space-between;
          padding: clamp(1.25rem, 3vw, 2rem);
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
          gap: "1.25rem",
          paddingBlock: "2.5rem clamp(3.5rem,8vw,7rem)",
        }}
      >
        {films.map((film) => (
          <article
            key={film.id}
            className="surface card-lift"
            style={{ overflow: "hidden" }}
          >
            <MediaPlaceholder ratio="video" label={`Film ${film.slug}`} />
            <div className="film-card-inner">
              <div>
                <p className="eyebrow" style={{ marginBottom: ".5rem" }}>
                  Film {film.slug}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-display,'Cormorant Garamond'),serif",
                    fontSize: "clamp(1.6rem,3vw,2.5rem)",
                    fontWeight: 500,
                    letterSpacing: "-.02em",
                    color: "var(--text-1)",
                  }}
                >
                  {film.title}
                </h2>
                <p
                  style={{
                    marginTop: ".5rem",
                    fontSize: ".875rem",
                    lineHeight: 1.6,
                    color: "var(--text-2)",
                    maxWidth: "480px",
                  }}
                >
                  {film.caption}
                </p>
              </div>
              <span className="tag">{film.duration}</span>
            </div>
          </article>
        ))}

        <CtaStrip
          title="Ready for your own timeless film?"
          text="Inquire with your event date, location, and mood direction for a custom film proposal."
          primaryLabel="Inquire Now"
          primaryHref="/contact-us"
          secondaryLabel="Read Journal"
          secondaryHref="/blogs"
        />
      </div>
    </>
  );
}
