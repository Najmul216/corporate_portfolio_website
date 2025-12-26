import Image from "next/image";
import React from "react";

const Hero = () => {
  const accomplishments = [
    "Completing projects on time & Following budget guidelines",
    "Elevated quality of workmanship",
    "Meeting diverse supplier requirements",
    "Implementing appropriate safety precautions and procedures",
  ];

  return (
    <div className="w-full bg-[#041b3c] py-8 mt-26 md:mt-36 md:py-16 lg:py-24">
      <div className="w-[90%] md:w-[95%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Right Side - Image */}
          <div className="flex justify-center order-2 lg:order-2">
            <Image
              src="/images/hero.png"
              alt="Image"
              width={500}
              height={500}
              className="w-[60%] md:w-[70%] max-w-md lg:max-w-[90%] object-cover"
            />
          </div>

          {/* Left Side - Content */}
          <div className="order-1 lg:order-1">
            {/* Heading with underline */}
            <div className="mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                WELCOME TO FCCL
              </h1>
              <div className="w-24 h-1 bg-green-400"></div>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-white mb-8 leading-relaxed max-w-3xl">
              We have successfully completed projects in numerous regions across
              the Kingdom of Saudi Arabia. FCCL has a proven track record of:
            </p>

            {/* Accomplishments List */}
            <ul className="space-y-4 mb-12 max-w-3xl">
              {accomplishments.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-white text-base md:text-lg"
                >
                  <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-4 mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <button
                className="bg-green-300 hover:bg-green-500 font-semibold transition-colors duration-300 text-gray-900 py-3 px-8 
              rounded text-base sm:text-lg shadow-md hover:shadow-lg cursor-pointer sm:cursor-pointer"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
