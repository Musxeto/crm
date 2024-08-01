import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const ContactsTable = ({ contacts, selectedContacts, onSelectContact }) => {
  const columns = React.useMemo(() => [
    { Header: 'Select', accessor: 'select', Cell: ({ row }) => (
      <input
        type="checkbox"
        checked={selectedContacts.includes(row.original.id)}
        onChange={() => onSelectContact(row.original.id)}
      />
    )},
    { Header: 'First Name', accessor: 'firstName' },
    { Header: 'Last Name', accessor: 'lastName' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Phone', accessor: 'phone' },
    { Header: 'Company', accessor: 'company' },
    { Header: 'City', accessor: 'city' },
    { Header: 'State', accessor: 'state' },
    { Header: 'Country', accessor: 'country' },
    { Header: 'Zip Code', accessor: 'zipCode' },
  ], [selectedContacts, onSelectContact]);

  return <Table columns={columns} data={contacts} />;
};

ContactsTable.propTypes = {
  contacts: PropTypes.array.isRequired,
  selectedContacts: PropTypes.array.isRequired,
  onSelectContact: PropTypes.func.isRequired,
};

export default ContactsTable;
