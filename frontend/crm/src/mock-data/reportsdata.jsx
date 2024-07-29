export const mockReportData = {
    summary: {
      totalReports: 45,
      totalViews: 1500,
      mostViewedReport: 'Top Rappers of 2024'
    },
    charts: {
      salesData: [
        { rapper: 'Kanye West', sales: 15000 },
        { rapper: 'Drake', sales: 20000 },
        { rapper: 'Eminem', sales: 18000 },
        { rapper: 'Kendrick Lamar', sales: 16000 }
      ],
      performanceData: [
        { month: 'Jan', performance: 85 },
        { month: 'Feb', performance: 90 },
        { month: 'Mar', performance: 80 },
        { month: 'Apr', performance: 95 }
      ]
    },
    recent: [
      { reportName: 'Top Rappers of 2024', createdDate: '2024-07-01' },
      { reportName: 'Best Hip-Hop Albums', createdDate: '2024-07-15' },
      { reportName: 'Rapper Engagement Statistics', createdDate: '2024-07-20' }
    ]
  };