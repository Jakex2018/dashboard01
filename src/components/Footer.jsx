import React from "react";

const Footer = () => {
  return (
    <div className="relative flex text-gray-500 items-center mx-5 my-[50px] justify-between">
      <span>© 2024, made with by Creative Tim for a better web.</span>
      <div className="flex gap-3 items-center">
        <a href="#">Creative Tim</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">License</a>
      </div>
      <div className="fixed bottom-[20px] right-5">
        <div className="px-4 py-4 rounded-full cursor-pointer bg-white shadow-md hover:shadow-red-500 duration-300">
          <i
            class="fa fa-cog text-gray-800 text-[25px] hover:scale-110 duration-100"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
