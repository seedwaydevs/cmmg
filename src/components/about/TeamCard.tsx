// components/TeamCard.tsx
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaXTwitter } from "react-icons/fa6";

type Props = {
  image: any;
  name: string;
  position: string;
  font: any;
};

const TeamCard = ({ image, name, position, font }: Props) => {
  const [first, ...last] = name.split(" ");
  return (
    <div className="space-y-3">
      <div className="h-80 sm:h-[450px] lg:h-[500px] rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={name}
          className="rounded-xl w-full h-full object-cover object-top"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className={`${font.className} text-2xl sm:text-3xl uppercase`}>
          <span className="font-serif italic lowercase">{first}</span>{" "}
          {last.join(" ")}
        </p>

        <div className="flex items-center space-x-3">
          <Link href="/">
            <FaFacebookF className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
          <Link href="/">
            <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
          <Link href="/">
            <FaXTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
        </div>
      </div>

      <p className="text-gray-600">{position}</p>
    </div>
  );
};

export default TeamCard;
