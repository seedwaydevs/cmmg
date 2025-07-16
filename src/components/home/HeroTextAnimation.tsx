import React from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const HeroTextAnimation = (props: Props) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const firstTextTextTwo = useRef(null);
  const secondTextTextTwo = useRef(null);
  const firstTextTextThree = useRef(null);
  const secondTextTextThree = useRef(null);
  const firstTextTextFour = useRef(null);
  const secondTextTextFour = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  let xTwoPercent = -100;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.35,
        onUpdate: (e) => {
          direction = e.direction * 1;
        },
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xTwoPercent >= 100) {
      xTwoPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    if (xTwoPercent < 0) {
      xTwoPercent = 100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    gsap.set(firstTextTextTwo.current, { xPercent: xTwoPercent });
    gsap.set(secondTextTextTwo.current, { xPercent: xTwoPercent });

    gsap.set(firstTextTextThree.current, { xPercent: xPercent });
    gsap.set(secondTextTextThree.current, { xPercent: xPercent });

    gsap.set(firstTextTextFour.current, { xPercent: xTwoPercent });
    gsap.set(secondTextTextFour.current, { xPercent: xTwoPercent });

    xPercent += 0.15 * direction;
    xTwoPercent -= 0.15 * direction;

    requestAnimationFrame(animation);
  };

  return (
    <div className="">
      <div className={`${styles.sliderContainer} top-0 lg:-top-9 absolute`}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText} className="text-[100px] lg:text-[140px]">
            <span className="text-orange-700">Video</span> Production.{" "}
          </p>
          <p ref={secondText} className="text-[100px] lg:text-[140px]">
            <span className="text-orange-700">Video</span> Production.{" "}
          </p>
        </div>
      </div>
      <div
        className={`${styles.sliderContainerTextTwo} top-[90px] lg:top-[90px] absolute`}
      >
        <div ref={slider} className={styles.sliderTwo}>
          <p ref={firstTextTextTwo} className="text-[100px] lg:text-[140px]">
            <span className="text-red-700">Film</span> Studios.{" "}
          </p>
          <p ref={secondTextTextTwo} className="text-[100px] lg:text-[140px]">
            <span className="text-red-700">Film</span> Studios.{" "}
          </p>
        </div>
      </div>
      <div
        className={`${styles.sliderContainerTextThree} top-[180px] lg:top-[215px] absolute`}
      >
        <div ref={slider} className={styles.slider}>
          <p ref={firstTextTextThree} className="text-[100px] lg:text-[140px]">
            <span className="text-green-700">Music</span> Production.{" "}
          </p>
          <p ref={secondTextTextThree} className="text-[100px] lg:text-[140px]">
            <span className="text-green-700">Music</span> Production.{" "}
          </p>
        </div>
      </div>
      <div
        className={`${styles.sliderContainerTextFour} top-[270px] lg:top-[345px] absolute`}
      >
        <div ref={slider} className={styles.sliderTwo}>
          <p ref={firstTextTextFour} className="text-[100px] lg:text-[130px]">
            <span className="text-blue-700">Content</span> Production.{" "}
          </p>
          <p ref={secondTextTextFour} className="text-[100px] lg:text-[130px]">
            <span className="text-blue-700">Content</span> Production.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroTextAnimation;
