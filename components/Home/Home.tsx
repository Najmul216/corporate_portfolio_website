import React from "react";
import Hero from "./Hero/Hero";
import AboutPage from "./AboutPage/AboutPage";
import Services from "./Services/Services";
import Work from "./Work/Work";

const Home = () => {
  return (
    <div className="overflow-hidden text-white">
      <Hero />
      <AboutPage />
      <Services />
      <Work />
    </div>
  );
};

export default Home;
