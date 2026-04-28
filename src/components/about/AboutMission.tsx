import React from "react";

const tiles = [
  {
    id: 1,
    label: "Vision",
    heading: "To Shape the Sound of a Generation",
    paragraph:
      "Our vision is to build a record label that defines an era — discovering raw talent, nurturing authentic voices, and releasing music that moves culture. We believe the next iconic sound isn't in Los Angeles or London. It's here.",
    number: "01",
  },
  {
    id: 2,
    label: "Mission",
    heading: "To Develop Artists Who Last",
    paragraph:
      "We exist to find, develop, and amplify artists who have something real to say. From the first studio session to the worldwide release, our mission is to build careers built on craft, not trends — and put Johannesburg on the global music map.",
    number: "02",
  },
];

const AboutMission = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .about-mission-root {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid rgba(0,0,0,0.08);
          position: relative;
        }

        .about-mission-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
        }

        /* Header */
        .about-mission-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .about-mission-eyebrow {
          display: flex; align-items: center;
          gap: 0.75rem; margin-bottom: 1.25rem;
        }
        .about-mission-eyebrow-line {
          width: 28px; height: 1px;
          background: #f05a1a; flex-shrink: 0;
        }
        .about-mission-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }
        .about-mission-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em; line-height: 0.95;
          text-transform: uppercase; color: #0a0a0a;
        }
        .about-mission-title em { font-style: normal; color: #f05a1a; }
        .about-mission-header-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(0,0,0,0.5);
          max-width: 420px;
        }

        /* Tiles grid */
        .about-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-left: 1px solid rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        .about-mission-tile {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding: 3rem;
          position: relative;
          overflow: hidden;
          transition: background 0.25s ease;
        }
        .about-mission-tile:hover { background: #fafafa; }

        /* Orange top bar on hover */
        .about-mission-tile::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 100%; height: 3px;
          background: #f05a1a;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .about-mission-tile:hover::before { transform: scaleX(1); }

        .about-mission-tile-number {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: 4rem; letter-spacing: -0.04em; line-height: 1;
          color: rgba(0,0,0,0.04);
          position: absolute; top: 1.5rem; right: 1.75rem;
          user-select: none;
        }

        .about-mission-tile-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #f05a1a;
          display: flex; align-items: center; gap: 0.6rem;
          margin-bottom: 1.25rem;
        }
        .about-mission-tile-label::before {
          content: '';
          display: block; width: 20px; height: 1px;
          background: #f05a1a;
        }

        .about-mission-tile-heading {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.5vw, 2.25rem);
          letter-spacing: -0.02em; line-height: 1;
          text-transform: uppercase; color: #0a0a0a;
          margin-bottom: 1.25rem;
        }

        .about-mission-tile-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem; font-weight: 400;
          line-height: 1.7; color: rgba(0,0,0,0.5);
        }

        @media (max-width: 1024px) {
          .about-mission-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .about-mission-grid   { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .about-mission-inner { padding: 3rem 1.5rem; }
          .about-mission-tile  { padding: 2rem 1.5rem; }
        }
      `}</style>

      <section className="about-mission-root">
        <div className="about-mission-inner">
          <div className="about-mission-header">
            <div>
              <div className="about-mission-eyebrow">
                <span className="about-mission-eyebrow-line" />
                <span className="about-mission-eyebrow-text">
                  Mission & Vision
                </span>
              </div>
              <h2 className="about-mission-title">
                What Drives <em>Us</em>
              </h2>
            </div>
            <div>
              <p className="about-mission-header-desc">
                Two guiding principles that shape every decision we make — from
                the artists we sign to the records we release.
              </p>
            </div>
          </div>

          <div className="about-mission-grid">
            {tiles.map((tile) => (
              <div key={tile.id} className="about-mission-tile">
                <div className="about-mission-tile-number">{tile.number}</div>
                <div className="about-mission-tile-label">{tile.label}</div>
                <div className="about-mission-tile-heading">{tile.heading}</div>
                <p className="about-mission-tile-text">{tile.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMission;
