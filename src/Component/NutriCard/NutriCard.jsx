import React, { useEffect, useRef, useState } from "react";

const data = [
  {
    name: "Apple",
    specialization1: "Rich in Fiber",
    specialization2: "Boosts Digestion",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
    nutrients: {
      Calories: "95",
      Protein: "0.5g",
      Carbs: "25g",
      Fat: "0.3g",
      Fiber: "4g",
      Sugar: "19g",
    },
  },
  {
    name: "Banana",
    specialization1: "Energy Booster",
    specialization2: "Rich in Potassium",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
    nutrients: {
      Calories: "105",
      Protein: "1.3g",
      Carbs: "27g",
      Fat: "0.4g",
      Fiber: "3g",
      Sugar: "14g",
    },
  },
  {
    name: "Apple",
    specialization1: "Rich in Fiber",
    specialization2: "Boosts Digestion",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
    nutrients: {
      Calories: "95",
      Protein: "0.5g",
      Carbs: "25g",
      Fat: "0.3g",
      Fiber: "4g",
      Sugar: "19g",
    },
  },
  {
    name: "Banana",
    specialization1: "Energy Booster",
    specialization2: "Rich in Potassium",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
    nutrients: {
      Calories: "105",
      Protein: "1.3g",
      Carbs: "27g",
      Fat: "0.4g",
      Fiber: "3g",
      Sugar: "14g",
    },
  },
  // Add more items here...
];

const NutriCardSlider = () => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);
// className="p-4 sm:p-6 md:p-8"

  return (
    <section className="w-full bg-white py-12">
        <div className="text-center my-10 mt-20 ">
            <h2 className="text-4xl font-bold">Best for you</h2>
            <div className="mx-auto mt-5 h-1 w-16 bg-violet-500 rounded-full"></div>
        </div>
      <div className="max-w-6xl mx-auto p-8 relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{ width: "100%" }}
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="min-w-full max-w-3xl mx-auto backdrop-blur-md bg-white/30 border border-zinc-200 text-black rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-xl"

                />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-purple-700">
                    {item.name}
                  </h2>
                  <p className="text-purple-500 italic">{item.specialization1}</p>
                  <p className="mb-4">{item.specialization2}</p>
                  <div className="grid grid-cols-2 text-base gap-x-4 gap-y-2">
                    {Object.entries(item.nutrients).map(([k, v]) => (
                      <p key={k}>
                        <strong>{k}:</strong> {v}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutriCardSlider;
