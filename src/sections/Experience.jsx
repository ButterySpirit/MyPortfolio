import React from "react";
import { Parallax } from "react-parallax";

const Experience = () => {
  return (
    <Parallax
      bgImage="https://source.unsplash.com/random/1600x900/?technology"
      strength={300}
      className="min-h-[130vh] flex items-center justify-center text-white pt-20"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 pt-40 pb-40 text-center text-white bg-gray-600 min-h-[100vh]">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-6">Work Experience</h1>

        {/* SESH Experience */}
        <div className="mt-12 border-t border-gray-500 pt-6 text-left">
          <h2 className="text-3xl font-semibold text-green-400">Software Developer</h2>
          <p className="mt-1 text-lg text-gray-300 font-semibold">
            <a 
              href="https://sesh.fm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-400 underline"
            >
              SESH | Remote
            </a>
          </p>
          <p className="mt-1 text-lg text-gray-300 italic">Feb 2023 – Present</p>
          <ul className="mt-4 text-lg text-gray-300 list-disc list-inside">
            <li>Developed **real-time collaborative music creation features** for a next-generation **digital audio workstation (DAW)**.</li>
            <li>Implemented **WebRTC & WebSockets** for seamless live collaboration between music producers.</li>
            <li>Integrated a **custom digital synthesizer engine** using **Web Audio API** for high-performance sound processing.</li>
            <li>Optimized **audio playback and rendering**, reducing latency by **30%** for a smoother production experience.</li>
            <li>Designed an **intuitive UI/UX** for musicians and producers, ensuring a modern and responsive interface.</li>
            <li>Worked in an **Agile environment**, contributing to **feature planning, bug fixes, and performance optimizations**.</li>
          </ul>
        </div>

        {/* InfinityScripts Experience */}
        <div className="mt-12 border-t border-gray-500 pt-6 text-left">
          <h2 className="text-3xl font-semibold text-blue-400">Front-End Developer</h2>
          <p className="mt-1 text-lg text-gray-300 font-semibold">
            <a 
              href="https://www.infinityscripts.fun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-400 underline"
            >
              InfinityScripts | Remote
            </a>
          </p>
          <p className="mt-1 text-lg text-gray-300 italic">Jan 2024 – Present</p>
          <ul className="mt-4 text-lg text-gray-300 list-disc list-inside">
            <li>Developed and maintained **React-based UIs** for a high-traffic website generating **millions in revenue**.</li>
            <li>Designed **reusable components** using **TailwindCSS** to ensure a modern and responsive UI.</li>
            <li>Collaborated with backend engineers to integrate **REST APIs** for real-time data updates.</li>
            <li>Optimized performance, reducing load times by **40%** and enhancing user experience.</li>
          </ul>
        </div>
      </div>
    </Parallax>
  );
};

export default Experience;
