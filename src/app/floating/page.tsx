"use client";

import Image from "next/image";
import style from "./floating.module.scss";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "@/data";
import { useRef } from "react";
import gsap from "gsap";

export default function Floating() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const speed = 0.1;
  let xForce = 0;
  let yForce = 0;
  let requestAnimationFrameId = null;
  const easing = 0.3;
  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };
  const lerp = (start: number, end: number, amount: number) =>
    start * (1 - amount) + end * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {
      x: `+=${xForce}`,
      y: `+=${yForce}`,
    });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce > 0 || yForce > 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={style.main}
    >
      <div ref={plane1} className={style.plane}>
        <Image alt="image" src={image1} width={300} />
        <Image alt="image" src={image2} width={300} />
        <Image alt="image" src={image3} width={225} />
      </div>
      <div ref={plane2} className={style.plane}>
        <Image alt="image" src={image4} width={250} />
        <Image alt="image" src={image5} width={250} />
        <Image alt="image" src={image6} width={225} />
      </div>
      <div ref={plane3} className={style.plane}>
        <Image alt="image" src={image7} width={200} />
        <Image alt="image" src={image8} width={300} />
        <Image alt="image" src={image9} width={255} />
      </div>
      <div className="w-full h-full relative bg-black opacity-20 flex flex-col justify-center items-center">
        <h1 className="text-9xl text-white font-bold">CMMG</h1>
      </div>
    </main>
  );
}
