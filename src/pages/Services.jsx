import React from "react";
import Card from "../components/Card";

const Services = () => {
  return (
    <section className="my-28 px-2">
      <h1 className="text-3xl sm:text-4xl font-dm font-bold text-center bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text mb-4">
        Comprehensive Technology Solutions Under One Roof
      </h1>
      <p className="font-dm mx-auto text-center text-slate-500 max-w-2xl mb-12 text-lg">
        We offer full-cycle digital product development, combining creative design, robust technology, and smart marketing. Our services include:
      </p>
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        <Card
          heading="Website Development"
          subheading="Custom Websites That Work as Hard as You Do"
          p1={`Our website development team crafts stunning, responsive websites that deliver measurable results. Whether you're a startup, SME, or an established brand, we build custom platforms that are scalable, secure, and fast.`}
          p_head="Key Offerings:"
          li1="Business & Corporate Websites"
          li2="eCommerce Stores (Shopify, WooCommerce, Magento)"
          li3="Custom CMS Development (WordPress, Webflow, Headless CMS)"
          li4="Landing Pages for Campaigns"
          li5="Multilingual & Multi-region Support, Mobile & Tablet"
          p2={`We combine creativity with strategy to help you create a powerful online presence that converts.`}
        />

        <Card
          heading="Mobile App Development"
          subheading="Future-Ready Mobile Apps for Android & iOS"
          p1={`With mobile-first strategies, we deliver intuitive and performance-driven apps tailored for your business. Whether it’s a native Android/iOS app or a cross-platform solution, we ensure seamless user experience, strong backend, and stunning UI.`}
          p_head="Capabilities:"
          li1="Native Apps (Java/Kotlin, Swift)"
          li2="Cross-Platform Apps (Flutter, React Native)"
          li3="Admin Dashboard & API Integration"
          li4="Real-time Features (Chat, Notifications, GPS)"
          li5="Ongoing Monitoring & Updates"
          p2={`Our apps have helped startups scale and enterprises digitize with confidence.`}
        />

        <Card
          heading="Gaming App Development"
          subheading="Gamify Experiences, Engage Millions"
          p1={`We specialize in building immersive gaming applications that capture users and maximize retention. Whether it's a casual game, an arcade-style app, or a multiplayer experience, our gaming developers bring creativity and technical mastery together.`}
          p_head="What We Do:"
          li1="2D & 3D Game Design"
          li2="Multiplayer Real-Time Gaming"
          li3="Gamification Modules for Apps"
          li4="Unity, Unreal Engine, and Phaser.js Expertise"
          li5="Game Testing & Optimization"
          p2={`Already trusted by clients in education, entertainment, and brand engagement, our gaming apps stand out with rich graphics and performance.`}
        />
      </div>
    </section>
  );
};

export default Services;