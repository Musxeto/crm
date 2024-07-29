import React, { useState } from 'react';
import { FaCheckCircle, FaRegCircle, FaTrash } from 'react-icons/fa';

const AssignedTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Follow up with John Doe', completed: false },
    { id: 2, title: 'Complete the project report', completed: true },
    { id: 3, title: 'Prepare presentation for client meeting', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleToggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        { id: Date.now(), title: newTask.trim(), completed: false }
      ]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Assigned Tasks</h2>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li
            key={task.id}
            className={`flex items-center space-x-2 p-2 rounded-lg ${task.completed ? 'bg-green-100' : 'bg-gray-100'} hover:bg-gray-200 transition`}
          >
            <div className="text-xl cursor-pointer" onClick={() => handleToggleTask(task.id)}>
              {task.completed ? <FaCheckCircle className="text-green-500" /> : <FaRegCircle className="text-gray-500" />}
            </div>
            <p className={`${task.completed ? 'line-through text-gray-500' : ''}`}>{task.title}</p>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignedTasks;
