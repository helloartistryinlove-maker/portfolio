type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs tracking-[0.28em] text-[#afab9f] uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-[#f4f1ea] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-[#c7c2b6] sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
