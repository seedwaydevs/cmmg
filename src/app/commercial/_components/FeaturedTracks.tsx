"use client";

import { Play, Pause, ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type Track = {
  id: number;
  title: string;
  artist: string;
  duration: string;
  audioUrl: string;
  image: StaticImageData | string;
  releaseDate: string;
  links: {
    id: number;
    name: string;
    icon: React.ReactNode;
    link: string;
  }[];
};

type FeaturedTracksProps = {
  tracks: Track[];
};

export default function FeaturedTracks({ tracks }: FeaturedTracksProps) {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[selectedTrack];

  const handlePlayPause = (trackIndex?: number) => {
    if (trackIndex !== undefined && trackIndex !== selectedTrack) {
      setSelectedTrack(trackIndex);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = tracks[trackIndex].audioUrl;
        audioRef.current.play();
      }
    } else {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    if (audioRef.current && duration) {
      audioRef.current.currentTime = pct * duration;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.src = currentTrack.audioUrl;
      audioRef.current.play();
    }
  }, [selectedTrack]);

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        .ft-root {
          width: 100%;
          background: #0a0a0a;
          border-top: 1px solid rgba(255,255,255,0.06);
          position: relative;
          overflow: hidden;
        }
        .ft-root::before {
          content: '';
          position: absolute; left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none; z-index: 2;
        }

        .ft-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 3rem;
          position: relative; z-index: 1;
        }

        /* ── Header ── */
        .ft-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ft-eyebrow {
          display: flex; align-items: center;
          gap: 0.75rem; margin-bottom: 1.25rem;
        }
        .ft-eyebrow-line { width: 28px; height: 1px; background: #f05a1a; flex-shrink: 0; }
        .ft-eyebrow-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .ft-eyebrow-badge {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #1a8cff; border: 1px solid rgba(26,140,255,0.3);
          padding: 0.2rem 0.55rem; margin-left: 0.25rem;
        }
        .ft-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -0.02em; line-height: 0.95;
          text-transform: uppercase; color: #ffffff;
        }
        .ft-title em { font-style: normal; color: #f05a1a; }
        .ft-header-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem; font-weight: 400;
          line-height: 1.7; color: rgba(255,255,255,0.4);
          max-width: 380px;
        }

        /* ── Body: two columns ── */
        .ft-body {
          display: grid;
          grid-template-columns: 380px 1fr;
          border-left: 1px solid rgba(255,255,255,0.08);
          border-top: 1px solid rgba(255,255,255,0.08);
          gap: 0;
          align-items: stretch;
        }

        /* ── Left: album art + controls ── */
        .ft-player {
          border-right: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          display: flex; flex-direction: column;
        }

        .ft-art {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          overflow: hidden;
          background: #111;
          cursor: pointer;
          flex-shrink: 0;
        }
        .ft-art img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
        .ft-art:hover img { transform: scale(1.04); }

        .ft-art-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.25s ease;
          z-index: 1;
        }
        .ft-art:hover .ft-art-overlay { opacity: 1; }

        .ft-play-btn {
          width: 64px; height: 64px;
          background: #f05a1a; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #ffffff;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .ft-play-btn:hover { background: #d44c10; transform: scale(1.08); }

        /* Now playing tag on image */
        .ft-now-playing {
          position: absolute; top: 1rem; left: 1rem; z-index: 2;
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          background: #f05a1a; color: #ffffff;
          padding: 0.3rem 0.7rem;
          display: flex; align-items: center; gap: 0.4rem;
        }
        .ft-now-playing-dot {
          width: 5px; height: 5px;
          background: #fff; border-radius: 50%;
          animation: ft-pulse 1.2s ease-in-out infinite;
        }
        @keyframes ft-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        /* Track info */
        .ft-track-info {
          padding: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; flex-direction: column;
          gap: 0.3rem;
          flex: 1;
        }
        .ft-track-date {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }
        .ft-track-title {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 1.15rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #ffffff;
          line-height: 1.1;
        }
        .ft-track-artist {
          font-family: 'Manrope', sans-serif;
          font-size: 0.78rem; font-weight: 500;
          color: #f05a1a;
        }

        /* Progress bar */
        .ft-progress-wrap {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .ft-progress-bar {
          width: 100%; height: 3px;
          background: rgba(255,255,255,0.08);
          cursor: pointer; position: relative;
        }
        .ft-progress-fill {
          height: 100%; background: #f05a1a;
          transition: width 0.1s linear;
          pointer-events: none;
        }
        .ft-progress-times {
          display: flex; justify-content: space-between;
          margin-top: 0.5rem;
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 500;
          color: rgba(255,255,255,0.25);
        }

        /* Platform links */
        .ft-platforms {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; flex-direction: column; gap: 0.75rem;
        }
        .ft-platforms-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }
        .ft-platform-links { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .ft-platform-link {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.45rem 0.85rem; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.4rem;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .ft-platform-link:hover { border-color: #f05a1a; color: #f05a1a; }

        /* ── Right: track list ── */
        .ft-tracklist {
          border-right: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          display: flex; flex-direction: column;
        }

        .ft-tracklist-head {
          padding: 1.5rem 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: space-between;
        }
        .ft-tracklist-heading {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.72rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(255,255,255,0.35);
          display: flex; align-items: center; gap: 0.6rem;
        }
        .ft-tracklist-heading::before {
          content: ''; display: block;
          width: 20px; height: 1px; background: #f05a1a;
        }
        .ft-track-count {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          color: rgba(255,255,255,0.2);
        }

        .ft-track-row {
          display: flex; align-items: center;
          padding: 1.1rem 2rem;
          gap: 1.25rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          cursor: pointer;
          position: relative; overflow: hidden;
          transition: background 0.2s ease;
        }
        .ft-track-row:last-child { border-bottom: none; }
        .ft-track-row:hover { background: rgba(255,255,255,0.02); }
        .ft-track-row.active { background: rgba(240,90,26,0.06); }

        /* Accent bar */
        .ft-track-row::before {
          content: '';
          position: absolute; left: 0; top: 0;
          width: 2px; height: 100%;
          background: #f05a1a;
          transform: scaleY(0); transform-origin: top;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .ft-track-row.active::before,
        .ft-track-row:hover::before { transform: scaleY(1); }

        .ft-row-index {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.2);
          width: 20px; flex-shrink: 0; text-align: center;
        }
        .ft-track-row.active .ft-row-index { color: #f05a1a; }

        .ft-row-thumb {
          width: 44px; height: 44px;
          position: relative; overflow: hidden;
          flex-shrink: 0; background: #111;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .ft-row-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .ft-row-play-btn {
          position: absolute; inset: 0;
          background: rgba(240,90,26,0.85);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s ease;
          border: none; cursor: pointer; color: #fff;
        }
        .ft-track-row:hover .ft-row-play-btn,
        .ft-track-row.active .ft-row-play-btn { opacity: 1; }

        .ft-row-meta { flex: 1; min-width: 0; }
        .ft-row-title {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 0.9rem; letter-spacing: -0.01em;
          text-transform: uppercase; color: #ffffff;
          transition: color 0.2s ease;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .ft-track-row.active .ft-row-title,
        .ft-track-row:hover .ft-row-title { color: #f05a1a; }
        .ft-row-artist {
          font-family: 'Manrope', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          color: rgba(255,255,255,0.35);
          margin-top: 0.15rem;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }

        /* Waveform animation for active track */
        .ft-row-waveform {
          display: flex; align-items: center;
          gap: 2px; flex-shrink: 0;
        }
        .ft-row-waveform-bar {
          width: 2px; background: #f05a1a; opacity: 0.7;
          animation: ft-wave 1s ease-in-out infinite;
        }
        @keyframes ft-wave {
          0%,100% { transform: scaleY(0.3); }
          50%      { transform: scaleY(1); }
        }

        .ft-row-duration {
          font-family: 'Manrope', sans-serif;
          font-size: 0.7rem; font-weight: 500;
          color: rgba(255,255,255,0.25);
          flex-shrink: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ft-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .ft-body   { grid-template-columns: 1fr; }
          .ft-player { border-right: none; }
        }
        @media (max-width: 640px) {
          .ft-inner      { padding: 3rem 1.5rem; }
          .ft-track-row  { padding: 1rem 1.25rem; }
          .ft-track-info { padding: 1.25rem; }
          .ft-platforms  { padding: 1rem 1.25rem; }
        }
      `}</style>

      <section className="ft-root" id="releases">
        <audio ref={audioRef} />

        <div className="ft-inner">
          {/* Header */}
          <div className="ft-header">
            <div>
              <div className="ft-eyebrow">
                <span className="ft-eyebrow-line" />
                <span className="ft-eyebrow-text">Releases</span>
                <span className="ft-eyebrow-badge">Featured</span>
              </div>
              <h2 className="ft-title">
                Latest <em>Tracks</em>
              </h2>
            </div>
            <div>
              <p className="ft-header-desc">
                Explore the newest releases from CMMG's signed artists — South
                African stories told through world-class sound.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="ft-body">
            {/* Left — player */}
            <div className="ft-player">
              {/* Album art */}
              <div className="ft-art" onClick={() => handlePlayPause()}>
                <Image
                  src={currentTrack.image}
                  alt={currentTrack.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="380px"
                />
                <div className="ft-now-playing">
                  <span className="ft-now-playing-dot" />
                  Now Playing
                </div>
                <div className="ft-art-overlay">
                  <button
                    className="ft-play-btn"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause size={26} fill="#ffffff" />
                    ) : (
                      <Play
                        size={26}
                        fill="#ffffff"
                        style={{ marginLeft: 3 }}
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* Track info */}
              <div className="ft-track-info">
                <div className="ft-track-date">{currentTrack.releaseDate}</div>
                <div className="ft-track-title">{currentTrack.title}</div>
                <div className="ft-track-artist">{currentTrack.artist}</div>

                {/* Progress */}
                <div className="ft-progress-wrap">
                  <div className="ft-progress-bar" onClick={handleSeek}>
                    <div
                      className="ft-progress-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="ft-progress-times">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>

              {/* Platform links */}
              <div className="ft-platforms">
                <div className="ft-platforms-label">Available On</div>
                <div className="ft-platform-links">
                  {currentTrack.links.map((p) => (
                    <Link
                      key={p.id}
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ft-platform-link"
                    >
                      {p.icon}
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — track list */}
            <div className="ft-tracklist">
              <div className="ft-tracklist-head">
                <div className="ft-tracklist-heading">All Tracks</div>
                <span className="ft-track-count">{tracks.length} tracks</span>
              </div>

              {tracks.map((track, index) => {
                const active = selectedTrack === index;
                return (
                  <div
                    key={track.id}
                    className={`ft-track-row${active ? " active" : ""}`}
                    onClick={() => handlePlayPause(index)}
                  >
                    <span className="ft-row-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="ft-row-thumb">
                      <Image
                        src={track.image}
                        alt={track.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="44px"
                      />
                      <button
                        className="ft-row-play-btn"
                        aria-label={active && isPlaying ? "Pause" : "Play"}
                      >
                        {active && isPlaying ? (
                          <Pause size={14} fill="#ffffff" />
                        ) : (
                          <Play
                            size={14}
                            fill="#ffffff"
                            style={{ marginLeft: 2 }}
                          />
                        )}
                      </button>
                    </div>

                    <div className="ft-row-meta">
                      <div className="ft-row-title">{track.title}</div>
                      <div className="ft-row-artist">{track.artist}</div>
                    </div>

                    {/* Waveform when active + playing, duration otherwise */}
                    {active && isPlaying ? (
                      <div className="ft-row-waveform">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div
                            key={i}
                            className="ft-row-waveform-bar"
                            style={{
                              height: `${Math.floor(Math.random() * 14) + 6}px`,
                              animationDelay: `${i * 0.08}s`,
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <span className="ft-row-duration">{track.duration}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
