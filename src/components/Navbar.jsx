import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import logo from "../assets/Weblogo-removebg-preview.png";
import { FaGlobe, FaMobileAlt, FaGamepad, FaRobot, FaCloud, FaChartLine, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navLinkClass = "cursor-pointer text-gray-300 hover:text-white text-lg font-medium transition-all duration-300 hover:scale-105";

  // Function to convert service title to URL-friendly slug
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  // Services data
  const services = [
    {
      title: "Website Development",
      icon: FaGlobe,
      description: "Custom websites and web applications",
      color: "blue"
    },
    {
      title: "Mobile App Development",
      icon: FaMobileAlt,
      description: "Native and cross-platform mobile apps",
      color: "purple"
    },
    {
      title: "Gaming App Development",
      icon: FaGamepad,
      description: "Immersive gaming applications",
      color: "pink"
    },
    {
      title: "AI & ML Solutions",
      icon: FaRobot,
      description: "Artificial intelligence and machine learning",
      color: "blue"
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      description: "Cloud infrastructure and DevOps services",
      color: "purple"
    },
    {
      title: "Digital Marketing",
      icon: FaChartLine,
      description: "Digital marketing and growth strategies",
      color: "pink"
    }
  ];

  const navigate=useNavigate()

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
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`${navLinkClass} flex items-center gap-1 group`}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  onClick={()=>navigate('/services')}
                >
                  Services
                  <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isServicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-[#0A0A0A]/95 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service, index) => {
                          const IconComponent = service.icon;
                          return (
                            <NavLink
                              key={index}
                              to={`/${createSlug(service.title)}`}
                              className="group/service flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                              onClick={() => setIsServicesDropdownOpen(false)}
                            >
                              <div className={`w-10 h-10 bg-gradient-to-br from-${service.color}-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/service:scale-110 transition-all duration-300`}>
                                <IconComponent className={`w-5 h-5 text-${service.color}-400`} />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-white font-medium text-sm group-hover/service:text-blue-400 transition-colors duration-300">
                                  {service.title}
                                </h3>
                                <p className="text-gray-400 text-xs mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </NavLink>
                          );
                        })}
                      </div>
                      
                      {/* View All Services Button */}
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <NavLink
                          to="/services"
                          className="block w-full text-center py-2 px-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition-all duration-300 text-sm font-medium"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          View All Services
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )}
              </div>

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
        <div className="fixed top-[5.5rem] left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-sm shadow-lg z-40 md:hidden animate-fade-in border-b border-white/10">
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
              
              {/* Mobile Services Section */}
              <div className="space-y-4">
                <div className="text-lg font-medium text-gray-300">Services</div>
                <div className="pl-4 space-y-3">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <NavLink
                        key={index}
                        to={`/${createSlug(service.title)}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className={`w-8 h-8 bg-gradient-to-br from-${service.color}-500/20 to-purple-500/20 rounded-lg flex items-center justify-center`}>
                          <IconComponent className={`w-4 h-4 text-${service.color}-400`} />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">{service.title}</div>
                          <div className="text-gray-400 text-xs">{service.description}</div>
                        </div>
                      </NavLink>
                    );
                  })}
                  <NavLink
                    to="/services"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <FaGlobe className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-white font-medium text-sm">View All Services</div>
                  </NavLink>
                </div>
              </div>

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
              <div onClick={() => setIsOpen(false)} className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
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
