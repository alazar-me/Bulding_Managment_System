import React from "react";
import NewRenterCard from "./add-new-renter-card";
import NotificationCrad from "./notificationCard";
const buldingCard = () => {
  return (
    <>
      <div className=" h-72 w-72 bg-white drop-shadow-2xl rounded-lg font-semibold">
        <h1 className="p-2">Lorem Building</h1>
        <img className="h-48 w-72" src="/src/assets/images/images.jpg" alt="" />
        <h2 className="p-2 text-gray-500">Jamo</h2>
      </div>
      <NewRenterCard />
      <NotificationCrad />
    </>
  );
};
export default buldingCard;
