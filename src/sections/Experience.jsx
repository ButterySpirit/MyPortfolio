import React from "react";

const Experience = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold">Experience</h1>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Professional Work Samples</h2>
        <p className="mt-2 text-gray-400">Some of my best work in professional settings:</p>

        <ul className="mt-4 list-disc text-left mx-auto w-2/3">
          <li><a href="/work_sample1.pdf" download className="text-blue-400 hover:underline">Work Sample 1</a></li>
          <li><a href="/work_sample2.pdf" download className="text-blue-400 hover:underline">Work Sample 2</a></li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Community Service</h2>
        <p className="mt-2 text-gray-400">Volunteering experiences and social contributions.</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Awards & Recommendations</h2>
        <p className="mt-2 text-gray-400">Recognitions received in my career.</p>
      </div>
    </div>
  );
};

export default Experience;
