import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Weblogo-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = "cursor-pointer text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 hover:scale-105";

  return (
    <>
      <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-white/10">
        {/* Responsive Wrapper */}
        <div className="max-w-[1920px] mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo - Left */}
            <div className="flex items-center">
              <NavLink to="/" className="transition-all duration-300 hover:scale-105">
                <div className="p-2">
                  <img
                    src={logo}
                    alt="Company logo"
                    className="w-40 h-12 object-contain"
                  />
                </div>
              </NavLink>
            </div>

            {/* Centered Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${navLinkClass} ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:via-purple-400 after:to-pink-400 after:rounded-full"
                      : ""
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${navLinkClass} ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:via-purple-400 after:to-pink-400 after:rounded-full"
                      : ""
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${navLinkClass} ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:via-purple-400 after:to-pink-400 after:rounded-full"
                      : ""
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${navLinkClass} ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:via-purple-400 after:to-pink-400 after:rounded-full"
                      : ""
                  }`
                }
              >
                Contact Us
              </NavLink>
            </div>

            {/* Blog Button & Hamburger - Right */}
            <div className="flex items-center space-x-6">
              <NavLink to="/blog" className="cursor-pointer">
                <div className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Blog
                </div>
              </NavLink>
              <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                <span className="text-2xl text-white">{isOpen ? "✕" : "☰"}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[4.5rem] left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-sm shadow-lg z-40 md:hidden animate-fade-in border-b border-white/10">
          <div className="max-w-[1920px] mx-auto px-6 py-4">
            <ul className="flex flex-col space-y-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 ${
                    isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 ${
                    isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 ${
                    isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 ${
                    isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
              <NavLink to="/blog" className="w-full cursor-pointer">
              <div className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Blog
              </div>
              </NavLink>

            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
