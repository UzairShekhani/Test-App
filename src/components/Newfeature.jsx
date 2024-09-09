import React from "react";

const Newfeature = () => {
  return (
    <div class="flex justify-center items-center ">
      <div class="flex items-center space-x-2 p-2 border border-gray-300 rounded-full">
        <div class="flex items-center space-x-1 border-2 px-2 py-1 rounded-full">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span class="text-sm font-semibold text-gray-700">New feature</span>
        </div>
        <a
          href="#"
          class="text-sm font-semibold text-gray-700 hover:underline flex items-center">
          Check out the team dashboard
          <svg
            class="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Newfeature;
