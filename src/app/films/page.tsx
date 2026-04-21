import { CtaStrip } from "@/components/ui/cta-strip";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";

const films = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  title: `Film Sequence ${String(index + 1).padStart(2, "0")}`,
  duration: "Duration Placeholder",
  caption: "A cinematic preview card prepared for future film releases.",
}));

export default function FilmsPage() {
  return (
    <div className="flex flex-col gap-10 sm:gap-14">
      <section className="surface p-6 sm:p-10">
        <SectionHeading
          eyebrow="Films"
          title="Motion stories with an editorial pulse"
          description="Premium placeholders shaped for cinematic film showcases."
        />
      </section>

      <section className="grid gap-6">
        {films.map((film) => (
          <article key={film.id} className="surface overflow-hidden p-4 sm:p-6">
            <MediaPlaceholder ratio="video" label="Video Placeholder" />
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-3xl text-[#f4f1ea]">{film.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#c7c2b6]">{film.caption}</p>
              </div>
              <p className="text-xs tracking-[0.16em] text-[#a9a497] uppercase">{film.duration}</p>
            </div>
          </article>
        ))}
      </section>

      <CtaStrip
        title="Let your day move like cinema."
        text="Inquire for collections, availability, and process details."
        primaryLabel="Inquire Now"
        primaryHref="/contact-us"
        secondaryLabel="Read Journal"
        secondaryHref="/blogs"
      />
    </div>
  );
}
