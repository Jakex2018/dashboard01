import React from "react";

const TableTitle = ({ title, desc, icon, s, num, month }) => {
  return (
    <div>
      <span className="font-bold text-blue-950">{title}</span>
      <div className="flex items-center gap-2 mt-2">
        <i className={`${icon} ${s}`} aria-hidden="true"></i>
        <span className="text-blue-900 font-semibold">
          {num} <span className="font-normal "> {month}</span>
        </span>
      </div>
    </div>
  );
};

export default TableTitle;
