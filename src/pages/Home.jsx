
const Home = () => {
  return (
    <section className="w-full h-[93vh] overflow-hidden flex flex-col items-center justify-center">
      <h1 className="text-center w-[75%] sm:w-[60%] mx-auto text-5xl sm:text-8xl font-medium font-dm">
        Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">AI</span> with Precision Annotation
      </h1>
      <p className="m-5 text-center text-slate-500 text-lg sm:text-xl">Image, Video & Geospatial Annotation Services powered by experts and smart tech.</p>
      <button className="cursor-pointer px-5 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 font-dm rounded-md h-11 mx-auto hover:border border-black">Get Started</button>
    </section>
  );
};

export default Home;
