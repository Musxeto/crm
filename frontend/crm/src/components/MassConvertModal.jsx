import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MassConvertModal = ({ isOpen, onClose, onConfirm }) => {
  const [convertTo, setConvertTo] = useState('contact');

  const handleConfirm = () => {
    onConfirm(convertTo);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Mass Convert</h2>
        <div className="mb-4">
          <label className="block text-sm mb-2">Convert to</label>
          <select
            value={convertTo}
            onChange={(e) => setConvertTo(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="contact">Contact</option>
            <option value="account">Account</option>
          </select>
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
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

MassConvertModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default MassConvertModal;
