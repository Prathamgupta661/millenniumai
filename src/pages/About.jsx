import { Link } from "react-router-dom";
import img1 from "../assets/about.webp";
import { FaUsers, FaRocket, FaBrain } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

const AboutBanner = ({ title, buttonText, buttonLink, image, icon: Icon }) => (
  <div className="flex flex-col-reverse sm:flex-row gap-10 items-center bg-gradient-to-br from-[#18122b]/95 via-[#232046]/90 to-[#2d234a]/95 rounded-2xl shadow-2xl p-8 border border-cyan-700/30 hover:shadow-cyan-500/20 transition-shadow duration-500">
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mb-4">
        <Icon className="text-5xl text-cyan-400 mb-2 drop-shadow-lg animate-pulse" />
        <h2 className="text-center w-full text-3xl sm:text-4xl leading-tight font-bold font-dm mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
          {title}
        </h2>
      </div>
      <Link to={buttonLink}>
        <button className="cursor-pointer px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 font-dm rounded-lg text-white text-lg font-semibold shadow hover:scale-105 transition">
          {buttonText}
        </button>
      </Link>
    </div>
    <div className="w-full flex items-center justify-center">
      <img
        src={image}
        alt="About MillenniumAi"
        className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-md border border-cyan-900/30"
        loading="lazy"
      />
    </div>
  </div>
);

const AboutCard = ({ icon: Icon, title, children, color }) => (
  <div
    className={`group flex flex-col items-center bg-gradient-to-br from-cyan-50 via-white to-pink-50 rounded-xl shadow-lg p-6 border border-cyan-100/40 hover:shadow-xl hover:scale-105 transition-all duration-300`}
  >
    <div
      className={`mb-4 text-4xl ${color} group-hover:scale-110 transition-transform`}
    >
      <Icon />
    </div>
    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text text-center">
      {title}
    </h3>
    <div className="text-gray-600 text-center text-lg">{children}</div>
  </div>
);

const About = () => {
  return (
    <section className="mx-auto mt-36 max-w-7xl px-4">
      {/* Hero/About Banner */}
      <AboutBanner
        title="Where Artificial Intelligence Meets Full-Stack Innovation"
        buttonText="Contact Us"
        buttonLink="/contact"
        image={img1}
        icon={FaLightbulb}
      />

      {/* About Content */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <AboutCard
          icon={FaUsers}
          title="Trusted by 25+ Companies"
          color="text-cyan-500"
        >
          We are a trusted partner to over{" "}
          <span className="font-semibold text-cyan-600">25+</span> growing and
          established companies across the globe.
        </AboutCard>
        <AboutCard
          icon={FaRocket}
          title="Fastest-Growing Digital Partner"
          color="text-pink-500"
        >
          One of the fastest-growing digital transformation companies in India,
          blending speed with quality.
        </AboutCard>
        <AboutCard
          icon={FaBrain}
          title="AI + Human Creativity"
          color="text-purple-500"
        >
          A seamless blend of AI intelligence and human creativity drives our
          innovation and results.
        </AboutCard>
      </div>

      {/* About Content */}
      <div className="mt-12 bg-gradient-to-br from-[#18122b]/95 via-[#232046]/90 to-[#2d234a]/95 rounded-2xl shadow p-8">
        <h1 className="mb-6 text-center font-dm text-2xl font-bold text-cyan-600">
          About Us
        </h1>
        <p className="text-lg text-white w-full max-w-5xl mx-auto mb-5">
          MillenniumAi started with a singular vision — to power AI systems with
          high-quality, human-labeled data. Today, we’ve evolved into a
          multi-disciplinary technology powerhouse delivering end-to-end
          solutions that span AI Data Annotation, Web Development, Mobile &
          Gaming App Development, SEO, and Full Stack Software Engineering.
        </p>
        <p className="text-lg text-white w-full max-w-5xl mx-auto mb-5">
          With a diverse team of engineers, annotators, developers, designers,
          and strategists, we’ve successfully served clients in eCommerce,
          EdTech, Fitness, Healthcare, Logistics, and more.
        </p>
        <div className="w-full max-w-5xl mx-auto">
          <p className="text-lg text-white mb-2">We take pride in being:</p>
          <ul className="text-lg text-white list-disc pl-8 mb-5">
            <li className="hover:text-cyan-400">
              A trusted partner to over{" "}
              <span className="font-semibold text-cyan-600">25+</span> growing
              and established companies
            </li>
            <li className="hover:text-pink-400">
              One of the fastest-growing digital transformation companies in
              India
            </li>
            <li className="hover:text-cyan-200">A seamless blend of AI intelligence and human creativity</li>
          </ul>
        </div>
        <p className="text-lg text-white w-full max-w-5xl mx-auto">
          At MillenniumAi, innovation isn’t just a buzzword — it’s the
          foundation of how we deliver excellence and build long-term
          partnerships.
        </p>
      </div>
    </section>
  );
};

export default About;
