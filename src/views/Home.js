import React from "react";

// import sections
import Hero from "../components/sections/Home/Hero";
import Projects from "../components/sections/Home/Projects";
import AboutUs from "../components/sections/Home/AboutUs";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <AboutUs topDivider />
      <Projects
        topDivider
        invertMobile
        imageFill
        className="illustration-section-02"
      />
    </>
  );
};

export default Home;
