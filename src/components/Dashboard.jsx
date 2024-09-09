import React from "react";
import mobile from "../assets/23fcd2ea-9f32-4488-9416-cf0f2e410d07.jfif";
import web from "../assets/WhatsApp Image 2024-09-08 at 11.37.42 PM.jpeg";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-4">
      {/* Header Section */}
      <section className="text-center ">
        {/* <div  class="flex items-center  justify-center w-[10%] border-2 px-2 py-1 rounded-full">
          <span class="text-sm font-semibold text-gray-700">New feature</span>
        </div> */}
        <h1 className="text-3xl font-bold text-gray-800">
          Analytics that feels like it’s from the future
        </h1>
        <p className="mt-4 text-gray-600">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </section>

      {/* Dashboard Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 my-12">
        {/* Left Side: Mobile Dashboard */}
        <div className="rounded-lg flex justify-center">
          <div className="max-w-xs">
            <img src={mobile} alt="Mobile Dashboard" className="" />
          </div>
        </div>

        {/* Right Side: Web Dashboard */}
        <div className=" p-6  rounded-lg flex justify-center">
          <div className="w-full">
            <img
              src={web}
              alt="Web Dashboard"
              className=" border-8   border-black  rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-purple-600 mb-4">
            {/* Icon */}
            <svg
              className="w-10 h-10 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 15h-6a2 2 0 01-2-2V9a2 2 0 012-2h3l1-2h4l1.405 1.405A2.032 2.032 0 0121 7v5a2 2 0 01-2 2h-4"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            Share Team Inboxes
          </h3>
          <p className="text-gray-500 mt-2">
            Keep everyone on the same page with shared inboxes.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-purple-600 mb-4">
            {/* Icon */}
            <svg
              className="w-10 h-10 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 11V7a2 2 0 00-2-2H5a2 2 0 00-2 2v4m6 0v4a2 2 0 002 2h6a2 2 0 002-2v-4M11 11h2m-2 4h2"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            Deliver Instant Answers
          </h3>
          <p className="text-gray-500 mt-2">
            Balance everything with customer service.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-purple-600 mb-4">
            {/* Icon */}
            <svg
              className="w-10 h-10 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            Manage with Reports
          </h3>
          <p className="text-gray-500 mt-2">
            Measure what matters with easy-to-use reports.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
