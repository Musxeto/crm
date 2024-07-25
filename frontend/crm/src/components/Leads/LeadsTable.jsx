import React from 'react';

const LeadsTable = ({ leads }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border-b px-4 py-2">Lead Name</th>
            <th className="border-b px-4 py-2">Company</th>
            <th className="border-b px-4 py-2">Email</th>
            <th className="border-b px-4 py-2">Status</th>
            <th className="border-b px-4 py-2">Phone</th>
            <th className="border-b px-4 py-2">Mobile</th>
            <th className="border-b px-4 py-2">City</th>
            <th className="border-b px-4 py-2">State</th>
            <th className="border-b px-4 py-2">Country</th>
            <th className="border-b px-4 py-2">Zip Code</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td className="border-b px-4 py-2">{lead.leadName}</td>
              <td className="border-b px-4 py-2">{lead.company}</td>
              <td className="border-b px-4 py-2">{lead.email}</td>
              <td className="border-b px-4 py-2">{lead.status}</td>
              <td className="border-b px-4 py-2">{lead.phone}</td>
              <td className="border-b px-4 py-2">{lead.mobile}</td>
              <td className="border-b px-4 py-2">{lead.city}</td>
              <td className="border-b px-4 py-2">{lead.state}</td>
              <td className="border-b px-4 py-2">{lead.country}</td>
              <td className="border-b px-4 py-2">{lead.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsTable;
