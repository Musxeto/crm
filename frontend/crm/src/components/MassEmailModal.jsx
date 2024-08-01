import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const MassEmailModal = ({ isOpen, onClose, recipients }) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = (e) => {
    e.preventDefault();

    if (recipients.length === 0) {
      toast.error('No recipients specified.');
      return;
    }
    const emailData = {
      subject,
      message,
      to_email: recipients.join(', ')
    };

    emailjs.send(
      'service_15n04it', 
      'template_bueuosd', 
      emailData,
      's4Vtbe3jxzd9gxCTC'
    )
      .then(() => {
        toast.success('Emails sent successfully!');
        onClose();
      })
      .catch((error) => {
        toast.error('Failed to send emails. Please try again.');
        console.error('EmailJS error:', error);
      });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <h2 className="text-xl mb-4">Send Mass Email</h2>
        <form onSubmit={handleSendEmail}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              rows="6"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Recipients</label>
            <ul className="list-disc pl-5">
              {recipients.map((recipient, index) => (
                <li key={index}>{recipient}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

MassEmailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  recipients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MassEmailModal;
