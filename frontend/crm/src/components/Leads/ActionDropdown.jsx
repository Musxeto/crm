import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const ActionsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 text-white px-4 py-2 rounded flex items-center"
      >
        Actions
        <FaChevronDown className="w-5 h-5 ml-2" />
      </button>
      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 bg-white shadow-lg rounded z-50">
          <ul>
            <li><button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Mass Delete</button></li>
            <li><button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Mass Update</button></li>
            <li><button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Mass Convert</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ActionsDropdown;
