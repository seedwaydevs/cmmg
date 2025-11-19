import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function CommercialHero({
  image,
}: {
  image: string | StaticImageData;
}) {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Recording artist in professional studio"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Recording artist in professional studio"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Frosted Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-2xl bg-white/20 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium tracking-wide">
                  COMMERCIAL RELEASES
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                  Commercial
                  <span className="text-orange-500 block">Music</span>
                </h1>

                <p className="text-lg lg:text-lg text-gray-200 md:leading-snug max-w-lg font-light">
                  Premium commercial releases from our signed artists and
                  established musicians. Discover the latest singles, albums,
                  and exclusive tracks ready for streaming and purchase.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#"
                  className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5"
                >
                  Explore Releases
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <Link
                  href="www.library.cmmg.co.za"
                  className="group inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
                >
                  Production Library
                  <svg
                    className="w-5 h-5 transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </Link>
              </div>

              {/* Stats */}
              <div className="hidden md:grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">
                    Artists
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">
                    Releases
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">1M+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">
                    Streams
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Featured Album/Artist */}
            <div className="hidden lg:flex justify-end">
              <div className="relative group">
                {/* Album Cover */}
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={image}
                    alt="Featured album cover"
                    fill
                    className="object-cover"
                    sizes="320px"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-400 transition-colors">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Album Info Card */}
                <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 min-w-64">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Latest Release
                  </h3>
                  <p className="text-orange-400 font-medium mb-2">Yandi Sibi</p>
                  <p className="text-gray-300 text-sm">"NJALO" • 2025</p>

                  {/* Waveform Visualization */}
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-orange-500 rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 20 + 10}px`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Music Notes */}
                <div className="absolute -top-4 -right-4 w-8 h-8 text-orange-400 animate-bounce opacity-60">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>

                <div
                  className="absolute -bottom-16 -right-8 w-6 h-6 text-orange-300 animate-bounce opacity-40"
                  style={{ animationDelay: "1s" }}
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm font-medium tracking-wide">
            DISCOVER MORE
          </span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
