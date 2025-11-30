"use client";

import { cmmg } from "@/data";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  imagesLoaded: boolean;
  onLoadComplete: () => void;
}

export default function LoadingScreen({
  imagesLoaded,
  onLoadComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const LOADING_DURATION = 4000;
    const STEPS = 100;
    const interval = LOADING_DURATION / STEPS;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadComplete(), 500);
          return 100;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-900">
      <div className="text-center">
        <Image height={250} width={250} src={cmmg} alt={"CMMG LOGO"} />
        <h2 className="text-white text-lg font-bold mb-8">Loading...</h2>
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-gray-400 mt-4 text-sm">{progress}%</p>
      </div>
    </div>
  );
}
