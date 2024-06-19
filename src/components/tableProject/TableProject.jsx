import React from "react";
import TableProjectTop from "./TableProjectTop";
import TableProjectBottom from "./TableProjectBottom";

const TableProject = () => {
  return (
    <div className="flex items-center gap-2">
      <TableProjectTop/>
      <TableProjectBottom/>
    </div>
  );
};

export default TableProject;
