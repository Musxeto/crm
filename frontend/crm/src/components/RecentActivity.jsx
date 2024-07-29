import React from 'react';

const RecentActivity = () => {
  const activities = [
    { id: 1, type: 'Lead', action: 'Created', details: 'John Doe - Lead' },
    { id: 2, type: 'Task', action: 'Completed', details: 'Follow up call with Jane Smith' },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold">Recent Activity</h2>
      <ul className="mt-2">
        {activities.map(activity => (
          <li key={activity.id} className="border-b py-2">
            <p><strong>{activity.type}</strong>: {activity.action}</p>
            <p>{activity.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
