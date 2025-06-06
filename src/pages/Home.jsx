import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-full h-[93vh] overflow-hidden flex flex-col item center justify-center">
      <h1 className="text-center w-[60%] sm:w-[50%] mx-auto text-4xl sm:text-6xl">
        Accelerate Your AI with Precision Annotation
      </h1>
      <p className="m-5 text-center text-slate-500 text-lg sm:text-xl">Image, Video & Geospatial Annotation Services powered by experts and smart tech.</p>
      <button className="cursor-pointer px-5 py-2 bg-blue-500 rounded-md mt-5 mx-auto">Get Started</button>
    </div>
  );
};

export default Home;
