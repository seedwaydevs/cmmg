import React from "react";
import { Schibsted_Grotesk } from "next/font/google";
import { Mail, Zap, ArrowRight, Send } from "lucide-react";

const sted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const ContactCTA = () => {
  return (
    <section className="w-full py-16">
      <div className="w-[90%] mx-auto">
        {/* Main heading */}
        <div className="flex justify-center items-center gap-6 mb-16">
          <h1
            className={`${sted.className} text-6xl lg:text-8xl font-black text-neutral-800 uppercase tracking-tight text-center`}
          >
            Let's Work Together
            <span className="text-orange-500">.</span>
          </h1>
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
            <Send className="text-white w-8 h-8" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Card */}
          <div className="flex justify-center backdrop-blur-sm bg-orange-600/10 border border-white/10 rounded-lg p-8 hover:scale-105 transition-all duration-300 hover:border-orange-400/30 group">
            <div className="flex items-center gap-6">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <Mail className="text-white w-10 h-10" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3
                    className={`${sted.className} text-2xl lg:text-3xl font-bold text-neutral-800 tracking-tight`}
                  >
                    Get In Touch
                  </h3>
                  <p
                    className={`${sted.className} text-neutral-800 font-light`}
                  >
                    Send us an email and let's discuss your project
                  </p>
                </div>

                {/* Email button */}
                <div className="group/email">
                  <a
                    href="mailto:info@cmmg.co.za"
                    className="inline-flex items-center gap-3 backdrop-blur-sm bg-orange-500 hover:bg-orange-500/20 border border-orange-400/20 px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ArrowRight className="text-neutral-100 w-5 h-5 group-hover/email:translate-x-1 transition-transform duration-300" />
                    <span
                      className={`${sted.className} text-orange-100 font-semibold text-lg tracking-wide`}
                    >
                      info@cmmg.co.za
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Response Card */}
          <div className="backdrop-blur-sm bg-orange-600/10 border border-white/10 rounded-lg p-8 hover:scale-105 transition-all duration-300 hover:border-orange-400/30 group">
            <div className="space-y-6">
              {/* Header with icon */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="text-white w-8 h-8" />
                </div>
                <div className="backdrop-blur-sm bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-400/20">
                  <span
                    className={`${sted.className} text-neutral-800 font-semibold uppercase tracking-wide text-xs`}
                  >
                    Fast Response
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3
                  className={`${sted.className} text-2xl lg:text-3xl font-bold text-neutral-800 tracking-tight`}
                >
                  Quick Responses
                </h3>
                <p
                  className={`${sted.className} text-lg text-neutral-500 font-light leading-relaxed`}
                >
                  We're always ready to listen to your ideas and discuss how we
                  can bring your creative vision to life. Expect to hear back
                  from us within 24 hours.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 pt-2 text-neutral-800">
                <div className="flex items-center">
                  <span className="text-orange-500 mr-3">•</span>
                  24-hour response time
                </div>
                <div className="flex items-center">
                  <span className="text-orange-500 mr-3">•</span>
                  Free project consultation
                </div>
                <div className="flex items-center">
                  <span className="text-orange-500 mr-3">•</span>
                  Tailored creative solutions
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-sm bg-orange-500 border border-orange-400/20 rounded-lg p-8 max-w-4xl mx-auto">
            <p
              className={`${sted.className} text-2xl lg:text-3xl font-light text-white/80 leading-tight mb-6`}
            >
              Ready to create something extraordinary? Whether it's a custom
              score, brand anthem, or full production suite — we're here to make
              it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@cmmg.co.za"
                className={`${sted.className} backdrop-blur-sm bg-orange-500/10 hover:bg-orange-500/20 border border-orange-400/20 px-8 py-4 rounded-lg text-orange-100 text-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2`}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+27123456789"
                className={`${sted.className} backdrop-blur-sm bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-lg text-white text-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2`}
              >
                Call Us
                <Zap className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
