import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const ActionsDropdown = ({ onAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = (action) => {
    setIsOpen(false);
    if (onAction) {
      onAction(action);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 text-white px-4 py-2 rounded flex items-center text-sm md:text-base"
      >
        Actions
        <FaChevronDown className="w-5 h-5 ml-2" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded z-50 w-64 sm:w-48">
          <ul className="list-none p-0 m-0">
            {['Mass Delete', 'Mass Update', 'Mass Convert', 'Manage Tags', 'Mass Email', 'Approve Leads', 'Add to Campaigns', 'Export Leads'].map(action => (
              <li key={action}>
                <button
                  onClick={() => handleAction(action)}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  {action}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ActionsDropdown;
