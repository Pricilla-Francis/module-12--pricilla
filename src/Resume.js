import React from 'react';

const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'];

const Resume = () => (
  <section>
    <a href="/resume.pdf" download>Download Resume</a>
    <ul>
      {proficiencies.map((skill, idx) => <li key={idx}>{skill}</li>)}
    </ul>
  </section>
);

export default Resume;
