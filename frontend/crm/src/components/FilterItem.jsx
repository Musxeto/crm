import React from 'react';

const FilterItem = ({ filter, checked, onChange, value, onInputChange }) => (
    <div className="mt-2">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onChange(filter.key)}
          className="mr-2"
        />
        {filter.label}
      </label>
      {checked && (
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onInputChange(filter.key, e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded"
          placeholder={`Enter ${filter.label}`}
        />
      )}
    </div>
  );

export default FilterItem