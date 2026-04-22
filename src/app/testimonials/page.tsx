import Link from "next/link";
import { CtaStrip } from "@/components/ui/cta-strip";
import { SectionHeading } from "@/components/ui/section-heading";

const reviews = [
  "They made us feel calm in every moment and still captured every emotion we never want to forget.",
  "The final films felt like us - elegant, unscripted, and deeply personal from start to finish.",
  "From inquiry to delivery, the process was structured, warm, and completely premium.",
  "Our families were in tears watching the first cut. Every frame felt intentional and real.",
];

export default function TestimonialsPage() {
  return (
    <>
      <style>{`
        .review-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.125rem;
        }
        @media (max-width: 640px) { .review-grid { grid-template-columns: 1fr; } }
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
              "radial-gradient(ellipse 60% 60% at 50% 0%,rgba(185,154,107,.12),transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="page-wrap"
          style={{ paddingBlock: "4.5rem 3.5rem", position: "relative", zIndex: 1 }}
        >
          <SectionHeading
            eyebrow="Testimonials"
            title="Words from couples who lived the experience"
            description="Real feedback that reflects the emotional depth and calm process behind every story."
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
          gap: "clamp(2rem,5vw,3.5rem)",
          paddingBlock: "2.5rem clamp(3.5rem,8vw,7rem)",
        }}
      >
        {/* Stars banner */}
        <div
          className="surface"
          style={{
            padding: "clamp(1.75rem,4vw,2.5rem)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: ".875rem",
          }}
        >
          <p className="eyebrow">Client Love</p>
          <p
            style={{
              fontFamily: "var(--font-display,'Cormorant Garamond'),serif",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              letterSpacing: ".18em",
              color: "var(--gold)",
              lineHeight: 1,
            }}
          >
            ★★★★★
          </p>
          <p
            style={{
              maxWidth: "420px",
              fontSize: ".9rem",
              lineHeight: 1.65,
              color: "var(--text-3)",
            }}
          >
            Every client who has trusted us with their story has felt the
            difference that intentional direction makes.
          </p>
        </div>

        {/* Review cards */}
        <section className="review-grid">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="surface card-lift"
              style={{ padding: "clamp(1.25rem,3vw,1.75rem)" }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-display,'Cormorant Garamond'),serif",
                  fontSize: "3.5rem",
                  lineHeight: 0.8,
                  color: "var(--gold)",
                  opacity: 0.3,
                  marginBottom: ".75rem",
                }}
              >&ldquo;</span>
              <p
                style={{
                  fontFamily: "var(--font-display,'Cormorant Garamond'),serif",
                  fontSize: "1.125rem",
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  color: "var(--text-2)",
                }}
              >
                {review}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".75rem",
                  marginTop: "1.25rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--line)",
                }}
              >
                <div
                  style={{
                    width: "2.125rem",
                    height: "2.125rem",
                    borderRadius: "50%",
                    background: "var(--surface-3)",
                    border: "1px solid var(--line-md)",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: ".8125rem",
                      fontWeight: 600,
                      color: "var(--text-1)",
                    }}
                  >
                    Couple Story
                  </p>
                  <p
                    style={{
                      fontSize: ".625rem",
                      letterSpacing: ".18em",
                      textTransform: "uppercase",
                      color: "var(--text-4)",
                      marginTop: ".12rem",
                    }}
                  >
                    Verified Review
                  </p>
                </div>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: ".875rem",
                    letterSpacing: ".12em",
                    color: "var(--gold)",
                  }}
                >
                  ★★★★★
                </span>
              </div>
            </article>
          ))}
        </section>

        {/* Note strip */}
        <div
          className="surface"
          style={{
            padding: "clamp(1.25rem,3vw,1.875rem)",
            display: "flex",
            flexWrap: "wrap",
            gap: "1.25rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              maxWidth: "460px",
              fontSize: ".9375rem",
              lineHeight: 1.65,
              color: "var(--text-2)",
            }}
          >
            Full review publishing can be managed privately and updated when
            client approvals and legal permissions are complete.
          </p>
          <Link href="/contact-us" className="btn-secondary sheen">
            Start Inquiry
          </Link>
        </div>

        <CtaStrip
          title="Ready to begin your experience?"
          text="Send your details and receive the next steps within our response window."
          primaryLabel="Check Availability"
          primaryHref="/contact-us"
        />
      </div>
    </>
  );
}
