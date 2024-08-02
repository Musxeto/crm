import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const ReportChartsSection = ({ data = [], chartType = 'Bar' }) => {
    console.log('Data received:', data);
  
    const defaultData = {
      labels: [],
      datasets: [
        {
          label: 'Data',
          data: [],
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1
        }
      ]
    };
  
    const chartData = data.length > 0 ? {
      labels: data.map(item => item.name || 'Unknown'),
      datasets: [
        {
          label: 'Data',
          data: data.map(item => item.value || 0),
          backgroundColor: chartType === 'Bar' ? 'rgba(75,192,192,0.4)' : 'rgba(153,102,255,0.4)',
          borderColor: chartType === 'Bar' ? 'rgba(75,192,192,1)' : 'rgba(153,102,255,1)',
          borderWidth: 1
        }
      ]
    } : defaultData;
  
    return (
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Charts Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Data Chart</h3>
            {chartType === 'Bar' ? (
              <Bar data={chartData} options={{ responsive: true }} />
            ) : (
              <Line data={chartData} options={{ responsive: true }} />
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ReportChartsSection;
  