"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(251, 249, 244, 0.92);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-bottom: 1px solid #e4e2dd;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(16px, 4vw, 28px) clamp(16px, 5vw, 40px);
        }
        .nav-brand {
          font-family: var(--font-serif, "Noto Serif", serif);
          font-size: clamp(18px, 4vw, 22px);
          font-weight: 400;
          letter-spacing: -0.01em;
          color: #1b1c19;
          text-decoration: none;
          white-space: nowrap;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: clamp(24px, 6vw, 48px);
        }
        .nav-link {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #747878;
          text-decoration: none;
          padding-bottom: 4px;
          border-bottom: 1px solid transparent;
          transition: color 0.4s, border-color 0.4s;
          white-space: nowrap;
        }
        .nav-link.active,
        .nav-link:hover { color: #1b1c19; border-bottom-color: #1b1c19; }
        .nav-cta {
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: clamp(8px, 2vw, 12px) clamp(16px, 3vw, 24px);
          border: 1px solid #1b1c19;
          color: #1b1c19;
          background: transparent;
          text-decoration: none;
          transition: background 0.5s, color 0.5s;
          cursor: pointer;
          border-radius: 0;
          white-space: nowrap;
        }
        .nav-cta:hover { background: #1b1c19; color: #fbf9f4; }
        .nav-ham {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 8px;
          -webkit-tap-highlight-color: transparent;
        }
        .nav-ham span {
          display: block;
          width: 24px;
          height: 1px;
          background: #1b1c19;
          transition: transform 0.3s;
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-cta   { display: none; }
          .nav-ham   { display: flex; }
        }
        .mobile-menu {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 99;
          background: #fbf9f4;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 0 clamp(16px, 5vw, 40px);
          gap: clamp(20px, 6vw, 32px);
          overflow-y: auto;
          padding-top: 80px;
          padding-bottom: 60px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          font-family: var(--font-serif, "Noto Serif", serif);
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 400;
          color: #1b1c19;
          text-decoration: none;
          opacity: 0.45;
          transition: opacity 0.3s;
          line-height: 1.1;
        }
        .mobile-menu a.active,
        .mobile-menu a:hover { opacity: 1; }
        .mobile-close {
          position: absolute;
          top: clamp(16px, 4vw, 28px);
          right: clamp(16px, 5vw, 40px);
          font-family: var(--font-sans, "Manrope", sans-serif);
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #747878;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>

      <nav className="nav-root">
        <Link href="/" className="nav-brand">Artistry in Love</Link>

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

        <Link href="/contact-us" className="nav-cta">Inquire</Link>

        <button
          className="nav-ham"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Spacer - responsive height */}
      <div style={{ height: "clamp(60px, 12vw, 89px)" }} />

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? " open" : ""}`} role="dialog" aria-modal="true">
        <button className="mobile-close" onClick={() => setOpen(false)}>Close</button>
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
