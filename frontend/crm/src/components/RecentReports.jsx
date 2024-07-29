import React from 'react';

const RecentReports = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border-b px-4 py-2">Report Name</th>
            <th className="border-b px-4 py-2">Date Generated</th>
            <th className="border-b px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example Report Rows */}
          <tr>
            <td className="border-b px-4 py-2">Sales Report - July 2024</td>
            <td className="border-b px-4 py-2">07/31/2024</td>
            <td className="border-b px-4 py-2">
              <button className="text-blue-500 hover:underline">View</button>
            </td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">Leads Report - July 2024</td>
            <td className="border-b px-4 py-2">07/31/2024</td>
            <td className="border-b px-4 py-2">
              <button className="text-blue-500 hover:underline">View</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default RecentReports;
