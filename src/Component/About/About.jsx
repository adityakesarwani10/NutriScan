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
                        <span className="italic text-blue-700 font-bold">NutriScan</span> on a thrilling two-day software and hardware development hackathon,
                        where participants create <span className="font-bold text-blue-700">innovative applications</span> inspired by given themes
                        within a defined time frame, elevating their projects to new heights. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore a numquam repellendus. Odit asperiores, quas accusamus modi tempora rerum repudiandae molestias excepturi magni voluptatibus maiores quibusdam facere, eum alias saepe aut iste accusantium nisi deserunt nesciunt perferendis iure aliquid non delectus! Atque officia magni eveniet deleniti et ratione tempora molestias.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
