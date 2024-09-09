import React from "react";

const Demobtn = () => {
  return (
    <button class="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.752 11.168l-5.197-3.403A1 1 0 008 8.618v6.764a1 1 0 001.555.832l5.197-3.403a1 1 0 000-1.664z"
        />
      </svg>
      <span class="text-gray-700 font-semibold">Demo</span>
    </button>
  );
};

export default Demobtn;
