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
    <div className="w-full bg-[#041b3c] py-6 sm:py-8 md:py-12 lg:py-20 mt-20 sm:mt-24 md:mt-28 lg:mt-32">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="order-1 lg:order-1 pl-0 sm:pl-2 md:pl-4 lg:pl-0">
            {/* Heading with underline */}
            <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                WELCOME TO FCCL
              </h1>
              <div className="w-20 sm:w-24 md:w-28 h-1 bg-green-400 rounded"></div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-white mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl sm:max-w-3xl">
              We have successfully completed projects in numerous regions across
              the Kingdom of Saudi Arabia. FCCL has a proven track record of:
            </p>

            {/* Accomplishments List */}
            <ul className="space-y-3 sm:space-y-4 md:space-y-5 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              {accomplishments.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-white text-xs sm:text-sm md:text-base lg:text-lg gap-3"
                >
                  <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="flex justify-center sm:justify-start">
              <button className="bg-linear-to-b from-green-400 to-yellow-300 hover:from-green-500 hover:to-green-400 active:from-green-600 active:to-yellow-400 text-black cursor-pointer font-semibold px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 hover:shadow-lg">
                GET IN TOUCH
              </button>
              {/* <button
                className="bg-green-300 hover:bg-green-500 font-semibold transition-colors duration-300 text-gray-900 py-3 px-8 
              rounded text-base sm:text-lg shadow-md hover:shadow-lg cursor-pointer sm:cursor-pointer"
              >
                GET IN TOUCH
              </button> */}
            </div>
          </div>
          {/* Right Side - Image */}
          <div className="flex justify-end mr-4 order-2 lg:order-2">
            <Image
              src="/images/hero.png"
              alt="Image"
              width={500}
              height={500}
              className="w-[60%] md:w-[70%] max-w-md lg:max-w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
