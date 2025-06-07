import img1 from "../assets/about.webp";

const About = () => {
  return (
    <section className="mx-5 ">
      <div className="my-6">
        <div className="sm:flex  gap-10 items-center">
          <div className="w-full flex flex-col items-center justify-center m-2">
            <h2 className=" text-center w-[70%] text-4xl leading-15 font-bold font-dm">
              Where Artificial Intelligence Meets Full-Stack Innovation
            </h2>
            <button className="cursor-pointer px-5 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 font-dm rounded-md h-11 hover:border border-black">
              Contact Us
            </button>
          </div>
          <div className="w-full m-2 flex items-center justify-center">
            
          <img src={img1} alt="img" className="sm:w-95 w-80 h-80 sm:h-70 rounded-2xl" />
          </div>
        </div>
              <h1 className="my-5 text-center font-dm text-2xl font-bold">About Us</h1>


        <p className="text-lg text-gray-500 w-[90%] mx-auto ">
          MillenniumAi started with a singular vision — to power AI systems with
          high-quality, human-labeled data. Today, we’ve evolved into a
          multi-disciplinary technology powerhouse delivering end-to-end
          solutions that span AI Data Annotation, Web Development, Mobile &
          Gaming App Development, SEO, and Full Stack Software Engineering.
        </p>

        <p className="text-lg text-gray-500 w-[90%] mx-auto mt-5">
          With a diverse team of engineers, annotators, developers, designers,
          and strategists, we’ve successfully served clients in eCommerce,
          EdTech, Fitness, Healthcare, Logistics, and more.
        </p>
        <ul className="text-lg text-gray-500 list-disc w-[90%] mx-auto mt-5">
          <p>We take pride in being:</p>
          <li className="ml-10">
            A trusted partner to over 25 growing and established companies
          </li>
          <li className="ml-10">
            {" "}
            One of the fastest-growing digital transformation companies in India
          </li>
          <li className="ml-10"> A seamless blend of AI intelligence and human creativity</li>
        </ul>

        <p className="text-lg text-gray-500 w-[90%] mx-auto mt-5">
          At MillenniumAi, innovation isn’t just a buzzword — it’s the
          foundation of how we deliver excellence and build long-term
          partnerships.
        </p>
      </div>
    </section>
  );
};

export default About;
