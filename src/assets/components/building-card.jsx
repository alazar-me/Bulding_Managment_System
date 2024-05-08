import React from "react";
import { useNavigate } from "react-router-dom";

const buldingCard = () => {
  const handleClick = () => {
    redirector("/BuildingDetailDashboard/1");
  };
  const redirector = useNavigate();
  return (
    <>
      <div
        onClick={handleClick}
        className=" h-72 w-72 bg-white drop-shadow-2xl rounded-lg font-semibold hover:bg-green-200 cursor-pointer "
      >
        <h1 className="p-2">Lorem Building</h1>
        <img className="h-48 w-72" src="/src/assets/images/images.jpg" alt="" />
        <h2 className="p-2 text-gray-500">Jamo</h2>
      </div>
      <div></div>
    </>
  );
};
export default buldingCard;
