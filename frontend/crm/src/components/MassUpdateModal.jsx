import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MassUpdateModal = ({ isOpen, onClose, onConfirm, fields }) => {
  const [selectedField, setSelectedField] = useState('');
  const [newValue, setNewValue] = useState('');

  const handleConfirm = () => {
    onConfirm(selectedField, newValue);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Mass Update</h2>
        <div className="mb-4">
          <label className="block text-sm mb-2">Field to update</label>
          <select
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select a field</option>
            {fields.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2">New value</label>
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

MassUpdateModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
};

export default MassUpdateModal;
