import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartsSection = () => {
  const [chartType, setChartType] = useState('line');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <Bar data={data} options={options} />;
      case 'pie':
        return <Pie data={data} options={options} />;
      case 'line':
      default:
        return <Line data={data} options={options} />;
    }
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === 'startDate') {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Chart Section</h2>
      <div className="flex justify-between mb-4">
        <div>
          <label htmlFor="startDate" className="mr-2">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={handleDateChange}
            className="border p-1 rounded mr-4"
          />
          <label htmlFor="endDate" className="mr-2">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={handleDateChange}
            className="border p-1 rounded"
          />
        </div>
        <div>
          <button
            onClick={() => setChartType('line')}
            className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
          >
            Line Chart
          </button>
          <button
            onClick={() => setChartType('bar')}
            className="px-3 py-1 bg-green-500 text-white rounded mr-2"
          >
            Bar Chart
          </button>
          <button
            onClick={() => setChartType('pie')}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Pie Chart
          </button>
        </div>
      </div>
      <div className="h-80">
        {renderChart()}
      </div>
    </div>
  );
};

export default ChartsSection;
