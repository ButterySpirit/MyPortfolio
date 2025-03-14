import React from "react";
import { Parallax } from "react-parallax";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

const Contact = () => {
  return (
    <Parallax
      bgImage="https://source.unsplash.com/random/1600x900/?technology"
      strength={300}
      className="min-h-[130vh] flex items-center justify-center text-white pt-20"
    >
      <div className="max-w-3xl mx-auto p-8 text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold">Contact</h1>
        <p className="mt-4 text-lg">Let's connect! Feel free to reach out to me.</p>

        {/* Contact Buttons */}
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
          
          {/* Email Button */}
          <a
            href="mailto:nikolavaricak01@gmail.com"
            className="flex items-center space-x-3 px-6 py-3 bg-blue-500 rounded-lg text-white text-lg font-semibold transition-all duration-300 hover:bg-blue-400 hover:scale-105 hover:shadow-lg"
          >
            <FaEnvelope className="text-2xl" /> 
            <span>Email Me</span>
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/ButterySpirit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 px-6 py-3 bg-gray-700 rounded-lg text-white text-lg font-semibold transition-all duration-300 hover:bg-gray-600 hover:scale-105 hover:shadow-lg"
          >
            <FaGithub className="text-2xl" /> 
            <span>GitHub</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/nikola-varicak-6ab7b330a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 px-6 py-3 bg-blue-700 rounded-lg text-white text-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg"
          >
            <FaLinkedin className="text-2xl" /> 
            <span>LinkedIn</span>
          </a>

        </div>
      </div>
    </Parallax>
  );
};

export default Contact;
