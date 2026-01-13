import React from "react";
import Hero from "./Hero/Hero";
import AboutPage from "./AboutPage/AboutPage";
import Services from "./Services/Services";
import Work from "./Work/Work";
import Portfolio from "./Portfolio/Portfolio";
import ContactPage from "./ContactPage/ContactPage";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden text-white">
      <Hero />
      <AboutPage />
      <Services />
      <Work />
      <Portfolio />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Home;
