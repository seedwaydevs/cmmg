import Image from "next/image";
import {
  barloworld,
  brownsense,
  capasso,
  samro,
  trace,
  ccli,
  orcheezy,
} from "@/data";

const logos = [
  { src: orcheezy, alt: "Orchard", height: 50 },
  { src: brownsense, alt: "Brownsense", height: 45 },
  { src: trace, alt: "Trace", height: 50 },
  //{ src: capasso, alt: "Capasso", height: 55 },
  { src: samro, alt: "SAMRO", height: 40 },
  { src: barloworld, alt: "Barloworld", height: 65 },
  { src: ccli, alt: "CCLI", height: 70 },
];

const TrustGrid = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap');

        .trust-root {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding: 3rem;
        }

        /* Eyebrow */
        .trust-eyebrow {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .trust-eyebrow-line {
          width: 28px;
          height: 1px;
          background: #f05a1a;
          flex-shrink: 0;
        }
        .trust-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }

        /* Grid — border on container + cells, no gap */
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          border-left: 1px solid rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        .trust-grid-cell {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 2rem;
          filter: grayscale(0%);
          opacity: 0.9;
          transition: opacity 0.25s ease, filter 0.25s ease, background 0.25s ease;
          cursor: default;
        }
        .trust-grid-cell:hover {
          opacity: 1;
          filter: grayscale(0%);
          background: rgba(0,0,0,0.02);
        }

        /* Responsive breakpoints */
        @media (max-width: 1024px) {
          .trust-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .trust-root { padding: 2rem 1.5rem; }
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
          .trust-grid-cell { padding: 1.75rem 1.25rem; }
        }
      `}</style>

      <div className="trust-root">
        <div className="trust-eyebrow">
          <span className="trust-eyebrow-line" />
          <span className="trust-eyebrow-text">Trusted & Licensed By</span>
        </div>

        <div className="trust-grid">
          {logos.map((logo, idx) => (
            <div key={idx} className="trust-grid-cell">
              <Image
                src={logo.src}
                alt={logo.alt}
                height={logo.height}
                style={{ width: "auto", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrustGrid;
