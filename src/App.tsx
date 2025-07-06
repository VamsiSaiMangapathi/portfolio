import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
