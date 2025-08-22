import React from "react";
import { Hanken_Grotesk, Schibsted_Grotesk } from "next/font/google";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Catalog = () => {
  return (
    <div>
      <div className="w-[90%] md:w-[90%] mx-auto h-[80vh] text-red-600">
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-end mt-19">
            <p className="text-[16px] uppercase font-bold tracking-tighter">
              [ Content and Music ]
            </p>
          </div>
          <div className={`${sted.className}`}>
            <p className="text-lg font-medium max-w-xs md:max-w-sm">
              Crafting original music libraries and immersive content for film,
              television, and digital storytelling.
            </p>
            <h1
              className={`${hanken.className} text-8xl font-extrabold py-7 text-red-700`}
            >
              CMMG
              <span className="text-orange-600">.</span>
            </h1>
            <p className="text-[16px] uppercase font-bold tracking-tighter">
              [ Media Group ]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
