import Link from "next/link";

type CtaStripProps = {
  title: string;
  text: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaStrip({
  title,
  text,
  primaryLabel = "Check Availability",
  primaryHref = "/contact-us",
  secondaryLabel,
  secondaryHref,
}: CtaStripProps) {
  return (
    <section
      className="cinema"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "1.25rem",
        padding: "clamp(1.75rem,5vw,3rem)",
        background:
          "linear-gradient(145deg, rgba(251,247,243,0.98) 0%, rgba(247,238,231,0.98) 52%, rgba(234,216,202,0.98) 100%)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-4rem",
          right: "-4rem",
          width: "18rem",
          height: "18rem",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(138,95,69,.35) 0%,transparent 70%)",
          filter: "blur(45px)",
          opacity: .24,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <p className="eyebrow" style={{ marginBottom: "1rem" }}>Ready to Begin?</p>
        <h3
          className="display-md"
          style={{ maxWidth: "540px" }}
        >
          {title}
        </h3>
        <p
          style={{
            marginTop: ".875rem",
            maxWidth: "480px",
            fontSize: ".9375rem",
            lineHeight: 1.65,
            color: "var(--text-secondary)",
          }}
        >
          {text}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".75rem",
            marginTop: "1.75rem",
          }}
        >
          <Link href={primaryHref} className="btn-primary sheen">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link href={secondaryHref} className="btn-secondary sheen">
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
