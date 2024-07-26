import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaTimes } from 'react-icons/fa';

const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    accountOwner: 'Ghulam Mustafa',
    accountName: '',
    accountSite: '',
    parentAccount: '',
    accountNumber: '',
    accountType: '',
    industry: '',
    annualRevenue: '',
    rating: '',
    phone: '',
    fax: '',
    website: '',
    tickerSymbol: '',
    ownership: '',
    employees: '',
    sicCode: '',
    billingStreet: '',
    billingCity: '',
    billingState: '',
    billingCode: '',
    billingCountry: '',
    shippingStreet: '',
    shippingCity: '',
    shippingState: '',
    shippingCode: '',
    shippingCountry: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Create Account</h1>
        <Link to="/accounts" className="text-blue-500 flex items-center">
          <FaTimes className="w-5 h-5 mr-2" />
          Cancel
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Account Image</h2>
          <div className="flex items-center border border-gray-300 p-4 rounded-md">
            <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-full">
              {/* Placeholder for image */}
              <span className="text-gray-500">Image</span>
            </div>
            <input
              type="file"
              name="accountImage"
              className="ml-4"
              // onChange={handleChange} // Uncomment if handling image upload
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700">Account Owner</label>
            <input
              type="text"
              name="accountOwner"
              value={formData.accountOwner}
              readOnly
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
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
            <label className="block text-gray-700">Account Site</label>
            <input
              type="text"
              name="accountSite"
              value={formData.accountSite}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Parent Account</label>
            <input
              type="text"
              name="parentAccount"
              value={formData.parentAccount}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Account Type</label>
            <input
              type="text"
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Industry</label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Annual Revenue</label>
            <input
              type="text"
              name="annualRevenue"
              value={formData.annualRevenue}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Rating</label>
            <input
              type="text"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Fax</label>
            <input
              type="text"
              name="fax"
              value={formData.fax}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Website</label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Ticker Symbol</label>
            <input
              type="text"
              name="tickerSymbol"
              value={formData.tickerSymbol}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Ownership</label>
            <input
              type="text"
              name="ownership"
              value={formData.ownership}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Employees</label>
            <input
              type="text"
              name="employees"
              value={formData.employees}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">SIC Code</label>
            <input
              type="text"
              name="sicCode"
              value={formData.sicCode}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Address Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Billing Street</label>
              <input
                type="text"
                name="billingStreet"
                value={formData.billingStreet}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Billing City</label>
              <input
                type="text"
                name="billingCity"
                value={formData.billingCity}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Billing State</label>
              <input
                type="text"
                name="billingState"
                value={formData.billingState}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Billing Code</label>
              <input
                type="text"
                name="billingCode"
                value={formData.billingCode}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Billing Country</label>
              <input
                type="text"
                name="billingCountry"
                value={formData.billingCountry}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Shipping Street</label>
              <input
                type="text"
                name="shippingStreet"
                value={formData.shippingStreet}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Shipping City</label>
              <input
                type="text"
                name="shippingCity"
                value={formData.shippingCity}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Shipping State</label>
              <input
                type="text"
                name="shippingState"
                value={formData.shippingState}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Shipping Code</label>
              <input
                type="text"
                name="shippingCode"
                value={formData.shippingCode}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Shipping Country</label>
              <input
                type="text"
                name="shippingCountry"
                value={formData.shippingCountry}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Description Information</h2>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter description"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Save
          </button>
          <Link
            to="/accounts"
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountPage;