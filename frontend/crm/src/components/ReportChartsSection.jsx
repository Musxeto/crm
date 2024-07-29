import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const ReportChartsSection = ({ data }) => {
  const salesData = {
    labels: data.salesData.map(item => item.rapper),
    datasets: [
      {
        label: 'Sales',
        data: data.salesData.map(item => item.sales),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1
      }
    ]
  };

  const performanceData = {
    labels: data.performanceData.map(item => item.month),
    datasets: [
      {
        label: 'Performance',
        data: data.performanceData.map(item => item.performance),
        backgroundColor: 'rgba(153,102,255,0.4)',
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Charts Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Sales Data</h3>
          <Bar data={salesData} options={{ responsive: true }} />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Performance Data</h3>
          <Line data={performanceData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default ReportChartsSection;
