import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { leadsFiltersConfig, leadsFieldsConfig } from "../configs/leadsSidebarConfig";
import LeadsTable from "../components/LeadsTable";
import { FilterContext } from "../contexts/FilterContext";
import leadsData from "../mock-data/leadsdata";
import { applyFilters } from "../utils/filterUtils";
import { BiFilter, BiPlus } from "react-icons/bi";
import ActionsDropdown from "../components/ActionsDropdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "../components/ConfirmationModal"; // Create this component

const Leads = ({ leads, handleMassDelete }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { filters, updateFilter } = useContext(FilterContext);
  const [filteredLeads, setFilteredLeads] = useState(leadsData);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const updatedData = applyFilters(leadsData, filters);
    setFilteredLeads(updatedData);
  }, [filters]);

  const handleApplyFilters = (newFilters) => {
    updateFilter(newFilters);
  };

  const handleAction = (action) => {
    if (!action) {
      console.error("Action is undefined");
      return;
    }
    switch (action) {
      case "Mass Delete":
        if (selectedLeads.length === 0) {
          toast.error("No leads selected for deletion.");
          return;
        }
        setIsModalOpen(true);
        break;

      case "Mass Update":
        if (selectedLeads.length === 0) {
          toast.error("No leads selected for update.");
          return;
        }
        console.log("Updating leads:", selectedLeads, "with", field, "=", value);
        break;

      case "Mass Convert":
        if (selectedLeads.length === 0) {
          toast.error("No leads selected for conversion.");
          return;
        }
        console.log("Converting leads:", selectedLeads, "with", field, "=", value);
        break;

      case "Manage Tags":
        if (selectedLeads.length === 0) {
          toast.error("No leads selected for tag management.");
          return;
        }
        console.log("Managing tags for leads:", selectedLeads, "with", field, "=", value);
        break;

      case "Mass Email":
        if (selectedLeads.length === 0) {
          toast.error("No leads selected for emailing.");
          return;
        }
        console.log("Sending emails to leads:", selectedLeads, "with", field, "=", value);
        break;

      default:
        console.log("Unknown action:", action);
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
    toast.success("Deleted selected leads.");
    setIsModalOpen(false);
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
    </div>
  );
};

export default Leads;
