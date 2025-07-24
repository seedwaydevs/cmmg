import Image from "next/image";
import studioImg1 from "../../../../public/pexels-clam-lo-1782448-3469712.jpg";

const ServiceStudioHire = () => {
  return (
    <section
      id="3"
      className="flex flex-col lg:flex-row lg:items-center gap-10 py-10"
    >
      {/* Content */}
      <div className="flex-1 space-y-4">
        <p className="text-orange-600 font-semibold text-xl">03</p>
        <h2 className="text-3xl font-bold">Studio Hire</h2>
        <p className="text-lg text-gray-700">
          Need a space to record, mix, create, or collaborate? Our
          professional-grade studios are soundproofed, solar-backed, and built
          for all types of production — from songwriting and voiceover to live
          sessions and late-night edits.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Acoustically treated recording booths</li>
          <li>24/7 access with solar backup</li>
          <li>Pro Tools, Logic, Cubase, FL Studio, and more</li>
          <li>Private office space and client lounge</li>
          <li>High-speed fibre internet</li>
          <li>Engineer available on request</li>
        </ul>
        <a
          href="/book"
          className="inline-block mt-4 bg-orange-600 text-white px-6 py-2 rounded-sm"
        >
          Book a Studio
        </a>
      </div>

      {/* Image */}
      <div className="flex-1 grid grid-cols-1 gap-4">
        <Image src={studioImg1} alt="Studio interior" className="rounded" />
      </div>
    </section>
  );
};

export default ServiceStudioHire;
