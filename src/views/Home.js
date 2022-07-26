import React from "react";

// import sections
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import AboutUs from "../components/sections/AboutUs";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" topDivider bottomDivider />
      <AboutUs bottomDivider />
      <Projects bottomDivider invertMobile imageFill className="illustration-section-02" />
    </>
  );
};

export default Home;
