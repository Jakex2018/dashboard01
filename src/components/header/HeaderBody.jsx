import React from "react";

const HeaderBody = () => {
  return (
    <header className="flex justify-between mx-[1.5rem] mt-0">
      <div>
        <h1 className="text-gray-400">
          Pages / <span className="text-[#344767]">Dashboard</span>
        </h1>
        <strong className="text-[#344767]">Dashboard</strong>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Type here..."
          className="p-2 bg-[#F0F2F5] border-gray-300 border-[1px] rounded-lg"
        />
        <button className="px-5 py-[3px] hover:opacity-65 duration-200  border-red-600 border-[1px] rounded-lg ">
          <span className="text-red-600 font-bold text-[12px]">
            OUTLINE BORDER
          </span>
        </button>
        <div className="relative p-3 overflow-hidden h-[25px] w-[116px]  rounded-sm border-gray-300 border-[1px]">
          <div className="absolute cursor-pointer hover:opacity-50 duration-200 h-full w-full left-0 top-0 flex items-center gap-1 border-gray-300 border-r-2">
            <i className="fa fa-star ml-2" aria-hidden="true"></i>
            <span className="text-[12px] ">Star</span>
          </div>
          <div className="absolute h-full w-[60px] right-0 top-0 bg-white cursor-pointer hover:text-blue-500 duration-500">
            <span className="text-[12px] font-bold flex justify-center mt-[3px]">
              10,938
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 ml-3">
          <i
            class="fa fa-cog text-gray-700 cursor-pointer"
            aria-hidden="true"
          ></i>
          <div className="flex items-center gap-2 text-gray-700 [&>i]:cursor-pointer">
            <i class="fa fa-bell" aria-hidden="true"></i>
            <i class="fa fa-user" aria-hidden="true"></i>
            <span className="font-bold cursor-pointer">Sign In</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBody;
