import { Link } from "react-router-dom";
import img1 from "../assets/about.webp";
import expert from "../assets/expert.avif";
import { FaUsers, FaRocket, FaBrain, FaLightbulb, FaCheckCircle, FaBolt, FaCogs, FaHandshake, FaUserShield } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const AboutBanner = ({ title, buttonText, buttonLink, image, icon: Icon }) => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-32">
    {/* Modern Background Pattern */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_25%,transparent_25%,transparent_75%,#ffffff05_75%,#ffffff05)] bg-[length:60px_60px] bg-[position:0_0,30px_30px]"></div>
    </div>

    {/* Animated Gradient Orbs */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[120px] animate-float"></div>
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-[120px] animate-float-delayed"></div>

    <div className="max-w-[1920px] w-full mx-auto px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>

            <div className="relative">
              {/* Icon Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  <Icon className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-white/80 text-sm font-medium">About MillenniumAi</span>
              </div>

              {/* Main Title */}
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Where{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Innovation
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></span>
                </span>{" "}
                Meets Excellence
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 mb-12 max-w-xl leading-relaxed">
                Empowering businesses with cutting-edge AI solutions and full-stack development expertise.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                  { number: "25+", label: "Projects" },
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

              {/* CTA Button */}
              <Link to={buttonLink}>
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">{buttonText}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
              
              {/* Image Container */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/10">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
                  <img
                  loading="lazy"
                    src={image}
                    alt="About MillenniumAi"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Info Cards */}
                <div className="absolute -bottom-6 -left-6 w-48 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                      <FaUsers className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">50+ Experts</div>
                      <div className="text-gray-400 text-sm">Dedicated Team</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 w-48 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                      <FaRocket className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">25+ Projects</div>
                      <div className="text-gray-400 text-sm">Successfully Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AboutCard = ({ icon: Icon, title, children, color }) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
      <div className="flex items-start gap-6">
        <div className={`w-16 h-16 bg-gradient-to-br from-${color}-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
          <Icon className={`w-8 h-8 text-${color}-400`} />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-300">{children}</p>
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero/About Banner */}
      <AboutBanner
        title="Where Artificial Intelligence Meets Full-Stack Innovation"
        buttonText="Contact Us"
        buttonLink="/contact"
        image={img1}
        icon={FaLightbulb}
      />

      {/* About Content */}
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
                <span className="text-white/80 text-sm font-medium">Our Story</span>
              </div>
              <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
                Shaping the Future with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Intelligence & Innovation
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                At <span className="font-bold text-cyan-400">MillenniumAi</span>, we are more than just a technology service provider — we are a strategic partner in your digital evolution.
              </p>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Features */}
              <div className="space-y-8">
                <AboutCard
                  icon={FaUsers}
                  title="Who We Are"
                  color="blue"
                >
                  We are a dynamic team of 50–80 professionals — a unique blend of developers, data scientists, project managers, and domain experts. Each team member is committed to excellence, working collaboratively to deliver custom solutions.
                </AboutCard>

                <AboutCard
                  icon={FaRocket}
                  title="Our Mission"
                  color="purple"
                >
                  To empower businesses with intelligent solutions that fuel growth, enhance decision-making, and make technology accessible and affordable for all.
                </AboutCard>

                <AboutCard
                  icon={FaBrain}
                  title="Our Vision"
                  color="pink"
                >
                  To become a global leader in AI data services and digital product development, known for our commitment to quality, client success, and innovation at scale.
                </AboutCard>
              </div>

              {/* Right Column - Stats & Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">25+</div>
                      <div className="text-gray-400">Projects Completed</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">99%</div>
                      <div className="text-gray-400">Client Satisfaction</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">24/7</div>
                      <div className="text-gray-400">Support Available</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">25+</div>
                      <div className="text-gray-400">Team Members</div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <img src={expert} alt="Our Team" loading="lazy" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-2">Our Expert Team</div>
                        <div className="text-gray-200">Dedicated to Excellence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
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
                <span className="text-white/80 text-sm font-medium">Our Advantages</span>
              </div>
              <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
                What Sets Us{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Apart
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We combine cutting-edge technology with exceptional service to deliver outstanding results.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FaCheckCircle,
                  title: "Unmatched Quality Control",
                  description: "With rigorous multi-level quality checks and experienced QA teams, we guarantee 99–100% data accuracy.",
                  color: "blue"
                },
                {
                  icon: FaBolt,
                  title: "Fast Turnaround Time",
                  description: "Whether it's a large-volume data labeling project or a full-fledged mobile application, we deliver fast.",
                  color: "purple"
                },
                {
                  icon: FaCogs,
                  title: "Complete Customization",
                  description: "No two businesses are the same. We tailor our services to align perfectly with your vision.",
                  color: "pink"
                },
                {
                  icon: FaHandshake,
                  title: "Client-Centric Approach",
                  description: "We believe in building long-term relationships. Our support doesn't end with delivery.",
                  color: "blue"
                },
                {
                  icon: FaUserShield,
                  title: "Security First",
                  description: "Your data security is our top priority. We implement industry-leading security measures.",
                  color: "purple"
                },
                {
                  icon: HiSparkles,
                  title: "Innovation Driven",
                  description: "We stay ahead of the curve by continuously innovating and adopting new technologies.",
                  color: "pink"
                }
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300`}>
                      <feature.icon className={`w-8 h-8 text-${feature.color}-400`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 overflow-hidden">
        {/* Section Separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="max-w-[1920px] w-full mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
                Let's Build the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Future
                </span>{" "}
                Together
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                At <span className="font-bold text-cyan-400">MillenniumAi</span>, we don't just deliver projects — we create value, build partnerships, and drive transformation.
              </p>
              <Link to="/contact">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
