import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [filters, setFilters] = useState({
    touchedRecords: false,
    untouchedRecords: false,
    modifiedRecords: false,
  });

  const handleFilterChange = (filter) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  return (
    <div
      className={`fixed top-0 left-0 z-30 w-64 h-full bg-white shadow-md transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <button onClick={toggleSidebar} className="p-4 flex items-center">
        <FaTimes className="w-5 h-5 mr-2" />
        Close
      </button>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div>
          <h3 className="font-medium">System Defined Filters</h3>
          <div className="mt-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.touchedRecords}
                onChange={() => handleFilterChange('touchedRecords')}
                className="mr-2"
              />
              Touched Records
            </label>
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={filters.untouchedRecords}
                onChange={() => handleFilterChange('untouchedRecords')}
                className="mr-2"
              />
              Untouched Records
            </label>
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={filters.modifiedRecords}
                onChange={() => handleFilterChange('modifiedRecords')}
                className="mr-2"
              />
              Modified Records
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
