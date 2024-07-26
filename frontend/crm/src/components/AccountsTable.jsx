import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const AccountsTable = ({ accounts }) => {
  const columns = React.useMemo(() => [
    { Header: 'Account Name', accessor: 'accountName' },
    { Header: 'Account Owner', accessor: 'accountOwner' },
    { Header: 'Industry', accessor: 'industry' },
    { Header: 'Website', accessor: 'website' },
    { Header: 'Phone', accessor: 'phone' },
    { Header: 'Fax', accessor: 'fax' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Billing Address', accessor: 'billingAddress' },
    { Header: 'Shipping Address', accessor: 'shippingAddress' },
    { Header: 'Annual Revenue', accessor: 'annualRevenue' },
    { Header: 'Employees', accessor: 'employees' },
    { Header: 'Created Time', accessor: 'createdTime' },
    { Header: 'Modified Time', accessor: 'modifiedTime' },
  ], []);

  return <Table columns={columns} data={accounts} />;
};

AccountsTable.propTypes = {
  accounts: PropTypes.array.isRequired,
};

export default AccountsTable;
