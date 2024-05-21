// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useHistory();
//   const handleLogin = async () => {
//     try {
//       const response = await fetch("api from the server", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         // Store JWT in local storage
//         localStorage.setItem("token", data.token);

//         // Redirect to dashboard upon successful login
//         history.push("/dashboard");
//       } else {
//         console.error("Login failed:", data.message);
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
//               <h1 className="font-semibold text-3xl">Welcome Back </h1>
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
//                 onClick={handleLogin}
//               >
//                 Login
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

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let role = "rentee"
  const baseUrl = "http://192.168.8.18:3001";

  const handleLogin = async () => {
    try {
      const response = await fetch(baseUrl + "/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, role }),
      });
      const data = await response.json();

      if (response.ok) {
        // Store JWT in local storage
        localStorage.setItem("token", data.token);

        console.log(data.token);
        console.log(data.role);

        // Redirect to dashboard upon successful login
        navigate("/dashboard");
        // window.alert("logged in successfuly!")

      } else {
        window.alert("Login Failed! try again!")
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <div className="flex flex-col items-center pt-48">
          <div className="pb-12">
            <h1 className="font-semibold text-3xl">Welcome Back</h1>
          </div>
          <div className="pb-2">
            <input
              className="text-gray-900 hover:text-gray border border-gray-800 focus:ring-1 focus:outline-none focus:ring-green-500 font-medium rounded-md text-sm py-2.5 px-4 mb-2 w-72 dark:border-green-600 dark:text-gray-400 dark:focus:ring-green-500"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              className="text-gray-900 hover:text-gray border border-gray-800 focus:ring-1 focus:outline-none focus:ring-green-500 font-medium rounded-md text-sm py-2.5 px-4 mb-2 w-72 dark:border-green-600 dark:text-gray-400 dark:focus:ring-green-500"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="pt-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-4 w-72 rounded-md"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img
          className="max-w-full h-screen"
          src="./src/assets/images/Group 47.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
