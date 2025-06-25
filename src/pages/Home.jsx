import img2 from "../assets/homeimg2.jpg";
import React, { useEffect, useState, useRef } from "react";
import App from "../assets/App.jpg";
import Ai from "../assets/AiSol.jpg";
import web from "../assets/web.svg";
import expert from "../assets/expert.avif";
import homeimg1 from "../assets/homeimg1.jpg";
import about from "../assets/about.webp";
import emailjs from "@emailjs/browser";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import {
  FaBolt,
  FaCheckCircle,
  FaCogs,
  FaHandshake,
  FaUserShield,
  FaWhatsapp,
  FaHeartbeat,
  FaShoppingCart,
  FaUniversity,
  FaTruck,
  FaCar,
  FaFilm,
  FaGraduationCap,
  FaSatelliteDish,
  FaRocket,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);
  
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contactno: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Image carousel data
  const carouselImages = [
    {
      src: img2,
      alt: "AI Technology",
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence"
    },
    {
      src: web,
      alt: "Web Development",
      title: "Web Development",
      description: "Modern web applications"
    },
    {
      src: App,
      alt: "App Development",
      title: "Mobile Apps",
      description: "Cross-platform development"
    },
    {
      src: Ai,
      alt: "AI Solutions",
      title: "Machine Learning",
      description: "Advanced AI algorithms"
    },
    {
      src: homeimg1,
      alt: "Innovation",
      title: "Innovation Hub",
      description: "Next-gen technology"
    },
    {
      src: about,
      alt: "About Us",
      title: "Our Team",
      description: "Expert developers"
    }
  ];

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_first_name: form.first_name,
          from_last_name: form.last_name,
          from_contactno: form.contactno,
          to_name: "Pratham Gupta",
          from_email: form.email,
          to_email: "guptapratham661@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");
          setForm({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    const diff = currentX - dragStartX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Determine direction and change image
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        // Swipe right - previous image
        setCurrentImageIndex(prev => 
          prev === 0 ? carouselImages.length - 1 : prev - 1
        );
      } else {
        // Swipe left - next image
        setCurrentImageIndex(prev => 
          prev === carouselImages.length - 1 ? 0 : prev + 1
        );
      }
    }
    
    setDragOffset(0);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const diff = currentX - dragStartX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Determine direction and change image
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        // Swipe right - previous image
        setCurrentImageIndex(prev => 
          prev === 0 ? carouselImages.length - 1 : prev - 1
        );
      } else {
        // Swipe left - next image
        setCurrentImageIndex(prev => 
          prev === carouselImages.length - 1 ? 0 : prev + 1
        );
      }
    }
    
    setDragOffset(0);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentImageIndex(prev => 
          prev === carouselImages.length - 1 ? 0 : prev + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging, carouselImages.length]);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] lg:bg-[size:4rem_4rem]"></div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 -left-10 sm:-left-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/30 rounded-full filter blur-[60px] sm:blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-10 sm:-right-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/30 rounded-full filter blur-[60px] sm:blur-[100px] animate-pulse delay-1000"></div>

        <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 relative z-10">
          <div
            className={`max-w-6xl mx-auto transition-all duration-1000 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-left">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 sm:mb-8 border border-white/10">
                  <span className="text-white/80 text-xs sm:text-sm font-medium">
                    Welcome to MillenniumAi
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                  Transform Your{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                      Business
                    </span>
                    <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></span>
                  </span>{" "}
                  with AI
                </h1>

                <div className="h-16 sm:h-20 lg:h-24 flex items-center mb-6 sm:mb-8">
                  <TypeAnimation
                    sequence={[
                      "Precision Annotation",
                      2000,
                      "Full-Stack Development",
                      2000,
                      "AI Solutions",
                      2000,
                      "Smart Tech",
                      2000,
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                  />
                </div>

                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-xl leading-relaxed">
                  Image, Video & Geospatial Annotation Services powered by
                  experts and smart tech.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <Link to="/contact">
                    <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto">
                      <span className="relative z-10">Get Started</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </Link>
                  <Link to="/services">
                    <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/10 w-full sm:w-auto">
                      <span className="relative z-10">Explore Services</span>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                      99%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                      5+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">OnGoing Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                      25+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                      24/7
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">Support</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Drag & Drop Image Carousel */}
              <div className="relative hidden lg:block">
                <div className="relative w-full aspect-square">
                  {/* Dynamic Background Stacks */}
                  <div className="absolute inset-0 transition-all duration-1000 ease-out">
                    {/* Stack 1 - Changes with image */}
                    <div 
                      className={`absolute inset-0 rounded-3xl transform transition-all duration-1000 ease-out ${
                        currentImageIndex === 0 
                          ? 'bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/30 rotate-6 scale-105' 
                          : currentImageIndex === 1
                          ? 'bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 -rotate-6 scale-110'
                          : currentImageIndex === 2
                          ? 'bg-gradient-to-br from-pink-500/30 via-blue-500/20 to-purple-500/30 rotate-12 scale-95'
                          : currentImageIndex === 3
                          ? 'bg-gradient-to-br from-green-500/30 via-blue-500/20 to-purple-500/30 -rotate-12 scale-105'
                          : currentImageIndex === 4
                          ? 'bg-gradient-to-br from-orange-500/30 via-pink-500/20 to-blue-500/30 rotate-8 scale-110'
                          : 'bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 -rotate-8 scale-95'
                      }`}
                    ></div>
                    
                    {/* Stack 2 - Complementary animation */}
                    <div 
                      className={`absolute inset-0 rounded-3xl transform transition-all duration-1000 ease-out delay-200 ${
                        currentImageIndex === 0 
                          ? 'bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 -rotate-8 scale-95' 
                          : currentImageIndex === 1
                          ? 'bg-gradient-to-br from-pink-500/20 via-blue-500/10 to-purple-500/20 rotate-8 scale-105'
                          : currentImageIndex === 2
                          ? 'bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 -rotate-12 scale-110'
                          : currentImageIndex === 3
                          ? 'bg-gradient-to-br from-purple-500/20 via-green-500/10 to-blue-500/20 rotate-6 scale-95'
                          : currentImageIndex === 4
                          ? 'bg-gradient-to-br from-blue-500/20 via-orange-500/10 to-pink-500/20 -rotate-10 scale-105'
                          : 'bg-gradient-to-br from-pink-500/20 via-indigo-500/10 to-purple-500/20 rotate-10 scale-110'
                      }`}
                    ></div>
                    
                    {/* Stack 3 - Additional layer */}
                    <div 
                      className={`absolute inset-0 rounded-3xl transform transition-all duration-1000 ease-out delay-400 ${
                        currentImageIndex === 0 
                          ? 'bg-gradient-to-br from-pink-500/15 via-blue-500/10 to-purple-500/15 rotate-12 scale-110' 
                          : currentImageIndex === 1
                          ? 'bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-pink-500/15 -rotate-6 scale-95'
                          : currentImageIndex === 2
                          ? 'bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-blue-500/15 rotate-8 scale-105'
                          : currentImageIndex === 3
                          ? 'bg-gradient-to-br from-green-500/15 via-purple-500/10 to-blue-500/15 -rotate-8 scale-110'
                          : currentImageIndex === 4
                          ? 'bg-gradient-to-br from-orange-500/15 via-blue-500/10 to-pink-500/15 rotate-10 scale-95'
                          : 'bg-gradient-to-br from-indigo-500/15 via-pink-500/10 to-purple-500/15 -rotate-10 scale-105'
                      }`}
                    ></div>
                  </div>

                  {/* Animated Particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-white/20 rounded-full animate-pulse transition-all duration-1000 ${
                          currentImageIndex === 0 
                            ? 'animate-float-blue' 
                            : currentImageIndex === 1
                            ? 'animate-float-purple'
                            : currentImageIndex === 2
                            ? 'animate-float-pink'
                            : currentImageIndex === 3
                            ? 'animate-float-green'
                            : currentImageIndex === 4
                            ? 'animate-float-orange'
                            : 'animate-float-indigo'
                        }`}
                        style={{
                          left: `${20 + (i * 10)}%`,
                          top: `${15 + (i * 8)}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: `${3 + (i * 0.5)}s`
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Glowing Orbs that change with image */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <div 
                      className={`absolute w-32 h-32 rounded-full filter blur-2xl transition-all duration-1000 ease-out ${
                        currentImageIndex === 0 
                          ? 'bg-blue-500/40 top-1/4 -left-16 animate-pulse' 
                          : currentImageIndex === 1
                          ? 'bg-purple-500/40 top-1/3 -right-16 animate-pulse delay-300'
                          : currentImageIndex === 2
                          ? 'bg-pink-500/40 bottom-1/4 -left-16 animate-pulse delay-600'
                          : currentImageIndex === 3
                          ? 'bg-green-500/40 top-1/2 -right-20 animate-pulse delay-900'
                          : currentImageIndex === 4
                          ? 'bg-orange-500/40 bottom-1/3 -left-20 animate-pulse delay-1200'
                          : 'bg-indigo-500/40 top-1/4 -right-20 animate-pulse delay-1500'
                      }`}
                    ></div>
                    <div 
                      className={`absolute w-24 h-24 rounded-full filter blur-xl transition-all duration-1000 ease-out delay-500 ${
                        currentImageIndex === 0 
                          ? 'bg-purple-500/30 bottom-1/4 -right-12 animate-pulse delay-500' 
                          : currentImageIndex === 1
                          ? 'bg-pink-500/30 top-1/4 -left-12 animate-pulse delay-800'
                          : currentImageIndex === 2
                          ? 'bg-blue-500/30 top-1/3 -right-12 animate-pulse delay-1100'
                          : currentImageIndex === 3
                          ? 'bg-purple-500/30 bottom-1/3 -left-12 animate-pulse delay-1400'
                          : currentImageIndex === 4
                          ? 'bg-green-500/30 top-1/2 -right-12 animate-pulse delay-1700'
                          : 'bg-orange-500/30 bottom-1/4 -left-12 animate-pulse delay-2000'
                      }`}
                    ></div>
                  </div>

                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
                    {/* Drag & Drop Carousel */}
                    <div 
                      ref={carouselRef}
                      className="aspect-square rounded-2xl overflow-hidden relative cursor-grab active:cursor-grabbing"
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      {/* Main Image */}
                      <div 
                        className="w-full h-full transition-transform duration-300 ease-out"
                        style={{
                          transform: `translateX(${dragOffset}px)`,
                        }}
                      >
                        <img
                          src={carouselImages[currentImageIndex].src}
                          alt={carouselImages[currentImageIndex].alt}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Image Overlay with Info */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                          <div className="p-6 w-full">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {carouselImages[currentImageIndex].title}
                            </h3>
                            <p className="text-gray-200 text-sm">
                              {carouselImages[currentImageIndex].description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Navigation Dots */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {carouselImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentImageIndex
                                ? 'bg-white scale-125'
                                : 'bg-white/40 hover:bg-white/60'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Drag Instructions */}
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="flex items-center space-x-2 text-white text-sm">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                          <span>Drag to change</span>
                        </div>
                      </div>

                      {/* Previous/Next Buttons */}
                      <button
                        onClick={() => setCurrentImageIndex(prev => 
                          prev === 0 ? carouselImages.length - 1 : prev - 1
                        )}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <button
                        onClick={() => setCurrentImageIndex(prev => 
                          prev === carouselImages.length - 1 ? 0 : prev + 1
                        )}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg
                className="w-8 h-8 text-white/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Section Separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] lg:bg-[size:4rem_4rem]"></div>

        <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 sm:mb-8 border border-white/10">
                <span className="text-white/80 text-xs sm:text-sm font-medium">
                  Our Services
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white leading-tight">
                Empowering Innovation with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  AI & Full-Stack Development
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                MillenniumAi is one of the fastest-growing technology partners,
                trusted by startups and enterprises alike.
              </p>
            </div>

            {/* Timeline Style Services */}
            <div className="relative">
              {/* Center Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20 hidden md:block"></div>

              {/* Service Items */}
              <div className="space-y-16 sm:space-y-24 lg:space-y-32">
                {/* Web Development */}
                <div className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <div className="text-center md:text-right">
                      <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                          Web Development
                        </h3>
                      </div>
                      <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                        Crafting stunning, responsive websites that deliver
                        measurable results.
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-4">
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs sm:text-sm">
                          Mordern Web Apps
                        </span>
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs sm:text-sm">
                          Business and Corporate Websites
                        </span>
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs sm:text-sm">
                          Ecommerce
                        </span>
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs sm:text-sm">
                          CMS
                        </span>
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-pink-500/10 rounded-full text-pink-400 text-xs sm:text-sm">
                          Landing Pages
                        </span>
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10">
                        <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden">
                          <img
                            src={web}
                            alt="Web Development"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* App Development */}
                <div className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <div className="order-2 md:order-1">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10">
                          <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden">
                            <img
                              src={App}
                              alt="App Development"
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-1 md:order-2 text-center md:text-left">
                      <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                          App Development
                        </h3>
                      </div>
                      <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                        Native and cross-platform mobile applications that
                        provide exceptional user experiences.
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4">
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs sm:text-sm">
                          React Native
                        </span>
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-pink-500/10 rounded-full text-pink-400 text-xs sm:text-sm">
                          Flutter
                        </span>
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs sm:text-sm">
                          iOS/Android
                        </span>
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs sm:text-sm">
                          Real Time Features
                        </span>
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-pink-500/10 rounded-full text-pink-400 text-xs sm:text-sm">
                          Cross Platform
                        </span>
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs sm:text-sm">
                          Offline Capability
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Solutions */}
                <div className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <div className="text-center md:text-right">
                      <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                          AI Solutions
                        </h3>
                      </div>
                      <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                        Cutting-edge AI services that power next-generation applications and Unlock the potential of artificial intelligence.  
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-4">
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs sm:text-sm">
                          NLP
                        </span>
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-pink-500/10 rounded-full text-pink-400 text-xs sm:text-sm">
                          Genrative AI
                        </span>
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs sm:text-sm">
                          Data Processing
                        </span>
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs sm:text-sm">
                          Computer Vision
                        </span>
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-pink-500/10 rounded-full text-pink-400 text-xs sm:text-sm">
                          Content Moderation
                        </span>
                        <span className="px-3 sm:px-4 cursor-pointer py-1.5 sm:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs sm:text-sm">
                          Document Processing
                        </span>
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10">
                        <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden">
                          <img
                            src={Ai}
                            loading="lazy"
                            alt="AI Solutions"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 sm:mt-24 lg:mt-32 text-center">
              <Link to="/services">
                <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto">
                  <span className="relative z-10">Explore Our Services →</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="relative py-32 overflow-hidden">
        {/* Section Separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="max-w-[1920px] w-full mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-8 border border-white/10">
                <span className="text-white/80 text-sm font-medium">
                  What We Offer
                </span>
              </div>
              <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
                Our Core{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive solutions tailored to meet your business needs
                with cutting-edge technology.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Web Development Card */}
              <div className="group relative h-[600px] sm:h-[650px] lg:h-[700px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16"></div>
                  <div className="relative flex-1 flex flex-col">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-6 h-6 sm:w-10 sm:h-10 text-blue-400"
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
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
                      Web Development
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                      We craft stunning, responsive websites that deliver
                      measurable results.
                    </p>
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm sm:text-lg text-gray-300">
                          Scalable Architecture
                        </span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm sm:text-lg text-gray-300">
                          Performance Optimized
                        </span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm sm:text-lg text-gray-300">
                          Security Enhanced
                        </span>
                      </div>
                    </div>
                    <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 mt-6 sm:mt-8">
                      <img
                        loading="lazy"
                        src={web}
                        alt="Web Development"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mt-auto"
                    >
                      <span className="text-base sm:text-lg font-medium">Learn More</span>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* App Development Card */}
              <div className="group relative h-[600px] sm:h-[650px] lg:h-[700px]">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16"></div>
                  <div className="relative flex-1 flex flex-col">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-6 h-6 sm:w-10 sm:h-10 text-purple-400"
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
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
                      App Development
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                      Native and cross-platform mobile applications that provide
                      exceptional user experiences.
                    </p>
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm sm:text-lg text-gray-300">
                          Native Performance
                        </span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-sm sm:text-lg text-gray-300">
                          Offline Capability
                        </span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm sm:text-lg text-gray-300">
                          Push Notifications
                        </span>
                      </div>
                    </div>
                    <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6">
                      <img
                        loading="lazy"
                        src={App}
                        alt="App Development"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-auto"
                    >
                      <span className="text-base sm:text-lg font-medium">Learn More</span>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* AI Solutions Card */}
              <div className="group relative h-[600px] sm:h-[650px] lg:h-[700px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-full blur-2xl transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16"></div>
                  <div className="relative flex-1 flex flex-col">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-6 h-6 sm:w-10 sm:h-10 text-blue-400"
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
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
                      AI Solutions
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                      Cutting-edge AI services that power next-generation
                      applications.
                    </p>
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm sm:text-lg text-gray-300">
                          Data Annotation
                        </span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-sm sm:text-lg text-gray-300">
                          Model Training
                        </span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm sm:text-lg text-gray-300">
                          AI Integration
                        </span>
                      </div>
                    </div>
                    <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 mt-6 sm:mt-6">
                      <img
                        loading="lazy"
                        src={Ai}
                        alt="AI Solutions"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mt-auto"
                    >
                      <span className="text-base sm:text-lg font-medium">Learn More</span>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-32 overflow-hidden">
        {/* Section Separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="max-w-[1920px] w-full mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-8 border border-white/10">
                <span className="text-white/80 text-sm font-medium">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  MillenniumAi
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We combine cutting-edge technology with exceptional service to
                deliver outstanding results.
              </p>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Features */}
              <div className="space-y-8">
                {/* Quality Control Feature */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                        <FaCheckCircle className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-white">
                          Unmatched Quality Control
                        </h3>
                        <p className="text-gray-300 mb-4">
                          With rigorous multi-level quality checks and
                          experienced QA teams, we guarantee 99–100% data
                          accuracy.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <span className="px-4 cursor-pointer py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm">
                            99–100% Accuracy
                          </span>
                          <span className="px-4 cursor-pointer py-2 bg-purple-500/10 rounded-full text-purple-400 text-sm">
                            Expert QA Teams
                          </span>
                          <span className="px-4 cursor-pointer py-2 bg-pink-500/10 rounded-full text-pink-400 text-sm">
                            Bug-Free Code
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fast Turnaround Feature */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                        <FaBolt className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-white">
                          Fast Turnaround Time
                        </h3>
                        <p className="text-gray-300 mb-4">
                          Whether it's a large-volume data labeling project or a
                          full-fledged mobile application, we deliver fast.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <span className="px-4 cursor-pointer py-2 bg-purple-500/10 rounded-full text-purple-400 text-sm">
                            Rapid Delivery
                          </span>
                          <span className="px-4 cursor-pointer py-2 bg-pink-500/10 rounded-full text-pink-400 text-sm">
                            Scalable Teams
                          </span>
                          <span className="px-4 cursor-pointer py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm">
                            24/7 Support
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customization Feature */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                        <FaCogs className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-white">
                          Complete Customization
                        </h3>
                        <p className="text-gray-300 mb-4">
                          No two businesses are the same. We tailor our services
                          to align perfectly with your vision.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <span className="px-4 cursor-pointer py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm">
                            Tailored Solutions
                          </span>
                          <span className="px-4 cursor-pointer py-2 bg-pink-500/10 rounded-full text-pink-400 text-sm">
                            Industry Standards
                          </span>
                          <span className="px-4 cursor-pointer py-2 bg-purple-500/10 rounded-full text-purple-400 text-sm">
                            Future-Ready
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats & Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">
                        25+
                      </div>
                      <div className="text-gray-400">Projects Completed</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">
                        99%
                      </div>
                      <div className="text-gray-400">Client Satisfaction</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">
                        24/7
                      </div>
                      <div className="text-gray-400">Support Available</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">
                        25+
                      </div>
                      <div className="text-gray-400">Team Members</div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <img
                      loading="lazy"
                      src={expert}
                      alt="Our Team"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-2">
                          Our Expert Team
                        </div>
                        <div className="text-gray-200">
                          Dedicated to Excellence
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-32 overflow-hidden">
        {/* Section Separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="max-w-[1920px] w-full mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-8 border border-white/10">
                <span className="text-white/80 text-sm font-medium">
                  Our Expertise
                </span>
              </div>
              <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
                Industries We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Serve
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Empowering diverse sectors with cutting-edge AI and technology
                solutions.
              </p>
            </div>

            {/* Industries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaHeartbeat className="w-8 h-8" />,
                  text: "Healthcare & Life Sciences",
                  gradient: "from-blue-500/20 to-purple-500/20",
                  iconColor: "text-blue-400",
                  description:
                    "AI-powered diagnostics and patient care solutions",
                },
                {
                  icon: <FaShoppingCart className="w-8 h-8" />,
                  text: "Retail & E-Commerce",
                  gradient: "from-purple-500/20 to-pink-500/20",
                  iconColor: "text-purple-400",
                  description:
                    "Smart retail analytics and personalized shopping",
                },
                {
                  icon: <FaUniversity className="w-8 h-8" />,
                  text: "Finance & Banking",
                  gradient: "from-blue-500/20 to-pink-500/20",
                  iconColor: "text-blue-400",
                  description:
                    "Secure financial transactions and fraud detection",
                },
                {
                  icon: <FaTruck className="w-8 h-8" />,
                  text: "Logistics & Transportation",
                  gradient: "from-purple-500/20 to-blue-500/20",
                  iconColor: "text-purple-400",
                  description: "Optimized supply chain and route planning",
                },
                {
                  icon: <FaCar className="w-8 h-8" />,
                  text: "Automotive AI",
                  gradient: "from-blue-500/20 to-purple-500/20",
                  iconColor: "text-blue-400",
                  description: "Autonomous vehicles and smart mobility",
                },
                {
                  icon: <FaFilm className="w-8 h-8" />,
                  text: "Media & Entertainment",
                  gradient: "from-purple-500/20 to-pink-500/20",
                  iconColor: "text-purple-400",
                  description: "Content analysis and recommendation systems",
                },
                {
                  icon: <FaGraduationCap className="w-8 h-8" />,
                  text: "EdTech & eLearning",
                  gradient: "from-blue-500/20 to-pink-500/20",
                  iconColor: "text-blue-400",
                  description:
                    "Personalized learning and educational analytics",
                },
                {
                  icon: <FaSatelliteDish className="w-8 h-8" />,
                  text: "Agriculture & Satellite Imaging",
                  gradient: "from-purple-500/20 to-blue-500/20",
                  iconColor: "text-purple-400",
                  description: "Precision farming and crop monitoring",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative h-[280px] perspective-1000"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 overflow-hidden h-full flex flex-col transform transition-all duration-500 group-hover:rotate-y-6 group-hover:rotate-x-6 group-hover:scale-105 hover:shadow-2xl group-hover:animate-wiggle">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                    <div className="relative flex-1 flex flex-col">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300`}
                      >
                        <div className={item.iconColor}>{item.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {item.text}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 flex-1">
                        {item.description}
                      </p>
                      <div className="flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-auto">
                        <span className="text-sm font-medium">Learn More</span>
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Section Separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="max-w-[1920px] w-full mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-8 border border-white/10">
                <span className="text-white/80 text-sm font-medium">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
                Let's Build Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Amazing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your ideas into reality? Reach out to us and
                let's create something extraordinary together.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <h3 className="text-3xl font-bold mb-8 text-white">
                      Contact Information
                    </h3>
                    <div className="space-y-8">
                      <a
                        href="tel:+919319410265"
                        className="flex items-center gap-6 text-gray-300 hover:text-blue-400 transition-all duration-300 group"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <HiPhone className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Phone</p>
                          <p className="text-xl font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                            +91 837 798 8481
                          </p>
                          
                        </div>
                      </a>

                      <a
                        href="mailto:info@millenniumai.in"
                        className="flex items-center gap-6 text-gray-300 hover:text-purple-400 transition-all duration-300 group"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <HiMail className="w-8 h-8 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Email</p>
                          <p className="text-xl font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                            info@millenniumai.in
                          </p>
                          <p className="text-xl font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                            Sales@millenniumai.in
                          </p>
                        </div>
                      </a>

                      <div className="flex items-center gap-6 text-gray-300 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <HiLocationMarker className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Address</p>
                          <p className="text-xl font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 transition-all duration-300">
                            UGF-02 Krishna Enclave Govindpuram,
                          </p>
                          <p className="text-xl font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 transition-all duration-300">
                            Ghaziabad, UP 201002
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold mb-6 text-white">
                      Connect With Us
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                      >
                        <FaWhatsapp className="w-6 h-6 text-blue-400" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                      >
                        <svg
                          className="w-6 h-6 text-purple-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                      >
                        <svg
                          className="w-6 h-6 text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-3xl font-bold mb-8 text-white">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group relative">
                        <input
                          type="text"
                          placeholder="First Name"
                          name="first_name"
                          value={form.first_name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg text-white placeholder-gray-400 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </div>
                      <div className="group relative">
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="last_name"
                          value={form.last_name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg text-white placeholder-gray-400 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </div>
                    </div>
                    <div className="group relative">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg text-white placeholder-gray-400 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                    <div className="group relative">
                      <input
                        type="tel"
                        placeholder="Contact Number"
                        name="contactno"
                        value={form.contactno}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg text-white placeholder-gray-400 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                    <div className="group relative">
                      <textarea
                        placeholder="Message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-lg text-white placeholder-gray-400 transition-all duration-300"
                      ></textarea>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="relative z-10">
                        {loading ? "Sending..." : "Send Message"}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
