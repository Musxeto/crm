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
        <div className="absolute right-0 w-64 mt-2 bg-white shadow-lg rounded z-50">
          <ul className="list-none p-0 m-0">
            <li><button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Mass Delete</button></li>
            <li><button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Mass Update</button></li>
            <li><button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Mass Convert</button></li>
            <li><button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Manage Tags</button></li>
            <li><button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Mass Email</button></li>
            <li><button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Approve Leads</button></li>
            <li><button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Add to Campaigns</button></li>
            <li><button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Export Leads</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ActionsDropdown;
