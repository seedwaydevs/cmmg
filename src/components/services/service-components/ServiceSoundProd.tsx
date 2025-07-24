import Image from "next/image";
import soundProdImg1 from "../../../../public/pexels-clam-lo-1782448-3469712.jpg";

const ServiceSoundProduction = () => {
  return (
    <section
      id="2"
      className="flex flex-col lg:flex-row lg:items-center gap-10 py-10"
    >
      {/* Content */}
      <div className="flex-1 space-y-4">
        <p className="text-orange-600 font-semibold text-xl">02</p>
        <h2 className="text-3xl font-bold">Sound Production</h2>
        <p className="text-lg text-gray-700">
          From concept to final master, our sound department handles the full
          spectrum of audio creation. Whether you're recording a jingle,
          producing a podcast, or mixing for film, our in-house engineers
          deliver crisp, broadcast-ready sound that meets the highest creative
          and technical standards.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Original music composition and arrangement</li>
          <li>Final mix and mastering for film, TV, and ads</li>
          <li>Radio jingle writing, VO recording, and post</li>
          <li>Podcast production (recording, editing, sound design)</li>
          <li>Voiceover sessions and dubbing</li>
          <li>Audio clean-up and restoration</li>
        </ul>
        <a
          href="/book"
          className="inline-block mt-4 bg-orange-600 text-white px-6 py-2 rounded-sm"
        >
          Book Now
        </a>
      </div>

      {/* Images */}
      <div className="flex-1 grid grid-cols-1 gap-4">
        <Image
          src={soundProdImg1}
          alt="Recording session"
          className="rounded"
        />
      </div>
    </section>
  );
};

export default ServiceSoundProduction;
