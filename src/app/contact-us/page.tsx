import { SectionHeading } from "@/components/ui/section-heading";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const formRow: {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}[] = [
  { id: "name",      label: "Name",        name: "name",      placeholder: "Your name",               required: true },
  { id: "email",     label: "Email",       name: "email",     type: "email", placeholder: "your@email.com", required: true },
  { id: "phone",     label: "Phone",       name: "phone",     placeholder: "Phone or WhatsApp" },
  { id: "instagram", label: "Instagram",   name: "instagram", placeholder: "@yourhandle" },
  { id: "eventType", label: "Event Type",  name: "eventType", placeholder: "Wedding / Couple / Brand" },
  { id: "date",      label: "Date",        name: "date",      type: "date" },
  { id: "location",  label: "Location",    name: "location",  placeholder: "City / Venue" },
  { id: "guests",    label: "Guest Count", name: "guests",    placeholder: "Approx. number of guests" },
];

export default function ContactUsPage() {
  return (
    <>
      <style>{`
        .contact-form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.125rem;
        }
        @media (max-width: 640px) { .contact-form-grid { grid-template-columns: 1fr; } }
        .promise-strip {
          display: flex;
          flex-wrap: wrap;
          gap: .625rem 1.75rem;
          align-items: center;
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
              "radial-gradient(ellipse 55% 55% at 88% 8%,rgba(185,154,107,.12),transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="page-wrap"
          style={{ paddingBlock: "4.5rem 3.5rem", position: "relative", zIndex: 1 }}
        >
          <SectionHeading
            eyebrow="Contact"
            title="Tell us your vision and we will craft the path forward."
            description="Share your event details, mood direction, and timeline. Expect a response within 24 to 48 hours."
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
        {/* Promise strip */}
        <RevealOnScroll
          className="surface promise-strip"
          style={{
            padding: "1rem 1.375rem",
            borderColor: "rgba(180,123,67,.22)",
          }}
        >
          {[
            { icon: "⏱", text: "Reply within 48 hours" },
            { icon: "🔒", text: "Your data stays private" },
              { icon: "✦", text: "Selective calendar, high-touch support" },
          ].map((item) => (
            <span
              key={item.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".45rem",
                fontSize: ".8125rem",
                color: "var(--text-2)",
              }}
            >
              <span style={{ color: "var(--gold)" }}>{item.icon}</span>
              {item.text}
            </span>
          ))}
        </RevealOnScroll>

        {/* Form card */}
        <RevealOnScroll
          style={{
            borderRadius: "1.125rem",
            padding: "clamp(1.5rem,4vw,2.5rem)",
            background: "var(--surface)",
            border: "1px solid var(--line)",
          }}
        >
          <p className="eyebrow" style={{ marginBottom: ".35rem" }}>
            Inquiry Form
          </p>
          <p
            style={{
              fontSize: ".875rem",
              color: "var(--text-3)",
              marginBottom: "1.75rem",
            }}
          >
            Detailed responses help us design a more intentional proposal for your story.
          </p>

          <form
            style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}
            action="#"
            method="post"
          >
            <div className="contact-form-grid">
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
                Message
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us what matters most for your story."
                className="field"
                style={{ resize: "vertical" }}
              />
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
                Moodboard Link
              </span>
              <input
                name="moodboard"
                type="url"
                placeholder="Pinterest / Instagram collection link"
                className="field"
              />
            </label>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: ".75rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--line)",
              }}
            >
              <button type="submit" className="btn-primary sheen">
                Send Inquiry
              </button>
              <a
                href="https://wa.me/?text=Hello%20Artistry%20In%20Love"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary sheen"
              >
                WhatsApp Quick Contact
              </a>
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </>
  );
}
