"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HeaderLogo } from "./header-logo";

const links = [
  { href: "/",             label: "Home" },
  { href: "/films",        label: "Films" },
  { href: "/blogs",        label: "Blogs" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact-us",   label: "Contact" },
  { href: "/career",       label: "Careers" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isTransparent = pathname === "/" || pathname === "/blogs" || pathname === "/career";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <>
      <style>{`
        .nav-root {
          position: absolute;
          top: 0; left: 0; right: 0;
          z-index: 100;

          /* ── 3-column grid: logo | links | cta ──
             Logo lives in col-1. No matter how wide it grows,
             the centre links stay pinned in col-2. */
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;

          padding: clamp(24px, 5vw, 36px) clamp(24px, 5vw, 40px);
          background: ${isTransparent
            ? (isScrolled ? "rgba(0,0,0,0.4)" : "transparent")
            : "rgba(242,234,228,0.88)"};
          backdrop-filter: ${isTransparent && !isScrolled ? "none" : "blur(12px)"};
          -webkit-backdrop-filter: ${isTransparent && !isScrolled ? "none" : "blur(12px)"};
          border-bottom: 1px solid ${
            isTransparent || pathname === "/films" || pathname === "/contact-us"
              ? "transparent"
              : "var(--border)"};
          transition: background 0.3s, border-color 0.3s;
        }

        /* ── Column 1: logo, left-aligned ── */
        .nav-brand {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          color: ${isTransparent ? "rgba(255,248,242,0.96)" : "var(--text-primary)"};
          text-decoration: none;
          z-index: 101;
          transition: color 0.4s, opacity 0.4s;
          /* cap width so it never overflows into col-2 */
          max-width: 100%;
          overflow: visible;
        }
        .nav-brand.dark { color: var(--text-primary); }

        /* ── Column 2: nav links, always centred ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: clamp(32px, 6vw, 64px);
          /* centre inside the auto column */
          justify-content: center;
        }

        /* ── Column 3: CTA + hamburger, right-aligned ── */
        .nav-right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 16px;
        }

        .nav-link {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: ${isTransparent ? "rgba(255,248,242,0.72)" : "var(--text-muted)"};
          text-decoration: none;
          padding-bottom: 4px;
          border-bottom: 1px solid transparent;
          transition: color 0.4s, border-color 0.4s;
          white-space: nowrap;
        }
        .nav-link.active,
        .nav-link:hover {
          color: ${isTransparent ? "#fff8f2" : "var(--text-primary)"};
          border-bottom-color: ${isTransparent ? "#fff8f2" : "var(--text-primary)"};
        }

        .nav-cta {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: clamp(8px,2vw,12px) clamp(16px,3vw,24px);
          border: 1px solid ${isTransparent ? "rgba(255,248,242,0.4)" : "rgba(45,35,28,0.4)"};
          color: ${isTransparent ? "rgba(255,248,242,0.96)" : "var(--text-primary)"};
          background: transparent;
          text-decoration: none;
          transition: all 0.5s ease;
          cursor: pointer;
          white-space: nowrap;
        }
        .nav-cta:hover {
          background: ${isTransparent ? "#fff8f2" : "var(--text-primary)"};
          color: ${isTransparent ? "var(--text-primary)" : "var(--bg-surface)"};
          border-color: ${isTransparent ? "#fff8f2" : "var(--text-primary)"};
          box-shadow: ${isTransparent
            ? "0 0 15px rgba(255,248,242,0.2)"
            : "0 0 15px rgba(45,35,28,0.2)"};
        }

        .nav-ham {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 8px;
          z-index: 101;
          -webkit-tap-highlight-color: transparent;
        }
        .nav-ham span {
          display: block;
          width: 24px;
          height: 1px;
          background: ${isTransparent ? "#fff8f2" : "var(--text-primary)"};
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s, background 0.3s;
        }
        .nav-ham.open span { background: var(--text-primary) !important; }
        .nav-ham.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nav-ham.open span:nth-child(2) { opacity: 0; transform: translateX(10px); }
        .nav-ham.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile: collapse to flex, show hamburger ── */
        @media (max-width: 768px) {
          .nav-root {
            /* back to simple flex on mobile — only logo + hamburger */
            display: flex;
            justify-content: space-between;
          }
          .nav-links { display: none; }
          .nav-cta   { display: none; }
          .nav-ham   { display: flex; }
        }

        /* ── Mobile menu ── */
        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 99;
          background: linear-gradient(180deg, #f7f0ea 0%, #f2eae4 48%, #eaded2 100%);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 0 clamp(16px, 5vw, 40px);
          gap: clamp(12px, 4vw, 20px);
          transform: translateX(100%);
          visibility: hidden;
          transition: transform 0.8s cubic-bezier(0.16,1,0.3,1), visibility 0.8s;
          overflow: hidden;
        }
        .mobile-menu.open { transform: translateX(0); visibility: visible; }
        .mobile-menu a {
          font-family: var(--font-serif, "Noto Serif", serif);
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 400;
          color: var(--text-primary);
          text-decoration: none;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          line-height: 1;
        }
        .mobile-menu.open a { opacity: 0.45; transform: translateY(0); }
        .mobile-menu a.active,
        .mobile-menu.open a:hover { opacity: 1; }
        ${links.map((_, i) => `
          .mobile-menu.open a:nth-child(${i + 1}) {
            transition-delay: ${0.2 + i * 0.1}s;
          }
        `).join("")}
      `}</style>

      <nav className="nav-root">
        {/* Col 1 — Logo */}
        <Link
          href="/"
          className={`nav-brand${(open || !isTransparent) ? " dark" : ""}`}
          aria-label="Artistry In Love"
          onClick={() => setOpen(false)}
        >
          <HeaderLogo />
        </Link>

        {/* Col 2 — Nav links (always centred, unaffected by logo width) */}
        <div className="nav-links">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${pathname === href ? " active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Col 3 — CTA + hamburger, right-aligned */}
        <div className="nav-right">
          <Link href="/contact-us" className="nav-cta">Inquire</Link>
          <button
            className={`nav-ham${open ? " open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Spacer */}
      {!isTransparent && <div style={{ height: "clamp(60px, 12vw, 89px)" }} />}

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? " open" : ""}`} role="dialog" aria-modal="true">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}