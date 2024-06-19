import React from "react";
import TableTitle from "./TableTitle";

const TableProjectBottom = () => {
  return (
    <div className="h-[518px] w-[340px] bg-white rounded-[20px]  drop-shadow-lg">
      <div className="mx-5 mt-5">
        <TableTitle
          title="Orders Review"
          desc="this month"
          icon="fa fa-arrow-up"
          s="text-green-500"
          num="24%"
          month="this month"
        />
        <div className="mt-[50px]">
          <div className="flex flex-col items-start">
            {tableIcons.map((item) => (
              <div key={item.id} className="flex items-start gap-5">
                <div className="flex flex-col items-center gap-3">
                  <i className={`${item.icon} ${item.color}`} aria-hidden="true"></i>
                  <div className="h-[30px] w-[2px] rounded-md bg-gray-200"></div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-blue-950 font-bold text-[14px]">{item.desc}</span>
                  <p className="text-[#BABDCA] font-bold text-[12px]">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const tableIcons = [
  {
    icon: "fa fa-bell",
    desc: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    color:"text-green-500"
  },
  {
    icon: "fa fa-code",
    desc: "New order #1832412",
    date: "21 DEC 11 PM",
    color:"text-red-600"
  },
  {
    icon: "fa fa-shopping-cart",
    desc: "Server payments for April",
    date: "21 DEC 9:34 PM",
    color:"text-blue-500"
  },
  {
    icon: "fa fa-credit-card-alt",
    desc: "New card added for order",
    date: "20 DEC 2:20 AM",
    color:"text-orange-600"
  },
  {
    icon: "fa fa-key",
    desc: "Unlock packages for development",
    date: "18 DEC 4:54 AM",
    color:"text-pink-600"
  },
  {
    icon: "fa fa-money",
    desc: "New order #9583120",
    date: "17 DEC",
    color:"text-black"
  },
];
export default TableProjectBottom;
