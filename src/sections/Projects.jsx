import React from "react";
import { Parallax } from "react-parallax";

const Projects = () => {
  return (
    <Parallax
      bgImage="https://source.unsplash.com/random/1600x900/?technology"
      strength={300}
      className="min-h-[130vh] flex items-center justify-center text-white pt-20"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 pt-40 pb-40 text-center text-white bg-gray-800 min-h-[140vh]">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-6">Projects</h1>

        {/* Capstone Project */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <h2 className="text-3xl font-semibold">Capstone Project</h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            <span className="text-blue-400 font-semibold">CORY – Event Staffing Platform</span> – A **full-stack web application** 
            designed to streamline event staffing by connecting **event organizers with available staff**.  
            Built using **React, Node.js, Express.js, MongoDB**, and integrated **real-time job postings and automated scheduling**.
            Developed as part of my **final-year capstone project**.
          </p>

          {/* Wireframes Download Link */}
          <div className="mt-4">
            <a
              href="/Capstone-Wireframes.pdf"
              download="Capstone-Wireframes.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-400 hover:scale-105 hover:shadow-lg"
            >
              📂 Download Wireframes (PDF)
            </a>
          </div>
        </div>

        {/* Academic Work Samples */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <h2 className="text-3xl font-semibold">Academic Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6 text-left">
            {/* Project 1 */}
            <div>
              <h3 className="text-2xl font-semibold text-green-400">React-Native Restaurant App</h3>
              <p className="text-lg text-gray-300 mt-2 leading-relaxed">
                Built a **responsive restaurant management app** with location services and data persistence using **React Native** and **Expo**.
                Integrated **Autocomplete API** and **Place Details API** for restaurant recommendations.
              </p>
            </div>

            {/* Project 2 */}
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400">Travel Booking Web App</h3>
              <p className="text-lg text-gray-300 mt-2 leading-relaxed">
                Developed a **.NET Core Entity Framework MVC** application where users can book flights, hotels, and rentals across Canada.
                Integrated **user authentication** and **role-based authorization** with IdentityCore.
              </p>
            </div>

            {/* Project 3 */}
            <div>
              <h3 className="text-2xl font-semibold text-red-400">Real-Time Chat Room</h3>
              <p className="text-lg text-gray-300 mt-2 leading-relaxed">
                Designed a **MERN Stack** chat application where users can create or join chat rooms and chat in real-time.
                Used **WebSockets for real-time messaging**.
              </p>
            </div>

            {/* Project 4 */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-400">Guitar Trainer Mobile App</h3>
              <p className="text-lg text-gray-300 mt-2 leading-relaxed">
                Published an **Android app** using **React Native** that helps guitarists **improve chord recognition** through an 
                interactive quiz-based learning experience.
              </p>
            </div>

            {/* Project 5 */}
            <div>
              <h3 className="text-2xl font-semibold text-green-400">Python Game Development</h3>
              <p className="text-lg text-gray-300 mt-2 leading-relaxed">
                Developed several **video games** using **Pygame, Pyglet, and Pymunk**.
                Implemented **.TMX file loading** using **Pyglet library**.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Projects */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <h2 className="text-3xl font-semibold">Personal Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6 text-left">
            {/* Project 6 */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-400">Portfolio Website</h3>
              <p className="text-lg text-gray-300 mt-2 leading-relaxed">
                Designed and developed this **fully responsive portfolio website** using **React, TailwindCSS, and Vercel**. 
                Features smooth scrolling, animations, and a clean UI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Projects;
