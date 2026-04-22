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
          "linear-gradient(145deg, rgba(20,18,14,1) 0%, rgba(11,10,8,1) 55%, rgba(18,16,12,1) 100%)",
        border: "1px solid rgba(233,223,204,0.14)",
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
          background: "radial-gradient(circle,rgba(185,154,107,.48) 0%,transparent 70%)",
          filter: "blur(45px)",
          opacity: .18,
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
            color: "var(--text-2)",
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
