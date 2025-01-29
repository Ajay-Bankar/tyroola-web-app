import React from "react";
import { Star } from "lucide-react"; // Assuming you're using the Lucide React library for the Star icon

const testimonialsData = [
  {
    id: 1,
    feedback:
      "I recently bought tyres from here, and the experience was fantastic! Quick installation and top-quality products.",
    name: "Aria Doe",
    image: "../images/test1.jpg", // Example image URL
  },
  {
    id: 2,
    feedback:
      "Amazing service and great prices! I highly recommend their tyres for both quality and affordability.",
    name: "Michael Johnson",
    image: "../images/test3.jpg", // Example image URL
  },
  {
    id: 3,
    feedback:
      "Very professional and efficient. My car feels much safer with the new tyres I purchased here.",
    name: "Zoe William",
    image: "../images/test2.jpg", // Example image URL
  },
];

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              {/* Customer Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              {/* Customer Name */}
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              {/* Five Stars */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star fill="#F59E0B" key={index} className="w-6 h-6 " />
                ))}
              </div>
              {/* Feedback */}
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
