import React from 'react';

const Notifications = () => {
  const notifications = [
    { id: 1, message: 'Task "Follow up call" is due tomorrow' },
    { id: 2, message: 'Lead "John Doe" needs follow-up' },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold">Notifications</h2>
      <ul className="mt-2">
        {notifications.map(notification => (
          <li key={notification.id} className="border-b py-2">
            <p>{notification.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
