import React from "react";
import Comapanyname from "../assets/Comapnyname.jpeg"
import User from "../assets/1d33ac38-7685-4022-b7d2-d6596a93ff56.jfif"



const Testimonials = () => {
  return (
    <div className="flex flex-col items-center text-center p-10 space-y-6">
      <img
        src={ Comapanyname }
        alt="Company Logo"
        className="h-10"
      />
      {/* Testimonial Text */}
      <p className="text-2xl md:text-2xl font-semibold text-gray-800 max-w-2xl">
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </p>
      {/* User Profile */}
      <div className="flex flex-col items-center">
        <img
          src={User}
          alt="User"
          className="rounded-full h-16 w-16 mb-2"
        />
        <h4 className="font-medium text-lg">Amélie Laurent</h4>
        <p className="text-gray-500">Product Manager, Wildcrafted</p>
      </div>
    </div>
  );
};

export default Testimonials;
