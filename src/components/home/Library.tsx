import { Anton, Hanken_Grotesk } from "next/font/google";
import React from "react";
import { GoDotFill } from "react-icons/go";
import LibraryImageGrid from "./components/LibraryImageGrid";
import Link from "next/link";

const antonFont = Anton({
  subsets: ["latin"],
  weight: "400",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Library = () => {
  return (
    <div className="w-full py-10 bg-[#f2ece5]">
      <div className="w-[90%] mx-auto text-[#0e0e0e]">
        <div className="flex items-center gap-3 py-5">
          <GoDotFill className="-mx-2 h-7 w-7" />
          <p className={`${hanken.className} text-lg font-medium`}>
            Music Library
          </p>
        </div>

        <div className="py-5 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1
              className={`${antonFont.className} text-5xl tracking-wide uppercase`}
            >
              CMMG Production Music Library
            </h1>
            <p className={`${hanken.className} text-lg max-w-xl`}>
              Discover our growing catalogue of original, high-quality music for
              use in film, TV, online content, advertising, and more. Our
              production library features a wide range of genres and moods —
              ready to license and elevate your next project.
            </p>
            <Link
              href="/"
              className={`${hanken.className} inline-block border border-[#0e0e0e] rounded-full px-6 py-2 text-lg font-medium hover:bg-[#0e0e0e] hover:text-[#f2ece5] transition-colors`}
            >
              Explore the Library
            </Link>
          </div>

          <div className="flex-1">
            <LibraryImageGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
