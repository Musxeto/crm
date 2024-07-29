import React from 'react';

const FiltersSection = () => {
  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <h2 className="text-xl font-semibold mb-2">Filters</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2">
            Date Range:
          </label>
          <div className="flex gap-4">
            <input type="date" className="border rounded p-2 w-full" placeholder="Start Date" /> -
            <input type="date" className="border rounded p-2 w-full" placeholder="End Date" />
          </div>
        </div>
        <label className="block mb-2">
          Category:
          <select className="border rounded p-2 w-full">
            <option value="all">All</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
          </select>
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Apply</button>
      </form>
    </div>
  );
};

export default FiltersSection;
