import React from "react";

const NotificationCrad = () => {
  return (
    <>
      <div className="flex flex-col bg-white drop-shadow-2xl rounded-2xl items-center w-48 h-64 ">
        <h1 className=" pt-6 font-semibold text-gray-700 text-2xl">New</h1>
        <h1 className=" pt-2 font-semibold text-gray-700 text-2xl">
          Notification
        </h1>
        <img className="pt-8" src="/src/assets/images/Group.png" alt="" />
        <h2 className="pt-6 text-green-500">12 new notification </h2>
      </div>
    </>
  );
};
export default NotificationCrad;
