// src/components/Contacts/ContactsTable.js
import React, { useMemo } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import PropTypes from 'prop-types';
import { FaSort, FaSortUp, FaSortDown, FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';

const ContactsTable = ({ contacts }) => {
  const columns = useMemo(() => [
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

  const data = useMemo(() => contacts || [], [contacts]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
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
    { columns, data, initialState: { pageIndex: 0 } },
    useSortBy,
    usePagination
  );

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="overflow-auto max-h-[calc(100vh-250px)] sm:min-h-full">
        <table {...getTableProps()} className="min-w-full sm:max-w-fit bg-white border border-gray-200">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-b px-2 py-1 text-left bg-gray-50 text-sm sm:text-base"
                  >
                    <div className="flex items-center">
                      {column.render('Header')}
                      <span className="ml-2 text-xs sm:text-sm">
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
                <tr {...row.getRowProps()} className="hover:bg-gray-50">
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="border-b px-2 py-1 text-sm sm:text-base">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="p-2 text-gray-600 hover:text-gray-800">
            <FaAngleDoubleLeft />
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage} className="p-2 text-gray-600 hover:text-gray-800">
            <FaAngleLeft />
          </button>
          <span>
            Page {pageIndex + 1} of {pageOptions.length}
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage} className="p-2 text-gray-600 hover:text-gray-800">
            <FaAngleRight />
          </button>
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="p-2 text-gray-600 hover:text-gray-800">
            <FaAngleDoubleRight />
          </button>
        </div>
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded"
        >
          {[10, 20, 30, 40].map(size => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

ContactsTable.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsTable;
