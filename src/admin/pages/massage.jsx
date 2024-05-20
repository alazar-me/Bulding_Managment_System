// import React, { useState } from "react";

// const MessageForm = () => {
//   const [message, setMessage] = useState("");
//   const [recipientType, setRecipientType] = useState("all");
//   const [renters, setRenters] = useState([
//     { id: 0, name: "Alice", selected: false },
//     { id: 2, name: "Bob", selected: false },
//     { id: 3, name: "Charlie", selected: false },
//     { id: 4, name: "David", selected: false },
//     { id: 5, name: "Eva", selected: false },
//   ]);
//   const [selectedRenters, setSelectedRenters] = useState([]);

//   const handleRecipientChange = (e) => {
//     setRecipientType(e.target.value);
//     if (e.target.value === "all") {
//       setSelectedRenters([]);
//       setRenters(renters.map((renter) => ({ ...renter, selected: false })));
//     }
//   };

//   const handleRenterChange = (e) => {
//     const selectedOptions = Array.from(e.target.selectedOptions).map(
//       (option) => option.value
//     );
//     setSelectedRenters(selectedOptions);
//   };

//   const handleCheckboxChange = (id) => {
//     setRenters(
//       renters.map((renter) => {
//         if (renter.id === id) {
//           return { ...renter, selected: !renter.selected };
//         }
//         return renter;
//       })
//     );
//     setSelectedRenters(
//       renters.filter((renter) => renter.selected).map((renter) => renter.name)
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle form submission (send message to backend)
//     console.log("Message:", message);
//     console.log("Recipient Type:", recipientType);
//     console.log("Selected Renters:", selectedRenters);
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Send Notification</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="message" className="block mb-1">
//             Message:
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows="4"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <span className="block mb-1">Send to:</span>
//           <div className="mb-2">
//             <input
//               type="radio"
//               id="all"
//               name="recipient"
//               value="all"
//               checked={recipientType === "all"}
//               onChange={handleRecipientChange}
//             />
//             <label htmlFor="all" className="ml-2">
//               All Renters
//             </label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               id="selective"
//               name="recipient"
//               value="selective"
//               checked={recipientType === "selective"}
//               onChange={handleRecipientChange}
//             />
//             <label htmlFor="selective" className="ml-2">
//               Selective Renters
//             </label>
//           </div>
//         </div>
//         {recipientType === "selective" && (
//           <div className="mb-4">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 onChange={() => {
//                   const allSelected = renters.every(
//                     (renter) => renter.selected
//                   );
//                   setRenters(
//                     renters.map((renter) => ({
//                       ...renter,
//                       selected: !allSelected,
//                     }))
//                   );
//                   setSelectedRenters(
//                     allSelected ? [] : renters.map((renter) => renter.name)
//                   );
//                 }}
//                 checked={renters.every((renter) => renter.selected)}
//                 className="mr-2"
//               />
//               Select All
//             </label>
//             <table className="w-full mt-2">
//               <tbody>
//                 {renters.map((renter) => (
//                   <tr key={renter.id}>
//                     <td className="py-2 px-4 border">
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           onChange={() => handleCheckboxChange(renter.id)}
//                           checked={renter.selected}
//                           className="mr-2"
//                         />
//                         {renter.name}
//                       </label>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//         {selectedRenters.length > 0 && (
//           <div className="mb-4">
//             <span className="font-semibold">Selected Renters:</span>
//             <table className="mt-2 w-full">
//               <tbody>
//                 {selectedRenters.map((renter, index) => (
//                   <tr key={index}>
//                     <td className="border py-2 px-4">{renter}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default MessageForm;
import React, { useState, useEffect } from "react";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const [recipientType, setRecipientType] = useState("all");
  const [renters, setRenters] = useState([]);
  const [selectedRenters, setSelectedRenters] = useState([]);

  useEffect(() => {
    // Fetch renter data from the backend
    fetch("/api/renters")
      .then((response) => response.json())
      .then((data) => {
        const rentersWithSelection = data.map((renter) => ({
          ...renter,
          selected: false,
        }));
        setRenters(rentersWithSelection);
      })
      .catch((error) => console.error("Error fetching renters:", error));
  }, []);

  const handleRecipientChange = (e) => {
    setRecipientType(e.target.value);
    if (e.target.value === "all") {
      setSelectedRenters([]);
      setRenters(renters.map((renter) => ({ ...renter, selected: false })));
    }
  };

  const handleCheckboxChange = (id) => {
    setRenters(
      renters.map((renter) => {
        if (renter.id === id) {
          return { ...renter, selected: !renter.selected };
        }
        return renter;
      })
    );
    setSelectedRenters(
      renters.filter((renter) => renter.selected).map((renter) => renter.name)
    );
  };

  const handleSelectAllChange = () => {
    const allSelected = renters.every((renter) => renter.selected);
    setRenters(
      renters.map((renter) => ({ ...renter, selected: !allSelected }))
    );
    setSelectedRenters(allSelected ? [] : renters.map((renter) => renter.name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (send message to backend)
    console.log("Message:", message);
    console.log("Recipient Type:", recipientType);
    console.log("Selected Renters:", selectedRenters);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Send Notification</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <span className="block mb-1">Send to:</span>
          <div className="mb-2">
            <input
              type="radio"
              id="all"
              name="recipient"
              value="all"
              checked={recipientType === "all"}
              onChange={handleRecipientChange}
            />
            <label htmlFor="all" className="ml-2">
              All Renters
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="selective"
              name="recipient"
              value="selective"
              checked={recipientType === "selective"}
              onChange={handleRecipientChange}
            />
            <label htmlFor="selective" className="ml-2">
              Selective Renters
            </label>
          </div>
        </div>
        {recipientType === "selective" && (
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                onChange={handleSelectAllChange}
                checked={renters.every((renter) => renter.selected)}
                className="mr-2"
              />
              Select All
            </label>
            <table className="w-full mt-2">
              <tbody>
                {renters.map((renter) => (
                  <tr key={renter.id}>
                    <td className="py-2 px-4 border">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          onChange={() => handleCheckboxChange(renter.id)}
                          checked={renter.selected}
                          className="mr-2"
                        />
                        {renter.name}
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {selectedRenters.length > 0 && (
          <div className="mb-4">
            <span className="font-semibold">Selected Renters:</span>
            <table className="mt-2 w-full">
              <tbody>
                {selectedRenters.map((renter, index) => (
                  <tr key={index}>
                    <td className="border py-2 px-4">{renter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
