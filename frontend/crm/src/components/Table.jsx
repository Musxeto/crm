import React from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import PropTypes from 'prop-types';
import { FaSort, FaSortUp, FaSortDown, FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';

const Table = ({ columns, data }) => {
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
    state: { pageIndex, pageSize }
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
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    key={column.id}
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
                <tr key={row.id} {...row.getRowProps()} className="hover:bg-gray-100">
                  {row.cells.map(cell => (
                    <td key={cell.column.id} {...cell.getCellProps()} className="border-b px-2 py-1 text-sm sm:text-base">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row justify-between items-center py-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
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
            </strong>
          </span>
          <span className="text-sm">| Go to page:</span>
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            className="border px-2 py-1 rounded text-sm w-16"
          />
        </div>
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
          className="border px-2 py-1 rounded mt-2 text-sm"
        >
          {[10, 20, 30, 40, 50].map(size => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;