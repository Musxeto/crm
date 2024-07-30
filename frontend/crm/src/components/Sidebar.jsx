import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { leadsFiltersConfig, leadsFieldsConfig } from '../configs/leadsSidebarConfig';
import { useFilters } from '../contexts/FilterContext'; // Ensure this path is correct

const Sidebar = ({ isOpen, toggleSidebar, onApplyFilters }) => {
  const { filters, updateFilter, clearFilters } = useFilters();
  const [searchTerm, setSearchTerm] = useState('');

  const applyFilters = () => {
    onApplyFilters(filters);
  };

  const handleInputChange = (key, value) => {
    updateFilter(key, value);
  };

  const handleClearFilters = () => {
    clearFilters();
  };

  const hasActiveFilters = Object.keys(filters).length > 0;

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
              {leadsFiltersConfig.filter(filter => filter.label.toLowerCase().includes(searchTerm.toLowerCase())).map(({ key, label }) => (
                <div key={key} className="mt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={!!filters[key]}
                      onChange={(e) => updateFilter(key, e.target.checked ? '' : undefined)}
                      className="mr-2"
                    />
                    {label}
                  </label>
                  {filters[key] !== undefined && (
                    <input
                      type="text"
                      value={filters[key]}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                      className="w-full mt-1 p-2 border border-gray-300 rounded"
                      placeholder={`Enter ${label}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium">Filter By Fields</h3>
            <div className="mt-2">
              {leadsFieldsConfig.filter(field => field.label.toLowerCase().includes(searchTerm.toLowerCase())).map(({ key, label }) => (
                <div key={key} className="mt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={!!filters[key]}
                      onChange={(e) => updateFilter(key, e.target.checked ? '' : undefined)}
                      className="mr-2"
                    />
                    {label}
                  </label>
                  {filters[key] !== undefined && (
                    <input
                      type="text"
                      value={filters[key]}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                      className="w-full mt-1 p-2 border border-gray-300 rounded"
                      placeholder={`Enter ${label}`}
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
              onClick={applyFilters}
            >
              Apply Filters
            </button>
            <button
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 w-full mt-2"
              onClick={handleClearFilters}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;