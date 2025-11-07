import React from "react";

type MVProps = {
  heading1: string;
  heading2: string;
  paragraph: string;
};

const MissionVisionTiles = ({ heading1, heading2, paragraph }: MVProps) => {
  return (
    <div className="group">
      <div className="relative">
        <div className="absolute inset-0 backdrop-blur-2xl bg-black/0 shadow-2xl shadow-orange-600 rounded-2xl border border-black/10 group-hover:bg-white/10 transition-all duration-500"></div>
        <div className="relative p-10">
          <h2 className="text-5xl lg:text-6xl font-black text-neutral-900 leading-none">
            {heading1}
          </h2>
          <h2 className="text-5xl lg:text-6xl font-black text-orange-500 mb-8 leading-none">
            {heading2}
          </h2>
          <p className="text-lg text-neutral-800 leading-relaxed">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionTiles;
