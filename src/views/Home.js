import React from "react";
// import sections
import Hero from "../components/sections/Hero";
// import FeaturesTiles from '../components/sections/FeaturesTiles';
import Projects from "../components/sections/Projects";
import Testimonial from "../components/sections/Testimonial";
// import Cta from '../components/sections/Cta';
import AboutUs from "../components/sections/AboutUs";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <AboutUs />
      <Projects
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider />
    </>
  );
};

export default Home;
