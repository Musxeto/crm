import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { contactsFiltersConfig, contactsFieldsConfig } from '../configs/contactsSidebarConfig';
import ActionsDropdown from '../components/ActionsDropdown';
import ContactsTable from '../components/ContactsTable';
import { BiFilter, BiPlus } from 'react-icons/bi';
import contactsData from '../mock-data/contactsdata';

const Contacts = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleApplyFilters = (filters, filterValues) => {
    // Implement filter application logic
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
          <ActionsDropdown />
          <Link
            to="/contacts/create-contact"
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
          >
            <BiPlus className="w-5 h-5 mr-2" />
            Create Contact
          </Link>
        </header>
        <ContactsTable contacts={contactsData} />
      </div>
    </div>
  );
};

export default Contacts;
