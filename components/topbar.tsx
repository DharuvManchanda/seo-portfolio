import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3">
          <img src="/images/kit.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">
            Hair & Makeup by Anjali
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-black bg-white font-medium rounded-lg text-sm px-4 py-2"
            onClick={() => window.open('https://wa.me/9779473602', '_blank')}
          >
            Book Now
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        <div
          className={`transition-transform duration-300 ease-in-out ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 md:flex-row md:mt-0">
            <li>
              <a href="/" className="block py-2 px-3 md:p-0 text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block py-2 px-3 md:p-0 text-white">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="block py-2 px-3 md:p-0 text-white">
              Projects
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/hairandmakeupbyanjali/" target='_blank' className="block py-2 px-3 md:p-0 text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="www.linkedin.com/in/hairandmakeupbyanjali" target='_blank' className="block py-2 px-3 md:p-0 text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
