import React from "react";
const MassageBox = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="mt-32 w-1/3 h-72">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-5 w-full text-sm text-gray-900  rounded-3xl border border-green-300 focus:ring-green-700 focus:border-green-700 dark:bg-gray-100 dark:border-green-700 dark:placeholder-gray-700 dark:text-gray-800   shadow-lg shadow-green-500"
          placeholder="Write issue..."
        ></textarea>
      </div>
    </div>
  );
};
export default MassageBox;
