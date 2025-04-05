import React from 'react';
import logo from './Nutriscan_logo.png';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-14 w-15 m-0" />

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          <a href="#" className="hover:text-blue-300">Home</a>
          <a href="#" className="hover:text-blue-300">About</a>
          <a href="#" className="hover:text-blue-300">Services</a>
          <a href="#" className="hover:text-blue-300">Contact</a>
          <a href="#" className="hover:text-blue-300">Profile</a>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-800 px-2 py-1 rounded">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none text-sm text-white placeholder-gray-400"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
