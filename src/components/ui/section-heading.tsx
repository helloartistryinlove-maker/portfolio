type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  size?: "sm" | "md" | "lg";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  size = "md",
}: SectionHeadingProps) {
  const titleClass =
    size === "lg" ? "display-lg" : "display-md";

  return (
    <div
      style={{
        maxWidth: "640px",
        marginInline: center ? "auto" : undefined,
        textAlign: center ? "center" : undefined,
      }}
    >
      {eyebrow && (
        <p className="eyebrow" style={{ marginBottom: ".75rem" }}>
          {eyebrow}
        </p>
      )}
      <h2 className={titleClass}>{title}</h2>
      {!center && (
        <span className="gold-line" />
      )}
      {description && (
        <p
          style={{
            fontSize: ".9375rem",
            lineHeight: 1.65,
            color: "var(--text-2)",
            marginTop: center ? ".875rem" : 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
