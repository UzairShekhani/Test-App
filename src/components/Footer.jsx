import React from "react";
import logo from "../assets/logooo.jfif"; // Import the logo

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container mx-10 px-6">
        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm text-gray-600">
          {/* Product Section */}
          <div>
            <h5 className="font-semibold text-gray-800 mb-4">Product</h5>
            <ul>
              <li className="mb-2">
                <a href="#">Overview</a>
              </li>
              <li className="mb-2">
                <a href="#">Features</a>
              </li>
              <li className="mb-2">
                <a href="#">
                  Solutions{" "}
                  <span className="rounded border-2  px-  py-1 m-2  text-black">
                    New
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#">Tutorials</a>
              </li>
              <li className="mb-2">
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Releases</a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h5 className="font-semibold text-gray-800 mb-4">Company</h5>
            <ul>
              <li className="mb-2">
                <a href="#">About us</a>
              </li>
              <li className="mb-2">
                <a href="#">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#">Press</a>
              </li>
              <li className="mb-2">
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Media kit</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h5 className="font-semibold text-gray-800 mb-4">Resources</h5>
            <ul>
              <li className="mb-2">
                <a href="#">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#">Newsletter</a>
              </li>
              <li className="mb-2">
                <a href="#">Events</a>
              </li>
              <li className="mb-2">
                <a href="#">Help centre</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          {/* Use Cases Section */}
          <div>
            <h5 className="font-semibold text-gray-800 mb-4">Use cases</h5>
            <ul>
              <li className="mb-2">
                <a href="#">Startups</a>
              </li>
              <li className="mb-2">
                <a href="#">Enterprise</a>
              </li>
              <li className="mb-2">
                <a href="#">Government</a>
              </li>
              <li className="mb-2">
                <a href="#">SaaS centre</a>
              </li>
              <li className="mb-2">
                <a href="#">Marketplaces</a>
              </li>
              <li>
                <a href="#">Ecommerce</a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h5 className="font-semibold text-gray-800 mb-4">Social</h5>
            <ul>
              <li className="mb-2">
                <a href="#">Twitter</a>
              </li>
              <li className="mb-2">
                <a href="#">LinkedIn</a>
              </li>
              <li className="mb-2">
                <a href="#">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="#">GitHub</a>
              </li>
              <li className="mb-2">
                <a href="#">AngelList</a>
              </li>
              <li>
                <a href="#">Dribbble</a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h5 className="font-semibold text-gray-800 mb-4">Legal</h5>
            <ul>
              <li className="mb-2">
                <a href="#">Terms</a>
              </li>
              <li className="mb-2">
                <a href="#">Privacy</a>
              </li>
              <li className="mb-2">
                <a href="#">Cookies</a>
              </li>
              <li className="mb-2">
                <a href="#">Licenses</a>
              </li>
              <li className="mb-2">
                <a href="#">Settings</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-6 w-[990%] mr-2" />
            <span className="font-bold text-gray-800"></span>{" "}
            {/* Bold logo text */}
          </div>
          <p className="text-gray-500 mt-4 md:mt-0">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
