"use client";

import { useState } from "react";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

type Role = {
  title: string;
  location: string;
  summary: string;
  type: string;
};

type Value = {
  number: string;
  title: string;
  description: string;
};

const values: Value[] = [
  {
    number: "01",
    title: "Creative Ownership",
    description:
      "Bring a point of view that shapes the emotional arc of the work, not just the frame count.",
  },
  {
    number: "02",
    title: "Calm Precision",
    description:
      "We move with discipline, clarity, and restraint so the client experience feels seamless.",
  },
  {
    number: "03",
    title: "Editorial Taste",
    description:
      "You should understand composition, pacing, light, and how to make a celebration feel cinematic.",
  },
  {
    number: "04",
    title: "Long-Term Growth",
    description:
      "The studio is selective. The right people grow with us across film, photo, and post-production.",
  },
];

const roles: Role[] = [
  {
    title: "Lead Cinematographer",
    location: "New York / Global",
    summary:
      "Experienced storyteller who can direct discreetly, shape a scene, and deliver premium wedding films.",
    type: "Full time",
  },
  {
    title: "Editorial Editor",
    location: "Remote / Hybrid",
    summary:
      "Detail-oriented editor with a refined sense of pacing, sound design, and high-end color finishing.",
    type: "Contract",
  },
  {
    title: "Second Photographer",
    location: "London / Travel",
    summary:
      "Calm, observant photographer able to support fast-moving luxury events with discretion and control.",
    type: "Seasonal",
  },
];

const traits = [
  "A strong eye for composition and quiet luxury",
  "Experience working on weddings, editorials, or documentary-led stories",
  "Professional communication and a collaborative attitude on set",
  "Comfort traveling, adapting, and staying composed under pressure",
];

const applicationFields = [
  { id: "name", label: "Full Name", name: "name", type: "text", required: true },
  { id: "email", label: "Email Address", name: "email", type: "email", required: true },
  { id: "phone", label: "Phone Number", name: "phone", type: "tel" },
  { id: "role", label: "Role Interested In", name: "role", type: "text", required: true },
  { id: "portfolio-link", label: "Portfolio Link", name: "portfolioLink", type: "url" },
];

function placeholderSrc() {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200"><rect width="1600" height="1200" fill="#4a372c"/></svg>`,
  )}`;
}

function PlaceholderImage({
  alt,
  variant = "default",
}: {
  alt: string;
  variant?: "default" | "wide" | "tall";
}) {
  const variantClass =
    variant === "wide"
      ? "career-placeholder-wide"
      : variant === "tall"
        ? "career-placeholder-tall"
        : "";

  return <img src={placeholderSrc()} alt={alt} className={`career-placeholder ${variantClass}`} />;
}

export default function CareerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleCareerSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      role: String(formData.get("role") ?? ""),
      portfolioLink: String(formData.get("portfolioLink") ?? ""),
      experience: String(formData.get("experience") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        setSubmitStatus("error");
        setSubmitMessage(data?.error ?? "Unable to submit your application. Please try again.");
        return;
      }

      form.reset();
      setSubmitStatus("success");
      setSubmitMessage("Application received. Our team will review it and respond soon.");
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Unable to submit your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <style>{`
        .career-page {
          background: var(--bg);
          color: var(--text-primary);
        }

        .career-section {
          padding-block: clamp(60px, 12vw, 160px);
        }

        .career-section-tight {
          padding-block: clamp(40px, 8vw, 80px);
        }

        .career-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(20px, 5vw, 80px);
          align-items: end;
          padding-inline: clamp(16px, 5vw, 40px);
        }

        @media (min-width: 768px) {
          .career-hero-grid {
            grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr);
          }
        }

        .career-kicker {
          margin-bottom: clamp(.75rem, 2vw, 1rem);
        }

        .career-title {
          max-width: 100%;
          margin-bottom: clamp(.9rem, 3vw, 1.25rem);
          font-size: clamp(1.75rem, 5vw, 64px);
        }

        @media (min-width: 768px) {
          .career-title {
            max-width: 10ch;
          }
        }

        .career-lead {
          max-width: 36rem;
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .career-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(12px, 3vw, 1.25rem);
          margin-top: clamp(1.25rem, 4vw, 2rem);
          align-items: center;
        }

        .career-stat-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1rem, 3vw, 24px);
          margin-top: clamp(1.5rem, 4vw, 2.5rem);
          padding-top: clamp(.9rem, 2vw, 1.25rem);
          border-top: 1px solid var(--border);
        }

        @media (min-width: 640px) {
          .career-stat-row {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        .career-stat strong {
          display: block;
          font-family: var(--font-serif);
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          font-weight: 400;
          margin-bottom: .35rem;
        }

        .career-stat span {
          display: block;
          font-size: clamp(.8rem, 1.5vw, .875rem);
          color: var(--text-secondary);
        }

        .career-placeholder {
          display: block;
          width: 100%;
          object-fit: cover;
          aspect-ratio: 4 / 5;
          border: 1px solid var(--border);
          background: linear-gradient(180deg, #4a372c 0%, #2d231c 100%);
        }

        .career-placeholder-wide {
          aspect-ratio: 16 / 9;
        }

        .career-placeholder-tall {
          aspect-ratio: 3 / 4;
        }

        .career-copy-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 3vw, 24px);
          padding-inline: clamp(16px, 5vw, 40px);
        }

        @media (min-width: 768px) {
          .career-copy-grid {
            grid-template-columns: repeat(12, minmax(0, 1fr));
            gap: var(--gutter);
          }
        }

        .career-copy-wide {
          grid-column: 1 / -1;
        }

        .career-copy-side {
          grid-column: 1 / -1;
        }

        @media (min-width: 768px) {
          .career-copy-wide {
            grid-column: span 7;
          }

          .career-copy-side {
            grid-column: span 5;
          }
        }

        .career-values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(12px, 3vw, 24px);
          padding-inline: clamp(16px, 5vw, 40px);
        }

        @media (min-width: 640px) {
          .career-values-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1080px) {
          .career-values-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        .career-value-card {
          padding: clamp(1rem, 3vw, 1.5rem);
          border: 1px solid var(--border);
          background: var(--bg-surface);
          min-height: clamp(12rem, 30vw, 14rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .career-value-card p {
          font-size: clamp(.9rem, 1.5vw, .9375rem);
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .career-roles {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding-inline: clamp(16px, 5vw, 40px);
        }

        .career-role-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(12px, 3vw, 24px);
          padding: clamp(1rem, 2vw, 1.5rem) 0;
          border-top: 1px solid var(--border);
          align-items: start;
        }

        @media (min-width: 768px) {
          .career-role-row {
            grid-template-columns: minmax(0, 2fr) minmax(0, 4fr) minmax(0, 1fr);
            gap: var(--gutter);
          }
        }

        .career-role-row:first-child {
          border-top: 0;
        }

        .career-role-title {
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          line-height: 1.2;
          margin-bottom: .5rem;
        }

        .career-role-meta,
        .career-role-summary {
          color: var(--text-secondary);
          font-size: clamp(.9rem, 1.5vw, .9375rem);
          line-height: 1.7;
        }

        .career-role-action {
          justify-self: start;
          align-self: center;
        }

        @media (min-width: 768px) {
          .career-role-action {
            justify-self: end;
          }
        }

        .career-values-2col {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(24px, 6vw, 80px);
          align-items: start;
          padding-inline: clamp(16px, 5vw, 40px);
        }

        @media (min-width: 768px) {
          .career-values-2col {
            grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr);
          }
        }

        .career-manifesto {
          padding: 0;
        }

        .career-manifesto blockquote {
          font-family: var(--font-serif);
          font-size: clamp(1.4rem, 4vw, 3.4rem);
          line-height: 1.18;
          font-style: italic;
          margin: 0 0 clamp(1rem, 2vw, 1.5rem);
          max-width: 16ch;
        }

        .career-traits {
          padding-top: .25rem;
        }

        .career-trait {
          padding: clamp(.75rem, 2vw, 1rem) 0;
          border-top: 1px solid var(--border);
        }

        .career-trait:first-child {
          border-top: 0;
          padding-top: 0;
        }

        .career-trait strong {
          display: block;
          font-family: var(--font-serif);
          font-size: clamp(1rem, 2vw, 1.1rem);
          font-weight: 400;
          margin-bottom: .3rem;
        }

        .career-form-shell {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(24px, 5vw, 80px);
          align-items: start;
          padding-inline: clamp(16px, 5vw, 40px);
          padding-top: clamp(1rem, 2vw, 1.5rem);
        }

        @media (min-width: 768px) {
          .career-form-shell {
            grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr);
          }
        }

        .career-form-panel {
          border: 1px solid var(--border);
          background: var(--bg-surface);
          padding: clamp(1.2rem, 3vw, 2rem);
          width: 100%;
        }

        .career-form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(12px, 2vw, 1.25rem);
        }

        @media (min-width: 640px) {
          .career-form-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        .career-field-stack {
          display: flex;
          flex-direction: column;
          gap: .4rem;
        }

        .career-full {
          grid-column: 1 / -1;
        }

        .career-final-cta {
          text-align: center;
          border-top: 1px solid var(--border);
          padding-inline: clamp(16px, 5vw, 40px);
        }

        .career-gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1rem, 3vw, 24px);
          padding-inline: clamp(16px, 5vw, 40px);
        }

        @media (min-width: 640px) {
          .career-gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1080px) {
          .career-gallery-grid {
            grid-template-columns: 1.05fr .95fr .8fr;
          }
        }

        .career-gallery-card {
          display: flex;
          flex-direction: column;
          gap: clamp(.6rem, 2vw, .875rem);
        }

        .career-gallery-caption {
          display: flex;
          justify-content: space-between;
          gap: clamp(12px, 3vw, 1rem);
          align-items: baseline;
          flex-wrap: wrap;
        }

        @media (max-width: 1080px) {
          .career-hero-grid,
          .career-values-2col,
          .career-form-shell {
            grid-template-columns: 1fr;
          }

          .career-copy-wide,
          .career-copy-side {
            grid-column: span 1;
          }
        }

        .career-hero {
          position: relative;
          width: 100%;
          height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #000;
        }

        .career-hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0.8;
          filter: blur(5px);
          transform: scale(1.1);
        }

        .career-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%);
          z-index: 1;
        }

        .career-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: var(--bg-surface);
          padding: 20px;
        }

        .career-hero-title {
          font-family: var(--font-script);
          font-size: clamp(3rem, 10vw, 6.5rem);
          font-weight: 400;
          margin-bottom: 0.5rem;
          line-height: 1;
          color: var(--bg-surface);
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .career-hero-subtitle {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          opacity: 0.9;
        }
      `}</style>

      <div className="career-page">
        <section className="career-hero">
          <img 
            src="/portfolio1.jpg" 
            alt="Careers Hero" 
            className="career-hero-bg" 
          />
          <div className="career-hero-overlay" />
          <div className="career-hero-content">
            <RevealOnScroll>
              <h1 className="career-hero-title">Make your story with us</h1>
              <p className="career-hero-subtitle">we are hiring</p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="career-section" id="application">
          <div className="page-wrap career-form-shell">
            <div>
              <p className="label-sm" style={{ marginBottom: "clamp(.75rem, 2vw, 1rem)" }}>
                Application Form
              </p>
              <h2 className="headline-lg" style={{ marginBottom: "clamp(1rem, 2vw, 1.5rem)", maxWidth: "11ch" }}>
                Begin your journey with us.
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "33rem" }}>
                Tell us what you make, what you care about, and why you want to contribute to a
                studio that values editorial quality over volume.
              </p>

              <div style={{ marginTop: "2rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border)" }}>
                <p className="label-sm" style={{ marginBottom: "1rem" }}>
                  What to include
                </p>
                <p style={{ fontSize: ".9375rem", lineHeight: 1.75, color: "var(--text-secondary)", maxWidth: "34rem" }}>
                  Portfolio, relevant experience, preferred role, and a brief note about the kind of
                  creative work you want to make here.
                </p>
              </div>
            </div>

            <div className="career-form-panel">
              <form onSubmit={handleCareerSubmit}>
                <div className="career-form-grid">
                  {applicationFields.map((field, index) => (
                    <label
                      key={field.id}
                      className={`career-field-stack ${index < 2 ? "" : "career-full"}`}
                      htmlFor={field.id}
                    >
                      <span className="label-sm" style={{ color: "var(--text-muted)" }}>
                        {field.label}
                        {field.required ? " *" : ""}
                      </span>
                      <input
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        maxLength={
                          field.name === "name"
                            ? 100
                            : field.name === "email"
                              ? 200
                              : field.name === "phone"
                                ? 40
                                : field.name === "role"
                                  ? 120
                                  : 300
                        }
                        className="field"
                      />
                    </label>
                  ))}

                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  />

                  <label className="career-field-stack career-full" htmlFor="experience">
                    <span className="label-sm" style={{ color: "var(--text-muted)" }}>
                      Experience
                    </span>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={4}
                      className="field"
                      maxLength={1500}
                      placeholder="Tell us briefly about relevant projects, years of experience, and specializations."
                      style={{ resize: "vertical" }}
                    />
                  </label>

                  <label className="career-field-stack career-full" htmlFor="message">
                    <span className="label-sm" style={{ color: "var(--text-muted)" }}>
                      Message *
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="field"
                      required
                      maxLength={4000}
                      placeholder="Share your background, your approach to work, and why this studio feels right for you."
                      style={{ resize: "vertical" }}
                    />
                  </label>
                </div>

                {submitStatus !== "idle" ? (
                  <p
                    role="status"
                    style={{
                      marginTop: "1rem",
                      fontSize: "0.9rem",
                      color: submitStatus === "success" ? "var(--text-primary)" : "#8f5a49",
                    }}
                  >
                    {submitMessage}
                  </p>
                ) : null}

                <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                  <p className="label-sm" style={{ color: "var(--text-muted)" }}>
                    We review applications manually.
                  </p>
                  <button
                    type="submit"
                    className="btn-ghost"
                    disabled={isSubmitting}
                    style={isSubmitting ? { opacity: 0.6, cursor: "not-allowed" } : undefined}
                  >
                    {isSubmitting ? "Sending..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="career-section-tight career-final-cta">
          <div className="page-wrap" style={{ maxWidth: "900px" }}>
            <p className="label-sm" style={{ marginBottom: "1rem" }}>
              Final Invitation
            </p>
            <h2 className="headline-lg" style={{ marginBottom: "1.25rem" }}>
              If you want to shape what luxury feels like, we want to hear from you.
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "42rem", marginInline: "auto" }}>
              We are building a team with care, taste, and a long-term point of view. The right
              people will find this work exacting, rewarding, and worth the commitment.
            </p>

            <div style={{ marginTop: "2rem" }}>
              <Link href="#application" className="btn-ghost">
                Start the Conversation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
