import React, { useState } from 'react';
import ReportFieldsSelector from './ReportFieldsSelector';
import ReportFilters from './ReportFilters';
import ReportPreview from './ReportPreview';

const ReportForm = () => {
  const [reportName, setReportName] = useState('');
  const [selectedFields, setSelectedFields] = useState([]);
  const [filters, setFilters] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle report creation logic here
    console.log('Report Name:', reportName);
    console.log('Selected Fields:', selectedFields);
    console.log('Filters:', filters);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Report Name</label>
        <input
          type="text"
          value={reportName}
          onChange={(e) => setReportName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <ReportFieldsSelector selectedFields={selectedFields} setSelectedFields={setSelectedFields} />
      <ReportFilters filters={filters} setFilters={setFilters} />
      <ReportPreview selectedFields={selectedFields} filters={filters} />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Create Report</button>
    </form>
  );
};

export default ReportForm;
