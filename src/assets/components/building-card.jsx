import React from "react";
import { useNavigate } from "react-router-dom";

const buldingCard = ({ blgName, location, imgUrl}) => {
  const handleClick = () => {
    redirector("/BuildingDetailDashboard/1");
  };
  const redirector = useNavigate();
  return (
    // <>
    //   <div
    //     onClick={handleClick}
    //     className=" h-80 w-96 bg-white drop-shadow-2xl rounded-lg font-semibold hover:bg-green-200 cursor-pointer "
    //   >
    //     <h1 className="p-2">{blgName}</h1>
    //     <img className="h-56 w-full" src={imgUrl} alt="img" />
    //     <h2 className="p-2 text-gray-500">{location}</h2>
    //   </div>
    //   <div></div>
    // </>


      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#ffffff] w-96 h-98 gap-2">
          <a href="#">
              <img class="rounded-t-lg w-full h-[250px]" src={imgUrl} alt="" />
          </a>
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{blgName}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{location}</p>
              <a href="/BuildingDetailDashboard/1" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  Read more
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
      </div>

  );
};
export default buldingCard;
