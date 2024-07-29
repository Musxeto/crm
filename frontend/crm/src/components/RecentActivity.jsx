import React from 'react';
import { FaUserPlus, FaCheckCircle } from 'react-icons/fa';

const RecentActivity = () => {
  const activities = [
    { id: 1, type: 'Lead', action: 'Created', details: 'John Doe - Lead', icon: <FaUserPlus className="text-blue-500" /> },
    { id: 2, type: 'Task', action: 'Completed', details: 'Follow up call with Jane Smith', icon: <FaCheckCircle className="text-green-500" /> },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <ul className="space-y-4">
        {activities.map(activity => (
          <li key={activity.id} className="flex items-start space-x-4">
            <div className="text-2xl">{activity.icon}</div>
            <div>
              <p className="font-semibold"><strong>{activity.type}</strong>: {activity.action}</p>
              <p className="text-gray-600">{activity.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
