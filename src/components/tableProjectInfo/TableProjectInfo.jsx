import React from "react";

const BarChart = ({ completionPercentage }) => {
  const barWidth = `${(parseFloat(completionPercentage) / 100) * 100}%`;
  let barColor;
  switch (true) {
    case completionPercentage < 99:
      barColor = "blue";
      break;
    case completionPercentage >= 100:
      barColor = "green";
      break;
    default:
      barColor="gray";
      break;
  }

  return (
    <div className="relative w-full py-[1.8px] rounded-full bg-gray-200 mt-1">
      <div
        className="absolute top-0 left-0 w-full py-[1.8px] rounded-full"
        style={{ width: barWidth, backgroundColor: barColor }}
      ></div>
    </div>
  );
};

const TableProjectInfo = () => {
  return (
    <div class="relative overflow-x-auto">
      <table className="w-full overflow-hidden rounded-xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-[10px] text-[#b4adad] uppercase border-b dark:bg-gray-800 dark:border-gray-700">
          <tr>
            {tableHead.map((item) => (
              <th key={item.id} scope="col" class="px-6 py-4">
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((item) => (
            <tr
              key={item.id}
              className={`bg-white ${
                item.last === true ? "" : "border-b dark:border-gray-700"
              } dark:bg-gray-800 `}
            >
              <th
                scope="row"
                className="px-6 py-2  mt-2 flex items-center gap-2 text-gray-800 font-bold whitespace-nowrap dark:text-white"
              >
                <img
                  src={item.icon}
                  className="w-[30px] h-[30px] object-cover"
                  alt=""
                />
                {item.company}
              </th>
              <td className="relative px-6 py-4">
                <img
                  src="/img/model/bruce-mars.jpg"
                  className="rounded-full w-[20px] "
                  alt=""
                />
                <div className="absolute top-[17px] left-10  flex [&>img]:w-[25px]">
                  <img
                    src="/img/model/bruce-mars.jpg"
                    className="rounded-full  border-white border-[2px] relative"
                    alt=""
                  />
                  <img
                    src="/img/model/bruce-mars.jpg"
                    className="absolute left-4 top-0 rounded-full  border-white border-[2px]"
                    alt=""
                  />
                  <img
                    src="/img/model/bruce-mars.jpg"
                    className="absolute left-7 top-0 rounded-full  border-white border-[2px]"
                    alt=""
                  />
                </div>
              </td>
              <td className="px-6 py-4 text-gray-500 font-bold">$14,000</td>
              <td className="px-6 py-4">
                <span className="text-blue-900 font-bold">
                  {item.completion}%
                </span>
                <BarChart completionPercentage={item.completion} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableBody = [
  {
    icon: "/img/small-logos/logo-xd.svg",
    company: "Material XD Version",
    members: [
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
    ],
    budget: "$14,000",
    completion: "60",

    last: false,
  },
  {
    icon: "/img/small-logos/logo-atlassian.svg",
    company: "Add Progress Track",
    members: [
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
    ],
    budget: "$14,000",
    completion: "10",
    last: false,
  },
  {
    icon: "/img/small-logos/logo-slack.svg",
    company: "Fix Platform Errors",
    members: [
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
    ],
    budget: "$14,000",
    completion: "100",
    last: false,
  },
  {
    icon: "/img/small-logos/logo-spotify.svg",
    company: "Launch our Mobile App",
    members: [
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
    ],
    budget: "$14,000",
    completion: "100",
    last: false,
  },
  {
    icon: "/img/small-logos/logo-jira.svg",
    company: "Add the New Pricing Page",
    members: [
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
    ],
    budget: "$14,000",
    completion: "25",
    last: false,
  },
  {
    icon: "/img/small-logos/logo-invision.svg",
    company: "Redesign New Online Shop",
    members: [
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
      "/img/model/bruce-mars.jpg",
    ],
    budget: "$14,000",
    completion: "40",
    last: true,
  },
];

const tableHead = [
  {
    title: "COMPANIES",
  },
  {
    title: "MEMBERS",
  },
  {
    title: "BUDGET",
  },
  {
    title: "COMPLETION",
  },
];

export default TableProjectInfo;
