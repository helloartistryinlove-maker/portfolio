type MediaPlaceholderProps = {
  ratio?: "wide" | "video" | "square" | "portrait" | "ultrawide";
  label?: string;
};

const aspectMap = {
  wide: "16 / 9",
  video: "21 / 9",
  square: "1 / 1",
  portrait: "3 / 4",
  ultrawide: "32 / 9",
};

export function MediaPlaceholder({
  ratio = "wide",
  label = "Media Placeholder",
}: MediaPlaceholderProps) {
  return (
    <div
      className="media-skeleton"
      aria-label={label}
      style={{
        aspectRatio: aspectMap[ratio],
        position: "relative",
        overflow: "hidden",
        borderRadius: "inherit",
        background:
          "linear-gradient(180deg, rgba(29,22,18,0.08), transparent 55%), var(--surface-2)",
        border: "1px solid var(--line)",
      }}
    >
      <div
        className="media-zoom"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(165deg, rgba(0,0,0,0.06), transparent 55%), var(--surface-2)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 30% 25%, rgba(183,133,79,0.16), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Label */}
      <div
        style={{
          position: "absolute",
          bottom: "0.75rem",
          left: "0.75rem",
          borderRadius: "50px",
          border: "1px solid rgba(180,123,67,0.28)",
          background: "rgba(255,255,255,0.58)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          padding: "0.2rem 0.7rem",
          fontSize: "0.625rem",
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--gold)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
