import React from "react";
import Image from "next/image";
import { BsChatQuote } from "react-icons/bs";

const testimonials = [
  {
    company: "Lineicons",
    logo: "/images/lineicons.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    name: "Musharof Chy",
    role: "Founder @ Lineicons",
    avatar: "/images/user1.jpg",
  },
  {
    company: "TailGrids",
    logo: "/images/Anchor.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    name: "Devid Sailio",
    role: "Founder @ TailGrids",
    avatar: "/images/user2.jpg",
  },
  {
    company: "FormBold",
    logo: "/images/Anchor.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    name: "Jenifer Lofeez",
    role: "Founder @ FormBold",
    avatar: "/images/user3.jpg",
  },
  {
    company: "Uldeck",
    logo: "/images/apple-brand.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    name: "Justin Herry",
    role: "Founder @ Uldeck",
    avatar: "/images/user4.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mx-auto mb-18 max-w-2xl text-center">
          <span className="text-green-600 text-xl sm:text-3xl font-bold tracking-wide mb-3">
            Testimonials
          </span>
          <div className="flex justify-center mb-3 mt-3">
            <div className="w-20 h-1 bg-green-400 rounded"></div>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Let&apos;s Hear From Our Clients
          </h2>
          <p className="text-gray-500">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mr-8 ml-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-lg"
            >
              {/* Company */}
              <div className="mb-4 flex items-center gap-2">
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={32}
                  height={32}
                />
                <span className="font-semibold text-gray-800">
                  {item.company}
                </span>
              </div>

              {/* Text */}
              <p className="mb-6 text-gray-500 leading-relaxed">{item.text}</p>

              {/* Footer */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-black">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* Quote icon */}
              <span className="absolute bottom-6 right-6 text-3xl text-green-200">
                <BsChatQuote />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
