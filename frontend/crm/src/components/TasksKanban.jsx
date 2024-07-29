import React from 'react';
import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import tasksData from '../mock-data/tasksdata'; // Create this mock data file for tasks

const generateKanbanColumns = (tasks) => {
  const columns = {
    'Not Started': [],
    'In Progress': [],
    'Completed': [],
    'On Hold': [],
    'Cancelled': []
  };

  tasks.forEach(task => {
    const column = columns[task.status];
    if (column) {
      column.push({
        id: task.id,
        title: task.subject,
        dueDate: task.dueDate,
        priority: task.priority,
        relatedTo: task.relatedTo,
        contactName: task.contactName,
        taskOwner: task.taskOwner,
        createdBy: task.createdBy,
        tag: task.tag,
        modifiedBy: task.modifiedBy,
        createdTime: task.createdTime,
        modifiedTime: task.modifiedTime,
        closedTime: task.closedTime,
        description: task.description,
      });
    }
  });

  return Object.keys(columns).map(status => ({
    id: status,
    title: status,
    cards: columns[status],
  }));
};

const TasksKanban = () => {
  return (
    <Board
      initialBoard={{ columns: generateKanbanColumns(tasksData) }}
      allowAddCard={{ on: 'top' }}
    />
  );
};

export default TasksKanban;
