"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Music, X } from "lucide-react";
import { cstaz, tms2 } from "@/data";
import Image from "next/image";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const tracks = [
    {
      id: 1,
      title: "The Long Drive",
      artist: "Abe Sibiya",
      img: cstaz,
      url: "https://firebasestorage.googleapis.com/v0/b/musicapp-e347f.firebasestorage.app/o/cmmgweb%2F08%20The%20Long%20Drive.wav?alt=media&token=392d0194-9656-4b75-b255-49be56ab4963",
    },
    {
      id: 2,
      title: "Bless The Lord",
      artist: "L & J Cstaz",
      img: cstaz,
      url: "https://firebasestorage.googleapis.com/v0/b/musicapp-e347f.firebasestorage.app/o/cmmgweb%2FBless%20The%20Lord.wav?alt=media&token=99f8e69b-cf03-40b8-bfe7-c6dd8922bbe9",
    },
    {
      id: 3,
      title: "Jesu Msindisi",
      artist: "L & J Cstaz",
      img: cstaz,
      url: "https://firebasestorage.googleapis.com/v0/b/musicapp-e347f.firebasestorage.app/o/cmmgweb%2FJesu%20Msindisi.wav?alt=media&token=6ff7336b-501b-464a-8360-eea72626ccec",
    },
    {
      id: 4,
      title: "The Blessing",
      artist: "Abe Sibiya",
      img: tms2,
      url: "https://firebasestorage.googleapis.com/v0/b/musicapp-e347f.firebasestorage.app/o/cmmgweb%2FThe%20blessing.mp3?alt=media&token=33278536-c348-45e9-9b5e-f74127a27c88",
    },
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => setProgress(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => nextTrack();
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrack].url;
      if (isPlaying) audioRef.current.play();
    }
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const nextTrack = () => setCurrentTrack((p) => (p + 1) % tracks.length);
  const prevTrack = () =>
    setCurrentTrack((p) => (p - 1 + tracks.length) % tracks.length);
  const selectTrack = (i: number) => {
    setCurrentTrack(i);
    setIsPlaying(true);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = parseFloat(e.target.value);
    if (audioRef.current) audioRef.current.currentTime = t;
    setProgress(t);
  };

  const formatTime = (t: number) => {
    if (!t || !isFinite(t)) return "0:00";
    return `${Math.floor(t / 60)}:${Math.floor(t % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  const progressPct = duration ? (progress / duration) * 100 : 0;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Manrope:wght@400;500;600&display=swap');

        /* ── FAB button ── */
        .mp-fab {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 52px;
          height: 52px;
          background: #f05a1a;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 50;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .mp-fab:hover {
          background: #d44c10;
          transform: translateY(-2px);
        }
        .mp-fab-ring {
          position: absolute;
          inset: -4px;
          border: 1px solid rgba(240,90,26,0.4);
          animation: mp-ring-pulse 2s ease-in-out infinite;
        }
        @keyframes mp-ring-pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0; transform: scale(1.3); }
        }

        /* ── Modal backdrop ── */
        .mp-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          z-index: 60;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 5rem 1rem 1rem;
        }

        /* ── Panel ── */
        .mp-panel {
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.08);
          width: 100%;
          max-width: 420px;
          position: relative;
          overflow: hidden;
        }

        /* Orange left stripe */
        .mp-panel::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(to bottom, transparent, #f05a1a 25%, #f05a1a 75%, transparent);
          pointer-events: none;
          z-index: 1;
        }

        /* ── Header ── */
        .mp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem 1rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .mp-header-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .mp-header-eyebrow {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }
        .mp-header-icon {
          color: #f05a1a;
        }
        .mp-close {
          background: none;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.4);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .mp-close:hover {
          border-color: #f05a1a;
          color: #f05a1a;
        }

        /* ── Now playing ── */
        .mp-now-playing {
          padding: 1.5rem 1.5rem 1rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .mp-cover {
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          position: relative;
        }
        .mp-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .mp-track-info {
          flex: 1;
          min-width: 0;
        }
        .mp-track-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: -0.02em;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mp-track-artist {
          font-family: 'Manrope', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          color: rgba(255,255,255,0.4);
          margin-top: 0.2rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ── Progress ── */
        .mp-progress-wrap {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .mp-progress-bar-track {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.08);
          position: relative;
          cursor: pointer;
          margin-bottom: 0.5rem;
        }
        .mp-progress-bar-fill {
          position: absolute;
          left: 0; top: 0;
          height: 100%;
          background: #f05a1a;
          pointer-events: none;
          transition: width 0.1s linear;
        }
        .mp-progress-input {
          position: absolute;
          inset: -6px 0;
          width: 100%;
          opacity: 0;
          cursor: pointer;
          margin: 0;
        }
        .mp-time-row {
          display: flex;
          justify-content: space-between;
        }
        .mp-time {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.3);
        }

        /* ── Controls ── */
        .mp-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .mp-ctrl-btn {
          background: none;
          border: none;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.4rem;
          transition: color 0.2s ease;
        }
        .mp-ctrl-btn:hover { color: #ffffff; }
        .mp-play-btn {
          background: #f05a1a;
          border: none;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #ffffff;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .mp-play-btn:hover {
          background: #d44c10;
          transform: scale(1.05);
        }

        /* ── Playlist ── */
        .mp-playlist {
          max-height: 220px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.1) transparent;
        }
        .mp-playlist-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1.5rem;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          background: transparent;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s ease;
          position: relative;
        }
        .mp-playlist-item:last-child { border-bottom: none; }
        .mp-playlist-item:hover { background: rgba(255,255,255,0.03); }
        .mp-playlist-item.active { background: rgba(240,90,26,0.06); }
        .mp-playlist-item.active::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 2px; height: 100%;
          background: #f05a1a;
        }
        .mp-playlist-num {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.2);
          width: 20px;
          flex-shrink: 0;
          text-align: right;
        }
        .mp-playlist-item.active .mp-playlist-num { color: #f05a1a; }
        .mp-playlist-thumb {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          position: relative;
        }
        .mp-playlist-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .mp-playlist-title {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mp-playlist-item.active .mp-playlist-title { color: #ffffff; }
        .mp-playlist-artist {
          font-family: 'Manrope', sans-serif;
          font-size: 0.65rem;
          font-weight: 400;
          color: rgba(255,255,255,0.3);
          margin-top: 0.1rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>

      <audio ref={audioRef} src={tracks[currentTrack].url} muted={isMuted} />

      {/* FAB */}
      <button
        onClick={() => setShowModal(true)}
        className="mp-fab"
        aria-label="Open music player"
      >
        {isPlaying && <span className="mp-fab-ring" />}
        <Music size={22} color="#ffffff" />
      </button>

      {/* Modal */}
      {showModal && (
        <div
          className="mp-backdrop"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="mp-panel">
            {/* Header */}
            <div className="mp-header">
              <div className="mp-header-left">
                <Music size={14} className="mp-header-icon" />
                <span className="mp-header-eyebrow">Now Playing</span>
              </div>
              <button
                className="mp-close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>

            {/* Now Playing */}
            <div className="mp-now-playing">
              <div className="mp-cover">
                <Image
                  src={tracks[currentTrack].img}
                  alt={tracks[currentTrack].title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="mp-track-info">
                <div className="mp-track-title">
                  {tracks[currentTrack].title}
                </div>
                <div className="mp-track-artist">
                  {tracks[currentTrack].artist}
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="mp-progress-wrap">
              <div className="mp-progress-bar-track">
                <div
                  className="mp-progress-bar-fill"
                  style={{ width: `${progressPct}%` }}
                />
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={progress}
                  onChange={handleProgressChange}
                  className="mp-progress-input"
                />
              </div>
              <div className="mp-time-row">
                <span className="mp-time">{formatTime(progress)}</span>
                <span className="mp-time">{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="mp-controls">
              <button
                className="mp-ctrl-btn"
                onClick={prevTrack}
                aria-label="Previous"
              >
                <SkipBack size={20} />
              </button>
              <button
                className="mp-play-btn"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause size={18} fill="currentColor" />
                ) : (
                  <Play size={18} fill="currentColor" />
                )}
              </button>
              <button
                className="mp-ctrl-btn"
                onClick={nextTrack}
                aria-label="Next"
              >
                <SkipForward size={20} />
              </button>
            </div>

            {/* Playlist */}
            <div className="mp-playlist">
              {tracks.map((track, i) => (
                <button
                  key={track.id}
                  onClick={() => selectTrack(i)}
                  className={`mp-playlist-item${i === currentTrack ? " active" : ""}`}
                >
                  <span className="mp-playlist-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="mp-playlist-thumb">
                    <Image
                      src={track.img}
                      alt={track.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="mp-playlist-title">{track.title}</div>
                    <div className="mp-playlist-artist">{track.artist}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
