import img1 from "../assets/home_img_1.webp";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

// Modern geometric & organic SVG props for hero background
const HeroProps = () => (
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
    {/* Soft blue circle */}
    <svg
      className="absolute left-[-60px] top-[-60px] w-72 h-72 opacity-30 blur-2xl animate-float"
      viewBox="0 0 288 288"
      fill="none"
    >
      <circle cx="144" cy="144" r="144" fill="#00eaff" fillOpacity="0.18" />
    </svg>
    {/* Pink organic blob */}
    <svg
      className="absolute right-[-80px] top-[100px] w-80 h-80 opacity-25 blur-xl animate-float-reverse"
      viewBox="0 0 320 320"
      fill="none"
    >
      <path
        d="M160 0C220 20 320 60 300 160C280 260 180 320 100 300C20 280 0 180 40 100C80 20 100 -20 160 0Z"
        fill="#ff5ecf"
        fillOpacity="0.18"
      />
    </svg>
    {/* Abstract polygon */}
    <svg
      className="absolute left-1/2 top-[50%] -translate-x-1/2 w-100 h-50 opacity-30 animate-spin-slow"
      viewBox="0 0 256 128"
      fill="none"
    >
      <polygon
        points="128,10 250,120 30,100 220,40 40,30"
        fill="#fff"
        fillOpacity="0.08"
      />
    </svg>
    {/* Dotted grid */}
    <svg
      className="absolute right-8 bottom-8 w-32 h-32 opacity-20 animate-float"
      viewBox="0 0 100 100"
      fill="none"
    >
      <g>
        {Array.from({ length: 100 }).map((_, i) => (
          <circle
            key={i}
            cx={10 * (i % 10)}
            cy={10 * Math.floor(i / 10)}
            r="1.5"
            fill="#fff"
          />
        ))}
      </g>
    </svg>
  </div>
);

const CardBackground = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <svg
      className="absolute right-0 top-0 w-20 h-20 text-cyan-500/10"
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle cx="75" cy="25" r="20" fill="currentColor" />
    </svg>
    <svg
      className="absolute left-0 bottom-0 w-24 h-24 text-pink-500/10"
      viewBox="0 0 100 100"
      fill="none"
    >
      <path d="M0 100C0 44.7715 44.7715 0 100 0V100H0Z" fill="currentColor" />
    </svg>
  </div>
);

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <section
      className="w-full overflow-hidden flex flex-col mt-20 relative"
      style={{
        background:
          "radial-gradient(ellipse at top left, #2d234a 0%, #18122b 100%)",
      }}
    >
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center min-h-[70vh]">
        <HeroProps />
        <div
          className={`relative z-10 flex flex-col items-center text-white justify-center mt-24 px-4 transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-center w-full max-w-4xl mx-auto text-4xl sm:text-7xl font-bold font-dm leading-tight drop-shadow-lg">
            Accelerate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              AI
            </span>{" "}
            with Precision Annotation
          </h1>
          <p className="mt-6 text-center text-slate-200 text-lg sm:text-2xl max-w-2xl drop-shadow">
            Image, Video & Geospatial Annotation Services powered by experts and
            smart tech.
          </p>
          <Link to="/contact" className="mt-8">
            <button className="cursor-pointer px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 font-dm rounded-lg text-white text-lg font-semibold shadow-lg hover:scale-105 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      {/* Themed Services Section with Hover Effect */}
      <div className="mt-12 mx-auto w-[95%] max-w-6xl relative group">
        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Main Content Container */}
        <section className="relative flex flex-col md:flex-row shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 backdrop-blur-md border border-[#2d234a]/40">
          {/* Text Content */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-white">
            <h2 className="font-dm text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text drop-shadow">
              Empowering Innovation with AI & Full-Stack Development
            </h2>
            <p className="mb-4 text-slate-200 text-base sm:text-lg">
              MillenniumAi is one of the fastest-growing technology partners,
              trusted by startups and enterprises alike. From intelligent data
              annotation for AI models to cutting-edge website, mobile, and
              gaming app development — we offer a complete suite of digital
              services that transform ideas into reality.
            </p>
            <p className="mb-6 text-slate-200 text-base sm:text-lg">
              Our dual strength in artificial intelligence and software
              development enables us to deliver smart, scalable, and secure
              solutions. With a proven track record across industries, we are
              the preferred partner for organizations looking to accelerate
              digital transformation with speed and precision.
            </p>
            <Link to="/services" className="w-fit">
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-md font-semibold shadow hover:scale-105 transition">
                Let's Build the Future Together →
              </button>
            </Link>
          </div>
          {/* Visual/Illustration */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-[#232046]/70 to-[#18122b]/80 py-10">
            <img
              src={img1}
              alt="MillenniumAi Services"
              className="w-72 h-72 sm:w-80 sm:h-80 object-contain rounded-xl shadow-lg border border-cyan-900/30"
              loading="lazy"
            />
          </div>
        </section>
      </div>

      {/* Why Choose MillenniumAi Section */}
      <section className="mt-28 mx-auto w-[95%] max-w-6xl">
        <h2 className="text-center text-3xl sm:text-4xl font-bold font-dm mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
          Why Choose MillenniumAi?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Enhanced Card Components */}
          <div className="group relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-cyan-900/10 hover:shadow-2xl hover:border-cyan-500/20 transition-all duration-300">
            <CardBackground />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-600 to-cyan-800 text-transparent bg-clip-text">
                  Expertise
                </h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Our team consists of seasoned professionals with deep expertise
                in AI, web, and mobile development.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-pink-900/10 hover:shadow-2xl hover:border-pink-500/20 transition-all duration-300">
            <CardBackground />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-600 to-pink-800 text-transparent bg-clip-text">
                  Innovation
                </h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                We leverage the latest technologies and methodologies to deliver
                innovative solutions that drive results.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-cyan-900/10 hover:shadow-2xl hover:border-cyan-500/20 transition-all duration-300">
            <CardBackground />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-600 to-cyan-800 text-transparent bg-clip-text">
                  Partnership
                </h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                We believe in building long-term partnerships with our clients,
                ensuring their success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="my-28 flex flex-col justify-center items-center">
        <h2 className="text-center text-3xl sm:text-4xl font-bold font-dm mb-12 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
          Our Services
        </h2>

        <div className="w-[95%] max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {/* Web Development Card */}
          <div className="group relative bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 backdrop-blur-md border border-[#2d234a]/40 rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-dm text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                  Web Development
                </h3>
              </div>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                We craft stunning, responsive websites that deliver measurable
                results. Our custom platforms are:
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Scalable Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                  <span>Performance Optimized</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Security Enhanced</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Development Card */}
          <div className="group relative bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 backdrop-blur-md border border-[#2d234a]/40 rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-dm text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Mobile Development
                </h3>
              </div>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                Native and cross-platform mobile applications that provide
                exceptional user experiences. Features include:
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                  <span>Native Performance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  <span>Offline Capability</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                  <span>Push Notifications</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AI Solutions Card */}
          <div className="group relative bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 backdrop-blur-md border border-[#2d234a]/40 rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-dm text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI Solutions
                </h3>
              </div>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                Cutting-edge AI services that power next-generation
                applications. Our offerings include:
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Data Annotation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  <span>Model Training</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>AI Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="my-16 mx-auto w-[95%] max-w-6xl">
        <h2 className="text-center text-3xl sm:text-4xl font-bold font-dm mb-12 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
          Get In Touch
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <div className="w-full h-[20rem] rounded-xl shadow-xl overflow-hidden border border-[#2d234a]/40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8384334011416!2d77.47539417520481!3d28.69447928126543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf22d73537953%3A0xd71a5a10c873f830!2sBalaji%20Enclave%20%2CGovind%20Puram%20Ghaziabad-201013!5e0!3m2!1sen!2sin!4v1749466936086!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Google Map Location"
              />
            </div>

            <div className="group relative bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 backdrop-blur-md rounded-xl p-8 border border-[#2d234a]/40">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative z-10">
                <h3 className="font-dm text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
                  Contact Information
                </h3>
                <p className="text-gray-300 mb-8">Let's Get Connected</p>

                <div className="space-y-6">
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-4 text-gray-300 group/item hover:text-cyan-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center shadow-lg group-hover/item:from-cyan-500/30 group-hover/item:to-pink-500/30 transition-all">
                      <HiPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-medium">+91 123 456 7890</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@millenniumai.com"
                    className="flex items-center gap-4 text-gray-300 group/item hover:text-pink-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center shadow-lg group-hover/item:from-pink-500/30 group-hover/item:to-purple-500/30 transition-all">
                      <HiMail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium">info@millenniumai.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-gray-300 group/item hover:text-purple-400 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center shadow-lg group-hover/item:from-purple-500/30 group-hover/item:to-cyan-500/30 transition-all">
                      <HiLocationMarker className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="font-medium">
                        Balaji Enclave, Govind Puram
                      </p>
                      <p className="font-medium">Ghaziabad, UP 201013</p>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/911234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 group/item hover:text-green-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center shadow-lg group-hover/item:from-green-500/30 group-hover/item:to-emerald-500/30 transition-all">
                      <FaWhatsapp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">WhatsApp</p>
                      <p className="font-medium">+91 123 456 7890</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="group relative bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 backdrop-blur-md rounded-xl p-8 border border-[#2d234a]/40 hover:shadow-[0_0_30px_rgba(0,238,255,0.15)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold font-dm bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
                    Send us a Message
                  </h3>
                </div>

                <form className="flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="relative flex-1 group/input">
                      <input
                        type="text"
                        required
                        className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-white/5 border-2 border-[#2d234a]/60 text-gray-200 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                      />
                      <label
                        className="absolute left-4 top-4 text-gray-400 transition-all duration-300 transform origin-left cursor-text
              peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-cyan-400
              peer-valid:-translate-y-3 peer-valid:scale-90"
                      >
                        First Name
                      </label>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 transition-all duration-300 group-hover/input:w-full" />
                    </div>

                    <div className="relative flex-1 group/input">
                      <input
                        type="text"
                        required
                        className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-white/5 border-2 border-[#2d234a]/60 text-gray-200 focus:outline-none focus:border-pink-500/50 transition-all duration-300"
                      />
                      <label
                        className="absolute left-4 top-4 text-gray-400 transition-all duration-300 transform origin-left cursor-text
              peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-pink-400
              peer-valid:-translate-y-3 peer-valid:scale-90"
                      >
                        Last Name
                      </label>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover/input:w-full" />
                    </div>
                  </div>

                  <div className="relative group/input">
                    <input
                      type="email"
                      required
                      className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-white/5 border-2 border-[#2d234a]/60 text-gray-200 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                    />
                    <label
                      className="absolute left-4 top-4 text-gray-400 transition-all duration-300 transform origin-left cursor-text
            peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-cyan-400
            peer-valid:-translate-y-3 peer-valid:scale-90"
                    >
                      Email Address
                    </label>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 transition-all duration-300 group-hover/input:w-full" />
                  </div>

                  <div className="relative group/input">
                    <input
                      type="tel"
                      required
                      className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-white/5 border-2 border-[#2d234a]/60 text-gray-200 focus:outline-none focus:border-pink-500/50 transition-all duration-300"
                    />
                    <label
                      className="absolute left-4 top-4 text-gray-400 transition-all duration-300 transform origin-left cursor-text
            peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-pink-400
            peer-valid:-translate-y-3 peer-valid:scale-90"
                    >
                      Phone Number
                    </label>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover/input:w-full" />
                  </div>

                  <div className="relative group/input">
                    <textarea
                      required
                      rows="5"
                      className="peer w-full px-4 pt-6 pb-2 rounded-lg bg-white/5 border-2 border-[#2d234a]/60 text-gray-200 focus:outline-none focus:border-cyan-500/50 transition-all duration-300 resize-none"
                    ></textarea>
                    <label
                      className="absolute left-4 top-4 text-gray-400 transition-all duration-300 transform origin-left cursor-text
            peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-cyan-400
            peer-valid:-translate-y-3 peer-valid:scale-90"
                    >
                      Your Message
                    </label>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 transition-all duration-300 group-hover/input:w-full" />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 to-pink-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
