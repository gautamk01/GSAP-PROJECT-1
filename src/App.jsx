import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
