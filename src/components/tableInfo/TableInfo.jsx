import React from "react";

const TableInfo = () => {
  return (
    <div className="flex items-center gap-7">
      {tableItems.map((item) => (
        <div
          key={item.id}
          className="h-[145px] w-[245px] bg-white rounded-[20px]  drop-shadow-lg"
        >
          <div className="relative h-[90px] ">
            <div class="rounded-3xl p-px bg-gradient-to-b h-[2px] w-[220px] opacity-80 mx-3 from-gray-200 to-transparent absolute bottom-0 left-0"></div>
            <div className={`${item.style01} px-6 py-5  rounded-xl drop-shadow-xl absolute top-[-20px] left-5 text-white`}>
              <i className={`${item.icon} text-[25px] `}aria-hidden="true"></i>
            </div>
            <div className="absolute right-4 top-2 flex flex-col items-end">
              <span className="text-[15px] text-blue-900 font-regular">
                {item.title}
              </span>
              <strong className="text-blue-950 text-[23px] font-bold">
                {`${item.num}`}
              </strong>
            </div>
          </div>
          <div className="p-2 mx-4 mt-2 text-[15px]">
            <span className={`${item.tra} font-bold`}>
              {item.offer}{" "}
              <span className="text-blue-600 opacity-50 font-normal">
                {item.desc}
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const tableItems = [
  {
    style01:'bg-gradient-to-t from-[#38383E] to-[#707078]',
    icon: "fa fa-bed",
    title: "Today's Money",
    num: "$53K",
    offer: "+55%",
    tra:'text-green-300',
    desc: "than last week",
  },
  {
    style01:'bg-[#E22D6D]',
    icon: "fa fa-user",
    title: "Today's Users",
    num: "2,300",
    offer: "+55%",
    tra:'text-green-300',
    desc: "than last week",
  },
  {
    style01:'bg-[#59B15D]',
    icon: "fa fa-bed",
    title: "New Clients",
    num: "3,462",
    offer: "-3%",
    tra:'text-red-600',
    desc: "than yesterday",
  },
  {
    style01:'bg-[#3E98EF]',
    icon: "fa fa-user",
    title: "Sales",
    num: "$103,430",
    offer: "-2%",
    tra:'text-green-300',
    desc: "than last yesterday",
  },
  
];

export default TableInfo;
