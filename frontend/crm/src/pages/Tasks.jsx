import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import tasksData from '../mock-data/tasksdata'; // Create this mock data file for tasks
import TasksTable from '../components/TasksTable'; // Create this component
import TasksKanban from '../components/TasksKanban'; // Create this component
import ActionsDropdown from '../components/ActionsDropdown';
import { BiFilter, BiPlus, BiTable, BiLayout } from 'react-icons/bi';
import { tasksFieldsConfig, tasksFiltersConfig } from '../configs/tasksSidebarConfig'; // Create this config file

const Tasks = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState('table');

  const handleApplyFilters = (filters, filterValues) => {
    // Handle filters application
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'table' ? 'kanban' : 'table');
  };

  return (
    <div className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        filtersConfig={tasksFiltersConfig}
        fieldsConfig={tasksFieldsConfig}
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
              to="/tasks/create-task"
              className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
            >
              <BiPlus className="w-5 h-5 mr-2" />
              Create Task
            </Link>
          </div>
        </header>
        {viewMode === 'table' ? (
          <TasksTable tasks={tasksData} />
        ) : (
          <TasksKanban />
        )}
      </div>
    </div>
  );
};

export default Tasks;
