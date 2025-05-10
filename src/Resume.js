import React from 'react';

const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'];

const Resume = () => (
  <section className="max-w-3xl mx-auto p-6">
    <a
      href="/resume.pdf"
      download
      className="inline-block bg-green-600 text-white px-4 py-2 rounded mb-4 hover:bg-green-700"
    >
      Download Resume
    </a>
    <ul className="list-disc pl-5 space-y-1">
      {proficiencies.map((skill, idx) => (
        <li key={idx}>{skill}</li>
      ))}
    </ul>
  </section>
);


export default Resume;
