import React from "react";

function Hero_sec() {

    return (
        <section className="text-center mt-10 md:mt-20">
            
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
          Welcome to <span className="text-blue-600">NutriScan</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
          Your AI-powered assistant for smarter and healthier food choices.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 text-lg rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
            Search Product
          </button>
          <button className="px-6 py-3 text-lg rounded-full border border-gray-300 hover:border-blue-500 transition">
            Learn More
          </button>
        </div>
      </section>

    )
}

export default Hero_sec;