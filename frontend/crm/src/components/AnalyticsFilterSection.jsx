import React from 'react';

const FiltersSection = () => {
  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <h2 className="text-xl font-semibold mb-2">Filters</h2>
      <form>
        <label className="block mb-2">
          Date Range:
          <input type="date" className="border rounded p-2 w-full" />
        </label>
        <label className="block mb-2">
          Category:
          <select className="border rounded p-2 w-full">
            <option value="all">All</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
          </select>
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Apply</button>
      </form>
    </div>
  );
};

export default FiltersSection;
