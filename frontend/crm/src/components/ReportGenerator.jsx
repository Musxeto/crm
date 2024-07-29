import React from 'react';

const ReportGenerator = () => {
  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <h2 className="text-xl font-semibold mb-2">Generate Report</h2>
      <form>
        <label className="block mb-2">
          Report Type:
          <select className="border rounded p-2 w-full">
            <option value="pdf">PDF</option>
            <option value="csv">CSV</option>
          </select>
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Generate</button>
      </form>
    </div>
  );
};

export default ReportGenerator;
