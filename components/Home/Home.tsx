import React from "react";
import Hero from "./Hero/Hero";
import AboutPage from "./AboutPage/AboutPage";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="overflow-hidden text-white">
      <Hero />
      <AboutPage />
      <Services />
    </div>
  );
};

export default Home;
