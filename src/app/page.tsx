"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ContactCTA from "@/components/home/ContactCTA";
import Explore from "@/components/home/Explore";
import Hero from "@/components/home/Hero";
import Latest from "@/components/home/Latest";
import MusicServices from "@/components/home/MusicServices";
import TrustCarousel from "@/components/home/TrustCarousel";
import WhatWeDo from "@/components/home/WhatWeDo";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Hero />
      <TrustCarousel />
      {/* <Latest /> */}
      <Explore />
      <MusicServices />
      <WhatWeDo />
      <ContactCTA />

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>

            <div className="text-center">
              <div className="mb-4 text-5xl">🎵</div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                Explore Our Production Music Library
              </h2>
              <p className="text-gray-600 mb-2 text-lg">
                Discover over{" "}
                <span className="font-bold text-orange-600">4,500 tracks</span>
              </p>
              <p className="text-gray-500 mb-6">
                Perfect for your projects, content, and creative needs
              </p>

              <div className="flex gap-3">
                <Link
                  href="https://www.library.cmmg.co.za/"
                  className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 font-semibold transition text-center"
                  onClick={() => setShowModal(false)}
                >
                  Explore Now
                </Link>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 font-semibold transition"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
