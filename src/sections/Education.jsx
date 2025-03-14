import React from "react";
import { Parallax } from "react-parallax";
const Education = () => {
  return (
    <Parallax
              bgImage="https://source.unsplash.com/random/1600x900/?technology"
              strength={300}
              className="min-h-[130vh] flex items-center justify-center text-white pt-20"
            >
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 pt-40 pb-40 text-center text-white bg-gray-700 min-h-[100vh]">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-6">Education</h1>

      {/* College Details */}
      <div className="mt-12 border-t border-gray-600 pt-6">
        <h2 className="text-3xl font-semibold text-green-400">George Brown College</h2>
        <p className="mt-2 text-lg text-gray-300 font-semibold">Toronto, ON</p>
        <p className="mt-2 text-lg text-gray-300 italic">Computer Programming and Analysis</p>
        <p className="text-lg text-gray-300">Expected Graduation: <span className="font-semibold">April 2025</span></p>
        <p className="text-lg text-gray-300">Cumulative GPA: <span className="font-semibold">3.4/4.0</span></p>
      </div>

      {/* Relevant Coursework */}
      <div className="mt-12 border-t border-gray-600 pt-6">
        <h2 className="text-3xl font-semibold text-blue-400">Relevant Coursework</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-6">
          <p className="text-lg text-gray-300">✔ Data Analysis</p>
          <p className="text-lg text-gray-300">✔ Software Engineering</p>
          <p className="text-lg text-gray-300">✔ Operating Systems</p>
          <p className="text-lg text-gray-300">✔ Data Structures & Algorithms</p>
          <p className="text-lg text-gray-300">✔ Agile Development</p>
          <p className="text-lg text-gray-300">✔ Machine Learning Algorithms</p>
        </div>
      </div>
    </div>
    </Parallax>
  );
};

export default Education;
