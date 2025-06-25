import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  FaCalendarAlt, 
  FaUser, 
  FaTag, 
  FaArrowLeft, 
  FaEye,
  FaBookmark,
  FaShare,
  FaClock,
  FaRocket
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const BlogPost = () => {
    const { id } = useParams();
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
          featured: true,
          content: `
            <p class="mb-6 text-gray-300 leading-relaxed">
              In today's rapidly evolving digital landscape, the demand for high-quality AI and web development services has never been higher. Startups and enterprises worldwide are seeking solutions that combine cutting-edge technology with cost-effectiveness, and MillenniumAI has emerged as a game-changer in this space.
            </p>
            
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Global Development Challenge</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              Traditional development agencies often struggle to balance quality with affordability. Many companies find themselves choosing between expensive local agencies that offer quality but at premium prices, or offshore solutions that may be affordable but lack the reliability and quality standards required for modern applications.
            </p>
            <p class="mb-6 text-gray-300 leading-relaxed">
              The challenge is not just about cost, but also about finding a partner who understands your business goals and can deliver scalable, secure, and innovative solutions. MillenniumAI bridges this gap by offering a unique blend of expertise, transparency, and value.
            </p>
            
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">MillenniumAI's Revolutionary Approach</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              Our approach combines the best of both worlds: world-class development quality at global-best pricing. We've built a team of expert developers, designers, and AI specialists who work with cutting-edge technologies while maintaining competitive pricing that makes high-quality development accessible to businesses of all sizes.
            </p>
            <p class="mb-6 text-gray-300 leading-relaxed">
              We leverage agile methodologies, continuous integration, and a client-centric mindset to ensure every project is delivered on time and exceeds expectations. Our transparent communication and iterative feedback loops keep clients in control at every stage.
            </p>
            
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Key Differentiators</h2>
            <ul class="list-disc list-inside mb-6 text-gray-300 space-y-2">
              <li>Advanced AI/ML development capabilities</li>
              <li>Full-stack web development with modern frameworks</li>
              <li>Scalable and secure architecture design</li>
              <li>Rapid development cycles without compromising quality</li>
              <li>Transparent pricing and project management</li>
              <li>Dedicated post-launch support and maintenance</li>
              <li>Proven track record with global clients</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Real-World Impact</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              Our clients have experienced significant improvements in their development processes, with many achieving 40-60% cost savings while maintaining or improving quality standards. This has enabled them to allocate more resources to innovation and growth rather than development overhead.
            </p>
            <p class="mb-6 text-gray-300 leading-relaxed">
              MillenniumAI's solutions have powered startups to scale rapidly and helped enterprises modernize legacy systems, automate workflows, and unlock new revenue streams. Our commitment to excellence is reflected in our long-term client relationships and industry recognition.
            </p>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Looking Ahead</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              As technology continues to evolve, MillenniumAI remains at the forefront of innovation. We are constantly exploring new AI techniques, development tools, and best practices to deliver even greater value to our clients. Partner with us to future-proof your business and stay ahead of the curve.
            </p>
          `
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
          views: 892,
          content: `
            <p class="mb-6 text-gray-300 leading-relaxed">
              The digital transformation wave has created an unprecedented demand for intelligent development solutions. Companies across all industries are recognizing that traditional software development approaches are no longer sufficient to meet the challenges of today's competitive landscape.
            </p>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">The AI Revolution in Development</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              Artificial Intelligence has become the cornerstone of modern software development. From automated testing to intelligent user interfaces, AI is transforming how we build and deploy applications. Companies that embrace AI-driven development are gaining significant competitive advantages.
            </p>
            <p class="mb-6 text-gray-300 leading-relaxed">
              Smart development is not just about automation, but about creating adaptive, learning systems that improve over time. MillenniumAI specializes in integrating AI into every layer of the software stack, from backend analytics to customer-facing features.
            </p>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Custom Software: The New Standard</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              Off-the-shelf solutions are increasingly inadequate for businesses with unique requirements. Custom software development has become essential for companies looking to differentiate themselves and optimize their operations for their specific needs.
            </p>
            <ul class="list-disc list-inside mb-6 text-gray-300 space-y-2">
              <li>Tailored solutions for unique business processes</li>
              <li>Integration with existing systems and workflows</li>
              <li>Scalable architecture for future growth</li>
              <li>Enhanced security and compliance</li>
            </ul>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Why Choose MillenniumAI?</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              Our team brings together expertise in AI, cloud, and full-stack development to deliver solutions that are robust, scalable, and future-ready. We partner with clients to understand their vision and turn it into reality with smart, efficient code.
            </p>
          `
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
          views: 756,
          content: `
            <p class="mb-6 text-gray-300 leading-relaxed">
              At MillenniumAI, we believe that quality is not just a goal but a fundamental principle that guides every aspect of our development process. Our quality-first philosophy ensures that every line of code, every design decision, and every project milestone meets the highest standards of excellence.
            </p>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Quality-First Methodology</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              Our development process is built around the principle that quality should never be compromised for speed or cost. We achieve this through a combination of rigorous testing protocols, code review processes, and continuous integration practices that ensure every deliverable meets our exacting standards.
            </p>
            <ul class="list-disc list-inside mb-6 text-gray-300 space-y-2">
              <li>Comprehensive code reviews and automated testing</li>
              <li>Continuous integration and deployment pipelines</li>
              <li>Client feedback loops at every stage</li>
              <li>Focus on maintainability and scalability</li>
            </ul>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Agile and Adaptive</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              We embrace agile methodologies, allowing us to adapt quickly to changing requirements and deliver incremental value. Our teams work in sprints, with regular demos and retrospectives to ensure alignment and continuous improvement.
            </p>
            <p class="mb-6 text-gray-300 leading-relaxed">
              This approach not only accelerates delivery but also fosters a culture of collaboration, innovation, and accountability. Our clients are true partners in the development journey.
            </p>
          `
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
          views: 1103,
          content: `
            <p class="mb-6 text-gray-300 leading-relaxed">
              MillenniumAI offers a comprehensive suite of development services designed to meet the diverse needs of modern businesses. From cutting-edge AI and machine learning solutions to robust full-stack web applications, we provide end-to-end development capabilities that drive innovation and growth.
            </p>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">AI/ML Development Services</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              Our AI and machine learning services encompass everything from predictive analytics to natural language processing, computer vision, and custom AI model development. We help businesses leverage the power of AI to gain insights, automate processes, and create intelligent applications.
            </p>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Full-Stack Web & Mobile Development</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              Our full-stack teams are proficient in the latest frameworks and technologies, including MERN, React Native, and more. We build scalable, secure, and high-performance web and mobile applications tailored to your business needs.
            </p>
            <ul class="list-disc list-inside mb-6 text-gray-300 space-y-2">
              <li>Custom web applications and portals</li>
              <li>Mobile apps for iOS and Android</li>
              <li>Backend engineering and API development</li>
              <li>UI/UX design and prototyping</li>
            </ul>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Why MillenniumAI?</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              We combine technical excellence with a deep understanding of business goals. Our collaborative approach ensures that every solution is aligned with your vision and delivers measurable results.
            </p>
          `
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
          views: 634,
          content: `
            <p class="mb-6 text-gray-300 leading-relaxed">
              This case study demonstrates MillenniumAI's ability to deliver high-stakes, secure applications under tight deadlines while maintaining the highest standards of quality and security. Our client, a European government agency, needed a secure election dashboard that could handle real-time voting data with absolute reliability.
            </p>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">The Challenge</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              The client required a secure, scalable election dashboard that could process real-time voting data from multiple polling stations across the European Union. The system needed to be ISO-compliant, handle high traffic loads, and provide 99.9% uptime during critical election periods.
            </p>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Our Solution</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              MillenniumAI's team architected a MERN-based solution with robust security features, real-time data processing, and a user-friendly dashboard interface. We implemented multi-factor authentication, end-to-end encryption, and real-time monitoring to ensure compliance and reliability.
            </p>
            <ul class="list-disc list-inside mb-6 text-gray-300 space-y-2">
              <li>ISO-compliant security protocols</li>
              <li>Real-time data streaming and analytics</li>
              <li>Customizable dashboard widgets</li>
              <li>Automated failover and backup systems</li>
            </ul>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Results & Impact</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              The project was delivered in just 3 weeks, with 99.9% uptime and 40% cost savings compared to European vendors. The client praised MillenniumAI for our professionalism, technical expertise, and commitment to security.
            </p>
          `
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
          tags: ["Global Clients", "Affordability", "Speed", "Transparency"],
          views: 945,
          content: `
            <p class="mb-6 text-gray-300 leading-relaxed">
              Global clients choose MillenniumAI for our unique combination of affordability, speed, and transparency. We've built our reputation on delivering exceptional value while maintaining the highest standards of quality and communication throughout the development process.
            </p>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Cost-Effective Excellence</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              Our clients consistently report 40-60% cost savings compared to local development agencies while receiving the same or better quality deliverables. This cost advantage is achieved through our efficient development processes and global talent pool, not by cutting corners on quality.
            </p>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Speed & Agility</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              We pride ourselves on rapid delivery without sacrificing quality. Our agile teams work in parallel streams, leveraging automation and best practices to accelerate timelines and deliver results faster than the competition.
            </p>
            <ul class="list-disc list-inside mb-6 text-gray-300 space-y-2">
              <li>30-40% faster project delivery</li>
              <li>Transparent project tracking and reporting</li>
              <li>Dedicated client success managers</li>
              <li>24/7 support and communication</li>
            </ul>
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">A Trusted Partner</h2>
            <p class="mb-6 text-gray-300 leading-relaxed">
              Our transparent processes, open communication, and commitment to client success have made MillenniumAI the preferred partner for organizations worldwide. We go beyond just delivering code—we build lasting relationships based on trust and results.
            </p>
          `
        }
      ];

    const post = blogPosts.find(post => post.id === parseInt(id));

    if (!post) {
        return (
            <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
                <div className="text-center max-w-md mx-auto">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Post Not Found</h1>
                    <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">The blog post you're looking for doesn't exist.</p>
                    <Link to="/blog" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-medium hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                        <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Back to Blog</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0A0A0A] overflow-hidden w-full">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] lg:bg-[size:4rem_4rem]"></div>
            </div>

            {/* Animated Gradient Orbs */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-500/10 rounded-full filter blur-[80px] sm:blur-[100px] lg:blur-[120px] animate-float"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-purple-500/10 rounded-full filter blur-[80px] sm:blur-[100px] lg:blur-[120px] animate-float-reverse"></div>

            <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 py-6 sm:py-8 pt-24 sm:pt-28 lg:pt-32">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <div className="mb-6 sm:mb-8">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group text-sm sm:text-base">
                            <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                            <span>Back to Blog</span>
                        </Link>
                    </div>

                    {/* Featured Badge */}
                    {post.featured && (
                        <div className="mb-4 sm:mb-6">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
                                <HiSparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                                <span className="text-blue-400 text-xs sm:text-sm font-medium">Featured Article</span>
                            </div>
                        </div>
                    )}

                    {/* Article Header */}
                    <article className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl blur-xl"></div>
                        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden">
                            {/* Hero Image */}
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>

                            {/* Article Content */}
                            <div className="p-4 sm:p-6 lg:p-8">
                                {/* Category */}
                                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                    <FaTag className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                                    <span className="text-xs sm:text-sm text-blue-400 font-medium">{post.category}</span>
                                </div>

                                {/* Title */}
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                                    {post.title}
                                </h1>

                                {/* Meta Information */}
                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 text-gray-300 text-xs sm:text-sm">
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <FaUser className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                                        <span className="truncate">{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <FaCalendarAlt className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <FaClock className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
                                        <span>{post.readTime}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <FaEye className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                                        <span>{post.views} views</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                                    {post.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 sm:px-3 py-1 bg-white/5 text-gray-300 text-xs sm:text-sm rounded-full border border-white/10 hover:border-blue-400/30 transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Article Content */}
                                <div className="prose prose-invert max-w-none">
                                    <div 
                                        className="text-gray-300 leading-relaxed text-sm sm:text-base"
                                        dangerouslySetInnerHTML={{ __html: post.content }}
                                    />
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
                                    <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                                        <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-white/5 text-gray-300 hover:text-blue-400 transition-colors duration-300 rounded-xl border border-white/10 hover:border-blue-400/30 text-xs sm:text-sm flex-1 sm:flex-none justify-center">
                                            <FaBookmark className="w-3 h-3 sm:w-4 sm:h-4" />
                                            <span>Bookmark</span>
                                        </button>
                                        <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-white/5 text-gray-300 hover:text-purple-400 transition-colors duration-300 rounded-xl border border-white/10 hover:border-purple-400/30 text-xs sm:text-sm flex-1 sm:flex-none justify-center">
                                            <FaShare className="w-3 h-3 sm:w-4 sm:h-4" />
                                            <span>Share</span>
                                        </button>
                                    </div>
                                    
                                    <Link to="/blog" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-medium hover:scale-105 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center">
                                        <FaRocket className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span>Explore More Articles</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Related Articles Section */}
                    <section className="mt-12 sm:mt-16">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
                            Related{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                Articles
                            </span>
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {blogPosts
                                .filter(p => p.id !== post.id)
                                .slice(0, 2)
                                .map((relatedPost) => (
                                    <Link 
                                        key={relatedPost.id} 
                                        to={`/blog/${relatedPost.id}`}
                                        className="group relative"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                        <div className="relative bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
                                            <div className="aspect-[16/9] overflow-hidden">
                                                <img
                                                    src={relatedPost.image}
                                                    alt={relatedPost.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="p-4 sm:p-6">
                                                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                                                    <FaTag className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                                                    <span className="text-xs text-blue-400 font-medium">{relatedPost.category}</span>
                                                </div>
                                                <h3 className="text-sm sm:text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 line-clamp-2">
                                                    {relatedPost.title}
                                                </h3>
                                                <p className="text-gray-300 text-xs sm:text-sm line-clamp-2">
                                                    {relatedPost.excerpt}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default BlogPost 