import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AccountsTable from '../components/AccountsTable';
import ActionsDropdown from '../components/ActionsDropdown';
import { BiFilter, BiPlus, BiTable, BiLayout } from 'react-icons/bi';
import { FilterContext } from '../contexts/FilterContext';
import accountsData from '../mock-data/accountsdata';
import { applyFilters } from '../utils/filterUtils';
import ConfirmationModal from '../components/ConfirmationModal';
import MassUpdateModal from '../components/MassUpdateModal';
import MassEmailModal from '../components/MassEmailModal';
import { toast } from 'react-toastify';
import {accountsFiltersConfig,accountsFieldsConfig} from '../configs/accountsSidebarConfig'
const Accounts = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState('table');
  const { filters, updateFilter, clearFilters } = useContext(FilterContext);
  const [filteredAccounts, setFilteredAccounts] = useState(accountsData);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  useEffect(() => {
    clearFilters();
  }, [clearFilters]);

  useEffect(() => {
    const updatedData = applyFilters(accountsData, filters);
    setFilteredAccounts(updatedData);
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
        if (selectedAccounts.length === 0) {
          toast.error('No accounts selected for deletion.');
          return;
        }
        setIsModalOpen(true);
        break;

      case 'Mass Update':
        if (selectedAccounts.length === 0) {
          toast.error('No accounts selected for update.');
          return;
        }
        setIsUpdateModalOpen(true);
        break;

      case 'Mass Email':
        if (selectedAccounts.length === 0) {
          toast.error('No accounts selected for email.');
          return;
        }
        setIsEmailModalOpen(true);
        break;

      default:
        console.log('Unknown action:', action);
    }
  };

  const handleSelectAccount = (accountId) => {
    setSelectedAccounts((prev) =>
      prev.includes(accountId) ? prev.filter((id) => id !== accountId) : [...prev, accountId]
    );
  };

  const handleDeleteConfirmed = () => {
    const remainingAccounts = filteredAccounts.filter((account) => !selectedAccounts.includes(account.id));
    setFilteredAccounts(remainingAccounts);
    setSelectedAccounts([]);
    toast.success('Deleted selected accounts.');
    setIsModalOpen(false);
  };

  const handleUpdateConfirmed = (field, value) => {
    const updatedAccounts = filteredAccounts.map((account) =>
      selectedAccounts.includes(account.id) ? { ...account, [field]: value } : account
    );
    setFilteredAccounts(updatedAccounts);
    setSelectedAccounts([]);
    toast.success('Updated selected accounts.');
    setIsUpdateModalOpen(false);
  };

  return (
    <div className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        filtersConfig={accountsFiltersConfig}
        fieldsConfig={accountsFieldsConfig}
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
              to="/accounts/create-account"
              className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
            >
              <BiPlus className="w-5 h-5 mr-2" />
              Create Account
            </Link>
          </div>
        </header> 
          <AccountsTable
            accounts={filteredAccounts}
            selectedAccounts={selectedAccounts}
            onSelectAccount={handleSelectAccount}
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
            'accountName',
            'industry',
            'status',
            'revenue',
            'address',
            'phone',
          ]}
        />
      )}
      {isEmailModalOpen && (
        <MassEmailModal
          isOpen={isEmailModalOpen}
          onClose={() => setIsEmailModalOpen(false)}
          recipients={selectedAccounts.map((accountId) =>
            filteredAccounts.find((account) => account.id === accountId).email
          )}
        />
      )}
    </div>
  );
};

export default Accounts;
