"use client";

import { Play, Pause } from "lucide-react";
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
      // Switch to new track and play
      setSelectedTrack(trackIndex);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = tracks[trackIndex].audioUrl;
        audioRef.current.play();
      }
    } else {
      // Toggle play/pause for current track
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
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

  // Update audio source when selected track changes
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.src = currentTrack.audioUrl;
      audioRef.current.play();
    }
  }, [selectedTrack]);

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="py-10 bg-gradient-to-b from-black to-gray-900 text-white">
      <audio ref={audioRef} />

      <div className="w-[90%] lg:w-[80%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 backdrop-blur-sm rounded-full border border-orange-500/20 mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium tracking-wide text-orange-400">
              FEATURED RELEASES
            </span>
          </div>
          <h2 className="text-4xl lg:text-4xl font-bold mb-4">Latest Tracks</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our newest releases from talented artists
          </p>
        </div>

        {/* Main Player */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Album Art & Details */}
          <div className="space-y-10">
            <div className="flex justify-center relative w-full max-w-md mx-auto lg:mx-0 group ">
              <div className="relative h-90 aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={currentTrack.image}
                  alt={currentTrack.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handlePlayPause()}
                    className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-orange-400 transition-all transform hover:scale-110"
                  >
                    {isPlaying ? (
                      <Pause className="w-10 h-10 text-white" fill="white" />
                    ) : (
                      <Play
                        className="w-10 h-10 text-white ml-1"
                        fill="white"
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl blur-2xl" />
            </div>

            {/* Current Track Details */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="uppercase tracking-wider">
                  {currentTrack.releaseDate}
                </span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
                {currentTrack.title}
              </h3>

              <p className="text-2xl text-orange-400 font-semibold">
                {currentTrack.artist}
              </p>

              {/* Progress Bar */}
              {duration > 0 && (
                <div className="space-y-2 pt-4">
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden cursor-pointer">
                    <div
                      className="h-full bg-orange-500 transition-all duration-100"
                      style={{
                        width: `${(currentTime / duration) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              )}

              {/* Platform Links */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-4 uppercase tracking-wide">
                  Available on
                </p>
                <div className="flex flex-wrap gap-3">
                  {currentTrack.links.map((platform) => (
                    <Link
                      key={platform.id}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:border-orange-500/50 group"
                    >
                      <span className="group-hover:scale-110 transition-transform">
                        {platform.icon}
                      </span>
                      <span className="text-sm font-medium">
                        {platform.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Track List */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-300 uppercase tracking-wide">
              All Tracks
            </h4>

            <div className="space-y-1">
              {tracks.map((track, index) => (
                <div
                  key={track.id}
                  className={`group flex items-center justify-between p-3 rounded-xl transition-all duration-300 cursor-pointer border ${
                    selectedTrack === index
                      ? "bg-orange-500/10 border-orange-500/50"
                      : "hover:bg-white/5 border-transparent hover:border-white/10"
                  }`}
                  onClick={() => handlePlayPause(index)}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <button className="w-10 h-10 flex items-center justify-center">
                      {selectedTrack === index && isPlaying ? (
                        <Pause
                          className="w-5 h-5 text-orange-400"
                          fill="currentColor"
                        />
                      ) : (
                        <Play
                          className={`w-5 h-5 ml-0.5 ${
                            selectedTrack === index
                              ? "text-orange-400"
                              : "text-gray-400 group-hover:text-orange-400"
                          }`}
                          fill="currentColor"
                        />
                      )}
                    </button>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`font-semibold text-lg transition-colors truncate ${
                          selectedTrack === index
                            ? "text-orange-400"
                            : "group-hover:text-orange-400"
                        }`}
                      >
                        {track.title}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {track.artist}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 ml-4">
                      {track.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
