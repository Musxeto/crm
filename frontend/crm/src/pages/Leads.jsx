import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { leadsFiltersConfig, leadsFieldsConfig } from '../configs/leadsSidebarConfig';
import LeadsTable from '../components/LeadsTable';
import { FilterContext } from '../contexts/FilterContext';
import leadsData from '../mock-data/leadsdata';
import { applyFilters } from '../utils/filterUtils';
import { BiFilter, BiPlus } from 'react-icons/bi';
import ActionModal from '../components/ActionModal';
import { toast } from 'react-toastify';

const Leads = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState('');

  const { filters, updateFilter } = useContext(FilterContext);
  const [filteredLeads, setFilteredLeads] = useState(leadsData);

  useEffect(() => {
    const updatedData = applyFilters(leadsData, filters);
    setFilteredLeads(updatedData);
  }, [filters]);

  const handleApplyFilters = (newFilters) => {
    updateFilter(newFilters);
  };

  const handleAction = (action) => {
    setCurrentAction(action);
    setActionModalOpen(true);
  };

  const handleConfirmAction = ({ field, value }) => {
    switch (currentAction) {
      case 'Mass Delete':
        const remainingLeads = filteredLeads.filter(lead => !selectedLeads.includes(lead.id));
        setFilteredLeads(remainingLeads);
        toast.success(`${selectedLeads.length} lead(s) deleted successfully!`);
        break;
      // Handle other actions...
      default:
        break;
    }
    setSelectedLeads([]);
    setActionModalOpen(false);
  };

  return (
    <div className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        filtersConfig={leadsFiltersConfig}
        fieldsConfig={leadsFieldsConfig}
        onApplyFilters={handleApplyFilters}
      />
      <div className="flex-1 pt-6 pb-0 px-6 lg:max-w-full md:max-w-screen-md sm:max-w-screen-sm min-h-full">
        <header className="flex items-center justify-between mb-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-gray-500 hover:text-gray-700 flex items-center"
          >
            <BiFilter className="w-5 h-5 mr-2" />
            Filters
          </button>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleAction('Mass Delete')}
              className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
              disabled={selectedLeads.length === 0}
            >
              Delete
            </button>
            {/* Add other action buttons here */}
          </div>
          <Link
            to="/leads/create-lead"
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
          >
            <BiPlus className="w-5 h-5 mr-2" />
            Create Lead
          </Link>
        </header>
        <LeadsTable
          leads={filteredLeads}
          onSelectLead={setSelectedLeads}
        />
        <ActionModal
          isOpen={actionModalOpen}
          action={currentAction}
          onClose={() => setActionModalOpen(false)}
          onConfirm={handleConfirmAction}
        />
      </div>
    </div>
  );
};

export default Leads;
