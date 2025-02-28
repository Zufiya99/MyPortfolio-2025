import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-darkBlue text-white py-8 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Copyright and LinkedIn */}
        <p className="text-md text-softWhite">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://linkedin.com/in/zufiyaidrisi9797"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-300"
          >
            Zufiya Idrisi
          </a>{" "}
          . All rights reserved.
        </p>
      </div>

      {/* Scroll to Top Arrow on the Right */}
      <div
        onClick={scrollToTop}
        className="absolute bottom-8 right-6 text-teal-400 hover:text-greenHover transition duration-300 cursor-pointer animate-bounce"
      >
        <FaArrowAltCircleUp size={40} />
      </div>
    </footer>
  );
};

export default Footer;
