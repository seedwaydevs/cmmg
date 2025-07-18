import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import image from "../../../../public/prodco.jpg";
import Image from "next/image";
import { Anton, Hanken_Grotesk } from "next/font/google";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {};

const antonFont = Anton({
  subsets: ["latin"],
  weight: "400",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const WhatWeDoCarousel = (props: Props) => {
  return (
    <Carousel>
      <CarouselContent>
        {brandContentSections.map((content, index) => (
          <CarouselItem key={index}>
            <div className="p-5 space-y-5  flex flex-col gap-5 lg:flex-row lg:items-center">
              <div className="flex-1">
                <div className="flex flex-col space-y-5">
                  <h1
                    className={`${antonFont.className} text-7xl uppercase lg:max-w-md`}
                  >
                    {content.title}
                  </h1>
                  <p>{content.description}</p>
                  <div>
                    <ul className="grid grid-cols-3 lg:grid-cols-3 gap-2 text-center">
                      {content.items.map((item, i) => (
                        <li
                          key={i}
                          className="border py-1 rounded-3xl line-clamp-1"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-10 w-full max-w-full h-[45vh] sm:h-[60vh] md:h-[60vh] lg:h-full lg:flex-1 overflow-hidden">
                <Image
                  src={image}
                  alt="image"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-white  text-center flex justify-center items-center gap-2 lg:py-5">
              Swipe <IoIosArrowRoundForward className="h-7 w-7" />
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default WhatWeDoCarousel;

const brandContentSections = [
  {
    title: (
      <>
        Video{" "}
        <span className="font-serif lowercase italic text-[30px] leading-14">
          and
        </span>{" "}
        film production
      </>
    ),
    description:
      "We produce cinematic video content that tells stories, captures emotion, and connects with audiences — from branded films to documentaries and social campaigns.",
    items: [
      "Commercials",
      "Documentaries",
      "Social Videos",
      "Promos",
      "Interviews",
    ],
    image: image,
  },
  {
    title: <>Music production</>,
    description:
      "Our team of composers, producers, and engineers create original music for film, TV, and digital — perfectly tailored to elevate your message.",
    items: [
      "Custom Scores",
      "Theme Music",
      "Sonic Branding",
      "Mixing",
      "Mastering",
    ],
    image: image,
  },
  {
    title: <>Production music library</>,
    description:
      "Browse and license from our curated music library — featuring a diverse selection of original tracks ready for use in content, ads, films, and podcasts.",
    items: [
      "Browse Tracks",
      "License Music",
      "Mood-Based Search",
      "Genres",
      "Stems",
    ],
    image: image,
  },
  {
    title: (
      <>
        Content strategy{" "}
        <span className="font-serif lowercase italic text-[30px] leading-14">
          & delivery
        </span>{" "}
      </>
    ),
    description:
      "We plan and execute content with purpose — aligning creative direction, messaging, and distribution for maximum impact across channels.",
    items: [
      "Creative Direction",
      "Storyboarding",
      "Scripting",
      "Publishing",
      "Distribution",
    ],
    image: image,
  },
  {
    title: <>Post-production</>,
    description:
      "Our editors and motion designers bring projects to life with cinematic edits, seamless sound design, and captivating motion graphics.",
    items: [
      "Editing",
      "Color Grading",
      "Sound Design",
      "Motion Graphics",
      "Subtitles",
    ],
    image: image,
  },
];
