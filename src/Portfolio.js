import React from 'react';

const projects = [
  {
    title: 'Pricilla Francis Portfolio',
    image: '/img/project1.png',
    deployed: 'https://project1.com',
    github: 'https://github.com/Pricilla-Francis'
  },
  
];

const Portfolio = () => (
  <section className="max-w-5xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {projects.map(({ title, image, deployed, github }, index) => (
      <div key={index} className="border rounded-xl overflow-hidden shadow-lg">
        <a href={deployed} target="_blank" rel="noreferrer">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        </a>
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <a href={github} className="text-blue-600 underline" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    ))}
  </section>
);


export default Portfolio;
