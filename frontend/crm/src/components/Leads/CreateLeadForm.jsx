import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const CreateLeadForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    leadName: '',
    company: '',
    email: '',
    phone: '',
    status: '',
    // More fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div
      className={`fixed inset-0 z-40 bg-white shadow-lg p-6 transition-transform duration-300 ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <button onClick={onClose} className="text-gray-500 mb-4 flex items-center">
        <FaTimes className="w-5 h-5 mr-2" />
        Close
      </button>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Lead Name:
            <input
              type="text"
              name="leadName"
              value={formData.leadName}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Company:
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateLeadForm;
