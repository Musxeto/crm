import React from 'react';

const ReportSummary = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
          <p className="text-2xl font-bold">PKR 1,000,000</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Leads</h3>
          <p className="text-2xl font-bold">150</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Tasks Completed</h3>
          <p className="text-2xl font-bold">75</p>
        </div>
      </div>
    </div>
  );
};

export default ReportSummary;
