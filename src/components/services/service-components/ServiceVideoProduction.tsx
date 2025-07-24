import Image from "next/image";
import videoProdImg1 from "../../../../public/prodco.jpg";

const ServiceVideoProduction = () => {
  return (
    <section
      id="4"
      className="flex flex-col lg:flex-row lg:items-center gap-10 py-10"
    >
      {/* Content */}
      <div className="flex-1 space-y-4">
        <p className="text-orange-600 font-semibold text-xl">04</p>
        <h2 className="text-3xl font-bold">Video Production</h2>
        <p className="text-lg text-gray-700">
          From branded content and music videos to short films and social
          campaigns, we bring your vision to life with full-service video
          production — concept to delivery. Our team handles creative direction,
          filming, editing, and everything in between.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Creative development and scripting</li>
          <li>On-location and in-studio shoots</li>
          <li>Music video, promo, and branded content</li>
          <li>Multi-cam setup and lighting</li>
          <li>Editing, color grading, and post</li>
          <li>Final delivery for web, TV, or cinema</li>
        </ul>
        <a
          href="/contact"
          className="inline-block mt-4 bg-orange-600 text-white px-6 py-2 rounded-sm"
        >
          Contact Us
        </a>
      </div>

      {/* Image */}
      <div className="flex-1 grid grid-cols-1 gap-4">
        <Image
          src={videoProdImg1}
          alt="On set with camera crew"
          className="rounded"
        />
      </div>
    </section>
  );
};

export default ServiceVideoProduction;
