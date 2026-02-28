import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Buildory from "@/components/Buildory";

const page = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Buildory />
      <About />
    </>
  );
};

export default page;
