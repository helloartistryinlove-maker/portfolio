"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/",            label: "Home" },
  { href: "/films",       label: "Films" },
  { href: "/blogs",       label: "Blogs" },
  { href: "/testimonials",label: "Testimonials" },
  { href: "/contact-us",  label: "Contact" },
  { href: "/career",      label: "Career" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid",
        borderBottomColor: scrolled ? "var(--line)" : "transparent",
        background: scrolled ? "rgba(246,239,230,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "background .35s, border-color .35s",
      }}
    >
      <div
        className="page-wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBlock: "0.875rem",
        }}
      >
        {/* Brand */}
        <Link href="/" onClick={close} style={{ lineHeight: 1 }}>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-display, 'Cormorant Garamond'), serif",
              fontSize: "clamp(.8rem, 1.8vw, 1rem)",
              fontWeight: 500,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "var(--text-1)",
            }}
          >
            Artistry In Love
          </span>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-body, Manrope), sans-serif",
              fontSize: ".6rem",
              fontWeight: 700,
              letterSpacing: ".32em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginTop: ".15rem",
            }}
          >
            Cinematic Studio
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "1.75rem",
          }}
          className="md-nav"
        >
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="hover-underline"
                style={{
                  position: "relative",
                  fontSize: ".8125rem",
                  fontWeight: 500,
                  letterSpacing: ".03em",
                  color: active ? "var(--text-1)" : "var(--text-3)",
                  transition: "color .2s",
                }}
              >
                {label}
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-3px",
                      left: 0,
                      right: 0,
                      height: "1px",
                      background: "var(--gold)",
                      borderRadius: "1px",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="md-cta">
          <Link href="/contact-us" className="btn-primary sheen">
            Get In Touch
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md-hide-btn"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            width: "2.25rem",
            height: "2.25rem",
            borderRadius: "50%",
            border: "1px solid var(--line-md)",
            background: "transparent",
            cursor: "pointer",
            padding: 0,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "1.125rem",
                height: "1px",
                background: "var(--text-1)",
                borderRadius: "1px",
                transformOrigin: "center",
                transition: "transform .28s, opacity .2s",
                transform:
                  open
                    ? i === 0
                      ? "translateY(6px) rotate(45deg)"
                      : i === 1
                      ? "scaleX(0)"
                      : "translateY(-6px) rotate(-45deg)"
                    : "none",
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? "500px" : 0,
          opacity: open ? 1 : 0,
          transition: "max-height .35s cubic-bezier(.4,0,.2,1), opacity .25s",
          borderTop: open ? "1px solid var(--line)" : "none",
          background: "var(--surface)",
        }}
      >
        <nav
          className="page-wrap"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".25rem",
            paddingBlock: "1rem",
          }}
        >
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={close}
                style={{
                  padding: ".7rem 1rem",
                  borderRadius: ".625rem",
                  fontSize: ".875rem",
                  fontWeight: 500,
                  color: active ? "var(--gold-hi)" : "var(--text-2)",
                  background: active ? "var(--gold-glow)" : "transparent",
                  transition: "background .2s, color .2s",
                }}
              >
                {label}
              </Link>
            );
          })}
          <div style={{ paddingTop: ".5rem", paddingInline: "1rem" }}>
            <Link href="/contact-us" onClick={close} className="btn-primary" style={{ width: "100%" }}>
              Get In Touch
            </Link>
          </div>
        </nav>
      </div>

      {/* Inline responsive styles */}
      <style>{`
        .md-nav { display: none !important; }
        .md-cta { display: none !important; }
        .md-hide-btn { display: flex !important; }
        @media (min-width: 768px) {
          .md-nav { display: flex !important; }
          .md-cta { display: block !important; }
          .md-hide-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
