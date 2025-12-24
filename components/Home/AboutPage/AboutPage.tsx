import Image from "next/image";
import React from "react";
import AboutProgress from "./AboutProgress";

const AboutPage = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Content */}
        <div className="relative flex justify-center items-center order-2 lg:order-1">
          {/* Image section*/}
          <Image
            src={"/images/a3.png"}
            alt="About Us image"
            width={500}
            height={500}
            className="animate-spin [animation-duration:20s]"
          />
          {/* Center Image */}
          <Image
            src={"/images/a4.png"}
            alt="Center Image"
            width={300}
            height={300}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            rounded-lg md:ml-4 w-50 h-50 md:h-75 md:w-75"
          />
        </div>
        {/* Text content*/}
        <div className="order-1 lg:order-2">
          {/* <h1 className="text-2xl uppercase md:text-3xl lg:text-3xl font-bold text-black mb-2 tracking-widest">
            About Us
          </h1>
          <div className="w-20 h-1 bg-green-400"></div> */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              ABOUT US
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-18 h-1 bg-green-400 rounded"></div>
            </div>
          </div>

          {/* Main heading */}
          {/* <h1 className="text-xl md:text-4xl font-semibold mt-4 text-black">
            Innovative solutions for your success
          </h1> */}
          <div className="text-black mt-4 mb-4">
            <p className="mb-3 text-body text-justify">
              <strong className="font-semibold text-heading">
                Fortex Contracting Company Ltd.
              </strong>{" "}
              was established in 2002 and specializes in general contracting &
              infrastructure that started in Al Ahsa, with its headquarters in
              Hofuf and 8 satellite offices all over the Kingdom. It has been at
              the forefront for a period now and has grown to expand in many
              fields in the country with its good reputation amongst a highly
              competitive market place.
            </p>
            <p className="text-body text-justify">
              We are confident of our growing success and we believe that our
              organization will continue to capitalize on the vast opportunities
              that are coming and to continue in its upward trend, becoming an
              organization of great scope, substantial financial resources and
              enormous talent and energy. We hope to continue in providing ample
              opportunities for personal advancement of our valued employees and
              to further enhance our growing reputation in Saudi Arabia and in
              the near future in international level.
            </p>
          </div>
          <AboutProgress />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
