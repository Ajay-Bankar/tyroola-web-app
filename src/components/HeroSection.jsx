import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[380px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('../images/hero2.jpg')",
          opacity: 0.9
        
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

     

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          Drive with Confidence
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-6">
          Discover premium tyres designed for safety, performance, and comfort.
        </p>

        <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
          Explore Tyres
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
