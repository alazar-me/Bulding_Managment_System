import React from "react";
const Dashboard = () => {
  return (
    <div className=" drop-shadow-2xl bg-white h-auto min-h-screen m-4 mt-5">
      <div className="flex flex-col gap-3 ml-10 ">
        <h1 className=" text-center pt-16 font-bold text-2xl text-gray-600">
          RESIDENTIAL RENTAL APPLICATION
        </h1>
        <h1 className=" pt-10 font-medium">THE PROPERTY</h1>
        <div className="flex flex-row ">
          <h2>Type(Apt,Home,Condo):</h2>
          <div className="">
            <input
              type="text"
              required
              className="mb-1 outline-none leading-3 border-b bg-white_blue border-black"
              value=""
            />
          </div>
          <h2>Square Feet (SF):</h2>
          <div className="">
            <input
              type="text"
              required
              className="mb-1 outline-none   border-b bg-white_blue border-black"
              value=""
            />
          </div>
          <h2>Bedrooms:</h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black"
              value=""
            />
          </div>
        </div>
        <div className="flex flex-row">
          <h2>Rent Amount: Birr</h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black"
              value=""
            />
          </div>
          <h2>Street Address: </h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black"
              value=""
            />
          </div>
          <h2>City:</h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black"
              value=""
            />
          </div>
          <h2>State</h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black"
              value=""
            />
          </div>
        </div>
        <h1 className="font-medium">TENANCY</h1>
        <div className="flex flex-row">
          <h2>Type/Length:</h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black"
              value=""
            />
          </div>
          <h2>Start Date: </h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black"
              value=""
            />
          </div>
        </div>
        <h1 className="font-medium">APPLICANT DETAILS</h1>
        <div className="flex flex-row ">
          <h2>Full Name:</h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black"
              value=""
            />
          </div>
          <h2>SSN:</h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black"
              value=""
            />
          </div>
          <h2> Phone: </h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black"
              value=""
            />
          </div>
          <h2>E-Mail:</h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black"
              value=""
            />
          </div>
        </div>
        <div className="flex flex-row pt-3">
          <h2>Pets?</h2>
          <input className=" ml-2" type="checkbox" />
          <h2 className="pl-2">Yes</h2>
          <input className=" ml-2" type="checkbox" />
          <h2 className="pl-2">NO</h2>
          <h2 className="pl-2">If Yes, Describe:</h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black  "
              value=""
            />
          </div>
        </div>
        <div className="flex flex-row pt-3">
          <h2>Vehicles?</h2>
          <input className=" ml-2" type="checkbox" />
          <h2 className="pl-2">Yes</h2>
          <input className=" ml-2" type="checkbox" />
          <h2 className="pl-2">NO</h2>
          <h2 className="pl-2">If Yes, Describe:</h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black  "
              value=""
            />
          </div>
        </div>
        <h1 className="font-medium">CURRENT EMPLOYMENT</h1>
        <div className="flex flex-row">
          <h2>Company: </h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black  "
              value=""
            />
          </div>
          <h2>Occupation/Title: </h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black  "
              value=""
            />
          </div>
          <h2>How Long?</h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black  "
              value=""
            />
          </div>
          <h2>Gross Income: $</h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black  "
              value=""
            />
          </div>
        </div>
        <h1 className=" font-medium">CURRENT LANDLORD</h1>
        <div className="flex flex-row">
          <h2>Name</h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black  "
              value=""
            />
          </div>
          <h2>Address:</h2>
          <div className="">
            <input
              type="text"
              required
              className=" outline-none   border-b bg-white_blue border-black  "
              value=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

// import React, { useState } from "react";
// import axios from "axios";

// const Dashboard = () => {
//   // State variables to store input data
//   const [propertyType, setPropertyType] = useState("");
//   const [squareFeet, setSquareFeet] = useState("");
//   const [bedrooms, setBedrooms] = useState("");

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send data to the backend using Axios
//       const response = await axios.post("/api/submit", {
//         propertyType,
//         squareFeet,
//         bedrooms,
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-2 ml-5">
//       <h1 className=" text-center pt-16 font-bold text-2xl text-gray-600">
//         RESIDENTIAL RENTAL APPLICATION
//       </h1>
//       <h1 className=" pt-10">THE PROPERTY</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-row ">
//           <h2>Type (Apt, Home, Condo):</h2>
//           <div className="">
//             <input
//               type="text"
//               required
//               className="mb-1 outline-none leading-3 border-b bg-white_blue border-black"
//               value={propertyType}
//               onChange={(e) => setPropertyType(e.target.value)}
//             />
//           </div>
//           <h2>Square Feet (SF):</h2>
//           <div className="">
//             <input
//               type="text"
//               required
//               className="mb-1 outline-none   border-b bg-white_blue border-black"
//               value={squareFeet}
//               onChange={(e) => setSquareFeet(e.target.value)}
//             />
//           </div>
//           <h2>Bedrooms:</h2>
//           <div className="">
//             <input
//               type="text"
//               required
//               className=" outline-none   border-b bg-white_blue border-black"
//               value={bedrooms}
//               onChange={(e) => setBedrooms(e.target.value)}
//             />
//           </div>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Dashboard;
