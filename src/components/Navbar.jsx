import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Weblogo-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Utility for active link styling
   const navLinkClass =
    "cursor-pointer hover:text-xl hover:text-cyan-500 text-lg font-playfair font-medium transition"; // <-- removed text-white

  return (
    <>
      <nav
        className="p-4 max-h-[6rem] w-full shadow-md fixed top-0 left-0 right-0 z-50
        bg-white/10 backdrop-blur-md border-b border-white/20"
        style={{
          background:
            "radial-gradient(ellipse at top left, #2d234a99 0%, #18122bcc 100%)",
        }}
      >
        {/* Responsive Wrapper */}
        <div className="grid grid-cols-3 w-full items-center">
          {/* Logo - Left */}
          <div className="flex justify-start pl-4">
            <NavLink
              to="/"
              className="text-2xl font-bold tracking-wide text-white transition"
            >
              <img
                src={logo}
                alt="Company logo"
                className="w-40 h-12 object-contain"
              />
            </NavLink>
          </div>

          {/* Centered Nav Links */}
           <div className="flex justify-center">
            <ul className="hidden md:flex gap-8 items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${navLinkClass} ${
                    isActive
                      ? "text-cyan-500 rounded-xl p-1"
                      : "text-white"
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
                      ? "text-cyan-500 rounded-xl p-1"
                      : "text-white"
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
                      ? "text-cyan-500 rounded-xl p-1"
                      : "text-white"
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
                      ? "text-cyan-500 rounded-xl p-1"
                      : "text-white"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </ul>
          </div>

          {/* Blog Button & Hamburger - Right */}
          <div className="flex justify-end items-center gap-2 pr-4">
            <button className="text-white hover:text-cyan-300 text-lg font-medium transition cursor-pointer font-playfair mr-5 md:mr-0">
              Blog
            </button>
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-cyan-600/20 transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <span className="text-3xl text-white">{isOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[4.5rem] left-0 w-full bg-[#18122b] shadow-lg z-40 md:hidden animate-fade-in">
          <ul className="flex flex-col gap-6 p-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-300 hover:text-pink-400 transition ${
                  isActive ? "bg-cyan-700 rounded-xl p-1" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-300 hover:text-pink-400 transition ${
                  isActive ? "bg-cyan-700 rounded-xl p-1" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-300 hover:text-pink-400 transition ${
                  isActive ? "bg-cyan-700 rounded-xl p-1" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-300 hover:text-pink-400 transition ${
                  isActive ? "bg-cyan-700 rounded-xl p-1" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
