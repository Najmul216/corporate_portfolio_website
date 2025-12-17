import Logo from "@/components/Helper/Logo";
import React from "react";
import { BiSolidBusiness } from "react-icons/bi";

const Nav = () => {
  return (
    <div className="h-[12vh] relative z-10 lg:mt-8">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo Section */}
        <Logo />
      </div>
    </div>
  );
};

export default Nav;
