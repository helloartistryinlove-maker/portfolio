import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
        paddingInline: "5vw",
        paddingTop: "80px",
        paddingBottom: "40px",
        marginTop: "var(--stack-lg)",
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "40px",
          marginBottom: "80px",
        }}
      >
        {/* Brand */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-serif, 'Noto Serif', serif)",
              fontSize: "20px",
              fontStyle: "italic",
              color: "var(--text-primary)",
              marginBottom: "8px",
            }}
          >
            Artistry in Love
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Editorial Wedding Cinema
          </p>
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {[
            { href: "/films",        label: "Films" },
            { href: "/blogs",        label: "Journal" },
            { href: "/testimonials", label: "Testimonials" },
            { href: "/contact-us",   label: "Contact" },
            { href: "/career",       label: "Careers" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Legal links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {[
            { href: "/", label: "Studio" },
            { href: "/", label: "Terms of Service" },
            { href: "/", label: "Privacy Policy" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          borderTop: "1px solid var(--border)",
          paddingTop: "32px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          © {year} Artistry in Love. All Rights Reserved.
        </p>

        <div style={{ display: "flex", gap: "24px" }}>
          {["Instagram", "Vimeo", "Pinterest"].map((sn) => (
            <a
              key={sn}
              href="#"
              style={{
                fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.4s",
              }}
            >
              {sn}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
