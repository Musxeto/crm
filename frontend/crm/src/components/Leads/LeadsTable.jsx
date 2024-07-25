import React from 'react';

const LeadsTable = ({ leads }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border-b px-4 py-2 text-left">Lead Name</th>
            <th className="border-b px-4 py-2 text-left">Company</th>
            <th className="border-b px-4 py-2 text-left">Email</th>
            <th className="border-b px-4 py-2 text-left">Status</th>
            {/* More columns as needed */}
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="hover:bg-gray-50">
              <td className="border-b px-4 py-2">{lead.leadName}</td>
              <td className="border-b px-4 py-2">{lead.company}</td>
              <td className="border-b px-4 py-2">{lead.email}</td>
              <td className="border-b px-4 py-2">{lead.status}</td>
              {/* More columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsTable;
