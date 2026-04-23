import Link from "next/link";
import { CtaStrip } from "@/components/ui/cta-strip";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

function placeholderSrc(label: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#111111" />
          <stop offset="55%" stop-color="#1b1b1b" />
          <stop offset="100%" stop-color="#2a2a2a" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stop-color="#4a4a4a" stop-opacity="0.22" />
          <stop offset="60%" stop-color="#4a4a4a" stop-opacity="0.08" />
          <stop offset="100%" stop-color="#4a4a4a" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="1200" fill="url(#bg)" />
      <rect width="1600" height="1200" fill="url(#glow)" />
      <rect x="160" y="120" width="1280" height="960" fill="none" stroke="#ffffff" stroke-opacity="0.06" stroke-width="2" />
      <line x1="160" y1="180" x2="1440" y2="180" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1" />
      <text x="800" y="610" text-anchor="middle" fill="#f4f0ef" fill-opacity="0.72" font-family="Arial, sans-serif" font-size="58" letter-spacing="8">${label}</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const filmStories = [
  {
    eyebrow: "THE ARCHIVE FILMS",
    title: "Elena & David",
    image: placeholderSrc("Cinematic testimonial placeholder"),
    alt: "Cinematic close-up of a bride laughing during her speech with soft focus guests in the background",
  },
  {
    eyebrow: "STORYTELLING SESSION",
    title: "Sophie & James",
    image: placeholderSrc("Editorial testimonial placeholder"),
    alt: "Black and white portrait of a couple dancing in a grand ballroom under a single spotlight",
  },
  {
    eyebrow: "THE DOCUMENTARY",
    title: "Aria & Theo",
    image: placeholderSrc("Documentary testimonial placeholder"),
    alt: "Candid shot of a groom wiping a tear away during the vows at an outdoor mountain ceremony",
  },
];

const reviewWall = [
  {
    quote:
      "Beyond the technical perfection, they have an eye for the human connection. We didn't just get a photographer, we got a storyteller who understood our rhythm.",
    name: "Maria & Lucas",
    location: "Lisbon, Portugal",
  },
  {
    quote:
      "Artistry in Love captures the moments you didn't even know were happening. The look on my father's face, the way the light hit the cathedral - simply breathtaking.",
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

function StoryImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} loading="lazy" decoding="async" className="story-image" />;
}

export default function TestimonialsPage() {
  return (
    <>
      <style>{`
        .testimonials-page {
          background: var(--bg);
          color: var(--text-primary);
        }

        .testimonials-section {
          padding-block: var(--stack-xl);
        }

        .testimonials-section-tight {
          padding-block: var(--stack-lg);
        }

        .hero-copy {
          max-width: 64rem;
          margin-inline: auto;
        }

        .hero-title {
          max-width: 13ch;
          margin-top: .75rem;
        }

        .hero-lead {
          max-width: 44rem;
          margin-top: 1.5rem;
          font-size: 1.125rem;
          line-height: 1.75;
          color: var(--text-secondary);
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem 1.5rem;
          margin-top: 2rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(28, 27, 27, 0.12);
        }

        .hero-meta span {
          font-size: .875rem;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .story-bleed {
          position: relative;
          min-height: min(819px, 80vh);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-block: 0;
          background: #111111;
        }

        .story-bleed::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.2));
          z-index: 1;
        }

        .story-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .story-bleed-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #fdf8f8;
          max-width: 62rem;
          padding-inline: clamp(1.5rem, 4vw, 3rem);
        }

        .story-eyebrow {
          margin-bottom: 1.25rem;
        }

        .story-quote {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 4vw, 3.15rem);
          line-height: 1.18;
          font-style: italic;
          letter-spacing: -0.02em;
          margin: 0 auto 2rem;
          max-width: 24ch;
        }

        .story-divider {
          width: 3rem;
          height: 1px;
          background: rgba(255,255,255,.45);
          margin-inline: auto;
        }

        .film-section-header,
        .wall-header,
        .trust-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.75rem;
          flex-wrap: wrap;
        }

        .film-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2rem;
        }

        .film-card {
          position: relative;
          overflow: hidden;
          background: #ece7df;
        }

        .film-card .story-image {
          transition: transform .8s cubic-bezier(.22,1,.36,1);
        }

        .film-card:hover .story-image {
          transform: scale(1.045);
        }

        .film-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,.08), rgba(0,0,0,.4));
        }

        .film-card-play {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .film-card-play span {
          width: 4rem;
          height: 4rem;
          border: 1px solid rgba(255,255,255,.5);
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 1.3rem;
          backdrop-filter: blur(2px);
        }

        .film-card-caption {
          position: absolute;
          left: 1.5rem;
          bottom: 1.25rem;
          right: 1.5rem;
          color: #ffffff;
        }

        .film-card-caption p:last-child {
          margin-top: .25rem;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-style: italic;
        }

        .wall-grid {
          columns: 1;
          column-gap: 1.5rem;
        }

        .wall-card {
          break-inside: avoid;
          margin-bottom: 1.5rem;
          padding: 2rem;
          border: 1px solid rgba(28, 27, 27, 0.08);
          background: var(--bg-surface);
        }

        .wall-card.alt {
          background: var(--bg-container-low, #f7f3f2);
        }

        .wall-card .quote-mark {
          display: block;
          font-family: var(--font-serif);
          font-size: 3rem;
          line-height: .8;
          color: #a68b67;
          opacity: .35;
          margin-bottom: 1rem;
        }

        .wall-card p {
          font-size: .98rem;
          line-height: 1.75;
          color: var(--text-secondary);
          font-style: italic;
        }

        .wall-card footer {
          border-top: 1px solid rgba(28, 27, 27, 0.1);
          margin-top: 1.5rem;
          padding-top: 1.1rem;
        }

        .wall-card footer p:first-child {
          font-size: .7rem;
          letter-spacing: .18em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--text-primary);
        }

        .wall-card footer p:last-child {
          font-family: var(--font-serif);
          font-size: .95rem;
          color: var(--text-secondary);
          margin-top: .25rem;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 1.25rem;
          align-items: stretch;
        }

        .trust-item {
          padding: 1.5rem 1rem;
          text-align: center;
          border: 1px solid rgba(28, 27, 27, 0.08);
          background: var(--bg-surface);
          min-height: 10rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: .85rem;
        }

        .trust-badge {
          width: 3rem;
          height: 3rem;
          border: 1px solid rgba(28, 27, 27, 0.14);
          border-radius: 999px;
          margin-inline: auto;
          display: grid;
          place-items: center;
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .trust-item p:first-of-type {
          font-family: var(--font-serif);
          font-size: 1rem;
          letter-spacing: .01em;
        }

        .trust-item p:last-of-type {
          font-size: .68rem;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .testimonial-cta {
          margin-top: var(--stack-lg);
        }

        @media (max-width: 1100px) {
          .film-grid,
          .trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .film-grid,
          .trust-grid {
            grid-template-columns: 1fr;
          }

          .story-bleed {
            min-height: 36rem;
          }

          .story-quote {
            max-width: 18ch;
          }
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
      `}</style>

      <div className="testimonials-page">
        <header className="testimonials-section">
          <div className="page-wrap">
            <RevealOnScroll>
              <div className="hero-copy">
                <p className="label-sm" style={{ color: "var(--text-muted)" }}>
                  Kind Words &amp; Kindred Souls
                </p>
                <h1 className="display-xl hero-title">A collection of reflections from the couples who trusted us.</h1>
                <div className="hero-meta">
                  <span>Calm direction</span>
                  <span>Editorial storytelling</span>
                  <span>Emotionally true</span>
                </div>
                <p className="hero-lead">
                  These stories remain long after the day fades. They speak to the steadiness,
                  discretion, and emotional clarity behind every film and gallery.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </header>

        <section className="story-bleed">
          <StoryImage
            src={placeholderSrc("Featured client story placeholder")}
            alt="Premium charcoal placeholder for the featured client story image"
          />
          <div className="story-bleed-content">
            <RevealOnScroll>
              <p className="label-sm story-eyebrow" style={{ color: "rgba(255,255,255,.82)" }}>
                JULIANNE &amp; MARCUS — LAKE COMO
              </p>
              <h2 className="story-quote">
                “To say they captured the day is an understatement. They captured the feeling - the nerves, the quiet sighs, the roar of the celebration.”
              </h2>
              <div className="story-divider" />
            </RevealOnScroll>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="page-wrap">
            <div className="film-section-header">
              <div>
                <h2 className="headline-md">Moving Moments</h2>
              </div>
              <span className="label-sm" style={{ color: "var(--text-muted)" }}>
                Cinematic Reflections
              </span>
            </div>

            <div className="film-grid">
              {filmStories.map((story, index) => (
                <RevealOnScroll key={story.title} delayMs={index * 80}>
                  <article className="film-card" style={{ aspectRatio: "4 / 5" }}>
                    <StoryImage src={story.image} alt={story.alt} />
                    <div className="film-card-overlay" />
                    <div className="film-card-play" aria-hidden>
                      <span>▶</span>
                    </div>
                    <div className="film-card-caption">
                      <p className="label-sm" style={{ color: "rgba(255,255,255,.8)" }}>
                        {story.eyebrow}
                      </p>
                      <p>{story.title}</p>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="story-bleed">
          <StoryImage
            src={placeholderSrc("Featured client story placeholder")}
            alt="Premium charcoal placeholder for the second featured client story image"
          />
          <div className="story-bleed-content">
            <RevealOnScroll>
              <p className="label-sm story-eyebrow" style={{ color: "rgba(255,255,255,.82)" }}>
                CLAIRE &amp; SAMUEL — PROVENCE
              </p>
              <h2 className="story-quote" style={{ maxWidth: "22ch" }}>
                “Their presence was like a calm breeze on a chaotic day. They found the magic in the mundane and the art in the expected.”
              </h2>
              <div className="story-divider" />
            </RevealOnScroll>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="page-wrap">
            <div className="wall-header">
              <div>
                <h2 className="headline-md" style={{ marginBottom: ".4rem" }}>
                  The Collective Memory
                </h2>
                <p className="body-md" style={{ color: "var(--text-secondary)" }}>
                  A curated wall of trust and emotion.
                </p>
              </div>
              <span className="label-sm" style={{ color: "var(--text-muted)" }}>
                Verified client stories
              </span>
            </div>

            <div className="wall-grid">
              {reviewWall.map((item, index) => (
                <RevealOnScroll key={item.name} delayMs={index * 60}>
                  <article className={`wall-card ${index % 2 === 1 ? "alt" : ""}`}>
                    <span className="quote-mark">“</span>
                    <p>{item.quote}</p>
                    <footer>
                      <p>{item.name}</p>
                      <p>{item.location}</p>
                    </footer>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section-tight">
          <div className="page-wrap">
            <div className="trust-header">
              <div>
                <p className="label-sm" style={{ marginBottom: "1rem", color: "var(--text-muted)" }}>
                  Recognition
                </p>
                <h2 className="headline-md">Accolades &amp; Recognition</h2>
              </div>
            </div>

            <div className="trust-grid">
              {recognition.map((item, index) => (
                <RevealOnScroll key={item.title} delayMs={index * 60}>
                  <div className="trust-item">
                    <div className="trust-badge" aria-hidden>
                      {index + 1}
                    </div>
                    <p>{item.title}</p>
                    <p>{item.subtitle}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section testimonial-cta">
          <div className="page-wrap">
            <RevealOnScroll>
              <CtaStrip
                title="Ready to begin your experience?"
                text="Send your details and receive the next steps within our response window."
                primaryLabel="Check Availability"
                primaryHref="/contact-us"
                secondaryLabel="Start Inquiry"
                secondaryHref="/contact-us"
              />
            </RevealOnScroll>

            <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
              <Link href="/contact-us" className="link-underline">
                Start Inquiry
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
