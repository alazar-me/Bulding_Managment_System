// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// const SignUp = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useHistory();

//   const handleSignUp = async () => {
//     try {
//       const response = await fetch("https://your-backend-api.com/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, email, password }),
//       });
//       const data = await response.json();

//       // Check if sign-up was successful
//       if (response.ok) {
//         // Redirect to login upon successful sign-up
//         alert("Registrstion succesful");
//         history.push("/login");
//       } else {
//         console.error("Sign-up failed:", data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <div className="flex ">
//         <div className="flex-1">
//           <div className="flex flex-col items-center pt-48  ">
//             <div className="pb-12">
//               <h1 className="font-semibold text-3xl">Get Started </h1>
//             </div>
//             <div className="pb-2">
//               <input
//                 className="text-gray-900 hover:text-white border border-gray-800 focus:ring-1 focus:outline-none focus:ring-green-500 font-medium rounded-md text-sm py-2.5 px-4 me-2 mb-2 w-72 dark:border-green-600 dark:text-gray-400 dark:hover:text-white dark:focus:ring-green-500"
//                 type="text"
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div>
//               <input
//                 className="text-gray-900 hover:text-white border border-gray-800 focus:ring-1 focus:outline-none focus:ring-green-500 font-medium rounded-md text-sm py-2.5 px-4 me-2 mb-3 w-72 dark:border-green-600 dark:text-gray-400 dark:hover:text-white dark:focus:ring-green-500"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <input
//                 className="text-gray-900 hover:text-white border border-gray-800 focus:ring-1 focus:outline-none focus:ring-green-500 font-medium rounded-md text-sm py-2.5 px-4 me-2 mb-2 w-72 dark:border-green-600 dark:text-gray-400 dark:hover:text-white dark:focus:ring-green-500"
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="pt-4">
//               <button
//                 className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-4 w-72 rounded-md"
//                 onClick={handleSignUp}
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="flex-1">
//           <img
//             className="max-w-full h-screen"
//             src="./src/assets/images/Group 47.png"
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;
