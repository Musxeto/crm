import React from 'react';
import { FaUsers, FaAddressBook, FaBuilding, FaHandshake, FaTasks } from 'react-icons/fa';

const SummaryMetrics = () => {
  const metrics = [
    { id: 1, label: 'Total Leads', value: 100, icon: <FaUsers className="text-blue-500" /> },
    { id: 2, label: 'Total Contacts', value: 150, icon: <FaAddressBook className="text-green-500" /> },
    { id: 3, label: 'Total Accounts', value: 80, icon: <FaBuilding className="text-yellow-500" /> },
    { id: 4, label: 'Total Deals', value: 40, icon: <FaHandshake className="text-purple-500" /> },
    { id: 5, label: 'Tasks Completed', value: 60, icon: <FaTasks className="text-red-500" /> },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Summary Metrics</h2>
      <div className="grid grid-cols-1 gap-4">
        {metrics.map(metric => (
          <div key={metric.id} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="text-2xl">{metric.icon}</div>
            <div>
              <p className="text-lg font-semibold">{metric.label}</p>
              <p className="text-gray-600">{metric.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryMetrics;
