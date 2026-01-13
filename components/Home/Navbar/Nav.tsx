import Logo from "@/components/Helper/Logo";
import { NavLINKS } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-20">
          {/* Logo Section */}
          <div className="shrink-0">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Nav links for large screens */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NavLINKS.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-black hover:text-green-600 font-semibold text-sm xl:text-lg transition-colors duration-300 relative group"
              >
                {link.lable}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Contact Button for large screens */}
          <div className="hidden lg:flex items-center">
            <button className="bg-green-400 hover:bg-green-500 active:bg-green-600 text-white font-semibold py-2.5 px-6 xl:px-8 rounded-lg transition-colors duration-300">
              Contact Us
            </button>
          </div>

          {/* Hamburger Menu for small screens */}
          <div className="lg:hidden">
            <button
              onClick={openNav}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-500 hover:text-green-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-colors duration-300"
            >
              <HiBars3BottomRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
