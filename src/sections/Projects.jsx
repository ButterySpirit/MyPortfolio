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
            <span className="text-blue-400 font-semibold">CORY – Event Staffing Platform</span> – A <strong>full-stack web application</strong> 
            designed to streamline event staffing by connecting <strong>event organizers with available staff</strong>.  
            Built using <strong>React, Node.js, Express.js, MongoDB</strong>, and integrated <strong>real-time job postings and automated scheduling</strong>.
            Developed as part of my <strong>final-year capstone project</strong>.
          </p>

          {/* Wireframe Download Button */}
          <div className="mt-4">
            <a
              href="/Capstone-Wireframes.pdf"
              download="Capstone-Wireframes.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-400 hover:scale-105 hover:shadow-lg"
            >
              📂 Download Wireframes (PDF)
            </a>
          </div>

          {/* Capstone Project Documents */}
          <div className="mt-6 text-left bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Project Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "W25_T12_ProjectReport2.pdf", label: "Final Status Report" },
                { name: "F24_T12_CORY - Project Summary Template.pdf", label: "Project Summary" },
                { name: "F24_T12_Project Vision 1.0.docx.pdf", label: "Project Vision Document" },
                { name: "F24_T12_High Level Requirements Document.pdf", label: "Requirements Document" },
                { name: "Project Plan V1.0.pdf", label: "Project Plan" },
                { name: "F24_T12_Requirements Analysis_Design.pdf", label: "Requirements Analysis & Design" },
              ].map((file, index) => (
                <a
                  key={index}
                  href={`/${file.name}`}
                  download={file.name}
                  className="flex items-center justify-between bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg shadow-md transition-all duration-300"
                >
                  📂 {file.label}
                </a>
              ))}
            </div>
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
                Built a <strong>responsive restaurant management app</strong> with location services and data persistence using <strong>React Native</strong> and <strong>Expo</strong>.
                Integrated <strong>Autocomplete API</strong> and <strong>Place Details API</strong> for restaurant recommendations.
              </p>
            </div>

            {/* Project 2 */}
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400">Travel Booking Web App</h3>
              <p className="text-lg text-gray-300 mt-2 leading-relaxed">
                Developed a <strong>.NET Core Entity Framework MVC</strong> application where users can book flights, hotels, and rentals across Canada.
                Integrated <strong>user authentication</strong> and <strong>role-based authorization</strong> with IdentityCore.
              </p>
            </div>

            {/* Project 3 */}
            <div>
              <h3 className="text-2xl font-semibold text-red-400">Real-Time Chat Room</h3>
              <p className="text-lg text-gray-300 mt-2 leading-relaxed">
                Designed a <strong>MERN Stack</strong> chat application where users can create or join chat rooms and chat in real-time.
                Used <strong>WebSockets for real-time messaging</strong>.
              </p>
            </div>

            {/* Project 4 */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-400">Guitar Trainer Mobile App</h3>
              <p className="text-lg text-gray-300 mt-2 leading-relaxed">
                Published an <strong>Android app</strong> using <strong>React Native</strong> that helps guitarists <strong>improve chord recognition</strong> through an 
                interactive quiz-based learning experience.
              </p>
            </div>

            {/* Project 5 */}
            <div>
              <h3 className="text-2xl font-semibold text-green-400">Python Game Development</h3>
              <p className="text-lg text-gray-300 mt-2 leading-relaxed">
                Developed several <strong>video games</strong> using <strong>Pygame, Pyglet, and Pymunk</strong>.
                Implemented <strong>.TMX file loading</strong> using <strong>Pyglet library</strong>.
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
                Designed and developed this <strong>fully responsive portfolio website</strong> using <strong>React, TailwindCSS, and Vercel</strong>. 
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
