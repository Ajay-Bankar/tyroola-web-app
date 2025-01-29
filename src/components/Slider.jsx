import React, { useState, useEffect } from "react";

const Slider = () => {
  const slides = [
    "/images/slider2.jpg",
    "/images/slider1.jpg",
    "/images/slider4.jpg",
    "/images/slider5.jpg",
    "/images/slider3.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handles going to the next slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div className="relative h-[140px] md:h-[400px] lg:h-[400px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-[140px] md:h-[400px] lg:h-[400px]  transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
