import React from 'react';

const QuickActions = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold">Quick Actions</h2>
      <div className="mt-2 flex flex-col">
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">Create New Lead</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">Create New Contact</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">Create New Account</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">Create New Deal</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">Create New Task</button>
      </div>
    </div>
  );
};

export default QuickActions;
