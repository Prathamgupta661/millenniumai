import img1 from '../assets/home_img_1.webp'
const Home = () => {
  return (
    <section className="w-full min-h-full overflow-hidden flex flex-col">
      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className="text-center w-[75%] sm:w-[60%] mx-auto text-5xl sm:text-8xl font-medium font-dm">
          Accelerate Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
            AI
          </span>{" "}
          with Precision Annotation
        </h1>
        <p className="m-5 text-center text-slate-500 text-lg sm:text-xl">
          Image, Video & Geospatial Annotation Services powered by experts and
          smart tech.
        </p>
        <button className="cursor-pointer px-5 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 font-dm rounded-md h-11 mx-auto hover:border border-black">
          Get Started
        </button>
      </div>
      <section className="mt-40 mx-auto m-5 w-[95%] sm:flex shadow-sm border border-transparent rounded-lg bg-clip-border bg-gradient-to-r from-cyan-500 to bg-pink-500">
        <div className="w-full p-5 bg-white">
          <h2 className="font-dm text-xl font-bold">
            Empowering Innovation with AI & Full-Stack Development
          </h2>
          <p className="mt-3 w-[90%] text-slate-500 ">
            {" "}
            MillenniumAi is one of the fastest-growing technology partners,
            trusted by startups and enterprises alike. From intelligent data
            annotation for AI models to cutting-edge website, mobile, and gaming
            app development — we offer a complete suite of digital services that
            transform ideas into reality.
          </p>
          <p className="mt-4 text-slate-500 w-[90%]">
            {" "}
            Our dual strength in artificial intelligence and software
            development enables us to deliver smart, scalable, and secure
            solutions. With a proven track record across industries, we are the
            preferred partner for organizations looking to accelerate digital
            transformation with speed and precision.
          </p>

          <button className="mt-5 cursor-pointer">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 hover:text-pink-500">
              → Let’s Build the Future Together.
            </span>
          </button>
        </div>
        <div className="w-full flex items-center justify-center bg-white py-5">
          <img src={img1} alt="" className='w-80 h-100' loading='lazy'/>
        </div>
      </section>
    </section>
  );
};

export default Home;
