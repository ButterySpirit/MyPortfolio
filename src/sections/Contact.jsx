import React from "react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-4 text-lg">Let's connect! Feel free to reach out to me.</p>

      <div className="mt-6">
        <p>Email: <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">your.email@example.com</a></p>
        <p>GitHub: <a href="https://github.com/yourgithub" className="text-blue-400 hover:underline">github.com/yourgithub</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-400 hover:underline">linkedin.com/in/yourlinkedin</a></p>
      </div>
    </div>
  );
};

export default Contact;
