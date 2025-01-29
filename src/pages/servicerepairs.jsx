import React, { useState } from 'react';

const Service = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    serviceType: '',
    car: ''
  });

  const services = [
    {
      id: 1,
      title: "Yearly Service",
      price: "$299",
      features: [
        "Oil and filter change",
        "Basic safety inspection",
        "Brake check",
        "Fluid level check"
      ]
    },
    {
      id: 2,
      title: "3 Years Service",
      price: "$599",
      features: [
        "Complete fluid replacement",
        "Comprehensive inspection",
        "Filter replacement",
        "Brake service",
        "Wheel alignment"
      ]
    },
    {
      id: 3,
      title: "6 Years Service",
      price: "$899",
      features: [
        "Major component inspection",
        "Complete system diagnostics",
        "All fluid replacement",
        "Belt replacement",
        "Suspension check"
      ]
    },
    {
      id: 4,
      title: "Ultimate Service",
      price: "$1299",
      features: [
        "Complete vehicle overhaul",
        "Premium parts replacement",
        "Advanced diagnostics",
        "Performance optimization",
        "Extended warranty"
      ]
    },
    {
      id: 5,
      title: "Log Book Service",
      price: "$199",
      features: [
        "Manufacturer specifications",
        "Warranty maintenance",
        "Service record update",
        "Basic inspection"
      ]
    },
    {
      id: 6,
      title: "Free Safety Inspection",
      price: "FREE",
      features: [
        "Visual safety check",
        "Tire inspection",
        "Brake check",
        "Light inspection"
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Service and Repairs</h1>
        <p className="text-lg text-gray-600">Professional car care services for your vehicle</p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-2xl font-bold text-orange-500 mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
                Select Service
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Service</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="serviceType">
              Service Type
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="car">
              Car Model
            </label>
            <input
              type="text"
              id="car"
              name="car"
              value={formData.car}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-medium"
          >
            Book Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default Service;