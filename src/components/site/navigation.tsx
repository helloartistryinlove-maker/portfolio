"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/films", label: "Films" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/career", label: "Career" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg tracking-[0.2em] text-[#f5f2eb]"
          onClick={closeMenu}
        >
          ARTISTRY IN LOVE
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  isActive ? "text-[#f5f2eb]" : "text-[#cbc7bc] hover:text-[#f5f2eb]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact-us" className="btn-primary">
            Check Availability
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#f5f2eb] md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="text-lg">{isOpen ? "\u00d7" : "\u2261"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0d0d0d] md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-4 py-3 text-sm transition ${
                    isActive
                      ? "bg-white/10 text-[#f5f2eb]"
                      : "text-[#cbc7bc] hover:bg-white/5 hover:text-[#f5f2eb]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact-us"
              onClick={closeMenu}
              className="btn-primary mt-3 text-center"
            >
              Check Availability
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
