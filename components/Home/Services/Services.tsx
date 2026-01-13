"use client";

import React from "react";
import Image from "next/image";
import { SERVICES } from "@/constant/constant";

const Services = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-8 relative overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 px-2 sm:px-4">
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase text-black mb-4 leading-tight">
              Our Services
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-green-400 rounded"></div>
            </div>
          </div>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">
            Comprehensive Construction Services For Every Need.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              {service.image ? (
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <div className="text-yellow-300 text-3xl mb-3">
                      {service.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-4">
                      {service.description}
                    </p>
                    <button className="bg-linear-to-b from-green-400 to-yellow-300 hover:bg-linear-to-b hover:from-green-800 hover:to-green-300 text-black cursor-pointer font-semibold px-4 py-2 rounded-full">
                      Learn More →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-green-300 group-hover:bg-gray-100 transition-colors"></div>
                  <div className="absolute inset-0 flex flex-col items-center bg-black/20 justify-center text-center px-4">
                    <div className="text-yellow-300 text-3xl mb-3">
                      {service.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-4">
                      {service.description}
                    </p>
                    <button className="bg-linear-to-b from-green-400 to-yellow-300 hover:bg-linear-to-b hover:from-green-500 hover:to-green-300 text-black cursor-pointer font-semibold px-4 py-2 rounded-full">
                      Learn More →
                    </button>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
