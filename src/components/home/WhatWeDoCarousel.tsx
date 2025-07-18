import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import image from "../../../public/prodco.jpg";
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
        Brand{" "}
        <span className="font-serif lowercase italic text-[30px] leading-14">
          and
        </span>{" "}
        content
      </>
    ),
    description:
      "From careful iconographic constructions to purposeful material generation, my method is to instill every endeavor with a unique identity and an intriguing narrative.",
    items: ["Logo", "Branding", "Packaging", "Mockups", "Flyers"],
    image: image, // replace with actual image
  },
  {
    title: <>Digital product design</>,
    description:
      "Crafting seamless and intuitive digital experiences — from wireframes to interactive prototypes — that resonate with users and deliver results.",
    items: [
      "UI Design",
      "UX Research",
      "Wireframes",
      "Prototypes",
      "Design Systems",
    ],
    image: image,
  },
  {
    title: <>Visual storytelling</>,
    description:
      "Translating concepts into compelling visuals using photography, illustration, and motion to amplify the narrative behind every brand.",
    items: [
      "Illustration",
      "Photography",
      "Animation",
      "Motion Graphics",
      "Storyboards",
    ],
    image: image,
  },
  {
    title: (
      <>
        Strategy{" "}
        <span className="font-serif lowercase italic text-[30px] leading-14">
          and
        </span>{" "}
        identity
      </>
    ),
    description:
      "Defining the essence of a brand through research, positioning, and visual language to ensure consistency and purpose across every touchpoint.",
    items: [
      "Research",
      "Positioning",
      "Voice & Tone",
      "Visual Systems",
      "Brand Guidelines",
    ],
    image: image,
  },
  {
    title: <>Web development</>,
    description:
      "Transforming design into performant, accessible, and scalable websites using modern technologies for a seamless user experience.",
    items: [
      "Frontend Dev",
      "Backend Dev",
      "CMS Integration",
      "SEO Optimization",
      "Deployment",
    ],
    image: image,
  },
];
