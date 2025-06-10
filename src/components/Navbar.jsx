import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/Weblogo-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Utility for active link styling
  const navLinkClass =
    'cursor-pointer text-white hover:text-cyan-300 text-lg font-medium transition';

  return (
    <>
      <nav className="p-4 min-h-[4rem] shadow-md flex justify-between  items-center fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'radial-gradient(ellipse at top left, #2d234a 0%, #18122b 100%)'
        }}
      >
        <div>
          <NavLink to="/" className="text-2xl font-bold  font-dm tracking-wide text-white transition">
            <img src={logo} alt="Company logo" className='w-40 ml-8 h-12 object-contain' />
          </NavLink>
        </div>
        <ul className="hidden md:flex gap-8 items-center">
          <NavLink to="/" className={({ isActive }) => `${navLinkClass} ${isActive ? 'bg-cyan-700 rounded-xl p-1' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${navLinkClass} ${isActive ? 'bg-cyan-700 rounded-xl p-1' : ''}`}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => `${navLinkClass} ${isActive ? 'bg-cyan-700 rounded-xl p-1' : ''}`}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${navLinkClass} ${isActive ? 'bg-cyan-700 rounded-xl p-1' : ''}`}>Contact Us</NavLink>
        </ul>
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-cyan-600/20 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="text-3xl text-white">{isOpen ? "✕" : "☰"}</span>
        </button>
        <button className='mr-10  text-white hover:text-cyan-300 text-lg font-medium transition cursor-pointer'>Blog</button>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[4.5rem] left-0 w-full bg-[#18122b] shadow-lg z-40 md:hidden animate-fade-in">
          <ul className="flex flex-col gap-6 p-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-300 hover:text-pink-400 transition ${isActive ? 'bg-cyan-700 rounded-xl p-1' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-300 hover:text-pink-400 transition ${isActive ? 'bg-cyan-700 rounded-xl p-1' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-300 hover:text-pink-400 transition ${isActive ? 'bg-cyan-700 rounded-xl p-1' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg font-semibold text-cyan-300 hover:text-pink-400 transition ${isActive ? 'bg-cyan-700 rounded-xl p-1' : ''}`
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