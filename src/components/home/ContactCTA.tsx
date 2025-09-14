import React from "react";
import { Schibsted_Grotesk } from "next/font/google";
import { Mail, Zap, ArrowRight, Send } from "lucide-react";

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const ContactCTA = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
          <h1
            className={`${sted.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-neutral-800 uppercase tracking-tight text-center break-words`}
          >
            Let's Work Together
            <span className="text-orange-500">.</span>
          </h1>
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
            <Send className="text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Card */}
          <div className="backdrop-blur-sm bg-orange-600/10 border border-white/10 rounded-lg p-4 sm:p-6 lg:p-8 hover:scale-105 transition-all duration-300 hover:border-orange-400/30 group">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              {/* Icon */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <Mail className="text-white w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left">
                <div>
                  <h3
                    className={`${sted.className} text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-800 tracking-tight break-words`}
                  >
                    Get In Touch
                  </h3>
                  <p
                    className={`${sted.className} text-sm sm:text-base text-neutral-800 font-light break-words`}
                  >
                    Send us an email and let's discuss your project
                  </p>
                </div>

                {/* Email button */}
                <div className="group/email">
                  <a
                    href="mailto:info@cmmg.co.za"
                    className="inline-flex items-center gap-2 sm:gap-3 backdrop-blur-sm bg-orange-500 hover:bg-orange-500/20 border border-orange-400/20 px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ArrowRight className="text-neutral-100 w-4 h-4 sm:w-5 sm:h-5 group-hover/email:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                    <span
                      className={`${sted.className} text-orange-100 font-semibold text-sm sm:text-base lg:text-lg tracking-wide break-all`}
                    >
                      info@cmmg.co.za
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Response Card */}
          <div className="backdrop-blur-sm bg-orange-600/10 border border-white/10 rounded-lg p-4 sm:p-6 lg:p-8 hover:scale-105 transition-all duration-300 hover:border-orange-400/30 group">
            <div className="space-y-4 sm:space-y-6">
              {/* Header with icon */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <Zap className="text-white w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="backdrop-blur-sm bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-400/20">
                  <span
                    className={`${sted.className} text-neutral-800 font-semibold uppercase tracking-wide text-xs break-words`}
                  >
                    Fast Response
                  </span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
                <h3
                  className={`${sted.className} text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-800 tracking-tight break-words`}
                >
                  Quick Responses
                </h3>
                <p
                  className={`${sted.className} text-sm sm:text-base lg:text-lg text-neutral-500 font-light leading-relaxed break-words`}
                >
                  We're always ready to listen to your ideas and discuss how we
                  can bring your creative vision to life. Expect to hear back
                  from us within 24 hours.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2 sm:space-y-3 pt-2 text-neutral-800 text-sm sm:text-base">
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3 flex-shrink-0">•</span>
                  <span className="break-words">24-hour response time</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3 flex-shrink-0">•</span>
                  <span className="break-words">Free project consultation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-500 mr-3 flex-shrink-0">•</span>
                  <span className="break-words">
                    Tailored creative solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="backdrop-blur-sm bg-orange-500 border border-orange-400/20 rounded-lg p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <p
              className={`${sted.className} text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-white/80 leading-tight mb-4 sm:mb-6 break-words`}
            >
              Ready to create something extraordinary? Whether it's a custom
              score, brand anthem, or full production suite — we're here to make
              it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="mailto:info@cmmg.co.za"
                className={`${sted.className} backdrop-blur-sm bg-orange-500/10 hover:bg-orange-500/20 border border-orange-400/20 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-orange-100 text-base sm:text-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 break-words min-w-0`}
              >
                <span className="truncate">Start Your Project</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </a>
              <a
                href="tel:+27123456789"
                className={`${sted.className} backdrop-blur-sm bg-white/5 hover:bg-white/10 border border-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white text-base sm:text-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 break-words min-w-0`}
              >
                <span className="truncate">Call Us</span>
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
