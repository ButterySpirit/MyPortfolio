import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="flex space-x-6">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
            Projects
          </Link>
          <Link to="education" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
            Education
          </Link>
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
            Experience
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
