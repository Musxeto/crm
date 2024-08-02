import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ChartComponents = ({ chartType, data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Data',
        data: data.values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  switch (chartType) {
    case 'Bar':
      return <Bar data={chartData} />;
    case 'Line':
      return <Line data={chartData} />;
    case 'Pie':
      return <Pie data={chartData} />;
    default:
      return null;
  }
};

export default ChartComponents;
