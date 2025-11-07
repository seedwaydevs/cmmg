"use client";

import { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Music,
  X,
} from "lucide-react";
import { cstaz, image2, tms2 } from "@/data";

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
      img: image2,
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

      {/* Floating Music Note Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Open music player"
      >
        <Music
          size={28}
          className="text-white group-hover:scale-110 transition-transform"
        />
        {isPlaying && (
          <div className="absolute inset-0 rounded-full animate-ping bg-orange-400 opacity-75"></div>
        )}
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl w-full max-w-md border border-slate-700 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Music size={24} className="text-orange-500" />
                Music Player
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* Current Track Display */}
            <div className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-lg">
                <Music size={64} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {tracks[currentTrack].title}
              </h3>
              <p className="text-slate-400">{tracks[currentTrack].artist}</p>
            </div>

            {/* Progress Bar */}
            <div className="px-6">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={progress}
                onChange={handleProgressChange}
                className="w-full h-2 bg-slate-700 rounded-lg cursor-pointer accent-orange-500 hover:accent-orange-400"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>{formatTime(progress)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 p-6">
              <button
                onClick={toggleMute}
                className="p-3 hover:bg-slate-700 rounded-full transition-colors text-slate-300 hover:text-white"
                aria-label="Toggle mute"
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>

              <button
                onClick={prevTrack}
                className="p-3 hover:bg-slate-700 rounded-full transition-colors text-slate-300 hover:text-white"
                aria-label="Previous track"
              >
                <SkipBack size={28} />
              </button>

              <button
                onClick={togglePlay}
                className="p-5 bg-orange-600 hover:bg-orange-500 rounded-full transition-all hover:scale-105 text-white shadow-lg"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause size={32} fill="currentColor" />
                ) : (
                  <Play size={32} fill="currentColor" />
                )}
              </button>

              <button
                onClick={nextTrack}
                className="p-3 hover:bg-slate-700 rounded-full transition-colors text-slate-300 hover:text-white"
                aria-label="Next track"
              >
                <SkipForward size={28} />
              </button>
            </div>

            {/* Playlist */}
            <div className="border-t border-slate-700 max-h-64 overflow-y-auto">
              {tracks.map((track, index) => (
                <button
                  key={track.id}
                  onClick={() => selectTrack(index)}
                  className={`w-full text-left px-6 py-4 hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-b-0 ${
                    index === currentTrack
                      ? "bg-slate-700 text-orange-500"
                      : "text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Music
                        size={20}
                        className={
                          index === currentTrack
                            ? "text-orange-500"
                            : "text-slate-500"
                        }
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate">
                        {track.title}
                      </p>
                      <p className="text-xs text-slate-500 truncate">
                        {track.artist}
                      </p>
                    </div>
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
