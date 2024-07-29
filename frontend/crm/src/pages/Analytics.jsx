import React from 'react';
import AnalyticsSummarySection from '../components/AnalyticsSummarySection';
import AnalyticsFilterSection from '../components/AnalyticsFilterSection';
import AnalyticsChartSection from '../components/AnalyticsChartSection';
import RecentAnalytics from '../components/RecentAnalytics';
import ReportGenerator from '../components/ReportGenerator'; // Add this component

const Analytics = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Analytics Overview</h1>
      <AnalyticsFilterSection />
      <AnalyticsSummarySection />
      <AnalyticsChartSection />
      <RecentAnalytics />
      <ReportGenerator />
    </div>
  );
};

export default Analytics;
