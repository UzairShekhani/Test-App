import React from "react";
import logo1 from "../assets/logo1.jpeg";
import logo2 from "../assets/logo2.jpeg";
import logo3 from "../assets/logo3.jpeg";
import logo4 from "../assets/logo4.jpeg";
import logo5 from "../assets/logo5.jpeg";
import logo6 from "../assets/logo6.jpeg";

function LogoSection() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <p className="text-gray-500 text-sm mb-9 text-center">
        Join 4,000+ companies already growing
      </p>
      {/* Flex container for logos */}
      <div className="flex flex-wrap justify-center gap-8">
        <img src={logo1} alt="Logo 1" className="h-10" />
        <img src={logo2} alt="Logo 2" className="h-10" />
        <img src={logo3} alt="Logo 3" className="h-10" />
        <img src={logo4} alt="Logo 4" className="h-10" />
        <img src={logo5} alt="Logo 5" className="h-10" />
        <img src={logo6} alt="Logo 6" className="h-10" />
      </div>
    </div>
  );
}

export default LogoSection;
