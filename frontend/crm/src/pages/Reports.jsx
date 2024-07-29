import React from 'react';
import ReportSummary from '../components/ReportSummary';
import QuickAccess from '../components/QuickAccess';
import ChartsSection from '../components/ChartsSection';
import RecentReports from '../components/RecentReports';

const Reports = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Reports Overview</h1>
      <ReportSummary />
      <QuickAccess />
      <ChartsSection />
      <RecentReports />
    </div>
  );
};

export default Reports;
