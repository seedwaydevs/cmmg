import React from "react";
import { Hanken_Grotesk, Schibsted_Grotesk } from "next/font/google";
import Link from "next/link";

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
    <div className="relative z-10">
      <div className="w-[90%] md:w-[90%] mx-auto h-[80vh] ">
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-end mt-32">
            <p className="text-[16px] uppercase font-bold tracking-tighter">
              [ Production Music ]
            </p>
          </div>
          <div className={`${sted.className} space-y-5`}>
            <p className="text-lg font-medium max-w-xs md:max-w-sm">
              Curated, high-quality tracks for film, TV, and digital projects.
            </p>
            <h1
              className={`${sted.className} text-7xl md:text-8xl  2xl:text-9xl font-extrabold md:max-w-[100%] lg:max-w-[75%] xl:max-w-[65%]`}
            >
              Production Music Library
              <span className="text-orange-600">.</span>
            </h1>
            <Link
              className={`${sted.className} py-2 px-3 bg-orange-600 font-medium hover:text-blue-900`}
              href={"/production"}
            >
              Browse
            </Link>
          </div>
          <div className="flex justify-start ">
            <p className="text-[16px] uppercase font-bold tracking-tighter">
              [ Ready to License ]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
