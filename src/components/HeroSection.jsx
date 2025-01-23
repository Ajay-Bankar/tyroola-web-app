import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[380px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/ntvz9dezi1x/blog/tyre-tread-indicator.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Tyroola Logo (Top-Right Corner) */}
      <div className="absolute top-4 right-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PnJD6i8Z4bAErZzJRDfQbElsSo39cmcsvg&s"
          alt="Tyroola Logo"
          className="w-36 h-auto" // Adjust the size as needed
        />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Drive with Confidence
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
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
