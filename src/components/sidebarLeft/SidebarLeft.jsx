import React from "react";

const SidebarLeft = () => {
  return (
    <div className="">
      <div className=" relative w-full h-[13vh] ">
        <div class="rounded-3xl p-px bg-gradient-to-b h-[2px] w-[220px] opacity-30 mx-3 from-gray-200 to-transparent absolute bottom-3 left-0"></div>
        <div className="flex items-center gap-1 p-5 py-[27px] mx-2">
          <img
            src="/img/logo-ct.png"
            className="object-cover w-[30px]"
            alt=""
          />
          <span className="font-bold text-white text-[13px]">
            Material Dashboard 2
          </span>
        </div>
      </div>
      <div className=" mx-5 flex flex-col gap-[10px]">
        {sideItem.map((item) => (
          <div
            key={item.id}
            className=" flex items-center hover:bg-slate-200 hover:opacity-20 duration-300 rounded-lg gap-2 cursor-pointer text-white p-3 first:bg-pink-500 h-[50px] first:rounded-lg"
          >
            <i class={item.icon} aria-hidden="true"></i>
            <span className="text-[15px]">{item.title}</span>
          </div>
        ))}
        <span className="font-bold text-gray-300 mx-2 mt-2 text-[11px]">
          ACCOUNT PAGES
        </span>
        {sidePages.map((item) => (
          <div
            key={item.id}
            className=" flex items-center hover:bg-slate-200 hover:opacity-20 duration-300 rounded-lg gap-2 cursor-pointer text-white p-3 first:bg-pink-500 h-[50px] first:rounded-lg"
          >
            <i class={item.icon} aria-hidden="true"></i>
            <span className="text-[15px]">{item.title}</span>
          </div>
        ))}
        <div className="flex flex-col gap-3 mt-3">
          <button className="border-pink-700 border-2 w-[200px] hover:opacity-50  py-3 rounded-lg flex items-center justify-center">
            <span className="text-pink-700 font-medium text-sm">
              DOCUMENTATION
            </span>
          </button>
          <button className="bg-[#DD2567] w-full py-3 hover:shadow-md duration-100 hover:shadow-pink-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-[12px]">
              UPGRADE TO PRO
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};


/*
<div>
      <div className=" relative w-full h-[13vh] ">
        <div class="rounded-3xl p-px bg-gradient-to-b h-[2px] w-[220px] opacity-30 mx-3 from-gray-200 to-transparent absolute bottom-3 left-0"></div>
        <div className="flex items-center gap-1 p-5 py-[27px] mx-2">
          <img
            src="/img/logo-ct.png"
            className="object-cover w-[30px]"
            alt=""
          />
          <span className="font-bold text-white text-[13px]">
            Material Dashboard 2
          </span>
        </div>
      </div>
      <div className=" mx-5 flex flex-col gap-[10px]">
        {sideItem.map((item) => (
          <div
            key={item.id}
            className=" flex items-center hover:bg-slate-200 hover:opacity-20 duration-300 rounded-lg gap-2 cursor-pointer text-white p-3 first:bg-pink-500 h-[50px] first:rounded-lg"
          >
            <i class={item.icon} aria-hidden="true"></i>
            <span className="text-[15px]">{item.title}</span>
          </div>
        ))}
        <span className="font-bold text-gray-300 mx-2 mt-2 text-[11px]">
          ACCOUNT PAGES
        </span>
        {sidePages.map((item) => (
          <div
            key={item.id}
            className=" flex items-center hover:bg-slate-200 hover:opacity-20 duration-300 rounded-lg gap-2 cursor-pointer text-white p-3 first:bg-pink-500 h-[50px] first:rounded-lg"
          >
            <i class={item.icon} aria-hidden="true"></i>
            <span className="text-[15px]">{item.title}</span>
          </div>
        ))}
        <div className="flex flex-col gap-3 mt-3">
          <button className="border-pink-700 border-2 w-[200px] hover:opacity-50  py-3 rounded-lg flex items-center justify-center">
            <span className="text-pink-700 font-medium text-sm">
              DOCUMENTATION
            </span>
          </button>
          <button className="bg-[#DD2567] w-full py-3 hover:shadow-md duration-100 hover:shadow-pink-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-[12px]">
              UPGRADE TO PRO
            </span>
          </button>
        </div>
      </div>
    </div>
*/
const sideItem = [
  {
    icon: "fa fa-th-large",
    title: "Dashboard",
  },
  {
    icon: "fa fa-calendar",
    title: "Calendar",
  },
  {
    icon: "fa fa-bell",
    title: "Notifications",
  },
  {
    icon: "fa fa-bell",
    title: "Notifications",
  },
];

const sidePages = [
  {
    icon: "fa fa-th-large",
    title: "Dashboard",
  },

  {
    icon: "fa fa-object-group",
    title: "Virtual Reality",
  },
];
export default SidebarLeft;
