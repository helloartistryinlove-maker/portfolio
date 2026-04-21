type MediaPlaceholderProps = {
  ratio?: "wide" | "video" | "square" | "portrait";
  label?: string;
};

const ratioClassMap = {
  wide: "aspect-[16/9]",
  video: "aspect-[21/9]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

export function MediaPlaceholder({
  ratio = "wide",
  label = "Media Placeholder",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`media-skeleton ${ratioClassMap[ratio]} relative overflow-hidden rounded-2xl border border-white/10 bg-[#121212]`}
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] tracking-[0.18em] text-[#c9c4b8] uppercase">
        {label}
      </div>
    </div>
  );
}
