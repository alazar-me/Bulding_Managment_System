import React, { useState } from "react";
import Pay from "./pay";
import PaymentSuccessMassage from "./PaymentSuccessMassage";
const generateRandomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// Generate a random string of length 12 (you can adjust the length as needed)
const tx_ref = generateRandomString(12);
const Checkout = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const public_key = "CHAPUBK_TEST-Lc2RM6dT1RENLAlcMzcGknc8mX52D4oo";

  return (
    <>
      <div className="flex  bg-white w-96 drop-shadow-md h-3/4 rounded-lg  border-gray-300 ">
        <div class="ml-20 items-center  flex flex-col w-52 gap-3">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              First name
            </label>
            <input
              onChange={(e) => {
                setFname(e.target.value);
              }}
              type="text"
              id="first_name"
              class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Jhon "
              required
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Last Name
            </label>
            <input
              onChange={(e) => {
                setLname(e.target.value);
              }}
              type="text"
              id="first_name"
              class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Doe "
              required
            />
          </div>
          <div>
            <label
              for="Email"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="first_name"
              class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="example@gmail.com "
              required
            />
          </div>
          <div>
            <label
              for="Email"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              amount
            </label>
            <input
              onChange={(e) => {
                setValue(e.target.value);
              }}
              type="number"
              id="first_name"
              class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="100  "
              required
            />
          </div>
          <Pay
            fname={fname}
            lname={lname}
            email={email}
            value={value}
            tx_ref={tx_ref}
            public_key={public_key}
          />
        </div>
      </div>
    </>
  );
};
export default Checkout;
