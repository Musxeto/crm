import React, { useState } from 'react';

const ReportFilters = ({ filters, setFilters }) => {
  const [newFilter, setNewFilter] = useState('');

  const handleAddFilter = () => {
    if (newFilter && !filters.includes(newFilter)) {
      setFilters([...filters, newFilter]);
      setNewFilter('');
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium">Filters</label>
      <div className="mt-2 space-y-1">
        {filters.map(filter => (
          <div key={filter} className="flex items-center">
            <span className="mr-2">{filter}</span>
            <button type="button" onClick={() => setFilters(filters.filter(f => f !== filter))} className="text-red-500">Remove</button>
          </div>
        ))}
        <div className="flex items-center mt-2">
          <input
            type="text"
            value={newFilter}
            onChange={(e) => setNewFilter(e.target.value)}
            className="mr-2 px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Add filter"
          />
          <button type="button" onClick={handleAddFilter} className="px-3 py-2 bg-blue-500 text-white rounded-md">Add</button>
        </div>
      </div>
    </div>
  );
};

export default ReportFilters;
