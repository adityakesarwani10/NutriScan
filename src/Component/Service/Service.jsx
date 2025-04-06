import React from "react";
import { FaSearch, FaChartPie, FaLeaf } from "react-icons/fa";

const services = [
  {
    title: "Product Search",
    description: "Search for food products and instantly get their nutritional information using AI-powered analysis.",
    icon: <FaSearch className="text-4xl text-violet-500 mb-4" />,
  },
  {
    title: "Nutritional Breakdown",
    description: "Understand calories, vitamins, fats, and more through intuitive visual breakdowns of each product.",
    icon: <FaChartPie className="text-4xl text-violet-500 mb-4" />,
  },
  {
    title: "Healthy Suggestions",
    description: "Get healthier alternatives and suggestions based on your search and dietary goals.",
    icon: <FaLeaf className="text-4xl text-violet-500 mb-4" />,
  },
];

const Service = () => {
  return (
    <div className="pt-24 mt-20 px-6 min-h-screen bg-white/10 text-white">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
      <div className="mx-auto w-16 h-1 bg-violet-500 rounded-full mb-10"></div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl backdrop-blur-md text-center transition-all duration-300 hover:scale-105 hover:shadow-violet-500/30"
          >
            {service.icon}
            <h3 className="text-xl text-gray-900 font-bold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <h3 className="text-2xl text-gray-500 font-semibold mb-2">Want to learn more?</h3>
        <p className="text-gray-600 mb-4">Feel free to get in touch with us for collaborations or support.</p>
        <a
          href="/Contact"
          className="inline-block px-6 py-3 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Service;
