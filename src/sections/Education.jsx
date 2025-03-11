import React from "react";

const Education = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold">Education</h1>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">[Your Degree Name]</h2>
        <p className="text-lg">[Your University Name], [Year of Graduation]</p>
        <p className="mt-2 text-gray-400">Awarded for excellence in software development.</p>
      </div>

      <div className="mt-8">
        <a
          href="/transcript.pdf"
          download
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Download Transcript
        </a>
      </div>
    </div>
  );
};

export default Education;
