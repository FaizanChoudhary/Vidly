import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
const Table = ({ column, sortColumn, data, onSort }) => {
  return (
    <table className="table col">
      <TableHeader column={column} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} column={column} />
    </table>
  );
};

export default Table;
