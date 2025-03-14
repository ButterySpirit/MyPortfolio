import React from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />

      {/* About Section */}
      <section id="about" className="min-h-[130vh] flex items-center justify-center bg-gray-900 text-white pt-20">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-[140vh] flex items-center justify-center bg-gray-800 text-white">
        <Projects />
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-[120vh] flex items-center justify-center bg-gray-700 text-white">
        <Education />
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-[120vh] flex items-center justify-center bg-gray-600 text-white">
        <Experience />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-[100vh] flex items-center justify-center bg-gray-500 text-white">
        <Contact />
      </section>
    </div>
  );
};

export default App;
