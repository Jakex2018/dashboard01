import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      gridLines: {
        // Hide horizontal grid lines
        display: true,
      },
      barThickness: 10,
      ticks: {
        color: "white",
      },
    },
    y: {
      gridLines: {
        // Set custom grid line style (dashed)
        borderDash: [5, 2], // Adjust [dash length, gap length] for desired pattern
      },
      ticks: {
        color: "white",
      },
    },
  },
  elements: {
    point: {
      // Set point radius and border for visibility
      radius: 3,
      borderWidth: 1,
      borderColor: "white",
    },
  },
  legend: {
    display: false,
    // Hide the legend container
  },
};

const labels = ["M", "T", "W", "T", "F", "S"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      backgroundColor: "white",
      barThickness: 8,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
    },
  ],
};

const TableViews = () => {
  return (
    <div className="flex gap-[25px]">
      {views.map((item) => (
        <div
          key={item.id}
          className="h-[327px] w-[340px] bg-white rounded-[20px]  drop-shadow-lg"
        >
          <div className="relative h-[43vh] ">
            <div className="rounded-3xl p-px bg-gradient-to-b h-[2px] w-[220px] opacity-80 mx-3 from-gray-200 to-transparent absolute bottom-0 left-0"></div>
            <div
              className={`h-[200px] w-[308px] ${item.bg} rounded-xl drop-shadow-xl absolute top-[-20px] left-4 text-white`}
            >
              <Bar options={options} data={data} className="mt-5 px-5" />
            </div>
            <div className="absolute bottom-[7%] left-5 flex flex-col">
              <span className="font-bold text-blue-900 text-[17px]">
                {item.title}
              </span>
              <span className="text-blue-900 text-[14px]">
                {item.desc}
              </span>
            </div>
          </div>
          <div className="absolute bottom-[5%] left-5 text-gray-400  flex items-center gap-2">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            <span>campaign sent 2 days ago</span>
          </div>
        </div>
      ))}
    </div>
  );
};
const views = [
  {
    bg: "bg-pink-600 ",
    title: "Website Views",
    desc: "Last Campaign Performance",
  },
  {
    bg: "bg-[#59B15D]",
    title: "Daily Sales",
    desc: "(+15%) increase in today sales",
  },
  {
    bg: "bg-[#35353A] ",
    title: "Completed Tasks",
    desc: "Last Campaign Performance",
  },
];
export default TableViews;

/*
<div className="relative h-[90px] ">
        <div class="rounded-3xl p-px bg-gradient-to-b h-[2px] w-[220px] opacity-80 mx-3 from-gray-200 to-transparent absolute bottom-0 left-0"></div>
        <div
          className={`${item.style01} px-6 py-5  rounded-xl drop-shadow-xl absolute top-[-20px] left-5 text-white`}
        >
          <i className={`${item.icon} text-[25px] `} aria-hidden="true"></i>
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
*/
