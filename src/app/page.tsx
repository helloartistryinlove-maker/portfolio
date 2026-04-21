import Link from "next/link";
import { CtaStrip } from "@/components/ui/cta-strip";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";

const featuredWork = ["Feature 01", "Feature 02", "Feature 03"];

const trustPillars = [
  "Directed visual storytelling",
  "Calm, guided experience",
  "Selective annual calendar",
];

export default function Home() {
  return (
    <div className="flex flex-col gap-14 sm:gap-20">
      <section className="surface fade-rise relative overflow-hidden p-6 sm:p-10 md:p-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_0%,rgba(255,255,255,0.12),transparent_46%)]" />
        <div className="relative z-10 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className="text-xs tracking-[0.28em] text-[#afab9f] uppercase">Cinematic Photography Studio</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.9] text-[#f6f2ea] sm:text-6xl md:text-7xl">
              Visual stories with depth, elegance, and intent.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#cbc7bc] sm:text-base">
              Crafted for couples and brands who value emotion, craft, and timeless direction.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact-us" className="btn-primary text-center">
                Check Availability
              </Link>
              <Link href="/films" className="btn-secondary text-center">
                View Work
              </Link>
            </div>
          </div>
          <MediaPlaceholder ratio="portrait" label="Hero Frame" />
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="surface p-6 sm:p-8">
          <SectionHeading
            eyebrow="Intro"
            title="A quiet, guided process from first message to final delivery."
            description="Built to make every client feel held, clear, and confident."
          />
        </div>
        <div className="surface p-6 sm:p-8">
          <p className="text-xs tracking-[0.22em] text-[#afab9f] uppercase">Inquiry Focus</p>
          <p className="mt-4 text-sm leading-7 text-[#cbc7bc] sm:text-base">
            We keep communication direct and timelines transparent.
          </p>
          <Link href="/contact-us" className="btn-secondary mt-6">
            Send Inquiry
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected frames"
          description="Placeholder panels ready for curated highlights."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredWork.map((item) => (
            <article key={item} className="surface p-4">
              <MediaPlaceholder ratio="portrait" label={item} />
              <p className="mt-4 text-sm text-[#d5d1c8]">{item}</p>
              <p className="mt-1 text-xs text-[#9f9b91]">Placeholder content</p>
            </article>
          ))}
        </div>
      </section>

      <section className="surface p-6 sm:p-10">
        <SectionHeading
          eyebrow="Why Artistry In Love"
          title="Luxury is not loud. It is intentional."
          description="A selective studio approach for clients who value meaning over volume."
        />
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {trustPillars.map((pillar) => (
            <div key={pillar} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-[#d6d2c8]">
              {pillar}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <article className="surface p-5">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trust built through experience"
            description="Client feedback placeholders ready for future reviews."
          />
          <Link href="/testimonials" className="btn-secondary mt-5">
            View Testimonials
          </Link>
        </article>
        <article className="surface p-5">
          <SectionHeading
            eyebrow="Films"
            title="Motion with cinematic rhythm"
            description="See video placeholders staged for highlight reels."
          />
          <Link href="/films" className="btn-secondary mt-5">
            Explore Films
          </Link>
        </article>
        <article className="surface p-5">
          <SectionHeading
            eyebrow="Journal"
            title="Visual journal stories"
            description="Minimal story cards ready for real shoots and notes."
          />
          <Link href="/blogs" className="btn-secondary mt-5">
            Read Journal
          </Link>
        </article>
      </section>

      <CtaStrip
        title="If your story needs thoughtful direction, start here."
        text="Share your event details and we will reply with availability and next steps."
        primaryLabel="Check Availability"
        primaryHref="/contact-us"
        secondaryLabel="Join The Team"
        secondaryHref="/career"
      />
    </div>
  );
}
