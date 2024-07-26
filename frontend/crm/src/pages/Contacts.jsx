// src/pages/Contacts.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Contacts/Sidebar'; // Create a Sidebar component for Contacts
import ActionsDropdown from '../components/Leads/ActionDropdown'; // Create ActionsDropdown specific to Contacts
import ContactsTable from '../components/Contacts/ContactsTable'; // Create a ContactsTable component
import { BiFilter, BiPlus } from 'react-icons/bi';
import contactsData from '../mock-data/contactsdata';
const Contacts = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const contacts = [...contactsData];

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
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
        <ContactsTable contacts={contacts} />
      </div>
    </div>
  );
};

export default Contacts;
