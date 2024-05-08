import React from "react";
const RenterCard = () => {
  return (
    <>
      <div className=" h-64 w-auto mr-6 bg-white drop-shadow-lg rounded-2xl font-semibold  ">
        <h2 className=" pt-6 pl-8 -mb-5 ml-16 pb-0 font-medium">
          Total Renters
        </h2>
        <div className=" p-8 ml-12 flex flex-col w-3/4 h-48">
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
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RenterCard;

// const Table = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//       // Fetch data from the backend
//       fetchData();
//     }, []);

//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.example.com/data');
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     return (
//       <div className="flex flex-col">
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
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {data.map((item, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{item.age}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default Table;
