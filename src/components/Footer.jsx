import logo from '../assets/Weblogo-removebg-preview.png'; 

const Footer = () => (
  <footer className="relative bg-[#0A0A0A] text-white overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    
    {/* Section Separator */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

    <div className="relative max-w-7xl mx-auto px-6 py-20">
      {/* Main Footer Content */}
      <div className="grid md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="col-span-2 md:col-span-1">
          <div className="mb-8">
            <img src={logo} alt="company logo" className="w-44 h-14"/>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Empowering Innovation with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              AI & Full-Stack Solutions
            </span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </h3>
          <div className="space-y-4">
            <a href="/services" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
              Services
            </a>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
              About Us
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 bg-pink-500 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
              Contact
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
            Contact Us
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
          </h3>
          <div className="space-y-4">
            <a href="mailto:info@millenniumai.in" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 text-lg group">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                info@millenniumai.in
              </span>
            </a>
            <a href="https://www.millenniumai.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 text-lg group">
              <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                www.millenniumai.in
              </span>
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
            Follow Us
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </h3>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/millenniumai" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 backdrop-blur-sm group">
              <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.04 0 3.601 2.002 3.601 4.604v5.592z"/>
              </svg>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 backdrop-blur-sm group">
              <svg className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-20 pt-8 border-t border-white/10">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} MillenniumAi. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;