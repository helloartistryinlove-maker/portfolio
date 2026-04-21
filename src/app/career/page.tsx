import { SectionHeading } from "@/components/ui/section-heading";

export default function CareerPage() {
  return (
    <div className="flex flex-col gap-10 sm:gap-14">
      <section className="surface p-6 sm:p-10">
        <SectionHeading
          eyebrow="Career"
          title="Join a selective creative team"
          description="We value calm professionals with strong craft and clear communication."
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
                placeholder="Phone number"
              />
            </label>
            <label className="grid gap-2 text-sm text-[#d9d5cb]">
              Role Interested In
              <input
                name="role"
                className="rounded-xl border border-white/15 bg-[#141414] px-4 py-3 text-sm outline-none transition focus:border-white/40"
                placeholder="Photographer / Editor / Film"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm text-[#d9d5cb]">
            Portfolio Link
            <input
              name="portfolio"
              type="url"
              className="rounded-xl border border-white/15 bg-[#141414] px-4 py-3 text-sm outline-none transition focus:border-white/40"
              placeholder="https://"
            />
          </label>

          <label className="grid gap-2 text-sm text-[#d9d5cb]">
            Message
            <textarea
              name="message"
              rows={5}
              className="rounded-xl border border-white/15 bg-[#141414] px-4 py-3 text-sm outline-none transition focus:border-white/40"
              placeholder="Share your experience and why this team fits your direction."
            />
          </label>

          <button type="submit" className="btn-primary w-full sm:w-auto">
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}
