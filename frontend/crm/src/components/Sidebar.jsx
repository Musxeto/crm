import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar, filtersConfig, fieldsConfig, onApplyFilters }) => {
  const [filters, setFilters] = useState(filtersConfig.reduce((acc, filter) => {
    acc[filter.key] = false;
    return acc;
  }, {}));

  const [filterValues, setFilterValues] = useState(filtersConfig.reduce((acc, filter) => {
    acc[filter.key] = '';
    return acc;
  }, {}));

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
    setFilters(filtersConfig.reduce((acc, filter) => {
      acc[filter.key] = false;
      return acc;
    }, {}));
    
    setFilterValues(filtersConfig.reduce((acc, filter) => {
      acc[filter.key] = '';
      return acc;
    }, {}));
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
            <h3 className="font-medium">System Defined Filters</h3>
            <div className="mt-2">
              {filtersConfig.map(filter => (
                <div key={filter.key} className="mt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters[filter.key]}
                      onChange={() => handleFilterChange(filter.key)}
                      className="mr-2"
                    />
                    {filter.label}
                  </label>
                  {filters[filter.key] && (
                    <input
                      type="text"
                      value={filterValues[filter.key]}
                      onChange={(e) => handleInputChange(filter.key, e.target.value)}
                      className="w-full mt-1 p-2 border border-gray-300 rounded"
                      placeholder={`Enter ${filter.label}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-medium">Filter By Fields</h3>
            <div className="mt-2">
              {fieldsConfig.map(field => (
                <div key={field.key} className="mt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters[field.key]}
                      onChange={() => handleFilterChange(field.key)}
                      className="mr-2"
                    />
                    {field.label}
                  </label>
                  {filters[field.key] && (
                    <input
                      type="text"
                      value={filterValues[field.key]}
                      onChange={(e) => handleInputChange(field.key, e.target.value)}
                      className="w-full mt-1 p-2 border border-gray-300 rounded"
                      placeholder={`Enter ${field.label}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {hasActiveFilters && (
          <div className="p-4 border-t border-gray-200 bg-white">
            <button 
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
              onClick={() => onApplyFilters(filters, filterValues)}
            >
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
