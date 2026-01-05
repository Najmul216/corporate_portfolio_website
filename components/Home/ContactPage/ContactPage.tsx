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

    {
      question: "Are components responsive?",

      answer:
        "Yes, all components are responsive and can be used on different screen sizes.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-18 items-center">
            {/* Left: Image */}
            <div className="order-1 lg:order-1">
              <p className="text-green-600 text-md sm:text-2xl font-bold tracking-widest mb-3">
                Who we are ?
              </p>
              <div className="flex justify-start mb-2">
                <div className="w-20 h-1 bg-green-400 rounded"></div>
              </div>
              <h1 className="text-3xl sm:text-3xl lg:text-3xl font-bold text-gray-900 leading-tight mb-2">
                We provide high quality services -
              </h1>

              <p className="text-slate-600 text-base leading-relaxed mb-2">
                Sed ullamcorper dui at risus viverra, nec cursus leo
                ullamcorper. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos congue dui nec dui
                lobortis maximus.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                Curabitur pretium, libero vitae pharetra rhoncus, tellus urna
                auctor orci, eu dictum diam diam nec neque. Pellentesque.
              </p>
            </div>
            {/* Right: Content */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-2">
              <div className="w-full max-w-md lg:max-w-lg">
                <Image
                  src="/images/w1.jpg"
                  alt="Team working on laptop"
                  width={620}
                  height={580}
                  className="rounded-2xl object-cover shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Authors Section */}
      <section className="bg-gray-100 py-12 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                <p className="text-green-600 text-md sm:text-2xl font-bold tracking-widest mb-3">
                  FAQ&apos;s
                </p>
                <div className="flex justify-start mb-2">
                  <div className="w-20 h-1 bg-green-400 rounded"></div>
                </div>

                <h2 className="text-3xl sm:text-3xl lg:text-3xl font-bold text-gray-900 leading-tight mb-2">
                  Looking for answer?
                </h2>
              </div>

              <div className="space-y-1 sm:space-y-2">
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
                      className="w-full flex items-center justify-between gap-2 text-start hover:text-indigo-600 transition-colors duration-200"
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
