import { SectionHeading } from "@/components/ui/section-heading";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col gap-10 sm:gap-14">
      <section className="surface p-6 sm:p-10">
        <SectionHeading
          eyebrow="Contact Us"
          title="Share your date. We will handle the rest with care."
          description="Expect a response window of 24 to 48 hours with availability and next steps."
        />
      </section>

      <section className="surface p-6 sm:p-10">
        <form className="grid gap-5" action="#" method="post">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-[#d9d5cb]">
              Name
              <input
                name="name"
                required
                className="rounded-xl border border-white/15 bg-[#141414] px-4 py-3 text-sm outline-none transition focus:border-white/40"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm text-[#d9d5cb]">
              Email
              <input
                type="email"
                name="email"
                required
                className="rounded-xl border border-white/15 bg-[#141414] px-4 py-3 text-sm outline-none transition focus:border-white/40"
                placeholder="your@email.com"
              />
            </label>
            <label className="grid gap-2 text-sm text-[#d9d5cb]">
              Phone
              <input
                name="phone"
                className="rounded-xl border border-white/15 bg-[#141414] px-4 py-3 text-sm outline-none transition focus:border-white/40"
                placeholder="Phone or WhatsApp"
              />
            </label>
            <label className="grid gap-2 text-sm text-[#d9d5cb]">
              Event Type
              <input
                name="eventType"
                className="rounded-xl border border-white/15 bg-[#141414] px-4 py-3 text-sm outline-none transition focus:border-white/40"
                placeholder="Wedding / Couple / Brand"
              />
            </label>
            <label className="grid gap-2 text-sm text-[#d9d5cb]">
              Date
              <input
                type="date"
                name="date"
                className="rounded-xl border border-white/15 bg-[#141414] px-4 py-3 text-sm outline-none transition focus:border-white/40"
              />
            </label>
            <label className="grid gap-2 text-sm text-[#d9d5cb]">
              Location
              <input
                name="location"
                className="rounded-xl border border-white/15 bg-[#141414] px-4 py-3 text-sm outline-none transition focus:border-white/40"
                placeholder="City / Venue"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm text-[#d9d5cb]">
            Message
            <textarea
              name="message"
              rows={5}
              className="rounded-xl border border-white/15 bg-[#141414] px-4 py-3 text-sm outline-none transition focus:border-white/40"
              placeholder="Tell us what matters most for your story."
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="btn-primary">
              Send Inquiry
            </button>
            <a
              href="https://wa.me/?text=Hello%20Artistry%20In%20Love"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-center"
            >
              WhatsApp Quick Contact
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}
