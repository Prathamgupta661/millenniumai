import React from "react";
import logo from '../assets/Weblogo-removebg-preview.png'; 

const Footer = () => (
  <footer className="w-full text-white mt-20 rounded-md" style={{
          background: 'radial-gradient(ellipse at top left, #2d234a 0%, #18122b 100%)'
        }}>
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col items-center md:items-start">
        <span className="font-bold text-2xl font-dm tracking-wide mb-2"><img src={logo} alt="company logo" className="w-50 h-16"/></span>
        <span className="text-sm opacity-90">Empowering Innovation with AI & Full-Stack Solutions</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <a href="mailto:info@millenniumai.in" className="hover:underline text-sm">
          info@millenniumai.in
        </a>
        <a href="https://www.millenniumai.in" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm">
          www.millenniumai.in
        </a>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm">© {new Date().getFullYear()} MillenniumAi. All rights reserved.</span>
        <div className="flex gap-3 mt-1">
          <a href="https://www.linkedin.com/company/millenniumai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className="w-5 h-5 fill-white hover:fill-cyan-200 transition" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.04 0 3.601 2.002 3.601 4.604v5.592z"/></svg>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg className="w-5 h-5 fill-white hover:fill-cyan-200 transition" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;