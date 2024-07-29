import React from 'react';
import { Link } from 'react-router-dom';

const ReportsQuickAccess = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <h2 className="text-xl font-semibold">Quick Access</h2>
      <div className="mt-4">
        <Link
          to="/reports/create-report"
          className="bg-blue-500 text-white px-4 py-2 rounded inline-block"
        >
          Create New Report
        </Link>
        <Link
          to="/reports"
          className="bg-green-500 text-white px-4 py-2 rounded inline-block ml-4"
        >
          View All Reports
        </Link>
      </div>
    </div>
  );
};

export default ReportsQuickAccess;
