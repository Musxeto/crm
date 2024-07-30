import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  leadsFiltersConfig,
  leadsFieldsConfig,
} from "../configs/leadsSidebarConfig"; // Make sure this import is correct
import LeadsTable from "../components/LeadsTable";
import { FilterContext } from "../contexts/FilterContext";
import leadsData from "../mock-data/leadsdata";
import { applyFilters } from "../utils/filterUtils";
import { BiFilter, BiPlus } from "react-icons/bi";
import ActionsDropdown from "../components/ActionsDropdown";

const Leads = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { filters, updateFilter, clearFilters } = useContext(FilterContext);
  const [filteredLeads, setFilteredLeads] = useState(leadsData);

  useEffect(() => {
    console.log("Filters updated:", filters);
    const updatedData = applyFilters(leadsData, filters);
    setFilteredLeads(updatedData);
  }, [filters]);

  const handleApplyFilters = (newFilters) => {
    console.log("Applying filters:", newFilters);
    updateFilter(newFilters);
  };

  return (
    <div className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        filtersConfig={leadsFiltersConfig} // Updated
        fieldsConfig={leadsFieldsConfig} // Updated
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
            to="/leads/create-lead"
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
          >
            <BiPlus className="w-5 h-5 mr-2" />
            Create Lead
          </Link>
        </header>
        <LeadsTable leads={filteredLeads} />
      </div>
    </div>
  );
};

export default Leads;
