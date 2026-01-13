"use client";

import Image from "next/image";
import React from "react";

const ContactPage: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How to use this component?",

      answer:
        "To use this component, you need to import it in your project and use it in your JSX code. Here's an example of how to use it:",
    },

    {
      question: "Are there any other components available?",

      answer:
        "Yes, there are many other components available in this library. You can find them in the 'Components' section of the website.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-50 py-10 sm:py-10 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 items-center">
            {/* Left: Content */}
            <div className="order-1 lg:order-1">
              <p className="text-green-600 text-xl sm:text-3xl font-bold tracking-widest mb-3">
                Who we are ?
              </p>
              <div className="flex justify-start mb-3">
                <div className="w-20 h-1 bg-green-400 rounded"></div>
              </div>
              <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight mb-3">
                We provide high quality services -
              </h1>

              <p className="text-slate-600 text-md text-justify mb-3">
                Sed ullamcorper dui at risus viverra, nec cursus leo
                ullamcorper. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos congue dui nec dui
                lobortis maximus.
              </p>

              <p className="text-slate-600 text-md text-justify">
                Curabitur pretium, libero vitae pharetra rhoncus, tellus urna
                auctor orci, eu dictum diam diam nec neque. Pellentesque.
              </p>
            </div>
            {/* Right: Image */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-2">
              <div className="lg:max-w-md max-w-md">
                <Image
                  src="/images/w2.avif"
                  alt="Team working on laptop"
                  width={620}
                  height={580}
                  className="rounded-2xl object-cover shadow-xl mt-4"
                  priority
                />
              </div>
            </div>
          </div>
          <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition-colors">
            Contact Us
            <span>→</span>
          </button>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-50 py-8 sm:py-6 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
            {/* Image Section */}
            <div className="flex items-center justify-start order-2 lg:order-1">
              <div className="w-full max-w-md lg:max-w-lg">
                <Image
                  src="/images/f1.jpg"
                  alt="Contact Page Image"
                  width={620}
                  height={580}
                  className="rounded-2xl object-cover shadow-xl"
                  priority
                />
              </div>
            </div>

            {/* FAQ Section */}
            <div className="order-1 lg:order-2">
              <div className="mb-4 sm:mb-4 lg:mb-4">
                <p className="text-green-600 text-md sm:text-3xl font-bold tracking-widest mb-3">
                  FAQ&apos;s
                </p>
                <div className="flex justify-start mb-2">
                  <div className="w-20 h-1 bg-green-400 rounded"></div>
                </div>

                <h2 className="text-3xl sm:text-3xl lg:text-3xl font-bold text-gray-900 leading-tight mb-2">
                  Looking for answer?
                </h2>
              </div>

              <div className="space-y-1 sm:space-y-1">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-green-400 p-3 rounded-xl py-2 sm:py-3 transition-all duration-300"
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
                      className="w-full flex items-center justify-between gap-3 text-start hover:text-indigo-600 transition-colors duration-200"
                      aria-expanded={openIndex === index}
                    >
                      <h3 className="cursor-pointer  text-sm sm:text-md lg:text-lg font-semibold text-black flex-1">
                        {faq.question}
                      </h3>

                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`shrink-0 text-black text-bold transition-transform duration-500 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === index ? "opacity-100" : "opacity-0 hidden"
                      }`}
                    >
                      <p className="text-slate-700 text-sm sm:text-base lg:text-base leading-relaxed pt-3 sm:pt-3 pr-8">
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
