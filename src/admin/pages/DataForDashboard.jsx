import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../assets/components/Loading";

const baseUrl = "http://192.168.8.18:3001/api/admin/";

const DataForDashboard = ({cheight}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtered data based on search query
  const filteredData = data.filter((person) => {
    const nameMatch = person.name.toLowerCase().includes(searchQuery.toLowerCase());
    const phoneNumberMatch = typeof person.phone_number === 'string' && person.phone_number.includes(searchQuery);
    return nameMatch || phoneNumberMatch;
  });

  return (
    <div className={`${cheight} h-auto  w-auto ml-5 mr-6 mt-10 bg-white drop-shadow-md rounded-2xl font-semibold`}>
      <h2 className="pt-6 pl-8 -mb-5 ml-16 pb-0 font-medium">Total Renters</h2>
      <div className="flex flex-row gap-10 justify-end">
        <form className="max-w-md w-96 min-w-72 mr-10">
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
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((person) => (
                    <tr key={person.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person.phone_number}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person.status.includes("active") ? (
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

export default DataForDashboard;