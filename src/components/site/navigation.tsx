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

          /* ── Flex Layout: logo on left, links and cta on right ── */
          display: flex;
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

        /* ── Logo, left-aligned ── */
        .nav-brand {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          margin-right: auto;
          color: ${isTransparent ? "rgba(255,248,242,0.96)" : "var(--text-primary)"};
          text-decoration: none;
          z-index: 101;
          transition: color 0.4s, opacity 0.4s;
          /* cap width so it never overflows into col-2 */
          max-width: 100%;
          overflow: visible;
        }
        .nav-brand.dark { color: var(--text-primary); }

        /* ── Nav links, right-aligned ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: clamp(24px, 4vw, 48px);
          margin-right: clamp(24px, 4vw, 48px);
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
          font-weight: 700;
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
            /* flex on mobile — only logo + hamburger */
            display: flex;
            justify-content: space-between;
          }
          .nav-links { display: none; }
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

        {/* Nav links (right aligned) */}
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

        {/* Hamburger, right-aligned */}
        <div className="nav-right">
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