import Link from "next/link";

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
  { id: "portfolio", label: "Portfolio Link", name: "portfolio", type: "url" },
];

function placeholderSrc() {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200"><rect width="1600" height="1200" fill="#111111"/></svg>`,
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
  return (
    <>
      <style>{`
        .career-page {
          background: var(--bg);
          color: var(--text-primary);
        }

        .career-section {
          padding-block: var(--stack-xl);
        }

        .career-section-tight {
          padding-block: var(--stack-lg);
        }

        .career-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr);
          gap: clamp(2rem, 6vw, 5rem);
          align-items: end;
        }

        .career-kicker {
          margin-bottom: 1rem;
        }

        .career-title {
          max-width: 10ch;
          margin-bottom: 1.25rem;
        }

        .career-lead {
          max-width: 36rem;
          font-size: 1.125rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .career-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem 1.25rem;
          margin-top: 2rem;
          align-items: center;
        }

        .career-stat-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--gutter);
          margin-top: 2.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border);
        }

        .career-stat strong {
          display: block;
          font-family: var(--font-serif);
          font-size: clamp(1.4rem, 2vw, 1.8rem);
          font-weight: 400;
          margin-bottom: .35rem;
        }

        .career-stat span {
          display: block;
          font-size: .875rem;
          color: var(--text-secondary);
        }

        .career-placeholder {
          display: block;
          width: 100%;
          object-fit: cover;
          aspect-ratio: 4 / 5;
          border: 1px solid var(--border);
          background: #111111;
        }

        .career-placeholder-wide {
          aspect-ratio: 16 / 9;
        }

        .career-placeholder-tall {
          aspect-ratio: 3 / 4;
        }

        .career-copy-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: var(--gutter);
        }

        .career-copy-wide {
          grid-column: span 7;
        }

        .career-copy-side {
          grid-column: span 5;
        }

        .career-values-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: var(--gutter);
        }

        .career-value-card {
          padding: 1.5rem;
          border: 1px solid var(--border);
          background: var(--bg-surface);
          min-height: 14rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .career-value-card p {
          font-size: .9375rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .career-roles {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .career-role-row {
          display: grid;
          grid-template-columns: minmax(0, 2fr) minmax(0, 4fr) minmax(0, 1fr);
          gap: var(--gutter);
          padding: 1.5rem 0;
          border-top: 1px solid var(--border);
          align-items: start;
        }

        .career-role-row:first-child {
          border-top: 0;
        }

        .career-role-title {
          font-size: 1.5rem;
          line-height: 1.2;
          margin-bottom: .5rem;
        }

        .career-role-meta,
        .career-role-summary {
          color: var(--text-secondary);
          font-size: .9375rem;
          line-height: 1.7;
        }

        .career-role-action {
          justify-self: end;
          align-self: center;
        }

        .career-values-2col {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr);
          gap: clamp(2rem, 6vw, 5rem);
          align-items: start;
        }

        .career-manifesto {
          padding: 0;
        }

        .career-manifesto blockquote {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 4vw, 3.4rem);
          line-height: 1.18;
          font-style: italic;
          margin: 0 0 1.5rem;
          max-width: 16ch;
        }

        .career-traits {
          padding-top: .25rem;
        }

        .career-trait {
          padding: 1rem 0;
          border-top: 1px solid var(--border);
        }

        .career-trait:first-child {
          border-top: 0;
          padding-top: 0;
        }

        .career-trait strong {
          display: block;
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 400;
          margin-bottom: .3rem;
        }

        .career-form-shell {
          display: grid;
          grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr);
          gap: clamp(2rem, 5vw, 4rem);
          align-items: start;
          padding-top: 1.5rem;
        }

        .career-form-panel {
          border: 1px solid var(--border);
          background: var(--bg-surface);
          padding: clamp(1.5rem, 3vw, 2rem);
        }

        .career-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem;
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
        }

        .career-gallery-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr .8fr;
          gap: var(--gutter);
        }

        .career-gallery-card {
          display: flex;
          flex-direction: column;
          gap: .875rem;
        }

        .career-gallery-caption {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: baseline;
        }

        @media (max-width: 1080px) {
          .career-hero-grid,
          .career-values-2col,
          .career-form-shell {
            grid-template-columns: 1fr;
          }

          .career-copy-wide,
          .career-copy-side {
            grid-column: span 12;
          }

          .career-values-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .career-gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .career-stat-row,
          .career-values-grid,
          .career-form-grid,
          .career-gallery-grid {
            grid-template-columns: 1fr;
          }

          .career-role-row {
            grid-template-columns: 1fr;
          }

          .career-role-action {
            justify-self: start;
          }

          .career-title {
            max-width: 100%;
          }
        }
      `}</style>

      <div className="career-page">
        <section className="career-section" style={{ paddingTop: "calc(var(--stack-lg) + 80px)" }}>
          <div className="page-wrap">
            <div className="career-hero-grid">
              <div>
                <p className="label-sm career-kicker">Join The Collective</p>
                <h1 className="headline-display career-title">Documenting love as fine art.</h1>
                <p className="career-lead">
                  We are a selectively grown studio built for people who care about cinematic
                  storytelling, quiet luxury, and the discipline required to make work feel timeless.
                </p>

                <div className="career-hero-actions">
                  <Link href="#application" className="btn-ghost">
                    Apply Now
                  </Link>
                  <Link href="#roles" className="link-underline">
                    View Open Roles
                  </Link>
                </div>

                <div className="career-stat-row" aria-label="Studio highlights">
                  <div className="career-stat">
                    <strong>Selective</strong>
                    <span>We hire slowly and intentionally.</span>
                  </div>
                  <div className="career-stat">
                    <strong>Editorial</strong>
                    <span>Strong taste matters as much as skill.</span>
                  </div>
                  <div className="career-stat">
                    <strong>Global</strong>
                    <span>Travel, destination work, and premium events.</span>
                  </div>
                </div>
              </div>

              <div>
                <PlaceholderImage
                  alt="Black studio placeholder representing the Careers hero image"
                  variant="wide"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="career-section-tight" style={{ background: "var(--bg-surface)" }}>
          <div className="page-wrap">
            <div className="career-copy-grid" style={{ marginBottom: "2rem" }}>
              <div className="career-copy-wide">
                <p className="label-sm" style={{ marginBottom: "1rem" }}>
                  Why Join Us
                </p>
                <h2 className="headline-lg" style={{ maxWidth: "12ch" }}>
                  A studio where restraint creates desire.
                </h2>
              </div>
              <div className="career-copy-side" style={{ paddingTop: ".4rem" }}>
                <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                  Every role here contributes to an experience that feels composed, personal, and
                  high-touch. We value taste, calm execution, and the ability to make people feel seen.
                </p>
              </div>
            </div>

            <div className="career-values-grid">
              {values.map((value) => (
                <div key={value.number} className="career-value-card">
                  <div>
                    <p className="label-sm" style={{ marginBottom: "1rem", color: "var(--text-muted)" }}>
                      {value.number}
                    </p>
                    <h3 className="headline-md" style={{ marginBottom: ".75rem" }}>
                      {value.title}
                    </h3>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="career-section" id="roles">
          <div className="page-wrap">
            <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "end", marginBottom: "2rem", flexWrap: "wrap" }}>
              <div>
                <p className="label-sm" style={{ marginBottom: "1rem" }}>
                  Available Opportunities
                </p>
                <h2 className="headline-lg">Open Positions</h2>
              </div>
              <p className="label-sm" style={{ color: "var(--text-muted)" }}>
                Hiring selectively this season
              </p>
            </div>

            <div className="career-roles">
              {roles.map((role) => (
                <div key={role.title} className="career-role-row">
                  <div>
                    <h3 className="headline-md career-role-title">{role.title}</h3>
                    <p className="career-role-meta">{role.location}</p>
                  </div>
                  <div>
                    <p className="career-role-summary">{role.summary}</p>
                  </div>
                  <div className="career-role-action">
                    <Link href="#application" className="link-underline">
                      Apply Now
                    </Link>
                    <p className="label-sm" style={{ marginTop: ".75rem", color: "var(--text-muted)" }}>
                      {role.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="career-section-tight" style={{ background: "var(--bg-surface)" }}>
          <div className="page-wrap career-values-2col">
            <div className="career-manifesto">
              <p className="label-sm" style={{ marginBottom: "1rem" }}>
                What We Look For
              </p>
              <blockquote>
                We hire people who can hold a room with their taste, then disappear into the work.
              </blockquote>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "34rem" }}>
                The right person understands that luxury is not loud. It is precise, disciplined,
                and deeply considered from the first client call to the final delivery.
              </p>
            </div>

            <div className="career-traits">
              {traits.map((trait, index) => (
                <div key={trait} className="career-trait">
                  <p className="label-sm" style={{ marginBottom: ".6rem", color: "var(--text-muted)" }}>
                    0{index + 1}
                  </p>
                  <strong>{trait}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="career-section-tight">
          <div className="page-wrap">
            <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "end", marginBottom: "1.5rem", flexWrap: "wrap" }}>
              <div>
                <p className="label-sm" style={{ marginBottom: "1rem" }}>
                  Studio Culture
                </p>
                <h2 className="headline-lg">Moments In-Between</h2>
              </div>
              <p className="label-sm" style={{ color: "var(--text-muted)" }}>
                The archive
              </p>
            </div>

            <div className="career-gallery-grid">
              <div className="career-gallery-card">
                <PlaceholderImage alt="Black studio placeholder for a vertical culture image" />
                <div className="career-gallery-caption">
                  <span className="label-sm">On Set</span>
                  <span className="label-sm" style={{ color: "var(--text-muted)" }}>Quiet focus</span>
                </div>
              </div>
              <div className="career-gallery-card">
                <PlaceholderImage alt="Black studio placeholder for a second culture image" />
                <div className="career-gallery-caption">
                  <span className="label-sm">Travel</span>
                  <span className="label-sm" style={{ color: "var(--text-muted)" }}>Destination work</span>
                </div>
              </div>
              <div className="career-gallery-card">
                <PlaceholderImage alt="Black studio placeholder for a third culture image" />
                <div className="career-gallery-caption">
                  <span className="label-sm">Post</span>
                  <span className="label-sm" style={{ color: "var(--text-muted)" }}>Refined delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="career-section" id="application">
          <div className="page-wrap career-form-shell">
            <div>
              <p className="label-sm" style={{ marginBottom: "1rem" }}>
                Application Form
              </p>
              <h2 className="headline-lg" style={{ marginBottom: "1.5rem", maxWidth: "11ch" }}>
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
              <form action="#" method="post">
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
                        className="field"
                      />
                    </label>
                  ))}

                  <label className="career-field-stack career-full" htmlFor="role">
                    <span className="label-sm" style={{ color: "var(--text-muted)" }}>
                      Role Interested In
                    </span>
                    <input id="role" name="role" type="text" className="field" placeholder="Photographer / Editor / Film" />
                  </label>

                  <label className="career-field-stack career-full" htmlFor="message">
                    <span className="label-sm" style={{ color: "var(--text-muted)" }}>
                      Message
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="field"
                      placeholder="Share your background, your approach to work, and why this studio feels right for you."
                      style={{ resize: "vertical" }}
                    />
                  </label>
                </div>

                <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                  <p className="label-sm" style={{ color: "var(--text-muted)" }}>
                    We review applications manually.
                  </p>
                  <button type="submit" className="btn-ghost">
                    Submit Application
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
