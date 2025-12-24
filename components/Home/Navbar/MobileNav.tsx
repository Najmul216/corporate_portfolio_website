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
        className={`text-black ${navOpenStyles} top-0 fixed justify-center flex flex-col h-full transform transition-all duration-500 
      delay-300 w-[80%] sm:w-[80%] bg-green-100 space-y-6 z-1050`}
      >
        {NavLINKS.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-black hover:text-green-600 w-fit uppercase text-[20px] ml-12 border-b-[2.5px] pb-1 border-black hover:border-green-600 sm:text-[30px]">
              {link.lable}
            </p>
          </Link>
        ))}
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8"
        />
      </div>
    </div>
  );
};

export default MobileNav;
