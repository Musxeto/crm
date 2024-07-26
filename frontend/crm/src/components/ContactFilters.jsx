import React, { useState } from 'react';
import Sidebar from './Sidebar';

const ContactFilters = () => {
  const [filters, setFilters] = useState({
    touchedRecords: false,
    untouchedRecords: false,
    recordAction: false,
    relatedRecordsAction: false,
    locked: false,
    latestEmailStatus: false,
    activities: false,
    notes: false,
    deals: false,
    campaigns: false,
    cadences: false,
  });

  const [filterValues, setFilterValues] = useState({});

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

  return (
    <Sidebar isOpen={true} toggleSidebar={() => {}} filterType="contacts">
      <h3 className="font-medium">System Defined Filters</h3>
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
              {filter.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </label>
            {filters[filter] && (
              <input
                type="text"
                value={filterValues[filter] || ''}
                onChange={(e) => handleInputChange(filter, e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                placeholder={`Enter ${filter.replace(/([A-Z])/g, ' $1')}`}
              />
            )}
          </div>
        ))}
      </div>
    </Sidebar>
  );
};

export default ContactFilters;
