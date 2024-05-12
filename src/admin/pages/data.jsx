// data from the backend with the search functionality

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Data = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [data, setData] = useState([]);

//   // Fetch data from the database when the component mounts
//   useEffect(() => {
//     // Replace this fetch call with your actual API call to fetch data from the database
//     const fetchData = async () => {
//       try {
//         const response = await fetch("your_api_endpoint");
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures this effect runs only once when the component mounts

//   // Handle search query change
//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   // Filtered data based on search query
//   const filteredData = data.filter(
//     (person) =>
//       person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       person.phoneNumber.includes(searchQuery)
//   );

//   return (
//     <div className="h-auto min-h-screen w-auto ml-5 mr-6 mt-10 bg-white drop-shadow-md rounded-2xl font-semibold">
//       <h2 className="pt-6 pl-8 -mb-5 ml-16 pb-0 font-medium">Total Renters</h2>
//       <div className="p-8 ml-6 flex flex-col w-auto h-auto">
//         <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
//             <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Age
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Email
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Phone Number
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Details
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {/* Map over the filtered data and render table rows */}
//                   {filteredData.map((person) => (
//                     <tr key={person.id}>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {person.name}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {person.age}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {person.email}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {person.phoneNumber}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {person.isActive ? (
//                           <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
//                             <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
//                             Active
//                           </span>
//                         ) : (
//                           <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
//                             <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
//                             Inactive
//                           </span>
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <Link to={`/detail/${person.id}`}>
//                           <button
//                             className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-md px-2 py-1"
//                             type="button"
//                           >
//                             Details
//                           </button>
//                         </Link>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Data;

//hardcoded data
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Data = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 30,
      email: "john@example.com",
      phoneNumber: "10101010",
      isActive: false,
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 25,
      email: "jane@example.com",
      phoneNumber: "09111111",
      isActive: true,
    },
    // Add more data as needed
  ]);

  // Handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtered data based on search query
  const filteredData = data.filter(
    (person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.phoneNumber.includes(searchQuery)
  );

  return (
    <div className="h-auto min-h-screen w-auto ml-5 mr-6 mt-10 bg-white drop-shadow-md rounded-2xl font-semibold">
      <h2 className="pt-6 pl-8 -mb-5 ml-16 pb-0 font-medium">Total Renters</h2>
      <div className="flex flex-row gap-10 justify-end">
        <form className="max-w-md w-96 min-w-72 mr-10 ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm rounded-lg bg-gray-300 dark:bg-gray-200 dark:placeholder-gray-500 dark:text-gray-700"
              placeholder="Search Name, Phone Number..."
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
          </div>
        </form>

        <form className="max-w-sm w-40 mr-20 pt-2">
          {/* Sorting component */}
        </form>
      </div>
      <div className="p-8 ml-6 flex flex-col w-auto h-auto">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Age
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Map over the filtered data and render table rows */}
                  {filteredData.map((person) => (
                    <tr key={person.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person.age}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person.phoneNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {/* Update link as needed */}
                        <Link to={`/detail/${person.id}`}>
                          <button
                            className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-md px-2 py-1"
                            type="button"
                          >
                            Details
                          </button>
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person.isActive ? (
                          <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                            <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                            <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                            Inactive
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
// data from the backend
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Data = () => {
//   const [data, setData] = useState([]);

//   // Fetch data from the database when the component mounts
//   useEffect(() => {
//     // Replace this fetch call with your actual API call to fetch data from the database
//     const fetchData = async () => {
//       try {
//         const response = await fetch("your_api_endpoint");
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures this effect runs only once when the component mounts

//   return (
//     <div className="h-auto min-h-screen w-auto ml-5 mr-6 mt-10 bg-white drop-shadow-md rounded-2xl font-semibold">
//       <h2 className="pt-6 pl-8 -mb-5 ml-16 pb-0 font-medium">Total Renters</h2>
//       {/* Search and sorting components */}
//       {/* Table */}
//       <div className="p-8 ml-6 flex flex-col w-auto h-auto">
//         <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
//             <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Age
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Email
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Phone Number
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Details
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {/* Map over the fetched data and render table rows */}
//                   {data.map((person) => (
//                     <tr key={person.id}>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {person.name}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {person.age}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {person.email}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {person.phoneNumber}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {person.isActive ? (
//                           <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
//                             <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
//                             Active
//                           </span>
//                         ) : (
//                           <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
//                             <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
//                             Inactive
//                           </span>
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <Link to={`/detail/${person.id}`}>
//                           <button
//                             className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-md px-2 py-1"
//                             type="button"
//                           >
//                             Details
//                           </button>
//                         </Link>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Data;
