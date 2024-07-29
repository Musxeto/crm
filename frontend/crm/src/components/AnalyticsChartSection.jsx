import React from 'react';
import { Line } from 'react-chartjs-2';

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
    <div className="p-4 bg-white shadow rounded mb-4" style={{ height: '400px' }}>
      <h2 className="text-xl font-semibold mb-2">Analytics Charts</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartsSection;
