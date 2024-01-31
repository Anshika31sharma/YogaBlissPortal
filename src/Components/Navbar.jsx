import React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

const Navbar = ({ toggleDarkMode, setActivePage }) => {
  const handleTabClick = (page) => {
    setActivePage(page);
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1
          className="text-white text-2xl md:text-4xl font-semibold cursor-pointer mb-4 md:mb-0"
          onClick={() => handleTabClick('home')}
        >
          Elda Health
        </h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button
            className="text-white"
            onClick={() => handleTabClick('login')}
          >
            Login
          </button>
          <button
            className="text-white"
            onClick={() => handleTabClick('product')}
          >
            Product
          </button>
          <button
            className="text-white"
            onClick={() => handleTabClick('yoga')}
          >
            Yoga Batch
          </button>
          <button
            onClick={toggleDarkMode}
            className="text-white bg-night-50 px-4 py-2 rounded-full"
          >
            <BiMoon className="hidden md:block" />
            <BiSun className="md:hidden" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
