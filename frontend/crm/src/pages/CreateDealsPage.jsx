import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTimes, FaPlus } from 'react-icons/fa';

const CreateDealsPage = () => {
  const [formData, setFormData] = useState({
    dealOwner: 'Ghulam Mustafa',
    dealName: '',
    accountName: '',
    type: '',
    nextStep: '',
    leadSource: '',
    contactName: '',
    amount: '',
    closingDate: '',
    stage: 'Qualification',
    probability: '10',
    expectedRevenue: '',
    campaignSource: '',
    description: '',
  });
  const [dealImage, setDealImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDealImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success('Deal created successfully!');
    setTimeout(() => {
      navigate('/deals');
    }, 2000);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <ToastContainer />
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Create Deal</h1>
        <Link to="/deals" className="text-blue-500 flex items-center">
          <FaTimes className="w-5 h-5 mr-2" />
          Cancel
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Deal Image</h2>
          <div className="flex items-center border border-gray-300 p-4 rounded-md">
            <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-full overflow-hidden">
              {dealImage ? (
                <img src={dealImage} alt="Deal" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500">Image</span>
              )}
            </div>
            <input
              type="file"
              name="dealImage"
              className="ml-4"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700">Deal Owner</label>
            <input
              type="text"
              name="dealOwner"
              value={formData.dealOwner}
              readOnly
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-gray-700">Deal Name</label>
            <input
              type="text"
              name="dealName"
              value={formData.dealName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Account Name</label>
            <input
              type="text"
              name="accountName"
              value={formData.accountName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="">-None-</option>
              {/* Add other options */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Next Step</label>
            <input
              type="text"
              name="nextStep"
              value={formData.nextStep}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Lead Source</label>
            <select
              name="leadSource"
              value={formData.leadSource}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="">-None-</option>
              {/* Add other options */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Contact Name</label>
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="PKR"
            />
          </div>
          <div>
            <label className="block text-gray-700">Closing Date</label>
            <input
              type="date"
              name="closingDate"
              value={formData.closingDate}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Stage</label>
            <input
              type="text"
              name="stage"
              value={formData.stage}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Qualification"
            />
          </div>
          <div>
            <label className="block text-gray-700">Probability (%)</label>
            <input
              type="number"
              name="probability"
              value={formData.probability}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="10"
            />
          </div>
          <div>
            <label className="block text-gray-700">Expected Revenue</label>
            <input
              type="number"
              name="expectedRevenue"
              value={formData.expectedRevenue}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="PKR"
            />
          </div>
          <div>
            <label className="block text-gray-700">Campaign Source</label>
            <input
              type="text"
              name="campaignSource"
              value={formData.campaignSource}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md flex items-center"
          >
            <FaPlus className="mr-2" />
            Save
          </button>
          <Link to="/deals" className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateDealsPage;
