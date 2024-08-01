import React from "react";
import PropTypes from "prop-types";
import Table from "./Table"; // Reuse or create a new Table component

const TasksTable = ({ tasks, selectedTasks, onSelectTask }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Select",
        accessor: "select",
        Cell: ({ row }) => (
          <input
            type="checkbox"
            checked={selectedTasks.includes(row.original.id)}
            onChange={() => onSelectTask(row.original.id)}
          />
        ),
      },
      { Header: "Subject", accessor: "subject" },
      { Header: "Due Date", accessor: "dueDate" },
      { Header: "Status", accessor: "status" },
      { Header: "Priority", accessor: "priority" },
      { Header: "Related To", accessor: "relatedTo" },
      { Header: "Contact Name", accessor: "contactName" },
      { Header: "Task Owner", accessor: "taskOwner" },
      { Header: "Created By", accessor: "createdBy" },
      { Header: "Tag", accessor: "tag" },
      { Header: "Modified By", accessor: "modifiedBy" },
      { Header: "Created Time", accessor: "createdTime" },
      { Header: "Modified Time", accessor: "modifiedTime" },
      { Header: "Closed Time", accessor: "closedTime" },
      { Header: "Description", accessor: "description" },
    ],
    [selectedTasks, onSelectTask]
  );

  return <Table columns={columns} data={tasks} />;
};

TasksTable.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      relatedTo: PropTypes.string.isRequired,
      contactName: PropTypes.string.isRequired,
      taskOwner: PropTypes.string.isRequired,
      createdBy: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      modifiedBy: PropTypes.string.isRequired,
      createdTime: PropTypes.string.isRequired,
      modifiedTime: PropTypes.string.isRequired,
      closedTime: PropTypes.string,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TasksTable;
