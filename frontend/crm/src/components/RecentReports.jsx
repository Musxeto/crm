import React from 'react';

const RecentReports = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
      <ul>
        {data.map((report, index) => (
          <li key={index} className="flex justify-between py-2 border-b">
            <span>{report.reportName}</span>
            <span>{report.createdDate}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentReports;