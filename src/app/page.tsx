import Link from "next/link";
import { CtaStrip } from "@/components/ui/cta-strip";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { SectionHeading } from "@/components/ui/section-heading";

const featuredWork = [
  { id: "01", label: "Love In Monochrome", ratio: "portrait" as const },
  { id: "02", label: "Golden Hour Vows", ratio: "portrait" as const },
  { id: "03", label: "Afterparty Frames", ratio: "portrait" as const },
  { id: "04", label: "Quiet Morning Rituals", ratio: "wide" as const },
];

const trustPillars = [
  {
    icon: "✦",
    title: "Directed Storytelling",
    desc: "Every frame is intentional — guided by narrative, not chance.",
  },
  {
    icon: "◎",
    title: "Calm Guided Process",
    desc: "From first message to final delivery, we make the journey feel held and clear.",
  },
  {
    icon: "⬡",
    title: "Selective Calendar",
    desc: "We take limited bookings each year to give every client our full focus.",
  },
];

const quickLinks = [
  {
    eyebrow: "Testimonials",
    title: "Proof that feels personal",
    desc: "Read emotional reviews from couples who trusted the process.",
    href: "/testimonials",
    cta: "View Testimonials",
  },
  {
    eyebrow: "Films",
    title: "Timeless films in motion",
    desc: "Watch signature edits and teaser reels with editorial pacing.",
    href: "/films",
    cta: "Explore Films",
  },
  {
    eyebrow: "Journal",
    title: "Stories behind the stills",
    desc: "Explore complete wedding narratives through journal entries.",
    href: "/blogs",
    cta: "Read Journal",
  },
];

const reelBlocks = ["BTS Moment 01", "BTS Moment 02", "BTS Moment 03", "BTS Moment 04"];

export default function Home() {
  return (
    <>
      {/* ────────── Responsive helpers ────────── */}
      <style>{`
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
          padding-block: 5rem 3.5rem;
        }
        .hero-media-col { display: none; }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-top: 1.25rem;
        }
        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.125rem;
        }
        .pillar-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 2rem;
        }
        .quick-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .reel-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: .8rem;
        }

        @media (max-width: 900px) {
          .work-grid { grid-template-columns: 1fr; }
          .pillar-grid { grid-template-columns: repeat(2, 1fr); }
          .quick-grid { grid-template-columns: repeat(2, 1fr); }
          .reel-strip { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .hero-inner { padding-block: 3.5rem 3rem; }
          .work-grid { grid-template-columns: 1fr; }
          .pillar-grid { grid-template-columns: 1fr; }
          .quick-grid { grid-template-columns: 1fr; }
          .intro-grid { grid-template-columns: 1fr; }
          .reel-strip { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 760px) {
          .hero-inner { grid-template-columns: 1.1fr 1fr; }
          .hero-media-col { display: block; }
          .intro-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* ────────── Hero ────────── */}
      <section
        className="cinema"
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "92svh",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(168deg, rgba(20,18,14,1) 0%, var(--bg) 58%, rgba(18,16,12,1) 100%)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 60% 55% at 88% 8%, rgba(176,154,106,.11), transparent 66%), " +
              "radial-gradient(ellipse 44% 50% at 4% 92%, rgba(176,154,106,.07), transparent 64%)",
          }}
        />

        <div className="page-wrap hero-inner">
          {/* ── Text col ── */}
          <RevealOnScroll>
            <span className="tag" style={{ marginBottom: "1.25rem" }}>
              Premium Wedding Storytelling
            </span>

            <h1
              className="display-xl"
              style={{ marginTop: "1rem", maxWidth: "640px" }}
            >
              Crafted for{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                art,
              </em>{" "}
              emotion, and timeless cinema.
            </h1>

            <p
              style={{
                marginTop: "1.25rem",
                fontSize: "1rem",
                lineHeight: 1.68,
                color: "var(--text-2)",
                maxWidth: "500px",
              }}
            >
              We document unscripted moments with fashion-led direction and
              intentional pacing, so your story feels iconic today and forever.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: ".5rem 1.5rem",
                marginTop: "1.125rem",
              }}
            >
              {[
                "B&W to warm-color storytelling",
                "Selective yearly calendar",
                "24-48 hour inquiry response",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".4rem",
                    fontSize: ".8rem",
                    color: "var(--text-3)",
                  }}
                >
                  <span style={{ color: "var(--gold)" }}>✓</span>
                  {t}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: ".75rem",
                marginTop: "2rem",
              }}
            >
              <Link href="/contact-us" className="btn-primary sheen">
                Check Availability
              </Link>
              <Link href="/films" className="btn-secondary sheen">
                Watch Films
              </Link>
            </div>

            <div className="trust-row">
              {["WeddingSutra", "Fearless", "MyWed", "WeddingWire", "IMDb-Ready Process"].map((logo) => (
                <span key={logo} className="trust-logo">{logo}</span>
              ))}
            </div>
          </RevealOnScroll>

          {/* ── Media col (desktop only) ── */}
          <RevealOnScroll className="hero-media-col" delayMs={120}>
            <MediaPlaceholder ratio="video" label="Hero Film Loop" />
          </RevealOnScroll>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "7rem",
            background: "linear-gradient(to bottom, transparent, var(--bg))",
            pointerEvents: "none",
          }}
        />
      </section>

      {/* ────────── Sections ────────── */}
      <div
        className="page-wrap"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(3rem,7vw,5.5rem)",
          paddingBlock: "clamp(2.5rem,5vw,4rem)",
        }}
      >
        {/* ── Intro split ── */}
        <section className="bento-grid">
          <RevealOnScroll
            className="surface bento-span-7"
            style={{ padding: "clamp(1.5rem,4vw,2.25rem)" }}
          >
            <SectionHeading
              eyebrow="Manifesto"
              title="No props. No cliches. Just real moments with editorial polish."
              description="Our approach combines authentic emotion with cinematic framing, helping you relive the feeling instead of just viewing photos."
            />
          </RevealOnScroll>
          <RevealOnScroll
            className="surface bento-span-5"
            delayMs={120}
            style={{
              padding: "clamp(1.5rem,4vw,2.25rem)",
              background: "var(--surface-2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: ".75rem" }}>
                Conversion Focus
              </p>
              <p
                style={{
                  fontSize: ".9375rem",
                  lineHeight: 1.65,
                  color: "var(--text-2)",
                }}
              >
                Inquiry comes after trust. You first see our philosophy, then the
                work, then a frictionless path to contact with clear next steps.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="btn-secondary"
              style={{ alignSelf: "flex-start" }}
            >
              Build Your Moodboard
            </Link>
          </RevealOnScroll>
        </section>

        {/* ── Featured Work ── */}
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Signature Work"
            title="A portfolio built like a film sequence"
            description="From monochrome opening scenes to warm emotional payoffs, each gallery is curated as a complete visual arc."
          />
          <div className="work-grid" style={{ marginTop: "1.75rem" }}>
            {featuredWork.map((item, idx) => (
              <RevealOnScroll
                key={item.id}
                className="surface card-lift"
                delayMs={idx * 90}
                style={{ overflow: "hidden" }}
              >
                <MediaPlaceholder ratio={item.ratio} label={item.label} />
                <div style={{ padding: "1rem 1.125rem 1.25rem" }}>
                  <p
                    className="eyebrow"
                    style={{ marginBottom: ".4rem" }}
                  >
                    Story {item.id}
                  </p>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-display,'Cormorant Garamond'),serif",
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: "var(--text-1)",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      marginTop: ".25rem",
                      fontSize: ".8rem",
                      color: "var(--text-4)",
                    }}
                  >
                    Curated highlight
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="reel-strip">
            {reelBlocks.map((item, idx) => (
              <div key={item} className="surface card-lift" style={{ overflow: "hidden" }}>
                <MediaPlaceholder ratio="portrait" label={item} />
                <div style={{ padding: ".8rem .9rem 1rem" }}>
                  <p className="eyebrow">{`Reel ${String(idx + 1).padStart(2, "0")}`}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* ── Why Artistry In Love ── */}
        <RevealOnScroll
          className="cinema"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "1.125rem",
            padding: "clamp(1.75rem,5vw,2.75rem)",
            background:
              "linear-gradient(148deg, rgba(20,18,14,1), rgba(11,10,8,1))",
            border: "1px solid var(--line)",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-3.5rem",
              right: "-3.5rem",
              width: "18rem",
              height: "18rem",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(185,154,107,.52) 0%,transparent 70%)",
              filter: "blur(44px)",
              opacity: 0.17,
              pointerEvents: "none",
            }}
          />
          <SectionHeading
            eyebrow="Trust & Experience"
            title="Luxury is intentional, calm, and deeply human."
            description="We blend high-fashion visual language with emotionally honest documentation for modern couples."
          />
          <div className="pillar-grid">
            {trustPillars.map((p, idx) => (
              <RevealOnScroll
                key={p.title}
                delayMs={idx * 100}
                style={{
                  borderRadius: ".875rem",
                  padding: "1.25rem",
                  border: "1px solid rgba(233,223,204,0.14)",
                  background: "rgba(185,154,107,.06)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "1.3rem",
                    color: "var(--gold)",
                    marginBottom: ".7rem",
                  }}
                >
                  {p.icon}
                </span>
                <p
                  style={{
                    fontFamily:
                      "var(--font-display,'Cormorant Garamond'),serif",
                    fontSize: "1.175rem",
                    fontWeight: 500,
                    color: "var(--text-1)",
                    marginBottom: ".45rem",
                  }}
                >
                  {p.title}
                </p>
                <p
                  style={{
                    fontSize: ".8125rem",
                    lineHeight: 1.62,
                    color: "var(--text-3)",
                  }}
                >
                  {p.desc}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>

        {/* ── Quick Links ── */}
        <section className="quick-grid">
          {quickLinks.map((item, idx) => (
            <RevealOnScroll
              key={item.eyebrow}
              className="surface card-lift"
              delayMs={idx * 90}
              style={{
                padding: "clamp(1.25rem,3vw,1.75rem)",
                display: "flex",
                flexDirection: "column",
                gap: ".7rem",
              }}
            >
              <p className="eyebrow">{item.eyebrow}</p>
              <p
                style={{
                  fontFamily:
                    "var(--font-display,'Cormorant Garamond'),serif",
                  fontSize: "1.35rem",
                  fontWeight: 500,
                  lineHeight: 1.15,
                  color: "var(--text-1)",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  fontSize: ".875rem",
                  lineHeight: 1.6,
                  color: "var(--text-3)",
                  flex: 1,
                }}
              >
                {item.desc}
              </p>
              <Link
                href={item.href}
                className="btn-secondary sheen"
                style={{ alignSelf: "flex-start", fontSize: ".7rem" }}
              >
                {item.cta}
              </Link>
            </RevealOnScroll>
          ))}
        </section>

        {/* ── CTA ── */}
        <RevealOnScroll>
          <CtaStrip
          title="If your story deserves cinematic care, start your inquiry."
          text="Share date, location, and moodboard inspiration to receive availability, collections, and next steps."
          primaryLabel="Check Availability"
          primaryHref="/contact-us"
          secondaryLabel="Join The Team"
          secondaryHref="/career"
          />
        </RevealOnScroll>
      </div>
    </>
  );
}
