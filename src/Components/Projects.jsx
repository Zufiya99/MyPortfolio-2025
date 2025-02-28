import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/assets/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-10">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden transition duration-500 transform hover:scale-105 hover:shadow-xl"
          >
            {/* Project Image */}
            <div className="w-full h-48 rounded-md overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition duration-500 transform group-hover:scale-110"
              />
            </div>

            {/* Project Details */}
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-teal-400">{project.name}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>

              {/* Tech Stack */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-sm bg-gray-700 text-white px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons for Live Demo & GitHub */}
              <div className="mt-4 flex gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition duration-300"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-600 transition duration-300"
                  >
                    <FaGithub /> GitHub Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "View More Projects" Button */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/Zufiya99"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-teal-500 text-white text-lg font-semibold px-6 py-3 rounded-md shadow-md hover:bg-teal-600 hover:scale-105 transition duration-300"
        >
          View More Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
