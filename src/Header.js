import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4 shadow-md">
  <div className="max-w-5xl mx-auto flex justify-between items-center">
    <h1 className="text-2xl font-bold">Pricilla Francis</h1>
    <nav className="space-x-4">
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Me</NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
      <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>Resume</NavLink>
    </nav>
    </div>
  </header>
);

export default Header;
