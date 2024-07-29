import React from "react";
import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold">Quick Actions</h2>
      <div className="mt-2 flex flex-col space-y-2">
        <Link to="/leads/create-lead" className="flex">
          <button className="bg-blue-500 text-white py-2 px-4 rounded flex-grow">
            Create New Lead
          </button>
        </Link>
        <Link to="/contacts/create-contact" className="flex">
          <button className="bg-blue-500 text-white py-2 px-4 rounded flex-grow">
            Create New Contact
          </button>
        </Link>
        <Link to="/accounts/create-account" className="flex">
          <button className="bg-blue-500 text-white py-2 px-4 rounded flex-grow">
            Create New Account
          </button>
        </Link>
        <Link to="/deals/create-deal" className="flex">
          <button className="bg-blue-500 text-white py-2 px-4 rounded flex-grow">
            Create New Deal
          </button>
        </Link>
        <Link to="/tasks/create-task" className="flex">
          <button className="bg-blue-500 text-white py-2 px-4 rounded flex-grow">
            Create New Task
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuickActions;
