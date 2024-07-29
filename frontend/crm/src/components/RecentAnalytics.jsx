import React from 'react';

const RecentAnalytics = () => {
  const analytics = [
    { id: 1, name: 'Sales Performance', date: '2024-07-25' },
    { id: 2, name: 'Marketing Campaigns', date: '2024-07-24' },
  ];

  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <h2 className="text-xl font-semibold mb-2">Recent Analytics</h2>
      <ul>
        {analytics.map((item) => (
          <li key={item.id} className="mb-2">
            <p className="font-bold">{item.name}</p>
            <p className="text-gray-500">{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentAnalytics;
