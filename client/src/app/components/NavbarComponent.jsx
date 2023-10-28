import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-teal-700 p-4 sticky">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">EcoSense</div>
          <ul className="flex space-x-4">
            <li><button className="bg-gray-700 hover:bg-teal-400 p-1 rounded-lg border-white"><a href="/login" className="text-white hover:text-gray-700">Login</a></button></li>
            <li><button className="bg-gray-700 hover:bg-teal-400 p-1 rounded-lg border-white"><a href="/signup" className="text-white hover:text-gray-700">SignUp</a></button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
