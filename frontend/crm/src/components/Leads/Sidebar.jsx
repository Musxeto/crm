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

  return (
    <div
      className={`fixed top-0 left-0 z-30 w-64 h-full bg-white shadow-md transition-transform duration-300 overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <button onClick={toggleSidebar} className="p-4 flex items-center">
        <FaTimes className="w-5 h-5 mr-2" />
        Close
      </button>
      <div className="p-4">
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
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-medium">Filter By Fields</h3>
          <div className="mt-2">
            {Object.keys(filters).map((filter, index) => {
              if (index > 9) { // Display all filters
                return (
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
                      />
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
