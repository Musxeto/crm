import React from 'react';

const ReportPreview = ({ selectedFields, filters }) => {
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-md">
      <h2 className="text-lg font-bold mb-2">Report Preview</h2>
      <p><strong>Fields:</strong> {selectedFields.join(', ')}</p>
      <p><strong>Filters:</strong> {filters.join(', ')}</p>
      {/* Additional preview logic can go here */}
    </div>
  );
};

export default ReportPreview;
