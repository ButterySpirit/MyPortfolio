import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4 text-lg">
        Hi, I'm [Your Name], a passionate software developer with experience in full-stack development.
        I thrive on solving complex problems and building applications that make a difference.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Career Philosophy</h2>
      <p className="mt-2 italic">
        “We are the facilitators of our own creative evolution” – Bill Hicks.
      </p>
      <p className="mt-2 text-lg">
        I believe that technology is a tool to create impact. My goal is to develop innovative solutions
        that drive progress and help businesses scale.
      </p>

      <div className="mt-8">
        <a
          href="/resume.pdf"
          download
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
        <a
          href="/cover_letter.pdf"
          download
          className="ml-4 bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Download Cover Letter
        </a>
      </div>
    </div>
  );
};

export default About;
