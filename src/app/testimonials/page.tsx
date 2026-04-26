"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const testimonials = [
  {
    quote: "Romil is a true genius in the way he captures moments and when it all comes together, it truly feels like you're watching a love story. We are so grateful for him. Thank you Romil and team for being there for us and being the best addition to our love story!",
    name: "Viraj and Dhaval",
    type: "video",
    bg: "/wedding-trailer.mp4"
  },
  {
    quote: "All the pictures they have created are beautiful and full of life, but a few are so close to my heart, as they truly sketch the spirit of Artistry in Love. We love you for you have given us the memory of lifetime, in form of this superb album of happy faces, and not just happy, ecstatic ones too!",
    name: "Rajini and Vinay",
    type: "image",
    bg: "/portfolio1.jpg"
  },
  {
    quote: "Working with the team was an absolute dream. They didn't just document our wedding; they captured the very soul of our relationship. Every frame feels intentional and full of emotion.",
    name: "Sienna and Alessandro",
    type: "video",
    bg: "/wedding-trailer.mp4"
  },
  {
    quote: "The way they use light and shadow is purely magical. We were blown away by the cinematic quality of our film. It's a treasure that we will pass down for generations.",
    name: "Chloe and Julian",
    type: "image",
    bg: "/portfoli2.jpg"
  },
  {
    quote: "They made us feel so comfortable in front of the lens. We aren't naturally photogenic, but they captured us in such a raw and beautiful way that we were moved to tears.",
    name: "Isabella and James",
    type: "image",
    bg: "/portfoli3.jpg"
  },
  {
    quote: "Beyond professional. They were like silent observers who caught every laugh, every tear, and every stolen glance. The final edit is a masterpiece of storytelling.",
    name: "Aman and Priya",
    type: "video",
    bg: "/wedding-trailer.mp4"
  },
  {
    quote: "The dedication to their craft is evident in every single shot. They went above and beyond to ensure our story was told with the depth and elegance it deserved.",
    name: "Sanya and Rohan",
    type: "image",
    bg: "/foooter11.jpg"
  },
  {
    quote: "Simply the best decision we made for our wedding. The team is incredibly talented, kind, and professional. We can't recommend them highly enough.",
    name: "Meera and Arjun",
    type: "image",
    bg: "/footer8.jpg"
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <style>{`
        .testimonial-strip {
          position: relative;
          width: 100%;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #fff;
        }

        .testimonial-strip.media-strip {
          background: #000;
          color: #fff;
        }

        .testimonial-strip.color-strip {
          background: #fbf9f4;
          color: #1b1c19;
        }

        .strip-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0.7;
        }

        .strip-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .strip-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          padding: 40px;
          text-align: center;
        }

        .strip-quote {
          font-family: var(--font-serif);
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          line-height: 1.6;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .strip-author {
          font-family: var(--font-script);
          font-size: clamp(2rem, 5vw, 3.5rem);
          margin-bottom: 1.5rem;
          display: block;
        }

        .media-strip .strip-author { color: #fff; }
        .color-strip .strip-author { color: #1b1c19; }

        .strip-more {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          padding-bottom: 4px;
          transition: border-color 0.3s;
        }

        .media-strip .strip-more {
          color: #fff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }
        .media-strip .strip-more:hover { border-bottom-color: #fff; }

        .color-strip .strip-more {
          color: #1b1c19;
          border-bottom: 1px solid rgba(27, 28, 25, 0.3);
        }
        .color-strip .strip-more:hover { border-bottom-color: #1b1c19; }
      `}</style>

      <div className="testimonials-page">
        {testimonials.map((t, i) => {
          const isMedia = i % 2 === 0;
          return (
            <section key={i} className={`testimonial-strip ${isMedia ? 'media-strip' : 'color-strip'}`}>
              {isMedia && (
                <>
                  {t.type === "video" ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="strip-bg"
                    >
                      <source src={t.bg} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={t.bg} alt={`Testimonial from ${t.name}`} className="strip-bg" />
                  )}
                  <div className="strip-overlay" />
                </>
              )}
              
              <div className="strip-content">
                <RevealOnScroll>
                  <blockquote className="strip-quote">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <span className="strip-author">— {t.name}</span>
                  <Link href="/contact-us" className="strip-more">
                    More &rsaquo;
                  </Link>
                </RevealOnScroll>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
