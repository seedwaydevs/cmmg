import { useEffect, useRef } from "react";
import pepsi from "../../assets/pepsi.png";
import coke from "../../assets/coke.png";
import atos from "../../assets/atos.png";
import meltwater from "../../assets/meltwater.png";
import kafka from "../../assets/kafka.png";
import amazon from "../../assets/amazonmus.png";
import Image from "next/image";

const TrustCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let startPosition = 0;

    const animate = () => {
      startPosition -= 1; // Adjust the speed by changing this value
      if (startPosition <= -carousel.scrollWidth / 2) {
        startPosition = 0; // Reset position to start for seamless loop
      }
      carousel.style.transform = `translateX(${startPosition}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-full bg-[#830000] overflow-hidden flex flex-col items-center justify-center py-10 h-[30vh] md:h-[25vh]">
      {" "}
      {/* Added items-center and justify-center */}
      <div className="w-[90%] mx-auto py-5">
        <p className="text-xl text-white font-thin">They have trusted us.</p>
      </div>
      <div className="w-full py-5">
        <div className="flex w-[200%] whitespace-nowrap" ref={carouselRef}>
          {/* Wrap content twice for seamless loop */}
          <div className="flex gap-10 text-white items-center justify-center h-full">
            {" "}
            {/* Added items-center and justify-center */}
            {[pepsi, atos, kafka, meltwater, coke, amazon].map(
              (image, index) => (
                <span key={`image1-${index}`} className="carousel-item">
                  <Image
                    src={image}
                    alt=""
                    className="carousel-image h-[50px] object-contain"
                  />{" "}
                  {/* Adjusted height for better centering */}
                </span>
              )
            )}
            {/* Duplicate the items to create a seamless loop effect */}
            {[pepsi, atos, kafka, meltwater, coke, amazon].map(
              (image, index) => (
                <span key={`image2-${index}`} className="carousel-item">
                  <Image
                    src={image}
                    alt=""
                    className="carousel-image h-[50px] object-contain"
                  />
                </span>
              )
            )}
            {[pepsi, atos, kafka, meltwater, coke, amazon].map(
              (image, index) => (
                <span key={`image3-${index}`} className="carousel-item">
                  <Image
                    src={image}
                    alt=""
                    className="carousel-image h-[50px] object-contain"
                  />
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustCarousel;
