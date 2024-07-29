import React from 'react';
import ReportForm from '../components/ReportForm';

const CreateReportPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New Report</h1>
      <ReportForm />
    </div>
  );
};

export default CreateReportPage;
