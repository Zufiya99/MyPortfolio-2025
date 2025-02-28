import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully!", result.text);
      toast.success("Message sent successfully!", {
        theme: "dark",
      });

      formRef.current.reset(); // Clear form
    } catch (error) {
      console.error("Failed to send email:", error.text);
      toast.error("Failed to send message. Try again.", {
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-chineseBlack text-white py-8 px-6 md:px-12"
    >
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-10">
        Get in Touch
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* Contact Info */}
        <div className="w-full md:w-5/12 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-teal-400 mb-4">
            🤝 Let's Connect & Collaborate
          </h3>
          <p className="text-gray-300 mb-6">
            Whether you have an exciting project idea, need help with web
            development, or just want to discuss tech, I'd love to hear from
            you. Feel free to <strong>reach out anytime</strong> — I'm always
            open to new opportunities, collaborations, and meaningful
            discussions!
          </p>

          <h3 className="text-xl font-semibold text-teal-400 mb-4">
            📍 Where You Can Find Me
          </h3>
          <p className="text-gray-300 mb-6">
            I'm based in <strong>Mumbai, India</strong>, but I work remotely
            with clients worldwide. You can contact me via email, phone, or
            connect on social media.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-teal-400 text-lg" />
              <a
                href="mailto:idrisizufiya@gmail.com"
                className="text-gray-300 hover:text-teal-400 transition duration-300"
              >
                idrisizufiya@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-teal-400 text-lg" />
              <a
                href="tel:+918355932003"
                className="text-gray-300 hover:text-teal-400 transition duration-300"
              >
                +91 8355932003
              </a>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6 mb-4">
            🚀 Let's Connect
          </h3>
          <p className="text-gray-300 mb-4">
            You can also reach out on social media to stay updated with my
            latest projects and tech insights!
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="https://github.com/Zufiya99"
              target="_blank"
              className="text-gray-300 hover:text-teal-400 text-2xl transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/zufiyaidrisi9797"
              target="_blank"
              className="text-gray-300 hover:text-teal-400 text-2xl transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/Zufiya_Idrisi"
              target="_blank"
              className="text-gray-300 hover:text-teal-400 text-2xl transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/_zufi_99_"
              target="_blank"
              className="text-gray-300 hover:text-teal-400 text-2xl transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-6/12">
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">
            Send Me a Message
          </h3>

          <form ref={formRef} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 text-sm mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                className="w-full px-4 py-3 h-32 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-md shadow-md transition duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </section>
  );
};

export default Contact;
