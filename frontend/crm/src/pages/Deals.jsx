import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { dealsFieldsConfig, dealsFiltersConfig } from '../configs/dealsSidebarConfig';
import DealsTable from '../components/DealsTable';
import DealsKanban from '../components/DealsKanban';
import ActionsDropdown from '../components/ActionsDropdown';
import { BiFilter, BiPlus, BiTable, BiLayout } from 'react-icons/bi';
import { FilterContext } from '../contexts/FilterContext';
import dealsData from '../mock-data/dealsdata';
import { applyFilters } from '../utils/filterUtils';
import ConfirmationModal from '../components/ConfirmationModal';
import MassUpdateModal from '../components/MassUpdateModal';
import MassConvertModal from '../components/MassConvertModal';
import MassEmailModal from '../components/MassEmailModal';
import { toast } from 'react-toastify';

const Deals = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState('table');
  const { filters, updateFilter, clearFilters } = useContext(FilterContext);
  const [filteredDeals, setFilteredDeals] = useState(dealsData);
  const [selectedDeals, setSelectedDeals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isConvertModalOpen, setIsConvertModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  useEffect(() => {
    clearFilters();
  }, [clearFilters]);

  useEffect(() => {
    const updatedData = applyFilters(dealsData, filters);
    setFilteredDeals(updatedData);
  }, [filters]);

  const handleApplyFilters = (filters) => {
    updateFilter(filters);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'table' ? 'kanban' : 'table');
  };

  const handleAction = (action) => {
    if (!action) {
      console.error('Action is undefined');
      return;
    }
    switch (action) {
      case 'Mass Delete':
        if (selectedDeals.length === 0) {
          toast.error('No deals selected for deletion.');
          return;
        }
        setIsModalOpen(true);
        break;

      case 'Mass Update':
        if (selectedDeals.length === 0) {
          toast.error('No deals selected for update.');
          return;
        }
        setIsUpdateModalOpen(true);
        break;

      case 'Mass Convert':
        if (selectedDeals.length === 0) {
          toast.error('No deals selected for conversion.');
          return;
        }
        setIsConvertModalOpen(true);
        break;

      case 'Mass Email':
        if (selectedDeals.length === 0) {
          toast.error('No deals selected for email.');
          return;
        }
        setIsEmailModalOpen(true);
        break;

      default:
        console.log('Unknown action:', action);
    }
  };

  const handleSelectDeal = (dealId) => {
    console.log('Selected deal ID:', dealId); 
    setSelectedDeals((prev) => {
      const isSelected = prev.includes(dealId);
      console.log('Previously selected deals:', prev); 
      console.log('Is deal currently selected?', isSelected); 
      return isSelected ? prev.filter((id) => id !== dealId) : [...prev, dealId];
    });
  };
  

  const handleDeleteConfirmed = () => {
    const remainingDeals = filteredDeals.filter((deal) => !selectedDeals.includes(deal.id));
    setFilteredDeals(remainingDeals);
    setSelectedDeals([]);
    toast.success('Deleted selected deals.');
    setIsModalOpen(false);
  };

  const handleUpdateConfirmed = (field, value) => {
    const updatedDeals = filteredDeals.map((deal) =>
      selectedDeals.includes(deal.id) ? { ...deal, [field]: value } : deal
    );
    setFilteredDeals(updatedDeals);
    setSelectedDeals([]);
    toast.success('Updated selected deals.');
    setIsUpdateModalOpen(false);
  };

  const handleConvertConfirmed = (convertTo) => {
    const convertedDeals = selectedDeals.map((dealId) => ({
      ...filteredDeals.find((deal) => deal.id === dealId),
      type: convertTo,
    }));
    console.log('Converted deals:', convertedDeals);
    setSelectedDeals([]);
    toast.success('Converted selected deals to ' + convertTo + '.');
    setIsConvertModalOpen(false);
  };

  return (
    <div className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        filtersConfig={dealsFiltersConfig}
        fieldsConfig={dealsFieldsConfig}
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
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleViewMode}
              className="p-2 text-gray-500 hover:text-gray-700 flex items-center"
            >
              {viewMode === 'table' ? (
                <>
                  <BiLayout className="w-5 h-5 mr-2" />
                  Kanban View
                </>
              ) : (
                <>
                  <BiTable className="w-5 h-5 mr-2" />
                  Table View
                </>
              )}
            </button>
            <Link
              to="/deals/create-deal"
              className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
            >
              <BiPlus className="w-5 h-5 mr-2" />
              Create Deal
            </Link>
          </div>
        </header>
        {viewMode === 'table' ? (
          <DealsTable
            deals={filteredDeals}
            selectedDeals={selectedDeals}
            onSelectDeal={handleSelectDeal}
          />
        ) : (
          <DealsKanban data={filteredDeals}/>
        )}
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
            'dealName',
            'description',
            'status',
            'amount',
            'closeDate',
            'assignedTo',
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
          recipients={selectedDeals.map((dealId) =>
            filteredDeals.find((deal) => deal.id === dealId).email
          )}
        />
      )}
    </div>
  );
};

export default Deals;
