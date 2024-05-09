import React from "react";

const ChatCard = () => {
  return (
    <>
      <div className="ml-6 flex flex-col bg-green-100 rounded-2xl  w-auto  mr-6 max-h-[80vh] overflow-y-auto ">
        <div className="flex flex-row gap-4 pb-2">
          <img
            className="pl-5 pt-2"
            src="/src/assets/images/Avatar Goes Here.png"
            alt=""
          />
          <h2 className="pt-4 pl-2 text-lg font-semibold text-gray-600">
            John Mike
          </h2>
          <h3 className="pt-4 pl-2 text-gray-500">1 week ago</h3>
        </div>
        <h1 className="pl-2 pb-1 text-2xl font-bold text-black">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </h1>
        <h2 className="pl-2 pb-5 text-gray-700">
          Dummy comment - But I must explain to you how all this mistaken idea
          of denouncing pleasure and praising pain was born and I will give you
          a complete account of the system, and expound the actual teachings...
        </h2>
        <hr className="border-t-1 border-green-600" />
        <div className="flex flex-row justify-end gap-2 pb-2 pt-2 mr-4">
          <img src="/src/assets/images/ReactIcon.png" alt="" />
          <h2 className=" font-medium text-gray-800 cursor-pointer">Comment</h2>
        </div>
      </div>
    </>
  );
};
export default ChatCard;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ChatCard = () => {
//   // State variables to store fetched data
//   const [userData, setUserData] = useState({
//     name: "",
//     picture: "/src/assets/images/Avatar Goes Here.png", // Default picture if not available
//     message: "",
//     timestamp: ""
//   });

//   useEffect(() => {
//     // Fetch data from the backend API using Axios
//     axios.get("your_backend_api_endpoint")
//       .then(response => {
//         const data = response.data;
//         // Update state with fetched data
//         setUserData({
//           name: data.name,
//           picture: data.picture,
//           message: data.message,
//           timestamp: data.timestamp
//         });
//       })
//       .catch(error => {
//         console.error("Error fetching data:", error);
//       });
//   }, []); // Empty dependency array to run the effect only once when component mounts

//   return (
//     <>
//       <div className="ml-6 flex flex-col bg-green-100 rounded-2xl w-auto mr-6 max-h-[80vh] overflow-y-auto">
//         <div className="flex flex-row gap-4 pb-2">
//           <img
//             className="pl-5 pt-2"
//             src={userData.picture} // Use fetched picture
//             alt={userData.name} // Alt text should ideally be dynamic based on user's name
//           />
//           <h2 className="pt-4 pl-2 text-lg font-semibold text-gray-600">
//             {userData.name}
//           </h2>
//           <h3 className="pt-4 pl-2 text-gray-500">{userData.timestamp}</h3>
//         </div>
//         <h1 className="pl-2 pb-1 text-2xl font-bold text-black">{userData.message}</h1>
//         <h2 className="pl-2 pb-5 text-gray-700">
//           {/* Display fetched message */}
//           {userData.message}
//         </h2>
//         <hr className="border-t-1 border-gray-400" />
//         <div className="flex flex-row justify-end gap-2 pb-2 pt-2 mr-4">
//           <img src="/src/assets/images/ReactIcon.png" alt="" />
//           <h2 className="font-medium text-gray-800 cursor-pointer">Comment</h2>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ChatCard;
