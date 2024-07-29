import React from 'react';

const Settings = () => {
  return (
    <div className="absolute right-0 w-64 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="py-2">
        <div className="px-4 py-2 border-b border-gray-200 text-gray-600 hover:bg-gray-100">
          Profile Settings
        </div>
        <div className="px-4 py-2 border-b border-gray-200 text-gray-600 hover:bg-gray-100">
          Account Settings
        </div>
        <div className="px-4 py-2 text-gray-600 hover:bg-gray-100">
          Logout
        </div>
      </div>
    </div>
  );
};

export default Settings;