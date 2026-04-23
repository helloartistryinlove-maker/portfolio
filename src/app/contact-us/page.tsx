"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Contact cards data ─────────────────────────────────── */
const contactCards = [
  {
    id: "studio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2" stroke="currentColor" style={{ width: 24, height: 24 }}>
        <path d="M12 21s-8-5.6-8-11a8 8 0 0 1 16 0c0 5.4-8 11-8 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    label: "The Studio",
    line1: "72 Mercer Street,",
    line2: "New York, NY 10012",
    href: "https://maps.google.com/?q=72+Mercer+Street+New+York",
  },
  {
    id: "inquiry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2" stroke="currentColor" style={{ width: 24, height: 24 }}>
        <rect x="2" y="4" width="20" height="16" rx="0" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
    label: "Direct Inquiry",
    line1: "hello@artistryinlove.com",
    line2: "+1 212 555 0198",
    href: "mailto:hello@artistryinlove.com",
  },
  {
    id: "social",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.2" stroke="currentColor" style={{ width: 24, height: 24 }}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    ),
    label: "Social Presence",
    line1: "@artistryinlove",
    line2: "@theartistryfilms",
    href: "https://instagram.com/artistryinlove",
  },
];

/* ─── What to expect items ───────────────────────────────── */
const expectations = [
  { num: "01", title: "We Read Everything", body: "Every inquiry is personally read by our creative team. Nothing is templated or outsourced." },
  { num: "02", title: "Response in 24–48 hrs", body: "We respond thoughtfully, never just to fill an inbox. Expect a considered reply within two business days." },
  { num: "03", title: "Limited Commissions", body: "We accept a selective number of projects each year to ensure every film receives our full creative attention." },
  { num: "04", title: "No Pressure", body: "Our inquiry process is a conversation, not a sales funnel. Ask us anything and we will answer honestly." },
];

/* ─── Page ───────────────────────────────────────────────── */
export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <style>{`
        /* ── Contact page scoped ── */
        .contact-page {
          background: var(--bg, #fbf9f4);
          color: var(--text-primary, #1b1c19);
        }

        /* Minimal form inputs */
        .field-minimal {
          width: 100%;
          border: none;
          border-bottom: 1px solid var(--text-primary, #1b1c19);
          background: transparent;
          padding: clamp(10px, 2vw, 12px) 0;
          border-radius: 0;
          font-family: var(--font-sans, 'Manrope', sans-serif);
          font-size: 16px;
          color: var(--text-primary, #1b1c19);
          appearance: none;
          -webkit-appearance: none;
          outline: none;
          transition: border-color 0.3s;
        }
        .field-minimal::placeholder {
          color: var(--text-muted, #747878);
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .field-minimal:focus {
          border-color: var(--text-muted, #747878);
        }

        /* Form grid */
        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(24px, 5vw, 32px);
        }

        @media (min-width: 640px) {
          .contact-form-grid { 
            grid-template-columns: 1fr 1fr; 
            gap: clamp(24px, 5vw, 32px) clamp(32px, 6vw, 64px);
          }
        }

        /* Submit button with fill wipe */
        .btn-submit {
          position: relative;
          padding: clamp(14px, 2.5vw, 20px) clamp(32px, 6vw, 48px);
          border: 1px solid var(--text-primary, #1b1c19);
          background: transparent;
          color: var(--text-primary, #1b1c19);
          font-family: var(--font-sans, 'Manrope', sans-serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 0;
          overflow: hidden;
          transition: color 0.5s;
          -webkit-tap-highlight-color: transparent;
        }
        .btn-submit:hover { color: var(--bg, #fbf9f4); }
        .btn-submit .btn-fill {
          position: absolute;
          inset: 0;
          background: var(--text-primary, #1b1c19);
          transform: translateY(100%);
          transition: transform 0.5s cubic-bezier(.22,1,.36,1);
        }
        .btn-submit:hover .btn-fill { transform: translateY(0); }
        .btn-submit span { position: relative; z-index: 1; }

        /* Hero image grayscale hover */
        .hero-img-wrap img {
          filter: grayscale(100%);
          transition: filter 1s ease-in-out;
        }
        .hero-img-wrap:hover img { filter: grayscale(0%); }

        /* Hero grid */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(24px, 5vw, 24px);
          align-items: end;
        }

        @media (min-width: 768px) {
          .hero-grid { 
            grid-template-columns: 5fr 7fr; 
            gap: 24px;
          }
          .hero-text-col { order: 1; }
          .hero-img-col  { order: 2; }
        }

        .hero-text-col { order: 2; }
        .hero-img-col  { order: 1; }

        /* What to expect grid */
        .expect-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: var(--border, #e4e2dd);
        }

        @media (min-width: 640px) { 
          .expect-grid { 
            grid-template-columns: repeat(2, 1fr); 
          } 
        }

        @media (min-width: 1024px) { 
          .expect-grid { 
            grid-template-columns: repeat(4, 1fr); 
          } 
        }

        .expect-cell {
          background: var(--bg, #fbf9f4);
          padding: clamp(32px, 5vw, 48px) clamp(20px, 4vw, 40px);
        }

        /* Contact cards */
        .contact-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 3vw, 24px);
          padding-inline: clamp(16px, 5vw, 40px);
        }

        @media (min-width: 768px) { 
          .contact-cards { 
            grid-template-columns: repeat(3, 1fr); 
          } 
        }

        .contact-card {
          background: var(--bg-surface, #f5f3ee);
          border: 1px solid var(--bg-container-high, #eae8e3);
          padding: clamp(32px, 5vw, 48px);
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 3vw, 24px);
          transition: background 0.4s;
          text-decoration: none;
          color: inherit;
        }
        .contact-card:hover { background: var(--bg-container, #f0eee9); }

        /* Field label */
        .field-label {
          font-family: var(--font-sans, 'Manrope', sans-serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted, #747878);
          display: block;
          margin-bottom: 4px;
        }

        /* Reveal */
        @keyframes contactRise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .c-reveal { animation: contactRise 0.8s cubic-bezier(.22,1,.36,1) both; }
        .c-reveal-d1 { animation-delay: 0.1s; }
        .c-reveal-d2 { animation-delay: 0.2s; }
        .c-reveal-d3 { animation-delay: 0.3s; }
      `}</style>

      <div className="contact-page">

        {/* ── 1. HERO: CINEMATIC ASYMMETRY ────────────────────── */}
        <section style={{ paddingInline: "clamp(16px, 5vw, 40px)", marginBottom: "clamp(80px, 12vw, 160px)" }}>
          <div style={{ maxWidth: 1320, marginInline: "auto" }}>
            <div className="hero-grid">

              {/* Left: Text */}
              <div className="hero-text-col" style={{ paddingBottom: clamp(24, 5, 40) }}>
                <span
                  className="c-reveal"
                  style={{
                    fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-muted,#747878)",
                    display: "block",
                    marginBottom: "clamp(12px, 2vw, 20px)",
                  }}
                >
                  Connections
                </span>

                <h1
                  className="c-reveal c-reveal-d1"
                  style={{
                    fontFamily: "var(--font-serif,'Noto Serif',serif)",
                    fontSize: "clamp(2rem, 6vw, 64px)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    marginBottom: "clamp(16px, 4vw, 32px)",
                  }}
                >
                  Tell Your<br /><em>Story.</em>
                </h1>

                <p
                  className="c-reveal c-reveal-d2"
                  style={{
                    fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                    fontSize: "clamp(1rem, 2.5vw, 18px)",
                    lineHeight: 1.6,
                    color: "var(--text-secondary,#5e5e5e)",
                    maxWidth: 380,
                    marginBottom: "clamp(24px, 5vw, 48px)",
                  }}
                >
                  We capture the quiet glances and the grand gestures. To begin
                  your journey with us, please share your vision below.
                </p>

                {/* Trust micro-strip */}
                <div
                  className="c-reveal c-reveal-d3"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: clamp(8, 2, 12),
                    borderTop: "1px solid var(--border,#e4e2dd)",
                    paddingTop: "clamp(24px, 4vw, 32px)",
                  }}
                >
                  {[
                    "Reply within 24–48 hours",
                    "Selective calendar, high-touch support",
                    "Your details stay completely private",
                  ].map((t) => (
                    <div
                      key={t}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-muted,#747878)",
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          width: 6,
                          height: 6,
                          background: "var(--text-primary,#1b1c19)",
                          flexShrink: 0,
                        }}
                      />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Black placeholder image */}
              <div
                className="hero-img-col hero-img-wrap"
                style={{ aspectRatio: "4 / 5", overflow: "hidden" }}
              >
                <div
                  role="img"
                  aria-label="Editorial portrait of a couple in a high-fashion pose within a minimalist architectural space, dramatic shadows and soft cinematic lighting"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#0d0d0d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "radial-gradient(ellipse 70% 70% at 55% 40%, rgba(90,80,60,.15), transparent 70%)",
                    }}
                  />
                  {/* Film strip side dots */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: 14,
                      top: 0,
                      bottom: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      gap: 0,
                    }}
                  >
                    {Array.from({ length: 18 }).map((_, i) => (
                      <span
                        key={i}
                        style={{
                          display: "block",
                          width: 8,
                          height: 13,
                          border: "1px solid rgba(255,255,255,0.12)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. INQUIRY FORM ─────────────────────────────────── */}
        <section style={{ paddingInline: "clamp(16px, 5vw, 40px)", marginBottom: "clamp(80px, 12vw, 160px)" }}>
          <div style={{ maxWidth: 1320, marginInline: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12, minmax(0,1fr))", gap: "clamp(12px, 3vw, 24px)" }}>
              <div style={{ gridColumn: "1 / -1" }}>

                {/* Section label */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "clamp(40px, 8vw, 80px)",
                    borderBottom: "1px solid var(--border,#e4e2dd)",
                    paddingBottom: "clamp(12px, 3vw, 24px)",
                    gap: "clamp(12px, 3vw, 24px)",
                    flexWrap: "wrap",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-serif,'Noto Serif',serif)",
                      fontSize: "clamp(1.5rem, 5vw, 40px)",
                      fontWeight: 400,
                      lineHeight: 1.2,
                    }}
                  >
                    Begin Your Inquiry
                  </h2>
                  <span
                    style={{
                      fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-muted,#747878)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    All fields optional except email
                  </span>
                </div>

                {submitted ? (
                  /* ── Success state ── */
                  <div
                    style={{
                      textAlign: "center",
                      paddingBlock: 80,
                      borderTop: "1px solid var(--border,#e4e2dd)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-serif,'Noto Serif',serif)",
                        fontSize: "clamp(1.5rem,3vw,32px)",
                        fontStyle: "italic",
                        color: "var(--text-primary,#1b1c19)",
                        marginBottom: 20,
                      }}
                    >
                      We&rsquo;ve received your inquiry.
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                        fontSize: 16,
                        color: "var(--text-secondary,#5e5e5e)",
                        lineHeight: 1.6,
                      }}
                    >
                      Expect a thoughtful reply within 24–48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="contact-form-grid" style={{ marginBottom: 48 }}>

                      {/* Your Full Name */}
                      <div>
                        <label className="field-label" htmlFor="full-name">Your Full Name</label>
                        <input
                          id="full-name"
                          name="full_name"
                          type="text"
                          placeholder="Alexander Vance"
                          className="field-minimal"
                        />
                      </div>

                      {/* Partner's Name */}
                      <div>
                        <label className="field-label" htmlFor="partner-name">Partner&rsquo;s Name</label>
                        <input
                          id="partner-name"
                          name="partner_name"
                          type="text"
                          placeholder="Elara Jade"
                          className="field-minimal"
                        />
                      </div>

                      {/* Event Date */}
                      <div>
                        <label className="field-label" htmlFor="event-date">Event Date</label>
                        <input
                          id="event-date"
                          name="event_date"
                          type="text"
                          placeholder="MM / DD / YYYY"
                          className="field-minimal"
                        />
                      </div>

                      {/* Destination */}
                      <div>
                        <label className="field-label" htmlFor="destination">The Destination</label>
                        <input
                          id="destination"
                          name="destination"
                          type="text"
                          placeholder="Lake Como, Italy"
                          className="field-minimal"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="field-label" htmlFor="email-addr">Email Address *</label>
                        <input
                          id="email-addr"
                          name="email"
                          type="email"
                          required
                          placeholder="studio@yourdomain.com"
                          className="field-minimal"
                        />
                      </div>

                      {/* Referral */}
                      <div>
                        <label className="field-label" htmlFor="referral">Referral Source</label>
                        <select
                          id="referral"
                          name="referral"
                          className="field-minimal"
                          defaultValue=""
                        >
                          <option value="" disabled>SELECT ONE</option>
                          <option value="instagram">Instagram</option>
                          <option value="planner">A Planner</option>
                          <option value="friend">A Friend</option>
                          <option value="press">Journal / Vogue</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                    </div>

                    {/* Vision textarea — full width */}
                    <div style={{ marginBottom: 64 }}>
                      <label className="field-label" htmlFor="vision">Tell us about your vision</label>
                      <textarea
                        id="vision"
                        name="vision"
                        rows={5}
                        placeholder="Describe the mood, the scale, and what draws you to our artistry..."
                        className="field-minimal"
                        style={{ resize: "none", display: "block" }}
                      />
                    </div>

                    {/* Submit */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button type="submit" className="btn-submit">
                        <div className="btn-fill" />
                        <span>Submit Inquiry</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. EDITORIAL QUOTE ─────────────────────────────── */}
        <section
          style={{
            paddingInline: "5vw",
            paddingBlock: 160,
            background: "var(--bg-surface,#f5f3ee)",
            marginBottom: 160,
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 860, marginInline: "auto" }}>
            <blockquote
              style={{
                fontFamily: "var(--font-serif,'Noto Serif',serif)",
                fontSize: "clamp(1.5rem,3.5vw,40px)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.3,
                color: "var(--text-primary,#1b1c19)",
                marginBottom: 32,
              }}
            >
              &ldquo;True artistry is not in what you see, but in what you feel when
              you look back.&rdquo;
            </blockquote>
            <cite
              style={{
                fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--text-muted,#747878)",
                fontStyle: "normal",
              }}
            >
              — Julian Archer, Creative Director
            </cite>
          </div>
        </section>

        {/* ── 4. WHAT TO EXPECT ──────────────────────────────── */}
        <section style={{ paddingInline: "5vw", marginBottom: 160 }}>
          <div style={{ maxWidth: 1320, marginInline: "auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 64,
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif,'Noto Serif',serif)",
                  fontSize: "clamp(1.75rem,4vw,40px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                What to Expect
              </h2>
            </div>

            <div className="expect-grid">
              {expectations.map((item) => (
                <div key={item.num} className="expect-cell">
                  <span
                    style={{
                      fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-muted,#747878)",
                      display: "block",
                      marginBottom: 24,
                    }}
                  >
                    {item.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif,'Noto Serif',serif)",
                      fontSize: "clamp(1.1rem,2vw,22px)",
                      fontWeight: 400,
                      lineHeight: 1.3,
                      marginBottom: 16,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: "var(--text-secondary,#5e5e5e)",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CONTACT CARDS: TONAL LAYERING ──────────────── */}
        <section style={{ paddingInline: "5vw", marginBottom: 160 }}>
          <div style={{ maxWidth: 1320, marginInline: "auto" }}>
            <div className="contact-cards">
              {contactCards.map((card) => (
                <a
                  key={card.id}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                >
                  <span style={{ color: "var(--text-muted,#747878)" }}>{card.icon}</span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--text-primary,#1b1c19)",
                        marginBottom: 16,
                      }}
                    >
                      {card.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: "var(--text-secondary,#5e5e5e)",
                      }}
                    >
                      {card.line1}
                      <br />
                      {card.line2}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FINAL CTA ────────────────────────────────────── */}
        <section style={{ paddingInline: "5vw", marginBottom: 160 }}>
          <div style={{ maxWidth: 1320, marginInline: "auto" }}>
            <div
              style={{
                border: "1px solid var(--outline,#747878)",
                padding: "80px 40px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif,'Noto Serif',serif)",
                  fontSize: "clamp(1.75rem,4vw,40px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}
              >
                Not ready to inquire yet?
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans,'Manrope',sans-serif)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-secondary,#5e5e5e)",
                  maxWidth: 480,
                  marginInline: "auto",
                  marginBottom: 40,
                }}
              >
                Explore our films and read the stories of couples we have had the
                honour of documenting.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
                <Link href="/films" className="btn-primary">
                  View Films
                </Link>
                <Link href="/testimonials" className="btn-secondary">
                  Read Testimonials
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
