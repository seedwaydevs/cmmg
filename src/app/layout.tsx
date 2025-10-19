"use client";

import { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  ChevronDown,
} from "lucide-react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const tracks = [
    {
      id: 1,
      title: "Track One",
      artist: "Artist Name",
      url: "/music/track1.mp3",
    },
    {
      id: 2,
      title: "Track Two",
      artist: "Artist Name",
      url: "/music/track2.mp3",
    },
    {
      id: 3,
      title: "Track Three",
      artist: "Artist Name",
      url: "/music/track3.mp3",
    },
    {
      id: 4,
      title: "Track Four",
      artist: "Artist Name",
      url: "/music/track4.mp3",
    },
    {
      id: 5,
      title: "Track Five",
      artist: "Artist Name",
      url: "/music/track5.mp3",
    },
    {
      id: 6,
      title: "Track Six",
      artist: "Artist Name",
      url: "/music/track6.mp3",
    },
  ];

  // ===== AUTOPLAY LOGIC - EASY TO REMOVE =====
  // To disable autoplay: comment out or delete the useEffect block below
  useEffect(() => {
    const playOnLoad = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log("Autoplay prevented:", err);
        });
        setIsPlaying(true);
      }
    };
    playOnLoad();
  }, []);
  // ===== END AUTOPLAY LOGIC =====

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
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const selectTrack = (index: number) => {
    setCurrentTrack(index);
    setShowPlaylist(false);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
    setProgress(newTime);
  };

  const formatTime = (time: number) => {
    if (!time || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <audio ref={audioRef} src={tracks[currentTrack].url} muted={isMuted} />

      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-slate-800 border-t border-slate-700 shadow-2xl z-50">
        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={progress}
          onChange={handleProgressChange}
          className="w-full h-1 bg-slate-700 cursor-pointer accent-blue-500 hover:accent-blue-400"
        />

        <div className="px-4 py-4 md:px-6 md:py-5">
          {/* Main Player */}
          <div className="flex items-center justify-between gap-4">
            {/* Track Info */}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white truncate">
                {tracks[currentTrack].title}
              </p>
              <p className="text-xs text-slate-400 truncate">
                {tracks[currentTrack].artist}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Mute Button */}
              <button
                onClick={toggleMute}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white"
                aria-label="Toggle mute"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              {/* Previous Button */}
              <button
                onClick={prevTrack}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white"
                aria-label="Previous track"
              >
                <SkipBack size={18} />
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="p-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors text-white"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause size={20} fill="currentColor" />
                ) : (
                  <Play size={20} fill="currentColor" />
                )}
              </button>

              {/* Next Button */}
              <button
                onClick={nextTrack}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white"
                aria-label="Next track"
              >
                <SkipForward size={18} />
              </button>

              {/* Time Display */}
              <div className="text-xs text-slate-400 min-w-fit ml-2">
                {formatTime(progress)} / {formatTime(duration)}
              </div>

              {/* Playlist Button */}
              <div className="relative">
                <button
                  onClick={() => setShowPlaylist(!showPlaylist)}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white ml-2"
                  aria-label="Show playlist"
                >
                  <ChevronDown size={18} />
                </button>

                {/* Playlist Dropdown */}
                {showPlaylist && (
                  <div className="absolute bottom-full right-0 mb-2 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-lg max-h-72 overflow-y-auto">
                    {tracks.map((track, index) => (
                      <button
                        key={track.id}
                        onClick={() => selectTrack(index)}
                        className={`w-full text-left px-4 py-3 hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-b-0 ${
                          index === currentTrack
                            ? "bg-slate-700 text-blue-400"
                            : "text-slate-300"
                        }`}
                      >
                        <p className="text-sm font-medium">{track.title}</p>
                        <p className="text-xs text-slate-500">{track.artist}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="h-24" />
    </>
  );
};

export default MusicPlayer;
