import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ReportPreviewModal from './ReportPreviewModal';
import prepareReportData from './prepareReportData';

const ReportForm = ({ onReportCreation }) => {
  const [formData, setFormData] = useState({
    reportName: '',
    reportDescription: '',
    reportType: 'Leads',
    chartType: 'Bar'
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chartData, setChartData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.reportName) {
      toast.error('Please enter a report name');
      return;
    }

    const data = prepareReportData(formData.reportType);
    setChartData(data);

    if (typeof onReportCreation === 'function') {
      onReportCreation(formData);
    } else {
      console.error('onReportCreation prop is not a function');
    }

    setIsModalOpen(true);
    toast.success('Report saved successfully');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-gray-700">Report Name</label>
        <input
          type="text"
          name="reportName"
          value={formData.reportName}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="reportDescription"
          value={formData.reportDescription}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Enter description"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Report Type</label>
        <select
          name="reportType"
          value={formData.reportType}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="Leads">Leads</option>
          <option value="Deals">Deals</option>
          <option value="Tasks">Tasks</option>
          <option value="Accounts">Accounts</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Chart Type</label>
        <select
          name="chartType"
          value={formData.chartType}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="Bar">Bar</option>
          <option value="Line">Line</option>
          <option value="Pie">Pie</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Save
      </button>

      <ReportPreviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        reportData={formData}
        chartType={formData.chartType}
        chartData={chartData}
      />
    </form>
  );
};

export default ReportForm;
