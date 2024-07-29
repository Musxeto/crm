import React from 'react';

const QuickAccess = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          View Sales Report
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          View Leads Report
        </button>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
          View Tasks Report
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">
          Generate New Report
        </button>
      </div>
    </div>
  );
};

export default QuickAccess;
