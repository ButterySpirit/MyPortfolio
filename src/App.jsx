import React from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <section id="about" className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <About />
      </section>
      <section id="projects" className="h-screen flex items-center justify-center bg-gray-800 text-white">
        <Projects />
      </section>
      <section id="education" className="h-screen flex items-center justify-center bg-gray-700 text-white">
        <Education />
      </section>
      <section id="experience" className="h-screen flex items-center justify-center bg-gray-600 text-white">
        <Experience />
      </section>
      <section id="contact" className="h-screen flex items-center justify-center bg-gray-500 text-white">
        <Contact />
      </section>
    </div>
  );
};

export default App;
