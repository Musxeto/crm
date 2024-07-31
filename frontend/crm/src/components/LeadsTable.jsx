import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const LeadsTable = ({ leads, selectedLeads, onSelectLead }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Select',
        accessor: 'select',
        Cell: ({ row }) => (
          <input
            type="checkbox"
            checked={selectedLeads.includes(row.original.id)}
            onChange={() => onSelectLead(row.original.id)}
          />
        ),
      },
      { Header: 'Lead Name', accessor: 'leadName' },
      { Header: 'Company', accessor: 'company' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Status', accessor: 'status' },
      { Header: 'Phone', accessor: 'phone' },
      { Header: 'Mobile', accessor: 'mobile' },
      { Header: 'City', accessor: 'city' },
      { Header: 'State', accessor: 'state' },
      { Header: 'Country', accessor: 'country' },
      { Header: 'Zip Code', accessor: 'zipCode' },
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      { Header: 'Annual Revenue', accessor: 'annualRevenue' },
      { Header: 'Lead Source', accessor: 'leadSource' },
      { Header: 'Lead Owner', accessor: 'leadOwner' },
      { Header: 'Created Time', accessor: 'createdTime' },
      { Header: 'Modified Time', accessor: 'modifiedTime' },
    ],
    [selectedLeads, onSelectLead]
  );

  return (
    <div className="w-full lg:max-w-full min-w-full overflow-x-auto">
      <Table columns={columns} data={leads} />
    </div>
  );
};

LeadsTable.propTypes = {
  leads: PropTypes.array.isRequired,
  selectedLeads: PropTypes.array.isRequired,
  onSelectLead: PropTypes.func.isRequired,
};

export default LeadsTable;
