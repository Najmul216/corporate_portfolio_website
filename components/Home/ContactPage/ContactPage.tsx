"use client";

import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const ContactPage: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur",
      answer:
        "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur",
      answer:
        "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur",
      answer:
        "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences.",
    },
  ];

  return (
    <div className="w-full">
      {/* ============ HERO SECTION ============ */}
      <section className="bg-white px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-12 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center md:mr-8 md:ml-8">
            {/* Left: Image */}
            <div className="flex justify-center order-1 md:order-1">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
                <Image
                  src="/images/w2.avif"
                  alt="Team working together"
                  width={610}
                  height={570}
                  className="w-full h-auto rounded-2xl md:rounded-3xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                  priority
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-2 md:order-2">
              <p className="text-green-600 text-xs sm:text-sm md:text-xl font-bold tracking-widest uppercase mb-2 sm:mb-3 md:mb-4">
                Who we are ?
              </p>

              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 md:mb-6">
                We provide high quality
                <br className="hidden sm:block" />
                Articles & blogs
              </h1>

              <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed mb-3 sm:mb-3 text-justify">
                Sed ullamcorper dui at risus viverra, nec cursus leo
                ullamcorper. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos congue dui nec dui
                lobortis maximus.
              </p>

              <p className="text-sm sm:text-base md:text-base text-slate-600 leading-relaxed mb-6 sm:mb-8 text-justify">
                Curabitur pretium, libero vitae pharetra rhoncus, tellus urna
                auctor orci, eu dictum diam diam nec neque. Pellentesque.
              </p>

              <button className="w-full sm:w-auto bg-green-500 hover:bg-green-00 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg md:rounded-xl flex items-center justify-center sm:justify-start gap-2 transition-colors duration-200">
                Contact Us
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section className="bg-white px-4 sm:px-4 md:px-8 py-12 sm:py-12 md:py-16 lg:py-12 ">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 mb-6 bg-white/90 backdrop-blur-lg md:mr-8 md:ml-8"
            style={{
              backgroundImage: "url('/images/bg12.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-start">
              {/* Left: Title and CTA */}
              <div className="flex flex-col justify-start">
                <p className="text-green-500 text-md sm:text-xl font-bold tracking-widest mb-3 sm:mb-4">
                  OUR FAQ&apos;s
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                  Frequently Asked
                  <br />
                  Questions
                </h2>
              </div>

              {/* Right: FAQ Accordion */}
              <div className="space-y-4 sm:space-y-5 md:space-y-5">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-4 sm:pb-5 md:pb-6 last:border-b-0 last:pb-0 group"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      onKeyPress={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setOpenIndex(openIndex === index ? null : index);
                        }
                      }}
                      className="w-full flex items-start justify-between gap-4 text-left transition-opacity duration-200 hover:opacity-70"
                      aria-expanded={openIndex === index}
                    >
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 leading-relaxed flex-1 pt-0.5">
                        {faq.question}
                      </h3>

                      <FaPlus
                        height={28}
                        width={28}
                        className={`shrink-0 text-gray-900 mt-2 bold transition-transform duration-500 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === index
                          ? "max-h-96 mt-3 sm:mt-4"
                          : "max-h-0"
                      }`}
                    >
                      <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
