import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Buildory from "@/components/Buildory";
import About from "@/components/About";
import TechStrip from "@/components/TechStrip";
import Contact from "@/components/Contact";

const page = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Buildory />
      <About />
      {/* <TechStrip /> */}
      <Contact />
    </>
  );
};

export default page;
