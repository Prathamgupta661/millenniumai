import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaRocket, FaGlobe, FaMobileAlt, FaGamepad, FaRobot, FaCloud, FaChartLine } from 'react-icons/fa'

const LearnMoreService = () => {
    const { title } = useParams();

    // Function to convert slug back to readable title
    const getServiceTitle = (slug) => {
        const titleMap = {
            'website-development': 'Website Development',
            'mobile-app-development': 'Mobile App Development',
            'gaming-app-development': 'Gaming App Development',
            'ai-ml-solutions': 'AI & ML Solutions',
            'cloud-devops': 'Cloud & DevOps',
            'digital-marketing': 'Digital Marketing'
        };
        return titleMap[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    };

    // Service data based on slug
    const getServiceData = (slug) => {
        const servicesData = {
            'website-development': {
                icon: FaGlobe,
                title: 'Website Development',
                subtitle: 'Custom Websites That Work as Hard as You Do',
                description: 'Our website development team crafts stunning, responsive websites that deliver measurable results. Whether you\'re a startup, SME, or an established brand, we build custom platforms that are scalable, secure, and fast.',
                features: [
                    'Business & Corporate Websites',
                    'eCommerce Stores',
                    'Custom CMS Development',
                    'Landing Pages for Campaigns',
                    'Multilingual & Multi-region Support'
                ],
                color: 'blue',
                gradient: 'from-blue-500/20 to-purple-500/20'
            },
            'mobile-app-development': {
                icon: FaMobileAlt,
                title: 'Mobile App Development',
                subtitle: 'Future-Ready Mobile Apps for Android & iOS',
                description: 'With mobile-first strategies, we deliver intuitive and performance-driven apps tailored for your business. Whether it\'s a native Android/iOS app or a cross-platform solution, we ensure seamless user experience.',
                features: [
                    'Native Apps (Java/Kotlin, Swift)',
                    'Cross-Platform Apps (Flutter, React Native)',
                    'Admin Dashboard & API Integration',
                    'Real-time Features',
                    'Ongoing Monitoring & Updates'
                ],
                color: 'purple',
                gradient: 'from-purple-500/20 to-pink-500/20'
            },
            'gaming-app-development': {
                icon: FaGamepad,
                title: 'Gaming App Development',
                subtitle: 'Gamify Experiences, Engage Millions',
                description: 'We specialize in building immersive gaming applications that capture users and maximize retention. Whether it\'s a casual game, an arcade-style app, or a multiplayer experience.',
                features: [
                    '2D & 3D Game Design',
                    'Multiplayer Real-Time Gaming',
                    'Gamification Modules',
                    'Unity & Unreal Engine Expertise',
                    'Game Testing & Optimization'
                ],
                color: 'pink',
                gradient: 'from-pink-500/20 to-blue-500/20'
            },
            'ai-ml-solutions': {
                icon: FaRobot,
                title: 'AI & ML Solutions',
                subtitle: 'Intelligent Automation for Modern Businesses',
                description: 'Leverage the power of artificial intelligence and machine learning to automate, predict, and optimize your business processes. We build custom AI models and integrate them seamlessly into your workflow.',
                features: [
                    'Natural Language Processing',
                    'Computer Vision',
                    'Machine Learning Models',
                    'Predictive Analytics',
                    'AI Integration Services'
                ],
                color: 'blue',
                gradient: 'from-blue-500/20 to-purple-500/20'
            },
            'cloud-devops': {
                icon: FaCloud,
                title: 'Cloud & DevOps',
                subtitle: 'Scale with Confidence & Reliability',
                description: 'Modernize your infrastructure with our cloud and DevOps services. We help you deploy, manage, and scale applications securely and efficiently on AWS, Azure, or Google Cloud.',
                features: [
                    'Cloud Migration & Management',
                    'CI/CD Pipeline Setup',
                    'Infrastructure as Code',
                    'Monitoring & Security',
                    'Cost Optimization'
                ],
                color: 'purple',
                gradient: 'from-purple-500/20 to-pink-500/20'
            },
            'digital-marketing': {
                icon: FaChartLine,
                title: 'Digital Marketing',
                subtitle: 'Grow Your Brand & Reach New Heights',
                description: 'Our digital marketing team crafts data-driven strategies to boost your online presence, generate leads, and increase conversions. From SEO to paid ads, we cover it all.',
                features: [
                    'SEO & Content Marketing',
                    'Social Media Management',
                    'PPC & Paid Campaigns',
                    'Email Marketing',
                    'Analytics & Reporting'
                ],
                color: 'pink',
                gradient: 'from-pink-500/20 to-blue-500/20'
            }
        };
        return servicesData[slug] || null;
    };

    const serviceData = getServiceData(title);
    const serviceTitle = getServiceTitle(title);

    if (!serviceData) {
        return (
            <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl text-white mb-4">Service Not Found</h1>
                    <Link to="/services" className="text-blue-400 hover:text-blue-300">
                        ← Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    const IconComponent = serviceData.icon;

    return (
        <div className="min-h-screen bg-[#0A0A0A]">
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
                            {/* Back Button */}
                            <div className="mb-6 sm:mb-8">
                                <Link to="/services" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition-all duration-300">
                                    <FaArrowLeft className="w-4 h-4" />
                                    <span>Back to Services</span>
                                </Link>
                            </div>

                            {/* Icon Badge */}
                            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 sm:mb-8 border border-white/10">
                                <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${serviceData.gradient} rounded-full flex items-center justify-center`}>
                                    <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                                </div>
                                <span className="text-white/80 text-xs sm:text-sm font-medium">{serviceData.title}</span>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                                {serviceData.title}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                                {serviceData.subtitle}
                            </p>

                            {/* Description */}
                            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                                {serviceData.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
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
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white leading-tight">
                                What We{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                    Offer
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                                Comprehensive features and capabilities to meet your business needs
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {serviceData.features.map((feature, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 h-full">
                                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                            <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${serviceData.gradient} rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
                                                <FaRocket className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white">{feature}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
                            <Link to="/contact">
                                <button className="group relative px-6 sm:px-8 cursor-pointer py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto">
                                    <span className="relative z-10">Get Started Today</span>
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

export default LearnMoreService;
