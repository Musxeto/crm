import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Leads/Sidebar';
import ActionsDropdown from '../components/Leads/ActionDropdown';
import LeadsTable from '../components/Leads/LeadsTable';
import { BiFilter, BiPlus } from 'react-icons/bi';
import leadsdata from '../mock-data/leadsdata';

const Leads = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const leads = [...leadsdata]
  

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <header className="flex items-center justify-between mb-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-gray-500 hover:text-gray-700 flex items-center"
          >
            <BiFilter className="w-5 h-5 mr-2" />
            Filters
          </button>
          <ActionsDropdown />
          <Link
            to="/leads/create-lead" 
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
          >
            <BiPlus className="w-5 h-5 mr-2" />
            Create Lead
          </Link>
        </header>
        <LeadsTable leads={leads} />
      </div>
    </div>
  );
};

export default Leads;