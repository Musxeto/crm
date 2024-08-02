import React from 'react';
import ReportSummary from '../components/ReportSummary';
import ReportsQuickAccess from '../components/ReportsQuickAccess';
import ReportChartsSection from '../components/ReportChartsSection';
import RecentReports from '../components/RecentReports';
import { mockReportData } from '../mock-data/reportsdata'; 

const Reports = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Reports Overview</h1>
      <ReportSummary data={mockReportData.summary} />
      <ReportsQuickAccess />
      <ReportChartsSection data={mockReportData.charts} />
      <RecentReports data={mockReportData.recent} />
    </div>
  );
};

export default Reports;