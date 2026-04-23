import Link from "next/link";

function placeholderSvg(text: string): string {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect width="1920" height="1080" fill="#1c1b1b"/><text x="50%" y="50%" font-family="Noto Serif" font-size="24" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" opacity="0.3">${text}</text></svg>`
  )}`;
}

const filmStories = [
  {
    eyebrow: "THE ARCHIVE FILMS",
    title: "Elena & David",
    alt: "Cinematic close-up of a bride laughing during her speech with soft focus guests in the background",
  },
  {
    eyebrow: "STORYTELLING SESSION",
    title: "Sophie & James",
    alt: "Black and white portrait of a couple dancing in a grand ballroom under a single spotlight",
  },
  {
    eyebrow: "THE DOCUMENTARY",
    title: "Aria & Theo",
    alt: "Candid shot of a groom wiping a tear away during the vows at an outdoor mountain ceremony",
  },
];

const testimonials = [
  {
    quote:
      "Beyond the technical perfection, they have an eye for the human connection. We didn't just get a photographer, we got a storyteller who understood our rhythm.",
    name: "Maria & Lucas",
    location: "Lisbon, Portugal",
  },
  {
    quote:
      "Artistry in Love captures the moments you didn't even know were happening. The look on my father's face, the way the light hit the cathedral—simply breathtaking.",
    name: "Rebecca & Simon",
    location: "Oxfordshire",
  },
  {
    quote:
      "Effortless. Elegant. Timeless. We hate being in front of a camera, but they made us feel entirely at peace.",
    name: "Hana & Kei",
    location: "Kyoto Residency",
  },
  {
    quote:
      "The attention to detail in our wedding album is extraordinary. It’s more than a book; it’s an heirloom.",
    name: "Eleanor & George",
    location: "The Cotswolds",
  },
  {
    quote:
      "They captured the wildness of our celebration perfectly. Looking at the gallery, we can still hear the music and taste the champagne.",
    name: "Bella & Tom",
    location: "Ibiza Elopement",
  },
  {
    quote:
      "True artists. They didn't just take pictures; they created cinematic memories that we will cherish for our entire lives.",
    name: "Chloe & Isaac",
    location: "Paris, France",
  },
];

const recognition = [
  { title: "Vogue Weddings", subtitle: "Top 10" },
  { title: "Brides Magazine", subtitle: "Editor's Choice" },
  { title: "Juniper Ridge", subtitle: "Best Storyteller" },
  { title: "Fearless Photo", subtitle: "2023 Award" },
  { title: "Wedding Film", subtitle: "Of the Year" },
];


export default function TestimonialsPage() {
  return (
    <>
      <style>{`
        :root {
          --charcoal: #1c1b1b;
          --off-white: #fdf8f8;
          --soft-beige: #e5e2e1;
          --muted-gold: #a68b67;
          --secondary-text: #5e5e5b;
          --text-secondary: #5e5e5b;
        }

        /* ── Section spacing ────────── */
        .section-xl { padding-block: clamp(80px, 15vw, 160px); }
        .section-lg { padding-block: clamp(60px, 12vw, 120px); }
        .section-base { padding-inline: clamp(16px, 5vw, 64px); }

        /* ── Hero section ──────────── */
        .hero-wrapper {
          max-width: 1320px;
          margin-inline: auto;
        }

        .hero-kicker {
          font-family: Inter;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          text-transform: uppercase;
          display: block;
          margin-bottom: clamp(12px, 2vw, 16px);
        }

        .hero-title {
          font-family: "Noto Serif";
          font-size: clamp(1.8rem, 4vw, 48px);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: var(--charcoal);
          margin-bottom: clamp(20px, 4vw, 32px);
          max-width: 16ch;
        }

        .hero-description {
          font-family: Inter;
          font-size: clamp(1rem, 2vw, 16px);
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: clamp(24px, 5vw, 40px);
          max-width: 680px;
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(20px, 4vw, 40px);
          padding-top: clamp(16px, 3vw, 24px);
          border-top: 0.5px solid rgba(28,27,27,0.1);
        }

        .hero-meta-item {
          font-family: Inter;
          font-size: clamp(0.85rem, 1.5vw, 14px);
          line-height: 1.4;
          color: var(--text-secondary);
          letter-spacing: 0.03em;
        }

        /* ── Story bleed sections ────── */
        .story-bleed {
          position: relative;
          width: 100%;
          min-height: clamp(400px, 70vh, 80vh);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--charcoal);
        }

        .story-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .story-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(28,27,27,0.4) 0%, rgba(28,27,27,0.2) 50%, rgba(28,27,27,0.3) 100%);
          z-index: 1;
        }

        .story-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #ffffff;
          max-width: 900px;
          padding-inline: clamp(16px, 5vw, 64px);
        }

        .story-eyebrow {
          font-family: Inter;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.65);
          text-transform: uppercase;
          display: block;
          margin-bottom: clamp(16px, 3vw, 24px);
        }

        .story-quote {
          font-family: "Noto Serif";
          font-size: clamp(1.6rem, 4vw, 44px);
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.01em;
          font-style: italic;
          margin-bottom: clamp(20px, 4vw, 32px);
          max-width: 840px;
          margin-inline: auto;
        }

        .story-divider {
          width: clamp(2rem, 4vw, 3rem);
          height: 0.5px;
          background: rgba(255,255,255,0.3);
          margin-inline: auto;
        }

        /* ── Film section ──────────── */
        .film-section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: clamp(16px, 3vw, 24px);
          flex-wrap: wrap;
          margin-bottom: clamp(40px, 8vw, 80px);
          padding-bottom: clamp(32px, 6vw, 48px);
          border-bottom: 0.5px solid var(--soft-beige);
        }

        .film-kicker {
          font-family: Inter;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }

        .film-title {
          font-family: "Noto Serif";
          font-size: clamp(1.6rem, 3.5vw, 36px);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: var(--charcoal);
        }

        .film-subtitle {
          font-family: Inter;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          text-transform: uppercase;
          white-space: nowrap;
        }

        .film-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 3vw, 32px);
        }

        @media (min-width: 640px) {
          .film-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .film-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        .film-card {
          position: relative;
          overflow: hidden;
          aspect-ratio: 3 / 4;
          background: var(--charcoal);
          cursor: pointer;
        }

        .film-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          display: block;
        }

        .film-card:hover img {
          transform: scale(1.05);
        }

        .film-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%);
        }

        .film-play {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .film-play-btn {
          width: clamp(3.5rem, 8vw, 4.5rem);
          height: clamp(3.5rem, 8vw, 4.5rem);
          border: 0.5px solid rgba(255,255,255,0.5);
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 20px;
          backdrop-filter: blur(2px);
          transition: scale 0.3s;
        }

        .film-card:hover .film-play-btn {
          scale: 1.1;
        }

        .film-caption {
          position: absolute;
          left: clamp(16px, 4vw, 28px);
          bottom: clamp(16px, 4vw, 28px);
          right: clamp(16px, 4vw, 28px);
          color: #ffffff;
          z-index: 2;
        }

        .film-caption-label {
          font-family: Inter;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          display: block;
          margin-bottom: 8px;
        }

        .film-caption-title {
          font-family: "Noto Serif";
          font-size: clamp(1.1rem, 2vw, 16px);
          font-weight: 600;
          font-style: italic;
        }

        /* ── Testimonials wall ──────── */
        .wall-section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: clamp(16px, 3vw, 24px);
          flex-wrap: wrap;
          margin-bottom: clamp(40px, 8vw, 80px);
          padding-bottom: clamp(32px, 6vw, 48px);
          border-bottom: 0.5px solid var(--soft-beige);
        }

        .wall-header-content h2 {
          font-family: "Noto Serif";
          font-size: clamp(1.6rem, 3.5vw, 36px);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: var(--charcoal);
          margin-bottom: 8px;
        }

        .wall-header-content p {
          font-family: Inter;
          font-size: clamp(0.9rem, 1.5vw, 14px);
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .wall-subtitle {
          font-family: Inter;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          text-transform: uppercase;
          white-space: nowrap;
        }

        .wall-grid {
          columns: 1;
          column-gap: clamp(20px, 4vw, 32px);
        }

        @media (min-width: 768px) {
          .wall-grid {
            columns: 2;
          }
        }

        @media (min-width: 1024px) {
          .wall-grid {
            columns: 3;
          }
        }

        .wall-card {
          break-inside: avoid;
          margin-bottom: clamp(20px, 4vw, 32px);
          padding: clamp(20px, 4vw, 32px);
          border: 0.5px solid rgba(28,27,27,0.1);
          background: var(--off-white);
        }

        .wall-card.alt {
          background: var(--soft-beige);
        }

        .wall-quote-mark {
          font-family: "Noto Serif";
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 0.8;
          color: var(--muted-gold);
          opacity: 0.2;
          margin-bottom: 12px;
          display: block;
        }

        .wall-quote-text {
          font-family: Inter;
          font-size: clamp(0.95rem, 1.8vw, 14px);
          line-height: 1.75;
          color: var(--text-secondary);
          font-style: italic;
          margin-bottom: 16px;
        }

        .wall-card-divider {
          height: 0.5px;
          background: rgba(28,27,27,0.1);
          margin-bottom: 12px;
        }

        .wall-card-name {
          font-family: Inter;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--charcoal);
          margin-bottom: 4px;
        }

        .wall-card-location {
          font-family: "Noto Serif";
          font-size: clamp(0.85rem, 1.5vw, 13px);
          font-style: italic;
          color: var(--text-secondary);
        }

        /* ── Trust grid ────────────── */
        .trust-section-header {
          margin-bottom: clamp(40px, 8vw, 80px);
          padding-bottom: clamp(32px, 6vw, 48px);
          border-bottom: 0.5px solid var(--soft-beige);
        }

        .trust-kicker {
          font-family: Inter;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          text-transform: uppercase;
          display: block;
          margin-bottom: 12px;
        }

        .trust-title {
          font-family: "Noto Serif";
          font-size: clamp(1.6rem, 3.5vw, 36px);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: var(--charcoal);
        }

        .trust-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 3vw, 24px);
        }

        @media (min-width: 640px) {
          .trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .trust-grid {
            grid-template-columns: repeat(5, minmax(0, 1fr));
          }
        }

        .trust-item {
          padding: clamp(20px, 3vw, 28px);
          border: 0.5px solid rgba(28,27,27,0.1);
          background: var(--off-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: clamp(12px, 2vw, 16px);
          min-height: clamp(9rem, 25vw, 11rem);
        }

        .trust-badge {
          width: clamp(2.5rem, 5vw, 3.25rem);
          height: clamp(2.5rem, 5vw, 3.25rem);
          border: 0.5px solid rgba(28,27,27,0.15);
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Noto Serif";
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          font-weight: 600;
        }

        .trust-name {
          font-family: "Noto Serif";
          font-size: clamp(0.95rem, 2vw, 14px);
          font-weight: 600;
          color: var(--charcoal);
          line-height: 1.3;
        }

        .trust-subtitle {
          font-family: Inter;
          font-size: clamp(0.7rem, 1vw, 11px);
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        /* ── CTA section ──────────── */
        .cta-wrapper {
          text-align: center;
          max-width: 700px;
          margin-inline: auto;
        }

        .cta-title {
          font-family: "Noto Serif";
          font-size: clamp(1.6rem, 3.5vw, 36px);
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: var(--charcoal);
          margin-bottom: clamp(16px, 3vw, 24px);
        }

        .cta-description {
          font-family: Inter;
          font-size: clamp(1rem, 2vw, 16px);
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: clamp(32px, 6vw, 48px);
        }

        .cta-button {
          display: inline-block;
          padding: clamp(12px, 2.5vw, 16px) clamp(28px, 5vw, 48px);
          border: 0.5px solid var(--charcoal);
          background: transparent;
          color: var(--charcoal);
          font-family: Inter;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.4s, color 0.4s;
        }

        .cta-button:hover {
          background: var(--charcoal);
          color: #ffffff;
        }
      `}
      `}</style>

      <div className="testimonials-page">
        <section className="section-xl section-base">
          <div className="hero-wrapper">
            <span className="hero-kicker">Kind Words & Kindred Souls</span>
            <h1 className="hero-title">A collection of reflections from the couples who trusted us.</h1>
            <p className="hero-description">
              These stories remain long after the day fades. They speak to the steadiness, discretion, and emotional clarity behind every film and gallery.
            </p>
            <div className="hero-meta">
              <span className="hero-meta-item">Calm direction</span>
              <span className="hero-meta-item">Editorial storytelling</span>
              <span className="hero-meta-item">Emotionally true</span>
            </div>
          </div>
        </section>

        <section className="story-bleed">
          <img
            src={placeholderSvg("Featured testimonial #1")}
            alt="Julianne and Marcus wedding at Lake Como, Italy"
            className="story-bg"
          />
          <div className="story-overlay" />
          <div className="story-content">
            <span className="story-eyebrow">Julianne & Marcus — Lake Como</span>
            <blockquote className="story-quote">
              &ldquo;To say they captured the day is an understatement. They captured the feeling—the nerves, the quiet sighs, the roar of the celebration. Looking back at these photos is like reliving the soul of our wedding.&rdquo;
            </blockquote>
            <div className="story-divider" />
          </div>
        </section>

        <section className="section-lg section-base">
          <div style={{ maxWidth: "1320px", marginInline: "auto" }}>
            <div className="film-section-header">
              <div>
                <span className="film-kicker">Moving Moments</span>
                <h2 className="film-title">Cinematic Reflections</h2>
              </div>
              <span className="film-subtitle">Filmed Stories</span>
            </div>

            <div className="film-grid">
              {filmStories.map((story, index) => (
                <article key={story.title} className="film-card">
                  <img
                    src={placeholderSvg(story.title)}
                    alt={story.alt}
                  />
                  <div className="film-overlay" />
                  <div className="film-play" aria-hidden="true">
                    <div className="film-play-btn">▶</div>
                  </div>
                  <div className="film-caption">
                    <span className="film-caption-label">{story.eyebrow}</span>
                    <div className="film-caption-title">{story.title}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story-bleed">
          <img
            src={placeholderSvg("Featured testimonial #2")}
            alt="Claire and Samuel wedding in Provence, France"
            className="story-bg"
          />
          <div className="story-overlay" />
          <div className="story-content">
            <span className="story-eyebrow">Claire & Samuel — Provence</span>
            <blockquote className="story-quote">
              &ldquo;Their presence was like a calm breeze on a chaotic day. They found the magic in the mundane and the art in the expected.&rdquo;
            </blockquote>
            <div className="story-divider" />
          </div>
        </section>

        <section className="section-xl section-base">
          <div style={{ maxWidth: "1320px", marginInline: "auto" }}>
            <div className="wall-section-header">
              <div className="wall-header-content">
                <h2>The Collective Memory</h2>
                <p>A curated wall of trust and emotion</p>
              </div>
              <span className="wall-subtitle">Verified Client Stories</span>
            </div>

            <div className="wall-grid">
              {testimonials.map((item, index) => (
                <article
                  key={item.name}
                  className={`wall-card ${index % 2 === 1 ? "alt" : ""}`}
                >
                  <span className="wall-quote-mark">&ldquo;</span>
                  <p className="wall-quote-text">{item.quote}</p>
                  <div className="wall-card-divider" />
                  <p className="wall-card-name">{item.name}</p>
                  <p className="wall-card-location">{item.location}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-lg section-base">
          <div style={{ maxWidth: "1320px", marginInline: "auto" }}>
            <div className="trust-section-header">
              <span className="trust-kicker">Recognition</span>
              <h2 className="trust-title">Accolades & Recognition</h2>
            </div>

            <div className="trust-grid">
              {accolades.map((item, index) => (
                <div key={item.title} className="trust-item">
                  <div className="trust-badge" aria-hidden="true">
                    {index + 1}
                  </div>
                  <p className="trust-name">{item.title}</p>
                  <p className="trust-subtitle">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-xl section-base">
          <div className="cta-wrapper">
            <h2 className="cta-title">Ready to begin your experience?</h2>
            <p className="cta-description">
              Send your details and receive the next steps within our response window.
            </p>
            <Link href="/contact-us" className="cta-button">
              Check Availability
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
