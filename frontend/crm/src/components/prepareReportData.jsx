import dealsdata from '../mock-data/dealsdata';
import leadsdata from '../mock-data/leadsdata';
import salesperformancedata from '../mock-data/salesperformancedata';

const prepareReportData = (reportType) => {
  let data = { labels: [], values: [] };

  switch (reportType) {
    case 'Leads':
      data.labels = leadsdata.map(item => item.status);
      data.values = leadsdata.map(item => item.count);
      break;
    case 'Deals':
      data.labels = dealsdata.map(item => item.stage);
      data.values = dealsdata.map(item => item.amount);
      break;
    case 'Sales':
      data.labels = salesperformancedata.sales.map(item => item.month);
      data.values = salesperformancedata.sales.map(item => item.sales);
      break;
    case 'Performance':
      data.labels = salesperformancedata.performance.map(item => item.month);
      data.values = salesperformancedata.performance.map(item => item.performance);
      break;
    default:
      data.labels = [];
      data.values = [];
      break;
  }

  return data;
};

export default prepareReportData;
