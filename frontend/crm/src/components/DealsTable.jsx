import React from "react";
import PropTypes from "prop-types";
import Table from "./Table";

const DealsTable = ({ deals, selectedDeals, onSelectDeal }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Select",
        accessor: "select",
        Cell: ({ row }) => (
          <input
            type="checkbox"
            checked={selectedDeals.includes(row.original.id)}
            onChange={() => onSelectDeal(row.original.id)}
          />
        ),
      },
      { Header: "Deal Name", accessor: "dealName" },
      { Header: "Stage", accessor: "stage" },
      { Header: "Amount", accessor: "amount" },
      { Header: "Closing Date", accessor: "closingDate" },
      { Header: "Owner", accessor: "owner" },
      { Header: "Account Name", accessor: "accountName" },
      { Header: "Contact Name", accessor: "contactName" },
      { Header: "Type", accessor: "type" },
      { Header: "Source", accessor: "source" },
      { Header: "Next Step", accessor: "nextStep" },
      { Header: "Created Time", accessor: "createdTime" },
      { Header: "Modified Time", accessor: "modifiedTime" },
    ],
    [selectedDeals, onSelectDeal]
  );

  return <Table columns={columns} data={deals} />;
};

DealsTable.propTypes = {
  deals: PropTypes.array.isRequired,
  selectedDeals: PropTypes.array.isRequired,
  onSelectDeal: PropTypes.func.isRequired,
};

export default DealsTable;
