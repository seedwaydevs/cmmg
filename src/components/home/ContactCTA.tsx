import { Send, ArrowRight, Mail, Zap } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="w-[90%] lg:w-[80%] mx-auto space-y-10">
        {/* Main heading */}
        <div className="flex flex-row justify-center items-center gap-4 text-center">
          <h1
            className={`  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-neutral-800 uppercase tracking-tight`}
          >
            Let's Work Together<span className="text-orange-500">.</span>
          </h1>
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
            <Send className="text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left CTA */}
          <div className="text-center">
            <div className="backdrop-blur-sm bg-orange-500 border border-orange-400/20 rounded-tl-xl rounded-bl-xl p-6 sm:p-8 w-full mx-auto h-full flex flex-col justify-between">
              <p
                className={`  text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-white/80 leading-tight mb-6`}
              >
                Ready to create something extraordinary? Whether it's a custom
                score, brand anthem, or full production suite — we're here to
                make it happen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-auto">
                <a
                  href="mailto:info@cmmg.co.za"
                  className={`  backdrop-blur-sm bg-orange-500/10 hover:bg-orange-500/20 border border-orange-400/20 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-orange-100 text-base sm:text-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2`}
                >
                  <span className="truncate">Start Your Project</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Card */}
          <div className="w-full backdrop-blur-sm bg-neutral-900 rounded-tr-xl rounded-br-xl border border-transparent hover:border-orange-400/30 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
            <div className="flex flex-col flex-1">
              {/* Top Content */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 sm:p-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <Mail className="text-white w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
                </div>
                <div className="space-y-3 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-100 tracking-tight">
                    Get In Touch
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-200 font-light">
                    Send us an email and let's discuss your project
                  </p>
                </div>
              </div>

              {/* Email and Call buttons filling remaining height */}
              <div className="grid grid-cols-1 sm:grid-cols-2 flex-1 border-t border-white/10">
                <a
                  href="mailto:info@cmmg.co.za"
                  className="inline-flex flex-row items-center justify-center gap-3 bg-neutral-900 hover:bg-orange-500/20 border-b sm:border-b-0 sm:border-r border-white/10 px-6 py-8 transition-all duration-300"
                >
                  <ArrowRight className="text-neutral-100 w-5 h-5 flex-shrink-0" />
                  <span
                    className={`  text-neutral-100 font-semibold text-base sm:text-lg tracking-wide break-all text-center`}
                  >
                    info@cmmg.co.za
                  </span>
                </a>

                <a
                  href="tel:+27617889902"
                  className={`  inline-flex flex-row items-center justify-center rounded-br-2xl gap-2 bg-neutral-900 hover:bg-orange-500/20 px-6 py-8 text-neutral-100 text-base sm:text-lg font-semibold tracking-wide transition-all duration-300`}
                >
                  <span className="truncate">Call Us</span>
                  <Zap className="w-5 h-5 flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
