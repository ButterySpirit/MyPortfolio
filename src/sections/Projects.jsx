import React from "react";

const Projects = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold">Projects</h1>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Capstone Project</h2>
        <p className="text-lg">[Your Project Name]</p>
        <p className="mt-2 text-gray-400">
          A brief summary of your capstone project, its vision, and impact.
        </p>

        <div className="mt-4">
          <a
            href="/capstone_summary.pdf"
            download
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Download Project Summary
          </a>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Academic Work Samples</h2>
        <p className="mt-2 text-gray-400">Here are five of my best academic projects:</p>

        <ul className="mt-4 list-disc text-left mx-auto w-2/3">
          <li><a href="/project1.pdf" download className="text-blue-400 hover:underline">Project 1</a></li>
          <li><a href="/project2.pdf" download className="text-blue-400 hover:underline">Project 2</a></li>
          <li><a href="/project3.pdf" download className="text-blue-400 hover:underline">Project 3</a></li>
          <li><a href="/project4.pdf" download className="text-blue-400 hover:underline">Project 4</a></li>
          <li><a href="/project5.pdf" download className="text-blue-400 hover:underline">Project 5</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
