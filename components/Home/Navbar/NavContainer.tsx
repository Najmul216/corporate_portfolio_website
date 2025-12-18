"use client";

import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const NavContainer = () => {
  const [showNav, setShowNav] = React.useState(false);

  //Open Nav Function
  const openNavHandler = () => {
    setShowNav(true);
  };

  const closeNavHandler = () => {
    setShowNav(false);
  };

  return (
    <div>
      <Nav openNav={openNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default NavContainer;
