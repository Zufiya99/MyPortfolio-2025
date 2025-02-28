import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-green-500 shadow-lg">
            <span className="text-gray-900 text-3xl font-bold">Z</span>
          </div>
          <span className="text-lg font-semibold">Zufiya Idrisi</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm mt-4 md:mt-0">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-teal-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/zufiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:scale-110 transition transform duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/zufiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:scale-110 transition transform duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:zufiya@example.com"
            className="text-teal-400 hover:scale-110 transition transform duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} Zufiya Idrisi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
