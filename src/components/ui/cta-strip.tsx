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
    <section className="rounded-3xl border border-white/10 bg-[linear-gradient(140deg,#1a1a1a,#0f0f0f)] p-6 sm:p-10">
      <h3 className="font-display text-3xl text-[#f4f1ea] sm:text-4xl">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#c7c2b6] sm:text-base">{text}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href={primaryHref} className="btn-primary text-center">
          {primaryLabel}
        </Link>
        {secondaryLabel && secondaryHref ? (
          <Link href={secondaryHref} className="btn-secondary text-center">
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
