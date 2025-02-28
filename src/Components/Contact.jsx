import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 bg-chineseBlack text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-teal-400">
        Contact Me
      </h2>

      <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded bg-gray-700 border border-gray-600 focus:border-teal-400 focus:outline-none text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded bg-gray-700 border border-gray-600 focus:border-teal-400 focus:outline-none text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded bg-gray-700 border border-gray-600 focus:border-teal-400 focus:outline-none text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 py-2 px-4 rounded text-black font-bold cursor-pointer hover:bg-teal-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="text-center mt-8">
        <p className="text-lg">Connect with me:</p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://github.com/zufiya"
            className="text-teal-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/zufiya"
            className="text-teal-400 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:zufiya@example.com"
            className="text-teal-400 hover:underline"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
