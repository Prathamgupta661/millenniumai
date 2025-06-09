import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/Weblogo-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Utility for active link styling
  const navLinkClass =
    'cursor-pointer text-white hover:text-cyan-100 text-lg font-medium transition';

  return (
    <>
      <nav className="p-4 min-h-[4rem] shadow-md flex justify-between items-center bg-gradient-to-r from-cyan-700 to-pink-500 fixed top-0 left-0 right-0 z-50 rounded-md">
        <div>
          <NavLink to="/" className="text-2xl font-bold font-dm tracking-wide text-white transition">
            <img src={logo} alt="Company logo" className='w-50 h-16'/>
          </NavLink>
        </div>
        <ul className="hidden md:flex gap-8 items-center">
          <NavLink to="/" className={({ isActive }) => `${navLinkClass} ${isActive ? 'underline underline-offset-4' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${navLinkClass} ${isActive ? 'underline underline-offset-4' : ''}`}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => `${navLinkClass} ${isActive ? 'underline underline-offset-4' : ''}`}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${navLinkClass} ${isActive ? 'underline underline-offset-4' : ''}`}>Contact Us</NavLink>
        </ul>
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-cyan-600/20 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="text-3xl text-white">{isOpen ? "✕" : "☰"}</span>
        </button>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[5.5rem] left-0 w-full bg-white shadow-lg z-40 md:hidden animate-fade-in">
          <ul className="flex flex-col gap-6 p-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-600 hover:text-pink-500 transition ${isActive ? 'underline underline-offset-4' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-600 hover:text-pink-500 transition ${isActive ? 'underline underline-offset-4' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-600 hover:text-pink-500 transition ${isActive ? 'underline underline-offset-4' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-600 hover:text-pink-500 transition ${isActive ? 'underline underline-offset-4' : ''}`
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