import React from "react";

import { Link } from "react-router-dom";
const PaymentPage = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className=" mt-36 w-2/5 h-80 drop-shadow-lg shadow-lg shadow-green-400 bg-white rounded-3xl">
          <h1 className=" font-bold text-center text-2xl mt-12 ">Pay With</h1>
          <div className="flex flex-row gap-9 ">
            <Link to={`checkout/1`}>
              <button
                type="submit"
                className="w-32 h-32 hover:cursor-pointer ml-16 mt-6 drop-shadow-2xl bg-white rounded-3xl hover:bg-gray-100 "
              >
                <img src="/src/assets/images/Chapa Logo.png" alt="" />
              </button>
            </Link>
            <button
              type="submit"
              className="w-32 h-32 hover:cursor-pointer pl-4 mt-6  drop-shadow-2xl bg-white rounded-3xl hover:bg-gray-100"
            >
              <img src="/src/assets/images/telebirr.png" alt="" />
            </button>
            <button
              type="submit"
              className="w-32 h-32 hover:cursor-pointer pl-4 mt-6 drop-shadow-2xl bg-white rounded-3xl hover:bg-gray-100 "
            >
              <img
                src="/src/assets/images/Commercial Bank of Ethiopia Logo (1).png "
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      {/* <div id="user" className=" flex-grow">
        <Outlet />
      </div> */}
    </>
  );
};
export default PaymentPage;
