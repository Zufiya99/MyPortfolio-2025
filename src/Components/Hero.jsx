import React from "react";

const Hero = () => {
  // Scroll to a specific section
  const scrollTo = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="flex flex-col items-center text-center bg-chineseBlack text-softWhite py-24 px-8"
    >
      {/* Profile Image */}
      <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-tealGreen shadow-lg hover:scale-105 transition-transform duration-300">
        <img
          src="./assets/Zufiya.png"
          alt="Zufiya"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Name & Title */}
      <h1 className="text-6xl sm:text-7xl font-bold mt-6 leading-tight">
        <span className="bg-gradient-to-r from-tealGreen to-grayBlue bg-clip-text text-transparent">
          Zufiya Idrisi
        </span>
      </h1>
      <h2 className="text-2xl sm:text-3xl text-gray-400 font-medium mt-2">
        MERN Stack Developer | Cybersecurity Enthusiast
      </h2>

      {/* Professional Summary */}
      <p className="mt-5 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
        Crafting <strong>scalable, secure, and high-performance</strong> web
        applications while exploring the fascinating world of{" "}
        <strong>cybersecurity</strong>. Committed to{" "}
        <strong>innovation, security, and user experience</strong>.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <button
          onClick={() => {
            scrollTo("contact");
          }}
          className="px-8 py-3 text-lg font-medium bg-tealGreen text-darkBlue rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-greenHover"
        >
          Connect with Me
        </button>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1neiS0vU052AebFA2wcevxY1MQ28aFhxu/view?usp=sharing",
              "_blank"
            )
          }
          className="px-8 py-3 text-lg font-medium border-2 border-softWhite text-softWhite rounded-full shadow-md hover:border-tealGreen hover:bg-darkBlue transition-transform transform hover:scale-105"
        >
          View Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
