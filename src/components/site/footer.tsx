import Link from "next/link";

const footerLinks = [
  { href: "/",             label: "Home" },
  { href: "/films",        label: "Films" },
  { href: "/blogs",        label: "Blogs" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact-us",   label: "Contact" },
  { href: "/career",       label: "Career" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--line)" }}>
      {/* Pre-footer CTA band */}
      <div
        className="cinema"
        style={{
          background: "linear-gradient(135deg, rgba(20,18,14,1) 0%, var(--bg) 100%)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          className="page-wrap"
          style={{
            paddingBlock: "clamp(2.5rem,6vw,4rem)",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ maxWidth: "480px" }}>
            <p className="eyebrow" style={{ marginBottom: ".625rem" }}>Begin Your Story</p>
            <p
              style={{
                fontFamily: "var(--font-display,'Cormorant Garamond'),serif",
                fontSize: "clamp(1.6rem,3.5vw,2.5rem)",
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: "-.02em",
                color: "var(--text-1)",
              }}
            >
              Every unforgettable story deserves{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>intentional</em>{" "}
              cinematic direction.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem" }}>
            <Link href="/contact-us" className="btn-primary sheen">
              Get In Touch
            </Link>
            <Link href="/films" className="btn-secondary sheen">
              View Films
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="page-wrap" style={{ paddingBlock: "2rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.25rem",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display,'Cormorant Garamond'),serif",
                fontSize: "1.125rem",
                fontWeight: 500,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--text-1)",
              }}
            >
              Artistry In Love
            </p>
            <p style={{ fontSize: ".75rem", color: "var(--text-4)", marginTop: ".2rem" }}>
              Cinematic Photography &amp; Films
            </p>
          </div>

          {/* Links */}
          <nav style={{ display: "flex", flexWrap: "wrap", gap: ".35rem .875rem" }}>
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover-underline"
                style={{
                  fontSize: ".75rem",
                  color: "var(--text-3)",
                  transition: "color .2s",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          style={{
            marginTop: "1.25rem",
            paddingTop: "1.125rem",
            borderTop: "1px solid var(--line)",
            display: "flex",
            flexWrap: "wrap",
            gap: ".5rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: ".6875rem", color: "var(--text-4)" }}>
            © {year} artistryinlove.com — All rights reserved.
          </p>
          <p style={{ fontSize: ".6875rem", color: "var(--gold)", opacity: 0.55 }}>
            where love becomes cinema
          </p>
        </div>
      </div>
    </footer>
  );
}
