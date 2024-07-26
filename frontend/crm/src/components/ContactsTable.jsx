import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const ContactsTable = ({ contacts }) => {
  const columns = React.useMemo(() => [
    { Header: 'First Name', accessor: 'firstName' },
    { Header: 'Last Name', accessor: 'lastName' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Phone', accessor: 'phone' },
    { Header: 'Company', accessor: 'company' },
    { Header: 'City', accessor: 'city' },
    { Header: 'State', accessor: 'state' },
    { Header: 'Country', accessor: 'country' },
    { Header: 'Zip Code', accessor: 'zipCode' },
  ], []);

  return <Table columns={columns} data={contacts} />;
};

ContactsTable.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsTable;
