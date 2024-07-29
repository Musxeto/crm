import React from 'react';

const CreateTasksPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create Task</h1>
      
      <div className="bg-white p-6 shadow-md rounded-lg">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Task Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Task Owner</label>
              <input type="text" className="border rounded p-2 w-full" placeholder="Ghulam Mustafa" />
            </div>
            <div>
              <label className="block mb-2">Subject</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Due Date</label>
              <input type="date" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Status</label>
              <select className="border rounded p-2 w-full">
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                {/* Add other options */}
              </select>
            </div>
            <div>
              <label className="block mb-2">Priority</label>
              <select className="border rounded p-2 w-full">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                {/* Add other options */}
              </select>
            </div>
            <div>
              <label className="block mb-2">Reminder</label>
              <input type="datetime-local" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Repeat</label>
              <select className="border rounded p-2 w-full">
                <option value="Never">Never</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                {/* Add other options */}
              </select>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Description Information</h2>
          <textarea className="border rounded p-2 w-full" rows="4" />
        </section>

        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Save Task</button>
      </div>
    </div>
  );
};

export default CreateTasksPage;
