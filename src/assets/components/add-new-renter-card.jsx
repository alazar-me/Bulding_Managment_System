import React from "react";
import { useNavigate } from "react-router-dom";

const NewRenterCard = () => {
  const handleClick = () => {
    navigating("/registration/1");
  };
  const navigating = useNavigate();
  return (
    <>
      <div className=" h-56 w-2/4 bg-white drop-shadow-lg rounded-2xl font-semibold flex flex-col items-center gap-4 ">
        <h1 className=" mt-16">Add New Renter</h1>
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold -py-2  h-12 px-4 w-48 rounded-md     items-center"
        >
          {/* <svg
            className="fill-current w-4 h-4 ml-32 -mt-0  mr-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
          >
            <path
              fill="#4caf50"
              d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
            />
            <path fill="#fff" d="M21,14h6v20h-6V14z" />
            <path fill="#fff" d="M14,21h20v6H14V21z" />
          </svg> */}
          Register
        </button>
      </div>
    </>
  );
};
export default NewRenterCard;
