import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { contactsFieldsConfig, contactsFiltersConfig } from '../configs/contactsSidebarConfig';
import ContactsTable from '../components/ContactsTable';
import ActionsDropdown from '../components/ActionsDropdown';
import { BiFilter, BiPlus, BiTable, BiLayout } from 'react-icons/bi';
import { FilterContext } from '../contexts/FilterContext';
import contactsData from '../mock-data/contactsdata';
import { applyFilters } from '../utils/filterUtils';
import ConfirmationModal from '../components/ConfirmationModal';
import MassUpdateModal from '../components/MassUpdateModal';
import MassEmailModal from '../components/MassEmailModal';
import { toast } from 'react-toastify';

const Contacts = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState('table');
  const { filters, updateFilter, clearFilters } = useContext(FilterContext);
  const [filteredContacts, setFilteredContacts] = useState(contactsData);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  useEffect(() => {
    clearFilters();
  }, [clearFilters]);

  useEffect(() => {
    const updatedData = applyFilters(contactsData, filters);
    setFilteredContacts(updatedData);
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
        if (selectedContacts.length === 0) {
          toast.error('No contacts selected for deletion.');
          return;
        }
        setIsModalOpen(true);
        break;

      case 'Mass Update':
        if (selectedContacts.length === 0) {
          toast.error('No contacts selected for update.');
          return;
        }
        setIsUpdateModalOpen(true);
        break;

      case 'Mass Email':
        if (selectedContacts.length === 0) {
          toast.error('No contacts selected for email.');
          return;
        }
        setIsEmailModalOpen(true);
        break;

      default:
        console.log('Unknown action:', action);
    }
  };

  const handleSelectContact = (contactId) => {
    setSelectedContacts((prev) =>
      prev.includes(contactId) ? prev.filter((id) => id !== contactId) : [...prev, contactId]
    );
  };

  const handleDeleteConfirmed = () => {
    const remainingContacts = filteredContacts.filter((contact) => !selectedContacts.includes(contact.id));
    setFilteredContacts(remainingContacts);
    setSelectedContacts([]);
    toast.success('Deleted selected contacts.');
    setIsModalOpen(false);
  };

  const handleUpdateConfirmed = (field, value) => {
    const updatedContacts = filteredContacts.map((contact) =>
      selectedContacts.includes(contact.id) ? { ...contact, [field]: value } : contact
    );
    setFilteredContacts(updatedContacts);
    setSelectedContacts([]);
    toast.success('Updated selected contacts.');
    setIsUpdateModalOpen(false);
  };

  return (
    <div className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        filtersConfig={contactsFiltersConfig}
        fieldsConfig={contactsFieldsConfig}
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
              to="/contacts/create-contact"
              className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
            >
              <BiPlus className="w-5 h-5 mr-2" />
              Create Contact
            </Link>
          </div>
        </header>
          <ContactsTable
            contacts={filteredContacts}
            selectedContacts={selectedContacts}
            onSelectContact={handleSelectContact}
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
            'contactName',
            'email',
            'phone',
            'address',
            'company',
            'jobTitle',
          ]}
        />
      )}
      {isEmailModalOpen && (
        <MassEmailModal
          isOpen={isEmailModalOpen}
          onClose={() => setIsEmailModalOpen(false)}
          recipients={selectedContacts.map((contactId) =>
            filteredContacts.find((contact) => contact.id === contactId).email
          )}
        />
      )}
    </div>
  );
};

export default Contacts;
