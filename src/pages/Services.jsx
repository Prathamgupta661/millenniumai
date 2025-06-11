import React from "react";
import Card from "../components/Card";
import {
  FaGlobe,
  FaMobileAlt,
  FaGamepad,
  FaRobot,
  FaCloud,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

const servicesData = [
  {
    icon: (
      <FaGlobe className="text-cyan-400 text-4xl group-hover:text-pink-400 transition-colors duration-300" />
    ),
    heading: "Website Development",
    subheading: "Custom Websites That Work as Hard as You Do",
    p1: `Our website development team crafts stunning, responsive websites that deliver measurable results. Whether you're a startup, SME, or an established brand, we build custom platforms that are scalable, secure, and fast.`,
    p_head: "Key Offerings:",
    li1: "Business & Corporate Websites",
    li2: "eCommerce Stores (Shopify, WooCommerce, Magento)",
    li3: "Custom CMS Development (WordPress, Webflow, Headless CMS)",
    li4: "Landing Pages for Campaigns",
    li5: "Multilingual & Multi-region Support, Mobile & Tablet",
    p2: `We combine creativity with strategy to help you create a powerful online presence that converts.`,
  },
  {
    icon: (
      <FaMobileAlt className="text-pink-400 text-4xl group-hover:text-cyan-400 transition-colors duration-300" />
    ),
    heading: "Mobile App Development",
    subheading: "Future-Ready Mobile Apps for Android & iOS",
    p1: `With mobile-first strategies, we deliver intuitive and performance-driven apps tailored for your business. Whether it’s a native Android/iOS app or a cross-platform solution, we ensure seamless user experience, strong backend, and stunning UI.`,
    p_head: "Capabilities:",
    li1: "Native Apps (Java/Kotlin, Swift)",
    li2: "Cross-Platform Apps (Flutter, React Native)",
    li3: "Admin Dashboard & API Integration",
    li4: "Real-time Features (Chat, Notifications, GPS)",
    li5: "Ongoing Monitoring & Updates",
    p2: `Our apps have helped startups scale and enterprises digitize with confidence.`,
  },
  {
    icon: (
      <FaGamepad className="text-purple-400 text-4xl group-hover:text-cyan-400 transition-colors duration-300" />
    ),
    heading: "Gaming App Development",
    subheading: "Gamify Experiences, Engage Millions",
    p1: `We specialize in building immersive gaming applications that capture users and maximize retention. Whether it's a casual game, an arcade-style app, or a multiplayer experience, our gaming developers bring creativity and technical mastery together.`,
    p_head: "What We Do:",
    li1: "2D & 3D Game Design",
    li2: "Multiplayer Real-Time Gaming",
    li3: "Gamification Modules for Apps",
    li4: "Unity, Unreal Engine, and Phaser.js Expertise",
    li5: "Game Testing & Optimization",
    p2: `Already trusted by clients in education, entertainment, and brand engagement, our gaming apps stand out with rich graphics and performance.`,
  },
  {
    icon: (
      <FaRobot className="text-cyan-400 text-4xl group-hover:text-pink-400 transition-colors duration-300" />
    ),
    heading: "AI & ML Solutions",
    subheading: "Intelligent Automation for Modern Businesses",
    p1: `Leverage the power of artificial intelligence and machine learning to automate, predict, and optimize your business processes. We build custom AI models and integrate them seamlessly into your workflow.`,
    p_head: "Expertise:",
    li1: "Data Annotation & Labeling",
    li2: "Custom AI Model Development",
    li3: "NLP & Computer Vision",
    li4: "Predictive Analytics",
    li5: "AI Integration & Consulting",
    p2: `Transform your data into actionable insights and smarter decisions.`,
  },
  {
    icon: (
      <FaCloud className="text-pink-400 text-4xl group-hover:text-cyan-400 transition-colors duration-300" />
    ),
    heading: "Cloud & DevOps",
    subheading: "Scale with Confidence & Reliability",
    p1: `Modernize your infrastructure with our cloud and DevOps services. We help you deploy, manage, and scale applications securely and efficiently on AWS, Azure, or Google Cloud.`,
    p_head: "Services:",
    li1: "Cloud Migration & Management",
    li2: "CI/CD Pipeline Setup",
    li3: "Infrastructure as Code",
    li4: "Monitoring & Security",
    li5: "Cost Optimization",
    p2: `Achieve agility, reliability, and cost savings with our cloud expertise.`,
  },
  {
    icon: (
      <FaChartLine className="text-cyan-400 text-4xl group-hover:text-pink-400 transition-colors duration-300" />
    ),
    heading: "Digital Marketing",
    subheading: "Grow Your Brand & Reach New Heights",
    p1: `Our digital marketing team crafts data-driven strategies to boost your online presence, generate leads, and increase conversions. From SEO to paid ads, we cover it all.`,
    p_head: "Key Services:",
    li1: "SEO & Content Marketing",
    li2: "Social Media Management",
    li3: "PPC & Paid Campaigns",
    li4: "Email Marketing",
    li5: "Analytics & Reporting",
    p2: `Let us help you reach your audience and grow your business online.`,
  },
];

const Services = () => {
  return (
    <section className="mt-36 px-2 font-playfair max-w-7xl mx-auto relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 w-[600px] h-[340px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-400/30 via-pink-400/20 to-purple-400/30 blur-2xl opacity-70 animate-float-bounce"></div>
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text mb-4 drop-shadow-lg">
        Comprehensive Technology Solutions Under One Roof
      </h1>
      <p className="font-playfair mx-auto text-center text-slate-300 max-w-2xl mb-12 text-lg">
        We offer full-cycle digital product development, combining creative design, robust technology, and smart marketing. Our services include:
      </p>
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            className="group bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 border border-cyan-700/30 rounded-3xl shadow-2xl px-12 py-6 w-full min-h-[260px] max-w-[480px] mx-auto transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 backdrop-blur-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-xl bg-gradient-to-br from-cyan-500/30 to-pink-500/30 p-4 shadow-lg">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:from-pink-400 group-hover:to-cyan-400 transition-colors duration-300 drop-shadow">
                {service.heading}
              </h2>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
              {service.subheading}
            </h3>
            <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 mb-2">
              {service.p1}
            </p>
            <p className="font-semibold text-cyan-400 mb-2 group-hover:text-pink-400 transition-colors duration-300">
              {service.p_head}
            </p>
            <ul className="mb-2 space-y-1">
              {[service.li1, service.li2, service.li3, service.li4, service.li5].map(
                (li, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-200 group-hover:text-pink-300 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-pink-400 transition-colors duration-300"></span>
                    <span className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">{li}</span>
                  </li>
                )
              )}
            </ul>
            <p className="text-gray-400 group-hover:text-white transition-colors duration-300 italic">
              {service.p2}
            </p>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <section className="text-white body-font mt-24">
        <div className="container px-5 py-16 mx-auto rounded-3xl bg-gradient-to-br from-[#232046]/80 via-[#18122b]/80 to-[#2d234a]/80 shadow-xl backdrop-blur-md">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text mb-4">
              Why Choose Us?
            </h2>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-slate-300">
              We blend innovation, technology, and creativity to deliver solutions that help your business grow and stand out in the digital world.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {[
              "Authentic Cliche Forage",
              "Kinfolk Chips Snackwave",
              "Coloring Book Ethical",
              "Typewriter Polaroid Cray",
              "Pack Truffaut Blue",
              "The Catcher In The Rye",
            ].map((feature, i) => (
              <div className="p-2 sm:w-1/2 w-full" key={i}>
                <div className="bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 rounded-xl flex p-4 h-full items-center shadow-lg hover:shadow-pink-400/20 transition">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-cyan-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-lg hover:text-cyan-400 transition-colors duration-200">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="mx-auto mt-16 px-10 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-pink-400/30 transition flex gap-2 text-lg">
            <FaRocket className="text-2xl" />
            Get Started
          </button>
        </div>
      </section>
    </section>
  );
};

export default Services;
