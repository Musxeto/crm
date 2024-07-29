import React from 'react';

const ReportSummary = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <h2 className="text-xl font-semibold">Report Summary</h2>
      <div className="mt-4">
        <p><strong>Total Reports:</strong> {data.totalReports}</p>
        <p><strong>Total Views:</strong> {data.totalViews}</p>
        <p><strong>Most Viewed Report:</strong> {data.mostViewedReport}</p>
      </div>
    </div>
  );
};

export default ReportSummary;