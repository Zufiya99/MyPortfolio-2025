import React, { useState } from "react";
import experiencesData from "../../public/assets/experience_data.json";

const Experiences = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredExperiences =
    selectedCategory === "All"
      ? experiencesData.experiences
      : experiencesData.experiences.filter(
          (exp) => exp.category === selectedCategory
        );

  return (
    <section
      className="bg-chineseBlack text-white py-16 px-6 md:px-12"
      id="experiences"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-teal-400 mb-8">
          My Experiences
        </h1>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {experiencesData.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-teal-400 text-black shadow-md"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-gray-900 p-6 rounded-lg shadow-lg border-2 border-gray-700 transition-all duration-500 
              hover:scale-102 hover:-translate-y-2 hover:border-teal-400"
            >
              <h2 className="text-xl font-semibold text-teal-300">
                {exp.title}
              </h2>
              <p className="text-sm text-gray-400 mt-1">{exp.date}</p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
              <a
                href="https://www.linkedin.com/in/zufiyaidrisi9797/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 font-semibold mt-3 inline-block transition-all duration-300 hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
