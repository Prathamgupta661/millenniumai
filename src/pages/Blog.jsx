import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaSearch, 
  FaCalendarAlt, 
  FaUser, 
  FaTag, 
  FaArrowRight, 
  FaRocket,
  FaLightbulb,
  FaBrain,
  FaCode,
  FaChartLine,
  FaGlobe,
  FaMobileAlt,
  FaEnvelope,
  FaBookmark,
  FaShare,
  FaEye
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");

  // Blog categories
  const categories = [
    { name: "All", icon: FaRocket, count: 12 },
    { name: "AI & ML", icon: FaBrain, count: 4 },
    { name: "Web Development", icon: FaGlobe, count: 3 },
    { name: "Mobile Apps", icon: FaMobileAlt, count: 2 },
    { name: "Technology", icon: FaCode, count: 2 },
    { name: "Innovation", icon: FaLightbulb, count: 1 }
  ];

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "How MillenniumAI is Redefining AI & Web Development with World-Class Quality at Global-Best Pricing",
      excerpt: "Discover how MillenniumAI is revolutionizing the global development landscape by offering world-class AI and web development services at competitive pricing that startups and enterprises can't ignore.",
      author: "Pratham Gupta",
      date: "Dec 15, 2024",
      category: "AI & ML",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      tags: ["AI Development", "Web Development", "Global Services", "Cost-Effective"],
      views: 1247,
      featured: true
    },
    {
      id: 2,
      title: "The Global Demand for Smart Development: Why AI and Custom Software Are Essential",
      excerpt: "Global startups and enterprises are increasingly seeking fast, reliable, and cost-effective development solutions. Learn why AI, custom software, and full-stack web development are in unprecedented demand.",
      author: "MillenniumAi Team",
      date: "Dec 12, 2024",
      category: "Technology",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      tags: ["Global Demand", "Startups", "Enterprise", "Custom Software"],
      views: 892
    },
    {
      id: 3,
      title: "MillenniumAI's Development Philosophy: Quality-First Approach in Action",
      excerpt: "Explore our quality-first development philosophy that combines agile methodologies, scalable coding standards, and rapid development cycles without compromising on precision and security.",
      author: "Tech Experts",
      date: "Dec 10, 2024",
      category: "Innovation",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      tags: ["Development Philosophy", "Agile Methodologies", "Quality", "Scalable"],
      views: 756
    },
    {
      id: 4,
      title: "Core Development Services: From AI/ML to Full-Stack Web Solutions",
      excerpt: "Comprehensive overview of MillenniumAI's core services including AI/ML development, MERN stack web development, mobile apps, backend engineering, and UI/UX design.",
      author: "AI Research Team",
      date: "Dec 8, 2024",
      category: "Web Development",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
      tags: ["AI/ML", "MERN Stack", "Mobile Apps", "Backend", "UI/UX"],
      views: 1103
    },
    {
      id: 5,
      title: "Case Study: Secure MERN-Based Election Dashboard for EU Client",
      excerpt: "How MillenniumAI delivered a secure election dashboard in just 3 weeks with 99.9% uptime, ISO-compliant security, and 40% cost savings compared to European vendors.",
      author: "Project Team",
      date: "Dec 5, 2024",
      category: "Web Development",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=400&fit=crop",
      tags: ["Case Study", "MERN Stack", "Security & Compliance", "Cost Savings"],
      views: 634
    },
    {
      id: 6,
      title: "Why Global Clients Choose MillenniumAI: Affordability, Speed, and Transparency",
      excerpt: "Discover the key factors that make MillenniumAI the preferred choice for global clients: up to 60% lower costs, 30-40% faster delivery, and transparent development processes.",
      author: "Client Success Team",
      date: "Dec 3, 2024",
      category: "AI & ML",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tags: ["Global Clients", "Affordability", "Speed & Transparency", "Transparency & Quality"],
      views: 945
    }
  ];

  // Filter blog posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <div className="min-h-screen mt-5 bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_25%,transparent_25%,transparent_75%,#ffffff05_75%,#ffffff05)] bg-[length:30px_30px] sm:bg-[length:45px_45px] lg:bg-[length:60px_60px] bg-[position:0_0,15px_15px] sm:bg-[position:0_0,22.5px_22.5px] lg:bg-[position:0_0,30px_30px]"></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-500/10 rounded-full filter blur-[80px] sm:blur-[100px] lg:blur-[120px] animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-purple-500/10 rounded-full filter blur-[80px] sm:blur-[100px] lg:blur-[120px] animate-float-delayed"></div>

        <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              {/* Icon Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 sm:mb-8 border border-white/10">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  <FaRocket className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                </div>
                <span className="text-white/80 text-xs sm:text-sm font-medium">Our Blog</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Insights &{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Innovation
                  </span>
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                Stay updated with the latest trends in technology, AI, and digital innovation. Expert insights from our team of professionals.
              </p>

              {/* Search Bar */}
              <div className="max-w-sm sm:max-w-md mx-auto mb-8 sm:mb-12 px-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden">
                    <div className="flex items-center px-4 sm:px-6 py-3 sm:py-4">
                      <FaSearch className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-3 sm:mr-4" />
                      <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm sm:text-base"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-sm sm:max-w-md mx-auto px-4">
                {[
                  { number: "12+", label: "Articles" },
                  { number: "5K+", label: "Readers" },
                  { number: "24/7", label: "Updates" }
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                          {stat.number}
                        </div>
                        <div className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`group relative px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <category.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      selectedCategory === category.name ? "text-blue-400" : "text-gray-400"
                    }`} />
                    <span className={`font-medium text-xs sm:text-sm lg:text-base ${
                      selectedCategory === category.name ? "text-white" : "text-gray-300"
                    }`}>
                      {category.name}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400">({category.count})</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Section Separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] lg:bg-[size:4rem_4rem]"></div>
        
        <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white leading-tight">
                Latest{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Articles
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                Discover insights, tutorials, and industry trends from our expert team
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
              {filteredPosts.map((post, index) => (
                <article key={post.id} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
                    {/* Featured Badge */}
                    {post.featured && (
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                        <div className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full">
                          Featured
                        </div>
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <FaTag className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                        <span className="text-xs sm:text-sm text-blue-400 font-medium">{post.category}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-300 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <div className="flex items-center gap-1">
                            <FaUser className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span className="truncate">{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaCalendarAlt className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaEye className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span>{post.views}</span>
                        </div>
                      </div>

                      {/* Read Time */}
                      <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                        {post.readTime}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <Link to={`/blog/${post.id}`}>
                          <button className="flex items-center gap-1.5 sm:gap-2 cursor-pointer text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
                            <span className="font-medium">Read More</span>
                            <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        </Link>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <button className="p-1.5 sm:p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300">
                            <FaBookmark className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button className="p-1.5 sm:p-2 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                            <FaShare className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {filteredPosts.length > 0 && (
              <div className="text-center">
                <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">Load More Articles</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            )}

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12 sm:py-16">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FaSearch className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gray-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">No articles found</h3>
                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base px-4">Try adjusting your search terms or category filter</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Section Separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10 text-center">
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                  <FaEnvelope className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                </div>

                {/* Content */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Stay Updated with Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Newsletter
                  </span>
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Get the latest insights, tutorials, and industry trends delivered directly to your inbox.
                </p>

                {/* Newsletter Form */}
                <form onSubmit={handleNewsletterSubmit} className="max-w-sm sm:max-w-md mx-auto px-4">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg sm:rounded-xl blur-lg"></div>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="relative w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 text-white placeholder-gray-400 outline-none focus:border-blue-500/50 transition-all duration-300 text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg sm:rounded-xl font-semibold hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>

                <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4 px-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
