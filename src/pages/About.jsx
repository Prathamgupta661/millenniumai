import { Link } from "react-router-dom";
import img1 from "../assets/about.webp";

const About = () => {
  return (
    <section className="mx-auto mt-36 max-w-6xl px-4">
      {/* Hero/About Banner */}
      <div className="flex flex-col-reverse sm:flex-row gap-10 items-center bg-gradient-to-r from-cyan-50 to-pink-50 rounded-2xl shadow-lg p-8">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-center w-full text-3xl sm:text-4xl leading-tight font-bold font-dm mb-6 bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text">
            Where Artificial Intelligence Meets Full-Stack Innovation
          </h2>
          <Link to="/contact">
            <button className="cursor-pointer px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 font-dm rounded-lg text-white text-lg font-semibold shadow hover:scale-105 transition">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            src={img1}
            alt="About MillenniumAi"
            className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-md border border-gray-100"
            loading="lazy"
          />
        </div>
      </div>

      {/* About Content */}
      <div className="mt-12 bg-white rounded-2xl shadow p-8">
        <h1 className="mb-6 text-center font-dm text-2xl font-bold text-cyan-600">About Us</h1>
        <p className="text-lg text-gray-600 w-full max-w-3xl mx-auto mb-5">
          MillenniumAi started with a singular vision — to power AI systems with high-quality, human-labeled data. Today, we’ve evolved into a multi-disciplinary technology powerhouse delivering end-to-end solutions that span AI Data Annotation, Web Development, Mobile & Gaming App Development, SEO, and Full Stack Software Engineering.
        </p>
        <p className="text-lg text-gray-600 w-full max-w-3xl mx-auto mb-5">
          With a diverse team of engineers, annotators, developers, designers, and strategists, we’ve successfully served clients in eCommerce, EdTech, Fitness, Healthcare, Logistics, and more.
        </p>
        <div className="w-full max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-2">We take pride in being:</p>
          <ul className="text-lg text-gray-600 list-disc pl-8 mb-5">
            <li>
              A trusted partner to over <span className="font-semibold text-cyan-600">25+</span> growing and established companies
            </li>
            <li>
              One of the fastest-growing digital transformation companies in India
            </li>
            <li>
              A seamless blend of AI intelligence and human creativity
            </li>
          </ul>
        </div>
        <p className="text-lg text-gray-600 w-full max-w-3xl mx-auto">
          At MillenniumAi, innovation isn’t just a buzzword — it’s the foundation of how we deliver excellence and build long-term partnerships.
        </p>
      </div>
    </section>
  );
};

export default About;