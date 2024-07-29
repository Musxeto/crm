import React from 'react';
import { FaBell } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifications = () => {
  const notifications = [
    { id: 1, message: 'Task "Follow up call" is due tomorrow' },
    { id: 2, message: 'Lead "John Doe" needs follow-up' },
  ];

  const notify = (message) => {
    toast.info(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Notifications</h2>
        <FaBell className="text-blue-500" />
      </div>
      <ul className="mt-2">
        {notifications.map(notification => (
          <li key={notification.id} className="border-b py-2">
            <p onClick={() => notify(notification.message)} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{notification.message}</p>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default Notifications;
