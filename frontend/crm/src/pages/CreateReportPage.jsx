import React from 'react';
import ReportForm from '../components/ReportForm';
import ReportChartsSection from '../components/ReportChartsSection';
import leadsdata  from '../mock-data/leadsdata';
import dealsdata from '../mock-data/dealsdata'
import accountdeals from '../mock-data/accountsdata'
import tasksdata from '../mock-data/tasksdata'
const CreateReportPage = () => {
  const [reportData, setReportData] = React.useState([]);
  const [chartType, setChartType] = React.useState('Bar');

  const handleReportCreation = (formData) => {
    let data;
    switch (formData.reportType) {
      case 'Leads':
        data = leadsdata;
        break;
      case 'Deals':
        data = dealsdata;
        break;
      case 'Tasks':
        data = tasksdata;
        break;
      case 'Accounts':
        data = accountdeals;
        break;
      default:
        data = { salesData: [], performanceData: [] };
    }
    setReportData(data);
    setChartType(formData.chartType);
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New Report</h1>
      <ReportForm onReportCreation={handleReportCreation} />
      <ReportChartsSection data={reportData} chartType={chartType} />
    </div>
  );
};

export default CreateReportPage;
