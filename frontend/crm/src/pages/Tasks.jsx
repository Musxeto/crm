import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { tasksFieldsConfig, tasksFiltersConfig } from '../configs/tasksSidebarConfig';
import TasksTable from '../components/TasksTable';
import TasksKanban from '../components/TasksKanban';
import ActionsDropdown from '../components/ActionsDropdown';
import { BiFilter, BiPlus, BiTable, BiLayout } from 'react-icons/bi';
import { FilterContext } from '../contexts/FilterContext';
import tasksData from '../mock-data/tasksdata';
import { applyFilters } from '../utils/filterUtils';
import ConfirmationModal from '../components/ConfirmationModal';
import MassUpdateModal from '../components/MassUpdateModal';
import MassConvertModal from '../components/MassConvertModal';
import MassEmailModal from '../components/MassEmailModal'; // Import the new component
import { toast } from 'react-toastify';

const Tasks = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState('table');
  const { filters, updateFilter, clearFilters } = useContext(FilterContext);
  const [filteredTasks, setFilteredTasks] = useState(tasksData);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isConvertModalOpen, setIsConvertModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  useEffect(() => {
    clearFilters();
  }, [clearFilters]);

  useEffect(() => {
    const updatedData = applyFilters(tasksData, filters);
    setFilteredTasks(updatedData);
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
        if (selectedTasks.length === 0) {
          toast.error('No tasks selected for deletion.');
          return;
        }
        setIsModalOpen(true);
        break;

      case 'Mass Update':
        if (selectedTasks.length === 0) {
          toast.error('No tasks selected for update.');
          return;
        }
        setIsUpdateModalOpen(true);
        break;

      case 'Mass Convert':
        if (selectedTasks.length === 0) {
          toast.error('No tasks selected for conversion.');
          return;
        }
        setIsConvertModalOpen(true);
        break;

      case 'Mass Email':
        if (selectedTasks.length === 0) {
          toast.error('No tasks selected for email.');
          return;
        }
        setIsEmailModalOpen(true);
        break;

      default:
        console.log('Unknown action:', action);
    }
  };

  const handleSelectTask = (taskId) => {
    setSelectedTasks((prev) =>
      prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
    );
  };

  const handleDeleteConfirmed = () => {
    const remainingTasks = filteredTasks.filter((task) => !selectedTasks.includes(task.id));
    setFilteredTasks(remainingTasks);
    setSelectedTasks([]);
    toast.success('Deleted selected tasks.');
    setIsModalOpen(false);
  };

  const handleUpdateConfirmed = (field, value) => {
    const updatedTasks = filteredTasks.map((task) =>
      selectedTasks.includes(task.id) ? { ...task, [field]: value } : task
    );
    setFilteredTasks(updatedTasks);
    setSelectedTasks([]);
    toast.success('Updated selected tasks.');
    setIsUpdateModalOpen(false);
  };

  const handleConvertConfirmed = (convertTo) => {
    const convertedTasks = selectedTasks.map((taskId) => ({
      ...filteredTasks.find((task) => task.id === taskId),
      type: convertTo,
    }));
    console.log('Converted tasks:', convertedTasks);
    setSelectedTasks([]);
    toast.success('Converted selected tasks to ' + convertTo + '.');
    setIsConvertModalOpen(false);
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
              to="/tasks/create-task"
              className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
            >
              <BiPlus className="w-5 h-5 mr-2" />
              Create Task
            </Link>
          </div>
        </header>
        {viewMode === 'table' ? (
          <TasksTable
            tasks={filteredTasks}
            selectedTasks={selectedTasks}
            onSelectTask={handleSelectTask}
          />
        ) : (
          <TasksKanban />
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
            'taskName',
            'description',
            'status',
            'priority',
            'dueDate',
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
          recipients={selectedTasks.map((taskId) =>
            filteredTasks.find((task) => task.id === taskId).email
          )}
        />
      )}
    </div>
  );
};

export default Tasks;
