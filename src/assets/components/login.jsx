import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex ">
        <div className="flex-1">
          <div class=" flex flex-col items-center pt-48  ">
            <div className=" pb-12">
              <h1 className="font-semibold text-3xl">Get Started </h1>
            </div>
            <div>
              <input
                class=" text-left text-gray-900 hover:text-white border border-gray-800  focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-16 py-2.5  me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white  dark:focus:ring-gray-800"
                type="text"
                placeholder="enter your name"
              />
            </div>
            <div>
              <input
                class="text-gray-900 hover:text-white border border-gray-800  focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-16 py-2.5  me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white  dark:focus:ring-gray-800"
                type="email "
                placeholder="enter your email"
              />
            </div>
            <div>
              <input
                class="text-gray-900 hover:text-white border border-gray-800  focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-16 py-2.5  me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white  dark:focus:ring-gray-800"
                type="password"
                placeholder="password"
              />
            </div>
          </div>
        </div>
        <div class="flex-1 ">
          <img
            class="max-w-full h-screen"
            src="./src/assets/images/Group 47.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Login;
