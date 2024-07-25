import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [filters, setFilters] = useState({
    touchedRecords: false,
    untouchedRecords: false,
    recordAction: false,
    relatedRecordsAction: false,
    locked: false,
    latestEmailStatus: false,
    activities: false,
    notes: false,
    campaigns: false,
    cadences: false,
    annualRevenue: false,
    city: false,
    company: false,
    convertedAccount: false,
    convertedContact: false,
    convertedDeal: false,
    country: false,
    createdBy: false,
    createdTime: false,
    email: false,
    emailOptOut: false,
    fax: false,
    firstName: false,
    industry: false,
    lastActivityTime: false,
    lastName: false,
    leadConversionTime: false,
    leadName: false,
    leadOwner: false,
    leadSource: false,
    leadStatus: false,
    mobile: false,
    modifiedBy: false,
    modifiedTime: false,
    noOfEmployees: false,
    phone: false,
    rating: false,
    salutation: false,
    secondaryEmail: false,
    skypeID: false,
    state: false,
    street: false,
    tag: false,
    title: false,
    twitter: false,
    unsubscribedMode: false,
    unsubscribedTime: false,
    website: false,
    zipCode: false,
  });

  const [filterValues, setFilterValues] = useState({
    touchedRecords: '',
    untouchedRecords: '',
    recordAction: '',
    relatedRecordsAction: '',
    locked: '',
    latestEmailStatus: '',
    activities: '',
    notes: '',
    campaigns: '',
    cadences: '',
    annualRevenue: '',
    city: '',
    company: '',
    convertedAccount: '',
    convertedContact: '',
    convertedDeal: '',
    country: '',
    createdBy: '',
    createdTime: '',
    email: '',
    emailOptOut: '',
    fax: '',
    firstName: '',
    industry: '',
    lastActivityTime: '',
    lastName: '',
    leadConversionTime: '',
    leadName: '',
    leadOwner: '',
    leadSource: '',
    leadStatus: '',
    mobile: '',
    modifiedBy: '',
    modifiedTime: '',
    noOfEmployees: '',
    phone: '',
    rating: '',
    salutation: '',
    secondaryEmail: '',
    skypeID: '',
    state: '',
    street: '',
    tag: '',
    title: '',
    twitter: '',
    unsubscribedMode: '',
    unsubscribedTime: '',
    website: '',
    zipCode: '',
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (filter) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const handleInputChange = (filter, value) => {
    setFilterValues((prev) => ({
      ...prev,
      [filter]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      touchedRecords: false,
      untouchedRecords: false,
      recordAction: false,
      relatedRecordsAction: false,
      locked: false,
      latestEmailStatus: false,
      activities: false,
      notes: false,
      campaigns: false,
      cadences: false,
      annualRevenue: false,
      city: false,
      company: false,
      convertedAccount: false,
      convertedContact: false,
      convertedDeal: false,
      country: false,
      createdBy: false,
      createdTime: false,
      email: false,
      emailOptOut: false,
      fax: false,
      firstName: false,
      industry: false,
      lastActivityTime: false,
      lastName: false,
      leadConversionTime: false,
      leadName: false,
      leadOwner: false,
      leadSource: false,
      leadStatus: false,
      mobile: false,
      modifiedBy: false,
      modifiedTime: false,
      noOfEmployees: false,
      phone: false,
      rating: false,
      salutation: false,
      secondaryEmail: false,
      skypeID: false,
      state: false,
      street: false,
      tag: false,
      title: false,
      twitter: false,
      unsubscribedMode: false,
      unsubscribedTime: false,
      website: false,
      zipCode: false,
    });

    setFilterValues({
      touchedRecords: '',
      untouchedRecords: '',
      recordAction: '',
      relatedRecordsAction: '',
      locked: '',
      latestEmailStatus: '',
      activities: '',
      notes: '',
      campaigns: '',
      cadences: '',
      annualRevenue: '',
      city: '',
      company: '',
      convertedAccount: '',
      convertedContact: '',
      convertedDeal: '',
      country: '',
      createdBy: '',
      createdTime: '',
      email: '',
      emailOptOut: '',
      fax: '',
      firstName: '',
      industry: '',
      lastActivityTime: '',
      lastName: '',
      leadConversionTime: '',
      leadName: '',
      leadOwner: '',
      leadSource: '',
      leadStatus: '',
      mobile: '',
      modifiedBy: '',
      modifiedTime: '',
      noOfEmployees: '',
      phone: '',
      rating: '',
      salutation: '',
      secondaryEmail: '',
      skypeID: '',
      state: '',
      street: '',
      tag: '',
      title: '',
      twitter: '',
      unsubscribedMode: '',
      unsubscribedTime: '',
      website: '',
      zipCode: '',
    });
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter);

  return (
    <div className={`fixed left-0 top-0 z-30 w-80 h-full bg-white shadow-md transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <div className="flex-none p-4 border-b border-gray-200">
          <button onClick={toggleSidebar} className="flex items-center mb-4 text-gray-600">
            <FaTimes className="w-5 h-5 mr-2" />
            Close
          </button>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Search filters..."
          />
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div>
            <h3 className="font-medium">System Defined Filters</h3>
            <div className="mt-2">
              {['touchedRecords', 'untouchedRecords', 'recordAction', 'relatedRecordsAction', 'locked', 'latestEmailStatus', 'activities', 'notes', 'campaigns', 'cadences'].map(filter => (
                <div key={filter} className="mt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters[filter]}
                      onChange={() => handleFilterChange(filter)}
                      className="mr-2"
                    />
                    {filter.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </label>
                  {filters[filter] && (
                    <input
                      type="text"
                      value={filterValues[filter]}
                      onChange={(e) => handleInputChange(filter, e.target.value)}
                      className="w-full mt-1 p-2 border border-gray-300 rounded"
                      placeholder={`Enter ${filter.replace(/([A-Z])/g, ' $1')}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-medium">Filter By Fields</h3>
            <div className="mt-2">
              {Object.keys(filters).map((filter) => (
                <div key={filter} className="mt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters[filter]}
                      onChange={() => handleFilterChange(filter)}
                      className="mr-2"
                    />
                    {filter.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </label>
                  {filters[filter] && (
                    <input
                      type="text"
                      value={filterValues[filter]}
                      onChange={(e) => handleInputChange(filter, e.target.value)}
                      className="w-full mt-1 p-2 border border-gray-300 rounded"
                      placeholder={`Enter ${filter.replace(/([A-Z])/g, ' $1')}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {hasActiveFilters && (
          <div className="p-4 border
ChatGPT
-t border-gray-200 bg-white">
<button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
Apply Filter
</button>
<button
           className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 w-full mt-2"
           onClick={handleClearFilters}
         >
Clear
</button>
</div>
)}
</div>
</div>
);
};

export default Sidebar;