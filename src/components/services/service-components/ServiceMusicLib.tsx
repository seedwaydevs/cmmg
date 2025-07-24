import Image from "next/image";
import musicLibraryImg2 from "../../../public/pexels-stephendn-63703.jpg";
import musicLibraryImg1 from "../../../../public/CoverCollage.png";
import Link from "next/link";

const ServiceMusicLibrary = () => {
  return (
    <section
      id="1"
      className="flex flex-col lg:flex-row lg:items-center gap-10 py-10"
    >
      {/* Content Block */}
      <div className="flex-1 space-y-4">
        <p className="text-orange-600 font-semibold text-xl">01</p>
        <h2 className="text-3xl font-bold">Production Music Library</h2>
        <p className="text-lg text-gray-700 lg:max-w-4xl">
          We offer direct access to a global catalog of licensable music through
          our Music House International divison. From cinematic scores to
          ambient textures and uptempo commercial tracks, every piece is
          pre-cleared and ready to use — with support from our team to help you
          find the right sound.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Instant access to thousands of licensable tracks</li>
          <li>Pre-cleared and ready for commercial use</li>
          <li>Guided music supervision support if needed</li>
          <li>Global licensing via Music House International</li>
        </ul>
        <Link
          href="/"
          className="inline-block mt-4 bg-orange-600 text-white px-6 py-2 rounded-sm"
        >
          Browse
        </Link>
      </div>

      {/* Image Block */}
      <div className="flex-1 gap-4">
        <Image
          src={musicLibraryImg1}
          alt="Music Library Interface"
          className="rounded"
        />
      </div>
    </section>
  );
};

export default ServiceMusicLibrary;
