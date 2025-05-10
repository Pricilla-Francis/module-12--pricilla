import React from 'react';

const projects = [
  {
    title: 'Pricilla Francis Portfolio',
    image: '/img/project1.png',
    deployed: 'https://project1.com',
    github: 'https://github.com/Pricilla-Francis'
  },
  // Add 5 more...
];

const Portfolio = () => (
  <section>
    {projects.map(({ title, image, deployed, github }, index) => (
      <div key={index}>
        <h3>{title}</h3>
        <a href={deployed} target="_blank" rel="noreferrer">
          <img src={image} alt={title} />
        </a>
        <a href={github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    ))}
  </section>
);

export default Portfolio;
