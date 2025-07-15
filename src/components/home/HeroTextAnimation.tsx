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

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    xPercent += 0.15 * direction;

    requestAnimationFrame(animation);
  };
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <p ref={firstText}>
          <span className="text-orange-700">Video</span> Production.{" "}
        </p>
        <p ref={secondText}>
          <span className="text-orange-700">Video</span> Production.{" "}
        </p>
      </div>
    </div>
  );
};

export default HeroTextAnimation;
