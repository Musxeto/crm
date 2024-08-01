import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { leadsFiltersConfig, leadsFieldsConfig } from '../configs/leadsSidebarConfig';
import LeadsTable from '../components/LeadsTable';
import { FilterContext } from '../contexts/FilterContext';
import leadsData from '../mock-data/leadsdata';
import { applyFilters } from '../utils/filterUtils';
import { BiFilter, BiPlus } from 'react-icons/bi';
import ActionsDropdown from '../components/ActionsDropdown';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmationModal from '../components/ConfirmationModal';
import MassUpdateModal from '../components/MassUpdateModal';
import MassConvertModal from '../components/MassConvertModal';
import MassEmailModal from '../components/MassEmailModal'; // Import the new component

const Leads = ({ leads, handleMassDelete }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { filters, updateFilter } = useContext(FilterContext);
  const [filteredLeads, setFilteredLeads] = useState(leadsData);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isConvertModalOpen, setIsConvertModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false); // Add state for email modal

  useEffect(() => {
    const updatedData = applyFilters(leadsData, filters);
    setFilteredLeads(updatedData);
  }, [filters]);

  const handleApplyFilters = (newFilters) => {
    updateFilter(newFilters);
  };

  const handleAction = (action) => {
    if (!action) {
      console.error('Action is undefined');
      return;
    }
    switch (action) {
      case 'Mass Delete':
        if (selectedLeads.length === 0) {
          toast.error('No leads selected for deletion.');
          return;
        }
        setIsModalOpen(true);
        break;

      case 'Mass Update':
        if (selectedLeads.length === 0) {
          toast.error('No leads selected for update.');
          return;
        }
        setIsUpdateModalOpen(true);
        break;

      case 'Mass Convert':
        if (selectedLeads.length === 0) {
          toast.error('No leads selected for conversion.');
          return;
        }
        setIsConvertModalOpen(true);
        break;

      case 'Mass Email':
        if (selectedLeads.length === 0) {
          toast.error('No leads selected for email.');
          return;
        }
        setIsEmailModalOpen(true);
        break;

      default:
        console.log('Unknown action:', action);
    }
  };

  const handleSelectLead = (leadId) => {
    setSelectedLeads((prev) =>
      prev.includes(leadId) ? prev.filter((id) => id !== leadId) : [...prev, leadId]
    );
  };

  const handleDeleteConfirmed = () => {
    const remainingLeads = filteredLeads.filter((lead) => !selectedLeads.includes(lead.id));
    setFilteredLeads(remainingLeads);
    setSelectedLeads([]);
    toast.success('Deleted selected leads.');
    setIsModalOpen(false);
  };

  const handleUpdateConfirmed = (field, value) => {
    const updatedLeads = filteredLeads.map((lead) =>
      selectedLeads.includes(lead.id) ? { ...lead, [field]: value } : lead
    );
    setFilteredLeads(updatedLeads);
    setSelectedLeads([]);
    toast.success('Updated selected leads.');
    setIsUpdateModalOpen(false);
  };

  const handleConvertConfirmed = (convertTo) => {
    const convertedLeads = selectedLeads.map((leadId) => ({
      ...filteredLeads.find((lead) => lead.id === leadId),
      type: convertTo,
    }));
    console.log('Converted leads:', convertedLeads);
    setSelectedLeads([]);
    toast.success('Converted selected leads to ' + convertTo + '.');
    setIsConvertModalOpen(false);
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
          <ActionsDropdown onAction={handleAction} />
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
          selectedLeads={selectedLeads}
          onSelectLead={handleSelectLead}
        />
      </div>
      {isModalOpen && (
        <ConfirmationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleDeleteConfirmed}
        />
      )}
      {isUpdateModalOpen && (
        <MassUpdateModal
          isOpen={isUpdateModalOpen}
          onClose={() => setIsUpdateModalOpen(false)}
          onConfirm={handleUpdateConfirmed}
          fields={[
            'leadName',
            'company',
            'email',
            'status',
            'phone',
            'mobile',
            'city',
            'state',
            'country',
            'zipCode',
            'firstName',
            'lastName',
            'annualRevenue',
            'industry',
            'campaignSource',
            'rating',
            'ownership',
            'website',
            'address',
          ]}
        />
      )}
      {isConvertModalOpen && (
        <MassConvertModal
          isOpen={isConvertModalOpen}
          onClose={() => setIsConvertModalOpen(false)}
          onConfirm={handleConvertConfirmed}
        />
      )}
      {isEmailModalOpen && (
        <MassEmailModal
          isOpen={isEmailModalOpen}
          onClose={() => setIsEmailModalOpen(false)}
          recipients={selectedLeads.map((leadId) =>
            filteredLeads.find((lead) => lead.id === leadId).email
          )}
        />
      )}
    </div>
  );
};

export default Leads;
