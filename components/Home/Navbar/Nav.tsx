import Logo from "@/components/Helper/Logo";
import { NavLINKS } from "@/constant/constant";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="h-[12vh] relative z-10 lg:mt-8">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo Section */}
        <Logo />
        {/* Nav links for large screens */}
        <div className="hidden lg:flex bg-white rounded-full h-[10vh] md:p-4 items-center space-x-10">
          {NavLINKS.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-black hover:text-green-500 font-semibold transition-all duration-300"
            >
              <p>{link.lable}</p>
            </Link>
          ))}
          {/* <button>Create Account</button> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
