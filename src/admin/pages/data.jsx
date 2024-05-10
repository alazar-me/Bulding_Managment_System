import React from "react";
const Data = () => {
  return (
    <div className=" h-auto min-h-screen w-auto ml-5 mr-6 mt-10 bg-white drop-shadow-md rounded-2xl font-semibold  ">
      <h2 className=" pt-6 pl-8 -mb-5 ml-16 pb-0 font-medium">Total Renters</h2>
      <div
        id="meeeeeeeeeeeeeeeeeee"
        className="flex flex-row gap-10 justify-end"
      >
        <form class="max-w-md w-96 min-w-72 mr-10 ">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm   rounded-lg bg-gray-300   dark:bg-gray-200  dark:placeholder-gray-500 dark:text-gray-700  "
              placeholder="Search Name, Phone Number..."
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-green-500 hover:bg-green-600 dark:focus:ring-green-800"
            >
              Search
            </button>
          </div>
        </form>

        <form class="max-w-sm w-40 mr-20 pt-2 ">
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-200 dark:text-gray-700 "
          >
            <option selected>Sort by</option>
            <option value="date">Date</option>
            <option value="name">Name</option>
            <option value="houseNumber">House Number</option>
            <option value="DE">other</option>
          </select>
        </form>
      </div>
      <div className=" p-8 ml-6 flex flex-col w-auto h-auto">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone Number
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">30</td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      john@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">10101010</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">30</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      john@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">09111111</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">30</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      john@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">091111</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">30</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      john@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">091111</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">30</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      john@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">091111</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">30</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      john@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">091111</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">30</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      john@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">091111</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">30</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      john@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">091111</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">30</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      john@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">091111</td>
                  </tr>
                  {/* Add more rows as needed */}
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
