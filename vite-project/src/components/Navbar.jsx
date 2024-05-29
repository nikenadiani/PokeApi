// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-2xl font-bold">
          PokeApp
        </div>
        <div className="space-x-4">
          <Link className="text-white hover:text-gray-400" to="/">Home</Link>
          <Link className="text-white hover:text-gray-400" to="/saved">Saved Pokemon</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
