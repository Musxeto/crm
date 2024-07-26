// src/components/Contacts/Sidebar.js
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [filters, setFilters] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    company: false,
    city: false,
    state: false,
    country: false,
    zipCode: false,
  });

  const [filterValues, setFilterValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (filter) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const handleInputChange = (filter, value) => {
    setFilterValues((prev) => ({
      ...prev,
      [filter]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      company: false,
      city: false,
      state: false,
      country: false,
      zipCode: false,
    });

    setFilterValues({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
    });
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter);

  return (
    <div className={`fixed left-0 top-0 z-30 w-80 h-full bg-white shadow-md transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <div className="flex-none p-4 border-b border-gray-200">
          <button onClick={toggleSidebar} className="flex items-center mb-4 text-gray-600">
            <FaTimes className="w-5 h-5 mr-2" />
            Close
          </button>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Search filters..."
          />
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div>
            <h3 className="font-medium">Filter By Fields</h3>
            <div className="mt-2">
              {Object.keys(filters).map((filter) => (
                <div key={filter} className="mt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters[filter]}
                      onChange={() => handleFilterChange(filter)}
                      className="mr-2"
                    />
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </label>
                  {filters[filter] && (
                    <input
                      type="text"
                      value={filterValues[filter]}
                      onChange={(e) => handleInputChange(filter, e.target.value)}
                      className="w-full mt-1 p-2 border border-gray-300 rounded"
                      placeholder={`Enter ${filter.charAt(0).toUpperCase() + filter.slice(1)}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {hasActiveFilters && (
          <div className="p-4 border-t border-gray-200 bg-white">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
              Apply Filter
            </button>
            <button
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 w-full mt-2"
              onClick={handleClearFilters}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
