import React from "react";
import TableProjectInfo from "../tableProjectInfo/TableProjectInfo";
import TableTitle from "./TableTitle";

const TableProjectTop = () => {
  return (
    <div className="h-[518px] w-[704px] bg-white rounded-[20px]  drop-shadow-lg">
      <div className="flex items-center justify-between mx-[20px] mt-5">
        <TableTitle
          title="Projects"
          desc="this month"
          icon="fa fa-check"
          s="text-blue-950"
          num="30 done"
          month="this month"
        />
        <button>
          <i
            class="fa fa-ellipsis-v text-[20px] text-gray-500"
            aria-hidden="true"
          ></i>
        </button>
      </div>
      <div className="mt-5">
        <TableProjectInfo />
      </div>
    </div>
  );
};

export default TableProjectTop;
