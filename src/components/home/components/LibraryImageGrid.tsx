import React from "react";
import image from "../../../../public/images/CUT 3921 MIST TECHNO.webp";
import image12 from "../../../../public/images/CUT 3947.webp";
import image3 from "../../../../public/images/CUT 3948.webp";
import image4 from "../../../../public/images/CUT 3952.webp";
import image5 from "../../../../public/images/CUT 3991 FLOAT ELECTRONIC DANCE MUSIC.webp";
import image6 from "../../../../public/images/CUT 4006.webp";
import image7 from "../../../../public/images/CUT 4008.webp";
import image8 from "../../../../public/images/CUT 4060 INVOKE.webp";
import image9 from "../../../../public/images/CUT 4062 MIRRORS.webp";
import image10 from "../../../../public/images/CUT 4067.webp";
import image11 from "../../../../public/images/CUT 4068.webp";
import image2 from "../../../../public/images/Live Culture-10 (1).webp";
import Image from "next/image";
type Props = {};

const imageUrls = [
  image,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  //   image10,
  //   image11,
  //   image12,
];

const LibraryImageGrid = (props: Props) => {
  return (
    <div className="grid grid-cols-3 ">
      {imageUrls.map((url, index) => (
        <div key={index} className="aspect-square overflow-hidden ">
          <Image
            src={url}
            alt={`Library image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default LibraryImageGrid;
