import React from "react";

const About = () => {
    return (
        <div className="mb-20 pb-20">
            <div className="text-center mt-20 pt-20">
                <h2 className="text-4xl font-bold" >About Us</h2>
                <div className="mx-auto mt-5 h-1 w-16 bg-violet-500 rounded-full"></div>
            </div>
            <div className="flex justify-center items-center px-3 py-8">
                <div className="bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-11 pt-16 max-w-4xl w-full text-gray-500 text-xl leading-relaxed transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
                    <p>
                    <span className="italic text-blue-700 font-bold">NutriScan</span> is an <span className="font-bold text-blue-700">innovative and intelligent</span> website designed to revolutionize the way individuals manage their diet and nutrition. At its core, NutriScan empowers users to make informed and healthier food choices by providing detailed, real-time nutritional information with utmost accuracy and convenience. Whether scanning packaged food items for specific nutrient details or exploring a comprehensive database of common foods like fruits and vegetables, NutriScan equips users with the knowledge they need to take control of their health
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
