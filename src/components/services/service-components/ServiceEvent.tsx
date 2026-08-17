import Image from "next/image";
import {
  Music,
  Users,
  Video,
  Headphones,
  Radio,
  ArrowRight,
  Zap,
  PartyPopper,
} from "lucide-react";
import eventImg1 from "../../../../public/prodco.jpg";
import Link from "next/link";

const services = [
  {
    icon: Headphones,
    title: "Sound Engineering",
    description: "Sound system setup and engineering",
  },
  {
    icon: Music,
    title: "DJs & MCs",
    description: "DJs and event MCs",
  },
  {
    icon: Video,
    title: "Event Coverage",
    description: "Camera crew for event coverage",
  },
  {
    icon: Zap,
    title: "Tech Support",
    description: "On-site tech support",
  },
  {
    icon: Radio,
    title: "Live Recording",
    description: "Live recording and audio capture",
  },
];

const eventTypes = [
  "Corporate Events",
  "Concerts & Shows",
  "Brand Activations",
  "Conferences",
  "Private Parties",
];

const ServiceEventEntertainment = () => {
  return (
    <section
      id="5"
      className={`font-sans py-20 bg-gradient-to-br from-purple-50/30 via-white to-indigo-50/20 relative overflow-hidden`}
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-100 to-transparent rounded-full blur-2xl opacity-20"></div>

      <div className="relative w-[90%] lg:w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16">
          {/* Content Block */}
          <div className="flex-1 space-y-8">
            {/* Service Number & Badge */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 text-white text-2xl font-black rounded-2xl shadow-lg">
                05
              </div>
              <div className="inline-flex items-center gap-2 bg-white border border-purple-200 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <PartyPopper className="w-4 h-4" />
                Live Events
              </div>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Event Sound &
                <br />
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Entertainment
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              From corporate events to concerts and activations, we provide{" "}
              <span className="text-purple-500 font-semibold">
                full technical and entertainment support
              </span>
              . Our team manages professional sound systems, DJs, camera ops,
              and engineers to help you deliver an{" "}
              <span className="text-indigo-500 font-semibold">
                unforgettable live experience
              </span>
              .
            </p>

            {/* Event Types */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
              <h4 className="font-semibold text-gray-900 mb-3">
                We Cover All Event Types
              </h4>
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((type, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-purple-600 text-sm font-medium rounded-full border border-purple-200"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600 rounded-lg group-hover:from-purple-200 group-hover:to-indigo-200 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {service.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Plan Your Event
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Event Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Events</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Live</div>
                <div className="text-sm text-gray-600">Recording</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Full</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Block */}
          <div className="flex-1 relative">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={eventImg1}
                  alt="Live event with professional lighting and sound setup"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Live Event Status */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-gray-700">
                    Live Event
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-500" />
                  <span className="text-xs text-gray-600">250 Attendees</span>
                </div>
              </div>

              {/* Sound System Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      Pro Audio
                    </p>
                    <p className="text-xs text-gray-500">Full Coverage</p>
                  </div>
                </div>
              </div>

              {/* Floating Audio Visualizer */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-8 bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg border border-white/50">
                <div className="flex items-end gap-1 h-12">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-purple-500 to-indigo-500 w-1 rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 80 + 20}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    ></div>
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-1 text-center">
                  Live Mix
                </p>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-2xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-15 -z-10"></div>
            </div>

            {/* Equipment List */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-4">
                Professional Equipment Available
              </h4>
              <div className="space-y-2">
                {[
                  "Line Array Sound Systems",
                  "Wireless Microphone Systems",
                  "LED Lighting Rigs",
                  "Multi-Camera Setup",
                  "Live Streaming Equipment",
                ].map((equipment, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{equipment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceEventEntertainment;
