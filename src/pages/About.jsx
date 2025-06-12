import { Link } from "react-router-dom";
import img1 from "../assets/about.webp";
import { FaUsers, FaRocket, FaBrain } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

const AboutBanner = ({ title, buttonText, buttonLink, image, icon: Icon }) => (
  <div className="flex flex-col-reverse sm:flex-row gap-10 items-center shadow-2xl group relative bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 backdrop-blur-md border border-[#2d234a]/40 rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
    <div className="w-full flex flex-col items-center justify-center z-10">
      <div className="flex flex-col items-center mb-4">
        <Icon className="text-5xl text-cyan-400 mb-2 drop-shadow-lg animate-pulse" />
        <h2 className="text-center w-full text-3xl sm:text-4xl leading-tight font-bold font-playfair mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
          {title}
        </h2>
      </div>
      <Link to={buttonLink} className="z-20">
        <button className="cursor-pointer px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 font-playfair rounded-lg text-white text-lg font-semibold shadow hover:scale-105 transition relative z-20">
          {buttonText}
        </button>
      </Link>
    </div>
    <div className="w-full flex items-center justify-center z-10">
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
    className={`group flex flex-col items-center   shadow-lg   hover:scale-105  group relative bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 backdrop-blur-md border border-[#2d234a]/40 rounded-xl p-6 hover:shadow-2xl transition-all duration-300`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

    <div
      className={`mb-4 text-4xl ${color} group-hover:scale-110 transition-transform`}
    >
      <Icon />
    </div>
    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text text-center">
      {title}
    </h3>
    <div className="text-white text-center text-lg">{children}</div>
  </div>
);

const About = () => {
  return (
    <section className="mx-auto mt-36 max-w-8xl px-4 font-playfair">
      {/* Hero/About Banner */}
      <AboutBanner
        title="Where Artificial Intelligence Meets Full-Stack Innovation"
        buttonText="Contact Us"
        buttonLink="/contact"
        image={img1}
        icon={FaLightbulb}
      />

      {/* About Content */}
      <div className="mt-12 shadow group relative bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 backdrop-blur-md border border-[#2d234a]/40 rounded-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        <div className="relative z-10 flex flex-col gap-10">
          {/* Shaping the Future */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-center bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text mb-4">
              Shaping the Future with Intelligence, Innovation, and Integrity
            </h2>
            <p className="text-lg text-white text-center max-w-3xl mx-auto mb-4">
              At <span className="font-bold text-cyan-400">MILLENNIUMAI</span>,
              we are more than just a technology service provider — we are a
              strategic partner in your digital evolution. Founded in 2025 and
              headquartered in Ghaziabad, India, MILLENNIUMAI was established
              with a clear vision: to deliver world-class technology and
              data-driven services that are both cost-effective and
              quality-assured.
            </p>
            <p className="text-lg text-white text-center max-w-3xl mx-auto">
              In an era defined by artificial intelligence, automation, and
              rapid digital transformation, our goal is simple — to help
              businesses harness the power of data and software innovation to
              achieve operational excellence, scale faster, and grow smarter.
            </p>
          </div>

          {/* Who We Are */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text mb-2 text-center">
              Who We Are
            </h3>
            <p className="text-slate-200 text-center mb-2">
              We are a dynamic team of 50–80 professionals — a unique blend of
              developers, data scientists, project managers, and domain experts.
              Each team member is committed to excellence, working
              collaboratively to deliver custom solutions for businesses ranging
              from early-stage startups to large enterprises.
            </p>
            <p className="text-slate-200 text-center mb-2">
              From data annotation for AI/ML models to enterprise-grade web and
              app development, we offer end-to-end digital solutions designed to
              fit seamlessly into our clients’ workflows and goals.
            </p>
            <div className="max-w-3xl mx-auto">
              <h4 className="font-semibold mb-2 text-cyan-400 text-center">
                Our deep domain expertise covers:
              </h4>
              <ul className="list-disc list-inside text-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-1 mb-2">
                <li>Natural Language Processing (NLP)</li>
                <li>Computer Vision</li>
                <li>Medical Data Annotation</li>
                <li>E-commerce Product Tagging</li>
                <li>Geospatial and 3D Annotation</li>
                <li>Mobile & Web App Development</li>
                <li>Game and Software Development</li>
                <li>Custom APIs & SaaS Products</li>
              </ul>
            </div>
            <p className="text-slate-300 mt-2 italic text-center">
              Every project we undertake is approached with precision, agility,
              and a relentless commitment to delivering on time — without
              compromising on quality.
            </p>
          </div>

          {/* What Sets Us Apart */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text mb-2 text-center">
              What Sets Us Apart
            </h3>
            <ul className="space-y-3 text-slate-200 max-w-2xl mx-auto">
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>
                  <span className="font-semibold">
                    Unmatched Quality Control:
                  </span>{" "}
                  With rigorous multi-level quality checks and experienced QA
                  teams, we guarantee 99–100% data accuracy and bug-free
                  software deployments.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>
                  <span className="font-semibold">
                    Cost-Effective Delivery:
                  </span>{" "}
                  We proudly offer some of the lowest project costs globally
                  without sacrificing quality or timelines — making us the ideal
                  partner for scale-ups and enterprise needs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>
                  <span className="font-semibold">Fast Turnaround Time:</span>{" "}
                  Whether it’s a large-volume data labeling project or a
                  full-fledged mobile application, we deliver fast — with the
                  capability to scale our team within 24–48 hours.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>
                  <span className="font-semibold">Complete Customization:</span>{" "}
                  No two businesses are the same. We tailor our services to
                  align perfectly with your vision, industry standards, and
                  future goals.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>
                  <span className="font-semibold">
                    Client-Centric Approach:
                  </span>{" "}
                  We believe in building long-term relationships. Our support
                  doesn’t end with delivery — we provide ongoing guidance,
                  technical support, and process optimization.
                </span>
              </li>
            </ul>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-cyan-400 mb-2">
                Our Mission
              </h4>
              <p className="text-white">
                To empower businesses with intelligent solutions that fuel
                growth, enhance decision-making, and make technology accessible
                and affordable for all.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-pink-400 mb-2">
                Our Vision
              </h4>
              <p className="text-white">
                To become a global leader in AI data services and digital
                product development, known for our commitment to quality, client
                success, and innovation at scale.
              </p>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text mb-4 text-center">
              Industries We Serve
            </h3>
            <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-slate-200 font-medium text-lg justify-items-center mb-4">
              <li>Healthcare & Life Sciences</li>
              <li>Retail & E-Commerce</li>
              <li>Finance & Banking</li>
              <li>Logistics & Transportation</li>
              <li>Automotive AI</li>
              <li>Media & Entertainment</li>
              <li>EdTech & eLearning</li>
              <li>Agriculture & Satellite Imaging</li>
            </ul>
            <p className="text-slate-400 text-center italic">
              Our versatile experience allows us to adapt quickly to new
              industries and deliver relevant, impactful solutions.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text mb-2">
              Let’s Build the Future Together
            </h3>
            <p className="text-white max-w-2xl mx-auto mb-2 text-lg">
              At <span className="font-bold text-cyan-400">MILLENNIUMAI</span>,
              we don’t just deliver projects — we create value, build
              partnerships, and drive transformation. Whether you’re building an
              AI product that requires precise annotated datasets or need a
              robust digital solution to elevate your business — we are here to
              support you every step of the way.
            </p>
            <p className="text-white max-w-2xl mx-auto text-lg">
              <span className="font-semibold">
                Partner with us to unlock your next stage of growth.
              </span>
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default About;
