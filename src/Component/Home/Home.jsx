import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"
import NutrientCards from "../NutriCard/NutriCard";
import Hero_sec from "../Hero_sec/Hero_sec";

const awarenessTips = [
  "Scan any food product to get instant nutrition details.",
  "Search for items and get their nutritional breakdown.",
  "Your health starts with awareness — make informed choices.",
];

const Home = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % awarenessTips.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white min-h-screen text-gray-800 mt-20 p-6 md:p-12 relative">
      {/* Hero Section */}
      <Hero_sec />

      {/* Awareness Tips */}
      <section className="mt-20 text-center">
        <motion.div
          key={currentTipIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 text-blue-800 rounded-xl px-6 py-4 inline-flex items-center gap-3 shadow-md"
        >
          <Lightbulb className="w-6 h-6 text-yellow-500" />
          <p className="text-md md:text-lg font-medium">{awarenessTips[currentTipIndex]}</p>
        </motion.div>
      </section>

        {/* About Us */}
        <div>
            <div className="text-center mb-10 mt-20 ">
                <h2 className="text-4xl font-bold">About Us</h2>
                <div className="mx-auto mt-5 h-1 w-16 bg-violet-500 rounded-full"></div>
            </div>
            <div className="flex justify-center items-center px-3 py-8">
                <div className="bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-11 pt-16 max-w-3xl w-full text-gray-500 text-xl leading-relaxed transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
                    <p>
                        <span className="italic text-blue-700 font-bold">NutriScan</span> on a thrilling two-day software and hardware development hackathon,
                        where participants create <span className="font-bold text-blue-700">innovative applications</span> inspired by given themes
                        within a defined time frame, elevating their projects to new heights. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore a numquam repellendus. Odit asperiores, quas accusamus modi tempora rerum repudiandae molestias excepturi magni voluptatibus maiores quibusdam facere, eum alias saepe aut iste accusantium nisi deserunt nesciunt perferendis iure aliquid non delectus! Atque officia magni eveniet deleniti et ratione tempora molestias.
                    </p>
                </div>
            </div>
        </div>
        <div>
            <NutrientCards />
        </div>

    -

      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          💬
        </motion.button>
      </div>
      
    </main>
  );
};

export default Home;
