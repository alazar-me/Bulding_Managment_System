import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" h-full w-64 bg-white shadow-lg">
      <div className="p-5 flex flex-row">
        <img src="src/assets/images/Frame 73.png" alt="" />
        <h1 className="text-green-500 pl-3 pt-2">Your Logo</h1>
      </div>
      <ul className="list-none">
        <div className="flex flex-row hover:bg-green-200 cursor-pointer">
          <img
            className=" max-w-6 max-h-6 mt-4 ml-5 "
            src=" ./src/assets/images/Frame.png"
            alt=""
          />
          <NavLink className="p-4 ml-4">Buildings</NavLink>
        </div>
        <div className="flex flex-row hover:bg-green-200 cursor-pointer ">
          <img
            className=" max-w-6 max-h-6 mt-4 ml-4"
            src=" ./src/assets/images/chat-bubble-oval-notification--messages-message-bubble-chat-oval-notify-ping.png"
            alt=""
          />
          <NavLink className="p-4 ml-4">Messages</NavLink>
        </div>
        <div className="flex flex-row hover:bg-green-200 cursor-pointer">
          <img
            className=" max-w-6 max-h-6 mt-4 ml-4"
            src=" ./src/assets/images/clarity_notification-line.png"
            alt=""
          />
          <NavLink className="p-4 ml-4"> Notifications</NavLink>
        </div>
        <div className="flex flex-row hover:bg-green-200 cursor-pointer">
          <img
            className=" max-w-6 max-h-6 mt-4 ml-4"
            src=" ./src/assets/images/fluent_people-community-20-regular.png"
            alt=""
          />
          <NavLink className="p-4 ml-4">Registration</NavLink>
        </div>
        <div className="flex flex-row hover:bg-green-200 cursor-pointer">
          <img
            className=" max-w-6 max-h-6 mt-4 ml-4"
            src=" ./src/assets/images/Pie Chart.png"
            alt=""
          />{" "}
          <NavLink className="p-4 ml-4">Data</NavLink>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
