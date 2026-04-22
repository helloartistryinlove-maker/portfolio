import { SectionHeading } from "@/components/ui/section-heading";

const values = [
  {
    icon: "◈",
    title: "Creative Ownership",
    desc: "Bring your artistic point of view and contribute to stories that feel modern, honest, and elevated.",
  },
  {
    icon: "◉",
    title: "Calm Culture",
    desc: "We run a high-performance studio without panic. Structure, respect, and communication come first.",
  },
  {
    icon: "✦",
    title: "Growing Together",
    desc: "You will sharpen your craft across photography, films, editing flow, and storytelling direction.",
  },
];

const formRow: {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}[] = [
  { id: "name",  label: "Name",               name: "name",  placeholder: "Your name",               required: true },
  { id: "email", label: "Email",              name: "email", type: "email", placeholder: "your@email.com", required: true },
  { id: "phone", label: "Phone",              name: "phone", placeholder: "Phone number" },
  { id: "role",  label: "Role Interested In", name: "role",  placeholder: "Photographer / Editor / Film" },
];

export default function CareerPage() {
  return (
    <>
      <style>{`
        .value-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .career-form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.125rem;
        }
        @media (max-width: 840px) { .value-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) {
          .value-grid { grid-template-columns: 1fr; }
          .career-form-grid { grid-template-columns: 1fr; }
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
              "radial-gradient(ellipse 55% 55% at 12% 8%,rgba(185,154,107,.12),transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="page-wrap"
          style={{ paddingBlock: "4.5rem 3.5rem", position: "relative", zIndex: 1 }}
        >
          <SectionHeading
            eyebrow="Join The Studio"
            title="Build iconic stories with our studio"
            description="We hire professionals who care about emotion, detail, consistency, and creative discipline."
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
          gap: "1.25rem",
          paddingBlock: "2.5rem clamp(3.5rem,8vw,7rem)",
        }}
      >
        {/* Values */}
        <div className="value-grid">
          {values.map((v) => (
            <div key={v.title} className="surface" style={{ padding: "1.375rem" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "1.25rem",
                  color: "var(--gold)",
                  marginBottom: ".625rem",
                }}
              >
                {v.icon}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-display,'Cormorant Garamond'),serif",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  color: "var(--text-1)",
                  marginBottom: ".4rem",
                }}
              >
                {v.title}
              </p>
              <p style={{ fontSize: ".8125rem", lineHeight: 1.6, color: "var(--text-3)" }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Application form */}
        <section
          style={{
            borderRadius: "1.125rem",
            padding: "clamp(1.5rem,4vw,2.5rem)",
            background: "var(--surface)",
            border: "1px solid var(--line)",
          }}
        >
          <p className="eyebrow" style={{ marginBottom: ".35rem" }}>
            Application Form
          </p>
          <p
            style={{
              fontSize: ".875rem",
              color: "var(--text-3)",
              marginBottom: "1.75rem",
            }}
          >
            Share your experience, strengths, and creative voice. We review every serious application carefully.
          </p>

          <form
            style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}
            action="#"
            method="post"
          >
            <div className="career-form-grid">
              {formRow.map((f) => (
                <label
                  key={f.id}
                  style={{ display: "flex", flexDirection: "column", gap: ".35rem" }}
                >
                  <span
                    style={{
                      fontSize: ".6875rem",
                      fontWeight: 700,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: "var(--text-3)",
                    }}
                  >
                    {f.label}
                    {f.required ? " *" : ""}
                  </span>
                  <input
                    id={f.id}
                    name={f.name}
                    type={f.type ?? "text"}
                    required={f.required}
                    placeholder={f.placeholder}
                    className="field"
                  />
                </label>
              ))}
            </div>

            <label style={{ display: "flex", flexDirection: "column", gap: ".35rem" }}>
              <span
                style={{
                  fontSize: ".6875rem",
                  fontWeight: 700,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                }}
              >
                Portfolio Link
              </span>
              <input name="portfolio" type="url" placeholder="https://" className="field" />
            </label>

            <label style={{ display: "flex", flexDirection: "column", gap: ".35rem" }}>
              <span
                style={{
                  fontSize: ".6875rem",
                  fontWeight: 700,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                }}
              >
                Message
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder="Share your experience and why this team fits your direction."
                className="field"
                style={{ resize: "vertical" }}
              />
            </label>

            <div style={{ paddingTop: "1rem", borderTop: "1px solid var(--line)" }}>
              <button type="submit" className="btn-primary sheen">
                Submit Application
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
