import React from 'react';
const Navbar = ({  setActivePage }) => {
  const handleTabClick = (page) => {
    setActivePage(page);
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1
          className="text-white  md:text-4xl  font-semibold font-serif cursor-pointer mb-4 md:mb-0"
          onClick={() => handleTabClick('home')}
        >
         Yoga and Health
        </h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-2xl font-serif  ">
          <button
            className="text-white hover:underline underline-offset-1"
            onClick={() => handleTabClick('login')}
          >
            Login
          </button>
          <button
            className="text-white hover:underline underline-offset-1"
            onClick={() => handleTabClick('product')}
          >
            Product
          </button>
          <button
            className="text-white hover:underline underline-offset-1"
            onClick={() => handleTabClick('yoga')}
          >
            Yoga Batch
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
