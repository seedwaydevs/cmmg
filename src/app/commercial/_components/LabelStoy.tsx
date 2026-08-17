import React from "react";

const pillars = [
  { heading: "Artist-First", sub: "Creative freedom guaranteed" },
  { heading: "Quality", sub: "Premium production standards" },
  { heading: "Global Reach", sub: "Worldwide distribution" },
];

const LabelStory = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Manrope:wght@400;500;600&display=swap');

        .ls-root {
          width: 100%;
          background: #F1F0EC;
          position: relative;
        }

        .ls-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 6rem 3rem;
        }

        /* ── Header ── */
        .ls-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(23,21,26,0.1);
        }

        .ls-eyebrow {
          display: flex; align-items: center;
          gap: 0.75rem; margin-bottom: 1.25rem;
        }
        .ls-eyebrow-line {
          width: 28px; height: 1px;
          background: #FF4B1F; flex-shrink: 0;
        }
        .ls-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(23,21,26,0.45);
        }

        .ls-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.25rem, 4.5vw, 3.75rem);
          letter-spacing: -0.02em; line-height: 0.98;
          text-transform: uppercase; color: #17151A;
        }

        .ls-desc-col {
          display: flex; flex-direction: column;
          justify-content: flex-end; gap: 1rem;
        }
        .ls-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(23,21,26,0.55);
          max-width: 440px;
        }

        /* ── Body: two paragraphs, no boxes, just a hairline between them ── */
        .ls-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          padding-bottom: 4rem;
          margin-bottom: 4rem;
          border-bottom: 1px solid rgba(23,21,26,0.1);
        }

        .ls-body-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.8; color: rgba(23,21,26,0.6);
        }
        .ls-body-text strong {
          color: #17151A; font-weight: 700;
        }

        /* ── Pillars — plain list, one hairline divider each, orange only on hover ── */
        .ls-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .ls-pillar {
          padding-top: 1.25rem;
          border-top: 1px solid rgba(23,21,26,0.15);
          display: flex; flex-direction: column;
          gap: 0.4rem;
          position: relative;
          transition: border-color 0.25s ease;
        }
        .ls-pillar:hover {
          border-top-color: #FF4B1F;
        }

        .ls-pillar-heading {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(1.15rem, 1.8vw, 1.5rem);
          letter-spacing: -0.02em; line-height: 1;
          text-transform: uppercase; color: #17151A;
        }
        .ls-pillar-sub {
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem; font-weight: 500;
          color: rgba(23,21,26,0.45);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ls-header  { grid-template-columns: 1fr; gap: 1.5rem; }
          .ls-body    { grid-template-columns: 1fr; gap: 2rem; }
          .ls-pillars { grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        }
        @media (max-width: 640px) {
          .ls-inner   { padding: 4rem 1.5rem; }
          .ls-pillars { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="ls-root">
        <div className="ls-inner">
          {/* Header */}
          <div className="ls-header">
            <div>
              <div className="ls-eyebrow">
                <span className="ls-eyebrow-line" />
                <span className="ls-eyebrow-text">Who We Are</span>
              </div>
              <h2 className="ls-title">
                Crafting Sound,
                <br />
                Building Legacies
              </h2>
            </div>
            <div className="ls-desc-col">
              <p className="ls-desc">
                We're not just a record label — we're a creative collective
                dedicated to amplifying authentic voices and pushing sonic
                boundaries.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="ls-body">
            <p className="ls-body-text">
              From the first note to the final mix, we partner with artists who
              dare to be different. Our approach is simple:{" "}
              <strong>great music deserves great support.</strong> We provide
              our artists with world-class production facilities, strategic
              marketing, and the creative freedom to explore their sound without
              compromise.
            </p>
            <p className="ls-body-text">
              Whether it's Gospel, Afro Soul, contemporary sound, or something
              entirely new — we're here to make it resonate.{" "}
              <strong>
                Every release tells a story. Every artist leaves a mark.
              </strong>{" "}
              That's the music we make, and the legacy we're building — rooted
              in South Africa, reaching the world.
            </p>
          </div>

          {/* Pillars */}
          <div className="ls-pillars">
            {pillars.map((p, i) => (
              <div key={i} className="ls-pillar">
                <div className="ls-pillar-heading">{p.heading}</div>
                <div className="ls-pillar-sub">{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LabelStory;
