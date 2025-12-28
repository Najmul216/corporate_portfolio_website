"use client";

import React from "react";
import Image from "next/image";
import { SERVICES } from "@/constant/constant";

const Services = () => {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      // style={{ backgroundColor: "#36380b" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-3xl lg:text-5xl font-bold uppercase text-white mb-4">
              Our Services
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-18 h-1 bg-green-400 rounded"></div>
            </div>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Comprehensive Construction Services For Every Need.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
