import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "education", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });

      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full ${
        scrolling ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      } text-white p-4 z-50 transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide hover:text-blue-400 transition-colors duration-300 cursor-pointer">
          Nikola Varicak
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {["about", "projects", "education", "experience", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className={`cursor-pointer text-lg font-medium transition-all duration-300 ${
                activeSection === section
                  ? "text-blue-400 underline underline-offset-4"
                  : "hover:text-gray-400 hover:underline underline-offset-4"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
