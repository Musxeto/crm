import React, { useMemo } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import PropTypes from 'prop-types';
import { FaSort, FaSortUp, FaSortDown, FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';

const LeadsTable = ({ leads }) => {
  const columns = useMemo(() => [
    {
      Header: 'Lead Name',
      accessor: 'leadName',
    },
    {
      Header: 'Company',
      accessor: 'company',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Phone',
      accessor: 'phone',
    },
    {
      Header: 'Mobile',
      accessor: 'mobile',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
    {
      Header: 'State',
      accessor: 'state',
    },
    {
      Header: 'Country',
      accessor: 'country',
    },
    {
      Header: 'Zip Code',
      accessor: 'zipCode',
    },
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Annual Revenue',
      accessor: 'annualRevenue',
    },
    {
      Header: 'Lead Source',
      accessor: 'leadSource',
    },
    {
      Header: 'Lead Owner',
      accessor: 'leadOwner',
    },
    {
      Header: 'Created Time',
      accessor: 'createdTime',
    },
    {
      Header: 'Modified Time',
      accessor: 'modifiedTime',
    },
    // Add more columns as needed
  ], []);

  const data = useMemo(() => leads || [], [leads]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // instead of rows, use page for pagination
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="overflow-x-auto">
      <div className="max-w-screen-xl mx-auto">
        <table {...getTableProps()} className="min-w-full bg-white border border-gray-200">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-b px-4 pt-2 text-left bg-gray-50"
                  >
                    <div className="flex items-center">
                      {column.render('Header')}
                      <span className="ml-2">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <FaSortDown />
                          ) : (
                            <FaSortUp />
                          )
                        ) : (
                          <FaSort />
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-100">
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="border-b px-4 py-2">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="pagination flex items-center justify-between py-2">
        <div className="flex items-center space-x-2">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="btn btn-light">
            <FaAngleDoubleLeft />
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage} className="btn btn-light">
            <FaAngleLeft />
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage} className="btn btn-light">
            <FaAngleRight />
          </button>
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="btn btn-light">
            <FaAngleDoubleRight />
          </button>
        </div>
        <span className="text-sm">
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span className="flex items-center space-x-2">
          <span className="text-sm">| Go to page:</span>
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            className="border px-2 py-1 rounded w-16"
          />
        </span>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
          className="border px-2 py-1 rounded"
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

LeadsTable.propTypes = {
  leads: PropTypes.array.isRequired,
};

export default LeadsTable;
