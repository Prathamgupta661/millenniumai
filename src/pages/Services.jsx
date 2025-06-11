import React, { useState } from "react";
import {
  FaGlobe,
  FaMobileAlt,
  FaGamepad,
  FaRobot,
  FaCloud,
  FaChartLine,
  FaRocket,
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
    <section className="mt-36 px-2 font-playfair max-w-7xl mx-auto relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 w-[600px] h-[340px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-400/30 via-pink-400/20 to-purple-400/30 blur-2xl opacity-70 animate-float-bounce"></div>
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text mb-4 drop-shadow-lg">
        Comprehensive Technology Solutions Under One Roof
      </h1>
      <p className="font-playfair mx-auto text-center text-slate-300 max-w-2xl mb-12 text-lg">
        We offer full-cycle digital product development, combining creative
        design, robust technology, and smart marketing. Our services include:
      </p>
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {/* Website Development Card */}
        <div className="group bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 border border-cyan-700/30 rounded-3xl shadow-2xl px-12 py-6 w-full min-h-[260px] max-w-[480px] mx-auto transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 backdrop-blur-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="rounded-xl bg-gradient-to-br from-cyan-500/30 to-pink-500/30 p-4 shadow-lg">
              <FaGlobe className="text-cyan-400 text-4xl group-hover:text-pink-400 transition-colors duration-300" />
            </div>
            <h2 className="text-2xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:from-pink-400 group-hover:to-cyan-400 transition-colors duration-300 drop-shadow">
              Website Development
            </h2>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
            Custom Websites That Work as Hard as You Do
          </h3>
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 mb-2">
            Our website development team crafts stunning, responsive websites
            that deliver measurable results. Whether you're a startup, SME, or
            an established brand, we build custom platforms that are scalable,
            secure, and fast.
          </p>
          <p className="font-semibold text-cyan-400 mb-2 group-hover:text-pink-400 transition-colors duration-300">
            Key Offerings:
          </p>
          <ul className="mb-2 space-y-1">
            {[
              "Business & Corporate Websites",
              "eCommerce Stores (Shopify, WooCommerce, Magento)",
              "Custom CMS Development (WordPress, Webflow, Headless CMS)",
              "Landing Pages for Campaigns",
              "Multilingual & Multi-region Support, Mobile & Tablet",
            ].map((li, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-200 group-hover:text-pink-300 transition-colors duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-pink-400 transition-colors duration-300"></span>
                <span className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                  {li}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-gray-400 group-hover:text-white transition-colors duration-300 italic">
            We combine creativity with strategy to help you create a powerful
            online presence that converts.
          </p>
        </div>

        {/* Mobile App Development Card */}
        <div className="group bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 border border-cyan-700/30 rounded-3xl shadow-2xl px-12 py-6 w-full min-h-[260px] max-w-[480px] mx-auto transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 backdrop-blur-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="rounded-xl bg-gradient-to-br from-cyan-500/30 to-pink-500/30 p-4 shadow-lg">
              <FaMobileAlt className="text-pink-400 text-4xl group-hover:text-cyan-400 transition-colors duration-300" />
            </div>
            <h2 className="text-2xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:from-pink-400 group-hover:to-cyan-400 transition-colors duration-300 drop-shadow">
              Mobile App Development
            </h2>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
            Future-Ready Mobile Apps for Android & iOS
          </h3>
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 mb-2">
            With mobile-first strategies, we deliver intuitive and
            performance-driven apps tailored for your business. Whether it’s a
            native Android/iOS app or a cross-platform solution, we ensure
            seamless user experience, strong backend, and stunning UI.
          </p>
          <p className="font-semibold text-cyan-400 mb-2 group-hover:text-pink-400 transition-colors duration-300">
            Capabilities:
          </p>
          <ul className="mb-2 space-y-1">
            {[
              "Native Apps (Java/Kotlin, Swift)",
              "Cross-Platform Apps (Flutter, React Native)",
              "Admin Dashboard & API Integration",
              "Real-time Features (Chat, Notifications, GPS)",
              "Ongoing Monitoring & Updates",
            ].map((li, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-200 group-hover:text-pink-300 transition-colors duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-pink-400 transition-colors duration-300"></span>
                <span className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                  {li}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-gray-400 group-hover:text-white transition-colors duration-300 italic">
            Our apps have helped startups scale and enterprises digitize with
            confidence.
          </p>
        </div>

        {/* Gaming App Development Card */}
        <div className="group bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 border border-cyan-700/30 rounded-3xl shadow-2xl px-12 py-6 w-full min-h-[260px] max-w-[480px] mx-auto transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 backdrop-blur-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="rounded-xl bg-gradient-to-br from-cyan-500/30 to-pink-500/30 p-4 shadow-lg">
              <FaGamepad className="text-purple-400 text-4xl group-hover:text-cyan-400 transition-colors duration-300" />
            </div>
            <h2 className="text-2xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:from-pink-400 group-hover:to-cyan-400 transition-colors duration-300 drop-shadow">
              Gaming App Development
            </h2>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
            Gamify Experiences, Engage Millions
          </h3>
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 mb-2">
            We specialize in building immersive gaming applications that capture
            users and maximize retention. Whether it's a casual game, an
            arcade-style app, or a multiplayer experience, our gaming developers
            bring creativity and technical mastery together.
          </p>
          <p className="font-semibold text-cyan-400 mb-2 group-hover:text-pink-400 transition-colors duration-300">
            What We Do:
          </p>
          <ul className="mb-2 space-y-1">
            {[
              "2D & 3D Game Design",
              "Multiplayer Real-Time Gaming",
              "Gamification Modules for Apps",
              "Unity, Unreal Engine, and Phaser.js Expertise",
              "Game Testing & Optimization",
            ].map((li, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-200 group-hover:text-pink-300 transition-colors duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-pink-400 transition-colors duration-300"></span>
                <span className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                  {li}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-gray-400 group-hover:text-white transition-colors duration-300 italic">
            Already trusted by clients in education, entertainment, and brand
            engagement, our gaming apps stand out with rich graphics and
            performance.
          </p>
        </div>

        {/* AI & ML Solutions Card */}
        <div className="group bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 border border-cyan-700/30 rounded-3xl shadow-2xl px-12 py-6 w-full min-h-[260px] max-w-[480px] mx-auto transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 backdrop-blur-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="rounded-xl bg-gradient-to-br from-cyan-500/30 to-pink-500/30 p-4 shadow-lg">
              <FaRobot className="text-cyan-400 text-4xl group-hover:text-pink-400 transition-colors duration-300" />
            </div>
            <h2 className="text-2xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:from-pink-400 group-hover:to-cyan-400 transition-colors duration-300 drop-shadow">
              AI & ML Solutions
            </h2>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
            Intelligent Automation for Modern Businesses
          </h3>
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 mb-2">
            Leverage the power of artificial intelligence and machine learning
            to automate, predict, and optimize your business processes. We build
            custom AI models and integrate them seamlessly into your workflow.
          </p>
          <p className="font-semibold text-cyan-400 mb-2 group-hover:text-pink-400 transition-colors duration-300">
            Expertise:
          </p>
          <ul className="mb-2 space-y-1">
            {aiMlDropdowns.map((item, i) => (
              <li key={i} className="flex flex-col">
                <button
                  type="button"
                  className={`flex items-center gap-2 text-gray-200 group-hover:text-pink-300 transition-colors duration-300 focus:outline-none ${
                    openDropdown === i
                      ? "font-bold text-cyan-300"
                      : "font-normal"
                  }`}
                  onClick={() => handleDropdown(i)}
                  aria-expanded={openDropdown === i}
                  aria-controls={`dropdown-content-${i}`}
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-pink-400 transition-colors duration-300"></span>
                  <span className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                    {item.label}
                  </span>
                  <svg
                    className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                      openDropdown === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === i && (
                  <div
                    id={`dropdown-content-${i}`}
                    className="mt-2 ml-6 p-3 rounded-lg bg-[#232046]/80 text-sm text-cyan-200 shadow-inner border border-cyan-700/20 animate-fade-in"
                  >
                    {item.content}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <p className="text-gray-400 group-hover:text-white transition-colors duration-300 italic">
            Transform your data into actionable insights and smarter decisions.
          </p>
        </div>

        {/* Cloud & DevOps Card */}
        <div className="group bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 border border-cyan-700/30 rounded-3xl shadow-2xl px-12 py-6 w-full min-h-[260px] max-w-[480px] mx-auto transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 backdrop-blur-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="rounded-xl bg-gradient-to-br from-cyan-500/30 to-pink-500/30 p-4 shadow-lg">
              <FaCloud className="text-pink-400 text-4xl group-hover:text-cyan-400 transition-colors duration-300" />
            </div>
            <h2 className="text-2xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:from-pink-400 group-hover:to-cyan-400 transition-colors duration-300 drop-shadow">
              Cloud & DevOps
            </h2>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
            Scale with Confidence & Reliability
          </h3>
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 mb-2">
            Modernize your infrastructure with our cloud and DevOps services. We
            help you deploy, manage, and scale applications securely and
            efficiently on AWS, Azure, or Google Cloud.
          </p>
          <p className="font-semibold text-cyan-400 mb-2 group-hover:text-pink-400 transition-colors duration-300">
            Services:
          </p>
          <ul className="mb-2 space-y-1">
            {[
              "Cloud Migration & Management",
              "CI/CD Pipeline Setup",
              "Infrastructure as Code",
              "Monitoring & Security",
              "Cost Optimization",
            ].map((li, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-200 group-hover:text-pink-300 transition-colors duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-pink-400 transition-colors duration-300"></span>
                <span className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                  {li}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-gray-400 group-hover:text-white transition-colors duration-300 italic">
            Achieve agility, reliability, and cost savings with our cloud
            expertise.
          </p>
        </div>

        {/* Digital Marketing Card */}
        <div className="group bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 border border-cyan-700/30 rounded-3xl shadow-2xl px-12 py-6 w-full min-h-[260px] max-w-[480px] mx-auto transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 backdrop-blur-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="rounded-xl bg-gradient-to-br from-cyan-500/30 to-pink-500/30 p-4 shadow-lg">
              <FaChartLine className="text-cyan-400 text-4xl group-hover:text-pink-400 transition-colors duration-300" />
            </div>
            <h2 className="text-2xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:from-pink-400 group-hover:to-cyan-400 transition-colors duration-300 drop-shadow">
              Digital Marketing
            </h2>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
            Grow Your Brand & Reach New Heights
          </h3>
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 mb-2">
            Our digital marketing team crafts data-driven strategies to boost
            your online presence, generate leads, and increase conversions. From
            SEO to paid ads, we cover it all.
          </p>
          <p className="font-semibold text-cyan-400 mb-2 group-hover:text-pink-400 transition-colors duration-300">
            Key Services:
          </p>
          <ul className="mb-2 space-y-1">
            {[
              "SEO & Content Marketing",
              "Social Media Management",
              "PPC & Paid Campaigns",
              "Email Marketing",
              "Analytics & Reporting",
            ].map((li, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-200 group-hover:text-pink-300 transition-colors duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-pink-400 transition-colors duration-300"></span>
                <span className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                  {li}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-gray-400 group-hover:text-white transition-colors duration-300 italic">
            Let us help you reach your audience and grow your business online.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="text-white body-font mt-24">
        <div className="container px-5 py-16 mx-auto rounded-3xl bg-gradient-to-br from-[#232046]/80 via-[#18122b]/80 to-[#2d234a]/80 shadow-xl backdrop-blur-md">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text mb-4">
              Why Choose Us?
            </h2>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-slate-300">
              We blend innovation, technology, and creativity to deliver
              solutions that help your business grow and stand out in the
              digital world.
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