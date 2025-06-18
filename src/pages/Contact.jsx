import React, { useState } from 'react';
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contactno: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

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
            contactno: "",
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

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/30 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[100px] animate-pulse delay-1000"></div>

        <div className="max-w-[1920px] w-full mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-8 border border-white/10">
                <span className="text-white/80 text-sm font-medium">Get In Touch</span>
              </div>
              <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
                Let's Build Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Amazing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your ideas into reality? Reach out to us and let's create something extraordinary together.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 mb-10 items-start">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <h3 className="text-3xl font-bold mb-8 text-white">Contact Information</h3>
                    <div className="space-y-8">
                      <a href="tel:+919319410265" className="flex items-center gap-6 text-gray-300 hover:text-blue-400 transition-all duration-300 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <HiPhone className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Phone</p>
                          <p className="text-xl font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">+91 931 941 0265</p>
                          <p className="text-xl font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">+91 705 317 1752</p>
                        </div>
                      </a>

                      <a href="mailto:info@millenniumai.in" className="flex items-center gap-6 text-gray-300 hover:text-purple-400 transition-all duration-300 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <HiMail className="w-8 h-8 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Email</p>
                          <p className="text-xl font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">info@millenniumai.in</p>
                        </div>
                      </a>

                      <div className="flex items-center gap-6 text-gray-300 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <HiLocationMarker className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">Address</p>
                          <p className="text-xl font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 transition-all duration-300">UGF-02 Krishna Enclave Govindpuram,</p>
                          <p className="text-xl font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 transition-all duration-300">Ghaziabad, UP 201002</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold mb-6 text-white">Connect With Us</h3>
                    <div className="flex gap-4">
                      <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <FaWhatsapp className="w-6 h-6 text-blue-400" />
                      </a>
                      <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - New Design */}
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full filter blur-3xl"></div>
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 overflow-hidden">
                  {/* Form Header */}
                  <div className="flex mb-5">
                    <div className="w-15 h-15 mx-8 mb-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                      <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className='flex flex-col'>

                    <h3 className="text-3xl font-bold text-white mb-2">Send us a Message</h3>
                    <p className="text-gray-400">We'll get back to you within 24 hours</p>
                    </div>
                  </div>

                  {/* Form Content */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                        <div className="relative">
                          <input
                            type="text"
                            name="first_name"
                            value={form.first_name}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg text-white placeholder-gray-400 transition-all duration-300"
                            placeholder="John"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                        <div className="relative">
                          <input
                            type="text"
                            name="last_name"
                            value={form.last_name}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg text-white placeholder-gray-400 transition-all duration-300"
                            placeholder="Doe"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg text-white placeholder-gray-400 transition-all duration-300"
                          placeholder="john@example.com"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="contactno"
                          value={form.contactno}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg text-white placeholder-gray-400 transition-all duration-300"
                          placeholder="+91 123 456 7890"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows="3"
                          className="w-full px-6 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-lg text-white placeholder-gray-400 transition-all duration-300"
                          placeholder="Tell us about your project..."
                        ></textarea>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-5 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {loading ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
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

export default Contact;