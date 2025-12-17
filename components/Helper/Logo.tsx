import React from "react";
import { BiSolidBusiness } from "react-icons/bi";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center flex-col">
        <BiSolidBusiness className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-xl md:text-xl hidden sm:block text-white font-bold">
        Fortex Contracting Company Ltd.
      </h1>
    </div>
  );
};

export default Logo;
