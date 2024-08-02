import React from 'react';
import ChartComponents from './ChartComponents';

const ReportPreviewModal = ({ isOpen, onClose, reportData, chartType, chartData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">Report Preview</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium">{reportData.reportName}</h3>
          <p>{reportData.reportDescription}</p>
        </div>
        <div className="mb-4">
          <ChartComponents chartType={chartType} data={chartData} />
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReportPreviewModal;
