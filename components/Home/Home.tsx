import React from "react";
import Hero from "./Hero/Hero";
import AboutPage from "./AboutPage/AboutPage";

const Home = () => {
  return (
    <div className="overflow-hidden text-white">
      <Hero />
      <AboutPage />
    </div>
  );
};

export default Home;
