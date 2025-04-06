import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FiSend } from "react-icons/fi";

function Hero_sec() {
  const { setSearchText } = useOutletContext();
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    setSearchText("apple"); // default search for desktop button
  };

  const handleMobileSend = () => {
    if (inputText.trim()) {
      setSearchText(inputText.trim());
      setInputText(""); // Clear after search
    }
  };

  return (
    <section className="text-center mt-10 md:mt-20 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
        Welcome to <span className="text-blue-600">NutriScan</span>
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
        Your AI-powered assistant for smarter and healthier food choices.
      </p>

      {/* Desktop Buttons */}
      <div className="mt-8 justify-center gap-4 flex-wrap hidden md:flex">
        <button
          className="px-6 py-3 text-lg rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          onClick={handleClick}
        >
          Search Product
        </button>
        <button className="px-6 py-3 text-lg rounded-full border border-gray-300 hover:border-blue-500 transition"
        onClick={() => window.open("../../../Chatbot/index.html", "_blank")}
        >
          Learn More
        </button>
      </div>

      {/* Mobile Search Bar */}
      <div className="mt-6 flex flex-col items-center gap-4 md:hidden">
        <div className="flex w-full max-w-md rounded-lg overflow-hidden border shadow">
          <input
            type="text"
            placeholder="Search product..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-grow px-4 py-4 rounded-l-full border-t border-b border-l border-gray-300 focus:outline-none text-lg px-4 py-2 outline-none min-w-0"
          />
          <button
            className="bg-blue-600 text-white p-4 px-4 rounded-r-full hover:bg-blue-700 flex items-center justify-center bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
            onClick={handleMobileSend}
          >
            <FiSend className="text-lg" />
          </button>
        </div>
      </div>

    </section>
  );
}

export default Hero_sec;
