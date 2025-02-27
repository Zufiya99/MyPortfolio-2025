import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
