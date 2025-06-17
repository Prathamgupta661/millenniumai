import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "../assets/home_img_1.webp";
import {
  FaGlobe,
  FaMobileAlt,
  FaGamepad,
  FaRobot,
  FaCloud,
  FaChartLine,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaClock,
  FaHandshake,
  FaBolt,
  FaCogs,
} from "react-icons/fa";

const aiMlDropdowns = [
  {
    label: "NLP",
    content: (
      <ul className="list-disc ml-4 mt-1 space-y-1">
        <li>Text Annotation</li>
        <li>Text Classification</li>
        <li>Video Transcription</li>
        <li>Relation Extraction</li>
        <li>Named Entity Recognition</li>
        <li>Chatbot Training</li>
        <li>Sentiment Analysis</li>
        <li>Feature Classification</li>
        <li>Intent Classification</li>
      </ul>
    ),
  },
  {
    label: "Data Processing",
    content: (
      <ul className="list-disc ml-4 mt-1 space-y-1">
        <li>Real-time Monitoring</li>
        <li>Data Classification</li>
        <li>Image Sorting</li>
        <li>KYC Verification</li>
        <li>Data Aggregation</li>
        <li>Metadata Capture</li>
        <li>Link Sourcing</li>
      </ul>
    ),
  },
  {
    label: "Generative AI",
    content: (
      <ul className="list-disc ml-4 mt-1 space-y-1">
        <li>RLHF</li>
        <li>Red Teaming</li>
        <li>DataSum</li>
        <li>Fine-tuning</li>
        <li>Large Language Models</li>
        <li>Prompt & Response Generation</li>
        <li>Agentic Al</li>
        <li>Robotics Al</li>
      </ul>
    ),
  },
  {
    label: "Computer Vision",
    content: (
      <ul className="list-disc ml-4 mt-1 space-y-1">
        <li>Image Annotation</li>
        <li>Video Annotation</li>
        <li>3D Point Cloud Annotation</li>
        <li>Al Assisted Labelling</li>
        <li>ML Model Validation</li>
        <li>Last Mile Automation</li>
        <li>Realtime Annotation</li>
        <li>Time Series Data Labelling</li>
      </ul>
    ),
  },
  {
    label: "Content Moderation",
    content: (
      <ul className="list-disc ml-4 mt-1 space-y-1">
        <li>Social Media - UGC</li>
        <li>Communities & Forums</li>
        <li>Metaverse Moderation</li>
        <li>Dating Websites</li>
        <li>Gaming Sites Moderation</li>
        <li>Children Websites</li>
        <li>Publishing Industry</li>
        <li>Marketplaces & E-commerce</li>
      </ul>
    ),
  },
  {
    label: "Document Processing",
    content: (
      <ul className="list-disc ml-4 mt-1 space-y-1">
        <li>OCR Transcription</li>
        <li>Intelligent Document Processing</li>
      </ul>
    ),
  },
  {
    label: "Automatic Speech Recognition",
    content: (
      <ul className="list-disc ml-4 mt-1 space-y-1">
        <li>Audio Transcription</li>
        <li>Audio Annotation</li>
      </ul>
    ),
  },
];

const Services = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_25%,transparent_25%,transparent_75%,#ffffff05_75%,#ffffff05)] bg-[length:60px_60px] bg-[position:0_0,30px_30px]"></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-[120px] animate-float-delayed"></div>

        <div className="max-w-[1920px] w-full mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              {/* Icon Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-8 border border-white/10 mt-40">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  <FaRocket className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-white/80 text-sm font-medium">Our Services</span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight mt-12">
                Comprehensive{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Technology
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></span>
                </span>{" "}
                Solutions
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                We offer full-cycle digital product development, combining creative design, robust technology, and smart marketing to help your business thrive in the digital age.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {[
                  { number: "500+", label: "Projects" },
                  { number: "99%", label: "Satisfaction" },
                  { number: "24/7", label: "Support" },
                  { number: "50+", label: "Experts" }
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                          {stat.number}
                        </div>
                        <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-8 border border-white/10">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  <FaRocket className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-white/80 text-sm font-medium">What We Offer</span>
              </div>
              <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
                Our Core{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive solutions tailored to meet your business needs with cutting-edge technology.
              </p>
            </div>

            {/* Service Cards Carousel */}
            <div className="relative px-12">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="service-swiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {[
                  {
                    icon: FaGlobe,
                    title: "Website Development",
                    subtitle: "Custom Websites That Work as Hard as You Do",
                    description: "Our website development team crafts stunning, responsive websites that deliver measurable results. Whether you're a startup, SME, or an established brand, we build custom platforms that are scalable, secure, and fast.",
                    features: [
                      "Business & Corporate Websites",
                      "eCommerce Stores",
                      "Custom CMS Development",
                      "Landing Pages for Campaigns",
                      "Multilingual & Multi-region Support"
                    ],
                    color: "blue",
                    gradient: "from-blue-500/20 to-purple-500/20"
                  },
                  {
                    icon: FaMobileAlt,
                    title: "Mobile App Development",
                    subtitle: "Future-Ready Mobile Apps for Android & iOS",
                    description: "With mobile-first strategies, we deliver intuitive and performance-driven apps tailored for your business. Whether it's a native Android/iOS app or a cross-platform solution, we ensure seamless user experience.",
                    features: [
                      "Native Apps (Java/Kotlin, Swift)",
                      "Cross-Platform Apps (Flutter, React Native)",
                      "Admin Dashboard & API Integration",
                      "Real-time Features",
                      "Ongoing Monitoring & Updates"
                    ],
                    color: "purple",
                    gradient: "from-purple-500/20 to-pink-500/20"
                  },
                  {
                    icon: FaGamepad,
                    title: "Gaming App Development",
                    subtitle: "Gamify Experiences, Engage Millions",
                    description: "We specialize in building immersive gaming applications that capture users and maximize retention. Whether it's a casual game, an arcade-style app, or a multiplayer experience.",
                    features: [
                      "2D & 3D Game Design",
                      "Multiplayer Real-Time Gaming",
                      "Gamification Modules",
                      "Unity & Unreal Engine Expertise",
                      "Game Testing & Optimization"
                    ],
                    color: "pink",
                    gradient: "from-pink-500/20 to-blue-500/20"
                  },
                  {
                    icon: FaRobot,
                    title: "AI & ML Solutions",
                    subtitle: "Intelligent Automation for Modern Businesses",
                    description: "Leverage the power of artificial intelligence and machine learning to automate, predict, and optimize your business processes. We build custom AI models and integrate them seamlessly into your workflow.",
                    features: [
                      "Natural Language Processing",
                      "Computer Vision",
                      "Machine Learning Models",
                      "Predictive Analytics",
                      "AI Integration Services"
                    ],
                    color: "blue",
                    gradient: "from-blue-500/20 to-purple-500/20"
                  },
                  {
                    icon: FaCloud,
                    title: "Cloud & DevOps",
                    subtitle: "Scale with Confidence & Reliability",
                    description: "Modernize your infrastructure with our cloud and DevOps services. We help you deploy, manage, and scale applications securely and efficiently on AWS, Azure, or Google Cloud.",
                    features: [
                      "Cloud Migration & Management",
                      "CI/CD Pipeline Setup",
                      "Infrastructure as Code",
                      "Monitoring & Security",
                      "Cost Optimization"
                    ],
                    color: "purple",
                    gradient: "from-purple-500/20 to-pink-500/20"
                  },
                  {
                    icon: FaChartLine,
                    title: "Digital Marketing",
                    subtitle: "Grow Your Brand & Reach New Heights",
                    description: "Our digital marketing team crafts data-driven strategies to boost your online presence, generate leads, and increase conversions. From SEO to paid ads, we cover it all.",
                    features: [
                      "SEO & Content Marketing",
                      "Social Media Management",
                      "PPC & Paid Campaigns",
                      "Email Marketing",
                      "Analytics & Reporting"
                    ],
                    color: "pink",
                    gradient: "from-pink-500/20 to-blue-500/20"
                  }
                ].map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="group relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 rounded-3xl border border-white/10 overflow-hidden">
                        {/* Animated Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16"></div>
                      </div>

                      {/* Card Content */}
                      <div className="relative h-full flex flex-col p-8">
                        {/* Icon Header */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
                            <service.icon className={`w-8 h-8 text-${service.color}-400`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                            <p className="text-lg text-gray-300">{service.subtitle}</p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>

                        {/* Features List */}
                        <div className="space-y-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-gray-300 group/feature">
                              <div className={`w-2 h-2 rounded-full bg-${service.color}-400 group-hover/feature:scale-150 transition-transform duration-300`}></div>
                              <span className="group-hover/feature:text-white transition-colors duration-300">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Learn More Button */}
                        <div className="mt-auto">
                          <button className="group/btn w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                            <span className="text-white/80 group-hover/btn:text-white transition-colors duration-300">Learn More</span>
                            <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Add custom styles for the Swiper */}
            <style jsx>{`
              .service-swiper {
                padding: 50px 0;
                width: 100%;
                max-width: 1400px;
                margin: 0 auto;
              }
              .service-swiper .swiper-slide {
                height: auto;
              }
              .service-swiper .swiper-button-next,
              .service-swiper .swiper-button-prev {
                color: #fff;
                background: rgba(255, 255, 255, 0.1);
                width: 40px;
                height: 40px;
                border-radius: 50%;
                backdrop-filter: blur(10px);
              }
              .service-swiper .swiper-button-next {
                right: 0;
              }
              .service-swiper .swiper-button-prev {
                left: 0;
              }
              .service-swiper .swiper-button-next:after,
              .service-swiper .swiper-button-prev:after {
                font-size: 20px;
              }
              .service-swiper .swiper-pagination {
                bottom: 0;
              }
              .service-swiper .swiper-pagination-bullet {
                background: #fff;
                opacity: 0.5;
                width: 8px;
                height: 8px;
              }
              .service-swiper .swiper-pagination-bullet-active {
                opacity: 1;
                background: linear-gradient(to right, #3b82f6, #8b5cf6);
                width: 20px;
                border-radius: 4px;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/30 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[100px] animate-pulse delay-1000"></div>

        <div className="max-w-[1920px] w-full mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-8 border border-white/10">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  <FaRocket className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-white/80 text-sm font-medium">Why Choose Us</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                The{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    MillenniumAi
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></span>
                </span>{" "}
                Difference
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Experience excellence in every aspect of our service delivery
              </p>
            </div>

            {/* Main Content */}
            <div className="relative">
              {/* Center Circle */}
              <div className="relative mx-auto w-[600px] h-[600px] mb-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
                      99%
                    </div>
                    <div className="text-2xl text-white mb-2">Client Satisfaction</div>
                    <div className="text-gray-400">Across 500+ Projects</div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Quality Control */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300">
                      <FaCheckCircle className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Unmatched Quality</h3>
                    <p className="text-gray-300 mb-6">With rigorous multi-level quality checks and experienced QA teams, we guarantee 99–100% data accuracy.</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">99–100% Accuracy</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">Expert QA Teams</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-gray-300">Bug-Free Code</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fast Delivery */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300">
                      <FaBolt className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast Delivery</h3>
                    <p className="text-gray-300 mb-6">Whether it's a large-volume data labeling project or a full-fledged mobile application, we deliver fast.</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">Rapid Delivery</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-gray-300">Scalable Teams</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">24/7 Support</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customization */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300">
                      <FaCogs className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Tailored Solutions</h3>
                    <p className="text-gray-300 mb-6">No two businesses are the same. We tailor our services to align perfectly with your vision.</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">Custom Solutions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-gray-300">Industry Standards</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">Future-Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { number: "500+", label: "Projects Completed", color: "blue" },
                    { number: "99%", label: "Client Satisfaction", color: "purple" },
                    { number: "24/7", label: "Support Available", color: "pink" },
                    { number: "50+", label: "Team Members", color: "blue" }
                  ].map((stat, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center">
                        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2">
                          {stat.number}
                        </div>
                        <div className="text-gray-300">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-20 text-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;