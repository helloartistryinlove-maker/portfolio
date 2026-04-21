import Link from "next/link";
import { CtaStrip } from "@/components/ui/cta-strip";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";

const journalCards = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: `Journal Story ${String(index + 1).padStart(2, "0")}`,
  category: "Category Placeholder",
  date: "Date Placeholder",
  summary: "A concise entry block ready for real story context and visuals.",
}));

export default function BlogsPage() {
  return (
    <div className="flex flex-col gap-10 sm:gap-14">
      <section className="surface p-6 sm:p-10">
        <SectionHeading
          eyebrow="Blogs"
          title="A curated visual journal"
          description="Minimal story-led entries designed for future publishing."
        />
      </section>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {journalCards.map((card) => (
          <article key={card.id} className="surface overflow-hidden">
            <MediaPlaceholder ratio="wide" label="Story Cover" />
            <div className="p-4 sm:p-5">
              <p className="text-[11px] tracking-[0.14em] text-[#a9a497] uppercase">
                {card.category} • {card.date}
              </p>
              <h2 className="mt-3 font-display text-2xl text-[#f4f1ea]">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#c7c2b6]">{card.summary}</p>
            </div>
          </article>
        ))}
      </section>

      <CtaStrip
        title="Planning your story?"
        text="Share your date and location to receive availability details."
        primaryLabel="Check Availability"
        primaryHref="/contact-us"
        secondaryLabel="View Films"
        secondaryHref="/films"
      />

      <div className="text-center">
        <Link href="/contact-us" className="btn-secondary">
          Contact The Studio
        </Link>
      </div>
    </div>
  );
}
