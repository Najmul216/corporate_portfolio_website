"use client";

import React from "react";
import { SERVICES } from "@/constant/constant";

const Services = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="w-[80%] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            BEST SERVICES
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-18 h-1 bg-green-400 rounded"></div>
          </div>
          <p className="text-gray-800 max-w-3xl mx-auto text-base sm:text-lg">
            Are you interested in finding out how we can make your project a
            success? Please constact us.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group hover:shadow-lg bg-gray-200 rounded-xl transition-all duration-300 p-6"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-green-500 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-800 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            className="bg-green-300 hover:bg-green-500 transition-colors duration-300 text-gray-900 font-bold py-3 px-8 
          rounded text-base sm:text-lg shadow-md hover:shadow-lg cursor-pointer"
          >
            ALL SERVICES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
