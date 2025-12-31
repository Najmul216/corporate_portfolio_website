"use client";

import React from "react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";

const Portfolio = () => {
  const testimonials = [
    {
      id: 1,
      name: "Khalid Mansoor",
      position: "PROCUREMENT HEAD",
      rating: 5,
      feedback:
        "Value FCL for their transparency and standard MEP works. Their focus on delivering results makes them a top-tier partner.",
      avatar: "/images/avatar1.png",
    },
    {
      id: 2,
      name: "Engr. Ahmed Al-Rashid",
      position: "PROJECT MANAGER",
      rating: 5,
      feedback:
        "FCL's commitment to quality and client satisfaction is evident in their work. They are our most trusted partner for rapid manpower deployment.",
      avatar: "/images/avatar2.png",
    },
    {
      id: 3,
      name: "MD. Ahsan Abdullah",
      position: "OPERATIONS DIRECTOR",
      rating: 5,
      feedback:
        "Professional, efficient, and always responsive to the client. FCL makes project logistics completely stress-free.",
      avatar: "/images/avatar3.png",
    },
  ];

  return (
    <div className="bg-white py-8 px-6 sm:px-8 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-3xl sm:text-3xl lg:text-5xl font-bold uppercase text-black mb-4">
            Testimonials
          </h2>
          <div className="flex justify-center mb-2">
            <div className="w-18 h-1 bg-green-400 rounded"></div>
          </div>
        </div>
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start p-6 mb-2">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="lg:text-2xl">⭐</span>
              <h2 className="text-xl lg:text-3xl font-bold text-black">
                Lets Know What Our Clients
                <br />
                Says About Us.
              </h2>
            </div>

            <p className="text-black text-lg mb-12 leading-relaxed">
              At{" "}
              <span className="font-semibold">
                Fortex Contracting Company Ltd
              </span>
              , client satisfaction is our ultimate benchmark. We combine
              reliability with technical excellence to ensure every project is
              delivered to the highest GCC standards, earning the trust of the
              region&apos;s leading developers.
            </p>

            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition-colors">
              Learn More
              <span>→</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-86 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/b1.png"
              alt="Construction Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimoni, index) => (
            <div
              key={testimoni.id}
              className={`rounded-3xl p-6 shadow-md transition-all duration-300 hover:shadow-xl ${
                index === 1
                  ? "bg-orange-400 text-black scale-105"
                  : "bg-gray-100 text-black"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4 items-center justify-center">
                {Array.from({ length: testimoni.rating }).map((_, i) => (
                  <span key={i} className="text-xl text-green-700">
                    {index === 1 ? <IoStar /> : <IoStar />}
                  </span>
                ))}
              </div>

              {/* Feedback */}
              <p
                className={`mb-2 leading-relaxed italic font-md font-bold ${
                  index === 1 ? "text-white" : "text-black"
                }`}
              >
                &quot;{testimoni.feedback}&quot;
              </p>

              {/* Footer with Avatar */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full shrink-0 ${
                    index === 1 ? "bg-white" : "bg-green-400"
                  } flex items-center justify-center text-md font-bold text-black`}
                >
                  {testimoni.name.charAt(0)}
                </div>
                <div>
                  <p
                    className={`font-bold ${
                      index === 1 ? "text-black" : "text-gray-900"
                    }`}
                  >
                    {testimoni.name}
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      index === 1 ? "text-orange-100" : "text-orange-400"
                    }`}
                  >
                    {testimoni.position}
                  </p>
                </div>
              </div>

              {/* Quote Mark */}
              <div
                className={`text-4xl font-bold mt-2 text-right mr-4 opacity-45 ${
                  index === 1 ? "text-black" : "text-gray-700"
                }`}
              >
                &quot;
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
