import Link from "next/link";
import { CtaStrip } from "@/components/ui/cta-strip";
import { SectionHeading } from "@/components/ui/section-heading";

const reviews = [
  "Review placeholder text for future client feedback.",
  "A concise reflection block reserved for a real client experience.",
  "Short testimonial placeholder with room for authentic voice.",
  "Structured trust note placeholder for future publication.",
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col gap-10 sm:gap-14">
      <section className="surface p-6 sm:p-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Client trust, presented with restraint"
          description="Tasteful placeholders ready for real review content."
        />
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {reviews.map((review) => (
          <article key={review} className="surface p-6">
            <p className="text-xs tracking-[0.18em] text-[#a9a497] uppercase">Client Review</p>
            <p className="mt-3 text-lg text-[#f0ece3]">★★★★★</p>
            <p className="mt-3 text-sm leading-7 text-[#c7c2b6]">{review}</p>
          </article>
        ))}
      </section>

      <div className="surface p-6 sm:p-8">
        <p className="text-sm leading-7 text-[#c7c2b6]">
          Full review publishing can be managed privately and updated when approvals are complete.
        </p>
        <Link href="/contact-us" className="btn-secondary mt-5">
          Start Inquiry
        </Link>
      </div>

      <CtaStrip
        title="Ready to begin your experience?"
        text="Send your details and receive the next steps within our response window."
        primaryLabel="Check Availability"
        primaryHref="/contact-us"
      />
    </div>
  );
}
