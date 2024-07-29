import React from 'react';
import AnalyticsSummarySection from '../components/AnalyticsSummarySection';
import AnalyticsFilterSection from '../components/AnalyticsFilterSection'
import RecentAnalytics from '../components/RecentAnalytics';
import AnalyticsChartSection from '../components/AnalyticsChartSection'
const Analytics = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Analytics Overview</h1>
      <AnalyticsSummarySection />
      <AnalyticsFilterSection/>
      <AnalyticsChartSection />
      <RecentAnalytics />
    </div>
  );
};

export default Analytics;
