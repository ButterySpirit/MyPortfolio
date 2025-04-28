import React from "react";
import { Parallax } from "react-parallax";

const About = () => {
  return (
    <Parallax
      bgImage="https://source.unsplash.com/random/1600x900/?technology"
      strength={300}
      className="min-h-[130vh] flex items-center justify-center text-white pt-20"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 pt-44 pb-40 text-center text-white bg-gray-900 min-h-[130vh]">
        
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-6">About Me</h1>

        {/* Introduction */}
        <p className="text-lg leading-relaxed">
          I’m <span className="text-blue-400 font-semibold">Nikola Varicak</span>, a passionate <strong>full-stack developer </strong> 
          based in Toronto. I’m currently pursuing a <strong>Computer Programming and Analysis</strong> degree at 
          <span className="text-green-400 font-semibold"> George Brown College</span>, expected to graduate in April 2025. 
          With a deep understanding of <strong>frontend, backend, and cloud technologies</strong>, I build scalable and impactful web applications.
        </p>

        {/* Resume Download Button */}
        <div className="mt-6">
          <a
            href="/Nikola-Varicak-Resume.pdf"
            download="Nikola-Varicak-Resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-400 hover:scale-105 hover:shadow-lg"
          >
            📄 Download Resume
          </a>
        </div>

        {/* Career Philosophy */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <h2 className="text-3xl font-semibold">Career Philosophy</h2>
          <p className="mt-2 italic text-lg text-gray-400">
            "The only way to do great work is to love what you do." – Steve Jobs
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            I strive to create <strong>efficient, scalable, and user-friendly software solutions</strong>. My goal is to <strong>develop innovative 
            applications</strong> that not only <strong>enhance user experiences</strong> but also <strong>push technological boundaries</strong>. Every project 
            is an opportunity to learn, grow, and improve my craft.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <h2 className="text-3xl font-semibold mb-6">Technical Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Languages */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-400">Languages</h3>
              <p className="text-lg text-gray-300">JavaScript, Python, Java, C#, PHP, SQL</p>
            </div>

            {/* Frameworks */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-400">Frameworks</h3>
              <p className="text-lg text-gray-300">React, React Native, Next.js, Spring Boot, .NET Core, Express.js</p>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="text-2xl font-semibold text-green-400">Frontend</h3>
              <p className="text-lg text-gray-300">HTML, CSS, TailwindCSS, Bootstrap</p>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400">Backend</h3>
              <p className="text-lg text-gray-300">Node.js, Express.js, Spring Boot, .NET Core</p>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-2xl font-semibold text-red-400">Databases</h3>
              <p className="text-lg text-gray-300">PostgreSQL, MongoDB, MySQL</p>
            </div>

            {/* DevOps & Tools */}
            <div>
              <h3 className="text-2xl font-semibold text-purple-400">DevOps & Tools</h3>
              <p className="text-lg text-gray-300">Docker, Jenkins, GitHub, CI/CD, REST APIs</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default About;
