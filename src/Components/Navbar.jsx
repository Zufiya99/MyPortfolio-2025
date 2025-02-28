import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experiences", "projects", "contact"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
      setActiveSection(id);
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-chineseBlack text-softWhite px-6 md:px-12 py-4 flex items-center justify-between shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center text-2xl font-semibold cursor-pointer" onClick={() => scrollToSection("home")}>
        <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-tealGreen to-greenHover shadow-lg">
          <span className="text-darkBlue text-3xl font-bold">Z</span>
        </div>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 text-lg">
        {["home", "about", "experiences", "projects", "contact"].map((item) => (
          <li
            key={item}
            className={`cursor-pointer transition duration-300 capitalize ${
              activeSection === item
                ? "text-tealGreen border-b-2 border-tealGreen pb-1"
                : "hover:text-tealGreen"
            }`}
            onClick={() => scrollToSection(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      {/* Connect Button */}
      <button
        className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-tealGreen to-greenHover text-darkBlue font-medium cursor-pointer transition-transform duration-500 hover:scale-105 active:scale-95 shadow-md"
        onClick={() => scrollToSection("contact")}
      >
        Connect with Me
      </button>
      {/* Mobile Menu Button */}
      <div
        className="md:hidden cursor-pointer p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-7 h-1 bg-softWhite mb-1 rounded transition-all ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-7 h-1 bg-softWhite mb-1 rounded transition-all ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-7 h-1 bg-softWhite rounded transition-all ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>
      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-16 right-6 bg-darkBlue border border-gray-700 rounded-lg p-4 shadow-lg md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 text-lg">
          {["home", "about", "experiences", "projects", "contact"].map(
            (item) => (
              <li
                key={item}
                className={`cursor-pointer transition duration-300 capitalize ${
                  activeSection === item
                    ? "text-tealGreen border-b-2 border-tealGreen pb-1"
                    : "hover:text-tealGreen"
                }`}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
