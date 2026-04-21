import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-xl tracking-[0.14em] text-[#f5f2eb]">
              ARTISTRY IN LOVE
            </p>
            <p className="mt-2 max-w-md text-sm text-[#bcb8ad]">
              Cinematic photography and films with an intentional, human process.
            </p>
          </div>
          <Link href="/contact-us" className="btn-primary">
            Start Your Inquiry
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#9f9b91]">
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/films">Films</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/career">Career</Link>
          <p className="ml-auto">artistryinlove.com</p>
        </div>
      </div>
    </footer>
  );
}
