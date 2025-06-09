import img1 from '../assets/home_img_1.webp'
import React, { useEffect, useState } from 'react';
import {Link,} from 'react-router-dom'

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <section className="w-full min-h-screen overflow-hidden flex flex-col mt-28 bg-gradient-to-br from-white via-cyan-50 to-pink-50">
      {/* Hero Section */}
      <div
        className={`flex flex-col items-center justify-center mt-24 px-4 transition-all duration-1000 ${
          animate
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-center w-full max-w-4xl mx-auto text-4xl sm:text-7xl font-bold font-dm leading-tight">
          Accelerate Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
            AI
          </span>{" "}
          with Precision Annotation
        </h1>
        <p className="mt-6 text-center text-slate-600 text-lg sm:text-2xl max-w-2xl">
          Image, Video & Geospatial Annotation Services powered by experts and smart tech.
        </p>
        <Link to="/contact" className="mt-8">
          <button className="cursor-pointer px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 font-dm rounded-lg text-white text-lg font-semibold shadow-lg hover:scale-105 transition">
            Get Started
          </button>
        </Link>
      </div>

      {/* About/Services Section */}
      <section className="mt-32 mx-auto w-[95%] max-w-6xl flex flex-col sm:flex-row shadow-lg border border-transparent rounded-2xl bg-clip-border bg-gradient-to-r from-cyan-500 to-pink-500 overflow-hidden">
        <div className="w-full sm:w-1/2 p-8 bg-white flex flex-col justify-center">
          <h2 className="font-dm text-2xl font-bold mb-3 text-cyan-600">
            Empowering Innovation with AI & Full-Stack Development
          </h2>
          <p className="mb-4 text-slate-600 text-base sm:text-lg">
            MillenniumAi is one of the fastest-growing technology partners, trusted by startups and enterprises alike. From intelligent data annotation for AI models to cutting-edge website, mobile, and gaming app development — we offer a complete suite of digital services that transform ideas into reality.
          </p>
          <p className="mb-6 text-slate-600 text-base sm:text-lg">
            Our dual strength in artificial intelligence and software development enables us to deliver smart, scalable, and secure solutions. With a proven track record across industries, we are the preferred partner for organizations looking to accelerate digital transformation with speed and precision.
          </p>
          <Link to="/services" className='w-fit'>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-md font-semibold shadow hover:scale-105 transition">
              Let’s Build the Future Together →
            </button>
          </Link>
        </div>
        <div className="w-full sm:w-1/2 flex items-center justify-center bg-white py-8">
          <img
            src={img1}
            alt="MillenniumAi Home"
            className="w-80 h-80 object-contain rounded-xl shadow-md border border-gray-100"
            loading="lazy"
          />
        </div>
      </section>
    </section>
  );
};

export default Home;