import React, { useState } from 'react';
import Sidebar from '../components/Leads/Sidebar';
import CreateLeadForm from '../components/Leads/CreateLeadForm';
import ActionsDropdown from '../components/Leads/ActionDropdown';
import LeadsTable from '../components/Leads/LeadsTable';
import { BiMenu, BiPlus,BiFilter } from 'react-icons/bi';
const Leads = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCreateLeadOpen, setIsCreateLeadOpen] = useState(false);

  const leads = [
    { id: 1, leadName: 'Lead 1', company: 'Company A', email: 'lead1@example.com', status: 'Open' },
    { id: 2, leadName: 'Lead 2', company: 'Company B', email: 'lead2@example.com', status: 'Closed' },
  ];

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
          <button
            onClick={() => setIsCreateLeadOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
          >
            <BiPlus className="w-5 h-5 mr-2" />
            Create Lead
          </button>
        </header>
        <LeadsTable leads={leads} />
        <CreateLeadForm isOpen={isCreateLeadOpen} onClose={() => setIsCreateLeadOpen(false)} />
      </div>
    </div>
  );
};

export default Leads;
