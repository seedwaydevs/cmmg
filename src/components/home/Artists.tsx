import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Music, ArrowRight } from "lucide-react";
import yandi from "../../../public/yandi.jpg";
import { cstaz, landj, nkanyamba, tms2 } from "@/data";

const artists = [
  {
    id: 1,
    name: "Abe Sibiya",
    genre: "Gospel / Contemporary",
    description:
      "A seasoned musician and producer whose work spans gospel, contemporary Christian music, and cinematic soundscapes. Abe brings spiritual depth and musical precision to every project.",
    albums: ["The Morning Service", "Live Culture", "The Blessing"],
    spotifyUrl:
      "https://open.spotify.com/embed/album/7ET7RwAOI658wECgo2gq3o?utm_source=generator",
    image: tms2,
  },
  {
    id: 2,
    name: "L & J CSTAZ",
    genre: "Gospel / Worship",
    description:
      "A dynamic duo delivering powerful worship music that resonates with authenticity and conviction. Their sound is rooted in faith and elevated by world-class production.",
    albums: ["Jesu Msindisi", "Bless The Lord"],
    spotifyUrl:
      "https://open.spotify.com/embed/album/3HeSTciM2xJ9omxiyrijOc?utm_source=generator",
    image: cstaz,
  },
  {
    id: 3,
    name: "YandiSibi",
    genre: "Afro Soul / R&B",
    description:
      "YandiSibi blends Afro soul and R&B influences into a sound that is uniquely South African. Emotive, layered, and undeniably captivating.",
    albums: ["Njalo"],
    spotifyUrl:
      "https://open.spotify.com/embed/track/7DtN0ksb5UH0TSl0aFfdVB?utm_source=generator",
    image: yandi,
  },
  {
    id: 4,
    name: "Nkanyamba",
    genre: "Afro / Traditional",
    description:
      "Drawing from the rich traditions of Southern African music, Nkanyamba crafts sounds that honour heritage while pushing creative boundaries.",
    albums: ["Imfihlo Kamakoti"],
    spotifyUrl:
      "https://open.spotify.com/embed/album/6zmGMomhs1gfMgA9gHkxdO?utm_source=generator",
    image: nkanyamba,
  },
];

const Artists = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        /* ── Root — white section ── */
        .artists-root {
          width: 100%;
          background: #ffffff;
          border-top: 1px solid rgba(0,0,0,0.08);
          position: relative;
        }

        .artists-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
        }

        /* ── Section header: two-col ── */
        .artists-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .artists-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .artists-eyebrow-line {
          width: 28px; height: 1px;
          background: #f05a1a; flex-shrink: 0;
        }
        .artists-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }

        .artists-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em;
          line-height: 0.95;
          text-transform: uppercase;
          color: #0a0a0a;
        }
        .artists-title em { font-style: normal; color: #f05a1a; }

        .artists-header-right {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 1.5rem;
        }
        .artists-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(0,0,0,0.5);
          max-width: 420px;
        }
        .artists-header-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .artists-cta-primary {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: #ffffff; background: #f05a1a; border: none;
          padding: 0.85rem 2rem; cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .artists-cta-primary:hover { background: #d44c10; transform: translateY(-1px); }
        .artists-cta-primary svg { transition: transform 0.2s ease; }
        .artists-cta-primary:hover svg { transform: translateX(3px); }

        .artists-cta-secondary {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(0,0,0,0.5); background: none;
          border: 1px solid rgba(0,0,0,0.12);
          padding: 0.85rem 2rem; cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .artists-cta-secondary:hover { border-color: #f05a1a; color: #f05a1a; }

        /* ── Artist grid — bordered, no gap ── */
        .artists-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-left: 1px solid rgba(0,0,0,0.08);
          border-top: 1px solid rgba(0,0,0,0.08);
        }

        .artists-card {
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          background: #ffffff;
          transition: background 0.25s ease;
        }
        .artists-card:hover { background: #fafafa; }

        /* Orange top accent bar on hover */
        .artists-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 3px;
          background: #f05a1a;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
          z-index: 2;
        }
        .artists-card:hover::before { transform: scaleX(1); }

        /* Image */
        .artists-card-image {
          width: 100%;
          aspect-ratio: 3/4;
          overflow: hidden;
          position: relative;
          background: #f0f0f0;
        }
        .artists-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
          filter: grayscale(20%);
        }
        .artists-card:hover .artists-card-image img {
          transform: scale(1.04);
          filter: grayscale(0%);
        }

        /* Genre tag over image */
        .artists-card-genre {
          position: absolute;
          bottom: 0.75rem;
          left: 0.75rem;
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #1a8cff;
          border: 1px solid rgba(26,140,255,0.5);
          background: rgba(255,255,255,0.9);
          padding: 0.2rem 0.55rem;
          z-index: 1;
        }

        /* Card body */
        .artists-card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }

        .artists-card-name {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 1.1rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #0a0a0a;
        }

        .artists-card-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.78rem; font-weight: 400;
          line-height: 1.65; color: rgba(0,0,0,0.45);
          flex: 1;
        }

        /* Albums list */
        .artists-card-albums {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(0,0,0,0.06);
        }
        .artists-card-albums-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(0,0,0,0.25);
          margin-bottom: 0.25rem;
        }
        .artists-card-album-item {
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem; font-weight: 500;
          color: rgba(0,0,0,0.5);
          display: flex; align-items: center; gap: 0.5rem;
        }
        .artists-card-album-item::before {
          content: '';
          display: block;
          width: 10px; height: 1px;
          background: #f05a1a; flex-shrink: 0;
        }

        /* Card footer buttons */
        .artists-card-footer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid rgba(0,0,0,0.08);
        }
        .artists-card-btn {
          font-family: 'Manrope', sans-serif; font-weight: 600;
          font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(0,0,0,0.45);
          text-decoration: none;
          display: flex; align-items: center; justify-content: center; gap: 0.4rem;
          padding: 0.9rem 0.5rem;
          border: none; background: none; cursor: pointer;
          border-right: 1px solid rgba(0,0,0,0.08);
          transition: color 0.2s ease, background 0.2s ease;
        }
        .artists-card-btn:last-child { border-right: none; }
        .artists-card-btn:hover { color: #f05a1a; background: rgba(240,90,26,0.04); }
        .artists-card-btn svg { transition: transform 0.2s ease; }
        .artists-card-btn:hover svg { transform: translateX(2px); }

        /* ── Responsive ── */
        @media (max-width: 1280px) {
          .artists-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 1024px) {
          .artists-header { grid-template-columns: 1fr; gap: 1.5rem; }
        }
        @media (max-width: 640px) {
          .artists-inner { padding: 3rem 1.5rem; }
          .artists-title { font-size: 2.25rem; }
          .artists-grid  { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="artists-root">
        <div className="artists-inner">
          {/* Section header */}
          <div className="artists-header">
            <div>
              <div className="artists-eyebrow">
                <span className="artists-eyebrow-line" />
                <span className="artists-eyebrow-text">The Roster</span>
              </div>
              <h2 className="artists-title">
                Our <em>Artists</em>
              </h2>
            </div>

            <div className="artists-header-right">
              <p className="artists-desc">
                A carefully curated roster of South African talent — each artist
                bringing a distinct voice, genre, and story to the CMMG family.
              </p>
              <div className="artists-header-ctas">
                <Link href="/commercial" className="artists-cta-primary">
                  All Music
                  <ArrowRight size={14} />
                </Link>
                <Link href="/about" className="artists-cta-secondary">
                  About the Label
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Artist grid */}
          <div className="artists-grid">
            {artists.map((artist) => (
              <div key={artist.id} className="artists-card">
                {/* Image */}
                <div className="artists-card-image">
                  {/* Replace src with actual artist image import when available */}
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="artists-card-genre">{artist.genre}</span>
                </div>

                {/* Body */}
                <div className="artists-card-body">
                  <div className="artists-card-name">{artist.name}</div>
                  <p className="artists-card-desc">{artist.description}</p>

                  {/* Albums */}
                  <div className="artists-card-albums">
                    <div className="artists-card-albums-label">Discography</div>
                    {artist.albums.map((album, i) => (
                      <div key={i} className="artists-card-album-item">
                        {album}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="artists-card-footer">
                  <a
                    href={artist.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="artists-card-btn"
                  >
                    <Music size={12} />
                    Listen
                  </a>
                  <Link href="/commercial" className="artists-card-btn">
                    Profile
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Artists;
