// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Outlet } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <>
//       <div className="flex">
//         <div
//           id=""
//           className=" h-auto w-64 min-h-screen bg-white drop-shadow-2xl"
//         >
//           <div className="p-6 pl-12 flex flex-row">
//             <img src="src/assets/images/Frame 73.png" alt="" />
//             <h1 className="text-green-500 pl-3 pt-2">Your Logo</h1>
//           </div>
//           <ul className="list-none">
//             <div className=" pl-4 flex flex-row hover:bg-green-200 cursor-pointer">
//               <img
//                 className=" max-w-6 max-h-6 mt-4 ml-4 = "
//                 src=" ./src/assets/images/Frame.png"
//                 alt=""
//               />

//               <NavLink className="p-4 ml-4" to="/buildings/1">
//                 Buildings
//               </NavLink>
//             </div>
//             <div className="pl-4 flex flex-row hover:bg-green-200 cursor-pointer ">
//               <img
//                 className=" max-w-6 max-h-6 mt-4 ml-4"
//                 src=" ./src/assets/images/chat-bubble-oval-notification--messages-message-bubble-chat-oval-notify-ping.png"
//                 alt=""
//               />
//               <NavLink className="p-4 ml-4" to="/massage/1">
//                 Messages
//               </NavLink>
//             </div>
//             <div className="pl-4 flex flex-row hover:bg-green-200 cursor-pointer">
//               <img
//                 className=" max-w-6 max-h-6 mt-4 ml-4"
//                 src=" ./src/assets/images/clarity_notification-line.png"
//                 alt=""
//               />
//               <NavLink className="p-4 ml-4" to="/notification/1">
//                 {" "}
//                 Notifications
//               </NavLink>
//             </div>
//             <div className="pl-4 flex flex-row hover:bg-green-200 cursor-pointer">
//               <img
//                 className=" max-w-6 max-h-6 mt-4 ml-4"
//                 src=" ./src/assets/images/fluent_people-community-20-regular.png"
//                 alt=""
//               />
//               <NavLink className="p-4 ml-4" to="/registration/1">
//                 Registration
//               </NavLink>
//             </div>
//             <div className="pl-4 flex flex-row hover:bg-green-200 cursor-pointer">
//               <img
//                 className=" max-w-6 max-h-6 mt-4 ml-4"
//                 src=" ./src/assets/images/Pie Chart.png"
//                 alt=""
//               />{" "}
//               <NavLink className="p-4 ml-4" to="/data/1">
//                 Data
//               </NavLink>
//             </div>
//           </ul>
//         </div>
//         <div id="detail" className=" flex-grow">
//         {<Outlet/> || "No content"}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
import React from "react";
import { NavLink, Outlet, useOutlet } from "react-router-dom";
import BuildingDetailDashboard from "../admin/pages/Building-Detail-Dashboard";
import Dashboard from "../admin/pages/dashboard";

const Sidebar = () => {
  const outlet = useOutlet();

  return (
    <>
      <div className="flex">
        <div
          id=""
          className=" h-auto min-w-[250px] min-h-screen bg-white drop-shadow-2xl"
        >
          <div className="p-6 pl-12 flex flex-row">
            <img src="src/assets/images/Frame 73.png" alt="" />
            <h1 className="text-green-500 pl-3 pt-2">Your Logo</h1>
          </div>
          <ul className="list-none">
            <div className=" pl-4 flex flex-row hover:bg-green-200 cursor-pointer">
              <img
                className=" max-w-6 max-h-6 mt-4 ml-4 = "
                src=" ./src/assets/images/Frame.png"
                alt=""
              />

              <NavLink className="p-4 ml-4" to="/buildings/1">
                Buildings
              </NavLink>
            </div>
            <div className="pl-4 flex flex-row hover:bg-green-200 cursor-pointer ">
              <img
                className=" max-w-6 max-h-6 mt-4 ml-4"
                src=" ./src/assets/images/chat-bubble-oval-notification--messages-message-bubble-chat-oval-notify-ping.png"
                alt=""
              />
              <NavLink className="p-4 ml-4" to="/massage/1">
                Messages
              </NavLink>
            </div>
            <div className="pl-4 flex flex-row hover:bg-green-200 cursor-pointer">
              <img
                className=" max-w-6 max-h-6 mt-4 ml-4"
                src=" ./src/assets/images/clarity_notification-line.png"
                alt=""
              />
              <NavLink className="p-4 ml-4" to="/notification/1">
                Notifications
              </NavLink>
            </div>
            <div className="pl-4 flex flex-row hover:bg-green-200 cursor-pointer">
              <img
                className=" max-w-6 max-h-6 mt-4 ml-4"
                src=" ./src/assets/images/fluent_people-community-20-regular.png"
                alt=""
              />
              <NavLink className="p-4 ml-4" to="/registration/1">
                Registration
              </NavLink>
            </div>
            <div className="pl-4 flex flex-row hover:bg-green-200 cursor-pointer">
              <img
                className=" max-w-6 max-h-6 mt-4 ml-4"
                src=" ./src/assets/images/Pie Chart.png"
                alt=""
              />{" "}
              <NavLink className="p-4 ml-4" to="/data/1">
                Data
              </NavLink>
            </div>
          </ul>
        </div>
        <div id="detail" className=" flex-grow">
          {outlet || <Dashboard/>}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
