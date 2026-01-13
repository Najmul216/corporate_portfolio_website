import { NavLINKS } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpenStyles = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div onClick={closeNav}>
      {/* Overlay for mobile menu */}
      <div
        className={`fixed ${navOpenStyles} inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* Navlinks */}
      <div
        className={`text-black ${navOpenStyles} top-0 fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[75%] sm:w-[70%] md:w-[60%] bg-green-100 space-y-4 sm:space-y-6 md:space-y-8 z-1050 pt-20 sm:pt-24 px-4 sm:px-8`}
      >
        {NavLINKS.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-black hover:text-green-600 w-fit uppercase text-base sm:text-xl md:text-2xl lg:text-3xl border-b-2 pb-2 border-black hover:border-green-600 transition-colors duration-300">
              {link.lable}
            </p>
          </Link>
        ))}
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 cursor-pointer hover:text-red-600 transition-colors"
        />
      </div>
    </div>
  );
};

export default MobileNav;
