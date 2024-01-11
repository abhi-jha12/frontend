import React, { useState } from 'react';

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <ul className="flex items-center bg-black rounded-lg">
        <li
          className="text-white text-sm mx-3 my-1 hover:text-gray-400 cursor-pointer font-normal leading-normal font-overpass"
          onClick={toggleDropdown}
        >
          ENG
          {/* Icon indicating dropdown, replace with your preferred icon */}
          <span className="ml-2">&#9660;</span>
        </li>
      </ul>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1 bg-black rounded-lg shadow-lg py-1">
          <ul>
            <li className="text-white text-sm px-10 py-1 hover:text-gray-400 cursor-pointer font-normal leading-normal font-overpass">ENG</li>
            <li className="text-white text-sm px-10 py-1 hover:text-gray-400 cursor-pointer font-normal leading-normal font-overpass">SPA</li>
            <li className="text-white text-sm px-10 py-1 hover:text-gray-400 cursor-pointer font-normal leading-normal font-overpass">FRA</li>
            <li className="text-white text-sm px-10 py-1 hover:text-gray-400 cursor-pointer font-normal leading-normal font-overpass">GER</li>
            {/* Add more languages as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
