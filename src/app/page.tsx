import Link from "next/link";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────
   Home Page — rebuilt strictly from Designnew.md
   Sections:
   1. Hero           – full-screen, bg image, overlay, left-aligned copy
   2. Introduction   – 5-col text + 7-col portrait image (12-col grid)
   3. Portfolio      – bg-surface-50, 12-col bento grid
   4. Process        – 2-col: image (4/5) left + numbered steps right
   5. Testimonial    – black bg, centered italic blockquote
   6. Final CTA      – centered, ghost button
   ───────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <style>{`
        /* ── Section stacks ─────────── */
        .stack-xl  { padding-block: var(--stack-xl); }
        .stack-lg  { padding-block: var(--stack-lg); }
        .section-x { padding-inline: var(--margin-x); }

        /* ── 12-col grid ────────────── */
        .grid-12 {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: var(--gutter);
        }
        .col-5  { grid-column: span 5; }
        .col-6  { grid-column: span 6; }
        .col-7  { grid-column: span 7; }
        .col-8  { grid-column: span 8; }
        .col-4  { grid-column: span 4; }
        .col-start-7 { grid-column-start: 7; }

        /* ── Portfolio bento ────────── */
        .portfolio-large  { grid-column: span 8; }
        .portfolio-small  { grid-column: span 4; }
        .portfolio-medium { grid-column: span 5; }
        .portfolio-text   { grid-column: span 7; }

        /* ── Quote section ──────────── */
        .section-black { background: #1b1c19; color: #fbf9f4; }

        /* ── Responsive ─────────────── */
        @media (max-width: 768px) {
          .col-5, .col-6, .col-7, .col-8, .col-4 { grid-column: span 12; }
          .portfolio-large, .portfolio-small,
          .portfolio-medium, .portfolio-text     { grid-column: span 12; }
          .col-start-7 { grid-column-start: auto; }
          .order-1-mobile { order: 1; }
          .order-2-mobile { order: 2; }
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════
          §1  HERO — full-screen cinematic
          ══════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          height: "100svh",
          minHeight: "600px",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Background — Image placeholder */}
        <img
          src="https://placehold.co/1920x1080/1a1a1a/1a1a1a?text=Hero+Image"
          alt="Hero background"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />

        {/* Cinematic dark overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(27,28,25,0.35) 0%, rgba(27,28,25,0) 60%)",
            zIndex: 1,
          }}
        />

        {/* Copy — left-aligned, bottom-anchored */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            paddingInline: "5vw",
            maxWidth: "900px",
          }}
        >
          <span
            className="label-sm"
            style={{ color: "rgba(255,255,255,0.65)", display: "block", marginBottom: "24px" }}
          >
            Established MMXXIV
          </span>

          <h1
            className="headline-display"
            style={{ color: "#ffffff", marginBottom: "32px", maxWidth: "700px" }}
          >
            Capturing the quiet <br />
            <em style={{ fontStyle: "italic" }}>architecture</em> of emotion.
          </h1>

          <Link
            href="/films"
            className="arrow-link"
            style={{ color: "#ffffff" }}
          >
            View the Films
            <span className="arrow-line" />
          </Link>
        </div>

        {/* Bottom left — currently filming location */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "5vw",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <span className="label-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Currently Filming
          </span>
          <span className="label-sm" style={{ color: "#ffffff" }}>
            Lake Como, Italy
          </span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          §2  INTRODUCTION — 5-col text + 7-col image
          ══════════════════════════════════════════════ */}
      <section
        className="stack-xl section-x"
        style={{ maxWidth: "var(--max-w)", marginInline: "auto" }}
      >
        <div className="grid-12" style={{ alignItems: "center" }}>
          {/* Text — 5 cols */}
          <div className="col-5 order-1-mobile" style={{ marginBottom: 0 }}>
            <h2 className="headline-lg" style={{ marginBottom: "32px" }}>
              A legacy defined by what is{" "}
              <em style={{ fontStyle: "italic" }}>felt</em>, not just seen.
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: "var(--text-secondary)",
                maxWidth: "420px",
                marginBottom: "48px",
              }}
            >
              We specialize in editorial wedding cinema for those who value the
              intentional, the understated, and the timeless. Our approach is
              observational, preserving the raw honesty of your celebration.
            </p>
            <Link href="/films" className="link-underline" style={{ color: "var(--text-primary)" }}>
              Our Philosophy
            </Link>
          </div>

          {/* Image — 6 cols, offset to col 7 */}
          <div className="col-6 col-start-7 order-2-mobile">
            {/* 4:5 portrait ratio — placeholder image */}
            <img
              src="https://placehold.co/400x500/e4e2dd/1b1c19?text=Portrait+Image"
              alt="Editorial wedding portrait"
              style={{ aspectRatio: "4 / 5", width: "100%", border: "1px solid var(--border)" }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          §3  PORTFOLIO BENTO GRID
          ══════════════════════════════════════════════ */}
      <section
        className="stack-xl section-x"
        id="portfolio"
        style={{ background: "var(--bg-surface)" }}
      >
        <div style={{ maxWidth: "var(--max-w)", marginInline: "auto" }}>
          {/* Section header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "var(--stack-lg)",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <span
                className="label-sm"
                style={{ color: "var(--text-muted)", display: "block", marginBottom: "16px" }}
              >
                Selected Works
              </span>
              <h2 className="headline-display">The Portfolio</h2>
            </div>
            <Link
              href="/films"
              className="link-underline"
              style={{ color: "var(--text-primary)" }}
            >
              View All Films
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid-12" style={{ gap: "32px" }}>
            {/* Large — 16:9, 8 cols */}
            <div className="portfolio-large portfolio-item">
              <div style={{ aspectRatio: "16 / 9", overflow: "hidden", position: "relative", marginBottom: "16px" }}>
                <img
                  src="https://placehold.co/800x450/e4e2dd/1b1c19?text=Sienna+%26+Alessandro"
                  alt="Sienna & Alessandro — Amalfi, Italy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="overlay" aria-hidden>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="31" stroke="white" strokeWidth="1"/>
                    <polygon points="26,20 48,32 26,44" fill="white"/>
                  </svg>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="headline-md" style={{ fontStyle: "italic" }}>Sienna &amp; Alessandro</h3>
                <span className="label-sm" style={{ color: "var(--text-muted)" }}>Amalfi, Italy</span>
              </div>
            </div>

            {/* Vertical — 3:4, 4 cols */}
            <div className="portfolio-small portfolio-item">
              <div style={{ aspectRatio: "3 / 4", overflow: "hidden", position: "relative", marginBottom: "16px" }}>
                <img
                  src="https://placehold.co/300x400/e4e2dd/1b1c19?text=Chloe+%26+Julian"
                  alt="Chloe & Julian — Paris, France"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="overlay" aria-hidden>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="31" stroke="white" strokeWidth="1"/>
                    <polygon points="26,20 48,32 26,44" fill="white"/>
                  </svg>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="headline-md" style={{ fontStyle: "italic" }}>Chloe &amp; Julian</h3>
                <span className="label-sm" style={{ color: "var(--text-muted)" }}>Paris, France</span>
              </div>
            </div>

            {/* Medium — 4:3, 5 cols */}
            <div className="portfolio-medium portfolio-item">
              <div style={{ aspectRatio: "4 / 3", overflow: "hidden", position: "relative", marginBottom: "16px" }}>
                <img
                  src="https://placehold.co/500x375/e4e2dd/1b1c19?text=Isabella+%26+James"
                  alt="Isabella & James — Cotswolds, UK"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="headline-md" style={{ fontStyle: "italic" }}>Isabella &amp; James</h3>
                <span className="label-sm" style={{ color: "var(--text-muted)" }}>Cotswolds, UK</span>
              </div>
            </div>

            {/* Editorial quote — 7 cols */}
            <div
              className="portfolio-text"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingInline: "clamp(16px, 4vw, 48px)",
              }}
            >
              <p
                className="headline-md"
                style={{
                  fontStyle: "italic",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}
              >
                &ldquo;They don&apos;t just film a wedding; they document a
                feeling. Every frame feels like a memory we didn&apos;t know
                we&apos;d forgotten.&rdquo;
              </p>
              <span className="label-sm">— Harper's Bazaar</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          §4  PROCESS — image left + numbered steps right
          ══════════════════════════════════════════════ */}
      <section
        className="stack-xl section-x"
        style={{ maxWidth: "var(--max-w)", marginInline: "auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "clamp(40px, 8vw, 80px)",
            alignItems: "center",
          }}
          className="process-grid"
        >
          {/* Left — portrait image with offset decorative block */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "80%",
                marginInline: "auto",
                aspectRatio: "4 / 5",
                position: "relative",
                zIndex: 1,
              }}
            >
              <img
                src="https://placehold.co/400x500/e4e2dd/1b1c19?text=Process+Image"
                alt="The artist at work — filmmaker's tools and journal"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            {/* Decorative offset block */}
            <div
              style={{
                position: "absolute",
                bottom: "-40px",
                right: "-16px",
                width: "50%",
                aspectRatio: "1 / 1",
                background: "var(--bg-container)",
                zIndex: 0,
              }}
              aria-hidden
            />
          </div>

          {/* Right — process steps */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <span
              className="label-sm"
              style={{ color: "var(--text-muted)", display: "block", marginBottom: "24px" }}
            >
              The Artistry
            </span>
            <h2 className="headline-lg" style={{ marginBottom: "40px" }}>
              Intentional Filmmaking
            </h2>

            {[
              {
                n: "01",
                title: "Discovery",
                desc: "A deep dive into your narrative, aesthetics, and the nuances that make your connection unique.",
              },
              {
                n: "02",
                title: "Observation",
                desc: "Discreet, handheld cinematography that captures the unscripted moments between the milestones.",
              },
              {
                n: "03",
                title: "Curation",
                desc: "Meticulous editing where sound design and color grading create an immersive cinematic experience.",
              },
            ].map((step) => (
              <div
                key={step.n}
                style={{ marginBottom: "32px" }}
              >
                <span
                  className="label-sm"
                  style={{ color: "var(--text-primary)", display: "block", marginBottom: "8px" }}
                >
                  {step.n}. {step.title.toUpperCase()}
                </span>
                <p style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--text-secondary)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          §5  TESTIMONIAL QUOTE — black background
          ══════════════════════════════════════════════ */}
      <section
        className="section-black"
        style={{ paddingBlock: "var(--stack-xl)", paddingInline: "5vw", textAlign: "center" }}
      >
        <div style={{ maxWidth: "840px", marginInline: "auto" }}>
          {/* Quote icon */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            style={{ marginBottom: "32px", opacity: 0.35, marginInline: "auto" }}
            aria-hidden
          >
            <path
              d="M6 25c0-7.18 4.04-13.2 12-16l2 3c-4.8 2.4-7.2 5.4-7.2 10H18v9H6v-6zm18 0c0-7.18 4.04-13.2 12-16l2 3c-4.8 2.4-7.2 5.4-7.2 10H36v9H24v-6z"
              fill="white"
            />
          </svg>

          <blockquote
            className="headline-display"
            style={{
              fontStyle: "italic",
              color: "#fbf9f4",
              fontSize: "clamp(1.75rem, 4vw, 46px)",
              lineHeight: 1.15,
              marginBottom: "48px",
            }}
          >
            &ldquo;Artistry in Love created something more than a film; they
            created a heirloom. We watch it and feel the exact same breeze from
            that evening in Lake Como.&rdquo;
          </blockquote>

          <cite
            className="label-sm"
            style={{ color: "rgba(251,249,244,0.6)", fontStyle: "normal", letterSpacing: "0.3em" }}
          >
            Mr. &amp; Mrs. Vanderbilt
          </cite>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          §6  FINAL CTA — centered, ghost button
          ══════════════════════════════════════════════ */}
      <section
        style={{
          paddingBlock: "var(--stack-xl)",
          paddingInline: "5vw",
          textAlign: "center",
          background: "var(--bg)",
        }}
      >
        <div style={{ maxWidth: "640px", marginInline: "auto" }}>
          <h2
            className="headline-lg"
            style={{ marginBottom: "32px" }}
          >
            Now booking for the MMXXV Season
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              marginBottom: "48px",
            }}
          >
            We accept a limited number of commissions each year to ensure every
            film receives our undivided artistic devotion.
          </p>
          <Link
            href="/contact-us"
            style={{
              display: "inline-block",
              padding: "16px 40px",
              border: "1px solid #1b1c19",
              color: "#1b1c19",
              background: "transparent",
              fontFamily: "var(--font-sans,'Manrope',sans-serif)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.5s, color 0.5s",
            }}
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
