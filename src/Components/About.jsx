import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-darkBlue text-softWhite py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image - Left Side */}
        <div className="w-72 h-72 rounded-full border-4 border-tealGreen shadow-lg flex items-center justify-center bg-gray-800 overflow-hidden">
          <img
            src="./assets/Zufiya.png"
            alt="Zufiya"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Content - Right Side */}
        <div className="max-w-3xl text-left">
          {/* Title */}
          <h1 className="text-4xl font-bold text-tealGreen mb-6">About Me</h1>

          {/* Description */}
          <p className="text-lg leading-8 text-gray-300">
            Hi! I'm{" "}
            <span className="text-tealGreen font-semibold">Zufiya Idrisi</span>,
            a passionate
            <span className="text-tealGreen font-semibold">
              {" "}
              MERN Stack Developer
            </span>{" "}
            and Cybersecurity Enthusiast. I specialize in{" "}
            <strong>secure, high-performance web applications</strong>while
            exploring innovative solutions in cybersecurity.
          </p>

          <p className="text-lg leading-8 text-gray-300 mt-4">
            My journey involves{" "}
            <strong>
              building projects, hackathon participation, and freelancing
            </strong>
            , all driven by a continuous passion for learning and solving
            real-world challenges.
          </p>

          {/* Skills Section */}
          <div className="mt-8">
            {[
              { skill: "React JS", width: "85%" },
              { skill: "Next JS", width: "75%" },
              { skill: "Node JS", width: "80%" },
              { skill: "MongoDB", width: "75%" },
              { skill: "Cybersecurity", width: "65%" },
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <p className="text-softWhite font-medium">{item.skill}</p>
                  <p className="text-softWhite font-medium">{item.width}</p>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full mt-1 overflow-hidden">
                  <div
                    className="h-full bg-tealGreen rounded-full transition-all duration-700 ease-in-out"
                    style={{ width: item.width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
