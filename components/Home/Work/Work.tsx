"use client";
import Image from "next/image";
import React from "react";

const stats = [
  { value: "200 +", label: "Completed Projects" },
  { value: "1,885 +", label: "Skilled Workers" },
  { value: "98% +", label: "Satisfaction Rate" },
  { value: "15Y +", label: "Years In Business" },
];

const Work = () => {
  return (
    <section className="relative overflow-hidden w-screen bg-white">
      <div className="max-w-6xl mx-auto mt-6">
        {/* Stats card */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-[95%] md:w-3/4 lg:w-3/5 z-20">
          <div className="bg-gray-500 backdrop-blur-md rounded-2xl shadow-2xl py-8 px-4 md:px-12 flex justify-between items-center gap-6">
            {stats.map((st) => (
              <div
                key={st.label}
                className="text-center flex-1 text-sm md:text-lg"
              >
                <div className="text-lg md:text-4xl lg:text-4xl font-extrabold text-green-400">
                  {st.value}
                </div>
                <div className="text-sm md:text-lg text-white font-semibold mt-4">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="/images/1a.jpg"
          alt="construction team"
          fill
          className="object-cover brightness-75 mt-30"
        />

        {/* Hero */}
        <div className="relative h-130 md:h-145 lg:h-202">
          {/* Dark overlay */}
          <div className="absolute inset-0"></div>

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
            <div className="max-w-3xl text-center">
              <div className="inline-flex items-center justify-center mb-10 mt-10">
                <div className="w-16 h-16 rounded-full bg-green-400/80 flex items-center justify-center text-yellow-700">
                  {/* simple icon circle */}
                  <Image
                    src={"/images/sicon1.png"}
                    alt={""}
                    width={32}
                    height={32}
                  />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-12 leading-tight">
                Innovative Solutions For Large Scale Infrastructure.
              </h1>

              <p className="mt-12 text-white hidden font-semibold text-xl md:block">
                We deliver reliable, efficient and safe infrastructure projects
                with a commitment to quality and client satisfaction.
              </p>

              <div className="mt-8 flex justify-center">
                <button className="bg-linear-to-b from-green-400 to-yellow-300 hover:bg-linear-to-b hover:from-green-500 hover:to-green-300 text-black cursor-pointer font-semibold px-4 py-2 rounded-full">
                  Get A Quotation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
