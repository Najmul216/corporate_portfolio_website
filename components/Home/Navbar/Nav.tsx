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
    <div className="h-[12vh] relative z-10 lg:mt-8">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo Section */}
        <Logo />
        {/* Nav links for large screens */}
        <div className="hidden lg:flex bg-white rounded-full h-[8vh] md:p-4 items-center space-x-10">
          {NavLINKS.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-black hover:text-green-500 font-semibold transition-all duration-300"
            >
              <p>{link.lable}</p>
            </Link>
          ))}
          {/* <button className="h-full bg-[#b69974] cursor-pointer text-white p-3 font-bold">Create Account</button> */}
        </div>
        {/* Hamburger Menu for small screens */}
        <div onClick={openNav} className="lg:hidden">
          <HiBars3BottomRight className="w-9 h-9 cursor-pointer text-green-400" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
