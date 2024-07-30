import React, { useState } from 'react';

const ActionModal = ({ isOpen, action, onClose, onConfirm }) => {
  const [field, setField] = useState('');
  const [value, setValue] = useState('');

  const handleConfirm = () => {
    onConfirm({ field, value });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Confirm {action}</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Field:</label>
          <input
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
            className="mt-1 border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Value:</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="mt-1 border border-gray-300 rounded w-full p-2"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
