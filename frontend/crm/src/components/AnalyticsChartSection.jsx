import React from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const ChartsSection = () => {
  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <h2 className="text-xl font-semibold mb-4">Analytics Charts</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Line Chart</h3>
          <div className="relative" style={{ height: '300px' }}>
            <Line data={data} options={options} />
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Bar Chart</h3>
          <div className="relative" style={{ height: '300px' }}>
            <Bar data={data} options={options} />
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Pie Chart</h3>
          <div className="relative" style={{ height: '300px' }}>
            <Pie data={data} options={options} />
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Doughnut Chart</h3>
          <div className="relative" style={{ height: '300px' }}>
            <Doughnut data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
