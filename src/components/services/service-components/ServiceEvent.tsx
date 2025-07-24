import Image from "next/image";
import eventImg1 from "../../../../public/prodco.jpg";

const ServiceEventEntertainment = () => {
  return (
    <section
      id="5"
      className="flex flex-col lg:flex-row lg:items-center gap-10 py-10"
    >
      {/* Content */}
      <div className="flex-1 space-y-4">
        <p className="text-orange-600 font-semibold text-xl">05</p>
        <h2 className="text-3xl font-bold">Event Sound & Entertainment</h2>
        <p className="text-lg text-gray-700">
          From corporate events to concerts and activations, we provide full
          technical and entertainment support. Our team manages professional
          sound systems, DJs, camera ops, and engineers to help you deliver an
          unforgettable live experience.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Sound system setup and engineering</li>
          <li>DJs and event MCs</li>
          <li>Camera crew for event coverage</li>
          <li>On-site tech support</li>
          <li>Live recording and audio capture</li>
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
          src={eventImg1}
          alt="Live event with lighting and sound"
          className="rounded"
        />
      </div>
    </section>
  );
};

export default ServiceEventEntertainment;
