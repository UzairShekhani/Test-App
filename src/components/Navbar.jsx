import logoo from "../assets/logooo.jfif"
const Navbar = () => {
  return (
    <nav className=" py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className=" font-bold">
          <img className="w-[200px]" src={logoo} alt="" />
        </div>

        {/* Center - Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="/"
            className="text-gray-800 hover:text-purple-600 font-medium"
          >
            Home
          </a>
          <a
            href="/blog"
            className="text-gray-800 hover:text-purple-600 font-medium"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="text-gray-800 hover:text-purple-600 font-medium"
          >
            Contact
          </a>
        </div>

        {/* Right - Login & Signup */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/login" className="text-gray-800 hover:text-gray-600">
            Log in
          </a>
          <a
            href="/signup"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Sign up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu hidden md:hidden">
        <a
          href="/"
          className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200"
        >
          Home
        </a>
        <a
          href="/blog"
          className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200"
        >
          Blog
        </a>
        <a
          href="/contact"
          className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200"
        >
          Contact
        </a>
        <a
          href="/login"
          className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200"
        >
          Log in
        </a>
        <a
          href="/signup"
          className="block py-2 px-4 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Sign up
        </a>
      </div>
    </nav>
  );
};

// Handle toggling mobile menu visibility
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});

export default Navbar;
