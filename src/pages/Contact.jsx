import React from 'react'

const Contact = () => {
  return (
    <section className="my-20 flex items-center justify-center px-2 bg-gradient-to-br from-white via-cyan-50 to-pink-50">
      <div className="shadow-lg rounded-2xl flex flex-col md:flex-row w-full max-w-4xl border border-transparent bg-clip-border bg-gradient-to-r from-cyan-500 to-pink-500">
        {/* Info Section */}
        <div className="flex flex-col items-center bg-white p-8 md:w-1/2 w-full h-full">
          <h1 className="text-3xl font-bold font-dm text-center mb-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text">
            Call to Action
          </h1>
          <h2 className="text-xl font-semibold font-dm text-center mb-2">
            Ready to Transform Your Idea into Reality?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-4">
            At MillenniumAi, we don’t just build — we innovate, strategize, and grow with you. Let's collaborate and create something remarkable together.
          </p>
          <p className="text-lg text-gray-600 text-center mb-6">
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col gap-2 items-center">
            <span className="font-semibold">Email:</span>
            <a
              href="mailto:info@millenniumai.in"
              className="text-cyan-600 hover:underline font-dm break-all"
            >
              info@millenniumai.in
            </a>
            <span className="font-semibold mt-4">Website:</span>
            <a
              href="https://www.millenniumai.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline font-dm break-all"
            >
              www.millenniumai.in
            </a>
          </div>
        </div>
        {/* Form Section */}
        <div className="flex flex-col items-center justify-center md:w-1/2 w-full bg-white border-t md:border-t-0 md:border-l border-gray-100 p-8">
          <h1 className="mb-5 text-2xl font-bold font-dm text-cyan-600 text-center">Talk to Our Experts</h1>
          <form className="flex flex-col items-center justify-center gap-4 w-full max-w-xs">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-lg py-2 hover:opacity-90 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact