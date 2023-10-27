import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-teal-700 p-4 sticky">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">EcoSense</div>
          <ul className="flex space-x-4">
            <li><a href="/news" className="text-white text-lg hover:text-gray-700">News</a></li>
            <li><a href="/blogs" className="text-white text-lg hover:text-gray-700">Blogs</a></li>
            <li><a href="/community" className="text-white text-lg hover:text-gray-700">Community</a></li>
            <li><button className="bg-gray-700 hover:bg-teal-400 p-1 rounded-lg border-white"><a href="/login" className="text-white hover:text-gray-700">Login</a></button></li>
            <li><button className="bg-gray-700 hover:bg-teal-400 p-1 rounded-lg border-white"><a href="/logout" className="text-white hover:text-gray-700">Logout</a></button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
