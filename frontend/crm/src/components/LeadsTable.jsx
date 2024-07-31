import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const LeadsTable = ({ leads, onSelectLead }) => {
  const [selectedRowIds, setSelectedRowIds] = useState([]);

  const handleRowSelection = (id) => {
    setSelectedRowIds(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(rowId => rowId !== id)
        : [...prevSelected, id]
    );
    onSelectLead(selectedRowIds);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Select",
        accessor: "select",
        Cell: ({ row }) => (
          <input
            type="checkbox"
            checked={selectedRowIds.includes(row.original.id)}
            onChange={() => handleRowSelection(row.original.id)}
          />
        ),
      },
      { Header: "Lead Name", accessor: "leadName" },
      { Header: "Company", accessor: "company" },
      { Header: "Email", accessor: "email" },
      { Header: "Status", accessor: "status" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Mobile", accessor: "mobile" },
      { Header: "City", accessor: "city" },
      { Header: "State", accessor: "state" },
      { Header: "Country", accessor: "country" },
      { Header: "Zip Code", accessor: "zipCode" },
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
      { Header: "Annual Revenue", accessor: "annualRevenue" },
      { Header: "Lead Source", accessor: "leadSource" },
      { Header: "Lead Owner", accessor: "leadOwner" },
      { Header: "Created Time", accessor: "createdTime" },
      { Header: "Modified Time", accessor: "modifiedTime" },
    ],
    [selectedRowIds] // Use selectedRowIds here
  );

  return (
    <div className="w-full lg:max-w-full min-w-full overflow-x-auto">
      <Table columns={columns} data={leads} />
    </div>
  );
};

LeadsTable.propTypes = {
  leads: PropTypes.array.isRequired,
  onSelectLead: PropTypes.func.isRequired,
};

export default LeadsTable;
